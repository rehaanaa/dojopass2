'use client';

import React, { useState, useRef, useEffect } from 'react';
import { User, Shield, Settings, LogOut, Copy, Check, Ticket, Monitor, Sun, Moon } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

import { useTheme } from 'next-themes';
import { getUserByEmail, createOrUpdateUser } from '@/lib/api';
import AuthUserManager from '@/contexts/auth/AuthUserManager';

interface UserPassProps {
  className?: string;
}

const UserPass: React.FC<UserPassProps> = ({ className }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dojoUser, setDojoUser] = useState<any | null>(null);
  const [copied, setCopied] = useState(false);
  const [userPasses, setUserPasses] = useState<any[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { user, signOut, autoLogin } = useAuth();
  const router = useRouter();
  const { setTheme, theme } = useTheme();

  // Theme options for the dropdown
  const themeOptions = [
    { value: 'light', label: 'Light', icon: <Sun className="w-3 h-3" /> },
    { value: 'dark', label: 'Dark', icon: <Moon className="w-3 h-3" /> },
    { value: 'system', label: 'System', icon: <Monitor className="w-3 h-3" /> }
  ];

  // Handle theme change
  const handleThemeChange = (themeValue: string) => {
    setTheme(themeValue);
  };

  // Get stored email from localStorage
  const getStoredEmail = (): string | null => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('dojo_email');
    }
    return null;
  };

  // Get user passes from localStorage (fallback only)
  const getUserPassesFromStorage = () => {
    if (typeof window !== 'undefined') {
      const storedPasses = localStorage.getItem('user_purchased');
      if (storedPasses) {
        try {
          return JSON.parse(storedPasses);
        } catch (error) {
          return [];
        }
      }
    }
    return [];
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Auto-login and get basic user data on component mount
  useEffect(() => {
    const initializeUser = async () => {
      // Try to auto-login first
      await autoLogin();
      
      // Get passes from localStorage as fallback
      const storedPasses = getUserPassesFromStorage();
      setUserPasses(storedPasses);
    };

    initializeUser();
  }, []);

  // Fetch dojo user data when user is available
  useEffect(() => {
    const fetchDojoUser = async () => {
      if (user?.email) {
        try {
          console.log('Fetching dojo user data for email:', user.email);
          
          // Get real user data from database using API
          const result = await getUserByEmail(user.email);

          if (!result.success) {
            if (result.error === 'User not found') {
              // No user found in database - this might be a new user
              // Don't try to create user automatically - let the auth system handle it
              return;
            } else {
              // Continue with local data if database is unavailable
            }
            return;
          }

          if (result.data) {
            setDojoUser(result.data);
          }
        } catch (error) {
          // Handle error silently
        }
      }
    };

    fetchDojoUser();
  }, [user?.email]);

  // Listen for custom events to refresh passes (e.g., after purchase)
  useEffect(() => {
    const handlePassPurchase = () => {
      const storedPasses = getUserPassesFromStorage();
      setUserPasses(storedPasses);
    };

    window.addEventListener('pass-purchased', handlePassPurchase);
    
    return () => {
      window.removeEventListener('pass-purchased', handlePassPurchase);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await signOut();
      setIsDropdownOpen(false);
    } catch (error) {
      // Handle error silently
    }
  };

  const handleCopyDojoID = async () => {
    if (dojoUser?.dojo_id) {
      try {
        await navigator.clipboard.writeText(dojoUser.dojo_id);
        setCopied(true);
        // Remove setTimeout to prevent timeout errors
        // The copied state will be reset when user interacts with the component
      } catch (error) {
        // Handle error silently
      }
    }
  };

  const handleSettingsClick = () => {
    router.push('/account');
    setIsDropdownOpen(false);
  };

  const menuItems = [
    {
      icon: <Shield className="w-3 h-3" />,
      label: `My Passes (${userPasses.length})`,
      action: () => router.push('/pass'),
      color: 'text-primary'
    },
    {
      icon: <Settings className="w-3 h-3" />,
      label: 'Account',
      action: handleSettingsClick,
      color: 'text-muted-foreground'
    },
    {
      icon: <LogOut className="w-3 h-3" />,
      label: 'Logout',
      action: handleLogout,
      color: 'text-red-600 dark:text-red-400'
    }
  ];

  // Get user display info
  const getUserDisplayInfo = () => {
    const storedEmail = getStoredEmail();
    const displayName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || storedEmail?.split('@')[0] || 'User';
    const displayEmail = dojoUser?.email || user?.email || storedEmail || 'user@example.com';
    
    return { displayName, displayEmail };
  };

  const { displayName, displayEmail } = getUserDisplayInfo();

  // Get user profile image
  const getUserProfileImage = () => {
    return user?.user_metadata?.avatar_url || user?.user_metadata?.picture || null;
  };

  const profileImage = getUserProfileImage();

  return (
    <div className={`fixed top-2 right-2 z-50 ${className}`} ref={dropdownRef}>
      {/* User Avatar Button */}
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors duration-200 overflow-hidden"
      >
        {profileImage ? (
          <img 
            src={profileImage} 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        ) : (
          <User className="w-4 h-4 text-primary-foreground" />
        )}
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-1 w-48 bg-background border border-border rounded-lg shadow-lg py-1 z-50">
          {/* User Info */}
          <div className="px-3 py-2 border-b border-border">
            <p className="text-xs font-medium text-foreground">
              {displayName}
            </p>
            <p className="text-xs text-muted-foreground">
              {displayEmail}
            </p>
            <div className="flex items-center justify-between mt-1">
              <p className="text-xs text-primary font-mono">
                DojoID: {dojoUser?.dojo_id || ''}
              </p>
              <button
                onClick={handleCopyDojoID}
                className="p-0.5 text-muted-foreground hover:text-primary transition-colors"
                title="Copy DojoID"
                disabled={!dojoUser?.dojo_id}
              >
                {copied ? (
                  <Check className="w-2.5 h-2.5 text-primary" />
                ) : (
                  <Copy className="w-2.5 h-2.5" />
                )}
              </button>
            </div>
            {/* Passes Count */}
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-border">
              <p className="text-xs text-muted-foreground">
                Passes: {userPasses.length}
              </p>
            </div>
          </div>

          {/* Theme Toggle Section */}
          <div className="px-3 py-1 border-b border-border">
            <div className="flex items-center space-x-1 mb-1">
              <Monitor className="w-3 h-3 text-blue-600 dark:text-blue-400" />
              <span className="text-xs font-medium text-foreground">Theme</span>
            </div>
            <div className="space-y-0.5">
              {themeOptions.map((themeOption) => (
                <button
                  key={themeOption.value}
                  onClick={() => handleThemeChange(themeOption.value)}
                  className={`w-full flex items-center space-x-2 px-1 py-0.5 text-xs rounded transition-colors duration-200 ${
                    theme === themeOption.value
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <span className={theme === themeOption.value ? 'text-primary' : 'text-muted-foreground'}>
                    {themeOption.icon}
                  </span>
                  <span>{themeOption.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items */}
          <div className="py-1">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  item.action();
                  setIsDropdownOpen(false);
                }}
                className="w-full flex items-center space-x-2 px-3 py-1.5 text-xs text-muted-foreground hover:bg-muted transition-colors duration-200"
              >
                <span className={item.color}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPass; 