"use client";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { Navbar } from "../../src/components/Navbar";
import { FooterSection } from "../../src/components/sections/FooterSection";


export default function Pricing(){
  return (
    <main className="relative">
      <Navbar />
         <CaseStudy />
      <FooterSection />
    </main>
  );
}
