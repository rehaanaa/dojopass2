'use client';

import React from 'react';
import { Tag } from 'lucide-react';
import { CardContent } from '@/components/ui/card';
import FeatureIconMapper from './FeatureIconMapper';

interface PlatformOffersProps {
  formattedOffers: any[] | null;
}

export default function PlatformOffers({ formattedOffers }: PlatformOffersProps) {
  const { getFeatureIcon } = FeatureIconMapper();
  
  console.log('🔍 PlatformOffers received formattedOffers:', formattedOffers);

  // Function to get offer color based on type
  const getOfferColor = (offer: any) => {
    const type = offer.type?.toLowerCase() || '';
    const icon = offer.icon?.toLowerCase() || '';
    
    if (type === 'bonus' || icon === 'gift') {
      return 'text-green-600 dark:text-green-400';
    } else if (type === 'discount' || icon === 'indian-rupee') {
      return 'text-blue-600 dark:text-blue-400';
    } else if (type === 'limited' || icon === 'fire') {
      return 'text-red-600 dark:text-red-400';
    } else if (type === 'premium' || icon === 'crown') {
      return 'text-purple-600 dark:text-purple-400';
    } else {
      return 'text-orange-600 dark:text-orange-400';
    }
  };

  if (!formattedOffers || formattedOffers.length === 0) {
    return (
      <CardContent className="p-3 pt-0">
        <div className="mb-3">
          <div className="flex items-center mb-1">
            <Tag className="w-3 h-3 mr-1 text-gray-400 dark:text-gray-500" />
            <span className="text-xs font-medium text-gray-400 dark:text-gray-500">Offers</span>
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-500">No special offers available</p>
        </div>
      </CardContent>
    );
  }

  return (
    <CardContent className="p-3 pt-0">
      {/* Offers */}
      <div className="mb-3">
        <div className="flex items-center mb-1">
          <Tag className="w-3 h-3 mr-1 text-orange-600 dark:text-orange-400" />
          <span className="text-xs font-medium text-gray-900 dark:text-gray-100">Offers</span>
        </div>
        <ul className="space-y-1">
          {formattedOffers.map((offer: any, index: number) => {
            if (offer && typeof offer === 'object') {
              const iconName = offer.icon || 'star';
              const offerText = offer.text || offer.title || offer.name || 'Special Offer';
              const offerColor = getOfferColor(offer);
              
              console.log('🔍 PlatformOffers rendering offer:', { iconName, offerText, offerColor });
              
              return (
                <li key={index} className={`flex items-center text-xs ${offerColor}`}>
                  <span className="mr-1 flex-shrink-0">
                    {getFeatureIcon(iconName)}
                  </span>
                  <span className="font-medium">{offerText}</span>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
    </CardContent>
  );
}
