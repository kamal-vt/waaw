import type { Metadata } from "next";
import PricingSection from "@/components/sections/PricingSection";
import { Navbar } from "../../src/components/Navbar";
import { FooterSection } from "../../src/components/sections/FooterSection";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent and competitive pricing for our premium software development, design, and digital solutions.",
  keywords: "pricing, software development pricing, web design pricing, digital solutions pricing, custom software pricing, technology services pricing, affordable software development, competitive pricing for web solutions, transparent pricing for digital services",
};

export default function Pricing(){

  return (
    <main className="relative">
      <Navbar />
         <PricingSection />
      <FooterSection />
    </main>
  );
}
