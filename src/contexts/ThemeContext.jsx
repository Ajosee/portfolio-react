import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(100);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    document.body.classList.toggle('high-contrast', highContrast);
    document.body.style.fontSize = `${fontSize}%`;
  }, [darkMode, highContrast, fontSize]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);
  const toggleHighContrast = () => setHighContrast(prev => !prev);
  const increaseFont = () => setFontSize(prev => Math.min(prev + 10, 150));
  const decreaseFont = () => setFontSize(prev => Math.max(prev - 10, 70));

  return (
    <ThemeContext.Provider value={{ toggleDarkMode, toggleHighContrast, increaseFont, decreaseFont }}>
      {children}
    </ThemeContext.Provider>
  );
};
