'use client';

import React from 'react';
import PassList from './PassList';
import { DojoGridSkeleton } from '@/components/DojoSkeleton';

interface PassPassesSectionProps {
  passesLoading: boolean;
  passes: any[];
  selectedPlatform: any | null;
  onPassSelect: (pass: any) => void;
  onBackToPlatforms: () => void;
}

export default function PassPassesSection({ 
  passesLoading, 
  passes, 
  selectedPlatform, 
  onPassSelect, 
  onBackToPlatforms 
}: PassPassesSectionProps) {
  return (
    <div>
      {passesLoading ? (
        <DojoGridSkeleton count={5} variant="pass" />
      ) : passes.length > 0 ? (
        <PassList
          passes={passes}
          onPassSelect={onPassSelect}
          loading={passesLoading}
        />
      ) : (
        <div className="text-center py-8">
          <div className="text-2xl mb-3">
            <svg className="w-12 h-12 mx-auto text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
            </svg>
          </div>
          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">No Passes Available</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            {selectedPlatform 
              ? `There are currently no passes available for ${selectedPlatform.name}. Please check back later.`
              : 'Please select a platform first.'
            }
          </p>
          {selectedPlatform && (
            <button
              onClick={onBackToPlatforms}
              className="px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm"
            >
              Choose Different Platform
            </button>
          )}
        </div>
      )}
    </div>
  );
}
