import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

export const metadata: Metadata = {
  title: "Mobile App Development Company | Waaw Technologies",
  description: "Top-tier mobile app development company. We build native and cross-platform apps for iOS and Android using React Native and Flutter.",
  keywords: "mobile app development hyderabad, app development company india, react native app development, flutter development company",
  openGraph: {
    title: "Mobile App Development Company | Waaw Technologies",
    description: "Top-tier mobile app development company. We build native and cross-platform apps for iOS and Android using React Native and Flutter.",
    url: "https://waaw.world/services/app-development",
    siteName: "Waaw Technologies",
    images: [{ url: "/logo.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development Company | Waaw Technologies",
    description: "Top-tier mobile app development company. We build native and cross-platform apps for iOS and Android using React Native and Flutter.",
    images: ["/logo.png"],
  },
};

export default function AppDevelopment() {
  return (
    <main className="relative">
      <Navbar />
      <div className="pt-24 bg-black text-white px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Mobile App Development</h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Crafting intuitive and powerful mobile experiences for Android and iOS platforms.
        </p>
      </div>
      <ServicesSection />
      <FooterSection />
    </main>
  );
}
