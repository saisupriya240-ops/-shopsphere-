import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, resultCount }) => {
  return (
    <div className="search-bar-container">
      <input
        type="search"
        className="search-input"
        placeholder="Search by name, category, or description..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        aria-label="Filter products"
      />
      {searchTerm && (
        <button type="button" className="search-clear-btn" onClick={() => setSearchTerm('')} aria-label="Clear search">
          ×
        </button>
      )}
      {typeof resultCount === 'number' && searchTerm && (
        <span className="search-result-chip">{resultCount} found</span>
      )}
    </div>
  );
};

export default SearchBar;
