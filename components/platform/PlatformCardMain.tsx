'use client';

import React from 'react';
import FeatureIconMapper from './FeatureIconMapper';
import DataParser from './DataParser';
import PlatformHeader from './PlatformHeader';
import PlatformFeatures from './PlatformFeatures';
import PlatformOffers from './PlatformOffers';
import PlatformFooter from './PlatformFooter';

interface PlatformCardMainProps {
  platform: any;
  onClick: (platform: any) => void;
  isLoading?: boolean;
}

export default function PlatformCardMain({ platform, onClick, isLoading = false }: PlatformCardMainProps) {
  const { parseFeatures, parseOffers, formatOffers } = DataParser();

  const features = parseFeatures(platform.features);
  const offers = parseOffers(platform.offers);
  const formattedOffers = formatOffers(platform.offers);
  
  console.log('🔍 PlatformCardMain - platform data:', {
    features: platform.features,
    offers: platform.offers,
    parsedFeatures: features,
    parsedOffers: offers,
    formattedOffers: formattedOffers
  });

  return (
    <div
      onClick={() => !isLoading && onClick(platform)}
      className={`cursor-pointer bg-white dark:bg-black border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white h-auto w-full flex flex-col rounded-lg p-0 transition-all duration-300 hover:border-green-500 hover:shadow-lg group relative ${
        isLoading ? 'cursor-not-allowed opacity-75' : ''
      }`}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-black/20 dark:bg-white/20 rounded-lg flex items-center justify-center z-10">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-500"></div>
        </div>
      )}
      
      {/* Platform Header */}
      <PlatformHeader platform={platform} />
      
      {/* Platform Features */}
      <PlatformFeatures features={features} />
      
      {/* Platform Offers */}
      <PlatformOffers formattedOffers={formattedOffers} />
      
      {/* Platform Footer */}
      <PlatformFooter platformId={platform.id} />
    </div>
  );
}
