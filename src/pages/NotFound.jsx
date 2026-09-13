import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '5rem 1rem' }}>
      <h1 style={{ fontSize: '6rem', fontWeight: '800', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        404
      </h1>
      <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' }}>Page Not Found</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        The page you are looking for might have been moved, renamed, or deleted.
      </p>
      <Link to="/" className="btn-primary">
        Return to Home Page
      </Link>
    </div>
  );
};

export default NotFound;
