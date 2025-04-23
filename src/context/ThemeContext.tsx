import React, { createContext, useContext, ReactNode } from 'react';

type Theme = 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Always light theme
  const theme: Theme = 'light';

  // Toggle does nothing
  const toggleTheme = () => {
    console.log('Theme is always light');
  };

  // Ensure HTML class is 'light'
  React.useEffect(() => {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light'); // Optional
    localStorage.setItem('theme', 'light'); // Optional
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
