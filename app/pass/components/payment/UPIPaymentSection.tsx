'use client';

import React from 'react';
import { QrCode, CheckCircle, Shield } from 'lucide-react';
import Image from 'next/image';
import { STORAGE_CONFIG } from '@/lib/storage-config';

interface UPIPaymentSectionProps {
  showQR: boolean;
  isProcessing: boolean;
  onPaymentSubmit: (upiId: string) => void;
}

export default function UPIPaymentSection({ 
  showQR, 
  isProcessing, 
  onPaymentSubmit 
}: UPIPaymentSectionProps) {
  return (
    <div className="space-y-3">
      {/* Payment Options Tabs */}
      <div className="flex space-x-2 mb-3">
        <button
          onClick={() => {}} // Disabled for now
          disabled={true}
          className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-not-allowed opacity-50 ${
            !showQR 
              ? 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400' 
              : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
          }`}
        >
          Enter UPI ID
        </button>
        <button
          onClick={() => {}} // This will be handled by parent
          disabled={isProcessing}
          className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
            showQR 
              ? 'bg-green-600 text-white' 
              : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
          } ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <QrCode className="w-3 h-3 inline mr-1" />
          Scan & Pay
        </button>
      </div>

      {!showQR ? (
        <div className="space-y-3">
          <div className="text-center p-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg">
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Please use "Scan & Pay" option to proceed with payment
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          {/* QR Code with actual image */}
          <div className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg">
            <h4 className="text-xs font-medium text-gray-900 dark:text-gray-100 mb-3">
              Scan & Pay - Use this QR code
            </h4>
            <div className="w-40 h-40 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center mb-3 p-3 border border-gray-300 dark:border-gray-600">
              <Image
                src="https://mbzxsvhuswrowjlujhco.supabase.co/storage/v1/object/sign/payment/qr.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82Nzg3MzVkNC1jMzBkLTQ1MmUtOWE5YS1kZThlODQwYzc1M2MiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwYXltZW50L3FyLmpwZWciLCJpYXQiOjE3NTUxMTQ2OTQsImV4cCI6MTc4NjY1MDY5NH0.jbf0FWnYh_fkM8KyG9OmUPqt-sdU1LmkaCOZb33PJxc"
                alt="PayDojo QR Code"
                width={128}
                height={128}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
              Scan this QR code with any UPI app
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400 text-center mt-1">
              UPI ID: rouk@ybl
            </p>
          </div>

          {/* How to Pay in 4 Steps */}
          <div className="mb-3">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-5 h-5 text-primary">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 4h10v2H7V4zm0 4h10v8H7V8z"/>
                </svg>
              </div>
              <p className="text-xs font-medium text-foreground">How to pay in 4 steps:</p>
            </div>
            <div className="text-xs text-muted-foreground space-y-1 ml-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Open any UPI app (Google Pay, PhonePe, Paytm)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Scan the QR code above</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span>Enter amount and add note</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span>Complete payment</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-2 ml-3">
              <div className="w-6 h-6 text-green-600 dark:text-green-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/>
                  <path d="M8 7h8"/>
                  <path d="M12 17.5 8 15h1a4 4 0 0 0 0-8"/>
                  <path d="M8 11h8"/>
                </svg>
              </div>
              <span className="text-xs text-muted-foreground">After payment, send screenshot and details to <span className="font-medium text-blue-600 dark:text-blue-400">📧 dojopasss@gmail.com</span> • You will receive your passes within 12 hours in your account</span>
            </div>
          </div>

          {/* I made payment button */}
          <div className="flex justify-center mt-3">
            <button
              onClick={() => onPaymentSubmit('rouk@ybl')}
              disabled={isProcessing}
              className={`px-3 py-1.5 text-xs rounded-lg transition-colors flex items-center space-x-2 font-medium ${
                isProcessing 
                  ? 'bg-green-500 text-white cursor-not-allowed opacity-70' 
                  : 'bg-green-500 hover:bg-green-600 text-white shadow-md hover:shadow-lg'
              }`}
            >
              {isProcessing ? (
                <>
                  <div className="w-2 h-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <CheckCircle className="w-3 h-3" />
                  <span>I made payment</span>
                </>
              )}
            </button>
          </div>

          {/* Trusted and Encrypted Payment */}
          <div className="flex items-center justify-center space-x-2 mt-3">
            <div className="flex items-center space-x-1">
              <Shield className="w-3 h-3 text-primary" />
              <span className="text-xs text-primary font-medium">Trusted</span>
            </div>
            <span className="text-xs text-muted-foreground">•</span>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 text-blue-600 dark:text-blue-400">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">Encrypted</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
