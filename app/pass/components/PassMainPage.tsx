'use client';

import React from 'react';
import PassMainPageMain from './passmain/PassMainPageMain';
import ErrorBoundary from './ErrorBoundary';

export default function PassMainPage() {
  return (
    <ErrorBoundary>
      <PassMainPageMain />
    </ErrorBoundary>
  );
}
