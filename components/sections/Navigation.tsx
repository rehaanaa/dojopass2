'use client';

import React from 'react';

interface NavigationProps {
  user: any;
  handleAuthClick: () => void;
  handleSignOut: () => void;
}

export default function Navigation({ user, handleAuthClick, handleSignOut }: NavigationProps) {
  return (
    <nav className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-border">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img src="/passlogo.png" alt="DojoPass Logo" className="w-8 h-8 mr-2" />
              <h1 className="text-xl font-bold text-primary">DojoPass</h1>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#platforms" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Platform</a>
            <a href="#passes" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Pass</a>
            {user ? (
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2">
                  {(user as any)?.user_metadata?.avatar_url ? (
                    <img 
                      src={(user as any).user_metadata.avatar_url} 
                      alt="Profile" 
                      className="w-8 h-8 rounded-full border-2 border-primary"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                      {(user as any)?.email?.charAt(0).toUpperCase() || 'U'}
                    </div>
                  )}
                  <span className="text-sm text-foreground">{(user as any)?.email || 'User'}</span>
                </div>
                <a href="/" className="btn-landing text-xs px-3 py-2">
                  My Passes
                </a>
                <button onClick={handleSignOut} className="px-3 py-1.5 border border-border hover:border-border/80 text-foreground hover:text-foreground/80 transition-colors text-sm rounded-lg">
                  Sign Out
                </button>
              </div>
            ) : (
              <button onClick={handleAuthClick} className="btn-landing text-xs px-3 py-2">
                Sign In
              </button>
            )}
          </div>
          <div className="md:hidden flex items-center space-x-2">
            {user ? (
              <div className="flex items-center space-x-2">
                {(user as any)?.user_metadata?.avatar_url ? (
                  <img 
                    src={(user as any).user_metadata.avatar_url} 
                    alt="Profile" 
                    className="w-6 h-6 rounded-full border-2 border-primary"
                  />
                ) : (
                  <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">
                    {(user as any)?.email?.charAt(0).toUpperCase() || 'U'}
                  </div>
                )}
                <a href="/" className="btn-landing text-xs px-3 py-2">
                  My Passes
                </a>
              </div>
            ) : (
              <button onClick={handleAuthClick} className="btn-landing text-xs px-3 py-2">
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
