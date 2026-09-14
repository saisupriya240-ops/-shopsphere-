const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Fix hardcoded dark image backgrounds
css = css.replace(/background: #1a2235;/g, 'background: var(--bg-secondary);');
css = css.replace(/background: linear-gradient\(135deg, #1a2235, #111827\);/g, 'background: var(--bg-secondary);');

// Fix hardcoded rgba dark backgrounds on badges/overlays
css = css.replace(/background: rgba\(11, 15, 25, 0\.8\);/g, 'background: rgba(0,0,0,0.7);');
css = css.replace(/background: rgba\(11,15,25,0\.8\);/g, 'background: rgba(0,0,0,0.7);');
css = css.replace(/background: rgba\(11,15,25,0\.75\);/g, 'background: rgba(0,0,0,0.65);');

// Fix category badge color from cyan to neutral
css = css.replace(/color: var\(--accent-secondary\);(\n.*?font-size: 0\.72rem;)/g, 'color: var(--text-main);$1');
css = css.replace(/border: 1px solid rgba\(6, 182, 212, 0\.3\);/g, 'border: 1px solid var(--border-color);');

// Fix add-cart-btn from purple to neutral
css = css.replace(
  `.add-cart-btn {\n  background: rgba(139, 92, 246, 0.12);\n  color: var(--accent-primary);\n  border: 1px solid rgba(139, 92, 246, 0.28);`,
  `.add-cart-btn {\n  background: var(--text-strong);\n  color: var(--bg-primary);\n  border: 1px solid var(--text-strong);`
);

// Fix add-cart-btn hover
css = css.replace(
  '.add-cart-btn:hover { background: var(--accent-primary); color: white; border-color: var(--accent-primary); }',
  '.add-cart-btn:hover { background: var(--text-muted); color: var(--bg-primary); border-color: var(--text-muted); }'
);

// Fix category-btn hover/active from purple
css = css.replace('.category-btn:hover { background: rgba(139,92,246,0.08); color: var(--text-main); }',
  '.category-btn:hover { background: var(--border-color); color: var(--text-main); }');
css = css.replace(
  `.category-btn.active {\n  background: rgba(139,92,246,0.15);\n  color: var(--accent-primary);\n  font-weight: 700;\n  border-color: rgba(139,92,246,0.3);\n}`,
  `.category-btn.active {\n  background: var(--text-strong);\n  color: var(--bg-primary);\n  font-weight: 700;\n  border-color: var(--text-strong);\n}`
);

// Fix reset-btn from purple
css = css.replace(
  `.reset-btn {\n  width: 100%;\n  padding: 0.65rem;\n  background: rgba(139,92,246,0.12);\n  color: var(--accent-primary);\n  border: 1px solid rgba(139,92,246,0.3);`,
  `.reset-btn {\n  width: 100%;\n  padding: 0.65rem;\n  background: transparent;\n  color: var(--text-main);\n  border: 1px solid var(--border-color);`
);
css = css.replace('.reset-btn:hover { background: var(--accent-primary); color: white; }',
  '.reset-btn:hover { background: var(--text-strong); color: var(--bg-primary); }');

// Fix qty-btn hover from purple
css = css.replace('.qty-btn:hover { background: rgba(139,92,246,0.2); color: var(--accent-primary); }',
  '.qty-btn:hover { background: var(--border-color); color: var(--text-main); }');

// Fix cart-item hover from purple
css = css.replace('.cart-item:hover { border-color: rgba(139,92,246,0.25); }',
  '.cart-item:hover { border-color: var(--text-muted); }');

// Fix cart-item-price color from cyan
css = css.replace('.cart-item-price { color: var(--accent-secondary); font-weight: 600; font-size: 0.9rem; }',
  '.cart-item-price { color: var(--text-main); font-weight: 600; font-size: 0.9rem; }');

// Fix payment option hover/selected from purple
css = css.replace('.payment-option:hover { border-color: rgba(139,92,246,0.3); }',
  '.payment-option:hover { border-color: var(--text-muted); }');
css = css.replace('.payment-option.selected { border-color: var(--accent-primary); background: rgba(139,92,246,0.08); }',
  '.payment-option.selected { border-color: var(--text-strong); background: var(--border-color); }');

// Fix .search-input focus from purple
css = css.replace('box-shadow: 0 0 0 3px rgba(139,92,246,0.12);',
  'box-shadow: 0 0 0 2px var(--border-color);');

// Fix .form-input focus
css = css.replace('.form-input:focus { outline: none; border-color: var(--accent-primary); box-shadow: 0 0 0 2px rgba(139,92,246,0.15); }',
  '.form-input:focus { outline: none; border-color: var(--text-muted); box-shadow: 0 0 0 2px var(--border-color); }');

// Fix category-pill hover/active from purple
css = css.replace(
  `.category-pill:hover, .category-pill.active {\n  background: rgba(139,92,246,0.15);\n  border-color: rgba(139,92,246,0.4);\n  color: var(--accent-primary);\n}`,
  `.category-pill:hover, .category-pill.active {\n  background: var(--text-strong);\n  border-color: var(--text-strong);\n  color: var(--bg-primary);\n}`
);

// Fix wishlist btn liked from pink
css = css.replace('.wishlist-btn.liked { color: var(--text-main); border-color: rgba(236,72,153,0.4); }',
  '.wishlist-btn.liked { color: var(--text-main); border-color: var(--text-muted); }');

// Fix hero star rating from gold (which = white in theme-dark, ok, but keep)
// Fix .rating-stars that uses accent-gold (currently white in both themes = ok)
// Fix product card hover glow from purple
css = css.replace(
  'box-shadow: 0 16px 40px -12px rgba(139,92,246,0.3), 0 8px 20px rgba(0,0,0,0.5);',
  'box-shadow: 0 16px 40px -12px rgba(0,0,0,0.2), 0 8px 20px rgba(0,0,0,0.1);'
);
css = css.replace(
  'border-color: rgba(139, 92, 246, 0.35);',
  'border-color: var(--text-muted);'
);

// Fix nav-link active from purple
css = css.replace(
  `.nav-link.active {\n  color: var(--text-main);\n  background: rgba(139, 92, 246, 0.15);\n  border: 1px solid rgba(139, 92, 246, 0.25);\n}`,
  `.nav-link.active {\n  color: var(--nav-text);\n  background: rgba(128,128,128,0.1);\n  border: 1px solid rgba(128,128,128,0.2);\n}`
);

// Fix cart-icon-btn hover from purple
css = css.replace(
  `.cart-icon-btn:hover {\n  background: rgba(139, 92, 246, 0.15);\n  border-color: var(--accent-primary);\n  box-shadow: var(--accent-glow-sm);\n}`,
  `.cart-icon-btn:hover {\n  background: rgba(128,128,128,0.12);\n  border-color: var(--text-muted);\n}`
);

// Fix wishlist-icon-btn hover from pink
css = css.replace(
  '.wishlist-icon-btn:hover { color: #EC4899; border-color: #EC4899; background: rgba(236,72,153,0.1); }',
  '.wishlist-icon-btn:hover { color: var(--nav-text); border-color: var(--nav-text); background: rgba(128,128,128,0.1); }'
);
css = css.replace(
  '.wishlist-icon-btn.has-items { color: #EC4899; border-color: rgba(236,72,153,0.4); }',
  '.wishlist-icon-btn.has-items { color: var(--nav-text); border-color: var(--text-muted); }'
);

// Fix nav-badge gradient from purple
css = css.replace(
  `.nav-badge {\n  background: var(--accent-gradient);\n  color: white;`,
  `.nav-badge {\n  background: var(--text-strong);\n  color: var(--bg-primary);`
);

// Fix section-link hover from pink
css = css.replace('.section-link:hover { color: var(--accent-pink); }',
  '.section-link:hover { color: var(--text-muted); }');

// Fix hero stats gradient text from purple
css = css.replace(
  `.hero-stat-value {\n  font-size: 1.75rem;\n  font-weight: 800;\n  background: var(--accent-gradient);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}`,
  `.hero-stat-value {\n  font-size: 1.75rem;\n  font-weight: 800;\n  color: var(--text-main);\n}`
);

// Fix section-title span from purple gradient
css = css.replace(
  `.section-title span {\n  background: var(--accent-gradient);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}`,
  `.section-title span {\n  color: var(--text-muted);\n  font-weight: 400;\n}`
);

// Fix hero-eyebrow from purple
css = css.replace(
  `background: rgba(139, 92, 246, 0.15);\n  border: 1px solid rgba(139, 92, 246, 0.3);\n  color: var(--accent-primary);`,
  `background: transparent;\n  border: 1px solid var(--border-color);\n  color: var(--text-muted);`
);

// Fix story-ring-avatar from gradient
css = css.replace(
  `.story-ring-avatar {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  padding: 3px;\n  background: var(--accent-gradient);`,
  `.story-ring-avatar {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  padding: 3px;\n  background: var(--border-color);`
);

// Add footer-brand style and footer-heading style if not present
if (!css.includes('.footer-brand')) {
  css += `
/* Footer brand */
.footer-brand {
  font-size: 1.4rem;
  font-weight: 800;
  letter-spacing: -0.5px;
  color: var(--footer-text);
}

/* Footer heading */
.footer-heading {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgba(255,255,255,0.5);
  margin-bottom: 1rem;
}
`;
}

// Also add main-content to be full-width on home page
if (!css.includes('.theme-dark .main-content')) {
  css += `
/* Home page (dark theme) should be full-width with no max-width padding */
.theme-dark .main-content {
  max-width: 100%;
  padding: 0;
}

.theme-dark .hero {
  border-radius: 0;
  margin-bottom: 0;
}

.theme-light .main-content {
  max-width: 1320px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}
`;
}

fs.writeFileSync(cssPath, css);
console.log('CSS updated successfully! File size:', fs.statSync(cssPath).size, 'bytes');
