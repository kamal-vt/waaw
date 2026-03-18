import type { Metadata } from "next";
import Script from "next/script";
import "../globals.css";
import BlobCursor from "@/components/ui/BlobCursor";
import GoogleAnalytics from "@/components/GoogleAnalytics";

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
  return (
    <html lang="en">
      <body>
        <BlobCursor />
        <GoogleAnalytics GA_MEASUREMENT_ID="G-DGPX6QCVJJ" />
        {children}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DGPX6QCVJJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DGPX6QCVJJ');
          `}
        </Script>
      </body>
    </html>
  );
}