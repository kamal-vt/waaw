import type { Metadata } from "next";
import { Navbar } from "../../src/components/Navbar";
import { FooterSection } from "../../src/components/sections/FooterSection";
import { ServicesSection } from "../../src/components/sections/ServicesSection";

export const metadata: Metadata = {
  title: "Software Development & Automation Services | Waaw Technologies",
  description: "Explore our range of digital services: Web & App Development, UI/UX Design, SEO, Digital Marketing, and custom business automation (LMS, HRMS, CRM).",
  keywords: "lms development company hyderabad, hrms development india, custom software development, web development hyderabad, crm integration, business automation solutions", 
  openGraph: {
    title: "Software Development & Automation Services | Waaw Technologies",
    description: "Explore our range of digital services: Web & App Development, UI/UX Design, SEO, Digital Marketing, and custom business automation (LMS, HRMS, CRM).",
    url: "https://waaw.world/services",
    siteName: "Waaw Technologies",
    images: [{ url: "/logo.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development & Automation Services | Waaw Technologies",
    description: "Explore our range of digital services: Web & App Development, UI/UX Design, SEO, Digital Marketing, and custom business automation.",
    images: ["/logo.png"],
  },
};

export default function Services() {

  return (
    <main className="relative">
      <Navbar />
      {/* <div className="min-h-screen bg-black text-[#bbbbbb] flex items-center justify-center">
        <h1 className="text-4xl font-bold">Services</h1>
      </div> */}
         <ServicesSection />
      <FooterSection />
    </main>
  );
}
