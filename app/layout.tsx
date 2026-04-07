import type { Metadata } from "next";
import Script from "next/script";
import "../globals.css";
import BlobCursor from "@/components/ui/BlobCursor";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import PageTracker from "@/components/analytics/PageTracker";
import ScrollTracker from "@/components/analytics/ScrollTracker";
import ArrowUpButton from "@/components/ui/ArrowUp";

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