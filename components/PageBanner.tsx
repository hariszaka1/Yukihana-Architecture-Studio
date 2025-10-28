import React from 'react';

interface PageBannerProps {
  title: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ title }) => {
  return (
    <div className="py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-panel py-10 md:py-12 px-6 sm:px-8 text-center">
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-text-light dark:text-white tracking-tight animate-fade-in-down">{title}</h1>
            </div>
        </div>
    </div>
  );
};

export default PageBanner;