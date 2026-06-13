import React from 'react';
import { AuthProvider } from '../contexts/AuthContext';
import { CartProvider } from '../contexts/CartContext';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <AuthProvider>
      <CartProvider>
        <nav>
          <Link href="/dojocart">Cart</Link>
          {/* Other navigation links */}
        </nav>
        {children}
      </CartProvider>
    </AuthProvider>
  );
};

export default Layout;
