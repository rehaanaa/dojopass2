'use client';

import React from 'react';
import { Shield, Lock, Eye, Database, Users, FileText } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div 
      className="min-h-screen bg-white dark:bg-black transition-colors duration-200 text-black dark:text-white" 
      style={{ 
        fontSize: 'clamp(0.75rem, 1.25vw, 0.875rem)',
        transform: 'scale(1)',
        transformOrigin: 'top left'
      }}
    >
      {/* Navigation */}
      <nav className="bg-white/80 dark:bg-black/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img 
                  src="/pass/dojopass.png" 
                  alt="DojoPass Logo" 
                  className="w-16 h-16 mr-2 object-contain cursor-pointer"
                  onClick={() => window.location.href = '/'}
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/" className="text-black dark:text-white hover:text-green-600 dark:hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Home</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-white dark:bg-black transition-colors duration-200">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-green-600 dark:text-green-400 mb-4">
              <Shield className="w-8 h-8 mx-auto" />
            </div>
            <h1 className="text-4xl font-bold text-black dark:text-white mb-4">Privacy Policy</h1>
            <p className="text-lg text-black dark:text-white">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-gray-50 dark:bg-black transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4 flex items-center">
              <Lock className="h-6 w-6 text-green-600 dark:text-green-400 mr-3" />
              Introduction
            </h2>
            <p className="text-black dark:text-white mb-4 leading-relaxed">
              At DojoPass, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our digital 
              pass platform.
            </p>
            <p className="text-black dark:text-white leading-relaxed">
              By using DojoPass, you consent to the data practices described in this policy.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4 flex items-center">
              <Database className="h-6 w-6 text-green-600 dark:text-green-400 mr-3" />
              Information We Collect
            </h2>
            
            <h3 className="text-xl font-medium text-black dark:text-white mb-3">Personal Information</h3>
            <ul className="list-disc pl-6 text-black dark:text-white mb-4 space-y-1">
              <li>Email address (for authentication and account management)</li>
              <li>Name and profile information from Google OAuth</li>
              <li>Transaction history and purchase details</li>
              <li>Device information and IP address</li>
            </ul>

            <h3 className="text-xl font-medium text-black dark:text-white mb-3">Usage Information</h3>
            <ul className="list-disc pl-6 text-black dark:text-white mb-4 space-y-1">
              <li>Platform and pass browsing history</li>
              <li>Payment method preferences</li>
              <li>Customer support interactions</li>
              <li>Website usage analytics</li>
            </ul>
          </div>

          {/* How We Use Information */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4 flex items-center">
              <Eye className="h-6 w-6 text-green-600 dark:text-green-400 mr-3" />
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 text-black dark:text-white mb-4 space-y-1">
              <li>Process and fulfill your digital pass purchases</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Send important updates about your purchases</li>
              <li>Improve our platform and user experience</li>
              <li>Ensure platform security and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          {/* Information Sharing */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4 flex items-center">
              <Users className="h-6 w-6 text-green-600 dark:text-green-400 mr-3" />
              Information Sharing
            </h2>
            <p className="text-black dark:text-white mb-4 leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
              except in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-black dark:text-white mb-4 space-y-1">
              <li>Payment processors (to complete transactions)</li>
              <li>Digital pass providers (to deliver your purchases)</li>
              <li>Legal requirements (when required by law)</li>
              <li>Platform security (to prevent fraud and abuse)</li>
            </ul>
          </div>

          {/* Data Security */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4 flex items-center">
              <Shield className="h-6 w-6 text-green-600 dark:text-green-400 mr-3" />
              Data Security
            </h2>
            <p className="text-black dark:text-white mb-4 leading-relaxed">
              We implement appropriate security measures to protect your personal information:
            </p>
            <ul className="list-disc pl-6 text-black dark:text-white mb-4 space-y-1">
              <li>Encryption of sensitive data in transit and at rest</li>
              <li>Secure authentication through Google OAuth</li>
              <li>Regular security audits and updates</li>
              <li>Limited access to personal information by staff</li>
              <li>Secure hosting infrastructure</li>
            </ul>
          </div>

          {/* Your Rights */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4 flex items-center">
              <FileText className="h-6 w-6 text-green-600 dark:text-green-400 mr-3" />
              Your Rights
            </h2>
            <p className="text-black dark:text-white mb-4 leading-relaxed">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-black dark:text-white mb-4 space-y-1">
              <li>Access your personal information</li>
              <li>Update or correct your information</li>
              <li>Request deletion of your account</li>
              <li>Opt-out of marketing communications</li>
              <li>Export your data</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">Contact Us</h2>
            <p className="text-black dark:text-white mb-4 leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-black dark:text-white">
                <strong>Email:</strong> dojopasss@gmail.com
              </p>
              <p className="text-black dark:text-white">
                <strong>Website:</strong> /
              </p>
            </div>
          </div>

          {/* Updates to Policy */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">Updates to This Policy</h2>
            <p className="text-black dark:text-white leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the "Last updated" date. Your continued use of DojoPass after any 
              changes constitutes acceptance of the updated policy.
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
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
              <h3 className="text-2xl font-bold text-white">DojoPass</h3>
            </div>
              <p className="text-gray-300 mb-6">
                India's fastest digital pass store for ChatGPT Plus, Spotify Premium, Domains, Netflix & more.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <a href="/help" className="hover:text-white transition-colors duration-200">Help Center</a>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <a href="/shipping" className="hover:text-white transition-colors duration-200">Shipping & Delivery</a>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <a href="/refund" className="hover:text-white transition-colors duration-200">Refund Policy</a>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <a href="/terms" className="hover:text-white transition-colors duration-200">Terms of Service</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Products</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <a href="#" className="hover:text-white transition-colors duration-200">ChatGPT Plus</a>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <a href="#" className="hover:text-white transition-colors duration-200">Spotify Premium</a>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <a href="#" className="hover:text-white transition-colors duration-200">Domains</a>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  <a href="#" className="hover:text-white transition-colors duration-200">Netflix</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Connect</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <a href="#" className="hover:text-white transition-colors duration-200">WhatsApp</a>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <a href="#" className="hover:text-white transition-colors duration-200">Telegram</a>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <a href="#" className="hover:text-white transition-colors duration-200">Email</a>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <a href="#" className="hover:text-white transition-colors duration-200">Phone</a>
                </li>
              </ul>
            </div>

          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 DojoPass. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

