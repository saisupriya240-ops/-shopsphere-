import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const STORIES = [
  {
    id: 'flash',
    emoji: '⚡',
    label: 'Flash Sale',
    title: '48-hour Flash Sale',
    body: 'Unlock extra markdowns on audio, watches, and artisan homeware. Limited units — once they vanish, they are gone.',
    cta: 'Shop deals',
    to: '/products?sort=price-low',
  },
  {
    id: 'drops',
    emoji: '✦',
    label: 'New Drops',
    title: 'This week’s new drops',
    body: 'Fresh Chanderi weaves, magnetic chess boards, and AMOLED wearables just landed in the sphere.',
    cta: 'See newest',
    to: '/products?sort=newest',
  },
  {
    id: 'artisan',
    emoji: '🪔',
    label: 'Artisan Sourced',
    title: 'Artisan sourced, traced',
    body: 'Blue pottery, Madhubani canvases, and khadi kurtas made with independent ateliers across India.',
    cta: 'Browse crafts',
    to: '/products?category=Indian%20Products',
  },
  {
    id: 'audio',
    emoji: '🎧',
    label: 'Audio Lab',
    title: 'Spatial audio night',
    body: 'ANC earbuds tuned for long-haul commutes. Try them with our demo-friendly checkout.',
    cta: 'Open audio',
    to: '/products?category=Audio',
  },
];

const StoryRings = () => {
  const [active, setActive] = useState(null);
  const [seen, setSeen] = useState(() => {
    try {
      return JSON.parse(sessionStorage.getItem('ss_stories_seen') || '[]');
    } catch {
      return [];
    }
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!active) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active]);

  const openStory = (story) => {
    const next = seen.includes(story.id) ? seen : [...seen, story.id];
    setSeen(next);
    sessionStorage.setItem('ss_stories_seen', JSON.stringify(next));
    setActive(story);
  };

  return (
    <section className="story-rings-section" aria-label="Shop stories">
      <div className="story-rings-row">
        {STORIES.map((story) => (
          <button
            key={story.id}
            type="button"
            className={`story-ring ${seen.includes(story.id) ? 'seen' : ''}`}
            onClick={() => openStory(story)}
          >
            <span className="story-ring-avatar">
              <span className="story-ring-avatar-inner">{story.emoji}</span>
            </span>
            <span className="story-ring-label">{story.label}</span>
          </button>
        ))}
      </div>

      {active && (
        <div className="story-overlay" onClick={() => setActive(null)} role="presentation">
          <div
            className="story-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="story-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" className="story-close" onClick={() => setActive(null)} aria-label="Close story">
              ×
            </button>
            <div style={{ fontSize: '2.4rem', marginBottom: '0.75rem' }}>{active.emoji}</div>
            <h3 id="story-title" className="section-title" style={{ fontSize: '1.35rem' }}>
              {active.title}
            </h3>
            <p style={{ color: 'var(--text-muted)', margin: '0.75rem 0 1.5rem' }}>{active.body}</p>
            <button
              type="button"
              className="btn-primary"
              onClick={() => {
                navigate(active.to);
                setActive(null);
              }}
            >
              {active.cta}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default StoryRings;
