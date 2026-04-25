import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries We Serve | Waaw Technologies",
  description: "Discover how Waaw Technologies provides specialized digital solutions for Healthcare, Education, E-commerce, Finance, Logistics, and Startups.",
  keywords: "industries, healthcare solutions, edtech solutions, ecommerce development, fintech, logistics software",
  openGraph: {
    title: "Industries We Serve | Waaw Technologies",
    description: "Discover how Waaw Technologies provides specialized digital solutions for Healthcare, Education, E-commerce, Finance, Logistics, and Startups.",
    url: "https://waaw.world/industries",
    siteName: "Waaw Technologies",
    images: [{ url: "/logo.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | Waaw Technologies",
    description: "Discover how Waaw Technologies provides specialized digital solutions for Healthcare, Education, E-commerce, Finance, Logistics, and Startups.",
    images: ["/logo.png"],
  },
};

const industries = [
  { name: "Healthcare", href: "/industries/healthcare", desc: "Hospital websites, clinic management, and medical apps." },
  { name: "Education", href: "/industries/education", desc: "LMS, EdTech platforms, and school management systems." },
  { name: "E-commerce", href: "/industries/ecommerce", desc: "Custom online stores, Shopify, and B2B platforms." },
  { name: "Finance", href: "/industries/finance", desc: "Fintech apps, investment portals, and secure banking UI." },
  { name: "Logistics", href: "/industries/logistics", desc: "Fleet management, delivery tracking, and SCM systems." },
  { name: "Startups", href: "/industries/startups", desc: "MVP development, SaaS scaling, and tech partnerships." },
];

export default function IndustriesPage() {
  return (
    <main className="relative">
      <Navbar />
      <div className="pt-32 pb-20 bg-black text-white px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Industries We Serve</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Tailored digital engines designed for specific business challenges across diverse sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {industries.map((industry) => (
            <Link 
              key={industry.name} 
              href={industry.href}
              className="group p-8 bg-[#111111] rounded-2xl border border-[#222222] hover:border-[#82b7dc]/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#82b7dc] transition-colors">{industry.name}</h3>
              <p className="text-gray-400 mb-6">{industry.desc}</p>
              <div className="flex items-center text-[#82b7dc] font-semibold gap-2">
                Explore Solutions <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FooterSection />
    </main>
  );
}
