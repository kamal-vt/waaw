import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/seo" },
  title: "SEO Agency in Hyderabad | Waaw Technologies",
  description: "Improve your search rankings with the best SEO agency in Hyderabad. We offer technical SEO, local SEO, and content strategy.",
  keywords: "seo agency hyderabad, search engine optimization hyderabad, local seo services, technical seo, seo company india",
};

export default function SEO() {
  return (
    <main className="relative">
      <Navbar />
      <div className="pt-24 bg-black text-white px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">SEO Services</h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Ranking your business on the first page of Google with strategic search engine optimization.
        </p>
      </div>
      <ServicesSection />
      <FooterSection />
    </main>
  );
}
