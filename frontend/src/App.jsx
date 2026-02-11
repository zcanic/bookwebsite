import React, { useEffect } from 'react';
import { Header } from './components/Layout/Header';
import { Drawer } from './components/Layout/Drawer';
import { SettingsPanel } from './components/Layout/SettingsPanel';
import { ChapterContent } from './components/Reader/ChapterContent';
import { AnnotationToolbar } from './components/Annotation/AnnotationToolbar';
import { useReaderStore } from './stores/readerStore';
import { useAnnotationStore } from './stores/annotationStore';
import { useUIStore } from './stores/uiStore';
import { useSelection } from './hooks/useSelection';
import { api } from './services/api';
import clsx from 'clsx';

function App() {
  // State
  const { currentChapterIndex, theme, fontFamily, mode, isBold, fontSize, setCurrentChapterIndex } = useReaderStore();
  const { annotations, addAnnotation, removeAnnotation, updateAnnotation, setAnnotations } = useAnnotationStore();
  const { breakpoint, setBreakpoint } = useUIStore();

  const [chapters, setChapters] = React.useState([]);

  // Selection Hook
  const { selection, clearSelection } = useSelection(breakpoint === 'mobile');

  // Initial Data Load
  useEffect(() => {
    const init = async () => {
      try {
        const [chapterList, annotationList] = await Promise.all([
          api.getChapters(),
          api.getAnnotations()
        ]);
        setChapters(chapterList);
        setAnnotations(annotationList);
      } catch (e) {
        console.error("Failed to initialize:", e);
      }
    };
    init();

    // Responsive Breakpoint Listener
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setBreakpoint('mobile');
      else if (width < 1024) setBreakpoint('tablet');
      else setBreakpoint('desktop');
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Theme Class Management
  useEffect(() => {
    document.body.className = clsx(
      'transition-colors duration-300 min-h-screen',
      theme === 'light' ? 'bg-white text-gray-900' : '',
      theme === 'sepia' ? 'bg-[#f8f4e9] text-[#433422]' : '',
      theme === 'dark' ? 'dark bg-[#18181b] text-gray-200' : '',
      fontFamily === 'serif' ? 'font-serif' : 'font-sans',
      isBold ? 'font-bold' : ''
    );
  }, [theme, fontFamily, isBold]);

  const currentChapter = chapters[currentChapterIndex];

  // Annotation Handlers
  const handleHighlight = () => {
    if (!selection || !currentChapter) return;

    // 检查选区是否有效
    if (!selection.text || selection.text.trim().length === 0) {
      return;
    }

    // 检查是否有预计算的偏移量信息
    if (selection.paraIndex === undefined || selection.startOffset === undefined) {
      console.debug("Selection missing offset info");
      return;
    }

    const newAnnotation = {
      id: Date.now().toString(),
      chapter: currentChapter.id,
      mode: mode, // Store which mode this annotation was created in
      text: selection.text,
      type: 'highlight',
      paraIndex: selection.paraIndex,
      startOffset: selection.startOffset,
      endOffset: selection.endOffset,
      createdAt: new Date().toISOString()
    };
    
    console.log('[App] Adding highlight:', newAnnotation);
    addAnnotation(newAnnotation);
    clearSelection();
  };

  const handleUnderline = () => {
    if (!selection || !currentChapter) return;

    if (!selection.text || selection.text.trim().length === 0) return;

    if (selection.paraIndex === undefined || selection.startOffset === undefined) {
      console.debug("Selection missing offset info");
      return;
    }

    const newAnnotation = {
      id: Date.now().toString(),
      chapter: currentChapter.id,
      mode: mode, // Store which mode this annotation was created in
      text: selection.text,
      type: 'underline',
      paraIndex: selection.paraIndex,
      startOffset: selection.startOffset,
      endOffset: selection.endOffset,
      createdAt: new Date().toISOString()
    };
    
    console.log('[App] Adding underline:', newAnnotation);
    addAnnotation(newAnnotation);
    clearSelection();
  };

  const handleDelete = () => {
    // TODO: Identify selected annotation
    clearSelection();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        title={currentChapter?.title}
        progress={((currentChapterIndex + 1) / chapters.length) * 100}
      />

      <Drawer
        chapters={chapters}
        onSelectChapter={setCurrentChapterIndex}
      />

      <main className={clsx(
        "flex-1 w-full mx-auto px-4 pt-20 pb-32 transition-all duration-300",
        breakpoint === 'mobile' ? "max-w-full" : "max-w-2xl"
      )}>
        {currentChapter && (
          <ChapterContent filename={currentChapter.id} />
        )}

        {/* Navigation Buttons */}
        <div className="mt-16 flex justify-between gap-4">
          <button
            disabled={currentChapterIndex === 0}
            onClick={() => {
               setCurrentChapterIndex(currentChapterIndex - 1);
               window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex-1 py-4 px-4 rounded-2xl bg-black/5 hover:bg-black/10 disabled:opacity-30 transition font-medium"
          >
            Previous
          </button>
          <button
            disabled={currentChapterIndex === chapters.length - 1}
            onClick={() => {
              setCurrentChapterIndex(currentChapterIndex + 1);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex-1 py-4 px-4 rounded-2xl bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/30 hover:bg-blue-700 disabled:opacity-30 transition"
          >
            Next Chapter
          </button>
        </div>
      </main>

      {/* 标注工具栏只在"只看译文"模式下显示 */}
      {mode === 'pure' && (
        <AnnotationToolbar
          selection={selection}
          onHighlight={handleHighlight}
          onUnderline={handleUnderline}
          onDelete={handleDelete}
        />
      )}

      <SettingsPanel />
    </div>
  );
}

export default App;
