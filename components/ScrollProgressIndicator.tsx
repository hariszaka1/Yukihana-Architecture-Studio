import React, { useState, useEffect } from 'react';

const ScrollProgressIndicator: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    if (windowHeight > 0) {
      const progress = (totalScroll / windowHeight) * 100;
      // Ensure progress is between 0 and 100
      setScrollProgress(Math.min(Math.max(progress, 0), 100));
    } else {
        setScrollProgress(100); // Page is not scrollable, show as full
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Calculate on mount in case the page doesn't start at the top or content is not scrollable
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 right-0 h-screen w-1.5 bg-brand-accent-dark/30 z-[100] pointer-events-none">
      <div
        className="w-full bg-brand-yellow transition-all duration-75 ease-linear rounded-b-full"
        style={{
          height: `${scrollProgress}%`,
          boxShadow: `0 0 10px theme('colors.brand-yellow')`,
        }}
      ></div>
    </div>
  );
};

export default ScrollProgressIndicator;
