import React, { useEffect, useState } from 'react';

const PaymentModal = ({ open, onClose, selected, onSelect, onContinue }) => {
  const [upiId, setUpiId] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [cardName, setCardName] = useState('');
  const [error, setError] = useState('');

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

  const validate = () => {
    if (selected === 'UPI') {
      if (!/^[\w.-]+@[\w.-]+$/.test(upiId.trim())) {
        setError('Enter a valid UPI ID such as name@oksbi');
        return false;
      }
    }
    if (selected === 'Card') {
      const digits = cardNumber.replace(/\s/g, '');
      if (!/^\d{16}$/.test(digits)) {
        setError('Card number must be 16 digits (demo).');
        return false;
      }
      if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(cardExpiry)) {
        setError('Expiry must be MM/YY.');
        return false;
      }
      if (!/^\d{3}$/.test(cardCvv)) {
        setError('CVV must be 3 digits.');
        return false;
      }
      if (cardName.trim().length < 3) {
        setError('Enter the cardholder name.');
        return false;
      }
    }
    setError('');
    return true;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onContinue({
      method: selected,
      upiId,
      cardLast4: cardNumber.replace(/\s/g, '').slice(-4),
      cardName,
    });
  };

  return (
    <div className="drawer-overlay" onClick={onClose} role="presentation">
      <form className="payment-modal-panel" role="dialog" aria-modal="true" aria-labelledby="pay-title" onClick={(e) => e.stopPropagation()} onSubmit={submit}>
        <button type="button" className="story-close" onClick={onClose} aria-label="Close payment">
          ×
        </button>
        <h3 id="pay-title">Demo payment</h3>
        <p className="empty-state-desc">No real charge. Choose a method to simulate checkout.</p>

        <div className="payment-options">
          {[
            { id: 'UPI', icon: '📱', label: 'UPI', desc: 'Pay with any UPI app' },
            { id: 'Card', icon: '💳', label: 'Card', desc: 'Visa / Mastercard demo' },
            { id: 'COD', icon: '📦', label: 'Cash on Delivery', desc: 'Pay when it arrives' },
          ].map((opt) => (
            <button
              key={opt.id}
              type="button"
              className={`payment-option ${selected === opt.id ? 'selected' : ''}`}
              onClick={() => {
                onSelect(opt.id);
                setError('');
              }}
            >
              <span className="payment-option-icon">{opt.icon}</span>
              <span>
                <span className="payment-option-label">{opt.label}</span>
                <span className="payment-option-desc">{opt.desc}</span>
              </span>
            </button>
          ))}
        </div>

        {selected === 'UPI' && (
          <div className="payment-fields">
            <label className="form-label" htmlFor="upi">
              UPI ID
            </label>
            <input id="upi" className="form-input" placeholder="yourname@oksbi" value={upiId} onChange={(e) => setUpiId(e.target.value)} />
          </div>
        )}

        {selected === 'Card' && (
          <div className="payment-fields">
            <label className="form-label" htmlFor="card-name">
              Name on card
            </label>
            <input id="card-name" className="form-input" value={cardName} onChange={(e) => setCardName(e.target.value)} />
            <label className="form-label" htmlFor="card-num">
              Card number
            </label>
            <input
              id="card-num"
              className="form-input"
              inputMode="numeric"
              maxLength={19}
              placeholder="4111 1111 1111 1111"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value.replace(/[^\d\s]/g, ''))}
            />
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label" htmlFor="exp">
                  Expiry
                </label>
                <input id="exp" className="form-input" placeholder="MM/YY" value={cardExpiry} onChange={(e) => setCardExpiry(e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="cvv">
                  CVV
                </label>
                <input id="cvv" className="form-input" inputMode="numeric" maxLength={3} value={cardCvv} onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, ''))} />
              </div>
            </div>
          </div>
        )}

        {error && <p className="form-error">{error}</p>}

        <div className="drawer-actions" style={{ marginTop: '1.25rem' }}>
          <button type="button" className="btn-secondary" onClick={onClose}>
            Back
          </button>
          <button type="submit" className="btn-primary">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentModal;
