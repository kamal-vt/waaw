import type { Metadata } from "next";
import { Navbar } from "../../src/components/Navbar";
import FooterSection from "../../src/components/sections/FooterSection";
import MissionValuesSection  from "../../src/components/sections/MissionValuesSection";
import AboutUsSection from "../../src/components/sections/AboutUsSection";
import IndustriesSection from "../../src/components/sections/IndustriesSection";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Waaw, our mission, and our expertise in delivering high-growth software solutions and digital platforms.",
};

export default function About() {

  return (
    <main className="relative">
      <Navbar />
      <AboutUsSection />
     <MissionValuesSection />
      <IndustriesSection />
      <FooterSection />
    </main>
  );
}
