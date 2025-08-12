export interface UPIValidationResult {
  isValid: boolean;
  error?: string;
}

export const validateUPI = (upiId: string): UPIValidationResult => {
  // Remove any whitespace
  const cleanUpiId = upiId.trim();

  // Check if empty
  if (!cleanUpiId) {
    return {
      isValid: false,
      error: 'UPI ID is required'
    };
  }

  // Basic UPI format validation
  // UPI format: username@provider
  const upiRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z]{2,}$/;

  if (!upiRegex.test(cleanUpiId)) {
    return {
      isValid: false,
      error: 'Invalid UPI ID format. Use format: username@provider'
    };
  }

  // Check length
  if (cleanUpiId.length < 5 || cleanUpiId.length > 50) {
    return {
      isValid: false,
      error: 'UPI ID must be between 5 and 50 characters'
    };
  }

  // Check for common providers
  const commonProviders = [
    'okicici', 'paytm', 'phonepe', 'gpay', 'amazonpay', 
    'bhim', 'axis', 'hdfc', 'sbi', 'icici', 'kotak'
  ];

  const provider = cleanUpiId.split('@')[1]?.toLowerCase();
  
  if (provider && !commonProviders.includes(provider)) {
    return {
      isValid: true, // Still valid, just warning
      error: 'Unrecognized UPI provider. Please verify the provider name.'
    };
  }

  return {
    isValid: true
  };
};

export const formatUPI = (upiId: string): string => {
  return upiId.trim().toLowerCase();
};

export const getUPIProvider = (upiId: string): string | null => {
  const parts = upiId.split('@');
  return parts.length === 2 ? parts[1].toLowerCase() : null;
}; 