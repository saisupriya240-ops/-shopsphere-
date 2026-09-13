import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import formatINR from '../utils/formatCurrency';
import CartItem from './CartItem';

const CartDrawer = ({ open, onClose }) => {
  const { cart, cartTotal, cartCount, clearCart } = useCart();
  const shipping = cartTotal > 1999 || cart.length === 0 ? 0 : 99;
  const tax = Math.round(cartTotal * 0.05);
  const grandTotal = cartTotal + shipping + tax;

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
      <aside className="drawer-panel" role="dialog" aria-modal="true" aria-label="Cart" onClick={(e) => e.stopPropagation()}>
        <header className="drawer-head">
          <h2>Cart ({cartCount})</h2>
          <button type="button" className="story-close" onClick={onClose} aria-label="Close cart">
            ×
          </button>
        </header>
        {cart.length === 0 ? (
          <div className="empty-state" style={{ padding: '3rem 1rem' }}>
            <p className="empty-state-title">Your cart is empty</p>
            <p className="empty-state-desc">Add something luminous from the catalog.</p>
            <Link to="/products" className="btn-primary" onClick={onClose}>
              Browse products
            </Link>
          </div>
        ) : (
          <>
            <div className="drawer-body">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <footer className="drawer-foot">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>{formatINR(cartTotal)}</span>
              </div>
              <div className="summary-row">
                <span>Tax (5%)</span>
                <span>{formatINR(tax)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'FREE' : formatINR(shipping)}</span>
              </div>
              <div className="summary-total summary-row">
                <span>Total</span>
                <span>{formatINR(grandTotal)}</span>
              </div>
              <div className="drawer-actions">
                <button type="button" className="btn-danger" onClick={() => clearCart()}>
                  Clear cart
                </button>
                <Link to="/cart" className="btn-secondary" onClick={onClose}>
                  View cart
                </Link>
                <Link to="/checkout" className="btn-primary" onClick={onClose}>
                  Checkout
                </Link>
              </div>
            </footer>
          </>
        )}
      </aside>
    </div>
  );
};

export default CartDrawer;
