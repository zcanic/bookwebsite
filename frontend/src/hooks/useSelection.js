import { useState, useRef, useEffect, useCallback } from 'react';

/**
 * 在选区所在的段落内计算精确的偏移量
 */
const getSelectionDetails = (range) => {
  if (!range || range.collapsed) return null;

  let container = range.commonAncestorContainer;
  if (container.nodeType === Node.TEXT_NODE) {
    container = container.parentNode;
  }

  let paragraph = null;
  while (container && container !== document.body) {
    if (container.hasAttribute?.('data-para-index')) {
      paragraph = container;
      break;
    }
    container = container.parentNode;
  }

  if (!paragraph) {
    return null;
  }

  const paraIndex = parseInt(paragraph.dataset.paraIndex, 10);

  try {
    const preSelectionRange = document.createRange();
    preSelectionRange.selectNodeContents(paragraph);
    preSelectionRange.setEnd(range.startContainer, range.startOffset);
    const startOffset = preSelectionRange.toString().length;

    const text = range.toString();
    const endOffset = startOffset + text.length;

    if (startOffset < 0) return null;

    return {
      paraIndex,
      startOffset,
      endOffset,
      text
    };
  } catch (e) {
    console.error('[useSelection] offset calculation failed', e);
    return null;
  }
};

/**
 * Hook to handle text selection events
 * 
 * 关键修复：
 * 1. 使用 ref 存储选区数据，避免触发不必要的重渲染
 * 2. 只用一个简单的 counter state 来通知工具栏更新
 * 3. 提供 getSelection() 函数来获取当前选区数据
 * 
 * @returns {object} { hasSelection, getSelection, clearSelection }
 */
export const useSelection = (isMobile = false) => {
  // 使用 counter 来触发更新，而不是存储整个选区对象
  const [updateCounter, setUpdateCounter] = useState(0);
  const selectionDataRef = useRef(null);
  const isMouseDownRef = useRef(false);
  const lastCaptureTimeRef = useRef(0);

  // 获取当前选区数据
  const getSelection = useCallback(() => {
    return selectionDataRef.current;
  }, []);

  // 处理选区捕获
  const captureSelection = useCallback(() => {
    const sel = window.getSelection();
    const text = sel?.toString().trim();

    if (text && text.length > 0 && sel.rangeCount > 0) {
      const range = sel.getRangeAt(0);
      const rect = range.getBoundingClientRect();

      if (rect.width > 0 && rect.height > 0) {
        const details = getSelectionDetails(range);
        
        if (!details) {
          return;
        }
        
        // 存储选区数据到 ref（不触发重渲染）
        selectionDataRef.current = {
          text,
          paraIndex: details.paraIndex,
          startOffset: details.startOffset,
          endOffset: details.endOffset,
          snapshotRect: {
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height,
            right: rect.right,
            bottom: rect.bottom,
          },
          timestamp: Date.now()
        };
        
        lastCaptureTimeRef.current = Date.now();
        
        // 使用 requestAnimationFrame 延迟触发更新
        // 这样可以让浏览器先完成选区的渲染
        requestAnimationFrame(() => {
          setUpdateCounter(c => c + 1);
        });
      }
    }
  }, []);

  // 处理鼠标按下
  const handleMouseDown = useCallback((e) => {
    isMouseDownRef.current = true;
    
    const toolbar = document.getElementById('annotation-toolbar');
    if (toolbar?.contains(e.target)) {
      return;
    }
  }, []);

  // 处理鼠标抬起
  const handleMouseUp = useCallback((e) => {
    if (!isMouseDownRef.current) return;
    isMouseDownRef.current = false;

    const toolbar = document.getElementById('annotation-toolbar');
    if (toolbar?.contains(e.target)) {
      return;
    }

    // 使用 requestAnimationFrame 延迟捕获
    requestAnimationFrame(() => {
      const sel = window.getSelection();
      const text = sel?.toString().trim();
      
      if (text && text.length > 0) {
        captureSelection();
      } else {
        const timeSinceLastCapture = Date.now() - lastCaptureTimeRef.current;
        if (timeSinceLastCapture > 500 && selectionDataRef.current) {
          selectionDataRef.current = null;
          setUpdateCounter(c => c + 1);
        }
      }
    });
  }, [captureSelection]);

  useEffect(() => {
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchstart', handleMouseDown, { passive: true });
    document.addEventListener('touchend', handleMouseUp, { passive: true });

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchstart', handleMouseDown);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [handleMouseDown, handleMouseUp]);

  const clearSelection = useCallback(() => {
    window.getSelection()?.removeAllRanges();
    selectionDataRef.current = null;
    lastCaptureTimeRef.current = 0;
    setUpdateCounter(c => c + 1);
  }, []);

  // 返回当前是否有选区，以及获取选区的方法
  return { 
    hasSelection: selectionDataRef.current !== null,
    selection: selectionDataRef.current, // 直接暴露 ref 的值供读取
    getSelection,
    clearSelection,
    // updateCounter 用于触发订阅组件的重渲染
    _updateCounter: updateCounter
  };
};
