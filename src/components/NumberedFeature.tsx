import React from 'react';

type NumberedFeatureProps = {
  number: string;
  title: string;
  description: string;
};

const NumberedFeature: React.FC<NumberedFeatureProps> = ({ number, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6 mb-8">
      <div className="text-5xl font-bold text-coral-500">{number}</div>
      <div>
        <h3 className="text-xl md:text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-neutral-600">{description}</p>
      </div>
    </div>
  );
};

export default NumberedFeature;