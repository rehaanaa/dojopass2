'use client';

import React from 'react';
import { LogOut, Trash2 } from 'lucide-react';

// Custom Delete Icon
const DeleteIcon = ({ className }: { className?: string }) => (
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

interface AccountSettingsSectionProps {
  userEmail: string;
  onLogout: () => void;
  onDeleteAccount: () => void;
}

export default function AccountSettingsSection({ 
  userEmail, 
  onLogout, 
  onDeleteAccount 
}: AccountSettingsSectionProps) {
  return (
    <div className="space-y-4">
      {/* Account Information */}
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <DeleteIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <h2 className="text-lg font-semibold text-foreground">Account Information</h2>
        </div>
        
        <div className="space-y-3 mb-6">
          <div>
            <label className="block text-xs font-medium text-muted-foreground mb-1">
              Email
            </label>
            <p className="text-sm text-foreground">{userEmail}</p>
          </div>
        </div>
        
        <div className="flex justify-center space-x-3">
          <button
            onClick={onLogout}
            className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200 text-xs"
          >
            <LogOut className="w-3 h-3 inline mr-1" />
            <span>Logout</span>
          </button>
          
          <button
            onClick={onDeleteAccount}
            className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200 text-xs"
          >
            <Trash2 className="w-3 h-3 inline mr-1" />
            <span>Delete Account</span>
          </button>
        </div>
      </div>
    </div>
  );
}
