'use client';

import React from 'react';

export default function PassStepHandler() {
  const handlePlatformSelect = (
    platform: any,
    setSelectedPlatform: (platform: any) => void,
    setSelectedPass: (pass: any) => void,
    setPaymentResult: (result: any) => void,
    handleStepChange: (step: number) => void
  ) => {
    setSelectedPlatform(platform);
    setSelectedPass(null);
    setPaymentResult(null);
    handleStepChange(1);
  };

  const handlePassSelect = (
    pass: any,
    setSelectedPass: (pass: any) => void,
    handleStepChange: (step: number) => void
  ) => {
    setSelectedPass(pass);
    handleStepChange(2);
  };

  const handleStepChange = (
    step: number,
    setCurrentStep: (step: number) => void,
    setSelectedPlatform: (platform: any) => void,
    setSelectedPass: (pass: any) => void,
    setPaymentResult: (result: any) => void
  ) => {
    setCurrentStep(step);
    if (step === 0) {
      setSelectedPlatform(null);
      setSelectedPass(null);
      setPaymentResult(null);
    } else if (step === 1) {
      setSelectedPass(null);
      setPaymentResult(null);
    }
  };

  const handleBackToPasses = (
    handleStepChange: (step: number) => void,
    resetPayment: () => void
  ) => {
    handleStepChange(1);
    resetPayment();
  };

  return { handlePlatformSelect, handlePassSelect, handleStepChange, handleBackToPasses };
}
