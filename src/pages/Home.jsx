import React, { useState, useMemo, lazy, Suspense } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import StoryRings from '../components/StoryRings';
const QuickViewModal = lazy(() => import('../components/QuickViewModal'));
import { CATEGORY_FILTERS } from '../utils/productHelpers';

const Home = () => {
  const featuredProducts = useMemo(() => products.filter((p) => p.featured), []);
  const newest = useMemo(() => [...products].sort((a, b) => b.createdAt - a.createdAt).slice(0, 4), []);
  const [quick, setQuick] = useState(null);
  const navigate = useNavigate();

  return (
    <div>
      <section className="hero">
        <span className="hero-eyebrow">India-first dark marketplace</span>
        <h1 className="hero-title">
          Experience next-gen shopping with <span className="hero-highlight">ShopSphere</span>
        </h1>
        <p className="hero-subtitle">
          Artisan pottery, Chanderi silk, Malabar spice, and spatial audio — curated under one electric-violet roof.
        </p>
        <div className="hero-actions">
          <Link to="/products" className="btn-primary">
            Explore collection →
          </Link>
          <Link to="/about" className="btn-secondary">
            Our story
          </Link>
        </div>
        <div className="hero-stats">
          <div>
            <div className="hero-stat-value">{products.length}+</div>
            <div className="hero-stat-label">Live SKUs</div>
          </div>
          <div>
            <div className="hero-stat-value">4.8★</div>
            <div className="hero-stat-label">Avg. rating</div>
          </div>
          <div>
            <div className="hero-stat-value">₹0</div>
            <div className="hero-stat-label">Demo checkout</div>
          </div>
        </div>
      </section>

      <StoryRings />

      <section className="category-pills-section">
        <div className="category-pills-row">
          {CATEGORY_FILTERS.filter((c) => c !== 'All').map((cat) => (
            <button
              key={cat}
              type="button"
              className="category-pill"
              onClick={() => navigate(`/products?category=${encodeURIComponent(cat)}`)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <div className="section-header">
          <div>
            <h2 className="section-title">
              Featured <span>highlights</span>
            </h2>
            <p className="section-subtitle">Top-rated pieces handpicked for the sphere</p>
          </div>
          <Link to="/products" className="section-link">
            View all ({products.length}) →
          </Link>
        </div>
        <div className="product-grid">
          {featuredProducts.map((product, idx) => (
            <ProductCard key={product.id} product={product} onQuickView={setQuick} eager={idx < 4} />
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <div className="section-header">
          <div>
            <h2 className="section-title">
              New <span>drops</span>
            </h2>
            <p className="section-subtitle">Latest catalog arrivals</p>
          </div>
          <Link to="/products?sort=newest" className="section-link">
            Sort by newest →
          </Link>
        </div>
        <div className="product-grid">
          {newest.map((product) => (
            <ProductCard key={product.id} product={product} onQuickView={setQuick} />
          ))}
        </div>
      </section>

      <section className="perks-bar">
        {[
          ['🚀', 'Free express shipping', 'On orders over ₹1,999 across India'],
          ['🛡️', 'Assured quality', 'Artisan QC + electronics warranty notes'],
          ['🔒', 'Demo-secure checkout', 'UPI, card, and COD simulation'],
          ['💜', 'Wishlist sync', 'Hearts persist in your browser'],
        ].map(([icon, title, desc]) => (
          <div className="perk-item" key={title}>
            <div className="perk-icon">{icon}</div>
            <div>
              <div className="perk-title">{title}</div>
              <div className="perk-desc">{desc}</div>
            </div>
          </div>
        ))}
      </section>

      <Suspense fallback={null}>
        {quick && <QuickViewModal product={quick} onClose={() => setQuick(null)} />}
      </Suspense>
    </div>
  );
};

export default Home;
