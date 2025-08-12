'use client';

import React from 'react';
import { ArrowLeft, Smartphone, Shield, CheckCircle } from 'lucide-react';
import Image from 'next/image';

interface PaymentInstructionsProps {
  isProcessing: boolean;
  onBackToUPI: () => void;
  onPaymentSubmit: (upiId: string) => void;
}

export default function PaymentInstructions({ 
  isProcessing, 
  onBackToUPI, 
  onPaymentSubmit 
}: PaymentInstructionsProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-2 mb-3">
        <button
          onClick={onBackToUPI}
          disabled={isProcessing}
          className={`p-1.5 transition-colors ${
            isProcessing 
              ? 'text-gray-600 dark:text-gray-400 cursor-not-allowed' 
              : 'text-gray-600 dark:text-gray-400'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
          Payment Instructions
        </h3>
      </div>

      {/* How to Pay Instructions */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
        <div className="flex items-start space-x-2">
          <Smartphone className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
          <div className="space-y-1.5">
            <h4 className="text-sm font-medium text-blue-900 dark:text-blue-100">
              How to Pay
            </h4>
            <ol className="text-xs text-blue-700 dark:text-blue-300 space-y-0.5 ml-3">
              <li>1. Open your UPI app (Google Pay, PhonePe, Paytm, etc.)</li>
              <li>2. Scan the QR code below or enter UPI ID manually</li>
              <li>3. Enter the amount and add note</li>
              <li>4. Add a note: "DojoPass Payment"</li>
              <li>5. Complete the payment</li>
              <li>6. Click "I have made payment" button below</li>
            </ol>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-2 mt-2">
              <p className="text-xs font-medium text-gray-900 dark:text-gray-100">UPI ID: rouk@ybl</p>
            </div>
          </div>
        </div>
      </div>

      {/* QR Code for Scan & Pay */}
      <div className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg">
        <h4 className="text-xs font-medium text-gray-900 dark:text-gray-100 mb-3">
          Scan & Pay - Use this QR code
        </h4>
        <div className="w-40 h-40 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center mb-3 p-3 border border-gray-300 dark:border-gray-600">
          <Image
            src={process.env.NEXT_PUBLIC_STORAGE_QR_CODE_URL || '/images/qrcode-placeholder.jpeg'}
            alt="PayDojo QR Code"
            width={128}
            height={128}
            className="w-full h-full object-contain"
          />
        </div>
        <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
          Scan this QR code with any UPI app to pay instantly
        </p>
      </div>

      {/* Security Notice */}
      <div className="flex items-start space-x-2 p-2 rounded-lg">
        <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-xs font-medium text-blue-800 dark:text-blue-200">Secure Payment</p>
          <p className="text-xs text-blue-600 dark:text-blue-300">
            Your payment is secured with bank-level encryption
          </p>
        </div>
      </div>

      {/* Payment Button */}
      <div className="flex justify-center mt-3">
        <button
          onClick={() => onPaymentSubmit('rouk@ybl')}
          disabled={isProcessing}
          className={`px-4 py-2 text-sm rounded-lg transition-colors flex items-center space-x-2 font-medium ${
            isProcessing 
              ? 'bg-green-500 text-white cursor-not-allowed shadow-lg opacity-70' 
              : 'bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl'
          }`}
        >
          {isProcessing ? (
            <>
              <div className="w-2 h-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Processing Payment...</span>
            </>
          ) : (
            <>
              <CheckCircle className="w-4 h-4" />
              <span>I have made payment</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
