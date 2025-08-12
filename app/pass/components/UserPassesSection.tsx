'use client';

import React from 'react';
import { Pass } from '@/lib/types';
import PassCard from './PassCard';
import { DojoGridSkeleton } from '@/components/DojoSkeleton';
import EmptyState from '@/components/EmptyState';
import { Ticket } from 'lucide-react';

interface UserPassesSectionProps {
  userPasses: Pass[];
  userPassesLoading: boolean;
  onPassSelect: (pass: Pass) => void;
}

const UserPassesSection: React.FC<UserPassesSectionProps> = ({
  userPasses,
  userPassesLoading,
  onPassSelect
}) => {
  if (userPassesLoading) {
    return (
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="flex items-center space-x-2">
            <Ticket className="w-5 h-5 text-green-600 dark:text-green-400" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">My Passes</h2>
          </div>
        </div>
                      <DojoGridSkeleton count={5} variant="pass" />
      </div>
    );
  }

  if (userPasses.length === 0) {
    return (
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="flex items-center space-x-2">
            <Ticket className="w-5 h-5 text-green-600 dark:text-green-400" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">My Passes</h2>
          </div>
        </div>
        <EmptyState
          section="user-passes"
          onRetry={() => {}} // This will be handled by the parent component
        />
      </div>
    );
  }

  return (
    <div className="mb-8">
      <div className="flex items-center mb-4">
        <div className="flex items-center space-x-2">
          <Ticket className="w-5 h-5 text-green-600 dark:text-green-400" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">My Passes</h2>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            ({userPasses.length} {userPasses.length === 1 ? 'pass' : 'passes'})
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {userPasses.map((pass) => (
          <PassCard
            key={pass.id}
            pass={pass}
            onClick={onPassSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default UserPassesSection; 