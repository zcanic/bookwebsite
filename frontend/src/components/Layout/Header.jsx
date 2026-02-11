import React from 'react';
import { useUIStore } from '../../stores/uiStore';
import { useReaderStore } from '../../stores/readerStore';
import { Menu, SlidersHorizontal, BookOpen } from 'lucide-react';

export const Header = ({ title = "Loading...", progress = 0 }) => {
  const toggleDrawer = useUIStore((state) => state.toggleDrawer);
  const toggleSettings = useUIStore((state) => state.toggleSettings);
  const theme = useReaderStore((state) => state.theme);

  // Dynamic styles based on theme
  const themeStyles = {
    light: 'bg-white/95 border-gray-200 text-gray-800',
    sepia: 'bg-[#f8f4e9]/95 border-[#ede6d6] text-[#433422]',
    dark: 'bg-[#18181b]/95 border-zinc-800 text-gray-200'
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300 safe-top ${themeStyles[theme]}`}>
      <div className="flex items-center justify-between px-4 h-14">
        {/* Left: Menu Button */}
        <button
          onClick={toggleDrawer}
          className="p-2 -ml-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition"
          aria-label="Open Menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Center: Title & Progress */}
        <div className="flex flex-col items-center max-w-[60%]">
          <h1 className="text-sm font-bold truncate">{title}</h1>
          <span className="text-[10px] opacity-60 font-mono">{Math.round(progress)}%</span>
        </div>

        {/* Right: Settings Button */}
        <button
          onClick={toggleSettings}
          className="p-2 -mr-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition"
          aria-label="Open Settings"
        >
          <SlidersHorizontal className="w-6 h-6" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="h-0.5 w-full bg-black/5 dark:bg-white/5 overflow-hidden">
        <div
          className="h-full bg-blue-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </nav>
  );
};
