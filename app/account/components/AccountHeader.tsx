'use client';

import React from 'react';
import { User, Settings } from 'lucide-react';

// Custom Delete Icon
const CustomDeleteIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"/>
    <path d="m12 9 6 6"/>
    <path d="m18 9-6 6"/>
  </svg>
);

// Custom Receipt Indian Rupee Icon
const CustomReceiptIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/>
    <path d="M8 7h8"/>
    <path d="M12 17.5 8 15h1a4 4 0 0 0 0-8"/>
    <path d="M8 11h8"/>
  </svg>
);

interface AccountHeaderProps {
  activeTab: 'passes' | 'settings';
  userPassesCount: number;
  onTabChange: (tab: 'passes' | 'settings') => void;
}

export default function AccountHeader({ 
  activeTab, 
  userPassesCount, 
  onTabChange 
}: AccountHeaderProps) {
  return (
    <>
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <User className="w-6 h-6 text-primary" />
          <h1 className="text-2xl font-bold text-foreground">My Account</h1>
        </div>
        <p className="text-muted-foreground text-sm">
          Manage your account and view your purchased passes
        </p>
      </div>

      {/* Tabs */}
      <div className="mb-6 border-b border-border">
        <div className="flex justify-center space-x-6">
          <button
            onClick={() => onTabChange('passes')}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
              activeTab === 'passes'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            <div className="flex items-center space-x-2">
              <CustomReceiptIcon className="w-4 h-4 text-primary" />
              <span>My Passes ({userPassesCount})</span>
            </div>
          </button>
          <button
            onClick={() => onTabChange('settings')}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
              activeTab === 'settings'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            <div className="flex items-center space-x-2">
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
