'use client';

import React from 'react';
import PlatformCard from '@/components/PlatformCard';
import { DojoGridSkeleton } from '@/components/DojoSkeleton';

interface PassPlatformsSectionProps {
  loading: boolean;
  platforms: any[];
  onPlatformSelect: (platform: any) => void;
}

export default function PassPlatformsSection({ 
  loading, 
  platforms, 
  onPlatformSelect 
}: PassPlatformsSectionProps) {
  return (
    <div>
      {loading ? (
        <DojoGridSkeleton count={5} variant="platform" />
      ) : platforms.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 mb-8">
          {platforms.map((platform) => (
            <PlatformCard
              key={platform.id}
              platform={platform}
              onClick={onPlatformSelect}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-4xl mb-4">
            <svg className="w-16 h-16 mx-auto text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">No Platforms Available</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            There are currently no platforms available. Please check back later or contact support.
          </p>
          <button
            onClick={() => {
              // This will be handled by the parent component
              window.location.reload();
            }}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
          >
            Refresh
          </button>
        </div>
      )}
    </div>
  );
}
