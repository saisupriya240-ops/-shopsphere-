const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Replace the entire :root block
const newRoot = `
:root {
  --font-family: 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  /* ── Shared Radius ── */
  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:   12px;
  --radius-xl:   16px;
  --radius-full: 9999px;

  /* ── Shared Transitions ── */
  --transition-fast:   0.2s cubic-bezier(0.2, 0, 0, 1);
  --transition-normal: 0.4s cubic-bezier(0.2, 0, 0, 1);
  --transition-slow:   0.6s cubic-bezier(0.2, 0, 0, 1);
}

.theme-dark {
  --bg-primary:    #000000;
  --bg-secondary:  #0a0a0a;
  --bg-card:       #111111;
  --bg-card-hover: #1a1a1a;
  --bg-glass:      rgba(0, 0, 0, 0.85);
  --bg-input:      rgba(255, 255, 255, 0.05);

  --text-strong:  #ffffff;
  --text-main:    #F7F7F7;
  --text-muted:   #A0A0A0;
  --text-subtle:  #707070;

  --accent-primary:        #ffffff;
  --accent-primary-hover:  #e0e0e0;
  --accent-secondary:      #cccccc;
  --accent-pink:           #ffffff;
  --accent-green:          #ffffff;
  --accent-gold:           #ffffff;
  --accent-gradient:       #ffffff;
  --accent-gradient-cyan:  #ffffff;
  --accent-glow:           0 0 24px rgba(255, 255, 255, 0.15);
  --accent-glow-sm:        0 0 12px rgba(255, 255, 255, 0.1);

  --border-color:     rgba(255, 255, 255, 0.12);
  --border-highlight: rgba(255, 255, 255, 0.3);
  --shadow-main:      0 20px 40px -15px rgba(0, 0, 0, 0.8);
  --shadow-card:      0 8px 32px rgba(0, 0, 0, 0.5);
  
  --footer-bg: #000000;
  --footer-text: #ffffff;
  --footer-border: rgba(255, 255, 255, 0.12);
  
  --nav-bg: rgba(0, 0, 0, 0.85);
  --nav-text: #ffffff;
  --nav-border: rgba(255, 255, 255, 0.12);
}

.theme-light {
  --bg-primary:    #ffffff;
  --bg-secondary:  #F7F7F7;
  --bg-card:       #ffffff;
  --bg-card-hover: #fafafa;
  --bg-glass:      rgba(255, 255, 255, 0.9);
  --bg-input:      #f0f0f0;

  --text-strong:  #000000;
  --text-main:    #111111;
  --text-muted:   #555555;
  --text-subtle:  #888888;

  --accent-primary:        #000000;
  --accent-primary-hover:  #222222;
  --accent-secondary:      #333333;
  --accent-pink:           #000000;
  --accent-green:          #000000;
  --accent-gold:           #000000;
  --accent-gradient:       #000000;
  --accent-gradient-cyan:  #000000;
  --accent-glow:           0 4px 12px rgba(0, 0, 0, 0.1);
  --accent-glow-sm:        0 2px 6px rgba(0, 0, 0, 0.05);

  --border-color:     #E5E5E5;
  --border-highlight: #000000;
  --shadow-main:      0 10px 30px -10px rgba(0, 0, 0, 0.1);
  --shadow-card:      0 4px 12px rgba(0, 0, 0, 0.05);
  
  --footer-bg: #000000;
  --footer-text: #ffffff;
  --footer-border: rgba(255, 255, 255, 0.12);
  
  --nav-bg: rgba(255, 255, 255, 0.9);
  --nav-text: #000000;
  --nav-border: #E5E5E5;
}
`;

css = css.replace(/:root\s*\{[\s\S]*?\}\n/, newRoot + '\n');

// Update global background/color to not be hardcoded to radial gradients if possible.
css = css.replace(/body\s*\{[\s\S]*?\}/, `body {
  font-family: var(--font-family);
  background-color: var(--bg-primary);
  color: var(--text-main);
  line-height: 1.6;
  min-height: 100vh;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: background-color var(--transition-slow), color var(--transition-slow);
}`);

css = css.replace(/\.app-container\s*\{[\s\S]*?\}/, `.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--bg-primary);
  color: var(--text-main);
  transition: background-color var(--transition-slow), color var(--transition-slow);
}`);

// Fix navbar
css = css.replace(/\.navbar\s*\{[\s\S]*?\}/, `.navbar {
  position: sticky;
  top: 0;
  z-index: 200;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  background: var(--nav-bg);
  border-bottom: 1px solid var(--nav-border);
  transition: background var(--transition-slow), border-color var(--transition-slow);
}`);

css = css.replace(/\.brand-logo\s*\{[\s\S]*?\}/, `.brand-logo {
  font-size: 1.45rem;
  font-weight: 800;
  letter-spacing: -0.5px;
  color: var(--nav-text);
  display: flex;
  align-items: center;
  gap: 0.45rem;
  flex-shrink: 0;
}`);

css = css.replace(/\.nav-link\s*\{[\s\S]*?\}/, `.nav-link {
  font-weight: 500;
  font-size: 0.9rem;
  color: var(--text-muted);
  padding: 0.45rem 0.9rem;
  border-radius: var(--radius-full);
  transition: var(--transition-fast);
  position: relative;
}`);

// Replace hardcoded gradients and accents
css = css.replace(/background:\s*var\(--accent-gradient\);/g, 'background: var(--accent-primary); color: var(--bg-primary);');
css = css.replace(/color:\s*#EC4899;/g, 'color: var(--text-main);');
css = css.replace(/border-color:\s*#EC4899;/g, 'border-color: var(--text-main);');

// Remove radial gradients from hero
css = css.replace(/\.hero\s*\{[\s\S]*?\}/, `.hero {
  position: relative;
  text-align: center;
  padding: 5rem 2rem 4rem;
  border-radius: 0;
  overflow: hidden;
  margin-bottom: 3rem;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-main);
}`);

css = css.replace(/\.hero-highlight\s*\{[\s\S]*?\}/, `.hero-highlight {
  font-style: italic;
  font-weight: 400;
}`);

// Buttons
css = css.replace(/\.btn-primary\s*\{[\s\S]*?\}/, `.btn-primary {
  background: var(--text-strong);
  color: var(--bg-primary);
  padding: 0.8rem 1.9rem;
  font-size: 0.95rem;
  font-weight: 700;
  border-radius: 0;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: var(--transition-fast);
  border: 1px solid var(--text-strong);
  cursor: pointer;
}`);

css = css.replace(/\.btn-secondary\s*\{[\s\S]*?\}/, `.btn-secondary {
  background: transparent;
  color: var(--text-main);
  padding: 0.8rem 1.9rem;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 0;
  border: 1px solid var(--border-color);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: var(--transition-fast);
  cursor: pointer;
}`);

// Ensure Footer is Dark
css = css.replace(/\.footer\s*\{[\s\S]*?\}/, `.footer {
  background-color: var(--footer-bg);
  color: var(--footer-text);
  border-top: 1px solid var(--footer-border);
  padding: 4rem 1.5rem 2rem;
  margin-top: auto;
}`);
css = css.replace(/\.footer-title\s*\{[\s\S]*?\}/, `.footer-title {
  color: var(--footer-text);
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
}`);
css = css.replace(/\.footer-link\s*\{[\s\S]*?\}/, `.footer-link {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-bottom: 0.65rem;
  display: inline-block;
  transition: var(--transition-fast);
}`);
css = css.replace(/\.footer-bottom\s*\{[\s\S]*?\}/, `.footer-bottom {
  margin-top: 4rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--footer-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.85rem;
}`);

fs.writeFileSync(cssPath, css);

console.log('index.css has been updated.');
