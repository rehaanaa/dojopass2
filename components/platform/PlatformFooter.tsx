'use client';

import React from 'react';
import { CardFooter } from '@/components/ui/card';

interface PlatformFooterProps {
  platformId: number;
}

export default function PlatformFooter({ platformId }: PlatformFooterProps) {
  return (
    <CardFooter className="p-3 pt-0 mt-auto">
      {/* Footer */}
      <div className="w-full text-right text-xs text-gray-600 dark:text-gray-400">
        Platform ID: {platformId}
      </div>
    </CardFooter>
  );
}
