import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Script from "next/script";
import "../globals.css";
import ArrowUpButton from "@/components/ui/ArrowUp";

// Dynamic imports for client-side components to reduce initial JS payload
const BlobCursor = dynamic(() => import("@/components/ui/BlobCursor"), { ssr: false });
const GoogleAnalytics = dynamic(() => import("@/components/GoogleAnalytics"), { ssr: false });
const PageTracker = dynamic(() => import("@/components/analytics/PageTracker"), { ssr: false });
const ScrollTracker = dynamic(() => import("@/components/analytics/ScrollTracker"), { ssr: false });

export const metadata: Metadata = {
  metadataBase: new URL("https://waaw.world"),
  title: {
    default: "Waaw – Innovative Software Development & Digital Solutions",
    template: "%s | Waaw",
  },
  description:
    "Waaw is a leading software development company providing custom web development, e-commerce, design, digital marketing, and business automation services.",
  keywords: [
    "waaw",
    "waaw world",
    "waaw technologies",
    "waaw tech",
    "waaw software",
    "waaw digital solutions",
    "waaw website",
    "software development",
    "web development",
    "development",
    "web development",
    "digital transformation",
    "e-commerce",
    "IT consulting",
    "bespoke software",
    "software house",
    "custom software development",
    "technology solutions",
  ],
  authors: [{ name: "Waaw Team" }],
  creator: "Waaw",
  publisher: "Waaw",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico", // Ideally use a specific apple-touch-icon
  },
  openGraph: {
    title: "Waaw – Innovative Software Development & Digital Solutions",
    description:
      "Transforming businesses through smart digital platforms, high-performing websites, and custom software solutions.",
    url: "https://waaw.world",
    siteName: "Waaw",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png", // Using logo as a placeholder for OG image
        width: 1200,
        height: 630,
        alt: "Waaw Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Waaw – Innovative Software Development & Digital Solutions",
    description:
      "Leading software development company providing custom web development and digital transformation.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://waaw.world",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Waaw",
  url: "https://waaw.world",
  logo: "https://waaw.world/logo.png",
  description: "Waaw is a leading software development company providing custom web development, e-commerce, design, digital marketing, and business automation services.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "India", // Assuming India based on context, update if different
  },
  sameAs: [
    "https://twitter.com/waaw", // Placeholder social links
    "https://linkedin.com/company/waaw",
  ],
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
        {/* DNS-Prefetch and Preconnect for third-party scripts */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* JSON-LD for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
      <body className="antialiased overflow-x-hidden">
        <BlobCursor />
        
        <PageTracker />
        <ScrollTracker />

        {children}
        <ArrowUpButton />

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

        {/* Analytics Infrastructure - Loaded lazily */}
        <GoogleAnalytics GA_MEASUREMENT_ID="G-DGPX6QCVJJ" />
        
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DGPX6QCVJJ"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DGPX6QCVJJ', {
              page_path: window.location.pathname,
              send_page_view: false
            });
          `}
        </Script>
      </body>
    </html>
  );
}