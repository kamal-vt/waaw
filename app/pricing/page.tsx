"use client";
import PricingSection from "@/components/sections/PricingSection";
import { Navbar } from "../../src/components/Navbar";
import { FooterSection } from "../../src/components/sections/FooterSection";


export default function Pricing(){
  return (
    <main className="relative">
      <Navbar />
         <PricingSection />
      <FooterSection />
    </main>
  );
}
