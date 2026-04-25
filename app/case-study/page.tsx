import type { Metadata } from "next";
import { CaseStudyFullList } from "@/components/sections/CaseStudyFullList";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";

export const metadata: Metadata = {
  alternates: { canonical: "/case-study" },
  title: "Case Studies | Success Stories | Waaw Technologies",
  description: "Success stories and real-world examples of how Waaw Technologies has transformed businesses through innovative digital solutions and automation.",
  keywords: "case studies, success stories, digital transformation examples, software development case studies, web solutions case studies, business automation case studies, technology services success stories",
  openGraph: {
    title: "Case Studies | Success Stories | Waaw Technologies",
    description: "Success stories and real-world examples of how Waaw Technologies has transformed businesses through innovative digital solutions and automation.",
    url: "https://waaw.world/case-study",
    siteName: "Waaw Technologies",
    images: [{ url: "/logo.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Success Stories | Waaw Technologies",
    description: "Success stories and real-world examples of how Waaw Technologies has transformed businesses through innovative digital solutions and automation.",
    images: ["/logo.png"],
  },
};

export default function CaseStudyPage() {
  return (
    <main className="relative bg-black">
      <Navbar />
      <CaseStudyFullList />
      <FooterSection />
    </main>
  );
}
