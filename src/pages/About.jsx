import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <section className="about-hero">
        <h1 className="hero-title" style={{ fontSize: '2.5rem' }}>
          About <span className="hero-highlight">ShopSphere</span>
        </h1>
        <p className="hero-subtitle">
          We stitch Indian ateliers and modern gadgets into one dark-glass storefront — built for speed, honesty, and a little theatre.
        </p>
      </section>

      <div className="about-stats-grid">
        {[
          ['21', 'Catalog SKUs'],
          ['7', 'Shop worlds'],
          ['4.8★', 'Mean rating'],
          ['0ms', 'Real charges'],
        ].map(([value, label]) => (
          <div className="about-stat-card" key={label}>
            <div className="about-stat-value">{value}</div>
            <div className="about-stat-label">{label}</div>
          </div>
        ))}
      </div>

      <div className="about-values-grid">
        {[
          ['🪔', 'Artisan first', 'Blue pottery, Madhubani, khadi, and sheesham — sourced with named craft traditions, not generic stock photos as the product itself.'],
          ['🎧', 'Tech with taste', 'Audio and wearables sit beside spice and silk so one checkout can hold both a kulhad set and ANC earbuds.'],
          ['🔒', 'Honest demo payments', 'UPI, card, and COD are simulated end-to-end so you can practise the flow without touching a gateway.'],
          ['💜', 'Local-first memory', 'Cart and wishlist live in your browser. Clear them anytime — no account required.'],
        ].map(([icon, title, desc]) => (
          <article className="about-value-card" key={title}>
            <div className="about-value-icon">{icon}</div>
            <h3 className="about-value-title">{title}</h3>
            <p className="about-value-desc">{desc}</p>
          </article>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
        <Link to="/products" className="btn-primary">
          Browse the collection
        </Link>
      </div>
    </div>
  );
};

export default About;
