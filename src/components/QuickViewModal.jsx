import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import formatINR from '../utils/formatCurrency';
import { getProductImages, getStock } from '../utils/productHelpers';
import SafeImage from './SafeImage';

const QuickViewModal = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const navigate = useNavigate();
  const [activeImg, setActiveImg] = useState(0);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    if (!product) return undefined;
    setActiveImg(0);
    setQty(1);
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [product, onClose]);

  if (!product) return null;
  const images = getProductImages(product);
  const stock = getStock(product);
  const liked = isWishlisted(product.id);

  return (
    <div className="drawer-overlay" onClick={onClose} role="presentation">
      <div className="quickview-modal" role="dialog" aria-modal="true" aria-label="Quick view" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="story-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <div className="quickview-grid">
          <div>
            <div className="product-details-img-wrap" style={{ height: 280 }}>
              <SafeImage src={images[activeImg]} alt={product.name} className="product-img" />
            </div>
            {images.length > 1 && (
              <div className="thumb-row">
                {images.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    className={`thumb-btn ${i === activeImg ? 'active' : ''}`}
                    onClick={() => setActiveImg(i)}
                  >
                    <SafeImage src={src} alt="" />
                  </button>
                ))}
              </div>
            )}
          </div>
          <div>
            <span className="product-details-category">{product.category}</span>
            <h2 className="product-details-title" style={{ fontSize: '1.4rem', marginTop: '0.6rem' }}>
              {product.name}
            </h2>
            <p className="product-details-desc">{product.description}</p>
            <p className="product-price" style={{ margin: '0.75rem 0' }}>
              {formatINR(product.price)}
            </p>
            <div className="product-details-actions">
              <div className="quantity-controls">
                <button type="button" className="qty-btn" onClick={() => setQty(Math.max(1, qty - 1))}>
                  −
                </button>
                <span className="qty-value">{qty}</span>
                <button type="button" className="qty-btn" onClick={() => setQty(qty + 1)}>
                  +
                </button>
              </div>
              <button
                type="button"
                className="btn-primary"
                disabled={stock <= 0}
                onClick={() => addToCart(product, qty)}
              >
                Add to cart
              </button>
              <button
                type="button"
                className={`wishlist-toggle-btn ${liked ? 'liked' : ''}`}
                onClick={() => toggleWishlist(product)}
              >
                {liked ? '♥ Saved' : '♡ Save'}
              </button>
            </div>
            <button
              type="button"
              className="btn-secondary"
              style={{ marginTop: '1rem' }}
              onClick={() => {
                navigate(`/product/${product.id}`);
                onClose();
              }}
            >
              Full details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
