'use client';

import React from 'react';

interface DojoSkeletonProps {
  className?: string;
}

export const DojoSkeleton: React.FC<DojoSkeletonProps> = ({ className }) => {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-4 mb-2"></div>
      <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-3 mb-1"></div>
      <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-3 w-2/3"></div>
    </div>
  );
};

interface DojoGridSkeletonProps {
  count: number;
  variant?: 'platform' | 'pass';
}

export const DojoGridSkeleton: React.FC<DojoGridSkeletonProps> = ({ count, variant = 'default' }) => {
  if (variant === 'pass') {
    // Pass card skeleton - matches PassCard structure exactly
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
        {Array.from({ length: count }).map((_, index) => (
          <div key={index} className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg animate-pulse h-full flex flex-col">
            {/* CardHeader */}
            <div className="p-3 pb-1">
              {/* Image skeleton */}
              <div className="w-full h-32 bg-gray-200 dark:bg-gray-700 rounded-lg mb-2"></div>
              
              {/* Pass ID and Platform ID skeleton */}
              <div className="mb-1 flex items-center justify-between">
                <div className="w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
              
              {/* Title skeleton */}
              <div className="w-3/4 h-3 bg-gray-200 dark:bg-gray-700 rounded mb-1"></div>
              
              {/* Description skeleton */}
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
            </div>
            
            {/* CardContent */}
            <div className="p-3 pt-0">
              {/* Price and Duration skeleton */}
              <div className="mb-2">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-4 bg-green-200 dark:bg-green-800 rounded"></div>
                  <div className="w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
              </div>
              
              {/* Features skeleton */}
              <div className="mb-2">
                <div className="flex items-center mb-1">
                  <div className="w-3 h-3 bg-yellow-200 dark:bg-yellow-700 rounded mr-1"></div>
                  <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-200 dark:bg-blue-700 rounded mr-1"></div>
                    <div className="w-2/3 h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-200 dark:bg-purple-700 rounded mr-1"></div>
                    <div className="w-1/2 h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  </div>
                </div>
              </div>
              
              {/* Offers skeleton */}
              <div className="mb-2">
                <div className="flex items-center mb-1">
                  <div className="w-3 h-3 bg-green-200 dark:bg-green-700 rounded mr-1"></div>
                  <div className="w-14 h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
                <div className="w-28 h-2 bg-green-200 dark:bg-green-700 rounded"></div>
              </div>
            </div>
            
            {/* CardFooter */}
            <div className="p-3 pt-0 border-t border-gray-200 dark:border-gray-700 mt-auto">
              <div className="flex justify-between items-center w-full">
                <div className="text-left">
                  <div className="w-14 h-4 bg-gray-200 dark:bg-gray-700 rounded mb-1"></div>
                  <div className="w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
                <div className="text-right">
                  <div className="w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Platform card skeleton - matches PlatformCard structure exactly
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg animate-pulse h-full flex flex-col">
          {/* CardHeader */}
          <div className="p-2 pb-1">
            {/* Image skeleton */}
            <div className="w-full h-28 bg-gray-200 dark:bg-gray-700 rounded-lg mb-2"></div>
            
            {/* Platform ID skeleton */}
            <div className="mb-1">
              <div className="w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
            
            {/* Title skeleton */}
            <div className="w-3/4 h-3 bg-gray-200 dark:bg-gray-700 rounded mb-1"></div>
            
            {/* Description skeleton */}
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
          </div>
          
          {/* CardContent */}
          <div className="p-3 pt-0">
            {/* Features skeleton */}
            <div className="mb-3">
              <div className="flex items-center mb-1">
                <div className="w-3 h-3 bg-yellow-200 dark:bg-yellow-700 rounded mr-1"></div>
                <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-200 dark:bg-blue-700 rounded mr-1"></div>
                  <div className="w-2/3 h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-200 dark:bg-purple-700 rounded mr-1"></div>
                  <div className="w-1/2 h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-indigo-200 dark:bg-indigo-700 rounded mr-1"></div>
                  <div className="w-3/4 h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
              </div>
            </div>
            
            {/* Offers skeleton */}
            <div className="mb-3">
              <div className="flex items-center mb-1">
                <div className="w-3 h-3 bg-green-200 dark:bg-green-700 rounded mr-1"></div>
                <div className="w-14 h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
              <div className="w-28 h-2 bg-green-200 dark:bg-green-700 rounded"></div>
            </div>
          </div>
          
          {/* CardFooter */}
          <div className="p-3 pt-0 mt-auto">
            <div className="w-full text-right">
              <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Small skeleton for user pass cards
export const UserPassCardSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-3 h-24">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
            <div className="space-y-1">
              <div className="w-20 h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>
              <div className="w-16 h-2 bg-gray-300 dark:bg-gray-600 rounded"></div>
            </div>
          </div>
          <div className="w-16 h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>
            <div className="w-24 h-2 bg-gray-300 dark:bg-gray-600 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Grid skeleton for user passes
export const UserPassesGridSkeleton: React.FC<{ count: number }> = ({ count }) => {
  const skeletons = Array.from({ length: count }, (_, index) => (
    <UserPassCardSkeleton key={index} />
  ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {skeletons}
    </div>
  );
}; 