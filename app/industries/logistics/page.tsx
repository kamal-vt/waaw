import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";

export const metadata: Metadata = {
  alternates: { canonical: "/industries/logistics" },
  title: "Logistics & Supply Chain Management Software | Waaw Technologies",
  description: "Optimized logistics solutions in Hyderabad. We build fleet management software, delivery apps, and supply chain portals.",
  keywords: "logistics website development, supply chain management system, fleet management software, delivery tracking apps",
};

export default function Logistics() {
  return (
    <main className="relative">
      <Navbar />
      <div className="pt-32 pb-20 bg-black text-white px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Logistics & Supply Chain</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
          Streamlining global and local logistics operations with advanced tracking and management software.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          <div className="p-8 bg-[#111111] rounded-2xl border border-[#222222]">
            <h3 className="text-2xl font-bold mb-4 text-white">Fleet Management</h3>
            <p className="text-gray-400">Real-time vehicle tracking, maintenance scheduling, and fuel monitoring solutions.</p>
          </div>
          <div className="p-8 bg-[#111111] rounded-2xl border border-[#222222]">
            <h3 className="text-2xl font-bold mb-4 text-white">Delivery Apps</h3>
            <p className="text-gray-400">Custom last-mile delivery applications with route optimization and driver management.</p>
          </div>
          <div className="p-8 bg-[#111111] rounded-2xl border border-[#222222]">
            <h3 className="text-2xl font-bold mb-4 text-white">SCM Systems</h3>
            <p className="text-gray-400">End-to-end supply chain visibility and automation for improved efficiency.</p>
          </div>
        </div>
      </div>
      <FooterSection />
    </main>
  );
}
