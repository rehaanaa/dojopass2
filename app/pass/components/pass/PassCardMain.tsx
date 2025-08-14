'use client';

import React from 'react';
import PassFeatureIconMapper from './PassFeatureIconMapper';
import PassOfferIconMapper from './PassOfferIconMapper';
import PassDataParser from './PassDataParser';
import PassHeader from './PassHeader';
import PassPricingSection from './PassPricingSection';
import PassFeatures from './PassFeatures';
import PassOffers from './PassOffers';
import PassFooter from './PassFooter';

interface PassCardMainProps {
  pass: any;
  onClick: (pass: any) => void;
}

export default function PassCardMain({ pass, onClick }: PassCardMainProps) {
  const { parseFeatures } = PassDataParser();

  const features = parseFeatures(pass.features);
  
  console.log('🔍 PassCardMain - pass data:', {
    features: pass.features,
    parsedFeatures: features
  });

  return (
    <div
      onClick={() => onClick(pass)}
      className="cursor-pointer bg-white dark:bg-black border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white h-auto flex flex-col rounded-lg p-0 transition-all duration-300 hover:border-green-500 hover:shadow-lg"
    >
      {/* Pass Header */}
      <PassHeader pass={pass} />
      
      {/* Pass Pricing Section */}
      <PassPricingSection pass={pass} />
      
      {/* Pass Features */}
      <PassFeatures features={features} />
      
      {/* Pass Footer */}
      <PassFooter passId={pass.id} />
    </div>
  );
}
