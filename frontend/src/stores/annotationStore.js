import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// 防抖保存函数
let saveTimeout = null;
const debouncedSave = (annotations) => {
  if (saveTimeout) clearTimeout(saveTimeout);
  saveTimeout = setTimeout(async () => {
    try {
      const res = await fetch('/book/api/annotations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(annotations)
      });
      if (res.ok) {
        console.log('[annotationStore] Saved to server');
      } else {
        console.error('[annotationStore] Failed to save:', res.status);
      }
    } catch (e) {
      console.error('[annotationStore] Save error:', e);
    }
  }, 500); // 500ms 防抖
};

export const useAnnotationStore = create(
  persist(
    (set, get) => ({
      annotations: [],
      lastSyncTime: null,
      isLoading: false,

      // Actions
      addAnnotation: (annotation) => {
        set((state) => ({
          annotations: [...state.annotations, annotation]
        }));
        // 自动保存到服务器
        debouncedSave(get().annotations);
      },

      removeAnnotation: (id) => {
        set((state) => ({
          annotations: state.annotations.filter((a) => a.id !== id)
        }));
        debouncedSave(get().annotations);
      },

      updateAnnotation: (id, updates) => {
        set((state) => ({
          annotations: state.annotations.map((a) =>
            a.id === id ? { ...a, ...updates } : a
          )
        }));
        debouncedSave(get().annotations);
      },

      setAnnotations: (annotations) => set({ annotations }),

      // 手动同步
      sync: async () => {
        set({ isLoading: true });
        debouncedSave(get().annotations);
        set({ isLoading: false, lastSyncTime: new Date().toISOString() });
      }
    }),
    {
      name: 'annotation-storage',
    }
  )
);

