import dynamic from "next/dynamic";
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
const ListenTowhat = dynamic(() => import("../src/components/sections/ListenTowhat"), { ssr: true });
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


