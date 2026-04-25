import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";

export const metadata: Metadata = {
  alternates: { canonical: "/industries/ecommerce" },
  title: "E-commerce Website Development Hyderabad | Waaw Technologies",
  description: "Boost your sales with our custom e-commerce solutions. We specialize in Shopify, WooCommerce, and custom SKU-based platforms.",
  keywords: "ecommerce website development hyderabad, shopify development, woocommerce development, custom ecommerce solutions, d2c brand websites",
};

export default function Ecommerce() {
  return (
    <main className="relative">
      <Navbar />
      <div className="pt-32 pb-20 bg-black text-white px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">E-commerce Solutions</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
          Building high-conversion online stores and scalable retail platforms for modern brands.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          <div className="p-8 bg-[#111111] rounded-2xl border border-[#222222]">
            <h3 className="text-2xl font-bold mb-4 text-white">Custom Stores</h3>
            <p className="text-gray-400">Bespoke e-commerce platforms tailored for unique business models and SKU requirements.</p>
          </div>
          <div className="p-8 bg-[#111111] rounded-2xl border border-[#222222]">
            <h3 className="text-2xl font-bold mb-4 text-white">Marketplace Dev</h3>
            <p className="text-gray-400">Multi-vendor marketplace solutions with advanced vendor management and logistics.</p>
          </div>
          <div className="p-8 bg-[#111111] rounded-2xl border border-[#222222]">
            <h3 className="text-2xl font-bold mb-4 text-white">D2C Platforms</h3>
            <p className="text-gray-400">Optimized storefronts for direct-to-consumer brands focusing on speed and conversion.</p>
          </div>
        </div>
      </div>
      <FooterSection />
    </main>
  );
}
