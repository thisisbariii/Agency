import React from 'react';

type SectionHeadingProps = {
  subtitle?: string;
  title: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
};

const SectionHeading: React.FC<SectionHeadingProps> = ({
  subtitle,
  title,
  alignment = 'left',
  className = '',
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`max-w-lg ${alignmentClasses[alignment]} mb-12 ${className}`}>
      {subtitle && (
        <div className="text-coral-500 uppercase tracking-widest text-sm font-semibold mb-2">{subtitle}</div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">{title}</h2>
    </div>
  );
};

export default SectionHeading;