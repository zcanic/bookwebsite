import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useReaderStore = create(
  persist(
    (set) => ({
      // State
      currentChapterIndex: 0,
      fontSize: 100,
      theme: 'light', // 'light' | 'sepia' | 'dark'
      fontFamily: 'serif', // 'serif' | 'sans'
      mode: 'bilingual', // 'bilingual' | 'pure'
      isBold: false,

      // Actions
      setCurrentChapterIndex: (index) => set({ currentChapterIndex: index }),
      setFontSize: (size) => set({ fontSize: Math.max(80, Math.min(160, size)) }),
      increaseFontSize: () => set((state) => ({ fontSize: Math.min(160, state.fontSize + 10) })),
      decreaseFontSize: () => set((state) => ({ fontSize: Math.max(80, state.fontSize - 10) })),
      setTheme: (theme) => set({ theme }),
      setFontFamily: (fontFamily) => set({ fontFamily }),
      setMode: (mode) => set({ mode }),
      toggleBold: () => set((state) => ({ isBold: !state.isBold })),
    }),
    {
      name: 'reader-storage', // unique name for localStorage
    }
  )
)
