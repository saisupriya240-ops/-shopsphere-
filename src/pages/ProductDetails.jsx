import React, { useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import formatINR from '../utils/formatCurrency';
import { getProductImages, getStock } from '../utils/productHelpers';
import SafeImage from '../components/SafeImage';
import ProductCard from '../components/ProductCard';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState(0);

  const product = products.find((p) => String(p.id) === String(id));

  const images = useMemo(() => getProductImages(product), [product]);
  const related = useMemo(() => {
    if (!product) return [];
    return products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <div className="empty-state">
        <h2 className="empty-state-title">Product not found</h2>
        <p className="empty-state-desc">That ID is not in the ShopSphere catalog.</p>
        <button type="button" onClick={() => navigate('/products')} className="btn-primary">
          Back to products
        </button>
      </div>
    );
  }

  const stock = getStock(product);
  const liked = isWishlisted(product.id);
  const discount =
    product.originalPrice > product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : 0;

  const buyNow = () => {
    addToCart(product, quantity);
    navigate('/checkout');
  };

  return (
    <div>
      <Link to="/products" style={{ color: 'var(--text-muted)', display: 'inline-block', marginBottom: '1.5rem' }}>
        ← Back to all products
      </Link>

      <div className="product-details-grid">
        <div>
          <div className="product-details-img-wrap">
            <SafeImage src={images[activeImg]} alt={product.name} eager={true} />
          </div>
          {images.length > 1 && (
            <div className="thumb-row">
              {images.map((src, i) => (
                <button
                  key={`${src}-${i}`}
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

        <div className="product-details-info">
          <span className="product-details-category">{product.category}</span>
          <h1 className="product-details-title">{product.name}</h1>
          <div className="product-details-rating">
            <span className="rating-stars">{'★'.repeat(Math.round(product.rating || 0)).padEnd(5, '☆')}</span>
            <strong>{product.rating}</strong>
            <span style={{ color: 'var(--text-muted)' }}>({product.reviewsCount || 0} reviews)</span>
          </div>
          <div>
            <span className="product-details-price">{formatINR(product.price)}</span>
            {discount > 0 && (
              <>
                <span className="product-details-original-price">{formatINR(product.originalPrice)}</span>
                <span className="product-details-discount">{discount}% off</span>
              </>
            )}
          </div>
          <p className={`product-details-stock ${stock > 0 ? 'in' : 'out'}`}>
            {stock > 0 ? `In stock · ${stock} units` : 'Currently out of stock'}
          </p>
          <p className="product-details-desc">{product.description}</p>

          {product.specifications && (
            <table className="specs-table">
              <tbody>
                {Object.entries(product.specifications).map(([k, v]) => (
                  <tr key={k}>
                    <td>{k}</td>
                    <td>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          <div className="product-details-actions">
            <div className="quantity-controls" style={{ padding: '0.5rem' }}>
              <button type="button" className="qty-btn" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                −
              </button>
              <span className="qty-value">{quantity}</span>
              <button type="button" className="qty-btn" onClick={() => setQuantity(quantity + 1)}>
                +
              </button>
            </div>
            <button type="button" className="btn-primary" disabled={stock <= 0} onClick={() => addToCart(product, quantity)}>
              Add to cart
            </button>
            <button type="button" className="btn-secondary" disabled={stock <= 0} onClick={buyNow}>
              Buy now
            </button>
            <button
              type="button"
              className={`wishlist-toggle-btn ${liked ? 'liked' : ''}`}
              onClick={() => toggleWishlist(product)}
            >
              {liked ? '♥ Wishlisted' : '♡ Wishlist'}
            </button>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section style={{ marginTop: '3rem' }}>
          <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>
            More in <span>{product.category}</span>
          </h2>
          <div className="product-grid">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetails;
