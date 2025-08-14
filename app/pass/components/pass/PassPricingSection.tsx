'use client';

import React from 'react';
import { Clock, CheckCircle2 } from 'lucide-react';
import { CardContent } from '@/components/ui/card';

interface PassPricingSectionProps {
  pass: any;
}

export default function PassPricingSection({ pass }: PassPricingSectionProps) {
  return (
    <CardContent className="p-2 md:p-3 pt-0">
      {/* Price, Duration, and Completed Status */}
      <div className="mb-1 md:mb-2">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm md:text-base lg:text-lg font-bold text-green-600 dark:text-green-400">
            ₹{pass.price}
          </span>
          {pass.completed && (
            <div className="flex items-center text-[8px] md:text-[10px] text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/20 px-1 md:px-2 py-0.5 md:py-1 rounded-full">
              <CheckCircle2 className="w-2 h-2 md:w-3 md:h-3 mr-0.5 md:mr-1 text-green-600 dark:text-green-400" />
              <span>Completed</span>
            </div>
          )}
        </div>
        {pass.duration_days && (
          <div className="flex items-center text-[8px] md:text-[10px] text-gray-600 dark:text-gray-400">
            <Clock className="w-2 h-2 md:w-3 md:h-3 mr-0.5 md:mr-1 text-blue-600 dark:text-blue-400" />
            <span>{pass.duration_days} {pass.duration_days === 1 ? 'Day' : 'Days'}</span>
          </div>
        )}
      </div>
    </CardContent>
  );
}
