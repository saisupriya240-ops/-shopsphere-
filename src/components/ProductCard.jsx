import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import formatINR from '../utils/formatCurrency';
import { getStock } from '../utils/productHelpers';
import SafeImage from './SafeImage';

const ProductCard = ({ product, onQuickView, eager }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const navigate = useNavigate();
  const [burst, setBurst] = useState(false);
  const liked = isWishlisted(product.id);
  const stock = getStock(product);

  const openDetails = () => navigate(`/product/${product.id}`);

  const onHeart = (e) => {
    e.stopPropagation();
    if (!liked) {
      setBurst(true);
      setTimeout(() => setBurst(false), 500);
    }
    toggleWishlist(product);
  };

  return (
    <article
      className="product-card"
      onClick={openDetails}
      onKeyDown={(e) => {
        if (e.key === 'Enter') openDetails();
      }}
      role="link"
      tabIndex={0}
    >
      <div className="product-img-wrapper">
        <SafeImage src={product.image} alt={product.name} className="product-img" width={400} height={400} eager={eager} />
        <span className="category-badge">{product.category}</span>
        <button
          type="button"
          className={`wishlist-btn ${liked ? 'liked' : ''} ${burst ? 'burst' : ''}`}
          onClick={onHeart}
          aria-label={liked ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          {liked ? '♥' : '♡'}
        </button>
        <div className="product-quick-overlay">
          <button
            type="button"
            className="btn-primary"
            onClick={(e) => {
              e.stopPropagation();
              if (onQuickView) onQuickView(product);
              else openDetails();
            }}
          >
            Quick View
          </button>
        </div>
      </div>
      <div className="product-info">
        <p className="product-origin">{stock > 0 ? `${stock} in stock` : 'Out of stock'}</p>
        <h3 className="product-title">{product.name}</h3>
        <div className="product-rating-row">
          <span className="rating-stars">{'★'.repeat(Math.round(product.rating || 0)).padEnd(5, '☆')}</span>
          <span className="rating-value">{product.rating}</span>
          <span className="rating-count">({product.reviewsCount || 0})</span>
        </div>
        <div className="product-footer">
          <div className="product-price-block">
            <span className="product-price">{formatINR(product.price)}</span>
            {product.originalPrice > product.price && (
              <span className="product-original-price">{formatINR(product.originalPrice)}</span>
            )}
          </div>
          <button
            type="button"
            className="add-cart-btn"
            disabled={stock <= 0}
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
          >
            + Add
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
