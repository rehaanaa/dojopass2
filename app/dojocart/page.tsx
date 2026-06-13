import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

const DojoCart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.name} - ${item.price}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DojoCart;