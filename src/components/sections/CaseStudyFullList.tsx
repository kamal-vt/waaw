"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import DecorativeLines from "../common/DecorativeLines";
import caseStudiesData from "@/lib/content-data/case-study.json";

export const CaseStudyFullList = (): JSX.Element => {
  return (
    <section className="relative w-full bg-black overflow-hidden py-32 min-h-screen text-white font-sans flex flex-col items-center">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-[#82b7dc]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] bg-[#3466aa]/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative mx-auto px-4 md:px-8 lg:px-12 z-10 w-full flex flex-col items-center">
        <header className="flex flex-col items-center mb-20 text-center max-w-4xl">
          <DecorativeLines className="text-[#82B7DC] text-[34px] font-bold mb-6">ALL SUCCESS STORIES</DecorativeLines>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Real Results for <br /> Real Businesses
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover how we've helped companies across various industries automate their operations and scale their digital presence.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl mx-auto">
          {caseStudiesData.map((study) => (
            <Link 
              key={study.id} 
              href={`/case-study/${study.id}`}
              className="group relative bg-[#111] rounded-[40px] overflow-hidden border border-white/5 hover:border-[#82b7dc]/30 transition-all duration-500 hover:-translate-y-2 flex flex-col shadow-2xl"
            >
              <div className="relative h-[300px] w-full overflow-hidden">
                <Image 
                  src={study.image} 
                  alt={study.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                <div className="absolute top-6 left-6 flex gap-2">
                  {study.tags.map((tag) => (
                    <span key={tag} className="px-4 py-1.5 bg-black/60 backdrop-blur-md rounded-full text-xs font-semibold border border-white/10 uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-10 flex flex-col flex-1">
                <div className="text-[#82b7dc] font-bold text-sm mb-4 uppercase tracking-[0.2em]">{study.category}</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 group-hover:text-[#82b7dc] transition-colors leading-tight">{study.title}</h3>
                <p className="text-gray-400 text-base mb-8 line-clamp-3 leading-relaxed">{study.description}</p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex gap-3">
                    {study.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-[10px] text-gray-500 border border-gray-800 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white group-hover:text-black transition-colors">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
