'use client';

import React from 'react';
import { Star, Zap, CheckCircle2, Sparkles, Bot, Gamepad2, Music, Video, Monitor, HardDrive } from 'lucide-react';
import FeatureIconMapper from './FeatureIconMapper';

interface PlatformFeaturesProps {
  features: any[];
}

export default function PlatformFeatures({ features }: PlatformFeaturesProps) {
  // Helper function to get feature icon based on index
  const getFeatureIcon = (index: number) => {
    const icons = [
      <Star key="star" className="w-3 h-3" />,
      <Zap key="zap" className="w-3 h-3" />,
      <CheckCircle2 key="check" className="w-3 h-3" />,
      <Sparkles key="sparkles" className="w-3 h-3" />,
      <Bot key="bot" className="w-3 h-3" />,
      <Gamepad2 key="gamepad" className="w-3 h-3" />,
      <Music key="music" className="w-3 h-3" />,
      <Video key="video" className="w-3 h-3" />,
      <Monitor key="monitor" className="w-3 h-3" />,
      <HardDrive key="harddrive" className="w-3 h-3" />
    ];
    return icons[index % icons.length];
  };

  // Helper function to get feature color based on index
  const getFeatureColor = (index: number) => {
    const colors = [
      'text-blue-600 dark:text-blue-400',
      'text-green-600 dark:text-green-400',
      'text-purple-600 dark:text-purple-400',
      'text-orange-600 dark:text-orange-400',
      'text-pink-600 dark:text-pink-400',
      'text-indigo-600 dark:text-indigo-400',
      'text-red-600 dark:text-red-400',
      'text-yellow-600 dark:text-yellow-400',
      'text-teal-600 dark:text-teal-400',
      'text-cyan-600 dark:text-cyan-400'
    ];
    return colors[index % colors.length];
  };

  if (!features || features.length === 0) {
    return (
      <div className="p-3 pt-0">
        <div className="mb-3">
          <div className="flex items-center mb-1">
            <svg className="w-3 h-3 mr-1 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs font-medium text-gray-900 dark:text-gray-100">Features</span>
          </div>
          <div className="text-[10px] md:text-xs text-gray-600 dark:text-gray-400">
            No features available
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-3 pt-0">
      {/* Features */}
      {features && features.length > 0 ? (
        <div className="mb-3">
          <div className="flex items-center mb-1">
            <svg className="w-3 h-3 mr-1 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Features ({features.length})</span>
          </div>
          <ul className="space-y-1 text-[11px] md:text-xs lg:text-sm text-gray-700 dark:text-gray-300">
            {features.map((feature: any, index: number) => {
              // Handle both 'name' and 'text' keys for features
              const featureText = feature.name || feature.text || feature;
              const featureIcon = getFeatureIcon(index);
              const featureColor = getFeatureColor(index);
              
              return (
                <li key={index} className="flex items-center">
                  <span className={`mr-2 flex-shrink-0 ${featureColor}`}>
                    {featureIcon}
                  </span>
                  <span>{featureText}</span>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className="mb-3">
          <div className="flex items-center mb-1">
            <svg className="w-3 h-3 mr-1 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs font-medium text-gray-900 dark:text-gray-100">Features</span>
          </div>
          <div className="text-[10px] md:text-xs text-gray-600 dark:text-gray-400">
            No features available
          </div>
        </div>
      )}
    </div>
  );
}
