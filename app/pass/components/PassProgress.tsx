'use client';

import React from 'react';

interface PassProgressProps {
  currentStep: number;
  totalSteps: number;
}

const PassProgress: React.FC<PassProgressProps> = ({
  currentStep,
  totalSteps
}) => {
  const progressPercentage = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="w-full max-w-xs mx-auto">
      {/* Progress Labels */}
      <div className="flex justify-between items-center mb-0.5">
        <span className="text-xs font-medium text-gray-900 dark:text-gray-100">
          Step {currentStep + 1} of {totalSteps}
        </span>
        <span className="text-xs font-medium text-green-500 dark:text-green-400">
          {Math.round(progressPercentage)}%
        </span>
      </div>

      {/* Progress Bar - made shorter and thinner */}
      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-0.5">
        <div
          className="bg-green-500 h-0.5 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default PassProgress; 