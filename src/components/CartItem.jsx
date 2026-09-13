import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import formatINR from '../utils/formatCurrency';
import SafeImage from './SafeImage';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const name = item.name || item.title || 'Product';

  return (
    <div className="cart-item">
      <Link to={`/product/${item.id}`}>
        <SafeImage src={item.image} alt={name} className="cart-item-img" width={76} height={76} />
      </Link>
      <div className="cart-item-details">
        <Link to={`/product/${item.id}`} className="cart-item-title">
          {name}
        </Link>
        <p className="cart-item-category">{item.category}</p>
        <div className="cart-item-price">{formatINR(item.price)}</div>
      </div>
      <div className="quantity-controls">
        <button type="button" className="qty-btn" onClick={() => updateQuantity(item.id, -1)} aria-label="Decrease quantity">
          −
        </button>
        <span className="qty-value">{item.quantity}</span>
        <button type="button" className="qty-btn" onClick={() => updateQuantity(item.id, 1)} aria-label="Increase quantity">
          +
        </button>
      </div>
      <div className="cart-item-total">
        <div>{formatINR((item.price || 0) * (item.quantity || 0))}</div>
        <button type="button" className="btn-danger" onClick={() => removeFromCart(item.id)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
