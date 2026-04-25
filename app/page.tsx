import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Web Development Agency in Hyderabad | Waaw Technologies",
  description: "Leading web development company in Hyderabad. We build high-performing websites, mobile apps, and custom software solutions for startups and enterprises.",
  keywords: "web development agency hyderabad, website development company hyderabad, digital marketing agency hyderabad, software development hyderabad",
  openGraph: {
    title: "Web Development Agency in Hyderabad | Waaw Technologies",
    description: "Leading web development company in Hyderabad. We build high-performing websites, mobile apps, and custom software solutions for startups and enterprises.",
    url: "https://waaw.world",
    siteName: "Waaw Technologies",
    images: [{ url: "/logo.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Agency in Hyderabad | Waaw Technologies",
    description: "Leading web development company in Hyderabad. We build high-performing websites, mobile apps, and custom software solutions for startups and enterprises.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/",
  },
};

import { Navbar } from "../src/components/Navbar";
import Hero from "../src/components/home/Hero";

// Dynamic imports for below-the-fold components
const OurClient = dynamic(() => import("@/components/sections/OurClient"), { ssr: true });
const AudienceGrid = dynamic(() => import("../src/components/home/AudienceGrid").then(mod => mod.AudienceGrid), { ssr: true });
const AboutUsSection = dynamic(() => import("../src/components/sections/AboutUsSection"), { ssr: true });
const ServicesSection = dynamic(() => import("../src/components/sections/ServicesSection").then(mod => mod.ServicesSection), { ssr: true });
const PricingSection = dynamic(() => import("../src/components/sections/PricingSection"), { ssr: true });
const CaseStudy = dynamic(() => import("../src/components/sections/CaseStudy").then(mod => mod.CaseStudy), { ssr: true });
const BlogsSection = dynamic(() => import("../src/components/sections/BlogsSection"), { ssr: true });
const ContentWrapperSection = dynamic(() => import("../src/components/sections/ContentWrapperSection"), { ssr: true });
const ListenTowhat = dynamic(() => import("../src/components/sections/ListenTowhat").then(mod => mod.ListenTowhat), { ssr: true });
const MainContentSection = dynamic(() => import("../src/components/sections/MainContentSection"), { ssr: true });
const FooterSection = dynamic(() => import("../src/components/sections/FooterSection"), { ssr: true });

export default function Page() {
  return (
    <main id="home" className="relative">
      <Navbar />
      <Hero />
      <OurClient/>
      <AudienceGrid />
      <section id="about">
        <AboutUsSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="pricing">
        <PricingSection />
      </section>
      {/* case study */}
      <section id="case-study">
        <CaseStudy />
      </section>
      <section className="mt-0" id="blogs">
        <BlogsSection />
      </section>
      <ContentWrapperSection />
      <ListenTowhat/>
      <MainContentSection />
      <FooterSection />
    </main>
  );
}


