'use client';

import React from 'react';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

export default function FooterSection() {
  return (
    <footer className="bg-black text-white py-12 transition-colors duration-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/pass/dojopass.png" 
                alt="DojoPass Logo" 
                className="w-20 h-20 mr-3 object-contain"
              />
              <h3 className="text-xl font-bold text-white">DojoPass</h3>
            </div>
            <p className="text-sm text-gray-300 mb-6">
              India's fastest digital pass store for ChatGPT Plus, Spotify Premium, Domains, Netflix & more.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-xs text-gray-300">Theme:</span>
              <ThemeToggle />
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white text-sm">Products</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <a href="#" className="hover:text-white transition-colors duration-200 text-xs">ChatGPT Plus</a>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <a href="#" className="hover:text-white transition-colors duration-200 text-xs">Spotify Premium</a>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <a href="#" className="hover:text-white transition-colors duration-200 text-xs">Domains</a>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                <a href="#" className="hover:text-white transition-colors duration-200 text-xs">Netflix</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white text-sm">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <a href="/help" className="hover:text-white transition-colors duration-200 text-xs">Help Center</a>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <a href="/shipping" className="hover:text-white transition-colors duration-200 text-xs">Shipping & Delivery</a>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                <a href="/refund" className="hover:text-white transition-colors duration-200 text-xs">Refund Policy</a>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <a href="/terms" className="hover:text-white transition-colors duration-200 text-xs">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white text-sm">Connect</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <a href="#" className="hover:text-white transition-colors duration-200 text-xs">WhatsApp</a>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <a href="#" className="hover:text-white transition-colors duration-200 text-xs">Telegram</a>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <a href="#" className="hover:text-white transition-colors duration-200 text-xs">Email</a>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                <a href="#" className="hover:text-white transition-colors duration-200 text-xs">Phone</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
          <p className="text-xs">&copy; 2025 DojoPass. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 