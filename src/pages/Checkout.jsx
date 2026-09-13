
import React, { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { generateOrderId } from '../utils/orderId';
import formatINR from '../utils/formatCurrency';
import PaymentModal from '../components/PaymentModal';
import SafeImage from '../components/SafeImage';

const emptyForm = { name: '', email: '', phone: '', address: '', pin: '' };

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [payment, setPayment] = useState('UPI');
  const [payOpen, setPayOpen] = useState(false);
  const [payMeta, setPayMeta] = useState(null);
  const [orderId, setOrderId] = useState(null);

  const shipping = cartTotal > 1999 || cart.length === 0 ? 0 : 99;
  const tax = Math.round(cartTotal * 0.05);
  const grandTotal = cartTotal + shipping + tax;

  const snapshot = useMemo(
    () => ({
      items: cart,
      cartTotal,
      shipping,
      tax,
      grandTotal,
    }),
    // freeze totals only when entering review after payment; cart is live until confirm
    [cart, cartTotal, shipping, tax, grandTotal]
  );

  const validateShipping = () => {
    const next = {};
    if (form.name.trim().length < 2) next.name = 'Enter your full name';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email';
    if (!/^[6-9]\d{9}$/.test(form.phone.trim())) next.phone = 'Enter a 10-digit Indian mobile number';
    if (form.address.trim().length < 8) next.address = 'Enter a complete address';
    if (!/^\d{6}$/.test(form.pin.trim())) next.pin = 'PIN must be 6 digits';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const placeOrder = () => {
    const id = generateOrderId();
    setOrderId(id);
    clearCart(true);
    setStep(4);
  };

  if (orderId) {
    return (
      <div className="order-confirmed">
        <div className="order-confirmed-icon">✦</div>
        <h1 className="section-title">Order confirmed</h1>
        <p className="empty-state-desc">Your demo order is locked in. Share this ID with support if you ever need it.</p>
        <div className="order-id-badge">{orderId}</div>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
          {payMeta?.method === 'COD' ? 'Pay cash when the parcel arrives.' : `Paid via ${payMeta?.method || payment} (simulation).`}
        </p>
        <Link to="/products" className="btn-primary">
          Continue shopping
        </Link>
      </div>
    );
  }

  if (cart.length === 0 && step !== 4) {
    return (
      <div className="empty-state">
        <h2 className="empty-state-title">Nothing to check out</h2>
        <p className="empty-state-desc">Add products before starting the demo payment flow.</p>
        <button type="button" className="btn-primary" onClick={() => navigate('/products')}>
          Browse catalog
        </button>
      </div>
    );
  }

  const stepClass = (n) => `checkout-step ${step === n ? 'active' : ''} ${step > n ? 'done' : ''}`;

  return (
    <div className="checkout-page">
      <h1 className="section-title" style={{ marginBottom: '1.5rem' }}>
        Demo <span>checkout</span>
      </h1>
      <div className="checkout-steps">
        {['Shipping', 'Payment', 'Review', 'Done'].map((label, i) => (
          <div key={label} className={stepClass(i + 1)}>
            <div className="checkout-step-num">{i + 1}</div>
            <div className="checkout-step-label">{label}</div>
          </div>
        ))}
      </div>

      {step === 1 && (
        <div className="checkout-card">
          <h2 style={{ marginBottom: '1rem' }}>Shipping details</h2>
          <div className="form-grid">
            {[
              ['name', 'Full name', 'text'],
              ['email', 'Email', 'email'],
              ['phone', 'Phone', 'tel'],
              ['pin', 'PIN code', 'text'],
            ].map(([key, label, type]) => (
              <div className="form-group" key={key}>
                <label className="form-label" htmlFor={key}>
                  {label}
                </label>
                <input
                  id={key}
                  type={type}
                  className={`form-input ${errors[key] ? 'error' : ''}`}
                  value={form[key]}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                />
                {errors[key] && <span className="form-error">{errors[key]}</span>}
              </div>
            ))}
            <div className="form-group full">
              <label className="form-label" htmlFor="address">
                Address
              </label>
              <textarea
                id="address"
                rows={3}
                className={`form-input ${errors.address ? 'error' : ''}`}
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
              />
              {errors.address && <span className="form-error">{errors.address}</span>}
            </div>
          </div>
          <button
            type="button"
            className="btn-primary"
            style={{ marginTop: '1.25rem' }}
            onClick={() => {
              if (validateShipping()) {
                setStep(2);
                setPayOpen(true);
              }
            }}
          >
            Continue to payment
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="checkout-card">
          <h2>Payment</h2>
          <p className="empty-state-desc">Selected: {payment}. Open the demo wallet to edit details.</p>
          <div className="drawer-actions">
            <button type="button" className="btn-secondary" onClick={() => setStep(1)}>
              Back
            </button>
            <button type="button" className="btn-primary" onClick={() => setPayOpen(true)}>
              Open payment modal
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="checkout-card">
          <h2 style={{ marginBottom: '1rem' }}>Review order</h2>
          {snapshot.items.map((item) => (
            <div key={item.id} className="order-review-item">
              <SafeImage src={item.image} alt="" className="order-review-img" width={52} height={52} />
              <div>
                <div className="order-review-name">{item.name}</div>
                <div className="order-review-qty">Qty {item.quantity}</div>
              </div>
              <div className="order-review-price">{formatINR(item.price * item.quantity)}</div>
            </div>
          ))}
          <div className="summary-row" style={{ marginTop: '1rem' }}>
            <span>Ship to</span>
            <span>
              {form.name}, {form.pin}
            </span>
          </div>
          <div className="summary-row">
            <span>Payment</span>
            <span>{payMeta?.method || payment}</span>
          </div>
          <div className="summary-total summary-row">
            <span>Total</span>
            <span>{formatINR(snapshot.grandTotal)}</span>
          </div>
          <div className="drawer-actions" style={{ marginTop: '1.25rem' }}>
            <button type="button" className="btn-secondary" onClick={() => setStep(2)}>
              Back
            </button>
            <button type="button" className="btn-primary" onClick={placeOrder}>
              Place order
            </button>
          </div>
        </div>
      )}

      <PaymentModal
        open={payOpen}
        onClose={() => setPayOpen(false)}
        selected={payment}
        onSelect={setPayment}
        onContinue={(meta) => {
          setPayMeta(meta);
          setPayOpen(false);
          setStep(3);
        }}
      />
    </div>
  );
};

export default Checkout;
