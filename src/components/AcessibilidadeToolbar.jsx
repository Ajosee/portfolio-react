import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const AcessibilidadeToolbar = () => {
  const { toggleDarkMode, toggleHighContrast, increaseFont, decreaseFont } = useTheme();

  return (
    <div className="acessibilidade-toolbar">
      <button onClick={toggleDarkMode} aria-label="Modo escuro">🌓</button>
      <button onClick={toggleHighContrast} aria-label="Alto contraste">🔊</button>
      <button onClick={increaseFont} aria-label="Aumentar fonte">A+</button>
      <button onClick={decreaseFont} aria-label="Diminuir fonte">A-</button>
    </div>
  );
};

export default AcessibilidadeToolbar;
