'use client';

import React from 'react';
import { Monitor } from 'lucide-react';
import Image from 'next/image';

interface PlatformHeaderProps {
  platform: any;
}

export default function PlatformHeader({ platform }: PlatformHeaderProps) {
  return (
    <div className="p-2 md:p-3 pb-1">
      {/* Header with Image */}
      <div className="mb-0.5 md:mb-1">
        {platform.image_url ? (
          <div className="relative w-full h-16 md:h-20 lg:h-24 rounded-lg overflow-hidden">
            <Image
              src={platform.image_url}
              alt={platform.title || 'Platform'}
              fill
              className="object-contain"
              sizes="100%"
              unoptimized={true}
              onError={(e) => {
                console.error('Platform image failed to load:', platform.image_url);
                // Fallback to default icon if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `
                    <div class="flex items-center justify-center w-full h-16 md:h-20 lg:h-24 rounded-lg bg-gradient-to-br from-muted to-muted/80">
                      <svg class="w-2 h-2 md:w-3 md:h-4 lg:w-6 lg:h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 00-2-2V5a2 2 0 00-2 2v10a2 0 002 2z" />
                      </svg>
                    </div>
                  `;
                }
              }}
            />
          </div>
        ) : (
          <div className="flex items-center justify-center w-full h-16 md:h-20 lg:h-24 rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600">
            <Monitor className="w-2 h-2 md:w-3 md:h-4 lg:w-6 lg:h-6 text-gray-600 dark:text-gray-400" />
          </div>
        )}
      </div>
      
      {/* Platform ID */}
      <div className="mb-0.5">
        <span className="text-[10px] md:text-xs lg:text-sm text-gray-600 dark:text-gray-400">ID: {platform.id}</span>
      </div>
      
      {/* Title */}
      <h3 className="text-[12px] md:text-sm lg:text-base font-bold text-gray-900 dark:text-gray-100 mb-0.5">
        {platform.title || 'Untitled Platform'}
      </h3>
      
      {/* Description */}
      {platform.description && (
        <div className="mb-0.5 md:mb-1">
          <p className="text-[10px] md:text-xs lg:text-sm text-gray-600 dark:text-gray-400 leading-tight">
            {platform.description}
          </p>
        </div>
      )}
    </div>
  );
}
