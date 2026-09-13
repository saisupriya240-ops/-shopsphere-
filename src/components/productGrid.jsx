import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, onQuickView }) => {
  if (!products || products.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">✦</div>
        <h3 className="empty-state-title">No products match</h3>
        <p className="empty-state-desc">Try a different search, category, or reset filters to see the full catalog.</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onQuickView={onQuickView} />
      ))}
    </div>
  );
};

export default ProductGrid;
