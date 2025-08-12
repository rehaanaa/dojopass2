'use client';

import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface DeleteAccountModalProps {
  showDeleteConfirm: boolean;
  deleting: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function DeleteAccountModal({ 
  showDeleteConfirm, 
  deleting, 
  onCancel, 
  onConfirm 
}: DeleteAccountModalProps) {
  if (!showDeleteConfirm) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-background border border-border rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex items-center space-x-3 mb-4">
          <AlertTriangle className="w-6 h-6 text-red-600" />
          <h3 className="text-lg font-semibold text-foreground">Delete Account</h3>
        </div>
        
        <p className="text-muted-foreground mb-6">
          Are you sure you want to delete your account? This action cannot be undone and will permanently remove all your data including purchased passes.
        </p>
        
        <div className="flex space-x-3">
          <button
            onClick={onCancel}
            className="flex-1 px-4 py-2 bg-muted hover:bg-muted/80 text-muted-foreground rounded-lg transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={deleting}
            className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200 disabled:opacity-50"
          >
            {deleting ? 'Deleting...' : 'Delete Account'}
          </button>
        </div>
      </div>
    </div>
  );
}
