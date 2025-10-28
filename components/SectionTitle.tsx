
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, className }) => {
  return (
    <div className={`text-center mb-12 ${className}`}>
      {subtitle && <p className="text-brand-yellow font-semibold text-sm uppercase tracking-widest mb-2">{subtitle}</p>}
      <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-brand-text-light dark:text-white">{title}</h2>
    </div>
  );
};

export default SectionTitle;