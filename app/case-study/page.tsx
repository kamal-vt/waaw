import type { Metadata } from "next";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { Navbar } from "../../src/components/Navbar";
import { FooterSection } from "../../src/components/sections/FooterSection";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Success stories and real-world examples of how Waaw has transformed businesses through innovative digital solutions.",
};

export default function CaseStudyPage(){

  return (
    <main className="relative">
      <Navbar />
         <CaseStudy />
      <FooterSection />
    </main>
  );
}
