'use client';

import React from 'react';
import { Shield, Lock, Eye, Database, Users, FileText } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-3">
            <Shield className="h-8 w-8 text-green-600 dark:text-green-400" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Privacy Policy
            </h1>
          </div>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <Lock className="h-6 w-6 text-green-600 dark:text-green-400 mr-3" />
              Introduction
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              At DojoPass, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our digital 
              pass platform.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              By using DojoPass, you consent to the data practices described in this policy.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <Database className="h-6 w-6 text-green-600 dark:text-green-400 mr-3" />
              Information We Collect
            </h2>
            
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">Personal Information</h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Email address (for authentication and account management)</li>
              <li>Name and profile information from Google OAuth</li>
              <li>Transaction history and purchase details</li>
              <li>Device information and IP address</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">Usage Information</h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Platform and pass browsing history</li>
              <li>Payment method preferences</li>
              <li>Customer support interactions</li>
              <li>Website usage analytics</li>
            </ul>
          </section>

          {/* How We Use Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <Eye className="h-6 w-6 text-green-600 dark:text-green-400 mr-3" />
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Process and fulfill your digital pass purchases</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Send important updates about your purchases</li>
              <li>Improve our platform and user experience</li>
              <li>Ensure platform security and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <Users className="h-6 w-6 text-green-600 dark:text-green-400 mr-3" />
              Information Sharing
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
              except in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Payment processors (to complete transactions)</li>
              <li>Digital pass providers (to deliver your purchases)</li>
              <li>Legal requirements (when required by law)</li>
              <li>Platform security (to prevent fraud and abuse)</li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <Shield className="h-6 w-6 text-green-600 dark:text-green-400 mr-3" />
              Data Security
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We implement appropriate security measures to protect your personal information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Encryption of sensitive data in transit and at rest</li>
              <li>Secure authentication through Google OAuth</li>
              <li>Regular security audits and updates</li>
              <li>Limited access to personal information by staff</li>
              <li>Secure hosting infrastructure</li>
            </ul>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <FileText className="h-6 w-6 text-green-600 dark:text-green-400 mr-3" />
              Your Rights
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Access your personal information</li>
              <li>Update or correct your information</li>
              <li>Request deletion of your account</li>
              <li>Opt-out of marketing communications</li>
              <li>Export your data</li>
            </ul>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Email:</strong> dojopasss@gmail.com
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Website:</strong> /
              </p>
            </div>
          </section>

          {/* Updates to Policy */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Updates to This Policy</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the "Last updated" date. Your continued use of DojoPass after any 
              changes constitutes acceptance of the updated policy.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}

