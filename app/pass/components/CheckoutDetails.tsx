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
                              <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100">{selectedPass.title}</h4>
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
      <div className="mb-4">
        <h4 className="text-xs font-medium text-gray-900 dark:text-gray-100 mb-2">Features Included</h4>
        <ul className="space-y-2">
          {/* 1. Refund Policy */}
          <li className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-3 h-3 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
            </div>
            <span className="text-xs text-gray-600 dark:text-gray-400">10 Days refund policy</span>
          </li>

          {/* 2. Secure Payment */}
          <li className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
              </svg>
            </div>
            <span className="text-xs text-gray-600 dark:text-gray-400">Secure payment</span>
          </li>

          {/* 3. Trusted Platform */}
          <li className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-3 h-3 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <span className="text-xs text-gray-600 dark:text-gray-400">Trusted platform</span>
          </li>

          {/* 4. Fast Shipping */}
          <li className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-3 h-3 text-orange-600 dark:text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </div>
            <span className="text-xs text-gray-600 dark:text-gray-400">Fast shipping</span>
          </li>

          {/* 5. Free Return */}
          <li className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-teal-100 dark:bg-teal-900/20 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-3 h-3 text-teal-600 dark:text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"/>
              </svg>
            </div>
            <span className="text-xs text-gray-600 dark:text-gray-400">Free return</span>
          </li>
        </ul>
      </div>

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