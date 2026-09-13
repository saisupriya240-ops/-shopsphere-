import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { products } from '../data/products';
import { searchProducts } from '../utils/productHelpers';
import formatINR from '../utils/formatCurrency';
import SafeImage from './SafeImage';

const Navbar = ({ onOpenCart, onOpenWishlist }) => {
  const { cartCount, badgePulse } = useCart();
  const { wishlistCount } = useWishlist();
  const [query, setQuery] = useState('');
  const [openSearch, setOpenSearch] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const wrapRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const results = useMemo(() => searchProducts(products, query).slice(0, 6), [query]);

  useEffect(() => {
    setMobileOpen(false);
    setOpenSearch(false);
    setQuery('');
  }, [location.pathname]);

  useEffect(() => {
    const onClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpenSearch(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const goToResults = (e) => {
    e.preventDefault();
    const q = query.trim();
    if (q) navigate(`/products?q=${encodeURIComponent(q)}`);
    else navigate('/products');
    setOpenSearch(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="brand-logo" aria-label="ShopSphere home">
          <span>⚡</span>
          <span>ShopSphere</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary">
          <ul className="nav-links">
            <li>
              <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
                About
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="navbar-right">
          <form className="navbar-search-wrap" ref={wrapRef} onSubmit={goToResults}>
            <input
              className="navbar-search-input"
              type="search"
              placeholder="Search products..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setOpenSearch(true);
              }}
              onFocus={() => query && setOpenSearch(true)}
              aria-label="Search products"
            />
            {query && (
              <button
                type="button"
                className="navbar-search-clear"
                onClick={() => {
                  setQuery('');
                  setOpenSearch(false);
                }}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
            {openSearch && query.trim() && (
              <div className="search-dropdown" role="listbox">
                {results.length === 0 ? (
                  <div className="search-dropdown-empty">No matches for “{query}”</div>
                ) : (
                  results.map((p) => (
                    <button
                      type="button"
                      key={p.id}
                      className="search-dropdown-item"
                      onClick={() => {
                        navigate(`/product/${p.id}`);
                        setOpenSearch(false);
                        setQuery('');
                      }}
                    >
                      <SafeImage src={p.image} alt="" className="search-thumb" width={42} height={42} />
                      <div className="search-dropdown-item-info">
                        <div className="search-dropdown-item-name">{p.name}</div>
                        <div className="search-dropdown-item-price">{formatINR(p.price)}</div>
                      </div>
                    </button>
                  ))
                )}
                <button type="submit" className="search-dropdown-footer">
                  View all results
                </button>
              </div>
            )}
          </form>

          <button
            type="button"
            className={`wishlist-icon-btn ${wishlistCount ? 'has-items' : ''}`}
            onClick={onOpenWishlist}
            aria-label="Open wishlist"
          >
            ♥
            {wishlistCount > 0 && <span className="nav-badge">{wishlistCount}</span>}
          </button>

          <button
            type="button"
            className={`cart-icon-btn ${badgePulse ? 'pulse' : ''}`}
            onClick={onOpenCart}
            aria-label="Open cart"
          >
            <span>🛒</span>
            <span className="cart-label">Cart</span>
            {cartCount > 0 && <span className="nav-badge">{cartCount}</span>}
          </button>

          <button
            type="button"
            className={`hamburger-btn ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
        <NavLink to="/" end className="nav-link" onClick={() => setMobileOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/products" className="nav-link" onClick={() => setMobileOpen(false)}>
          Products
        </NavLink>
        <NavLink to="/about" className="nav-link" onClick={() => setMobileOpen(false)}>
          About
        </NavLink>
        <NavLink to="/cart" className="nav-link" onClick={() => setMobileOpen(false)}>
          Cart
        </NavLink>
        <form
          className="mobile-search"
          onSubmit={(e) => {
            goToResults(e);
            setMobileOpen(false);
          }}
        >
          <input
            className="search-input"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      </div>
    </header>
  );
};

export default Navbar;
