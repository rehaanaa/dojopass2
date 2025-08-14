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
  
  console.log('🔍 PassOffers received formattedOffers:', formattedOffers);

  // Function to get offer color based on content and type
  const getOfferColor = (offer: any) => {
    const title = (offer.title || '').toLowerCase();
    const discount = (offer.discount || '').toLowerCase();
    const icon = (offer.icon || '').toLowerCase();
    
    // Check for specific offer types first
    if (title.includes('free') || discount.includes('free') || icon === 'gift') {
      return 'text-emerald-600 dark:text-emerald-400';
    } else if (title.includes('discount') || discount.includes('off') || discount.includes('%') || icon === 'indian-rupee') {
      return 'text-blue-600 dark:text-blue-400';
    } else if (title.includes('bonus') || title.includes('extra') || icon === 'star') {
      return 'text-purple-600 dark:text-purple-400';
    } else if (title.includes('limited') || title.includes('sale') || icon === 'fire') {
      return 'text-red-600 dark:text-red-400';
    } else if (title.includes('premium') || title.includes('pro') || icon === 'crown') {
      return 'text-amber-600 dark:text-amber-400';
    } else if (title.includes('bundle') || title.includes('pack') || icon === 'package') {
      return 'text-indigo-600 dark:text-indigo-400';
    } else if (title.includes('student') || title.includes('academic')) {
      return 'text-teal-600 dark:text-teal-400';
    } else if (title.includes('family') || title.includes('team')) {
      return 'text-pink-600 dark:text-pink-400';
    } else {
      return 'text-orange-600 dark:text-orange-400';
    }
  };

  if (!formattedOffers || formattedOffers.length === 0) {
    return (
      <CardContent className="p-1 md:p-2 pt-0">
        <div className="mb-1 md:mb-2">
          <div className="flex items-center mb-0.5">
            <Tag className="w-2 h-2 md:w-3 md:h-3 mr-0.5 md:mr-1 text-gray-400 dark:text-gray-500" />
            <span className="text-[10px] md:text-xs font-medium text-gray-400 dark:text-gray-500">Offers</span>
          </div>
          <p className="text-[8px] md:text-xs text-gray-400 dark:text-gray-500">No special offers available</p>
        </div>
      </CardContent>
    );
  }

  return (
    <CardContent className="p-1 md:p-2 pt-0">
      {/* Offers */}
      <div className="mb-1 md:mb-2">
        <div className="flex items-center mb-0.5">
          <Tag className="w-2 h-2 md:w-3 md:h-3 mr-0.5 md:mr-1 text-orange-600 dark:text-orange-400" />
                      <span className="text-[8px] md:text-[10px] font-medium text-gray-900 dark:text-gray-100">Offers ({formattedOffers.length})</span>
          </div>
          <ul className="space-y-0.5">
            {formattedOffers.map((offer: any, index: number) => {
              if (offer && typeof offer === 'object') {
                // Determine the icon based on offer content
                let iconName = offer.icon || 'star';
                if (!offer.icon) {
                  if (offer.title?.toLowerCase().includes('discount') || offer.discount?.toLowerCase().includes('off')) {
                    iconName = 'indian-rupee';
                  } else if (offer.title?.toLowerCase().includes('free')) {
                    iconName = 'gift';
                  } else if (offer.title?.toLowerCase().includes('bonus')) {
                    iconName = 'star';
                  } else if (offer.title?.toLowerCase().includes('limited')) {
                    iconName = 'fire';
                  }
                }
                
                // Create display text combining title and discount
                let offerText = '';
                if (offer.title && offer.discount) {
                  offerText = `${offer.title}: ${offer.discount}`;
                } else if (offer.title) {
                  offerText = offer.title;
                } else if (offer.discount) {
                  offerText = offer.discount;
                } else if (offer.name) {
                  offerText = offer.name;
                } else if (offer.text) {
                  offerText = offer.text;
                } else {
                  offerText = 'Special Offer';
                }
                
                console.log('🔍 Rendering offer:', { iconName, offerText });
                
                return (
                  <li key={index} className="flex items-center text-[6px] md:text-[8px] text-green-600 dark:text-green-400">
                    <span className="mr-0.5 md:mr-1 flex-shrink-0">
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
