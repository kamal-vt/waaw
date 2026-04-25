import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";

export const metadata: Metadata = {
  alternates: { canonical: "/industries/finance" },
  title: "Fintech & Financial Services Website Design | Waaw Technologies",
  description: "Secure and scalable fintech solutions in Hyderabad. We build investment platforms, banking apps, and financial portals.",
  keywords: "fintech website development, financial services web design, banking app development, investment platforms, finance portals",
};

export default function Finance() {
  return (
    <main className="relative">
      <Navbar />
      <div className="pt-32 pb-20 bg-black text-white px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Fintech & Finance</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
          Delivering secure, compliant, and user-friendly digital solutions for the financial services industry.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          <div className="p-8 bg-[#111111] rounded-2xl border border-[#222222]">
            <h3 className="text-2xl font-bold mb-4 text-white">Fintech Apps</h3>
            <p className="text-gray-400">Mobile-first financial applications with high-level security and seamless UX.</p>
          </div>
          <div className="p-8 bg-[#111111] rounded-2xl border border-[#222222]">
            <h3 className="text-2xl font-bold mb-4 text-white">Investment Portals</h3>
            <p className="text-gray-400">Robust platforms for portfolio management, trading, and financial planning.</p>
          </div>
          <div className="p-8 bg-[#111111] rounded-2xl border border-[#222222]">
            <h3 className="text-2xl font-bold mb-4 text-white">Banking UI/UX</h3>
            <p className="text-gray-400">Modernizing legacy banking interfaces for a superior customer experience.</p>
          </div>
        </div>
      </div>
      <FooterSection />
    </main>
  );
}
