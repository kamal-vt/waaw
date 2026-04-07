"use client";
import { useRef, ReactNode } from 'react';

interface ParallaxCardProps {
  children: ReactNode;
  intensity?: number;
  className?: string;
  [key: string]: any;
}

export default function ParallaxCard({ children, intensity = 12, className = '', ...props }: ParallaxCardProps) {
  const innerRef = useRef<HTMLDivElement>(null);

  const rectRef = useRef<DOMRect | null>(null);

  const handleMouseEnter = () => {
    if (innerRef.current) {
      rectRef.current = innerRef.current.getBoundingClientRect();
    }
  };

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = innerRef.current;
    if (!el || !rectRef.current) return;
    
    const rect = rectRef.current;
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const rotateX = (0.5 - y) * intensity; // tilt up/down
    const rotateY = (x - 0.5) * intensity; // tilt left/right

    el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    el.style.transition = 'transform 80ms ease-out';
  };

  const handleLeave = () => {
    const el = innerRef.current;
    if (!el) return;
    rectRef.current = null;
    el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)';
    el.style.transition = 'transform 300ms ease';
  };

  return (
    <div className={className} onMouseEnter={handleMouseEnter} onMouseMove={handleMove} onMouseLeave={handleLeave} {...props}>
      <div ref={innerRef} className="will-change-transform h-full">
        {children}
      </div>
    </div>
  );
}
