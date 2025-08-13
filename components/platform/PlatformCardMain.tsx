'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import FeatureIconMapper from './FeatureIconMapper';
import DataParser from './DataParser';
import PlatformHeader from './PlatformHeader';
import PlatformFeatures from './PlatformFeatures';
import PlatformOffers from './PlatformOffers';
import PlatformFooter from './PlatformFooter';

interface PlatformCardMainProps {
  platform: any;
  onClick: (platform: any) => void;
}

export default function PlatformCardMain({ platform, onClick }: PlatformCardMainProps) {
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
      onClick={() => onClick(platform)}
      className="cursor-pointer bg-white dark:bg-black border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white h-full flex flex-col rounded-lg p-0 transition-colors duration-300 hover:border-primary"
    >
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
