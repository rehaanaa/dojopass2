'use client';

import React from 'react';

import PassCard from './PassCard';
import { DojoGridSkeleton } from '@/components/DojoSkeleton';

interface PassListProps {
  passes: any[];
  onPassSelect: (pass: any) => void;
  loading?: boolean;
}

const PassList: React.FC<PassListProps> = ({ passes, onPassSelect, loading = false }) => {
  if (loading) {
    return (
      <DojoGridSkeleton count={5} variant="pass" />
    );
  }

  if (passes.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No passes available</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
      {passes.map((pass) => (
        <PassCard
          key={pass.id}
          pass={pass}
          onClick={onPassSelect}
        />
      ))}
    </div>
  );
};

export default PassList; 