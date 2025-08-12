'use client';

import React from 'react';
import { Tag } from 'lucide-react';
import { CardContent } from '@/components/ui/card';

interface PlatformOffersProps {
  formattedOffers: string | null;
}

export default function PlatformOffers({ formattedOffers }: PlatformOffersProps) {
  if (!formattedOffers) return null;

  return (
    <CardContent className="p-3 pt-0">
      {/* Offers */}
      <div className="mb-3">
        <div className="flex items-center mb-1">
          <Tag className="w-3 h-3 mr-1 text-orange-600 dark:text-orange-400" />
          <span className="text-xs font-medium text-gray-900 dark:text-gray-100">Offers</span>
        </div>
        <div className="text-xs text-orange-600 dark:text-orange-400 font-medium">
          {formattedOffers}
        </div>
      </div>
    </CardContent>
  );
}
