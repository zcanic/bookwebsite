import React from 'react';
import { useUIStore } from '../../stores/uiStore';
import { useReaderStore } from '../../stores/readerStore';
import { useAnnotationStore } from '../../stores/annotationStore';
import { X, Book, Download } from 'lucide-react';
import clsx from 'clsx';
import { api } from '../../services/api';

export const Drawer = ({ chapters = [], onSelectChapter }) => {
  const { isDrawerOpen, closeDrawer } = useUIStore();
  const currentChapterIndex = useReaderStore((state) => state.currentChapterIndex);
  const theme = useReaderStore((state) => state.theme);
  const annotations = useAnnotationStore((state) => state.annotations);

  const themeStyles = {
    light: 'bg-white text-gray-800',
    sepia: 'bg-[#f8f4e9] text-[#433422]',
    dark: 'bg-[#18181b] text-gray-200'
  };

  const handleExport = async () => {
    try {
      // 1. Generate Markdown content from annotations
      let markdown = "# My Annotations\n\n";

      // Group by chapter
      const byChapter = {};
      annotations.forEach(a => {
        if (!byChapter[a.chapter]) byChapter[a.chapter] = [];
        byChapter[a.chapter].push(a);
      });

      Object.keys(byChapter).forEach(chapterId => {
        markdown += `## ${chapterId}\n\n`;
        byChapter[chapterId].forEach(a => {
          const type = a.type === 'highlight' ? 'Highlight' : 'Underline';
          markdown += `- **${type}**: "${a.text}"\n`;
          if (a.note) markdown += `  > Note: ${a.note}\n`;
        });
        markdown += "\n";
      });

      // 2. Create Blob and download
      const blob = new Blob([markdown], { type: 'text/markdown' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `annotations-${new Date().toISOString().split('T')[0]}.md`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

    } catch (error) {
      console.error("Export failed:", error);
      alert("Failed to export notes.");
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={clsx(
          "fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 backdrop-blur-sm",
          isDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={closeDrawer}
      />

      {/* Drawer Panel */}
      <div className={clsx(
        "fixed inset-y-0 left-0 w-80 max-w-[85vw] z-50 shadow-2xl flex flex-col transition-transform duration-300 safe-top safe-bottom",
        themeStyles[theme],
        isDrawerOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Header */}
        <div className="p-5 border-b border-black/5 flex justify-between items-center bg-black/5">
          <h2 className="font-bold text-lg flex items-center gap-2">
            <Book className="text-blue-600 w-5 h-5" /> 目录
          </h2>
          <button
            onClick={closeDrawer}
            className="p-2 rounded-full hover:bg-black/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chapter List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1 custom-scrollbar">
          {chapters.map((chapter, idx) => (
            <button
              key={idx}
              onClick={() => {
                onSelectChapter(idx);
                closeDrawer();
              }}
              className={clsx(
                "w-full text-left p-4 rounded-xl text-sm transition-all duration-200 border border-transparent",
                idx === currentChapterIndex
                  ? "bg-blue-50 text-blue-600 font-bold border-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-900/30"
                  : "hover:bg-black/5 dark:hover:bg-white/5 opacity-80 hover:opacity-100"
              )}
            >
              <div className="truncate text-base">{chapter.title || `Chapter ${idx + 1}`}</div>
              <div className="text-xs opacity-50 mt-1 font-mono">{chapter.id || chapter.path?.split('/').pop()}</div>
            </button>
          ))}
        </div>

        {/* Footer: Export */}
        <div className="p-4 border-t border-black/5">
          <button
            onClick={handleExport}
            className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" /> 导出我的笔记
          </button>
        </div>
      </div>
    </>
  );
};
