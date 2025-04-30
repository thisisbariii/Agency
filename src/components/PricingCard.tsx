import React from 'react';
import { Check } from 'lucide-react';
import Button from './Button';

type PricingFeature = {
  text: string;
  included: boolean;
};

type PricingCardProps = {
  title: string;
  price: string;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
};

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  popular = false,
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 md:p-8 relative transition-all duration-300 hover:shadow-xl ${
      popular ? 'border-2 border-coral-500 transform hover:-translate-y-1' : 'hover:-translate-y-1'
    }`}>
      {popular && (
        <div className="absolute -top-3 right-6 bg-coral-500 text-white py-1 px-3 rounded-full text-sm font-medium">
          Popular
        </div>
      )}
      <h3 className="text-xl font-semibold text-neutral-800 mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-3xl md:text-4xl font-bold">${price}</span>
      </div>
      <p className="text-neutral-600 mb-6">{description}</p>
      <div className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
              feature.included ? 'bg-coral-100 text-coral-600' : 'bg-neutral-100 text-neutral-400'
            }`}>
              {feature.included && <Check size={14} />}
            </div>
            <span className={feature.included ? 'text-neutral-800' : 'text-neutral-400'}>{feature.text}</span>
          </div>
        ))}
      </div>
      <Button 
        variant={popular ? 'primary' : 'outline'} 
        className="w-full"
      >
        Get Started
      </Button>
    </div>
  );
};

export default PricingCard;