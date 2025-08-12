'use client';

import React from 'react';

interface DojoStepperProps {
  currentStep: number;
  onStepChange?: (step: number) => void;
}

const DojoStepper: React.FC<DojoStepperProps> = ({
  currentStep,
  onStepChange
}) => {
  const steps = [
    { id: 1, title: 'Choose Platform' },
    { id: 2, title: 'Choose Pass' },
    { id: 3, title: 'PayDojo!' }
  ];

  const handleStepClick = (stepIndex: number) => {
    if (onStepChange) {
      onStepChange(stepIndex);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Stepper */}
      <div className="flex items-center justify-between relative mb-3">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center flex-1 relative">
            {/* Step Circle */}
            <div
              onClick={() => handleStepClick(index)}
              className={`flex items-center justify-center w-6 h-6 rounded-full border-2 cursor-pointer transition-all duration-300 mb-1 z-10 ${
                index < currentStep
                  ? 'bg-green-500 border-green-500 text-white'
                  : index === currentStep
                  ? 'bg-green-500 border-green-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-500 text-gray-700 dark:text-gray-200'
              }`}
            >
              <span className="text-xs font-semibold">{step.id}</span>
            </div>

            {/* Step Title */}
            <div
              className={`text-xs font-medium text-center transition-colors duration-300 ${
                index <= currentStep ? 'text-green-500 dark:text-green-400' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              {step.title}
            </div>
          </div>
        ))}
        
        {/* Connector Lines - with fill color based on progress */}
        <div className={`absolute top-3 left-1/3 w-1/6 h-1 transform -translate-x-1/2 transition-colors duration-300 ${
          currentStep > 0 ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-500'
        }`} />
        <div className={`absolute top-3 right-1/3 w-1/6 h-1 transform translate-x-1/2 transition-colors duration-300 ${
          currentStep > 1 ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-500'
        }`} />
      </div>
    </div>
  );
};

export default DojoStepper; 