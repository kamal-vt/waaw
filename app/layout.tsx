import type { Metadata } from "next";
import Script from "next/script";
import "../globals.css";
import BlobCursor from "@/components/ui/BlobCursor";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import PageTracker from "@/components/analytics/PageTracker";
import ScrollTracker from "@/components/analytics/ScrollTracker";
import ArrowUpButton from "@/components/ui/ArrowUp";

export const metadata: Metadata = {
  title: "Waaw – Innovative Software Development & Digital Solutions",
  description:
    "Waaw is a leading software development company providing custom web development, e-commerce, design, digital marketing, and business automation services.",
  keywords:
    "software development, web development, digital transformation, e-commerce, IT consulting, bespoke software, Waaw",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gtmId = "GTM-K4Q99999";

  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        {gtmId && (
          <Script id="gtm-script" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `}
          </Script>
        )}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}


        <BlobCursor />
        <GoogleAnalytics GA_MEASUREMENT_ID="G-DGPX6QCVJJ" />
        
        {/* Analytics & Trackers */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DGPX6QCVJJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DGPX6QCVJJ', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        
        <PageTracker />
        <ScrollTracker />

        {children}
        <ArrowUpButton/>
      </body>
    </html>
  );
}