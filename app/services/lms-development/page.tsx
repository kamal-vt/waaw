import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

export const metadata: Metadata = {
  title: "LMS Development Company in Hyderabad | Waaw Technologies",
  description: "Custom LMS development services in Hyderabad. We build online learning platforms, EdTech solutions, and student management systems.",
  keywords: "lms development company hyderabad, custom lms development, elearning platform development, edtech platform development",
};

export default function LMSDevelopment() {
  return (
    <main className="relative">
      <Navbar />
      <div className="pt-24 bg-black text-white px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">LMS Development</h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Empowering education through custom-built Learning Management Systems and EdTech platforms.
        </p>
      </div>
      <ServicesSection />
      <FooterSection />
    </main>
  );
}
