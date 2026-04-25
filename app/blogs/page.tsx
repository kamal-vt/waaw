import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";
import { BlogsSection } from "@/components/sections/BlogsSection";

export const metadata: Metadata = {
  title: "Blogs & Insights | Technology & Design | Waaw Technologies",
  description: "Explore the latest in design, development, and digital strategy. Insights that inspire innovation and help businesses stay ahead in the digital world.",
  keywords: "technology blogs, software development insights, digital transformation articles, web development trends, business automation tips, custom software solutions blog, technology services insights, industry news and updates",
  openGraph: {
    title: "Blogs & Insights | Technology & Design | Waaw Technologies",
    description: "Explore the latest in design, development, and digital strategy. Insights that inspire innovation and help businesses stay ahead in the digital world.",
    url: "https://waaw.world/blogs",
    siteName: "Waaw Technologies",
    images: [{ url: "/logo.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs & Insights | Technology & Design | Waaw Technologies",
    description: "Explore the latest in design, development, and digital strategy. Insights that inspire innovation and help businesses stay ahead in the digital world.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/blogs",
  },
};

export default function BlogsPage() {
  return (
    <main className="relative bg-black">
      <Navbar />
      <div className="bg-black text-[#bbbbbb]">
        <BlogsSection topOffset />
      </div>
      <FooterSection />
    </main>
  );
}
