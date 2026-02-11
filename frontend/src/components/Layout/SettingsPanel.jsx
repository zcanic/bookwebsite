import React from 'react';
import { useUIStore } from '../../stores/uiStore';
import { useReaderStore } from '../../stores/readerStore';
import { Languages, BookOpenText, Type, Sun, Moon, Coffee } from 'lucide-react';
import clsx from 'clsx';

export const SettingsPanel = () => {
  const { isSettingsOpen, closeSettings } = useUIStore();
  const {
    fontSize, setFontSize, increaseFontSize, decreaseFontSize,
    theme, setTheme,
    fontFamily, setFontFamily,
    mode, setMode,
    isBold, toggleBold
  } = useReaderStore();

  const themeStyles = {
    light: 'bg-white text-gray-800 border-gray-100',
    sepia: 'bg-[#f8f4e9] text-[#433422] border-[#ede6d6]',
    dark: 'bg-[#18181b] text-gray-200 border-zinc-800'
  };

  return (
    <>
      {/* Backdrop (invisible but handles clicks outside) */}
      {isSettingsOpen && (
        <div className="fixed inset-0 z-40" onClick={closeSettings} />
      )}

      {/* Panel */}
      <div className={clsx(
        "fixed bottom-0 left-0 right-0 z-50 transform transition-transform duration-300 rounded-t-3xl shadow-[0_-8px_30px_rgba(0,0,0,0.12)] safe-bottom border-t flex flex-col max-h-[80vh]",
        themeStyles[theme],
        isSettingsOpen ? "translate-y-0" : "translate-y-full"
      )}>

        {/* Handle */}
        <div className="w-full flex justify-center pt-3 pb-1" onClick={closeSettings}>
          <div className="w-12 h-1.5 bg-gray-300 dark:bg-zinc-700 rounded-full" />
        </div>

        <div className="p-6 space-y-8 overflow-y-auto">

          {/* Reading Mode */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold opacity-60 uppercase tracking-wider">阅读模式</span>
            </div>
            <div className="grid grid-cols-2 gap-3 p-1 bg-black/5 rounded-xl">
              <button
                onClick={() => setMode('bilingual')}
                className={clsx(
                  "py-2.5 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2",
                  mode === 'bilingual' ? "bg-white dark:bg-zinc-700 shadow-sm" : "opacity-60 hover:opacity-100"
                )}
              >
                <Languages className="w-4 h-4" /> 中英对照
              </button>
              <button
                onClick={() => setMode('pure')}
                className={clsx(
                  "py-2.5 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2",
                  mode === 'pure' ? "bg-white dark:bg-zinc-700 shadow-sm" : "opacity-60 hover:opacity-100"
                )}
              >
                <BookOpenText className="w-4 h-4" /> 只看译文
              </button>
            </div>
          </div>

          {/* Font Style */}
          <div className="space-y-3">
            <span className="text-sm font-bold opacity-60 uppercase tracking-wider">字体风格</span>
            <div className="flex gap-3">
              <button
                onClick={() => setFontFamily('serif')}
                className={clsx(
                  "flex-1 border py-3 rounded-xl font-serif text-lg transition",
                  fontFamily === 'serif' ? "border-blue-500 bg-blue-50/50 text-blue-600" : "border-black/10 hover:bg-black/5"
                )}
              >
                宋体
              </button>
              <button
                onClick={() => setFontFamily('sans')}
                className={clsx(
                  "flex-1 border py-3 rounded-xl font-sans text-lg transition",
                  fontFamily === 'sans' ? "border-blue-500 bg-blue-50/50 text-blue-600" : "border-black/10 hover:bg-black/5"
                )}
              >
                黑体
              </button>
              <button
                onClick={toggleBold}
                className={clsx(
                  "w-16 border rounded-xl flex items-center justify-center transition text-xl font-bold",
                  isBold ? "bg-black text-white dark:bg-white dark:text-black border-transparent" : "border-black/10 hover:bg-black/5"
                )}
              >
                B
              </button>
            </div>
          </div>

          {/* Font Size */}
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm font-bold opacity-60 uppercase tracking-wider">字号大小</span>
              <span className="text-xs opacity-60">{fontSize}%</span>
            </div>
            <div className="flex gap-4">
              <button onClick={decreaseFontSize} className="flex-1 py-3 bg-black/5 rounded-xl hover:bg-black/10 transition flex items-center justify-center">
                <span className="text-sm font-bold">A- 减小</span>
              </button>
              <button onClick={increaseFontSize} className="flex-1 py-3 bg-black/5 rounded-xl hover:bg-black/10 transition flex items-center justify-center">
                <span className="text-xl font-bold">A+ 增大</span>
              </button>
            </div>
          </div>

          {/* Theme */}
          <div className="space-y-3 pb-4">
            <span className="text-sm font-bold opacity-60 uppercase tracking-wider">背景主题</span>
            <div className="flex gap-4">
              <button
                onClick={() => setTheme('light')}
                className={clsx(
                  "flex-1 h-14 rounded-2xl border-2 transition relative flex items-center justify-center",
                  theme === 'light' ? "border-blue-500 bg-white" : "border-gray-200 bg-white hover:border-blue-300"
                )}
              >
                <Sun className="w-5 h-5 text-gray-400" />
              </button>
              <button
                onClick={() => setTheme('sepia')}
                className={clsx(
                  "flex-1 h-14 rounded-2xl border-2 transition relative flex items-center justify-center",
                  theme === 'sepia' ? "border-amber-500 bg-[#f8f4e9]" : "border-amber-100 bg-[#f8f4e9] hover:border-amber-300"
                )}
              >
                <Coffee className="w-5 h-5 text-amber-800/50" />
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={clsx(
                  "flex-1 h-14 rounded-2xl border-2 transition relative flex items-center justify-center",
                  theme === 'dark' ? "border-blue-400 bg-[#18181b]" : "border-zinc-700 bg-[#18181b] hover:border-zinc-500"
                )}
              >
                <Moon className="w-5 h-5 text-zinc-500" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
