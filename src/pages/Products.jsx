import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductGrid from '../components/productGrid';
import SearchBar from '../components/SearchBar';
import FilterPanel from '../components/FilterPanel';
import StoryRings from '../components/StoryRings';
import QuickViewModal from '../components/QuickViewModal';
import {
  CATEGORY_FILTERS,
  getStock,
  matchesCategory,
  searchProducts,
  sortProducts,
} from '../utils/productHelpers';

const PRICE_CEILING = Math.max(...products.map((p) => p.price), 5000);

const Products = () => {
  const [params, setParams] = useSearchParams();
  const [mobileFilters, setMobileFilters] = useState(false);
  const [quick, setQuick] = useState(null);

  const searchTerm = params.get('q') || '';
  const selectedCategory = params.get('category') || 'All';
  const sortBy = params.get('sort') || 'featured';
  const maxPrice = Number(params.get('max') || PRICE_CEILING);
  const ratingFilter = Number(params.get('rating') || 0);
  const inStockOnly = params.get('stock') === '1';

  const patch = (next) => {
    const merged = {
      q: searchTerm,
      category: selectedCategory,
      sort: sortBy,
      max: String(maxPrice),
      rating: String(ratingFilter),
      stock: inStockOnly ? '1' : '',
      ...next,
    };
    const sp = new URLSearchParams();
    if (merged.q) sp.set('q', merged.q);
    if (merged.category && merged.category !== 'All') sp.set('category', merged.category);
    if (merged.sort && merged.sort !== 'featured') sp.set('sort', merged.sort);
    if (merged.max && Number(merged.max) < PRICE_CEILING) sp.set('max', merged.max);
    if (Number(merged.rating) > 0) sp.set('rating', merged.rating);
    if (merged.stock === '1') sp.set('stock', '1');
    setParams(sp, { replace: true });
  };

  const resetFilters = () => setParams({}, { replace: true });

  const filteredProducts = useMemo(() => {
    const searched = searchProducts(products, searchTerm).filter((p) => {
      const matchesPrice = p.price <= maxPrice;
      const matchesRating = (p.rating || 0) >= ratingFilter;
      const matchesStock = !inStockOnly || getStock(p) > 0;
      return matchesCategory(p, selectedCategory) && matchesPrice && matchesRating && matchesStock;
    });
    return sortProducts(searched, sortBy);
  }, [searchTerm, selectedCategory, maxPrice, sortBy, ratingFilter, inStockOnly]);

  return (
    <div>
      <div style={{ marginBottom: '1.25rem' }}>
        <h1 className="section-title" style={{ fontSize: '2rem' }}>
          All <span>Products</span>
        </h1>
        <p className="section-subtitle">A Myntra-style toolbar for category, sort, and live search.</p>
      </div>

      <StoryRings />

      <div className="products-toolbar">
        <div className="category-pills-row" style={{ flex: 1 }}>
          {CATEGORY_FILTERS.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => patch({ category: cat })}
            >
              {cat}
            </button>
          ))}
        </div>
        <select className="sort-select" value={sortBy} onChange={(e) => patch({ sort: e.target.value })}>
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Rating: High to Low</option>
          <option value="newest">Newest</option>
        </select>
      </div>

      <SearchBar searchTerm={searchTerm} setSearchTerm={(q) => patch({ q })} resultCount={filteredProducts.length} />

      <button type="button" className="mobile-filter-toggle" onClick={() => setMobileFilters((v) => !v)}>
        {mobileFilters ? 'Hide filters' : 'Show filters'}
      </button>

      <div className="products-layout">
        <FilterPanel
          selectedCategory={selectedCategory}
          setSelectedCategory={(category) => patch({ category })}
          maxPrice={maxPrice}
          setMaxPrice={(max) => patch({ max: String(max) })}
          priceCeiling={PRICE_CEILING}
          sortBy={sortBy}
          setSortBy={(sort) => patch({ sort })}
          ratingFilter={ratingFilter}
          setRatingFilter={(rating) => patch({ rating: String(rating) })}
          inStockOnly={inStockOnly}
          setInStockOnly={(v) => patch({ stock: v ? '1' : '' })}
          resetFilters={resetFilters}
          mobileOpen={mobileFilters}
        />
        <main>
          <p className="products-count" style={{ marginBottom: '1rem' }}>
            Showing <strong>{filteredProducts.length}</strong> of {products.length} products
            {searchTerm ? ` for “${searchTerm}”` : ''}
          </p>
          <ProductGrid products={filteredProducts} onQuickView={setQuick} />
        </main>
      </div>
      <QuickViewModal product={quick} onClose={() => setQuick(null)} />
    </div>
  );
};

export default Products;
