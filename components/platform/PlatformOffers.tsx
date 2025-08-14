'use client';

import React from 'react';
import { Tag } from 'lucide-react';
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
      <div className="p-3 pt-0">
        <div className="mb-3">
          <div className="flex items-center mb-1">
            <Tag className="w-3 h-3 mr-1 text-green-600 dark:text-green-400" />
            <span className="text-sm font-medium text-green-600 dark:text-green-400">Offers</span>
          </div>
          <p className="text-[10px] md:text-xs text-green-600 dark:text-green-400">No special offers available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-3 pt-0">
      {/* Offers */}
      <div className="mb-3">
        <div className="flex items-center mb-1">
          <Tag className="w-3 h-3 mr-1 text-green-600 dark:text-green-400" />
          <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Offers</span>
        </div>
        <ul className="space-y-1">
          {formattedOffers.map((offer: any, index: number) => {
            if (offer && typeof offer === 'object') {
              return (
                <li key={index} className="text-[11px] md:text-xs lg:text-sm text-green-600 dark:text-green-400">
                  {offer.title || offer.name || offer.text || offer}
                </li>
              );
            } else if (offer && typeof offer === 'string') {
              return (
                <li key={index} className="text-[11px] md:text-xs lg:text-sm text-green-600 dark:text-green-400">
                  {offer}
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
    </div>
  );
}
