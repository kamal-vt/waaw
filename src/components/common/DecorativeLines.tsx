"use client";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  lineOffset?: number; // px distance from content
  dotSize?: number; // px
  animationDuration?: number; // seconds
};

/**
 * DecorativeLines v2
 * Adds animated glowing dots that travel along the gradient lines.
 */
export default function DecorativeLines({
  children,
  className,
  lineOffset = 20,
  dotSize = 8,
  animationDuration = 8,
}: Props) {
  const topOffset = `-${lineOffset}px`;
  const bottomOffset = `-${lineOffset}px`;

  const dotStyle: React.CSSProperties = {
    width: `${dotSize+2}px`,
    height: `${dotSize}px`,
    animationDuration: `${animationDuration}s`,
  };

  return (
    <div className={`relative inline-block ${className || ""}`}>
      {/* Top line */}
      <div
        className="absolute left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent blur-[1px] hidden md:block"
        style={{ top: topOffset, width: "100%" }}
      />
      {/* Animated top dot */}
      <div
        className="absolute rounded-full bg-white blur-[3px] shadow-[0_0_20px_rgba(255,255,255,0.8)] hidden md:block animate-dot-move-left"
        style={{ top: `calc(${topOffset} - 5px)`, ...dotStyle }}
      />

      {/* Content */}
      <div className="w-full">{children}</div>

      {/* Bottom line */}
      <div
        className="absolute left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent blur-[1px] hidden md:block"
        style={{ bottom: bottomOffset, width: "100%" }}
      />
      {/* Animated bottom dot */}
      <div
        className="absolute rounded-full bg-white blur-[3px] shadow-[0_0_20px_rgba(255,255,255,0.8)] hidden md:block animate-dot-move-right"
        style={{ bottom: `calc(${bottomOffset} - 5px)`, ...dotStyle }}
      />
    </div>
  );
}
