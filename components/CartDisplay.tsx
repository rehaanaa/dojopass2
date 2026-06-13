import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const CartDisplay = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h2>Cart Items</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default CartDisplay;