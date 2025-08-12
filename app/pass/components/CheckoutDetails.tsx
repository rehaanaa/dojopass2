'use client';

import React, { useState, useEffect } from 'react';
import { Clock, Package, Tag, Users, CheckCircle, BadgeCheck, Receipt, IndianRupee } from 'lucide-react';

import { useAuth } from '@/contexts/AuthContext';

// Local icon utility function to replace missing import
const getIconComponent = (type: string, className: string) => {
  const iconMap: { [key: string]: React.ReactNode } = {
    'chatgpt': <CheckCircle className={className} />,
    'spotify': <CheckCircle className={className} />,
    'netflix': <CheckCircle className={className} />,
    'youtube': <CheckCircle className={className} />,
    'domain': <CheckCircle className={className} />,
    'star': <CheckCircle className={className} />,
    'premium': <CheckCircle className={className} />,
    'basic': <CheckCircle className={className} />,
    'pro': <CheckCircle className={className} />,
    'enterprise': <CheckCircle className={className} />
  };
  
  return iconMap[type?.toLowerCase() || ''] || <CheckCircle className={className} />;
};

interface CheckoutDetailsProps {
  selectedPlatform: any | null;
  selectedPass: any | null;
  onBack: () => void;
}

const CheckoutDetails: React.FC<CheckoutDetailsProps> = ({ 
  selectedPlatform, 
  selectedPass, 
  onBack 
}) => {
  const { user } = useAuth();

  if (!selectedPlatform || !selectedPass) {
    return (
      <div className="p-6">
        <div className="text-center py-8">
          <p className="text-gray-600 dark:text-gray-400">Please select a platform and pass first</p>
        </div>
      </div>
    );
  }

  const finalPrice = selectedPass.price;

  return (
    <div className="p-3 pl-0 pr-0 max-w-sm">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
          Order Summary
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Review your selected pass details
        </p>
      </div>

      {/* Pass Details */}
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">Pass Details</h3>
        
        <div className="space-y-3">
          {/* Pass Name with Receipt Text Icon */}
          <div className="flex items-center space-x-3">
            <div className="p-2">
              <Receipt className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100">{selectedPass.name || selectedPass.title}</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Digital Pass</p>
            </div>
          </div>

          {/* Price and Duration */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center space-x-2">
              <div className="p-1">
                <IndianRupee className="w-3 h-3 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400">Price</p>
                <p className="text-sm font-semibold text-green-600 dark:text-green-400">₹{selectedPass.price}</p>
              </div>
            </div>

            {selectedPass.duration_days && (
              <div className="flex items-center space-x-2">
                <div className="p-1">
                  <Clock className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Duration</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{selectedPass.duration_days} days</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Features Included */}
      {selectedPass.features && Array.isArray(selectedPass.features) && selectedPass.features.length > 0 && (
        <div className="mb-4">
          <h4 className="text-xs font-medium text-gray-900 dark:text-gray-100 mb-2">Features Included</h4>
          <ul className="space-y-1">
            {selectedPass.features.slice(0, 5).map((feature: any, index: number) => {
              // Use different colors for feature dots
              const colors = [
                'bg-blue-500',
                'bg-purple-500', 
                'bg-pink-500',
                'bg-orange-500',
                'bg-teal-500'
              ];
              const colorClass = colors[index % colors.length];
              
              return (
                <li key={index} className="flex items-center space-x-2">
                  <div className={`w-2 h-2 ${colorClass} rounded-full`}></div>
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    {typeof feature === 'string' ? feature : 
                     typeof feature === 'object' && feature && 'text' in feature ? 
                     (feature as any).text : 'Feature'}
                  </span>
                </li>
              );
            })}
            {selectedPass.features.length > 5 && (
              <li className="text-xs text-gray-600 dark:text-gray-400">
                +{selectedPass.features.length - 5} more features
              </li>
            )}
          </ul>
        </div>
      )}

      {/* Multiple Purchase Info */}
      <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
        <div className="flex items-start space-x-2">
          <div className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0">
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
            </svg>
          </div>
          <div>
            <p className="text-xs font-medium text-blue-900 dark:text-blue-100">
              Multiple Purchases Allowed
            </p>
            <p className="text-xs text-blue-700 dark:text-blue-300">
              You can purchase this pass multiple times for different purposes or to gift to others.
            </p>
          </div>
        </div>
      </div>

      {/* Price Summary */}
      <div className="mb-4">
        <div className="space-y-2">
          <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400">Total Amount</p>
                <p className="text-lg font-bold text-green-600 dark:text-green-400">
                  ₹{selectedPass.price}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutDetails; 