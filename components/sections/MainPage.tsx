'use client';

import React, { Suspense } from 'react';
import MainPageMain from './main/MainPageMain';

export default function MainPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MainPageMain />
    </Suspense>
  );
}
