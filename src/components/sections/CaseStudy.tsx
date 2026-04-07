"use client";
import React from "react";
import DecorativeLines from "../common/DecorativeLines";
import Image from "next/image";

const caseStudies = [
  {
    image: "/caseStudy/01.png",
    badges: ["Growth", "2024"],
    title: "From static website to Growth Engine",
    showViewText: true,
  },
  {
    image: "/caseStudy/02.png",
    badges: [],
    title: "Building scalable Learning Platform",
    showViewText: false,
  },
  {
    image: "/caseStudy/03.png",
    badges: [],
    title: "Streamlining Hiring & HR Operations",
    showViewText: false,
  },
];

export const CaseStudy = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#050B14] overflow-hidden py-24 min-h-screen text-white font-sans flex flex-col items-center">
                {/* --- BACKGROUND BLOBS (FIXED EFFECT) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[4%] left-[30%] -translate-x-1/2 w-[600px] h-[600px] animate-blob">
          <div className="absolute top-[33px] left-0 w-[307px] h-[263px] rounded-full bg-[#1059cf] opacity-60 blur-3xl" />
          <div className="absolute top-[190px] left-[307px] w-[281px] h-[264px] rounded-full bg-[#65a7fc] opacity-40 blur-3xl" />
          <div className="absolute top-0 left-[212px] w-[283px] h-[258px] bg-[#1f5cb5] rounded-full opacity-50 blur-3xl" />
          <div className="absolute top-[235px] left-2 w-[280px] h-[260px] rounded-full bg-[#2fc9d1] opacity-40 blur-3xl" />
          <div className="absolute top-[296px] left-[212px] w-[247px] h-[228px] rounded-full bg-[#1858c7] opacity-60 blur-3xl" />
          <div className="absolute top-[169px] left-[154px] w-[267px] h-[253px] rounded-full bg-[#26a2df] opacity-40 blur-3xl" />
        </div>

        {/* Blur Overlay */}
        <div className="absolute inset-0 backdrop-blur-[100px] bg-black/10" />

        <style jsx>{`
          @keyframes blobMove {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(40px, -60px) scale(1.1); }
            66% { transform: translate(-30px, 30px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob {
            animation: blobMove 5s infinite ease-in-out;
          }
        `}</style>
      </div>

      <div className="relative  mx-auto px-4 md:px-8 lg:px-12 z-10 w-full flex flex-col items-center">
        {/* Header */}
        <header className="flex flex-col items-center sm:mb-24 text-center max-w-4xl">
          {/* Label */}
          <div className="flex items-center justify-center gap-6 mb-2 sm:mb-8 mt-10">
            <DecorativeLines className="text-[#82B7DC] text-[34px] font-bold">CASE STUDIES</DecorativeLines>
          </div>
          
          <h2 className="text-[20px] md:text-[28px] font-bold sm:mb-8 tracking-wide underline decoration-dotted decoration-white/40 underline-offset-[4px] leading-tight [font-family:'Montserrat',Helvetica]">
            Building the Future of Digital Experiences
          </h2>
          
          <p className="text-[#a0a0a0] max-w-2xl mx-auto text-[15px] leading-relaxed font-medium mt-6 mb-12">
            Select the plan that aligns with your business objectives. Each package is designed
            to provide reliable, scalable, and high-quality digital solutions.
          </p>

          <button className="px-8 py-3 rounded-[30px] border border-white/30 text-[14px] text-white/90 font-medium hover:bg-white/10 hover:text-white transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)]">
            View Our Work
          </button>
        </header>

        {/* Selected Artifacts section */}
        <div className="mt-16 w-full flex flex-col items-center">
          <div className="flex justify-center mb-4 sm:mb-16">
            <h3 className="text-[20px] md:text-[34px] font-bold tracking-wide underline decoration-dotted decoration-white/40 underline-offset-[10px] [font-family:'Montserrat',Helvetica]">
              Selected Artifacts
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full max-w-6xl mx-auto">
            {caseStudies.map((study, idx) => (
              <CaseStudyCard key={idx} study={study} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CaseStudyCard = ({ study }: { study: any }) => {
  return (
    <div className="group relative rounded-[32px] overflow-hidden transition-all duration-300 hover:-translate-y-2 flex flex-col h-[500px] border border-white/10">
      <div className="relative h-full bg-[#050B14] overflow-hidden flex flex-col transition-all duration-300">
        
        {/* Top Image Section (Using complex gradient to mimic the abstract image) */}
        <div className="relative h-[100%] w-full bg-[#0A101C] overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-br from-indigo-900/40 via-blue-900/30 to-cyan-900/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(60,180,255,0.2)_0%,transparent_70%)] opacity-80 mix-blend-screen" />
          {/* Glowing orbs */}
          <Image src={study.image || '/default-case-study-image.jpg'} alt="Case Study Image" fill className="object-cover object-center" />
          <div className="absolute top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] bg-blue-500/40 rounded-full blur-[40px]" />
          <div className="absolute top-[40%] left-[60%] -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] bg-purple-500/30 rounded-full blur-[30px]" />
          <div className="absolute top-[25%] left-[30%] -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] bg-cyan-400/30 rounded-full blur-[25px]" />
        </div>

        {/* Content Panel Overlaid on Bottom */}
        <div className="absolute bottom-4 left-4 right-4 bg-[#202022] rounded-[24px] p-6 flex flex-col border border-white/5 z-20 shadow-xl">
          {study.badges && study.badges.length > 0 && (
            <div className="flex gap-2 mb-3">
              {study.badges.map((badge: string, i: number) => (
                <span key={i} className="px-5 py-1 rounded-full border border-white/20 text-[12px] text-white/90 font-medium">
                  {badge}
                </span>
              ))}
            </div>
          )}
          <h4 className={`text-[17px] md:text-[18px] leading-[1.4] font-semibold text-white/95 pr-2 ${study.badges?.length > 0 ? "h-[50px] mb-2" : "h-[70px] mt-2 mb-2"}`}>
            {study.title}
          </h4>
          
          <div className="flex items-center mt-2 h-8">
            {study.showViewText ? (
              <div className="flex items-center w-full justify-between">
                <span className="text-[14px] text-white/90 font-medium cursor-pointer">
                  View Case Study
                </span>
                <button className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#202022" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ) : (
              <button className="w-7 h-7 rounded-full bg-white flex items-center justify-center ml-auto">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#202022" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
