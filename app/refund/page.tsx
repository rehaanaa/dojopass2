'use client';

import React from 'react';
import { Shield, CheckCircle, XCircle } from 'lucide-react';

const RefundPolicyPage: React.FC = () => {
  const refundTerms = [
    {
      title: "24-Hour Refund Window",
      description: "We offer a 24-hour refund window from the time of purchase. If you're not satisfied with your digital pass, you can request a refund within this period."
    },
    {
      title: "Technical Issues",
      description: "If the digital pass doesn't work due to technical issues on our end, we'll provide a full refund or replacement pass."
    },
    {
      title: "Verified Passes",
      description: "All our passes are verified and tested before listing. We ensure authenticity and functionality of all products."
    },
    {
      title: "No Refund Cases",
      description: "Refunds are not available for working passes, user errors, or after the 24-hour window has expired."
    }
  ];

  const refundProcess = [
    {
      step: 1,
      title: "Contact Support",
      description: "Reach out to our support team via WhatsApp, email, or phone within 24 hours of purchase."
    },
    {
      step: 2,
      title: "Provide Details",
      description: "Share your order details, transaction ID, and reason for the refund request."
    },
    {
      step: 3,
      title: "Review Process",
      description: "Our team will review your request and verify the issue within 2-4 hours."
    },
    {
      step: 4,
      title: "Refund Processing",
      description: "If approved, your refund will be processed within 24-48 hours to your original payment method."
    }
  ];

  return (
    <div 
      className="min-h-screen bg-white dark:bg-black transition-colors duration-200" 
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
              <a href="/" className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Home</a>
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
            <h1 className="text-4xl font-bold text-black dark:text-white mb-4">Refund Policy</h1>
            <p className="text-lg text-black dark:text-white">Our commitment to customer satisfaction</p>
          </div>
        </div>
      </section>

      {/* Refund Terms */}
      <section className="py-16 bg-gray-50 dark:bg-black transition-colors duration-200">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-3">Refund Terms</h2>
            <p className="text-lg text-black dark:text-white">Understanding our refund policy</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {refundTerms.map((term, index) => (
              <div key={index} className="text-left">
                <h3 className="text-xl font-semibold text-black dark:text-white mb-2">{term.title}</h3>
                <p className="text-black dark:text-white leading-relaxed">{term.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Refund Process */}
      <section className="py-16 bg-white dark:bg-black transition-colors duration-200">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-3">Refund Process</h2>
            <p className="text-lg text-black dark:text-white">How to request a refund</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {refundProcess.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-black dark:text-white mb-2">{step.title}</h3>
                    <p className="text-black dark:text-white leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-gray-50 dark:bg-black transition-colors duration-200">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-3">Important Notes</h2>
            <p className="text-lg text-black dark:text-white">Things to keep in mind</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            <div>
                                <h3 className="text-lg font-semibold text-black dark:text-white mb-3">Refund Eligibility</h3>
                  <ul className="space-y-2 text-black dark:text-white">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Refund requests must be made within 24 hours of purchase</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Technical issues with the digital pass</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Pass not delivered within 30 minutes</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Working passes cannot be refunded</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>User errors or incorrect purchases</span>
                </li>
              </ul>
            </div>

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
};

export default RefundPolicyPage; 