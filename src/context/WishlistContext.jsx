import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react';
import { useToast } from './ToastContext';

const WishlistContext = createContext(null);
const STORAGE_KEY = 'shopsphere_wishlist';

const loadWishlist = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const parsed = saved ? JSON.parse(saved) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const WishlistProvider = ({ children }) => {
  const { showToast } = useToast();
  const [wishlist, setWishlist] = useState(loadWishlist);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlist));
    } catch {
      /* ignore quota errors */
    }
  }, [wishlist]);

  const toggleWishlist = useCallback((product) => {
    if (!product?.id) return;
    const exists = wishlist.some((p) => p.id === product.id);
    setWishlist((prev) =>
      exists ? prev.filter((p) => p.id !== product.id) : [...prev, product]
    );
    showToast(exists ? `Removed “${product.name}” from wishlist` : `Saved “${product.name}” to wishlist`);
  }, [wishlist, showToast]);

  const isWishlisted = useCallback((productId) => wishlist.some((p) => p.id === productId), [wishlist]);

  const removeFromWishlist = useCallback((productId) => {
    setWishlist((prev) => prev.filter((p) => p.id !== productId));
  }, []);

  const clearWishlist = useCallback(() => setWishlist([]), []);

  const value = useMemo(
    () => ({
      wishlist,
      toggleWishlist,
      isWishlisted,
      removeFromWishlist,
      clearWishlist,
      wishlistCount: wishlist.length,
    }),
    [wishlist, toggleWishlist, isWishlisted, removeFromWishlist, clearWishlist]
  );

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
