import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h3 className="brand-logo" style={{ marginBottom: '1rem' }}>
            ⚡ ShopSphere
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            A neo-futuristic marketplace for Indian craft, fashion, grocery, and precision tech.
          </p>
        </div>
        <div>
          <h4 className="footer-heading">Navigation</h4>
          <Link to="/" className="footer-link">
            Home
          </Link>
          <Link to="/products" className="footer-link">
            Products
          </Link>
          <Link to="/about" className="footer-link">
            About
          </Link>
          <Link to="/cart" className="footer-link">
            Cart
          </Link>
          <Link to="/checkout" className="footer-link">
            Checkout
          </Link>
        </div>
        <div>
          <h4 className="footer-heading">Shop</h4>
          <Link to="/products?category=Indian%20Products" className="footer-link">
            Indian Products
          </Link>
          <Link to="/products?category=Fashion" className="footer-link">
            Fashion
          </Link>
          <Link to="/products?category=Tech/Electronics" className="footer-link">
            Tech / Electronics
          </Link>
          <Link to="/products?category=Audio" className="footer-link">
            Audio
          </Link>
        </div>
        <div>
          <h4 className="footer-heading">Support</h4>
          <p className="footer-link">Demo payments only — no real charges.</p>
          <p className="footer-link">Free shipping over ₹1,999</p>
          <p className="footer-link">hello@shopsphere.demo</p>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} ShopSphere. Crafted in dark glass.</div>
    </footer>
  );
};

export default Footer;
