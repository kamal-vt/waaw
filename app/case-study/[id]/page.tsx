import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FooterSection } from "@/components/sections/FooterSection";
import caseStudiesData from "@/lib/content-data/case-study.json";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface PageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const study = caseStudiesData.find((s) => s.id === params.id);
  if (!study) return { title: "Case Study Not Found" };

  return {
    title: `${study.title} | Case Study | Waaw Technologies`,
    description: study.description,
    openGraph: {
      title: `${study.title} | Case Study | Waaw Technologies`,
      description: study.description,
      url: `https://waaw.world/case-study/${study.id}`,
      siteName: "Waaw Technologies",
      images: [{ url: study.image, width: 1200, height: 630 }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} | Case Study | Waaw Technologies`,
      description: study.description,
      images: [study.image],
    },
    alternates: {
      canonical: `/case-study/${study.id}`,
    },
  };
}

export default function CaseStudyDetailPage({ params }: PageProps) {
  const study = caseStudiesData.find((s) => s.id === params.id);

  if (!study) {
    notFound();
  }

  return (
    <main className="relative bg-black text-white min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0a0a] z-0" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#82b7dc]/10 rounded-full blur-[120px] -mr-64 -mt-64" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <Link href="/case-study" className="inline-flex items-center gap-2 text-gray-500 hover:text-white mb-12 transition-colors">
            <ArrowLeft size={18} /> Back to Case Studies
          </Link>
          
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1">
              <div className="text-[#82b7dc] font-bold text-sm uppercase tracking-widest mb-6">{study.category}</div>
              <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">{study.title}</h1>
              <div className="flex flex-wrap gap-3 mb-10">
                {study.technologies.map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/3 bg-[#111] p-8 rounded-3xl border border-white/5 shadow-2xl">
              <div className="mb-6">
                <div className="text-gray-500 text-xs uppercase tracking-widest mb-1">Client</div>
                <div className="text-xl font-bold">{study.client}</div>
              </div>
              <div className="mb-6">
                <div className="text-gray-500 text-xs uppercase tracking-widest mb-1">Sector</div>
                <div className="text-xl font-bold">{study.category.split('/')[0].trim()}</div>
              </div>
              <div>
                <div className="text-gray-500 text-xs uppercase tracking-widest mb-1">Status</div>
                <div className="text-green-400 font-bold flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" /> Delivered
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          
          {/* Left Column: Challenge & Solution */}
          <div className="md:col-span-2 space-y-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-4">
                <span className="w-8 h-px bg-[#82b7dc]" /> The Challenge
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {study.challenge}
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-4">
                <span className="w-8 h-px bg-[#82b7dc]" /> Our Solution
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {study.solution}
              </p>
            </div>

            <div className="relative rounded-3xl overflow-hidden aspect-video border border-white/10 shadow-2xl">
              <Image src={study.image} alt="Process Visualization" fill className="object-cover" />
            </div>
          </div>

          {/* Right Column: Results */}
          <div className="space-y-10">
            <div className="p-10 bg-[linear-gradient(145deg,rgba(130,183,220,0.1)_0%,rgba(52,102,170,0.05)_100%)] rounded-[40px] border border-[#82b7dc]/20 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                 <CheckCircle2 size={80} />
               </div>
               <h3 className="text-2xl font-bold mb-8">Key Outcomes</h3>
               <ul className="space-y-6">
                 {study.results.map((result, i) => (
                   <li key={i} className="flex items-start gap-4">
                     <CheckCircle2 className="text-[#82b7dc] shrink-0 mt-1" size={20} />
                     <span className="text-gray-300 font-medium leading-snug">{result}</span>
                   </li>
                 ))}
               </ul>
            </div>

            <div className="p-10 bg-white/5 rounded-[40px] border border-white/5 text-center">
              <h4 className="text-xl font-bold mb-4">Want similar results?</h4>
              <p className="text-gray-500 text-sm mb-8">Let's build a solution engine tailored for your business needs.</p>
              <Link href="/contact" className="inline-block w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-[#82b7dc] hover:text-white transition-all">
                Book a Strategy Call
              </Link>
            </div>
          </div>

        </div>
      </section>

      <FooterSection />
    </main>
  );
}
