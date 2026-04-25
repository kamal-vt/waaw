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
    default: "Web Development & Digital Agency in Hyderabad | Waaw Technologies",
    template: "%s | Waaw Technologies",
  },
  description:
    "Waaw Technologies is a leading digital agency in Hyderabad specializing in web development, mobile apps, UI/UX design, SEO, and business automation (LMS, HRMS, CRM).",
  keywords: [
    "waaw world",
    "waaw",
    "waaw digital agency",
    "waaw world",
    "waaw tech",
    "waaw technologies hyderabad",
    "visiontech world",
    "digital agency hyderabad",
    "software development agency hyderabad",
    "web development company hyderabad",
    "digital solutions hyderabad",
    "innovative software development india",
    "web development agency hyderabad",
    "website development company hyderabad",
    "custom website development hyderabad",
    "responsive website design hyderabad",
    "next js development company india",
    "react js development agency hyderabad",
    "full stack web development hyderabad",
    "mobile app development hyderabad",
    "app development company hyderabad",
    "ui ux design agency hyderabad",
    "seo agency hyderabad",
    "digital marketing agency hyderabad",
    "crm integration services hyderabad",
    "marketing automation agency hyderabad",
    "lms development company hyderabad",
    "hrms development company india",
    "ecommerce website development hyderabad",
    "startup website development hyderabad",
    "mvp development agency hyderabad",
    "healthcare website development hyderabad",
    "edtech startup development india",
    "fintech website development hyderabad",
    "logistics website development hyderabad",
  ],
  authors: [{ name: "Waaw Team" }],
  creator: "Waaw Technologies",
  publisher: "Waaw Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Waaw Technologies – Innovative Software Development & Digital Solutions",
    description:
      "Transforming businesses through smart digital platforms, high-performing websites, and custom software solutions in Hyderabad, India.",
    url: "https://waaw.world",
    siteName: "Waaw Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Waaw Technologies Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Waaw Technologies – Innovative Software Development & Digital Solutions",
    description:
      "Leading software development company in Hyderabad providing custom web development and digital transformation.",
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Waaw Technologies",
  "alternateName": "Waaw World",
  "url": "https://waaw.world",
  "logo": "https://waaw.world/logo.png",
  "description": "Waaw Technologies is a leading software development company in Hyderabad providing custom web development, e-commerce, UI/UX design, digital marketing, and business automation services like LMS and HRMS.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-7702118555",
    "contactType": "sales",
    "email": "waaw@visiontech.world",
    "areaServed": ["IN", "US", "GB", "AE"],
    "availableLanguage": ["English", "Hindi", "Telugu"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Hitech City",
    "addressLocality": "Hyderabad",
    "addressRegion": "Telangana",
    "postalCode": "500081",
    "addressCountry": "India"
  },
  "service": [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Digital Marketing",
    "SEO Services",
    "CRM Integration",
    "Marketing Automation",
    "LMS Development",
    "HRMS Development",
    "E-commerce Development"
  ],
  "priceRange": "₹₹₹",
  "sameAs": [
    "https://x.com/WaaWTech",
    "https://www.linkedin.com/company/waaw-tech-official/",
    "https://www.instagram.com/waaw_tech/"
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