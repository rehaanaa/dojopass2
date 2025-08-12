'use client';

import React from 'react';
import { Clock, CheckCircle2 } from 'lucide-react';
import { CardContent } from '@/components/ui/card';

interface PassPricingSectionProps {
  pass: any;
}

export default function PassPricingSection({ pass }: PassPricingSectionProps) {
  return (
    <CardContent className="p-3 pt-0">
      {/* Price, Duration, and Completed Status */}
      <div className="mb-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-lg font-bold text-green-600 dark:text-green-400">
            ₹{pass.price}
          </span>
          {pass.completed && (
            <div className="flex items-center text-xs text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/20 px-2 py-1 rounded-full">
              <CheckCircle2 className="w-3 h-3 mr-1" />
              <span>Completed</span>
            </div>
          )}
        </div>
        {pass.duration_days && (
          <div className="flex items-center text-xs text-gray-600 dark:text-gray-400">
            <Clock className="w-3 h-3 mr-1" />
            <span>{pass.duration_days} {pass.duration_days === 1 ? 'Day' : 'Days'}</span>
          </div>
        )}
      </div>
    </CardContent>
  );
}
