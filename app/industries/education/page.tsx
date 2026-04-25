import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";

export const metadata: Metadata = {
  alternates: { canonical: "/industries/education" },
  title: "Education & EdTech Software Development | Waaw Technologies",
  description: "Innovative EdTech solutions in Hyderabad. We build school websites, college platforms, and custom e-learning portals.",
  keywords: "edtech startup development, school website development, college website design, education platform development, elearning portals",
};

export default function Education() {
  return (
    <main className="relative">
      <Navbar />
      <div className="pt-32 pb-20 bg-black text-white px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Education & EdTech</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
          Empowering educators and students with cutting-edge digital learning environments and management systems.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          <div className="p-8 bg-[#111111] rounded-2xl border border-[#222222]">
            <h3 className="text-2xl font-bold mb-4 text-white">E-learning Platforms</h3>
            <p className="text-gray-400">Scalable online learning environments with video integration and progress tracking.</p>
          </div>
          <div className="p-8 bg-[#111111] rounded-2xl border border-[#222222]">
            <h3 className="text-2xl font-bold mb-4 text-white">School/College Portals</h3>
            <p className="text-gray-400">Comprehensive management systems for administrative and academic excellence.</p>
          </div>
          <div className="p-8 bg-[#111111] rounded-2xl border border-[#222222]">
            <h3 className="text-2xl font-bold mb-4 text-white">Certification Systems</h3>
            <p className="text-gray-400">Automated certification and assessment tools for corporate training and schools.</p>
          </div>
        </div>
      </div>
      <FooterSection />
    </main>
  );
}
