import React, { useId, useState } from 'react';

const FallbackCanvas = ({ alt, className, gradId }) => (
  <div className={`product-img-fallback ${className || ''}`} role="img" aria-label={alt || 'ShopSphere placeholder'}>
    <svg viewBox="0 0 320 240" className="fallback-svg" aria-hidden="true">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f5f5f5" />
          <stop offset="100%" stopColor="#e0e0e0" />
        </linearGradient>
      </defs>
      <rect width="320" height="240" fill={`url(#${gradId})`} />
      <circle cx="160" cy="92" r="28" fill="none" stroke="#999999" strokeWidth="2" opacity="0.7" />
      <path d="M148 92h24M160 80v24" stroke="#666666" strokeWidth="2" />
      <text x="160" y="148" textAnchor="middle" fill="#333333" fontSize="16" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800">
        ShopSphere
      </text>
      <text x="160" y="172" textAnchor="middle" fill="#777777" fontSize="11" fontFamily="Plus Jakarta Sans, sans-serif">
        Image unavailable
      </text>
    </svg>
  </div>
);

const SafeImage = ({ src, alt, className, width, height, eager }) => {
  const [failed, setFailed] = useState(!src);
  const gradId = useId().replace(/:/g, '');

  if (failed) {
    return <FallbackCanvas alt={alt} className={className} gradId={gradId} />;
  }

  return (
    <img
      src={src}
      alt={alt || 'Product'}
      className={className}
      width={width}
      height={height}
      loading={eager ? undefined : "lazy"}
      decoding="async"
      fetchpriority={eager ? "high" : undefined}
      onError={() => setFailed(true)}
    />
  );
};

export default SafeImage;
