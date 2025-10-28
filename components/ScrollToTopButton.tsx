import React, { useState, useEffect } from 'react';
import { ArrowUpIcon } from './icons';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`p-3 rounded-full text-brand-text-light dark:text-white
                  glass-panel transition-all duration-300 ease-in-out origin-bottom
                  ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 pointer-events-none scale-0'}
                  hover:bg-brand-yellow hover:text-brand-dark focus:outline-none 
                  focus:ring-2 focus:ring-offset-2 focus:ring-brand-yellow focus:ring-offset-brand-light dark:focus:ring-offset-brand-dark`}
      aria-label="Kembali ke atas"
    >
      <ArrowUpIcon className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTopButton;