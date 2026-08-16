'use client';
import { useState, useCallback } from 'react';
import { getAssetUrl } from '@/lib/assetUrl';
import styles from './ImageWithFallback.module.css';

/**
 * Image component with automatic CDN resolution and graceful fallback.
 * Falls back to a styled placeholder if the image fails to load.
 */
export default function ImageWithFallback({
  src,
  alt = '',
  className = '',
  fill = false,
  priority = false,
  style = {},
  ...props
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const resolvedSrc = getAssetUrl(src);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoading(false);
    if (process.env.NODE_ENV === 'development') {
      console.warn(`[ImageWithFallback] Failed to load: ${src} → ${resolvedSrc}`);
    }
  }, [src, resolvedSrc]);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  if (hasError) {
    return (
      <div
        className={`${styles.fallback} ${className}`}
        style={style}
        role="img"
        aria-label={alt || 'Image unavailable'}
        {...props}
      >
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21 15 16 10 5 21"/>
        </svg>
        <span className={styles.fallbackText}>{alt || 'Image unavailable'}</span>
      </div>
    );
  }

  return (
    <>
      {isLoading && <div className={`${styles.skeleton} ${className}`} style={style} />}
      <img
        src={resolvedSrc}
        alt={alt}
        className={`${className} ${isLoading ? styles.hidden : ''}`}
        style={style}
        onError={handleError}
        onLoad={handleLoad}
        loading={priority ? 'eager' : 'lazy'}
        {...props}
      />
    </>
  );
}
