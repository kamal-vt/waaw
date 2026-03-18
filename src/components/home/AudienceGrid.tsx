"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import DecorativeLines from "../common/DecorativeLines";

const cardData = [
  {
    title: "Innovators, Startups & Entrepreneurs",
    description:
      "Waaw empowers new ventures to turn ideas into fully functional digital products helping founders build, test, and scale faster with modern web and app solutions.",
    hasGlass: true,
    position: "top-left",
  },
  {
    title: "Enterprises Seeking Efficiency",
    description:
      "Large organizations leverage Waaw's advanced technologies, integrations, and scalable architectures to improve productivity, data flow, and system performance.",
    hasGlass: false,
    position: "top-right",
  },
  {
    title: "Creators & Tech Collaborators",
    description:
      "Designers, developers, and agencies collaborate with Waaw to transform creative visions into robust, high-performing digital experiences backed by strong technical expertise.",
    hasGlass: false,
    position: "bottom-left",
  },
  {
    title: "Businesses Going Digital & Growing",
    description:
      "Small and medium enterprises benefit from Waaw's tools to automate operations, create online presence, and deliver seamless customer experiences across platforms.",
    hasGlass: true,
    position: "bottom-right",
  },
];

export const AudienceGrid = (): JSX.Element => {
  return (
    <section className="w-full min-h-[950px] lg:min-h-[600px] relative bg-gradient-to-b from-[#0a0f14] via-black to-[#0d1217] overflow-hidden py-12 lg:py-16">
      {/* Background Gradient Orbs */}
      <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-[#82b7dc]/10 rounded-full blur-[120px] hidden lg:block" />
      <div className="absolute bottom-[10%] right-[15%] w-[350px] h-[350px] bg-[#3466aa]/10 rounded-full blur-[100px] hidden lg:block" />

      {/* Title Section */}
      <div className="relative w-full max-w-7xl mx-auto px-4">
        <div className="relative mb-12 lg:mb-16 flex justify-center">
          <DecorativeLines>
            <h1 className="text-center [font-family:'Montserrat',Helvetica] font-extrabold text-[26px] md:text-[32px] lg:text-[38px] leading-[36px] md:leading-[50px] lg:leading-[60px] tracking-[0] px-4">
              <span className="text-[#bbbbbb] block mb-1">THE MINDS AND BUSINESSES</span>
              <span className="text-[#82b7dc]">BEHIND THE WAAW</span>
            </h1>
          </DecorativeLines>
        </div>

        {/* Desktop Layout - Asymmetric 2x2 Grid with Center Icon */}
        <div className="hidden lg:block relative bor">
          <div className="relative w-full max-w-[1100px] mx-auto h-[520px]">
            {/* Top Row */}
            <div className="absolute top-0 left-0 right-0 flex justify-center gap-10">
              {/* Card 1 - Top Left (Glass Effect) */}
              <Card className="w-[360px] h-[260px] rounded-[28px] overflow-hidden backdrop-blur-[10px] backdrop-brightness-[115%] shadow-[inset_0_2px_6px_rgba(255,255,255,0.3),inset_0_-2px_6px_rgba(0,0,0,0.2),0_10px_40px_rgba(130,183,220,0.2)] bg-[linear-gradient(145deg,rgba(255,255,255,0.12)_0%,rgba(130,183,220,0.08)_100%)] border border-white/25 hover:shadow-[inset_0_2px_8px_rgba(255,255,255,0.4),0_15px_50px_rgba(130,183,220,0.3)] transition-all duration-300">
                <CardContent className="relative w-full h-full p-0">
                  {/* Decorative Light Bars */}
                  <div className="absolute top-[-180px] left-[180px] w-[6px] h-[360px] rounded-[3px/180px] -rotate-90 bg-white/90 blur-sm" />
                  <div className="absolute -top-1 left-[-6px] w-[6px] h-[360px] bg-white/80 rounded-[3px/180px] blur-sm" />

                  {/* Glow Effect */}
                  <div className="absolute top-[70px] left-[10px] w-[400px] h-[100px] bg-[#82b7dc] rounded-[200px/50px] blur-[100px] opacity-35" />

                  <div className="relative z-10 pt-8 px-7">
                    <h3 className="text-[#bbbbbb] [font-family:'Montserrat',Helvetica] font-bold text-[24px] text-center mb-5 leading-[32px]">
                      {cardData[0].title}
                    </h3>
                    <p className="[font-family:'Montserrat',Helvetica] font-medium text-[#bbbbbb] text-center text-[13px] leading-[20px]">
                      {cardData[0].description}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Card 2 - Top Right (No Glass, Darker) */}
              <Card className="w-[360px] h-[260px] rounded-[28px] overflow-hidden transition-all duration-300 border-none shadow-none bg-transparent hover:shadow-[0_4px_25px_rgba(52,102,170,0.15)]">

                <CardContent className="relative w-full h-full p-0">
                  <div className="absolute top-[-180px] left-[180px] w-[6px] h-[360px] rounded-[3px/180px] -rotate-90 blur-[2px]" />

                  <div className="relative z-10 pt-8 px-7">
                    <h3 className="text-[#bbbbbb] [font-family:'Montserrat',Helvetica] font-bold text-[24px] text-center mb-5 leading-[32px]">
                      {cardData[1].title}
                    </h3>
                    <p className="[font-family:'Montserrat',Helvetica] font-medium text-[#bbbbbb] text-center text-[13px] leading-[20px]">
                      {cardData[1].description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Center Rotating Icon */}
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20">
              {/* Outer Rotating Ring */}
              {/* Rotating white threads around center */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, ease: "linear", repeat: Infinity }}
              >
                <svg width="260" height="260" viewBox="0 0 260 260" className="opacity-10">
                  {/* outer soft ring */}
                  {/* <circle cx="130" cy="130" r="118" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="20" /> */}
                  {/* bright partial arcs */}
                  {/* <path d="M130 12 A118 118 0 0 1 248 130" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="6" strokeLinecap="round" /> */}
                  {/* <path d="M12 130 A118 118 0 0 1 130 12" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="6" strokeLinecap="round" /> */}
                </svg>
              </motion.div>

              {/* Pulsing Glow */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] rounded-full bg-[#82b7dc]/25 blur-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 3.5, ease: "easeInOut", repeat: Infinity }}
              />

              {/* Blue core disc */}
              {/* Blue gradient core */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] rounded-full bg-[radial-gradient(circle_at_50%_30%,#9fd0ff_0%,#74add8_40%,#5a95c8_70%,#2b3a4a_100%)] shadow-[0_0_30px_rgba(130,183,220,0.6)]" />

              {/* Glassy white ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px]  opacity-15 rounded-full border-[2px] border-white/70 shadow-[0_0_20px_rgba(255,255,255,0.35)]" />
              {/* Center Icon Container */}
              <div className="relative w-[75px] h-[75px] rounded-full bg-gradient-to-br from-[#82b7dc] via-[#5a95c8] to-[#4a7bc8] shadow-[0_0_40px_rgba(130,183,220,0.8),inset_0_2px_10px_rgba(255,255,255,0.35)] flex items-center justify-center border-[3px] border-white/25">
                {/* Rotating Icon/Image */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 10, ease: "linear", repeat: Infinity }}
                  className="w-[38px] h-[38px]"
                >
                  <img
                    src="/audiencegridm.png"
                    alt="Audience Grid Icon"
                    className="w-full h-full object-cover rounded-full"
                  />
                </motion.div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-10">
              {/* Card 3 - Bottom Left (No Glass, Darker) */}
              <Card className="w-[360px] h-[260px] rounded-[28px] overflow-hidden transition-all duration-300 border-none shadow-none bg-transparent hover:shadow-[0_4px_25px_rgba(52,102,170,0.15)]">

                <CardContent className="relative w-full h-full p-0">
                  <div className="absolute top-[-180px] left-[180px] w-[6px] h-[360px] rounded-[3px/180px] -rotate-90  blur-[2px]" />

                  <div className="relative z-10 pt-8 px-7">
                    <h3 className="text-[#bbbbbb] [font-family:'Montserrat',Helvetica] font-bold text-[24px] text-center mb-5 leading-[32px]">
                      {cardData[2].title}
                    </h3>
                    <p className="[font-family:'Montserrat',Helvetica] font-medium text-[#bbbbbb] text-center text-[13px] leading-[20px]">
                      {cardData[2].description}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Card 4 - Bottom Right (Glass Effect) */}
              <Card className="w-[360px] h-[260px] rounded-[28px] overflow-hidden backdrop-blur-[10px] backdrop-brightness-[115%] shadow-[inset_0_2px_6px_rgba(255,255,255,0.3),inset_0_-2px_6px_rgba(0,0,0,0.2),0_10px_40px_rgba(130,183,220,0.2)] bg-[linear-gradient(145deg,rgba(255,255,255,0.12)_0%,rgba(130,183,220,0.08)_100%)] border border-white/25 hover:shadow-[inset_0_2px_8px_rgba(255,255,255,0.4),0_15px_50px_rgba(130,183,220,0.3)] transition-all duration-300">
                <CardContent className="relative w-full h-full p-0">
                  <div className="absolute top-[-180px] left-[180px] w-[6px] h-[360px] rounded-[3px/180px] -rotate-90 bg-white/90 blur-sm" />
                  <div className="absolute -top-1 left-[-6px] w-[6px] h-[360px] bg-white/80 rounded-[3px/180px] blur-sm" />

                  <div className="absolute top-[70px] left-[10px] w-[400px] h-[100px] bg-[#82b7dc] rounded-[200px/50px] blur-[100px] opacity-35" />

                  <div className="relative z-10 pt-8 px-7">
                    <h3 className="text-[#bbbbbb] [font-family:'Montserrat',Helvetica] font-bold text-[24px] text-center mb-5 leading-[32px]">
                      {cardData[3].title}
                    </h3>
                    <p className="[font-family:'Montserrat',Helvetica] font-medium text-[#bbbbbb] text-center text-[13px] leading-[20px]">
                      {cardData[3].description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout - Stacked Cards */}
        <div className="lg:hidden flex flex-col gap-6 px-4 max-w-[500px] mx-auto">
          {/* Center Icon for Mobile */}
          <div className="flex justify-center mb-4">
            <div className="relative w-[70px] h-[70px] rounded-full bg-gradient-to-br from-[#82b7dc] via-[#5a95c8] to-[#4a7bc8] shadow-[0_0_40px_rgba(130,183,220,0.8)] flex items-center justify-center border-[3px] border-white/25">
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 10, ease: "linear", repeat: Infinity }}
                className="w-[35px] h-[35px]"
              >
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="20" cy="20" r="18" fill="white" opacity="0.9" />
                  <path d="M20 8 L26 14 L20 20 L14 14 Z" fill="#4a7bc8" />
                  <path d="M20 20 L26 26 L20 32 L14 26 Z" fill="#82b7dc" />
                  <circle cx="20" cy="20" r="3" fill="white" />
                </svg>
              </motion.div>
            </div>
          </div>

          {cardData.map((card, index) => (
            <Card
              key={index}
              className={`w-full h-auto min-h-[240px] rounded-[24px] overflow-hidden ${card.hasGlass
                  ? "backdrop-blur-[10px] backdrop-brightness-[115%] shadow-[inset_0_2px_6px_rgba(255,255,255,0.3),0_10px_40px_rgba(130,183,220,0.2)] bg-[linear-gradient(145deg,rgba(255,255,255,0.12)_0%,rgba(130,183,220,0.08)_100%)] border border-white/25"
                  : "backdrop-blur-[3px] shadow-[0_6px_25px_rgba(0,0,0,0.5)] bg-[linear-gradient(320deg,rgba(18,25,35,0.95)_0%,rgba(28,38,55,0.85)_100%)] border border-white/8"
                }`}
            >
              <CardContent className="relative w-full h-full p-6">
                {card.hasGlass && (
                  <>
                    {/* <div className="absolute top-[-100px] left-[50%] w-[5px] h-[250px] -rotate-90 bg-white/70 blur-sm" /> */}
                    <div className="absolute top-[50px] left-0 w-[300px] h-[80px] bg-[#82b7dc] rounded-full blur-[80px] opacity-25" />
                  </>
                )}

                <h3 className="text-[#bbbbbb] [font-family:'Montserrat',Helvetica] font-bold text-[21px] md:text-[23px] text-center mb-4 leading-[30px]">
                  {card.title}
                </h3>
                <p className="[font-family:'Montserrat',Helvetica] font-medium text-[#bbbbbb] text-center text-[13px] leading-[20px]">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceGrid;