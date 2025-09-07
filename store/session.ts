// store/session.ts
import { create } from 'zustand';

type User = {
  name: string;
  email?: string;
  // Add other fields as needed
};

type Session = {
  user: User;
  // Add other session-related fields if needed
};

type SessionState = {
  session: Session | null;
  setSession: (session: Session | null) => void;
};

export const useSessionStore = create<SessionState>((set) => ({
  session: null,
  setSession: (session) => set({ session }),
}));
