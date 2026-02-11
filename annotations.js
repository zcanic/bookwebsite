/**
 * 划线速记功能模块
 * 支持高亮、下划线标注，优先适配移动端
 *
 * v2.0 - 修复了渲染、定位、删除等关键问题
 */

// 配置常量
const CONFIG = {
    SELECTION_DELAY_DESKTOP: 100,
    SELECTION_DELAY_MOBILE: 300,
    RENDER_DELAY: 100,
    TOAST_DURATION: 3000,
    MAX_ANNOTATION_LENGTH: 5000
};

class AnnotationManager {
    constructor() {
        this.annotations = [];
        this.currentChapter = null;
        this.toolbar = null;
        this.selectionTimeout = null;
        this.boundHandlers = {};

        this.init();
    }

    async init() {
        await this.loadAnnotations();
        this.createToolbar();
        this.bindEvents();
    }

    // ========== 数据管理 ==========

    async loadAnnotations() {
        try {
            const response = await fetch('/api/annotations');
            if (!response.ok) throw new Error('Failed to load');
            this.annotations = await response.json();
        } catch (error) {
            console.warn('Failed to load annotations:', error);
            this.annotations = [];
        }
    }

    async saveAnnotations() {
        try {
            const response = await fetch('/api/annotations', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.annotations)
            });

            if (!response.ok) {
                throw new Error('Server returned error');
            }

            this.showNotification('保存成功', 'success');
        } catch (error) {
            console.error('Failed to save annotations:', error);
            this.showNotification('保存失败，请检查服务是否运行', 'error');
        }
    }

    // ========== UI 组件 ==========

    createToolbar() {
        this.toolbar = document.createElement('div');
        this.toolbar.id = 'annotation-toolbar';
        this.toolbar.className = 'fixed z-[100] bg-gray-900 text-white rounded-xl shadow-2xl flex gap-1 p-2 opacity-0 pointer-events-none transition-all duration-200';
        this.toolbar.style.transform = 'translateY(-10px)';

        this.toolbar.innerHTML = `
            <button data-action="highlight" class="toolbar-btn bg-yellow-400 text-gray-900 hover:bg-yellow-500" title="高亮">
                <i class="ph ph-highlighter-circle text-xl"></i>
            </button>
            <button data-action="underline" class="toolbar-btn bg-red-400 text-white hover:bg-red-500" title="下划线">
                <i class="ph ph-text-underline text-xl"></i>
            </button>
            <button data-action="delete" class="toolbar-btn bg-gray-700 hover:bg-gray-600" title="删除">
                <i class="ph ph-trash text-xl"></i>
            </button>
        `;

        document.body.appendChild(this.toolbar);

        // 工具栏按钮事件
        this.toolbar.querySelectorAll('.toolbar-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const action = btn.dataset.action;
                this.handleAction(action);
            });
        });
    }

    showToolbar(x, y) {
        this.toolbar.style.left = `${x}px`;
        this.toolbar.style.top = `${y}px`;
        this.toolbar.classList.remove('opacity-0', 'pointer-events-none');
        this.toolbar.style.transform = 'translateY(0)';
    }

    hideToolbar() {
        this.toolbar.classList.add('opacity-0', 'pointer-events-none');
        this.toolbar.style.transform = 'translateY(-10px)';
    }

    showNotification(message, type = 'info') {
        const toast = document.createElement('div');
        const bgColor = type === 'error' ? 'bg-red-500' :
                        type === 'success' ? 'bg-green-500' : 'bg-blue-500';

        toast.className = `fixed bottom-4 right-4 px-6 py-3 rounded-xl shadow-lg z-[200] transition-all ${bgColor} text-white`;
        toast.textContent = message;
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';

        document.body.appendChild(toast);

        // 动画进入
        requestAnimationFrame(() => {
            toast.style.opacity = '1';
            toast.style.transform = 'translateY(0)';
        });

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(20px)';
            setTimeout(() => toast.remove(), 300);
        }, CONFIG.TOAST_DURATION);
    }

    // ========== 事件绑定 ==========

    bindEvents() {
        // 桌面端：鼠标松开
        this.boundHandlers.mouseup = (e) => {
            clearTimeout(this.selectionTimeout);
            this.selectionTimeout = setTimeout(() => this.onSelectionChange(e), CONFIG.SELECTION_DELAY_DESKTOP);
        };

        // 移动端：触摸结束
        this.boundHandlers.touchend = (e) => {
            clearTimeout(this.selectionTimeout);
            this.selectionTimeout = setTimeout(() => this.onSelectionChange(e), CONFIG.SELECTION_DELAY_MOBILE);
        };

        // 点击其他地方隐藏工具栏
        this.boundHandlers.mousedown = (e) => {
            if (!this.toolbar.contains(e.target)) {
                this.hideToolbar();
            }
        };

        this.boundHandlers.touchstart = (e) => {
            if (!this.toolbar.contains(e.target)) {
                this.hideToolbar();
            }
        };

        // 注册事件
        document.addEventListener('mouseup', this.boundHandlers.mouseup);
        document.addEventListener('touchend', this.boundHandlers.touchend);
        document.addEventListener('mousedown', this.boundHandlers.mousedown);
        document.addEventListener('touchstart', this.boundHandlers.touchstart);
    }

    onSelectionChange(event) {
        const selection = window.getSelection();
        const selectedText = selection.toString().trim();

        if (!selectedText || selectedText.length < 2) {
            this.hideToolbar();
            return;
        }

        // 确保选区在内容区域内
        const contentEl = document.getElementById('content');
        if (!contentEl || !contentEl.contains(selection.anchorNode)) {
            return;
        }

        // 计算工具栏位置
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();

        let x = rect.left + (rect.width / 2) - 90; // 工具栏宽度约180px，居中
        let y = rect.top - 60; // 工具栏上方

        // 边界检测：如果太靠上，则显示在下方
        if (y < 80) {
            y = rect.bottom + 10;
        }

        // 边界检测：左右不超出屏幕
        x = Math.max(10, Math.min(x, window.innerWidth - 190));

        this.showToolbar(x, y);
    }

    // ========== 标注操作 ==========

    handleAction(action) {
        const selection = window.getSelection();
        const selectedText = selection.toString().trim();

        if (!selectedText) return;

        if (selectedText.length > CONFIG.MAX_ANNOTATION_LENGTH) {
            this.showNotification('选中文本过长，请选择较短的段落', 'error');
            return;
        }

        if (action === 'delete') {
            const range = selection.getRangeAt(0);
            this.deleteAnnotation(selectedText, range);
        } else {
            this.addAnnotation(selection, action);
        }

        this.hideToolbar();
        selection.removeAllRanges();
    }

    addAnnotation(selection, type) {
        const range = selection.getRangeAt(0);
        const selectedText = selection.toString().trim();

        // 获取选区在文档中的位置信息
        const positionInfo = this.getPositionInfo(range);

        if (!positionInfo) {
            this.showNotification('无法定位选区位置', 'error');
            return;
        }

        // 检查是否已存在相同位置的标注
        const existingIndex = this.annotations.findIndex(a =>
            a.chapter === this.currentChapter &&
            a.paraIndex === positionInfo.paraIndex &&
            a.startOffset === positionInfo.startOffset &&
            a.endOffset === positionInfo.endOffset
        );

        if (existingIndex !== -1) {
            const existing = this.annotations[existingIndex];
            if (existing.type === type) {
                // 完全相同的标注，提示用户
                this.showNotification('该内容已经标注过了', 'error');
                return;
            } else {
                // 不同类型，更新类型并提示
                this.annotations[existingIndex].type = type;
                const typeName = type === 'highlight' ? '高亮' : '下划线';
                this.showNotification(`已更新为${typeName}`, 'success');
                this.saveAnnotations();
                this.reRenderAllAnnotations();
                return;
            }
        }

        // 检查是否与现有标注有重叠（模糊匹配）
        const overlapping = this.annotations.find(a =>
            a.chapter === this.currentChapter &&
            a.paraIndex === positionInfo.paraIndex &&
            (
                (a.startOffset <= positionInfo.startOffset && a.endOffset > positionInfo.startOffset) ||
                (a.startOffset < positionInfo.endOffset && a.endOffset >= positionInfo.endOffset) ||
                (positionInfo.startOffset <= a.startOffset && positionInfo.endOffset >= a.endOffset)
            )
        );

        if (overlapping) {
            this.showNotification('该区域已有重叠标注，请先删除原标注', 'error');
            return;
        }

        // 创建标注对象
        const annotation = {
            id: Date.now() + Math.random().toString(36).substr(2, 9),
            chapter: this.currentChapter,
            text: selectedText,
            type: type, // 'highlight' or 'underline'
            ...positionInfo,
            createdAt: new Date().toISOString()
        };

        this.annotations.push(annotation);
        const typeName = type === 'highlight' ? '高亮' : '下划线';
        this.showNotification(`已添加${typeName}`, 'success');
        this.saveAnnotations();
        this.renderAnnotation(annotation);
    }

    deleteAnnotation(selectedText, selectedRange) {
        const positionInfo = this.getPositionInfo(selectedRange);
        if (!positionInfo) {
            this.showNotification('无法定位选区位置', 'error');
            return;
        }

        // 精确匹配：章节 + 段落索引 + 偏移量
        const index = this.annotations.findIndex(a =>
            a.chapter === this.currentChapter &&
            a.paraIndex === positionInfo.paraIndex &&
            Math.abs(a.startOffset - positionInfo.startOffset) < 5 // 允许小误差
        );

        if (index !== -1) {
            this.annotations.splice(index, 1);
            this.saveAnnotations();
            this.reRenderAllAnnotations();
            this.showNotification('已删除标注', 'success');
        } else {
            this.showNotification('未找到该标注', 'error');
        }
    }

    // ========== 位置定位算法（修复版）==========

    getPositionInfo(range) {
        const contentEl = document.getElementById('content');
        if (!contentEl) return null;

        // 获取选区所在的段落
        let paraNode = range.startContainer;
        while (paraNode && paraNode !== contentEl) {
            if (paraNode.nodeType === Node.ELEMENT_NODE &&
                ['P', 'LI', 'BLOCKQUOTE', 'H2', 'H3'].includes(paraNode.tagName)) {
                break;
            }
            paraNode = paraNode.parentNode;
        }

        if (!paraNode || paraNode === contentEl) return null;

        // 计算段落索引
        const allParagraphs = Array.from(contentEl.querySelectorAll('p, li, blockquote, h2, h3'));
        const paraIndex = allParagraphs.indexOf(paraNode);

        if (paraIndex === -1) return null;

        // 修复：使用 Range 计算真实偏移量，而非 indexOf
        const preRange = document.createRange();
        preRange.selectNodeContents(paraNode);
        preRange.setEnd(range.startContainer, range.startOffset);
        const startOffset = preRange.toString().length;

        return {
            paraIndex: paraIndex,
            startOffset: startOffset,
            endOffset: startOffset + range.toString().length,
            paraTag: paraNode.tagName.toLowerCase()
        };
    }

    // ========== 渲染标注（修复版）==========

    renderAnnotation(annotation) {
        const contentEl = document.getElementById('content');
        if (!contentEl) return;

        const allParagraphs = Array.from(contentEl.querySelectorAll('p, li, blockquote, h2, h3'));
        const targetPara = allParagraphs[annotation.paraIndex];

        if (!targetPara) return;

        try {
            // 修复：使用 TreeWalker 遍历文本节点
            const walker = document.createTreeWalker(
                targetPara,
                NodeFilter.SHOW_TEXT,
                null
            );

            let currentOffset = 0;
            let node;
            let targetNode = null;
            let localStart = 0;

            // 找到包含起始位置的文本节点
            while (node = walker.nextNode()) {
                const nodeLength = node.textContent.length;

                if (currentOffset + nodeLength > annotation.startOffset) {
                    targetNode = node;
                    localStart = annotation.startOffset - currentOffset;
                    break;
                }

                currentOffset += nodeLength;
            }

            if (!targetNode) return;

            // 计算在当前节点内的结束位置
            const localEnd = Math.min(
                localStart + (annotation.endOffset - annotation.startOffset),
                targetNode.textContent.length
            );

            // 创建标注样式
            const className = annotation.type === 'highlight'
                ? 'bg-yellow-200 dark:bg-yellow-600/40'
                : 'underline decoration-2 decoration-red-500 dark:decoration-red-400';

            // 使用 Range API 插入标注
            const range = document.createRange();
            range.setStart(targetNode, localStart);
            range.setEnd(targetNode, localEnd);

            const span = document.createElement('span');
            span.className = `annotation-mark ${className}`;
            span.dataset.id = annotation.id;

            // 包裹选中内容
            try {
                range.surroundContents(span);
            } catch (e) {
                // 如果跨越多个节点，使用备用方案
                const fragment = range.extractContents();
                span.appendChild(fragment);
                range.insertNode(span);
            }

        } catch (error) {
            console.error('Failed to render annotation:', error, annotation);
        }
    }

    reRenderAllAnnotations() {
        // 清除所有标注样式
        const contentEl = document.getElementById('content');
        if (!contentEl) return;

        // 重新加载章节内容后再应用标注
        if (window.loadChapter && this.currentChapter) {
            const currentIndex = window.state?.currentIndex ?? 0;
            window.loadChapter(currentIndex);
        }
    }

    applyAnnotationsToChapter(chapterFile) {
        this.currentChapter = chapterFile;

        // 等待内容渲染完成
        setTimeout(() => {
            const chapterAnnotations = this.annotations.filter(a => a.chapter === chapterFile);

            // 按位置排序，避免后面的标注影响前面的偏移量
            chapterAnnotations.sort((a, b) => {
                if (a.paraIndex !== b.paraIndex) {
                    return a.paraIndex - b.paraIndex;
                }
                return b.startOffset - a.startOffset; // 倒序：从后往前渲染
            });

            // 使用 requestAnimationFrame 批量渲染以提升性能
            requestAnimationFrame(() => {
                // 预先查询所有段落（避免重复查询）
                const contentEl = document.getElementById('content');
                if (!contentEl) return;

                const allParagraphs = Array.from(
                    contentEl.querySelectorAll('p, li, blockquote, h2, h3')
                );

                // 批量应用标注
                chapterAnnotations.forEach(annotation => {
                    this.renderAnnotationOptimized(annotation, allParagraphs);
                });
            });
        }, CONFIG.RENDER_DELAY);
    }

    // 优化的渲染方法（接收预查询的段落列表）
    renderAnnotationOptimized(annotation, allParagraphs) {
        const targetPara = allParagraphs[annotation.paraIndex];
        if (!targetPara) return;

        try {
            // 修复：使用 TreeWalker 遍历文本节点
            const walker = document.createTreeWalker(
                targetPara,
                NodeFilter.SHOW_TEXT,
                null
            );

            let currentOffset = 0;
            let node;
            let targetNode = null;
            let localStart = 0;

            // 找到包含起始位置的文本节点
            while (node = walker.nextNode()) {
                const nodeLength = node.textContent.length;

                if (currentOffset + nodeLength > annotation.startOffset) {
                    targetNode = node;
                    localStart = annotation.startOffset - currentOffset;
                    break;
                }

                currentOffset += nodeLength;
            }

            if (!targetNode) return;

            // 计算在当前节点内的结束位置
            const localEnd = Math.min(
                localStart + (annotation.endOffset - annotation.startOffset),
                targetNode.textContent.length
            );

            // 创建标注样式
            const className = annotation.type === 'highlight'
                ? 'bg-yellow-200 dark:bg-yellow-600/40'
                : 'underline decoration-2 decoration-red-500 dark:decoration-red-400';

            // 使用 Range API 插入标注
            const range = document.createRange();
            range.setStart(targetNode, localStart);
            range.setEnd(targetNode, localEnd);

            const span = document.createElement('span');
            span.className = `annotation-mark ${className}`;
            span.dataset.id = annotation.id;

            // 包裹选中内容
            try {
                range.surroundContents(span);
            } catch (e) {
                // 如果跨越多个节点，使用备用方案
                const fragment = range.extractContents();
                span.appendChild(fragment);
                range.insertNode(span);
            }

        } catch (error) {
            console.error('Failed to render annotation:', error, annotation);
        }
    }

    // ========== 导出功能 ==========

    exportAnnotations() {
        if (this.annotations.length === 0) {
            this.showNotification('暂无笔记可导出', 'error');
            return;
        }

        let markdown = '# 我的阅读笔记\n\n';
        markdown += `导出时间：${new Date().toLocaleString('zh-CN')}\n\n`;
        markdown += `总计：${this.annotations.length} 条标注\n\n---\n\n`;

        // 按章节分组
        const grouped = {};
        this.annotations.forEach(ann => {
            if (!grouped[ann.chapter]) {
                grouped[ann.chapter] = [];
            }
            grouped[ann.chapter].push(ann);
        });

        Object.keys(grouped).sort().forEach(chapter => {
            markdown += `## ${chapter}\n\n`;

            // 按段落排序
            grouped[chapter].sort((a, b) => {
                if (a.paraIndex !== b.paraIndex) {
                    return a.paraIndex - b.paraIndex;
                }
                return a.startOffset - b.startOffset;
            });

            grouped[chapter].forEach(ann => {
                const icon = ann.type === 'highlight' ? '🟡' : '📝';
                const time = new Date(ann.createdAt).toLocaleString('zh-CN');
                markdown += `${icon} **${ann.text}**\n`;
                markdown += `   > _${time}_\n\n`;
            });
            markdown += '---\n\n';
        });

        // 下载
        const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `阅读笔记_${new Date().toISOString().split('T')[0]}.md`;
        a.click();
        URL.revokeObjectURL(url);

        this.showNotification('笔记已导出', 'success');
    }

    // ========== 清理方法（防止内存泄漏）==========

    destroy() {
        // 清理事件监听器
        if (this.boundHandlers.mouseup) {
            document.removeEventListener('mouseup', this.boundHandlers.mouseup);
        }
        if (this.boundHandlers.touchend) {
            document.removeEventListener('touchend', this.boundHandlers.touchend);
        }
        if (this.boundHandlers.mousedown) {
            document.removeEventListener('mousedown', this.boundHandlers.mousedown);
        }
        if (this.boundHandlers.touchstart) {
            document.removeEventListener('touchstart', this.boundHandlers.touchstart);
        }

        // 清理定时器
        if (this.selectionTimeout) {
            clearTimeout(this.selectionTimeout);
        }

        // 移除工具栏
        if (this.toolbar) {
            this.toolbar.remove();
        }

        console.log('AnnotationManager destroyed');
    }
}

// 添加样式
const style = document.createElement('style');
style.textContent = `
    .toolbar-btn {
        width: 44px;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        transition: all 0.2s;
        cursor: pointer;
        border: none;
        touch-action: manipulation;
    }

    .toolbar-btn:active {
        transform: scale(0.95);
    }

    .annotation-mark {
        cursor: pointer;
        transition: opacity 0.2s;
        border-radius: 2px;
    }

    .annotation-mark:hover {
        opacity: 0.8;
    }

    /* 防止选择时的闪烁 */
    #annotation-toolbar {
        -webkit-user-select: none;
        user-select: none;
    }
`;
document.head.appendChild(style);

// 全局实例
window.annotationManager = new AnnotationManager();

// 页面卸载时清理
window.addEventListener('beforeunload', () => {
    if (window.annotationManager) {
        window.annotationManager.destroy();
    }
});
