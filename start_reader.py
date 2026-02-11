import http.server
import socketserver
import socket
import webbrowser
import os
import sys
import re
import json
import logging
import tempfile
import time
from pathlib import Path
from collections import defaultdict

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Configuration
PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))
FILE_LIST_JS = "file_list.js"
ANNOTATIONS_FILE = "annotations.json"
MAX_PAYLOAD_SIZE = 5 * 1024 * 1024  # 5MB
MAX_ANNOTATIONS = 10000
MAX_TEXT_LENGTH = 10000
RATE_LIMIT_REQUESTS = 100  # Max requests per window
RATE_LIMIT_WINDOW = 60     # Time window in seconds
DEBUG = os.getenv('DEBUG', 'false').lower() == 'true'

# CORS allowed origins
ALLOWED_ORIGINS = [
    f'http://localhost:{PORT}',
    f'http://127.0.0.1:{PORT}',
]

def get_ip_addresses():
    """Get all non-loopback IP addresses."""
    ip_list = []
    try:
        # Method 1: Get host name IPs
        hostname = socket.gethostname()
        for ip in socket.gethostbyname_ex(hostname)[2]:
            if not ip.startswith("127."):
                ip_list.append(ip)
    except (socket.error, OSError) as e:
        logger.debug(f"Failed to get IP via hostname: {e}")

    try:
        # Method 2: Connect to external server to find preferred interface
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(('8.8.8.8', 80))
        ip = s.getsockname()[0]
        s.close()
        if ip not in ip_list and not ip.startswith("127."):
            ip_list.append(ip)
    except (socket.error, OSError) as e:
        logger.debug(f"Failed to get IP via socket connection: {e}")

    return list(set(ip_list))

def get_allowed_origins():
    """Dynamically generate allowed origins list including LAN IPs."""
    origins = ALLOWED_ORIGINS.copy()
    ips = get_ip_addresses()
    for ip in ips:
        origins.append(f'http://{ip}:{PORT}')
    return origins

class RateLimiter:
    """Simple rate limiter to prevent API abuse."""
    def __init__(self, max_requests=RATE_LIMIT_REQUESTS, window=RATE_LIMIT_WINDOW):
        self.requests = defaultdict(list)
        self.max_requests = max_requests
        self.window = window

    def is_allowed(self, client_ip):
        """Check if client IP is allowed to make a request."""
        now = time.time()

        # Clean up expired records
        self.requests[client_ip] = [
            req_time for req_time in self.requests[client_ip]
            if now - req_time < self.window
        ]

        # Check if rate limit exceeded
        if len(self.requests[client_ip]) >= self.max_requests:
            return False

        # Record this request
        self.requests[client_ip].append(now)
        return True

def validate_annotation_data(data):
    """
    Validate annotation data structure and content.
    Raises ValueError if validation fails.
    """
    if not isinstance(data, list):
        raise ValueError("Data must be a list")

    if len(data) > MAX_ANNOTATIONS:
        raise ValueError(f"Too many annotations (max: {MAX_ANNOTATIONS})")

    required_fields = ['id', 'chapter', 'text', 'type', 'paraIndex', 'startOffset', 'endOffset']
    valid_types = ['highlight', 'underline']

    for i, item in enumerate(data):
        if not isinstance(item, dict):
            raise ValueError(f"Item {i} is not a dictionary")

        # Check required fields
        missing_fields = [field for field in required_fields if field not in item]
        if missing_fields:
            raise ValueError(f"Item {i} missing fields: {missing_fields}")

        # Validate type
        if item['type'] not in valid_types:
            raise ValueError(f"Item {i} has invalid type: {item['type']}")

        # Validate text length
        if not isinstance(item['text'], str):
            raise ValueError(f"Item {i} text must be string")

        if len(item['text']) > MAX_TEXT_LENGTH:
            raise ValueError(f"Item {i} text too long (max: {MAX_TEXT_LENGTH})")

        # Validate chapter field (prevent path traversal)
        chapter = item.get('chapter', '')
        if not isinstance(chapter, str):
            raise ValueError(f"Item {i} chapter must be string")

        if '..' in chapter or chapter.startswith('/') or '\\' in chapter:
            raise ValueError(f"Item {i} has invalid chapter path: {chapter}")

        if chapter and not chapter.endswith('.md'):
            raise ValueError(f"Item {i} chapter must be .md file")

        # Verify path doesn't escape directory
        if chapter:
            safe_path = os.path.join(DIRECTORY, chapter)
            real_path = os.path.realpath(safe_path)
            if not real_path.startswith(os.path.realpath(DIRECTORY)):
                raise ValueError(f"Item {i} chapter path escapes directory")

        # Validate numeric fields
        if not isinstance(item['paraIndex'], int) or item['paraIndex'] < 0:
            raise ValueError(f"Item {i} paraIndex must be non-negative integer")

        if not isinstance(item['startOffset'], int) or item['startOffset'] < 0:
            raise ValueError(f"Item {i} startOffset must be non-negative integer")

        if not isinstance(item['endOffset'], int) or item['endOffset'] <= item['startOffset']:
            raise ValueError(f"Item {i} endOffset must be greater than startOffset")

    return True

def save_annotations_safely(data, filepath):
    """
    Safely save annotations with atomic write and backup.
    """
    # Create backup if file exists
    if os.path.exists(filepath):
        backup_path = filepath + '.backup'
        try:
            import shutil
            shutil.copy2(filepath, backup_path)
            logger.info(f"Created backup: {backup_path}")
        except Exception as e:
            logger.warning(f"Failed to create backup: {e}")

    # Write to temporary file first
    temp_fd, temp_path = tempfile.mkstemp(dir=DIRECTORY, suffix='.json')
    try:
        with os.fdopen(temp_fd, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)

        # Atomic replace (works on both Unix and Windows)
        if os.name == 'nt':  # Windows
            # On Windows, need to remove target first
            if os.path.exists(filepath):
                os.remove(filepath)
        os.replace(temp_path, filepath)
        logger.info(f"Saved {len(data)} annotations")

    except Exception as e:
        # Clean up temp file on error
        try:
            os.remove(temp_path)
        except:
            pass
        raise e

def generate_file_list():
    """Scans current directory for MD files and updates file_list.js."""
    print("🔍 正在扫描当前目录下的 Markdown 文件...")

    md_files = [f for f in os.listdir(DIRECTORY) if f.lower().endswith('.md')]

    if not md_files:
        print("⚠️ 警告: 当前目录下没有找到 .md 文件！")
        return

    # Logic to sort files intelligently
    # 1. README/Guide goes first
    # 2. Parts go numerically (part_1, part_2, part_10...)
    # 3. Others go alphabetically

    sorted_files = []

    # 1. Find README/Guide
    readmes = [f for f in md_files if 'readme' in f.lower() or '指南' in f]
    readmes.sort() # In case there are multiple, predictable order

    # 2. Find parts (part_XX...)
    parts = []
    others = []

    for f in md_files:
        if f in readmes:
            continue

        # Try to extract part number for sorting
        match = re.search(r'part_(\d+)', f.lower())
        if match:
            parts.append((int(match.group(1)), f))
        else:
            others.append(f)

    # Sort parts by number
    parts.sort(key=lambda x: x[0])
    parts = [x[1] for x in parts]

    # Sort others alphabetically
    others.sort()

    # Combine all
    final_list = readmes + parts + others

    # Create the JS object structure
    js_files = []
    for f in final_list:
        title = f
        # Beautify title
        if 'readme' in f.lower() or '指南' in f:
            title = "📚 使用指南"
        else:
            # Try to make "part_01_pages_1-3.md" look like "第1部分 (页1-3)"
            part_match = re.search(r'part_(\d+)_pages_(\d+-\d+)', f)
            if part_match:
                p_num = int(part_match.group(1))
                pages = part_match.group(2)
                title = f"第{p_num}部分 (页{pages})"
            else:
                title = f.replace('.md', '').replace('_', ' ')

        js_files.append({"title": title, "path": f})

    # Write to file_list.js
    js_content = f"""// Auto-generated by start_reader.py
const bookConfig = {{
    title: "AI Translation Reader",
    files: {json.dumps(js_files, ensure_ascii=False, indent=4)}
}};
"""

    with open(os.path.join(DIRECTORY, FILE_LIST_JS), 'w', encoding='utf-8') as f:
        f.write(js_content)

    print(f"✅ 已自动更新文件列表，共找到 {len(final_list)} 个章节")

class CORSRequestHandler(http.server.SimpleHTTPRequestHandler):
    """Serve files with CORS headers and handle API requests."""

    def send_json_response(self, status, data):
        """Helper method to send JSON responses with CORS headers."""
        self.send_response(status)
        self.send_header('Content-type', 'application/json')

        # Check origin against whitelist
        origin = self.headers.get('Origin')
        allowed = get_allowed_origins()
        if origin in allowed:
            self.send_header('Access-Control-Allow-Origin', origin)

        self.end_headers()

        if isinstance(data, (dict, list)):
            self.wfile.write(json.dumps(data, ensure_ascii=False).encode('utf-8'))
        else:
            self.wfile.write(str(data).encode('utf-8'))

    def do_GET(self):
        # API: Get annotations
        if self.path == '/api/annotations':
            logger.info(f"GET /api/annotations from {self.client_address[0]}")

            try:
                if os.path.exists(os.path.join(DIRECTORY, ANNOTATIONS_FILE)):
                    with open(os.path.join(DIRECTORY, ANNOTATIONS_FILE), 'r', encoding='utf-8') as f:
                        data = json.load(f)
                        self.send_json_response(200, data)
                else:
                    self.send_json_response(200, [])
            except Exception as e:
                logger.error(f"Error reading annotations: {e}")
                self.send_json_response(500, {"status": "error", "message": "Failed to read annotations"})
            return

        # Default behavior for files
        super().do_GET()

    def do_POST(self):
        # API: Save annotations
        if self.path == '/api/annotations':
            logger.info(f"POST /api/annotations from {self.client_address[0]}")

            # Rate limiting check
            if not rate_limiter.is_allowed(self.client_address[0]):
                logger.warning(f"Rate limit exceeded for {self.client_address[0]}")
                self.send_json_response(429, {
                    "status": "error",
                    "message": "Too many requests. Please try again later."
                })
                return

            try:
                # Check content length
                content_length = int(self.headers.get('Content-Length', 0))

                if content_length > MAX_PAYLOAD_SIZE:
                    logger.warning(f"Payload too large: {content_length} bytes")
                    self.send_json_response(413, {
                        "status": "error",
                        "message": f"Payload too large (max: {MAX_PAYLOAD_SIZE} bytes)"
                    })
                    return

                # Read and parse data
                post_data = self.rfile.read(content_length)
                data = json.loads(post_data.decode('utf-8'))

                # Validate data
                validate_annotation_data(data)

                # Save safely
                filepath = os.path.join(DIRECTORY, ANNOTATIONS_FILE)
                save_annotations_safely(data, filepath)

                self.send_json_response(200, {"status": "success", "count": len(data)})

            except json.JSONDecodeError as e:
                logger.error(f"Invalid JSON: {e}")
                message = f"Invalid JSON: {str(e)}" if DEBUG else "Invalid request format"
                self.send_json_response(400, {
                    "status": "error",
                    "message": message
                })
            except ValueError as e:
                logger.error(f"Validation error: {e}")
                message = f"Validation error: {str(e)}" if DEBUG else "Invalid data format"
                self.send_json_response(400, {
                    "status": "error",
                    "message": message
                })
            except Exception as e:
                logger.error(f"Server error: {e}")
                self.send_json_response(500, {
                    "status": "error",
                    "message": "Internal server error"
                })
            return

    def do_OPTIONS(self):
        self.send_response(200)

        # Check origin against whitelist
        origin = self.headers.get('Origin')
        allowed = get_allowed_origins()
        if origin in allowed:
            self.send_header('Access-Control-Allow-Origin', origin)

        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        # CSP removed - too restrictive for CDN-based architecture
        super().end_headers()

    def log_message(self, format, *args):
        """Override to use logger instead of stderr."""
        logger.info(f"{self.client_address[0]} - {format % args}")

def main():
    # Ensure we are serving from the correct directory
    os.chdir(DIRECTORY)

    # AUTO-GENERATE FILE LIST
    generate_file_list()

    # Initialize global rate limiter
    global rate_limiter
    rate_limiter = RateLimiter()

    ips = get_ip_addresses()
    local_url = f"http://localhost:{PORT}/index.html"

    print("\n" + "="*60)
    print(" 📖  AI Markdown Reader Server (Auto-Discovery Mode)")
    print("="*60)
    print(f"\n✅ 服务已启动！")
    print(f"\n📱 \033[1;32m手机/平板访问地址:\033[0m")

    if not ips:
        print(f"   ⚠️ 未检测到局域网IP，请检查电脑是否连接WiFi")

    for ip in ips:
        print(f"   👉 http://{ip}:{PORT}/index.html")

    print(f"\n💻 电脑本地访问:")
    print(f"   {local_url}")
    print("\n" + "-"*60)
    print("现在你可以随意添加 .md 文件到此目录，")
    print("只需重启此脚本，列表就会自动更新！")
    print(f"\n📝 标注数据保存位置: {os.path.join(DIRECTORY, ANNOTATIONS_FILE)}")
    print("-"*60 + "\n")

    # Open browser automatically
    webbrowser.open(local_url)

    # Allow reuse address
    socketserver.TCPServer.allow_reuse_address = True

    # Start Server
    with socketserver.TCPServer(("0.0.0.0", PORT), CORSRequestHandler) as httpd:
        try:
            logger.info(f"Server started on port {PORT}")
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n🛑 Server stopped.")
            logger.info("Server stopped by user")

if __name__ == "__main__":
    main()
