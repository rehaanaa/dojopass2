'use client';

import React from 'react';
import PayMethod from './PayMethod';
import CheckoutDetails from './CheckoutDetails';
import PaymentSuccess from './PaymentSuccess';

interface PassPaymentSectionProps {
  selectedPass: any | null;
  selectedPlatform: any | null;
  paymentResult: { success: boolean; message: string; transactionId?: string } | null;
  isProcessing: boolean;
  onPaymentSubmit: (upiId: string) => void;
  onBackToPasses: () => void;
  onGoToAccount: () => void;
}

export default function PassPaymentSection({ 
  selectedPass, 
  selectedPlatform, 
  paymentResult, 
  isProcessing, 
  onPaymentSubmit, 
  onBackToPasses, 
  onGoToAccount 
}: PassPaymentSectionProps) {
  if (!selectedPass) return null;

  if (paymentResult) {
    if (paymentResult.success) {
      return (
        <PaymentSuccess
          transactionId={paymentResult.transactionId || 'TXN_1753962089547_m6cch407r'}
          onGoToPasses={onGoToAccount}
        />
      );
    } else {
      return (
        <div className="text-center py-4">
          <div className="text-2xl mb-2 text-red-500">
            <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm">
            {paymentResult.message}
          </p>
          <button
            onClick={onBackToPasses}
            className="px-3 py-1.5 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm transition-colors hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            Back to Passes
          </button>
        </div>
      );
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
      {/* Left Panel - Payment Method Selection */}
      <div className="pr-0">
        <PayMethod
          onPaymentSubmit={onPaymentSubmit}
          isProcessing={isProcessing}
        />
      </div>
      
      {/* Right Panel - Checkout Details */}
      <div className="pl-0 -ml-1">
        <CheckoutDetails
          selectedPlatform={selectedPlatform}
          selectedPass={selectedPass}
          onBack={onBackToPasses}
        />
      </div>
    </div>
  );
}
