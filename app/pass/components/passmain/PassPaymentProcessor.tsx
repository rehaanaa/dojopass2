'use client';

import React from 'react';

export default function PassPaymentProcessor() {
  const processPayment = async (
    upiId: string,
    selectedPass: any,
    selectedPlatform: any,
    user: any,
    dojoUser: any,
    setIsProcessing: (processing: boolean) => void,
    setPaymentResult: (result: any) => void
  ) => {
    console.log('Payment submission started with UPI ID:', upiId);
    console.log('Selected pass:', selectedPass);
    console.log('Selected platform:', selectedPlatform);
    console.log('User email:', user?.email || dojoUser?.email);
    
    setIsProcessing(true);
    
    try {
      // Improved payment success rate - 95% success rate instead of 70%
      const success = Math.random() > 0.05; // 95% success rate
      const transactionId = `TXN_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      console.log('Payment simulation result:', { success, transactionId });
      
      if (success) {
        // Save the purchased pass to database
        if (selectedPass && selectedPlatform) {
          const userEmail = user?.email || dojoUser?.email;
          
          console.log('Selected platform:', selectedPlatform);
          console.log('Selected pass:', selectedPass);
          console.log('User email:', userEmail);
          
          if (userEmail && dojoUser?.id) {
            try {
              // Debug: Log user information
              console.log('🔍 Debug - User information:', {
                supabaseUserId: user?.id,
                dojoUserId: dojoUser?.id,
                dojoUserEmail: dojoUser?.email,
                dojoUserFull: dojoUser
              });
              
              // Save to database via API using new user_purchased table
              const requestBody = {
                user_id: dojoUser.id,
                pass_id: selectedPass.id,
                platform_id: selectedPlatform.id,
                pass_name: selectedPass.title,
                price: selectedPass.price,
                duration_days: selectedPass.duration_days,
                transaction_id: transactionId
              };
              
              console.log('🔍 API request body:', requestBody);
              
              const response = await fetch('/api/user-purchased', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
              });

              const result = await response.json();
              
              if (result.success) {
                console.log('Pass saved to database successfully:', result.data);
                
                // Also update localStorage for backward compatibility
                const purchasedPass = {
                  id: result.data.id.toString(),
                  name: selectedPass.title,
                  pass_id: selectedPass.id.toString(),
                  platform: {
                    name: selectedPlatform.title || selectedPlatform.name
                  },
                  pass: {
                    name: selectedPass.title
                  },
                  payment_amount: selectedPass.price,
                  purchase_date: result.data.purchase_date,
                  status: result.data.status,
                  expiry_date: result.data.expiry_date,
                  transaction_id: transactionId
                };
                
                // Store in localStorage using user_purchased key for consistency
                const existingPasses = localStorage.getItem('user_purchased');
                let userPasses = [];
                
                if (existingPasses) {
                  try {
                    userPasses = JSON.parse(existingPasses);
                  } catch (error) {
                    console.error('Error parsing existing passes:', error);
                    userPasses = [];
                  }
                }
                
                userPasses.push(purchasedPass);
                localStorage.setItem('user_purchased', JSON.stringify(userPasses));
              } else {
                console.error('Failed to save pass to database:', result.error);
                
                // Provide better error handling based on error type
                let errorMessage = 'Database error occurred';
                if (result.error && typeof result.error === 'string') {
                  if (result.error.includes('Duplicate purchase')) {
                    errorMessage = 'Duplicate purchase detected - this should not happen with new logic';
                    console.log('Duplicate purchase detected - this should not happen with new logic');
                  } else if (result.error.includes('Invalid reference')) {
                    errorMessage = 'Invalid reference - user, platform, or pass not found';
                  } else if (result.error.includes('Invalid data')) {
                    errorMessage = 'Invalid data - check price and duration values';
                  } else {
                    errorMessage = result.error;
                  }
                }
                
                console.log('Error details:', { error: result.error, message: errorMessage });
                
                // Continue with the purchase anyway and save to localStorage as fallback
                const purchasedPass = {
                  ...selectedPass,
                  purchased_at: new Date().toISOString(),
                  transaction_id: transactionId,
                  platform_name: selectedPlatform.name
                };
                
                // Store in localStorage using user_purchased key for consistency
                const existingPasses = localStorage.getItem('user_purchased');
                let userPasses = [];
                
                if (existingPasses) {
                  try {
                    userPasses = JSON.parse(existingPasses);
                  } catch (error) {
                    console.error('Error parsing existing passes:', error);
                    userPasses = [];
                  }
                }
                
                userPasses.push(purchasedPass);
                localStorage.setItem('user_purchased', JSON.stringify(userPasses));
              }
            } catch (apiError) {
              console.error('API error, saving to localStorage as fallback:', apiError);
              // Fallback to localStorage
              const purchasedPass = {
                ...selectedPass,
                purchased_at: new Date().toISOString(),
                transaction_id: transactionId,
                platform_name: selectedPlatform.name
              };
              
              // Store in localStorage using user_purchased key for consistency
              const existingPasses = localStorage.getItem('user_purchased');
              let userPasses = [];
              
              if (existingPasses) {
                try {
                  userPasses = JSON.parse(existingPasses);
                } catch (error) {
                  console.error('Error parsing existing passes:', error);
                  userPasses = [];
                }
              }
              
              userPasses.push(purchasedPass);
              localStorage.setItem('user_purchased', JSON.stringify(userPasses));
            }
          } else {
            // No user email, save to localStorage only
            console.log('❌ No user email or dojo user ID found, saving to localStorage only');
            console.log('❌ Debug - Available user data:', {
              userEmail: userEmail,
              dojoUserId: dojoUser?.id,
              dojoUser: dojoUser,
              user: user
            });
            const purchasedPass = {
              ...selectedPass,
              purchased_at: new Date().toISOString(),
              transaction_id: transactionId,
              platform_name: selectedPlatform.name
            };
            
            // Store in localStorage using user_purchased key for consistency
            const existingPasses = localStorage.getItem('user_purchased');
            let userPasses = [];
            
            if (existingPasses) {
              try {
                userPasses = JSON.parse(existingPasses);
              } catch (error) {
                console.error('Error parsing existing passes:', error);
                userPasses = [];
              }
            }
            
            userPasses.push(purchasedPass);
            localStorage.setItem('user_purchased', JSON.stringify(userPasses));
          }
        }
        
        setPaymentResult({
          success: true,
          message: 'Payment successful! Your pass has been activated. You can purchase this pass again anytime.',
          transactionId
        });
      } else {
        // Payment failed - provide more specific error message
        console.log('Payment simulation failed - showing error message');
        setPaymentResult({
          success: false,
          message: 'Payment processing failed. Please check your UPI ID and try again.',
          transactionId
        });
      }
    } catch (error) {
      console.error('Payment processing error:', error);
      setPaymentResult({
        success: false,
        message: 'Network error. Please check your connection and try again.',
        transactionId: undefined
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const resetPayment = (
    setPaymentResult: (result: any) => void,
    setIsProcessing: (processing: boolean) => void
  ) => {
    setPaymentResult(null);
    setIsProcessing(false);
  };

  return { processPayment, resetPayment };
}
