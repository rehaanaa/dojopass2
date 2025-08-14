'use client';

import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Receipt, CheckCircle, Mail, Heart } from 'lucide-react';

interface PaymentSuccessProps {
  transactionId: string;
  onGoToPasses: () => void;
}

const PaymentSuccess: React.FC<PaymentSuccessProps> = ({ 
  transactionId, 
  onGoToPasses 
}) => {
  useEffect(() => {
    // Trigger confetti animation
    confetti({ 
      particleCount: 100, 
      spread: 70, 
      origin: { y: 0.6 }, 
      colors: ['#22c55e', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6'] 
    });

    // Dispatch custom event to refresh user passes
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('pass-purchased'));
    }
  }, []);

  return (
    <div className="text-center py-8">
      {/* Receipt Text Icon */}
      <div className="mb-4">
        <Receipt className="w-16 h-16 text-green-600 dark:text-green-400 mx-auto" />
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Payment Successful</h2>
      
      {/* Shortened Success Message */}
      <div className="space-y-2 mb-6">
        <div className="flex items-center justify-center space-x-2 text-gray-700 dark:text-gray-300">
          <span>Payment successful! Passes will be added within 12hr.</span>
        </div>
        <div className="flex items-center justify-center space-x-2 text-gray-700 dark:text-gray-300">
          <Mail className="w-5 h-5 text-purple-500" />
          <span>Check your account or email!</span>
        </div>
      </div>

      <div className="mb-6 text-sm text-gray-600 dark:text-gray-400">
        <p>Transaction ID: {transactionId}</p>
      </div>

      <div className="flex justify-center">
        <button
          onClick={onGoToPasses}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors flex items-center space-x-2 text-sm"
        >
          <CheckCircle className="w-3 h-3" />
          <span>Go to My Passes</span>
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
