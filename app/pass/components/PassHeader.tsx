'use client';

import React from 'react';
import DojoStepper from './DojoStepper';
import PassProgress from './PassProgress';
import { DojoBreadcrumb } from './DojoBreadcrumb';

interface PassHeaderProps {
  currentStep: number;
  selectedPlatform: any | null;
  selectedPass: any | null;
  onStepChange: (step: number) => void;
}

export default function PassHeader({ 
  currentStep, 
  selectedPlatform, 
  selectedPass, 
  onStepChange 
}: PassHeaderProps) {
  const getBreadcrumbItems = () => {
    const items = [
      { label: 'Platform', onClick: () => onStepChange(0), isActive: currentStep === 0 }
    ];

    if (selectedPlatform) {
      items[0] = { label: selectedPlatform.title || selectedPlatform.name || 'Platform', onClick: () => onStepChange(0), isActive: currentStep === 0 };
      items.push({ label: 'Passes', onClick: () => onStepChange(1), isActive: currentStep === 1 });
    }

    if (selectedPass) {
      items.push({ label: 'Payment', onClick: () => onStepChange(2), isActive: currentStep === 2 });
    }

    return items;
  };

  return (
    <div className="relative bg-white dark:bg-black z-40 pt-4 pb-2">
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Title and Description */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Digital Pass Store</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Choose your platform, select passes, and unlock premium features
          </p>
        </div>
        
        {/* Stepper */}
        <div className="mb-2">
          <DojoStepper 
            currentStep={currentStep}
            onStepChange={onStepChange}
          />
        </div>

        {/* Progress Bar */}
        <div className="mb-2">
          <PassProgress 
            currentStep={currentStep}
            totalSteps={3}
          />
          
          {/* Motivational Message */}
          <div className="text-center mt-2">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {currentStep === 0 && (
                <span className="flex items-center justify-center space-x-1">
                  <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Select your preferred platform to get started</span>
                </span>
              )}
              {currentStep === 1 && (
                <span className="flex items-center justify-center space-x-1">
                  <svg className="w-3 h-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Choose the perfect pass for your needs</span>
                </span>
              )}
              {currentStep === 2 && (
                <span className="flex items-center justify-center space-x-1">
                  <svg className="w-3 h-3 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <span>Complete your purchase to unlock premium features</span>
                </span>
              )}
            </p>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="mb-4">
          <DojoBreadcrumb items={getBreadcrumbItems()} />
        </div>
      </div>
    </div>
  );
}
