import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

export const metadata: Metadata = {
  alternates: { canonical: "/services/hrms-development" },
  title: "HRMS Development Company in India | Waaw Technologies",
  description: "Custom HRMS development services in Hyderabad. Automate your payroll, attendance, and employee management with our software.",
  keywords: "hrms development company india, hr software development hyderabad, custom hrms development, payroll automation software",
};

export default function HRMSDevelopment() {
  return (
    <main className="relative">
      <Navbar />
      <div className="pt-24 bg-black text-white px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">HRMS Development</h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Modernizing HR operations with custom Human Resource Management Systems and automation.
        </p>
      </div>
      <ServicesSection />
      <FooterSection />
    </main>
  );
}
