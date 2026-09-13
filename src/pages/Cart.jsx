import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import formatINR from '../utils/formatCurrency';

const Cart = () => {
  const { cart, cartTotal, cartCount, clearCart } = useCart();
  const shipping = cartTotal > 1999 || cart.length === 0 ? 0 : 99;
  const tax = Math.round(cartTotal * 0.05);
  const grandTotal = cartTotal + shipping + tax;

  if (cart.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">🛍️</div>
        <h1 className="empty-state-title">Your cart is empty</h1>
        <p className="empty-state-desc">Looks like you have not added anything yet.</p>
        <Link to="/products" className="btn-primary">
          Explore products
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="section-title" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
        Your <span>cart</span>
      </h1>
      <div className="cart-layout">
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', alignItems: 'center' }}>
            <span className="products-count">
              {cartCount} item{cartCount === 1 ? '' : 's'}
            </span>
            <button type="button" className="btn-danger" onClick={() => clearCart()}>
              Clear cart
            </button>
          </div>
          <div className="cart-items-list">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        </div>
        <aside className="cart-summary">
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.25rem' }}>Order summary</h3>
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
            <span>{shipping === 0 ? 'FREE over ₹1,999' : formatINR(shipping)}</span>
          </div>
          <div className="summary-total summary-row">
            <span>Total</span>
            <span>{formatINR(grandTotal)}</span>
          </div>
          <Link to="/checkout" className="btn-primary" style={{ width: '100%', marginTop: '1.5rem', justifyContent: 'center' }}>
            Proceed to checkout →
          </Link>
          <Link to="/products" className="btn-secondary" style={{ width: '100%', marginTop: '0.75rem', justifyContent: 'center' }}>
            Continue shopping
          </Link>
        </aside>
      </div>
    </div>
  );
};

export default Cart;
