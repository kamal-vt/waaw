// src/lib/tracking.ts

/**
 * Extends the Window interface to typed support for dataLayer.
 */
declare global {
  interface Window {
    dataLayer: any[];
  }
}

/**
 * Pushes a tracking event to the Google Tag Manager dataLayer.
 * Safely handles environment and undefined checks.
 * 
 * @param eventName The name of the event (e.g., 'pageview', 'scroll_depth', 'cta_click')
 * @param params Additional event parameters (e.g., page, percent, label)
 */
export const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
  if (typeof window === "undefined") return;

  // Initialize dataLayer if not present
  window.dataLayer = window.dataLayer || [];

  const payload = {
    event: eventName,
    ...params,
  };

  if (process.env.NODE_ENV === "development") {
    console.log(`[GTM-Track] ${eventName}:`, params);
  }

  window.dataLayer.push(payload);
};

/**
 * Pushes raw data to dataLayer for advanced cases.
 */
export const pushToDataLayer = (data: Record<string, any>) => {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(data);
};
