"use client";

import { useEffect } from "react";
import { trackEvent } from "../../lib/tracking";

export default function ScrollTracker() {
  useEffect(() => {
    const firedDepths = new Set<number>();

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Prevent division by zero
      if (documentHeight <= windowHeight) return;

      const scrollPercent = Math.round((scrollY / (documentHeight - windowHeight)) * 100);

      const thresholds = [25, 50, 75, 100];

      thresholds.forEach(threshold => {
        if (scrollPercent >= threshold && !firedDepths.has(threshold)) {
          firedDepths.add(threshold);
          trackEvent("scroll_depth", { percent: threshold });
        }
      });
    };

    let timeout: NodeJS.Timeout | null = null;
    const throttledScroll = () => {
      if (!timeout) {
        timeout = setTimeout(() => {
          handleScroll();
          timeout = null;
        }, 250); // 250ms throttle
      }
    };

    window.addEventListener("scroll", throttledScroll);
    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  return null;
}
