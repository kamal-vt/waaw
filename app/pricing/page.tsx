import type { Metadata } from "next";
import PricingSection from "@/components/sections/PricingSection";
import { Navbar } from "../../src/components/Navbar";
import { FooterSection } from "../../src/components/sections/FooterSection";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent and competitive pricing for our premium software development, design, and digital solutions.",
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
