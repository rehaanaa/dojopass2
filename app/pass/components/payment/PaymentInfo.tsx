'use client';

import React from 'react';

export default function PaymentInfo() {
  return (
    <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
      <div className="flex items-start space-x-2">
        <div className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0">
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clipRule="evenodd"/>
          </svg>
        </div>
        <div>
          <p className="text-xs font-medium text-green-900 dark:text-green-100">
            Unlimited Purchases
          </p>
          <p className="text-xs text-green-700 dark:text-green-300">
            Buy this pass as many times as you need - perfect for gifting or multiple accounts!
          </p>
        </div>
      </div>
    </div>
  );
}
