'use client';

import { useRef, useEffect, useCallback, useState } from 'react';
import gsap from 'gsap';
import styles from './BlobCursor.module.css';

export default function BlobCursor({
  blobType = 'circle',
  fillColor = 'silver',
  trailCount = 1,
  sizes = [50],
  innerSizes = [16],
  innerColor = 'rgba(255,255,255,0.85)',
  opacities = [0.45],
  shadowColor = 'rgba(0,0,0,0.75)',
  shadowBlur = 5,
  shadowOffsetX = 10,
  shadowOffsetY = 10,
  filterId = 'blob',
  filterStdDeviation = 30,
  filterColorMatrixValues = '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -10',
  useFilter = true,
  fastDuration = 0.1,
  slowDuration = 0.5,
  fastEase = 'power3.out',
  slowEase = 'power1.out',
  zIndex = 100
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const blobsRef = useRef<(HTMLDivElement | null)[]>([]);
  const hideTimeoutRef = useRef<number | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  if (isTouchDevice) return null;

  const metallicGradients = [
    'linear-gradient(140deg, #b0b2b5 0%, #fdfdfd 35%, #c9cace 55%, #7c7e83 75%, #2f3033 100%)',
    'linear-gradient(140deg, #d4d6d8 0%, #ffffff 45%, #b5b7ba 65%, #5b5d61 85%, #1c1d20 100%)',
    'linear-gradient(140deg, #9d9fa3 0%, #f6f7f8 30%, #dfe0e2 55%, #8d8f93 80%, #37383b 100%)'
  ];

  const handleMove = useCallback(
    (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      setIsActive(true);
      if (hideTimeoutRef.current) {
        window.clearTimeout(hideTimeoutRef.current);
      }
      hideTimeoutRef.current = window.setTimeout(() => {
        setIsActive(false);
      }, 180);

      blobsRef.current.forEach((el, i) => {
        if (!el) return;
        const isLead = i === 0;
        gsap.to(el, {
          x,
          y,
          duration: isLead ? fastDuration : slowDuration,
          ease: isLead ? fastEase : slowEase
        });
      });
    },
    [fastDuration, slowDuration, fastEase, slowEase]
  );

  useEffect(() => {
    window.addEventListener('mousemove', handleMove);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      if (hideTimeoutRef.current) {
        window.clearTimeout(hideTimeoutRef.current);
      }
    };
  }, [handleMove]);

  useEffect(() => {
    const previousCursor = document.body.style.cursor;
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = previousCursor;
    };
  }, []);

  const effectiveTrailCount = Math.max(
    1,
    Math.min(trailCount, sizes.length, innerSizes.length, opacities.length)
  );

  return (
    <div
      ref={containerRef}
      className={styles.blobContainer}
      style={{
        zIndex,
        opacity: isActive ? 1 : 0,
        transition: 'opacity 0.25s ease-out'
      }}
    >
      {useFilter && (
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <filter id={filterId}>
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation={filterStdDeviation} />
            <feColorMatrix in="blur" values={filterColorMatrixValues} />
          </filter>
        </svg>
      )}

      <div className={styles.blobMain} style={{ filter: useFilter ? `url(#${filterId})` : undefined }}>
        {Array.from({ length: effectiveTrailCount }).map((_, i) => {
          const size = sizes[i] ?? sizes[sizes.length - 1] ?? 50;
          const innerSize = innerSizes[i] ?? innerSizes[innerSizes.length - 1] ?? 16;
          const opacity = opacities[i] ?? opacities[opacities.length - 1] ?? 0.35;
          const gradient = metallicGradients[i % metallicGradients.length] ?? fillColor;
          return (
          <div
            key={i}
            ref={el => (blobsRef.current[i] = el)}
            className={styles.blob}
            style={{
              width: size,
              height: size,
              borderRadius: blobType === 'circle' ? '50%' : '0%',
              background: gradient,
              opacity: isActive ? opacity : 0,
              boxShadow: `${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px 0 ${shadowColor}`
            }}
          >
            <div
              className={styles.innerDot}
              style={{
                width: innerSize,
                height: innerSize,
                top: (size - innerSize) / 2,
                left: (size - innerSize) / 2,
                backgroundColor: innerColor,
                borderRadius: blobType === 'circle' ? '50%' : '0%'
              }}
            />
          </div>
        );
        })}
      </div>
    </div>
  );
}
