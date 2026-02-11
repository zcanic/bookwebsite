import React, { useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Highlighter, Underline, Trash2 } from 'lucide-react';
import clsx from 'clsx';
import { useUIStore } from '../../stores/uiStore';

export const AnnotationToolbar = ({ selection, onHighlight, onUnderline, onDelete, existingAnnotation }) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [visible, setVisible] = useState(false);
  const breakpoint = useUIStore((state) => state.breakpoint);

  // 计算工具栏位置
  const updatePosition = useCallback(() => {
    if (!selection || !selection.snapshotRect) return;
    
    const rect = selection.snapshotRect;
    if (!rect || rect.width <= 0) return;
    
    const scrollY = window.scrollY;

    if (breakpoint === 'mobile') {
      // Mobile: Fixed at bottom
      setPosition({
        top: 'auto',
        bottom: 20,
        left: '50%',
        transform: 'translateX(-50%)'
      });
    } else {
      // Desktop/Tablet: Floating above selection
      const centerX = rect.left + rect.width / 2;
      const top = rect.top + scrollY - 60;

      setPosition({
        top: Math.max(10, top),
        left: centerX,
        transform: 'translateX(-50%)'
      });
    }
  }, [selection, breakpoint]);

  // 初次显示和 selection 变化时更新位置
  useEffect(() => {
    if (selection) {
      updatePosition();
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [selection, updatePosition]);

  if (!visible) return null;

  const style = breakpoint === 'mobile'
    ? { position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 100 }
    : { position: 'absolute', top: `${position.top}px`, left: `${position.left}px`, transform: 'translateX(-50%)', zIndex: 100 };

  return createPortal(
    <div
      id="annotation-toolbar"
      className={clsx(
        "flex gap-1 p-2 rounded-xl shadow-xl transition-all duration-200 animate-in fade-in zoom-in-95",
        "bg-gray-900 text-white backdrop-blur-md bg-opacity-95"
      )}
      style={style}
      // 防止工具栏上的交互触发选区变化
      onMouseDown={(e) => e.preventDefault()}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onHighlight(); }}
        className="p-3 rounded-lg hover:bg-white/20 active:scale-95 transition bg-yellow-500/20 text-yellow-400 hover:text-yellow-300"
        title="高亮"
      >
        <Highlighter className="w-5 h-5" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onUnderline(); }}
        className="p-3 rounded-lg hover:bg-white/20 active:scale-95 transition bg-red-500/20 text-red-400 hover:text-red-300"
        title="下划线"
      >
        <Underline className="w-5 h-5" />
      </button>
      {existingAnnotation && (
        <>
          <div className="w-px bg-white/20 mx-1 self-center h-5" />
          <button
            onClick={(e) => { e.stopPropagation(); onDelete(); }}
            className="p-3 rounded-lg hover:bg-red-900/50 active:scale-95 transition text-gray-400 hover:text-red-400"
            title="删除"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </>
      )}
    </div>,
    document.body
  );
};
