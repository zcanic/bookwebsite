# PDF分段翻译工具 - 使用指南

**版本**: 1.0.0 (生产就绪)
**作者**: Claude Code
**最后更新**: 2026-02-06

---

## 📋 目录

- [功能特点](#功能特点)
- [快速开始](#快速开始)
- [安装依赖](#安装依赖)
- [使用方法](#使用方法)
- [参数说明](#参数说明)
- [工作流程](#工作流程)
- [常见问题](#常见问题)
- [高级用法](#高级用法)

---

## 🎯 功能特点

### ✨ 核心功能

- ✅ **智能上下文翻译** - 前后文各N页（默认2页）作为参考，确保术语一致性
- ✅ **4级智能降级策略** - 自动应对错误，从不轻易失败
- ✅ **后期补充模式** - 针对性重译失败段落，无需重新翻译整个PDF
- ✅ **强制JSON输出** - 自动验证格式，不合规自动重试
- ✅ **段落级中英对照** - 生成易读的Markdown文档
- ✅ **完全免费** - 使用本地Claude Code CLI，无API费用

### 🎯 翻译质量保证

- 📖 **精准的读者定位** - 为PM和技术管理者优化，专业但不生涩
- 🔍 **处理不完整句子** - 自动参考前后文理解完整含义
- 📝 **术语一致性** - 确保同一术语在全文翻译一致
- 🛡️ **忠实原文** - 准确传达所有技术信息，不过度意译

---

## 🚀 快速开始

### 3步开始翻译

```bash
# Step 1: 安装依赖
pip install PyMuPDF

# Step 2: 运行翻译
python pdf_translator_cli.py "你的文件.pdf" --claude-cmd "/c/Users/你的用户名/.local/bin/claude.exe"

# Step 3: 查看结果
cd "你的文件_translated_cli"
ls *.md
```

**预计时间**: 200页PDF约30-50分钟

---

## 🛠️ 安装依赖

### 必需依赖

```bash
# Python依赖
pip install PyMuPDF
```

### Claude Code CLI

Claude Code CLI应该已经安装（你正在使用中）。验证安装：

```bash
# Windows (Git Bash)
"/c/Users/你的用户名/.local/bin/claude.exe" --version

# 或者添加到PATH后
claude --version
```

**Claude CLI位置**（通常在以下位置之一）：
- `C:\Users\你的用户名\.local\bin\claude.exe`
- `C:\Users\你的用户名\.antigravity\extensions\anthropic.claude-code-*\resources\native-binary\claude.exe`

---

## 📖 使用方法

### 基础用法

```bash
# 最简单的用法（需要claude在PATH中）
python pdf_translator_cli.py "document.pdf"

# 指定Claude CLI完整路径（推荐）
python pdf_translator_cli.py "document.pdf" --claude-cmd "/c/Users/13501/.local/bin/claude.exe"
```

### 自定义参数

```bash
# 每15页一段，前后各3页上下文
python pdf_translator_cli.py "document.pdf" --claude-cmd "..." -p 15 -c 3

# 快速翻译，无上下文
python pdf_translator_cli.py "document.pdf" --claude-cmd "..." -c 0

# 最小上下文（前后各1页）
python pdf_translator_cli.py "document.pdf" --claude-cmd "..." -c 1
```

### 后期补充模式

```bash
# 首次翻译后，如果有失败的段落
python pdf_translator_cli.py "document.pdf" --claude-cmd "..." --retry-failed

# 调整参数后重试失败段落
python pdf_translator_cli.py "document.pdf" --claude-cmd "..." -p 5 -c 1 --retry-failed
```

---

## ⚙️ 参数说明

| 参数 | 简写 | 类型 | 默认值 | 说明 |
|------|------|------|--------|------|
| `pdf_path` | - | 必需 | - | PDF文件路径 |
| `--pages` | `-p` | int | 10 | 每段翻译的页数 |
| `--context` | `-c` | int | 2 | **前后文各自的上下文页数** |
| `--claude-cmd` | - | str | claude | Claude CLI命令或完整路径 |
| `--retry-failed` | - | flag | False | 后期补充模式（重译失败段落） |

### 🔍 `-c` 参数详解

**重要**: `-c N` 表示前文N页 + 后文N页 = 总共2N页上下文

| 参数值 | 前文 | 后文 | 总上下文 | 适用场景 |
|--------|------|------|----------|----------|
| `-c 0` | 0页 | 0页 | 0页 | 快速翻译，不需要上下文 |
| `-c 1` | 1页 | 1页 | 2页 | 轻量上下文 |
| `-c 2` | 2页 | 2页 | 4页 | **默认推荐** |
| `-c 3` | 3页 | 3页 | 6页 | 术语密集的专业文档 |
| `-c 5` | 5页 | 5页 | 10页 | 最大上下文（可能遇到长度限制） |

**示例**：
```bash
# 翻译第11-20页时，使用 -c 2
前文上下文: 第9-10页（2页）
待翻译内容: 第11-20页（10页）
后文上下文: 第21-22页（2页）
```

---

## 📊 工作流程

### 正常翻译模式

```
┌─────────────────────────────────────────────────────┐
│  处理第N段 (例如第11-20页)                           │
├─────────────────────────────────────────────────────┤
│                                                     │
│  [1/5] 提取当前段文本 (第11-20页)                   │
│  [2/5] 提取前文上下文 (第9-10页，-c 2)              │
│  [3/5] 提取后文上下文 (第21-22页，-c 2)             │
│  [4/5] 调用Claude翻译                               │
│        ├─ 策略1: 完整上下文 (前10000+后10000字符)   │
│        ├─ 策略2: 减半上下文 (前5000+后5000字符)     │
│        ├─ 策略3: 仅前文上下文 (5000字符)            │
│        └─ 策略4: 无上下文 (兜底)                    │
│  [5/5] 生成双语Markdown文档                        │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### 后期补充模式

```
🔍 扫描输出目录
  ↓
📋 发现 failed_chunk_3.txt, failed_chunk_7.txt
  ↓
🔧 逐个重新翻译失败段落
  ├─ 从文件读取：当前文本、前文上下文、后文上下文
  ├─ 使用4级降级策略翻译
  ├─ 成功后生成MD文件
  └─ 将failed_chunk_X.txt重命名为.bak
  ↓
📊 输出统计报告
```

---

## 📁 输出结果

### 文件结构

```
你的PDF文件_translated_cli/
├── README.md                        # 总索引
├── part_01_pages_1-10.md           # 第1-10页（中英对照）
├── part_02_pages_11-20.md          # 第11-20页
├── part_03_pages_21-30.md          # 第21-30页
├── failed_chunk_5.txt              # 失败的段落（如果有）
└── failed_chunk_5.txt.bak          # 已补充成功的备份
```

### Markdown文件格式

```markdown
# 文档标题 - 第1部分

**原始页码**: 1 - 10
**段落数量**: 15
**翻译工具**: Claude Code CLI

## 📖 翻译策略和上下文信息

- **使用的翻译策略**: 完整上下文
- **前文上下文页码**: 无 (0 字符)
- **后文上下文页码**: 11-12 (6379 字符)

*注：翻译时已使用"完整上下文"策略，参考前后文上下文以确保术语一致性和内容连贯性*

---

Artificial Intelligence (AI) has become increasingly important...

**【译文】** 人工智能（AI）在现代企业系统中变得越来越重要...

---

The integration of AI capabilities enables businesses...

**【译文】** AI能力的集成使企业能够自动化复杂的决策过程...

---
```

---

## 🔧 常见问题

### Q1: 提示"未找到Claude Code CLI命令"

**解决方案**：
```bash
# 方法1: 使用完整路径
python pdf_translator_cli.py "file.pdf" --claude-cmd "/c/Users/13501/.local/bin/claude.exe"

# 方法2: 查找claude.exe位置
find /c/Users/13501 -name "claude.exe" 2>/dev/null
```

### Q2: 翻译失败，提示"文件名或扩展名太长"

**原因**: Windows命令行参数长度限制

**解决方案**:
- ✅ 已自动修复！脚本会自动降级到更短的上下文
- 或手动减少上下文：`-c 1` 或 `-c 0`

### Q3: JSON格式验证失败

**原因**: Claude偶尔返回非JSON格式

**解决方案**:
- ✅ 脚本会自动重试3次
- 如果持续失败，会自动尝试下一个降级策略
- 失败的内容会保存到`failed_chunk_X.txt`

### Q4: 想查看失败的段落内容

```bash
# 查看失败文件
cat "输出目录/failed_chunk_3.txt"

# 文件包含：
# - 当前文本（待翻译）
# - 前文上下文
# - 后文上下文
```

### Q5: 翻译速度太慢

**优化建议**：
```bash
# 减少每段页数
python pdf_translator_cli.py "file.pdf" --claude-cmd "..." -p 5

# 减少上下文
python pdf_translator_cli.py "file.pdf" --claude-cmd "..." -c 1
```

### Q6: 如何验证上下文是否生效？

打开任意生成的MD文件，查看顶部"翻译策略和上下文信息"部分：
- 显示实际使用的策略（完整上下文/减半上下文/等）
- 显示前后文页码和字符数
- 字符数为0说明无上下文（第一段/最后一段）

---

## 🎯 高级用法

### 场景1: 首次翻译 + 补充失败段落

```bash
# Step 1: 首次全量翻译
python pdf_translator_cli.py "book.pdf" --claude-cmd "/c/Users/13501/.local/bin/claude.exe"

# 输出：
# ✅ 成功翻译: 18 段
# ❌ 已保存失败内容到: failed_chunk_3.txt, failed_chunk_11.txt

# Step 2: 补充翻译失败段落
python pdf_translator_cli.py "book.pdf" --claude-cmd "/c/Users/13501/.local/bin/claude.exe" --retry-failed

# 输出：
# 📋 发现 2 个失败的段落文件
# ✅ 成功翻译: 2 段
# 🎉 所有失败的段落都已成功翻译！
```

### 场景2: 大文档分段处理

```bash
# 较大的段落，减少上下文避免超限
python pdf_translator_cli.py "large.pdf" --claude-cmd "..." -p 15 -c 1

# 或完全无上下文（最快）
python pdf_translator_cli.py "large.pdf" --claude-cmd "..." -p 20 -c 0
```

### 场景3: 专业术语密集文档

```bash
# 增加上下文，确保术语一致性
python pdf_translator_cli.py "technical.pdf" --claude-cmd "..." -p 8 -c 3
```

### 场景4: 测试翻译质量

```bash
# 先翻译前20页测试
python pdf_translator_cli.py "test.pdf" --claude-cmd "..." -p 10

# 翻译2段后按 Ctrl+C 停止
# 检查 part_01_pages_1-10.md 和 part_02_pages_11-20.md

# 满意后全量翻译
python pdf_translator_cli.py "full.pdf" --claude-cmd "..."
```

---

## 💰 成本和性能

### 完全免费
- ✅ 使用本地Claude Code CLI
- ✅ 无API调用费用
- ✅ 无使用限制

### 预计时间（200页PDF）

| 配置 | 每10页耗时 | 总耗时 |
|------|-----------|--------|
| 标准配置 (`-p 10 -c 2`) | 1-2分钟 | 20-40分钟 |
| 快速配置 (`-p 15 -c 0`) | 1-1.5分钟 | 15-25分钟 |
| 高质量配置 (`-p 8 -c 3`) | 2-3分钟 | 40-60分钟 |

---

## 🎯 推荐配置

### 标准技术文档（推荐）
```bash
python pdf_translator_cli.py "book.pdf" --claude-cmd "..." -p 10 -c 2
```
- 平衡质量和速度
- 适合大多数技术文档

### 专业学术论文
```bash
python pdf_translator_cli.py "paper.pdf" --claude-cmd "..." -p 8 -c 3
```
- 更多上下文，术语更一致
- 适合术语密集的文档

### 快速翻译
```bash
python pdf_translator_cli.py "quick.pdf" --claude-cmd "..." -p 15 -c 1
```
- 减少上下文，提高速度
- 适合简单文档或时间紧迫

---

## 📞 技术支持

### 日志文件

翻译过程中的所有日志会输出到终端，包括：
- 当前处理的段落
- 提取的文本字符数
- 使用的翻译策略
- 成功/失败状态

### 调试建议

1. **查看详细输出** - 终端会显示每步详细信息
2. **检查失败文件** - `failed_chunk_X.txt` 包含完整上下文
3. **验证上下文** - MD文件顶部显示实际使用的上下文
4. **尝试降级** - 如果失败，尝试减少 `-p` 或 `-c` 参数

---

## 🎉 开始翻译

```bash
# 一键启动
cd D:/资源
python pdf_translator_cli.py "Embedding Artificial Intelligence into ERP Software A Conceptual View on Business AI with Examples from SAP S4HANA (Siar Sarferaz) (z-library.sk, 1lib.sk, z-lib.sk).pdf" --claude-cmd "/c/Users/13501/.local/bin/claude.exe"
```

**祝翻译愉快！** 🚀

---

## 📋 附录：完整参数列表

```bash
python pdf_translator_cli.py --help

Usage: pdf_translator_cli.py [-h] [-p PAGES] [-c CONTEXT]
                              [--claude-cmd CLAUDE_CMD]
                              [--retry-failed]
                              pdf_path

PDF分段翻译工具 - Claude Code CLI版本

positional arguments:
  pdf_path              PDF文件路径

optional arguments:
  -h, --help            显示帮助信息
  -p PAGES, --pages PAGES
                        每段页数 (默认: 10)
  -c CONTEXT, --context CONTEXT
                        前后文各自的上下文页数 (默认: 2，即前2页+后2页=共4页上下文。可设为0-10)
  --claude-cmd CLAUDE_CMD
                        Claude Code CLI命令 (默认: claude)
  --retry-failed        后期补充模式：只重新翻译之前失败的段落（基于failed_chunk_*.txt文件）

示例:
  python pdf_translator_cli.py "document.pdf"
  python pdf_translator_cli.py "document.pdf" -p 15 -c 3
  python pdf_translator_cli.py "document.pdf" --claude-cmd "path/to/claude"
```
