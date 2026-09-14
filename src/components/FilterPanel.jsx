import React from 'react';
import { CATEGORY_FILTERS } from '../utils/productHelpers';

const FilterPanel = ({
  selectedCategory,
  setSelectedCategory,
  maxPrice,
  setMaxPrice,
  priceCeiling = 5000,
  sortBy,
  setSortBy,
  ratingFilter = 0,
  setRatingFilter,
  inStockOnly = false,
  setInStockOnly,
  resetFilters,
  mobileOpen = false,
}) => {
  return (
    <aside className={`filter-panel ${mobileOpen ? 'mobile-open' : ''}`}>
      <h3 className="filter-title">
        Filters
        <button type="button" className="btn-outline" onClick={resetFilters} style={{ padding: '0.25rem 0.7rem', fontSize: '0.75rem' }}>
          Reset
        </button>
      </h3>

      <div className="filter-group">
        <label>Category</label>
        <div className="category-list">
          {CATEGORY_FILTERS.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <label>Max Price ({maxPrice})</label>
        <input
          className="filter-range"
          type="range"
          min="100"
          max={priceCeiling}
          step="50"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
      </div>

      <div className="filter-group">
        <label>Sort</label>
        <select className="filter-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Rating: High to Low</option>
          <option value="newest">Newest</option>
          <option value="discount">Biggest Discount</option>
        </select>
      </div>

      {setRatingFilter && (
        <div className="filter-group">
          <label>Minimum Rating ({ratingFilter}★+)</label>
          <input
            className="filter-range"
            type="range"
            min="0"
            max="5"
            step="0.5"
            value={ratingFilter}
            onChange={(e) => setRatingFilter(Number(e.target.value))}
          />
        </div>
      )}

      {setInStockOnly && (
        <div className="filter-group">
          <label className="filter-checkbox-label">
            <input type="checkbox" checked={inStockOnly} onChange={(e) => setInStockOnly(e.target.checked)} />
            In stock only
          </label>
        </div>
      )}

      <button type="button" className="reset-btn" onClick={resetFilters}>
        Reset Filters
      </button>
    </aside>
  );
};

export default FilterPanel;
