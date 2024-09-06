// context/CartContext.js
import React, { createContext, useState, useContext } from 'react';

// Создание контекста
const CartContext = createContext();

// Провайдер контекста
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

// Хук для использования контекста
export const useCart = () => useContext(CartContext);
