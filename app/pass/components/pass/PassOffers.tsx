'use client';

import React from 'react';
import { Tag } from 'lucide-react';
import { CardContent } from '@/components/ui/card';
import PassOfferIconMapper from './PassOfferIconMapper';

interface PassOffersProps {
  formattedOffers: any[] | null;
}

export default function PassOffers({ formattedOffers }: PassOffersProps) {
  const { getOfferIcon } = PassOfferIconMapper();

  if (!formattedOffers || formattedOffers.length === 0) return null;

  return (
    <CardContent className="p-3 pt-0">
      {/* Offers */}
      <div className="mb-3">
        <div className="flex items-center mb-1">
          <Tag className="w-3 h-3 mr-1 text-orange-600 dark:text-orange-400" />
          <span className="text-xs font-medium text-gray-900 dark:text-gray-100">Offers</span>
        </div>
        <ul className="space-y-1 text-xs text-orange-600 dark:text-orange-400">
          {formattedOffers.map((offer: any, index: number) => {
            if (offer && typeof offer === 'object') {
              const iconName = offer.icon || 'star';
              const offerText = offer.text || offer.title || offer.name || 'Special Offer';
              
              return (
                <li key={index} className="flex items-center">
                  <span className="mr-1 flex-shrink-0 text-orange-600 dark:text-orange-400">
                    {getOfferIcon(iconName)}
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
