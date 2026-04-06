import React from "react";
import { Card, CardContent } from "../ui/card";
import MatchstickBoxHeading from "./MatchstickHeading";
import DecorativeLines from "../common/DecorativeLines";
import ParallaxCard from "../ui/ParallaxCard";
import Image from "next/image";

const servicesData = [
  {
    title: "Business Solution Pack",
    points: [
      "Understand business objectives and digital positioning.",
      "Design user-focused interfaces aligned with brand identity.",
      "Develop responsive, high-performance website architecture.",
      "Deploy on AWS or Vercel with scalable infrastructure.",
      "Integrate lead forms, WhatsApp workflows, and SEO foundation.",
    ],
  },
  {
    title: "Education Solution Pack",
    points: [
      "Understand course structure, audience flow, and learning objectives.",
      "Design intuitive LMS interfaces for students and administrators.",
      "Develop a scalable learning management system.",
      "Automate certificate generation and email workflows.",
      "Build admin dashboards for performance tracking and control.",
    ],
  },
  {
    title: "HR Automation Pack",
    points: [
      "Understand hiring workflows and operational structure.",
      "Design streamlined HRMS interfaces for internal teams.",
      "Develop centralized HR management systems.",
      "Automate interview scheduling and candidate communication.",
      "Generate payslips, letters, and workflow-based email automation.",
    ],
  },
  {
    title: "Growth & Presence",
    points: [
      "Understand brand positioning and market visibility goals.",
      "Optimize social profiles for structured digital presence.",
      "Plan and execute performance-driven campaigns.",
      "Implement reporting systems for measurable insights.",
      "Deliver structured performance tracking and growth clarity.",
    ],
  },
];

export const ServicesSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-black overflow-hidden py-14 md:py-24 min-h-screen">
      {/* Mobile View */}

      <MobileView />


      {/*   Desktop view */}
      <div className="hidden lg:block relative">
        <div className="absolute z-30 left-0 flex h-1/2 gap-[4px] items-start">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-[10px] h-[100%] blur-[0.5px]"
              style={{
                // Silver-White Glow Gradient
                background: 'linear-gradient(to right, rgba(255,255,255,0.2), #ffffff, rgba(255,255,255,0.2))',

                // Direction change: 'to bottom' (Upar solid, neeche transparent)
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',

                boxShadow: '0 0 12px rgba(255,255,255,0.2)',
              }}
            />
          ))}
        </div>

        <div className="absolute z-30 right-0 bottom-0 flex h-1/2  gap-[4px] items-end ">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-[10px] h-[100%] blur-[0.5px]"
              style={{
                // Gradient ko vibrant banaya hai (White/Silver glow)
                background: 'linear-gradient(to right, rgba(255,255,255,0.1), #ffffff, rgba(255,255,255,0.1))',
                // Mask ko thoda adjust kiya taaki visibility bani rahe
                WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 90%)',
                maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 90%)',
                // Glow effect ke liye box-shadow (Optional)
                boxShadow: '0 0 15px rgba(255,255,255,0.3)',
              }}
            />
          ))}
        </div>

        {/* Background Glows */}
        <div className="absolute top-[10%] right-[5%] w-[300px] h-[300px] rounded-full blur-[220px] bg-[radial-gradient(circle_at_95%_-3%,rgba(130,183,220,0.8)_0%,transparent_70%)] hidden lg:block" />
        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full blur-[225px] bg-[radial-gradient(circle_at_95%_-3%,rgba(130,183,220,0.8)_0%,transparent_70%)] hidden lg:block" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          {/* Header */}
          <header className="flex flex-col items-center mb-14 md:mb-20 relative text-center">
            <h1 className="mt-10 font-extrabold text-[#82b7dc]  mb-4 tracking-widest leading-tight uppercase  [font-family:'Montserrat',Helvetica] drop-shadow-[0_2px_12px_rgba(130,183,220,0.4)]">
              <DecorativeLines className="text-[#82B7DC] text-[34px]">SERVICES</DecorativeLines>
            </h1>
            <h2 className="text-[24px] md:text-[28px] text-white font-bold mb-6 tracking-wide underline decoration-dotted decoration-white/40 underline-offset-[10px] [font-family:'Montserrat',Helvetica]">
              Pre-defined Systems Engineered To <br /> Solve Specific Business Challenges.
            </h2>
          </header>

          {/* Core Pillars */}
          <div className="flex flex-col items-center">
            <h2 className="font-extrabold text-[#82b7dc] text-[34px] text-center tracking-wider leading-normal mb-4 [font-family:'Montserrat',Helvetica] uppercase">
              Get Your <br /> Proposal !
            </h2>

            {/* Decorative corners */}
            <img
              className="hidden lg:block absolute w-[22%] xl:w-[25%] top-[6%] left-[-20%] opacity-70 "
              alt="Decorative"
              src="/servicesm.webp"
            />
            <img
              className="hidden lg:block absolute w-[22%] xl:w-[25%] bottom-[6%] scale-x-[-1] right-[-20%] opacity-70"
              alt="Decorative"
              src="/servicesm.webp"
            />

            <div className="relative flex flex-col items-center w-full mx-auto py-10">
              {/* Center Vertical Line */}
              <div className="absolute h-full w-[5px] bg-gradient-to-b from-transparent via-gray-500 to-transparent left-1/2 -translate-x-1/2 z-0" />

              {servicesData.map((service, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center w-full mb-12 md:mb-0 ${index % 2 === 1 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                  {/* 1. Service Card Side */}
                  <div className="w-full  md:w-[580px] px-4 md:px-4">
                    <ParallaxCard intensity={8}>
                      <Card className="group relative w-full min-h-[300px] rounded-[40px] border border-none   overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.02]">

                        {/* 1. Top Gradient Header Section */}
                        <div className="absolute top-0 left-0 right-0 h-[20%] bg-gradient-to-b from-[#2730e9] via-[#070095] to-transparent opacity-90" />

                        <CardContent className="relative z-10 p-8 md:p-10 h-full flex flex-col">
                          {/* Title */}
                          <h4 className="font-bold text-white text-[32px] mb-4 tracking-tight text-left drop-shadow-md">
                            {service.title}
                          </h4>

                          {/* Points List */}
                          <ul className="space-y-4 flex-grow">
                            {service.points.map((point, pointIndex) => (
                              <li
                                key={pointIndex}
                                className="flex items-start gap-3 text-white/90 text-[13px] md:text-base leading-relaxed font-medium"
                              >
                                {/* Image ke hisaab se points white/light text mein hain */}
                                <span className="text-[#a9d1ee] rounded-full text-3xl">•</span> {point}
                              </li>
                            ))}
                          </ul>

                          {/* 2. Bottom "Know More" Button Area */}
                          <div className="mt-8 flex justify-end">
                            <button className="bg-[#bfc4cc] hover:bg-white text-[#000080] font-bold py-2 px-8 rounded-full text-sm md:text-base transition-all shadow-lg active:scale-95">
                              Know More
                            </button>
                          </div>
                        </CardContent>

                        {/* Glass effect overlay for the whole card */}
                        <div className="absolute inset-0 rounded-[40px] ring-1 ring-inset ring-white/10 pointer-events-none" />
                      </Card>
                    </ParallaxCard>
                  </div>

                  {/* 2. Center Node (Timeline Point) */}
                  <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center z-20">
                    <div className="w-10 h-10 bg-[#1a1a1a] border-4 border-[#333] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                      <div className="w-5 h-5 rounded-full bg-[#82B7DC] shadow-[0_0_10px_#60a5fa] animate-pulse" />
                    </div>
                  </div>

                  {/* 3. Empty Space for Zig-Zag */}
                  <div className="hidden md:block md:w-[580px]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};





function MobileView() {
  return (
    <div className="lg:hidden relative min-h-screen px-5 py-10 bg-black overflow-hidden">

      {/* ================= BACKGROUND GLOW ================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-[0%] left-[10%] w-[300px] h-[300px] animate-blob">
          {/* Adjusted positions to stay within mobile viewport bounds */}
          <div className="absolute top-0 left-0 w-[250px] h-[250px] rounded-full bg-[#1059cf] opacity-50 blur-3xl" />
          <div className="absolute top-[50px] left-[100px] w-[220px] h-[220px] rounded-full bg-[#65a7fc] opacity-30 blur-3xl" />
          <div className="absolute top-[-20px] left-[50px] w-[200px] h-[200px] bg-[#1f5cb5] rounded-full opacity-40 blur-3xl" />
          <div className="absolute top-[80px] left-[-30px] w-[240px] h-[240px] rounded-full bg-[#2fc9d1] opacity-30 blur-3xl" />
        </div>

        {/* Blur Overlay */}
        <div className="absolute inset-0 backdrop-blur-[100px] bg-black/20" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10">

        {/* Header */}
        <header className="flex flex-col items-center text-center mb-12">
          <h1 className="text-[#82b7dc] text-xl font-extrabold tracking-widest uppercase mb-3">
            SERVICES
          </h1>
          <h2 className="text-white text-[17px] font-bold leading-snug">
            Pre-defined Systems Engineered To <br />
            Solve Business Challenges.
          </h2>
        </header>

        <div className="text-center my-4">
          <h2 className="text-[#82b7dc] text-2xl font-black uppercase tracking-tighter italic">
            Get Your <br /> Proposal!
          </h2>
        </div>
        {/* ================= TIMELINE ================= */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-blue-500/60 via-gray-700 to-transparent" />

          {servicesData.map((service, index) => (
            <div key={index} className="relative pl-12 mb-10 last:mb-0">

              {/* Dot Indicator */}
              <div className="absolute left-0 top-5 translate-x-[2px]">
                <div className="w-7 h-7 bg-[#111] border border-gray-600 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                </div>
              </div>

              {/* Card */}
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl overflow-hidden">
                {/* 1. Top Gradient Header Section */}
                <div className="absolute top-0 left-0 right-0 h-[16%] bg-gradient-to-b from-[#4c51bf] via-[#3229b2] to-transparent opacity-90" />

                <div className="p-5">
                  <h4 className="absolute top-4 left-4 right-0 text-white font-bold text-lg mb-3">
                    {service.title}
                  </h4>

                  <ul className="space-y-3 mt-8">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-white/70 text-sm">
                        <span className="text-[#a9d1ee] font-bold">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex justify-end">
                    <button className="bg-white text-blue-900 font-bold py-2 px-6 rounded-full text-[10px] uppercase tracking-wider active:scale-95 transition-transform">
                      Know More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= STYLES ================= */}
      <style jsx global>{`
        @keyframes blobMove {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, -30px) scale(1.08); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        .animate-blob {
          animation: blobMove 8s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
