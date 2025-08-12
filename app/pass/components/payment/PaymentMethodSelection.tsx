'use client';

import React from 'react';
import Image from 'next/image';

interface PaymentMethodSelectionProps {
  selectedMethod: 'upi';
  isProcessing: boolean;
  onMethodSelect: (method: 'upi') => void;
}

export default function PaymentMethodSelection({ 
  selectedMethod, 
  isProcessing, 
  onMethodSelect 
}: PaymentMethodSelectionProps) {
  return (
    <div className="mb-4">
      <h3 className="text-base font-semibold text-foreground mb-3">
        Payment Method
      </h3>
      
      <div className="grid grid-cols-3 gap-2">
        {/* UPI Option */}
        <div 
          className={`p-3 border rounded-lg transition-all duration-200 text-center ${
            selectedMethod === 'upi' 
              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
              : 'border-border'
          } ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={() => !isProcessing && onMethodSelect('upi')}
        >
          <div className="flex flex-col items-center space-y-1">
            <div className="w-8 h-8 flex items-center justify-center">
              <Image
                src={process.env.NEXT_PUBLIC_STORAGE_UPI_ICON_URL || '/images/upi-placeholder.png'}
                alt="UPI Payment"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h4 className="text-xs font-medium text-foreground">UPI Payment</h4>
              <p className="text-xs text-muted-foreground">Instant payment via UPI</p>
            </div>
          </div>
        </div>

        {/* Card Option (Disabled for now) */}
        <div className="p-3 border border-border rounded-lg bg-muted text-muted-foreground cursor-not-allowed text-center">
          <div className="flex flex-col items-center space-y-1">
            <div className="w-8 h-8 flex items-center justify-center">
              <Image
                src={process.env.NEXT_PUBLIC_STORAGE_CARD_ICON_URL || '/images/card-placeholder.png'}
                alt="Credit/Debit Card"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h4 className="text-xs font-medium text-gray-600 dark:text-gray-400">Credit/Debit Card</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Coming soon</p>
            </div>
          </div>
        </div>

        {/* PayPal Option (Disabled for now) */}
        <div className="p-3 border border-border rounded-lg bg-muted text-muted-foreground cursor-not-allowed text-center">
          <div className="flex flex-col items-center space-y-1">
            <div className="w-8 h-8 flex items-center justify-center">
              <Image
                src={process.env.NEXT_PUBLIC_STORAGE_PAYPAL_ICON_URL || '/images/paypal-placeholder.png'}
                alt="PayPal"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h4 className="text-xs font-medium text-gray-600 dark:text-gray-400">PayPal</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
