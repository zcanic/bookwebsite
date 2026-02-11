import { create } from 'zustand'

export const useUIStore = create((set) => ({
  // State
  isDrawerOpen: false,
  isSettingsOpen: false,
  breakpoint: 'desktop', // 'mobile' | 'tablet' | 'desktop'

  // Actions
  toggleDrawer: () => set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),
  closeDrawer: () => set({ isDrawerOpen: false }),

  toggleSettings: () => set((state) => ({ isSettingsOpen: !state.isSettingsOpen })),
  closeSettings: () => set({ isSettingsOpen: false }),

  setBreakpoint: (breakpoint) => set({ breakpoint })
}))
