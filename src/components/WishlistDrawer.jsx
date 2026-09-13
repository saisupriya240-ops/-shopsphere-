import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import formatINR from '../utils/formatCurrency';
import SafeImage from './SafeImage';

const WishlistDrawer = ({ open, onClose }) => {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="drawer-overlay" onClick={onClose} role="presentation">
      <aside className="drawer-panel" role="dialog" aria-modal="true" aria-label="Wishlist" onClick={(e) => e.stopPropagation()}>
        <header className="drawer-head">
          <h2>Wishlist ({wishlist.length})</h2>
          <button type="button" className="story-close" onClick={onClose} aria-label="Close wishlist">
            ×
          </button>
        </header>
        {wishlist.length === 0 ? (
          <div className="empty-state" style={{ padding: '3rem 1rem' }}>
            <p className="empty-state-title">Nothing saved yet</p>
            <p className="empty-state-desc">Tap the heart on any product to keep it here.</p>
            <Link to="/products" className="btn-primary" onClick={onClose}>
              Discover products
            </Link>
          </div>
        ) : (
          <>
            <div className="drawer-body">
              {wishlist.map((item) => (
                <div key={item.id} className="cart-item">
                  <Link to={`/product/${item.id}`} onClick={onClose}>
                    <SafeImage src={item.image} alt={item.name} className="cart-item-img" width={76} height={76} />
                  </Link>
                  <div className="cart-item-details">
                    <Link to={`/product/${item.id}`} className="cart-item-title" onClick={onClose}>
                      {item.name}
                    </Link>
                    <div className="cart-item-price">{formatINR(item.price)}</div>
                    <div className="wishlist-item-actions">
                      <button
                        type="button"
                        className="add-cart-btn"
                        onClick={() => {
                          addToCart(item);
                          removeFromWishlist(item.id);
                        }}
                      >
                        Move to cart
                      </button>
                      <button type="button" className="btn-danger" onClick={() => removeFromWishlist(item.id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <footer className="drawer-foot">
              <button type="button" className="reset-btn" onClick={clearWishlist}>
                Clear wishlist
              </button>
            </footer>
          </>
        )}
      </aside>
    </div>
  );
};

export default WishlistDrawer;
