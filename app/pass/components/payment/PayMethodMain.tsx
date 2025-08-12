'use client';

import React, { useState } from 'react';
import { validateUPI } from '../../utils/validateUPI';
import PaymentInfo from './PaymentInfo';
import PaymentMethodSelection from './PaymentMethodSelection';
import UPIPaymentSection from './UPIPaymentSection';
import PaymentInstructions from './PaymentInstructions';

interface PayMethodMainProps {
  onPaymentSubmit: (upiId: string) => void;
  isProcessing: boolean;
}

export default function PayMethodMain({ 
  onPaymentSubmit, 
  isProcessing 
}: PayMethodMainProps) {
  const [upiId, setUpiId] = useState('');
  const [selectedMethod, setSelectedMethod] = useState<'upi'>('upi');
  const [showQR, setShowQR] = useState(true); // Changed to true to show QR by default
  const [showPaymentInstructions, setShowPaymentInstructions] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleUPIChange = (value: string) => {
    setUpiId(value);
    setValidationError(null);
    
    if (value.trim()) {
      const validation = validateUPI(value);
      if (!validation.isValid) {
        setValidationError(validation.error || 'Invalid UPI ID');
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!upiId.trim()) return;

    const validation = validateUPI(upiId);
    if (!validation.isValid) {
      setValidationError(validation.error || 'Invalid UPI ID');
      return;
    }

    await onPaymentSubmit(upiId);
  };

  const handleProceedToPayment = () => {
    if (!upiId.trim()) {
      setValidationError('UPI ID is required');
      return;
    }

    const validation = validateUPI(upiId);
    if (!validation.isValid) {
      setValidationError(validation.error || 'Invalid UPI ID');
      return;
    }

    setShowPaymentInstructions(true);
  };

  const handleBackToUPI = () => {
    setShowPaymentInstructions(false);
  };

  const isUPIValid = upiId.trim() && !validationError;

  return (
    <div className="p-3 pr-0 max-w-lg">
      {/* Multiple Purchase Info */}
      <PaymentInfo />

      {/* Payment Method Selection */}
      <PaymentMethodSelection 
        selectedMethod={selectedMethod}
        isProcessing={isProcessing}
        onMethodSelect={setSelectedMethod}
      />

      {/* UPI Form */}
      {selectedMethod === 'upi' && !showPaymentInstructions && (
        <UPIPaymentSection 
          showQR={showQR}
          isProcessing={isProcessing}
          onPaymentSubmit={onPaymentSubmit}
        />
      )}

      {/* Payment Instructions */}
      {showPaymentInstructions && (
        <PaymentInstructions 
          isProcessing={isProcessing}
          onBackToUPI={handleBackToUPI}
          onPaymentSubmit={onPaymentSubmit}
        />
      )}
    </div>
  );
}
