'use client';

import React from 'react';
import Image from 'next/image';
import { STORAGE_CONFIG } from '@/lib/storage-config';

interface PaymentMethodSelectionProps {
  selectedMethod: 'card' | 'paypal' | 'upi';
  isProcessing: boolean;
  onMethodSelect: (method: 'card' | 'paypal' | 'upi') => void;
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
          className={`p-3 border rounded-lg transition-all duration-200 text-center cursor-pointer ${
            selectedMethod === 'upi' 
              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
              : 'border-border hover:border-blue-300'
          } ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={() => !isProcessing && onMethodSelect('upi')}
        >
          <div className="flex flex-col items-center space-y-1">
            <div className="w-8 h-8 flex items-center justify-center">
              <Image
                src={`${process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://dojopass.store'}/storage/v1/object/sign/payment/upi.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82Nzg3MzVkNC1jMzBkLTQ1MmUtOWE5YS1kZThlODQwYzc1M2MiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwYXltZW50L3VwaS5wbmciLCJpYXQiOjE3NTUxMTQ5NzEsImV4cCI6MTc4NjY1MDk3MX0.g5PSRp0iMv3OTOf0gW9uktZbpRAq82jgPfRz-CYkdp8`}
                alt="UPI Payment"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h4 className="text-xs font-medium text-foreground">UPI Payment</h4>
              <p className="text-xs text-muted-foreground">Pay via UPI</p>
            </div>
          </div>
        </div>

        {/* Card Option */}
        <div 
          className={`p-3 border rounded-lg transition-all duration-200 text-center cursor-pointer ${
            selectedMethod === 'card' 
              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
              : 'border-border hover:border-blue-300'
          } ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={() => !isProcessing && onMethodSelect('card')}
        >
          <div className="flex flex-col items-center space-y-1">
            <div className="w-8 h-8 flex items-center justify-center">
              <Image
                src={STORAGE_CONFIG.CARD_IMAGE || '/images/card-placeholder.png'}
                alt="Credit/Debit Card"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h4 className="text-xs font-medium text-foreground">Credit/Debit Card</h4>
              <p className="text-xs text-muted-foreground">Secure card payment</p>
            </div>
          </div>
        </div>

        {/* PayPal Option */}
        <div 
          className={`p-3 border rounded-lg transition-all duration-200 text-center cursor-pointer ${
            selectedMethod === 'paypal' 
              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
              : 'border-border hover:border-blue-300'
          } ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={() => !isProcessing && onMethodSelect('paypal')}
        >
          <div className="flex flex-col items-center space-y-1">
            <div className="w-8 h-8 flex items-center justify-center">
              <Image
                src={STORAGE_CONFIG.PAYPAL_IMAGE || '/images/paypal-placeholder.png'}
                alt="PayPal"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h4 className="text-xs font-medium text-foreground">PayPal</h4>
              <p className="text-xs text-muted-foreground">Pay with PayPal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
