// store/uiStore.ts
import { create } from 'zustand';

type UIState = {
  isProfileOpen: boolean;
  toggleProfile: () => void;
};

export const useUIStore = create<UIState>((set, get) => ({
  isProfileOpen: false,
  toggleProfile: () => set({ isProfileOpen: !get().isProfileOpen }),
}));
