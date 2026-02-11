# AI Translation Reader - React 迁移设计文档

**日期：** 2025-02-07
**版本：** 1.0
**状态：** 已确认

---

## 1. 项目概述

### 1.1 目标

将现有的基于 Python 后端 + 原生 JavaScript 的 AI 翻译阅读器迁移到现代化的 **React + Node.js** 全栈架构，实现以下目标：

- ✅ 无需启动 Python 后端，简化部署流程
- ✅ 支持多设备同步标注数据
- ✅ 优化移动端（iPad/手机）阅读体验
- ✅ 提升性能和可维护性
- ✅ 保留所有现有功能

### 1.2 技术栈

| 层次 | 技术选型 | 理由 |
|------|---------|------|
| **前端框架** | React 18 | 现代化、生态丰富、组件化 |
| **构建工具** | Vite | 极快的开发服务器、热更新秒级 |
| **状态管理** | Zustand | 轻量、零样板、性能优秀 |
| **样式方案** | Tailwind CSS | 保留现有样式、快速开发 |
| **Markdown** | react-markdown | React 生态主流方案 |
| **后端框架** | Express.js | 简单、成熟、生态丰富 |
| **数据存储** | JSON 文件 | 轻量、易于备份、无需数据库 |
| **进程管理** | PM2 | 生产级、自动重启、日志管理 |

---

## 2. 架构设计

### 2.1 项目结构

```
ai-translation-reader/
├── frontend/                     # React 前端
│   ├── src/
│   │   ├── components/          # UI 组件
│   │   │   ├── Layout/
│   │   │   │   ├── Header.jsx
│   │   │   │   ├── Drawer.jsx
│   │   │   │   └── SettingsPanel.jsx
│   │   │   ├── Reader/
│   │   │   │   ├── ChapterContent.jsx
│   │   │   │   ├── AnnotatedParagraph.jsx
│   │   │   │   └── Navigation.jsx
│   │   │   └── Annotation/
│   │   │       ├── AnnotationToolbar.jsx
│   │   │       └── AnnotationMark.jsx
│   │   ├── hooks/               # 自定义 Hooks
│   │   │   ├── useAnnotations.js
│   │   │   ├── useSelection.js
│   │   │   ├── useBreakpoint.js
│   │   │   └── useSwipeGesture.js
│   │   ├── stores/              # Zustand 状态管理
│   │   │   ├── readerStore.js
│   │   │   ├── annotationStore.js
│   │   │   └── uiStore.js
│   │   ├── services/            # API 调用
│   │   │   ├── api.js
│   │   │   └── sync.js
│   │   ├── utils/               # 工具函数
│   │   │   ├── annotationRenderer.js
│   │   │   └── markdown.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── backend/                      # Node.js 后端
│   ├── src/
│   │   ├── routes/
│   │   │   ├── annotations.js   # 标注 API
│   │   │   ├── chapters.js      # 章节 API
│   │   │   └── export.js        # 导出 API
│   │   ├── services/
│   │   │   ├── annotationService.js
│   │   │   ├── chapterService.js
│   │   │   └── backupService.js
│   │   ├── middleware/
│   │   │   ├── errorHandler.js
│   │   │   ├── rateLimit.js
│   │   │   └── validator.js
│   │   ├── utils/
│   │   │   ├── logger.js
│   │   │   └── fileUtils.js
│   │   └── server.js            # Express 主文件
│   ├── data/
│   │   ├── annotations.json
│   │   ├── backups/
│   │   └── chapters/
│   ├── logs/
│   ├── package.json
│   └── .env.example
│
├── package.json                  # 根项目脚本
├── ecosystem.config.js           # PM2 配置
├── migrate.js                    # 数据迁移脚本
└── README.md
```

### 2.2 组件层次结构

```
App
├── ErrorBoundary
│   └── Layout
│       ├── Header
│       │   ├── MenuButton
│       │   ├── Title
│       │   └── SettingsButton
│       ├── Drawer
│       │   ├── ChapterList (虚拟滚动)
│       │   └── ExportButton
│       ├── SettingsPanel
│       │   ├── ModeSelector
│       │   ├── FontSelector
│       │   ├── FontSizeControl
│       │   └── ThemeSelector
│       └── Reader
│           ├── ChapterContent
│           │   └── AnnotatedParagraph[] (React.memo)
│           ├── AnnotationToolbar (Portal)
│           └── Navigation
└── Toast (全局通知)
```

---

## 3. 状态管理

### 3.1 Zustand Store 设计

**readerStore.js - 阅读器状态**
```javascript
{
  // 状态
  currentChapter: 0,
  chapters: [],
  content: '',
  fontSize: 100,
  theme: 'light',
  fontFamily: 'serif',
  mode: 'bilingual',
  isBold: false,

  // Actions
  loadChapters: async () => {},
  setCurrentChapter: (index) => {},
  setFontSize: (size) => {},
  setTheme: (theme) => {},
  setMode: (mode) => {},
  toggleBold: () => {}
}
```

**annotationStore.js - 标注数据**
```javascript
{
  // 状态
  annotations: [],
  isLoading: false,
  isSyncing: false,
  lastSyncTime: null,
  serverTimestamp: null,

  // Actions
  loadAnnotations: async () => {},
  addAnnotation: (annotation) => {},
  updateAnnotation: (id, updates) => {},
  deleteAnnotation: (id) => {},
  syncToServer: async () => {},
  fetchFromServer: async () => {},
  mergeAnnotations: (serverData) => {}
}
```

**uiStore.js - UI 状态**
```javascript
{
  // 状态
  isDrawerOpen: false,
  isSettingsOpen: false,
  toolbarVisible: false,
  toolbarPosition: null,
  breakpoint: 'desktop', // mobile | tablet | desktop

  // Actions
  toggleDrawer: () => {},
  toggleSettings: () => {},
  showToolbar: (position) => {},
  hideToolbar: () => {},
  setBreakpoint: (bp) => {}
}
```

### 3.2 应用 Vercel 最佳实践

- ✅ `rerender-defer-reads` - 事件处理函数不订阅不需要的状态
- ✅ `rerender-derived-state` - 派生状态在组件内计算
- ✅ `rerender-functional-setstate` - 使用函数式 setState 保证稳定性

---

## 4. 后端 API 设计

### 4.1 RESTful 端点

```
GET    /api/annotations              # 获取所有标注
POST   /api/annotations              # 创建新标注
PUT    /api/annotations/:id          # 更新标注
DELETE /api/annotations/:id          # 删除标注
POST   /api/annotations/batch        # 批量保存（全量覆盖）

GET    /api/chapters                 # 获取章节列表
GET    /api/chapters/:filename       # 获取章节内容（Markdown）

GET    /api/export/markdown          # 导出所有标注为 Markdown

GET    /api/health                   # 健康检查
```

### 4.2 数据格式

**annotations.json**
```json
{
  "version": "1.0",
  "lastModified": "2025-02-07T10:30:00.000Z",
  "annotations": [
    {
      "id": "uuid-1234",
      "chapter": "part_01.md",
      "text": "选中的文字",
      "type": "highlight",
      "paraIndex": 5,
      "startOffset": 10,
      "endOffset": 25,
      "createdAt": "2025-02-07T10:00:00.000Z"
    }
  ]
}
```

### 4.3 并发控制

**乐观锁 + 时间戳校验**

```javascript
// 客户端发送
POST /api/annotations/batch
{
  "lastModified": "2025-02-07T10:30:00.000Z",
  "annotations": [...]
}

// 服务器响应
// 成功：200
{
  "success": true,
  "lastModified": "2025-02-07T10:35:00.000Z"
}

// 冲突：409
{
  "error": "conflict",
  "message": "Server has newer data",
  "serverTimestamp": "2025-02-07T10:32:00.000Z",
  "serverAnnotations": [...]
}
```

**客户端处理冲突：**
1. 自动合并（推荐）：按 `id` 去重，保留最新时间戳的
2. 提示用户：显示对比界面，让用户选择

---

## 5. 标注渲染引擎

### 5.1 混合方案（推荐）

**使用 react-markdown + 自定义段落组件**

```javascript
// ChapterContent.jsx
<ReactMarkdown
  components={{
    p: ({ node, children, ...props }) => (
      <AnnotatedParagraph
        paraIndex={paragraphIndex}
        annotations={chapterAnnotations}
        {...props}
      >
        {children}
      </AnnotatedParagraph>
    )
  }}
>
  {markdownContent}
</ReactMarkdown>
```

**AnnotatedParagraph.jsx**
```javascript
const AnnotatedParagraph = React.memo(({ paraIndex, annotations, children }) => {
  const paraRef = useRef(null);

  useLayoutEffect(() => {
    // 在浏览器绘制前应用标注
    const paraAnnotations = annotations.filter(a => a.paraIndex === paraIndex);
    applyAnnotations(paraRef.current, paraAnnotations);
  }, [paraIndex, annotations]);

  return <p ref={paraRef}>{children}</p>;
});
```

**applyAnnotations() - 复用现有逻辑**
```javascript
// 直接迁移 annotations.js 的核心算法
function applyAnnotations(paraElement, annotations) {
  // 1. TreeWalker 遍历文本节点
  // 2. 计算偏移量
  // 3. 使用 Range API 包裹 <span class="annotation-mark">
  // 4. 批量应用样式（CSS class）
}
```

### 5.2 性能优化

- ✅ `React.memo` - 未变化的段落不重新渲染
- ✅ `useLayoutEffect` - 在绘制前应用标注，避免闪烁
- ✅ `requestAnimationFrame` - 批量渲染 100+ 标注
- ✅ `js-batch-dom-css` - 通过 CSS class 批量应用样式

---

## 6. 数据同步策略

### 6.1 同步时机

**主动拉取（Pull）：**
- 应用启动时
- 切换章节时
- 页面重新获得焦点时（`focus` 事件）

**主动推送（Push）：**
- 添加/删除/更新标注后（300ms 防抖）

### 6.2 冲突解决

**自动合并算法：**
```javascript
function mergeAnnotations(local, server) {
  const merged = new Map();

  // 1. 添加所有本地标注
  local.forEach(a => merged.set(a.id, a));

  // 2. 合并服务器标注
  server.forEach(a => {
    const existing = merged.get(a.id);
    if (!existing) {
      // 服务器有，本地没有 → 添加
      merged.set(a.id, a);
    } else if (new Date(a.createdAt) > new Date(existing.createdAt)) {
      // 都有，服务器更新 → 替换
      merged.set(a.id, a);
    }
    // 否则保留本地版本
  });

  return Array.from(merged.values());
}
```

### 6.3 离线支持

**使用 SWR（Stale-While-Revalidate）**
```javascript
import useSWR from 'swr';

const { data, error, mutate } = useSWR('/api/annotations', fetcher, {
  revalidateOnFocus: true,
  revalidateOnReconnect: true,
  dedupingInterval: 2000
});

// 乐观更新
const addAnnotation = async (annotation) => {
  // 1. 立即更新本地
  mutate([...data, annotation], false);

  // 2. 后台同步
  await fetch('/api/annotations', { method: 'POST', body: JSON.stringify(annotation) });

  // 3. 重新验证
  mutate();
};
```

---

## 7. 移动端优化

### 7.1 响应式断点

```javascript
// Tailwind 断点
mobile:   < 640px   (手机)
tablet:   640-1024px (iPad)
desktop:  > 1024px  (桌面)

// 动态检测
const breakpoint = useBreakpoint();
```

### 7.2 触摸选择优化

**问题：** 移动端文本选择工具栏定位困难

**解决方案：**
- **手机**：工具栏固定在底部（`position: fixed; bottom: 20px`）
- **iPad**：工具栏浮动在选区上方（类似桌面）
- **延迟时间**：移动端 500ms，桌面 200ms

```javascript
const calculateToolbarPosition = (rect) => {
  if (breakpoint === 'mobile') {
    return { position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)' };
  } else {
    return { position: 'absolute', left: rect.centerX, top: rect.top - 60 };
  }
};
```

### 7.3 手势支持

**左右滑动切换章节**
```javascript
const swipeHandlers = useSwipeGesture({
  onSwipeLeft: () => nextChapter(),
  onSwipeRight: () => prevChapter(),
  minDistance: 50
});

<div {...swipeHandlers}>
  <ChapterContent />
</div>
```

### 7.4 iPad 特殊优化

**横屏双栏布局**
```css
@media (min-width: 1024px) and (orientation: landscape) {
  .mode-bilingual .markdown-body {
    column-count: 2;
    column-gap: 3rem;
  }
}
```

**分屏检测**
```javascript
const isMultitasking = window.innerWidth < window.screen.width * 0.8;
// 分屏时减小最大宽度
```

### 7.5 PWA 支持

**manifest.json**
```json
{
  "name": "AI Translation Reader",
  "short_name": "Reader",
  "display": "standalone",
  "orientation": "portrait-primary",
  "theme_color": "#2563eb"
}
```

**Service Worker 缓存策略**
- 章节内容：CacheFirst（7天）
- 标注数据：NetworkFirst（优先网络）
- 静态资源：CacheFirst（永久）

**效果：**
- ✅ 添加到主屏幕
- ✅ 离线阅读已缓存章节
- ✅ 沉浸式全屏

### 7.6 性能目标

| 指标 | 手机 | iPad | 桌面 |
|------|------|------|------|
| 首屏加载 | < 2s | < 1.5s | < 1s |
| 章节切换 | < 500ms | < 300ms | < 200ms |
| 标注响应 | < 150ms | < 100ms | < 100ms |
| Bundle 大小 | < 300KB | < 400KB | < 500KB |

---

## 8. 性能优化

### 8.1 Bundle 优化

**代码分割**
```javascript
// 懒加载非关键组件
const SettingsPanel = lazy(() => import('./SettingsPanel'));
const ExportDialog = lazy(() => import('./ExportDialog'));
```

**Tree-shaking**
```javascript
// ❌ 不要
import _ from 'lodash';

// ✅ 使用
import debounce from 'lodash-es/debounce';
```

**第三方库优化**
- DOMPurify：按需加载（首屏后）
- react-markdown：核心功能，无法懒加载
- Phosphor Icons：只引入用到的图标

### 8.2 渲染优化

**虚拟化长列表**
```javascript
// 章节列表 > 50 项时使用虚拟滚动
import { FixedSizeList } from 'react-window';

<FixedSizeList height={600} itemCount={chapters.length} itemSize={60}>
  {ChapterItem}
</FixedSizeList>
```

**批量渲染标注**
```javascript
// 分批渲染 100+ 标注
const applyAnnotationsInBatches = (annotations, batchSize = 10) => {
  const processBatch = (index) => {
    const batch = annotations.slice(index, index + batchSize);
    batch.forEach(applyAnnotation);

    if (index + batchSize < annotations.length) {
      requestAnimationFrame(() => processBatch(index + batchSize));
    }
  };
  processBatch(0);
};
```

**Memo 优化**
```javascript
// 段落组件使用 React.memo
const AnnotatedParagraph = React.memo(({ paraIndex, annotations, children }) => {
  // ...
}, (prevProps, nextProps) => {
  // 自定义比较：只在标注变化时重新渲染
  return prevProps.annotations === nextProps.annotations;
});
```

### 8.3 网络优化

**预加载**
```javascript
<button
  onMouseEnter={() => prefetchChapter(currentIndex + 1)}
  onClick={() => loadChapter(currentIndex + 1)}
>
  下一章
</button>
```

**防抖保存**
```javascript
const debouncedSave = useMemo(
  () => debounce(saveToServer, 300),
  []
);
```

**并行请求**
```javascript
// ✅ 并行加载
const [chapters, annotations] = await Promise.all([
  fetchChapters(),
  fetchAnnotations()
]);
```

### 8.4 应用 Vercel 最佳实践

| 分类 | 应用的规则 |
|------|-----------|
| Bundle | `bundle-dynamic-imports`, `bundle-barrel-imports`, `bundle-defer-third-party` |
| 渲染 | `rendering-content-visibility`, `rerender-memo`, `rendering-hoist-jsx` |
| 异步 | `async-parallel`, `async-defer-await` |
| 客户端 | `client-swr-dedup`, `client-passive-event-listeners` |
| JS 性能 | `js-batch-dom-css`, `js-cache-function-results` |

---

## 9. 错误处理与日志

### 9.1 前端错误边界

```javascript
<ErrorBoundary fallback={<ErrorPage />}>
  <App />
</ErrorBoundary>

// 错误上报到后端
componentDidCatch(error, errorInfo) {
  fetch('/api/logs/error', {
    method: 'POST',
    body: JSON.stringify({ error: error.message, stack: errorInfo })
  });
}
```

### 9.2 API 错误处理

```javascript
const handleApiError = (error) => {
  if (error.message.includes('Failed to fetch')) {
    toast.error('网络连接失败');
  } else if (error.message.includes('409')) {
    toast.warning('数据冲突，请刷新后重试');
  } else {
    toast.error('操作失败');
  }
};
```

### 9.3 后端日志

**使用 Winston**
```javascript
logger.error({ message, stack, path, method, ip });
logger.warn('Rate limit exceeded', { ip });
logger.info('Server started', { port });
```

**日志文件：**
- `logs/error.log` - 错误日志
- `logs/combined.log` - 所有日志
- `logs/access.log` - 访问日志（可选）

### 9.4 数据备份

**自动备份（cron）**
```javascript
// 每天凌晨 2 点备份
cron.schedule('0 2 * * *', () => {
  const timestamp = new Date().toISOString().split('T')[0];
  fs.copyFile(
    './data/annotations.json',
    `./data/backups/annotations-${timestamp}.json`
  );
});

// 保留最近 30 天
```

---

## 10. 部署方案

### 10.1 开发环境

```bash
# 启动开发服务器
npm run dev

# 等同于：
# 前端：vite dev (5173)
# 后端：nodemon server.js (3000)
# Vite 代理 /api -> localhost:3000
```

### 10.2 生产构建

```bash
# 1. 构建前端
npm run build
# 输出：frontend/dist/ → backend/public/

# 2. 启动生产服务器
npm start
# 运行：node backend/server.js
```

### 10.3 PM2 部署

**ecosystem.config.js**
```javascript
module.exports = {
  apps: [{
    name: 'ai-reader',
    script: './backend/server.js',
    instances: 1,
    autorestart: true,
    max_memory_restart: '500M',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
};
```

**部署命令**
```bash
pm2 start ecosystem.config.js
pm2 startup
pm2 save
```

### 10.4 Nginx 反向代理（可选）

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    location ~* \.(js|css|png|jpg|svg|woff2)$ {
        proxy_pass http://localhost:3000;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

---

## 11. 迁移策略

### 11.1 迁移步骤

| 阶段 | 任务 | 时间 | 风险 |
|------|------|------|------|
| 1 | 搭建项目骨架 | 1-2 天 | 低 |
| 2 | 迁移 UI 组件 | 3-4 天 | 低 |
| 3 | 迁移标注逻辑 | 2-3 天 | 中 |
| 4 | 实现后端 API | 1-2 天 | 低 |
| 5 | 数据迁移 | 1 天 | 低 |
| 6 | 测试调试 | 2-3 天 | 中 |
| **总计** | | **10-15 天** | **中低** |

### 11.2 数据迁移脚本

```javascript
// migrate.js
import fs from 'fs';

// 1. 复制标注数据
fs.copyFileSync(
  '../old-project/annotations.json',
  './backend/data/annotations.json'
);

// 2. 复制 Markdown 文件
fs.cpSync(
  '../old-project/*.md',
  './backend/data/chapters/',
  { recursive: true }
);

// 3. 验证数据格式
const data = JSON.parse(fs.readFileSync('./backend/data/annotations.json'));
console.log(`✅ 迁移完成：${data.annotations?.length || 0} 条标注`);
```

### 11.3 数据兼容性

**版本检测和自动升级**
```javascript
const migrations = {
  '1.0': (data) => {
    // 旧版本：直接是数组
    if (Array.isArray(data)) {
      return {
        version: '1.0',
        lastModified: new Date().toISOString(),
        annotations: data
      };
    }
    return data;
  }
};
```

### 11.4 回滚计划

```bash
# 如果迁移失败
pm2 stop ai-reader
cd old-project
python start_reader.py

# 数据已备份，可随时切换回来
```

---

## 12. 测试清单

### 12.1 功能测试

- [ ] 章节加载和显示
- [ ] 章节切换（上一章/下一章）
- [ ] 目录导航
- [ ] 添加高亮标注
- [ ] 添加下划线标注
- [ ] 删除标注
- [ ] 重复标注检测
- [ ] 导出笔记为 Markdown
- [ ] 主题切换（浅色/深色/护眼）
- [ ] 字体切换（宋体/黑体）
- [ ] 字号调整
- [ ] 阅读模式切换（双语/纯净）
- [ ] 阅读进度保存

### 12.2 移动端测试

- [ ] iPhone SE（小屏）：所有按钮可点击
- [ ] iPhone 14 Pro：适配刘海屏
- [ ] iPad（竖屏）：合理的字号和边距
- [ ] iPad（横屏）：双栏布局
- [ ] iPad 分屏：布局适应
- [ ] Safari/Chrome：两种浏览器
- [ ] 触摸选择：准确选中文字
- [ ] 左右滑动：切换章节
- [ ] PWA 安装：添加到主屏幕
- [ ] 离线阅读：缓存章节可访问

### 12.3 性能测试

- [ ] 首屏加载 < 1.5s
- [ ] 章节切换 < 300ms
- [ ] 标注响应 < 100ms
- [ ] Bundle 大小 < 500KB (gzipped)
- [ ] 100+ 标注渲染流畅
- [ ] 长章节（1000+ 段落）无卡顿

### 12.4 安全测试

- [ ] XSS 防护（DOMPurify）
- [ ] 路径遍历防护
- [ ] 速率限制（100 请求/分钟）
- [ ] 并发冲突处理
- [ ] 输入验证（标注长度、字段类型）

---

## 13. 关键风险与缓解

### 13.1 风险清单

| 风险 | 严重程度 | 缓解措施 |
|------|---------|---------|
| 标注渲染不准确 | 高 | 复用现有算法，充分测试 |
| 性能不达标 | 中 | 分批渲染、虚拟化、Memo |
| 数据丢失 | 高 | 自动备份、版本控制 |
| 多设备冲突 | 中 | 乐观锁、自动合并 |
| 移动端体验差 | 中 | 专门优化触摸交互 |

### 13.2 降级方案

如果某些功能无法实现：
- **标注渲染复杂** → 暂时禁用跨节点标注
- **性能不达标** → 限制同时显示的标注数量
- **同步冲突频繁** → 改为手动同步模式

---

## 14. 后续优化（非本次范围）

- [ ] WebSocket 实时同步
- [ ] 用户认证系统
- [ ] 多用户协作
- [ ] Apple Pencil 手写标注
- [ ] 语音朗读
- [ ] AI 摘要生成
- [ ] 标注搜索功能
- [ ] 标注颜色自定义

---

## 15. 总结

本设计文档完整定义了从 Python + 原生 JS 迁移到 React + Node.js 的技术方案，核心要点：

1. **技术栈现代化**：React + Vite + Zustand + Express
2. **多设备同步**：基于时间戳的乐观锁 + 自动合并
3. **移动端优先**：响应式设计、触摸优化、PWA 支持
4. **性能优化**：代码分割、虚拟化、批量渲染
5. **可靠性保证**：错误处理、日志系统、自动备份
6. **平滑迁移**：分阶段实施，保留现有数据

预计工作量：**10-15 天**
迁移风险：**中低**
预期收益：**显著提升开发效率和用户体验**

---

**文档版本：** 1.0
**最后更新：** 2025-02-07
**审核状态：** ✅ 已确认
