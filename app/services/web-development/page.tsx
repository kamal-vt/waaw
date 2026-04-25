import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/web-development" },
  title: "Web Development Agency in Hyderabad | Waaw Technologies",
  description: "Expert web development services in Hyderabad. We specialize in custom websites, Next.js, React.js, and full-stack solutions for businesses.",
  keywords: "web development agency hyderabad, website development company hyderabad, custom website development, responsive web design, next js development india",
  openGraph: {
    title: "Web Development Agency in Hyderabad | Waaw Technologies",
    description: "Expert web development services in Hyderabad. We specialize in custom websites, Next.js, React.js, and full-stack solutions for businesses.",
    url: "https://waaw.world/services/web-development",
    siteName: "Waaw Technologies",
    images: [{ url: "/logo.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Agency in Hyderabad | Waaw Technologies",
    description: "Expert web development services in Hyderabad. We specialize in custom websites, Next.js, React.js, and full-stack solutions for businesses.",
    images: ["/logo.png"],
  },
};

export default function WebDevelopment() {
  return (
    <main className="relative">
      <Navbar />
      <div className="pt-24 bg-black text-white px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Web Development</h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Building high-performance, scalable, and responsive web solutions tailored to your business needs.
        </p>
      </div>
      <ServicesSection />
      <FooterSection />
    </main>
  );
}
