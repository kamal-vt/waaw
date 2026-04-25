import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";

export const metadata: Metadata = {
  title: "MVP Development Agency for Startups | Waaw Technologies",
  description: "Accelerate your startup with our MVP development services in Hyderabad. We build scalable products for early-stage ventures.",
  keywords: "startup website development, mvp development agency, startup digital solutions, tech partner for startups",
};

export default function Startups() {
  return (
    <main className="relative">
      <Navbar />
      <div className="pt-32 pb-20 bg-black text-white px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Digital Solutions for Startups</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
          Your strategic technology partner from idea to MVP and beyond. We build scalable foundations for future unicorns.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          <div className="p-8 bg-[#111111] rounded-2xl border border-[#222222]">
            <h3 className="text-2xl font-bold mb-4 text-white">MVP Development</h3>
            <p className="text-gray-400">Building core features rapidly to validate your product and attract investors.</p>
          </div>
          <div className="p-8 bg-[#111111] rounded-2xl border border-[#222222]">
            <h3 className="text-2xl font-bold mb-4 text-white">SaaS Solutions</h3>
            <p className="text-gray-400">Architecting scalable and secure Software-as-a-Service platforms for your startup.</p>
          </div>
          <div className="p-8 bg-[#111111] rounded-2xl border border-[#222222]">
            <h3 className="text-2xl font-bold mb-4 text-white">Product Scaling</h3>
            <p className="text-gray-400">Technical leadership and execution to scale your platform as your user base grows.</p>
          </div>
        </div>
      </div>
      <FooterSection />
    </main>
  );
}
