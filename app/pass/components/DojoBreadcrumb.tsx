'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
  isActive?: boolean;
}

interface DojoBreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const DojoBreadcrumb: React.FC<DojoBreadcrumbProps> = ({ items, className }) => {
  return (
    <nav className={`flex items-center space-x-1 text-xs ${className}`}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <button
            onClick={item.onClick}
            disabled={!item.onClick}
            className={`flex items-center transition-none border-0 bg-transparent p-0 m-0 outline-none shadow-none ${
              item.isActive
                ? 'text-green-500 dark:text-green-400 font-medium'
                : 'text-gray-700 dark:text-gray-300'
            } ${!item.onClick ? 'cursor-default' : 'cursor-pointer'}`}
            style={{ border: 'none', background: 'transparent' }}
          >
            {item.label}
          </button>
          {index < items.length - 1 && (
            <ChevronRight className="w-3 h-3 text-gray-600 dark:text-gray-400" />
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}; 