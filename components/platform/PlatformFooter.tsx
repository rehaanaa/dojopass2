'use client';

import React from 'react';

interface PlatformFooterProps {
  platformId: number;
}

export default function PlatformFooter({ platformId }: PlatformFooterProps) {
  return (
    <div className="p-3 pt-0 mt-auto">
      {/* Footer */}
      <div className="w-full text-right text-[11px] md:text-xs lg:text-sm text-gray-600 dark:text-gray-400">
        Platform ID: {platformId}
      </div>
    </div>
  );
}
