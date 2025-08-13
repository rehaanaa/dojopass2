'use client';

import React from 'react';

interface DatabaseErrorDisplayProps {
  error: string;
  onRetry?: () => void;
}

export default function DatabaseErrorDisplay({ error, onRetry }: DatabaseErrorDisplayProps) {
  const isSchemaError = error.includes('schema') || error.includes('table') || error.includes('PGRST106') || error.includes('Database setup required');
  const isConfigError = error.includes('configuration') || error.includes('environment');
  
  return (
    <div className="max-w-2xl mx-auto p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <svg className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-medium text-red-800 dark:text-red-200">
            Database Connection Error
          </h3>
          
          <div className="mt-2 text-sm text-red-700 dark:text-red-300">
            <p className="mb-3">
              {isSchemaError 
                ? "The database schema is not properly configured. This usually means the required tables haven't been created yet."
                : isConfigError
                ? "The database configuration is missing or incorrect. Please check your environment variables."
                : "There was an error connecting to the database."
              }
            </p>
            
            {isSchemaError && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-red-200 dark:border-red-700">
                <h4 className="font-medium text-red-800 dark:text-red-200 mb-2">To fix this:</h4>
                <ol className="list-decimal list-inside space-y-1 text-sm">
                  <li>Go to <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">supabase.com</a> and sign in to your project</li>
                  <li>Navigate to <strong>SQL Editor</strong> in your dashboard</li>
                  <li>Copy the entire contents of <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">database-schema.sql</code></li>
                  <li>Paste and run the SQL script</li>
                  <li>Refresh this page after setup</li>
                </ol>
              </div>
            )}
            
            {isConfigError && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded border border-red-200 dark:border-red-700">
                <h4 className="font-medium text-red-800 dark:text-red-200 mb-2">To fix this:</h4>
                <ol className="list-decimal list-inside space-y-1 text-sm">
                  <li>Create a <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">.env.local</code> file in your project root</li>
                  <li>Add your Supabase credentials:</li>
                  <li className="ml-4">
                    <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded block mt-1">
                      NEXT_PUBLIC_SUPABASE_URL=your_project_url<br/>
                      NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key<br/>
                      SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
                    </code>
                  </li>
                  <li>Restart your development server</li>
                </ol>
              </div>
            )}
            
            <div className="mt-4 flex space-x-3">
              {onRetry && (
                <button
                  onClick={onRetry}
                  className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Try Again
                </button>
              )}
              
              <a
                href="/DATABASE_SETUP.md"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-600 text-white text-sm font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                View Setup Guide
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
