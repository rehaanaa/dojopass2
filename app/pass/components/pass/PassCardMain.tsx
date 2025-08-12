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
  const { parseFeatures, parseOffers, formatOffers } = PassDataParser();

  const features = parseFeatures(pass.features);
  const offers = parseOffers(pass.offers);
  const formattedOffers = formatOffers(pass.offers);

  return (
    <div
      onClick={() => onClick(pass)}
      className="cursor-pointer bg-white dark:bg-black border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white h-full flex flex-col rounded-lg p-0 transition-colors duration-300 hover:border-primary"
    >
      {/* Pass Header */}
      <PassHeader pass={pass} />
      
      {/* Pass Pricing Section */}
      <PassPricingSection pass={pass} />
      
      {/* Pass Features */}
      <PassFeatures features={features} />
      
      {/* Pass Offers */}
      <PassOffers formattedOffers={formattedOffers} />
      
      {/* Pass Footer */}
      <PassFooter passId={pass.id} />
    </div>
  );
}
