'use client';

import React from 'react';
import { CardFooter } from '@/components/ui/card';

interface PassFooterProps {
  passId: number;
}

export default function PassFooter({ passId }: PassFooterProps) {
  return (
    <CardFooter className="p-3 pt-0 border-t border-gray-200 dark:border-gray-700 mt-auto">
      {/* Footer */}
      <div className="w-full text-right text-xs text-gray-600 dark:text-gray-400">
        Pass ID: {passId}
      </div>
    </CardFooter>
  );
}
