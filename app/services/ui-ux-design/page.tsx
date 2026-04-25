import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/ui-ux-design" },
  title: "UI/UX Design Agency in Hyderabad | Waaw Technologies",
  description: "Award-winning UI/UX design agency in Hyderabad. We create conversion-focused interfaces and seamless user experiences.",
  keywords: "ui ux design agency hyderabad, user experience design, user interface design, website ui design, app ui design",
};

export default function UIUXDesign() {
  return (
    <main className="relative">
      <Navbar />
      <div className="pt-24 bg-black text-white px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">UI/UX Design</h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Designing beautiful, intuitive, and conversion-focused user interfaces for web and mobile.
        </p>
      </div>
      <ServicesSection />
      <FooterSection />
    </main>
  );
}
