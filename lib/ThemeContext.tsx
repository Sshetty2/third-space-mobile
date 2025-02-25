// components/ui/ThemeProvider/ThemeProvider.tsx
'use client';

import React, { createContext, useState, useEffect, useContext } from 'react';
import { storage } from './storage';

interface ThemeContextType {
  theme: string
  toggleTheme: (newTheme: string) => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    (async () => {
      const savedTheme = await storage.getItem('theme');

      if (savedTheme) {
        setTheme(savedTheme);
        storage.setItem('theme', savedTheme);
      }
    })();
  }, []);

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
    storage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
