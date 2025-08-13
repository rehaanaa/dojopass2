// lib/storage-config.ts
export const STORAGE_CONFIG = {
  // Base URLs
  SUPABASE_STORAGE_URL: process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL,
  SUPABASE_BUCKET: process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET,
  
  // Payment Method Images - Full URLs with Tokens
  CARD_IMAGE: process.env.NEXT_PUBLIC_STORAGE_CARD_URL,
  PAYPAL_IMAGE: process.env.NEXT_PUBLIC_STORAGE_PAYPAL_URL,
  UPI_ICON_IMAGE: process.env.NEXT_PUBLIC_STORAGE_UPI_ICON_URL,
  QR_CODE_IMAGE: process.env.NEXT_PUBLIC_STORAGE_QR_CODE_URL,
  
  // Payment Method Image Paths
  CARD_PATH: process.env.NEXT_PUBLIC_STORAGE_CARD_PATH,
  PAYPAL_PATH: process.env.NEXT_PUBLIC_STORAGE_PAYPAL_PATH,
  UPI_ICON_PATH: process.env.NEXT_PUBLIC_STORAGE_UPI_ICON_PATH,
  QR_CODE_PATH: process.env.NEXT_PUBLIC_STORAGE_QR_CODE_PATH,
  
  // Helper function to build storage URLs
  buildStorageUrl: (path: string) => {
    return `${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL}/${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET}/${path}`;
  },
  
  // Payment method configuration
  PAYMENT_METHODS: {
    CARD: {
      id: 'card',
      name: 'Credit/Debit Card',
      image: process.env.NEXT_PUBLIC_STORAGE_CARD_URL,
      description: 'Pay securely with your credit or debit card'
    },
    PAYPAL: {
      id: 'paypal',
      name: 'PayPal',
      image: process.env.NEXT_PUBLIC_STORAGE_PAYPAL_URL,
      description: 'Pay with your PayPal account'
    },
    UPI: {
      id: 'upi',
      name: 'UPI Payment',
      image: process.env.NEXT_PUBLIC_STORAGE_UPI_ICON_URL,
      description: 'Pay via UPI using the QR code'
    }
  },
  
  // QR Code configuration (separate from UPI payment method)
  QR_CODE: {
    image: process.env.NEXT_PUBLIC_STORAGE_QR_CODE_URL,
    path: process.env.NEXT_PUBLIC_STORAGE_QR_CODE_PATH,
    description: 'Scan this QR code with any UPI app'
  }
};
