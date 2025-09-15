// context/AuthOverlayContext.tsx
'use client';
import { createContext, useContext, useState } from 'react';

const AuthOverlayContext = createContext({
  isVisible: false,
  mode: 'login',
  showLogin: () => {},
  showSignup: () => {},
  hide: () => {},
});

export const AuthOverlayProvider = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setVisible] = useState(false);
  const [mode, setMode] = useState<'login' | 'signup'>('login');

  const value = {
    isVisible,
    mode,
    showLogin: () => {
      setMode('login');
      setVisible(true);
    },
    showSignup: () => {
      setMode('signup');
      setVisible(true);
    },
    hide: () => setVisible(false),
  };

  return (
    <AuthOverlayContext.Provider value={value}>
      {children}
    </AuthOverlayContext.Provider>
  );
};

export const useAuthOverlay = () => useContext(AuthOverlayContext);
