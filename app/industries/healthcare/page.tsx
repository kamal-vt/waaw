import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";

export const metadata: Metadata = {
  title: "Healthcare Website & App Development | Waaw Technologies",
  description: "Specialized healthcare digital solutions in Hyderabad. We build hospital websites, clinic management systems, and medical apps.",
  keywords: "healthcare website development, hospital website design, clinic management system, medical app development, healthtech solutions",
};

export default function Healthcare() {
  return (
    <main className="relative">
      <Navbar />
      <div className="pt-32 pb-20 bg-black text-white px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Healthcare Digital Solutions</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
          Transforming healthcare delivery through innovative digital platforms, from patient portals to clinic automation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          <div className="p-8 bg-[#111111] rounded-2xl border border-[#222222]">
            <h3 className="text-2xl font-bold mb-4 text-white">Hospital Websites</h3>
            <p className="text-gray-400">Patient-centric designs that improve engagement and streamline appointment bookings.</p>
          </div>
          <div className="p-8 bg-[#111111] rounded-2xl border border-[#222222]">
            <h3 className="text-2xl font-bold mb-4 text-white">Clinic Management</h3>
            <p className="text-gray-400">Complete automation for clinics, including records, billing, and scheduling.</p>
          </div>
          <div className="p-8 bg-[#111111] rounded-2xl border border-[#222222]">
            <h3 className="text-2xl font-bold mb-4 text-white">HealthTech Apps</h3>
            <p className="text-gray-400">Custom mobile applications for telemedicine, fitness tracking, and patient monitoring.</p>
          </div>
        </div>
      </div>
      <FooterSection />
    </main>
  );
}
