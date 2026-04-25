import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/digital-marketing" },
  title: "Digital Marketing Agency in Hyderabad | Waaw Technologies",
  description: "Results-driven digital marketing agency in Hyderabad. We offer SEO, social media marketing, and performance marketing services.",
  keywords: "digital marketing agency hyderabad, online marketing company, social media marketing, performance marketing, content marketing",
};

export default function DigitalMarketing() {
  return (
    <main className="relative">
      <Navbar />
      <div className="pt-24 bg-black text-white px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Digital Marketing</h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Helping brands grow through data-driven digital marketing strategies and execution.
        </p>
      </div>
      <ServicesSection />
      <FooterSection />
    </main>
  );
}
