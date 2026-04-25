import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";
import blogsData from "@/lib/content-data/blogs.json";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, User, Tag } from "lucide-react";
import Link from "next/link";

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const blog = blogsData.find((b) => b.slug === params.slug);
  if (!blog) return { title: "Blog Not Found" };

  const heroImage = blog.coverImage || blog.image;

  return {
    title: `${blog.title} | Blog | Waaw Technologies`,
    description: blog.description,
    openGraph: {
      title: `${blog.title} | Blog | Waaw Technologies`,
      description: blog.description,
      url: `https://waaw.world/blogs/${blog.slug}`,
      siteName: "Waaw Technologies",
      images: [{ url: heroImage, width: 1200, height: 630 }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${blog.title} | Blog | Waaw Technologies`,
      description: blog.description,
      images: [heroImage],
    },
  };
}

export default function BlogDetailPage({ params }: PageProps) {
  const blog = blogsData.find((b) => b.slug === params.slug);

  if (!blog) {
    notFound();
  }

  const heroImage = blog.coverImage || blog.image;

  return (
    <main className="relative bg-black text-white min-h-screen">
      <Navbar />
      
      {/* Blog Hero */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="absolute inset-0 z-0">
          <Image src={heroImage} alt={blog.title} fill className="object-cover opacity-20 blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-gray-500 hover:text-white mb-12 transition-colors">
            <ArrowLeft size={18} /> Back to Blogs
          </Link>
          
          <div className="flex justify-center mb-8">
            <span className="px-5 py-2 bg-[#82b7dc] rounded-full text-xs font-bold uppercase tracking-widest text-black">
              {blog.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold mb-10 leading-tight">{blog.title}</h1>
          
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 font-medium">
            <div className="flex items-center gap-2">
              <User size={18} className="text-[#82b7dc]" /> {blog.author}
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-[#82b7dc]" /> {blog.date}
            </div>
            <div className="flex items-center gap-2">
              <Tag size={18} className="text-[#82b7dc]" /> {blog.tags.length} Tags
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Main Image */}
          <div className="relative aspect-video rounded-[40px] overflow-hidden mb-16 border border-white/10 shadow-2xl">
            <Image src={heroImage} alt={blog.title} fill className="object-cover" />
          </div>

          {/* Article Text */}
          <article className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-400 prose-strong:text-white prose-li:text-gray-400">
            {blog.content.split('\n').map((para, i) => {
              if (para.startsWith('###')) {
                return <h3 key={i} className="text-2xl font-bold mt-12 mb-6 text-white">{para.replace('###', '').trim()}</h3>;
              }
              return <p key={i} className="mb-6 leading-relaxed text-gray-400">{para}</p>;
            })}
          </article>

          {/* Tags */}
          <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap gap-4">
            {blog.tags.map((tag) => (
              <span key={tag} className="px-6 py-2 bg-white/5 rounded-full text-sm font-medium hover:bg-white/10 transition-colors cursor-default">
                #{tag}
              </span>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-20 p-12 bg-gradient-to-br from-[#82b7dc]/10 to-transparent rounded-[50px] border border-[#82b7dc]/20 text-center relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#82b7dc] rounded-full blur-[80px] opacity-10" />
            <h3 className="text-3xl font-bold mb-6">Need expert tech advice?</h3>
            <p className="text-gray-400 mb-10 max-w-md mx-auto">Our team of experts can help you navigate the complex digital landscape and build custom solutions for your business.</p>
            <Link href="/contact" className="inline-block px-10 py-4 bg-[#82b7dc] text-black font-bold rounded-2xl hover:bg-white transition-all shadow-xl">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
