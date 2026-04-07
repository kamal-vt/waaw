import type { Metadata } from "next";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { Navbar } from "../../src/components/Navbar";
import { FooterSection } from "../../src/components/sections/FooterSection";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Success stories and real-world examples of how Waaw has transformed businesses through innovative digital solutions.",
  keywords: "case studies, success stories, digital transformation examples, software development case studies, web solutions case studies, business automation case studies, technology services success stories",
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
