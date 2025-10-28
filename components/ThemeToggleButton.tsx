import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { SunIcon, MoonIcon } from './icons';

const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-brand-text-light dark:text-white hover:bg-black/10 dark:hover:bg-white/20 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-yellow focus:ring-offset-brand-light dark:focus:ring-offset-brand-dark"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative w-6 h-6 overflow-hidden">
        <SunIcon
          className={`absolute transition-all duration-300 ease-in-out
            ${theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`
          }
        />
        <MoonIcon
          className={`absolute transition-all duration-300 ease-in-out
            ${theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0'}`
          }
        />
      </div>
    </button>
  );
};

export default ThemeToggleButton;
