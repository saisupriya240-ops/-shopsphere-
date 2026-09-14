import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h3 className="footer-brand" style={{ marginBottom: '1rem' }}>
            ShopSphere
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', lineHeight: '1.6', maxWidth: '220px' }}>
            Affordable fashion, everyday essentials and Indian specialties — all in one place.
          </p>
        </div>
        <div>
          <h4 className="footer-heading">Shop</h4>
          <Link to="/products" className="footer-link" style={{ display: 'block' }}>All Products</Link>
          <Link to="/products?category=Indian%20Products" className="footer-link" style={{ display: 'block' }}>Indian Products</Link>
          <Link to="/products?category=Fashion" className="footer-link" style={{ display: 'block' }}>Fashion</Link>
          <Link to="/products?category=Women%27s%20Accessories" className="footer-link" style={{ display: 'block' }}>Women's Accessories</Link>
          <Link to="/products?category=Men%27s%20Hoodies" className="footer-link" style={{ display: 'block' }}>Men's Hoodies</Link>
          <Link to="/products?category=Jeans" className="footer-link" style={{ display: 'block' }}>Jeans</Link>
          <Link to="/products?category=Crop%20Tops" className="footer-link" style={{ display: 'block' }}>Crop Tops</Link>
        </div>
        <div>
          <h4 className="footer-heading">More</h4>
          <Link to="/products?category=Audio" className="footer-link" style={{ display: 'block' }}>Audio</Link>
          <Link to="/products?category=Tech%2FElectronics" className="footer-link" style={{ display: 'block' }}>Tech / Electronics</Link>
          <Link to="/products?category=Grocery%2FFood" className="footer-link" style={{ display: 'block' }}>Grocery / Food</Link>
          <Link to="/products?category=Lifestyle" className="footer-link" style={{ display: 'block' }}>Lifestyle</Link>
          <Link to="/products?category=Footwear" className="footer-link" style={{ display: 'block' }}>Footwear</Link>
          <Link to="/products?category=Watches" className="footer-link" style={{ display: 'block' }}>Watches</Link>
        </div>
        <div>
          <h4 className="footer-heading">Company</h4>
          <Link to="/" className="footer-link" style={{ display: 'block' }}>Home</Link>
          <Link to="/about" className="footer-link" style={{ display: 'block' }}>About</Link>
          <p className="footer-link" style={{ display: 'block', marginTop: '1rem' }}>Demo payments only — no real charges.</p>
          <p className="footer-link" style={{ display: 'block' }}>Free shipping over ₹1,999</p>
          <p className="footer-link" style={{ display: 'block' }}>hello@shopsphere.demo</p>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} ShopSphere. Made with care in India.
      </div>
    </footer>
  );
};

export default Footer;
