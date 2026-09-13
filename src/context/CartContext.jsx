import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react';
import { useToast } from './ToastContext';

const CartContext = createContext(null);
const STORAGE_KEY = 'shopsphere_cart';

const loadCart = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const parsed = saved ? JSON.parse(saved) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const CartProvider = ({ children }) => {
  const { showToast } = useToast();
  const [cart, setCart] = useState(loadCart);
  const [badgePulse, setBadgePulse] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch {
      /* ignore quota errors */
    }
  }, [cart]);

  const pulseBadge = useCallback(() => {
    setBadgePulse(true);
    setTimeout(() => setBadgePulse(false), 420);
  }, []);

  const addToCart = useCallback((product, quantity = 1) => {
    if (!product?.id) return;
    const qty = Math.max(1, Number(quantity) || 1);
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + qty } : item
        );
      }
      return [...prevCart, { ...product, quantity: qty }];
    });
    pulseBadge();
    showToast(`Added “${product.name}” to your cart`);
  }, [pulseBadge, showToast]);

  const removeFromCart = useCallback((productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    showToast('Item removed from cart');
  }, [showToast]);

  const updateQuantity = useCallback((productId, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id !== productId) return item;
          const nextQty = item.quantity + delta;
          return nextQty > 0 ? { ...item, quantity: nextQty } : null;
        })
        .filter(Boolean)
    );
  }, []);

  const setQuantity = useCallback((productId, quantity) => {
    const qty = Number(quantity);
    if (qty <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity: qty } : item))
    );
  }, [removeFromCart]);

  const clearCart = useCallback((silent = false) => {
    setCart([]);
    if (!silent) showToast('Cart cleared');
  }, [showToast]);

  const cartCount = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
  const cartTotal = cart.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 0), 0);

  const value = useMemo(
    () => ({
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      setQuantity,
      clearCart,
      cartCount,
      cartTotal,
      badgePulse,
    }),
    [cart, cartCount, cartTotal, badgePulse, addToCart, removeFromCart, updateQuantity, setQuantity, clearCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
