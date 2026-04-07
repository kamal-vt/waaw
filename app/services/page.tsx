import type { Metadata } from "next";
import { Navbar } from "../../src/components/Navbar";
import { FooterSection } from "../../src/components/sections/FooterSection";
import { ServicesSection } from "../../src/components/sections/ServicesSection";

export const metadata: Metadata = {
  title: "Services",
  description: "Comprehensive software development services including web apps, e-commerce, and business automation solutions tailored for growth.",
};

export default function Services() {

  return (
    <main className="relative">
      <Navbar />
      {/* <div className="min-h-screen bg-black text-[#bbbbbb] flex items-center justify-center">
        <h1 className="text-4xl font-bold">Services</h1>
      </div> */}
         <ServicesSection />
      <FooterSection />
    </main>
  );
}
