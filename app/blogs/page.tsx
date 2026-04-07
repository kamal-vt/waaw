import type { Metadata } from "next";
import { Navbar } from "../../src/components/Navbar";
import FooterSection from "../../src/components/sections/FooterSection";
import BlogsSection from "../../src/components/sections/BlogsSection";

export const metadata: Metadata = {
  title: "Blogs & Insights",
  description: "Explore the latest in design, development, and digital strategy. Insights that inspire innovation and help businesses stay ahead.",
  keywords: "technology blogs, software development insights, digital transformation articles, web development trends, business automation tips, custom software solutions blog, technology services insights, industry news and updates",
};

export default function Blogs() {

  return (
    <main className="relative">
      <Navbar />
      {/* <div className="min-h-screen bg-black text-[#bbbbbb] flex items-center justify-center">
        <h1 className="text-4xl font-bold">Blogs</h1>
      </div> */}
      <div className=" bg-black text-[#bbbbbb] ">
      <BlogsSection topOffset />
      </div>
      <FooterSection />
    </main>
  );
}
