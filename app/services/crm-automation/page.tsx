import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

export const metadata: Metadata = {
  title: "CRM & Marketing Automation Agency in Hyderabad | Waaw Technologies",
  description: "Automate your business workflows with our CRM integration and marketing automation services in Hyderabad.",
  keywords: "crm integration services hyderabad, marketing automation agency, whatsapp automation, lead automation, sales funnel automation",
};

export default function CRMAutomation() {
  return (
    <main className="relative">
      <Navbar />
      <div className="pt-24 bg-black text-white px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">CRM & Automation</h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Streamlining your business processes and marketing through intelligent automation.
        </p>
      </div>
      <ServicesSection />
      <FooterSection />
    </main>
  );
}
