'use client';

import React from 'react';
import { FileText } from 'lucide-react';

const TermsOfServicePage: React.FC = () => {
  const termsSections = [
    {
      title: "Acceptance of Terms",
      content: "By accessing and using DojoPass, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
    },
    {
      title: "Service Description",
      content: "DojoPass is a digital pass marketplace that provides access to various digital services including but not limited to ChatGPT Plus, Spotify Premium, Netflix, and other digital subscriptions. We act as an intermediary between users and service providers."
    },
    {
      title: "User Responsibilities",
      content: "Users are responsible for providing accurate information, maintaining the security of their accounts, and using the services in compliance with applicable laws and regulations. Users must not engage in fraudulent activities or violate any terms of the original service providers."
    },
    {
      title: "Payment and Billing",
      content: "All payments are processed securely through our payment partners. Prices are subject to change without notice. Refunds are available within 24 hours of purchase under specific conditions outlined in our refund policy."
    },
    {
      title: "Privacy and Security",
      content: "We are committed to protecting your privacy. Your personal information is collected, used, and protected in accordance with our Privacy Policy. We implement industry-standard security measures to protect your data."
    },
    {
      title: "Limitation of Liability",
      content: "DojoPass is not liable for any damages arising from the use of our services, including but not limited to direct, indirect, incidental, or consequential damages. Our liability is limited to the amount paid for the specific service."
    }
  ];



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
                <img src="/passlogo.png" alt="DojoPass Logo" className="w-8 h-8 mr-2" />
                <h1 className="text-xl font-bold text-green-600 dark:text-green-400">DojoPass</h1>
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
              <FileText className="w-8 h-8 mx-auto" />
            </div>
            <h1 className="text-4xl font-bold text-black dark:text-white mb-4">Terms of Service</h1>
            <p className="text-lg text-black dark:text-white">Please read these terms carefully before using our services</p>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-16 bg-gray-50 dark:bg-black transition-colors duration-200">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-3">Terms and Conditions</h2>
            <p className="text-lg text-black dark:text-white">Understanding our service terms</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            {termsSections.map((section, index) => (
              <div key={index} className="text-left">
                <h3 className="text-xl font-semibold text-black dark:text-white mb-3">{section.title}</h3>
                <p className="text-black dark:text-white leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>





      {/* Footer */}
      <footer className="bg-black text-white py-12 transition-colors duration-200">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/passlogo.png" alt="DojoPass Logo" className="w-8 h-8 mr-3" />
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
};

export default TermsOfServicePage; 