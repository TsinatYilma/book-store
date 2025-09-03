import { create } from "zustand";
export type AuthUser = {
  id: string;
  email: string;
  name: string;
  image?: string | null;
  emailVerified?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};
type AuthState = {
  user: AuthUser | null;
  setUser: (user: AuthUser | null) => void;
};
export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));