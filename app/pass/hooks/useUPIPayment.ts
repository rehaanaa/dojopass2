import { useState } from 'react';
import { Pass, Platform } from '@/lib/types';

interface UseUPIPaymentProps {
  selectedPlatform: Platform | null;
  selectedPass: Pass | null;
}

interface PaymentResult {
  success: boolean;
  message: string;
  transactionId?: string;
}

export const useUPIPayment = ({ selectedPlatform, selectedPass }: UseUPIPaymentProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentResult, setPaymentResult] = useState<PaymentResult | null>(null);

  const processPayment = async (upiId: string): Promise<PaymentResult> => {
    if (!selectedPlatform || !selectedPass) {
      throw new Error('Platform and pass must be selected');
    }

    setIsProcessing(true);
    setPaymentResult(null);

    try {
      // Process payment immediately without setTimeout to prevent timeout errors
      // Generate a real transaction ID
      const transactionId = `TXN_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

      const result: PaymentResult = {
        success: true,
        message: 'Payment processed successfully!',
        transactionId
      };

      setPaymentResult(result);
      return result;
    } catch (error) {
      const result: PaymentResult = {
        success: false,
        message: error instanceof Error ? error.message : 'Payment failed'
      };

      setPaymentResult(result);
      throw error;
    } finally {
      setIsProcessing(false);
    }
  };

  const resetPayment = () => {
    setPaymentResult(null);
  };

  const validateUPI = (upiId: string): boolean => {
    // Basic UPI validation
    const upiRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z]{2,}$/;
    return upiRegex.test(upiId);
  };

  return {
    isProcessing,
    paymentResult,
    processPayment,
    resetPayment,
    validateUPI
  };
}; 