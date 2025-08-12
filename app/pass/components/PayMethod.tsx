'use client';

import React from 'react';
import PayMethodMain from './payment/PayMethodMain';

interface PayMethodProps {
  onPaymentSubmit: (upiId: string) => void;
  isProcessing: boolean;
}

const PayMethod: React.FC<PayMethodProps> = ({ 
  onPaymentSubmit, 
  isProcessing 
}) => {
  return <PayMethodMain onPaymentSubmit={onPaymentSubmit} isProcessing={isProcessing} />;
};

export default PayMethod; 