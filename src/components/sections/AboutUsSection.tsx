import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import DecorativeLines from "../common/DecorativeLines";
import { ArrowUpRight } from "lucide-react";

const statsMobile = [
  { value: "1.5x", description: "Launch Smarter Faster" },
  { value: "30%", description: "Years of Skill One Vision" },
  { value: "20+", description: "Uniquely Coded Foundations" },
];

const pillMobile = [
  "Digital Innovation",
  "Experience Design",
  "Strategic Development",
];

const glowOrbs = [
  {
    className:
      "absolute top-[677px] left-[870px] w-[34px] h-[34px] rounded-[17px] blur-[12.5px] [background:radial-gradient(50%_50%_at_95%_-3%,rgba(0,0,0,1)_0%,rgba(255,255,255,1)_100%)] md:top-[550px] md:left-[70%] animate-orb-1",
  },
  {
    className:
      "absolute top-[694px] left-[608px] w-[18px] h-[18px] rounded-[9px] blur-[12.5px] [background:radial-gradient(50%_50%_at_95%_-3%,rgba(0,0,0,1)_0%,rgba(255,255,255,1)_100%)] md:top-[565px] md:left-[42%] animate-orb-2",
  },
  {
    className:
      "absolute top-[369px] left-[522px] w-[37px] h-[37px] rounded-[38.5px] blur-[12.5px] [background:radial-gradient(50%_50%_at_95%_-3%,rgba(0,0,0,1)_0%,rgba(255,255,255,1)_100%)] md:top-[300px] md:left-[35%] animate-orb-3",
  },
  {
    className:
      "absolute top-[696px] left-[603px] w-[31px] h-[31px] rounded-[15.5px] blur-[12.5px] [background:radial-gradient(50%_50%_at_95%_-3%,rgba(0,0,0,1)_0%,rgba(255,255,255,1)_100%)] md:top-[567px] md:left-[41%] animate-orb-4",
  },
];

const statsCards = [
  {
    value: "15+",
    description: "Project Delivered",
    className: "top-[405px] left-[1006px] md:top-[320px] md:left-[calc(100%-300px)] lg:top-[405px] lg:left-[1006px] xl:left-[900px] 2xl:left-[950px]",
    rotated: false,
    valueLeft: "left-[34px]",
    descLeft: "left-[119px]",
  },
  {
    value: "98%",
    description: "Client Satisfaction ",
    className: "top-[602px] left-[1072px] md:top-[480px] md:left-[calc(100%-240px)] lg:top-[602px] lg:left-[1072px] xl:left-[950px] 2xl:left-[1000px]",
    rotated: true,
    valueLeft: "left-[193px]",
    descLeft: "left-[29px]",
  },
  {
    value: "900+",
    description: "Growth Achieved",
    className: "top-[799px] left-[1006px] md:top-[640px] md:left-[calc(100%-300px)] lg:top-[799px] lg:left-[1006px] xl:left-[900px] 2xl:left-[950px]",
    rotated: false,
    valueLeft: "left-7",
    descLeft: "left-[113px]",
  },
];

const services = [
  'Revenue Architecture',
  'Experience Design',
  'Automation & CRM',
  'SKU-Based Solutions',
  'LMS & HRMS',
];

const AboutUsSectionMobile = () => (
  <section className="bg-black relative px-3 py-8 md:px-6 lg:px-8 xl:px-12 flex flex-col items-center gap-7 min-h-screen  w-full max-w-screen">

    {/* --- BACKGROUND BLOBS (FIXED EFFECT) --- */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[8%] left-[10%] -translate-x-1/2 w-[600px] h-[600px] animate-blob">
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
    <div className="relative w-full max-w-screen flex flex-col justify-center items-center ">
      {/* Title */}
      <h1 className="text-center">
        <DecorativeLines className="text-[40px] text-[#82B7DC] font-bold">ABOUT US</DecorativeLines>
      </h1>
      {/* Main Heading */}
      <h2 className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-[20px] text-center tracking-[0] leading-[normal] underline px-4">
        We build more than apps and websites
        <br />
        We build Solution Engines
      </h2>
      {/* Description */}
      <p className="text-[#bbbbbb] text-[16px] md:text-lg lg:text-xl text-center mb-3">
        We create digital experiences that inspire, engage, and grow businesses.
      </p>

      {/* Mesh 2 Optional: */}

      <div className="">
        <img src="/MESH.avif" alt="Mesh2" className="mx-auto w-[220px] animate-spin" style={{ animationDuration: "12s" }} />
      </div>

      <Button
        variant="ghost"
        className="absolute text-white border-2 border-white rounded-[30px] hover:bg-white"
      >
        See How it Works <ArrowUpRight className="w-5 h-5 text-2xl" />
      </Button>

      <div className="flex flex-col items-center mt-20  gap-4 w-full">
        {/* Explore Now Button */}

        {statsMobile.map((card, idx) => (
          <Card key={idx} className="w-full max-w-[320px]  mx-auto rounded-xl p-0 bg-[rgba(52,102,170,.12)] border-0 backdrop-blur-sm shadow-md">
            <CardContent className="flex flex-col items-center justify-center py-3 px-2">
              <div className="text-white font-bold text-[1.7rem] md:text-2xl lg:text-3xl">{card.value}</div>
              <div className="text-[#bbbbbb] text-base md:text-lg lg:text-xl font-medium text-center">{card.description}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      {/* Slogan */}
      <div className="text-white text-base md:text-lg lg:text-xl font-bold text-center my-3">
        Strategize Design Launch
      </div>
      {/* Pills */}
      <div className="flex flex-wrap justify-center w-full gap-3">
        {pillMobile.map((label, idx) => (
          <Button key={idx} variant="ghost" className="bg-[rgba(130,183,220,0.05)] rounded-xl px-5 md:px-7 lg:px-9 text-[#bbbbbb] font-semibold shadow-sm py-2 md:py-3 lg:py-4 text-sm md:text-base lg:text-lg">
            {label}
          </Button>
        ))}
      </div>
    </div>
  </section>
);


export const AboutUsSection = (): JSX.Element => {
  return (
    <>
      <div className="hidden xl:block">
        <section className="w-full relative bg-black overflow-hidden">
          {/* --- BACKGROUND BLOBS (FIXED EFFECT) --- */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Container for the animated blobs */}
              <div className="absolute top-[15%] left-[30%] -translate-x-1/2 w-[600px] h-[600px] animate-blob">

                {/* Dark Navy - Top Left */}
                <div className="absolute top-[30px] left-[20px] w-[300px] h-[300px] rounded-full bg-[#001D4A] blur-xl opacity-80" />

                {/* Royal Blue - Top Right */}
                <div className="absolute top-0 left-[230px] w-[280px] h-[280px] bg-[#1E56B1] rounded-full blur-xl opacity-80" />

                {/* Teal/Aqua - Bottom Left */}
                <div className="absolute top-[280px] left-[40px] w-[260px] h-[260px] rounded-full bg-[#2A9192] blur-xl opacity-80" />

                {/* Deep Midnight - Bottom Center */}
                <div className="absolute top-[350px] left-[200px] w-[240px] h-[240px] rounded-full bg-[#0E3386] blur-xl opacity-90" />

                {/* Light Sky Blue - Right Side */}
                <div className="absolute top-[220px] left-[380px] w-[250px] h-[250px] rounded-full bg-[#65A7FC] blur-xl opacity-80" />

                {/* Bright Cyan - Center Focus */}
                <div className="absolute top-[180px] left-[150px] w-[250px] h-[250px] rounded-full bg-[#3CA5D8] blur-lg z-10" />

              </div>

              {/* Glassmorphism Overlay */}
              <div className="absolute inset-0 backdrop-blur-[100px] bg-black/10" />
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
          <div className="relative w-full md:max-w-screen-md md:mx-auto lg:max-w-screen-lg lg:mx-auto xl:max-w-screen-xl xl:mx-auto h-[1024px] md:h-[900px] lg:h-[1024px]">


            {/* ABOUT Title */}
            <>
              <div className="w-24 h-px  mx-auto mb-2  "></div>
              <div className=" text-2xl font-extrabold tracking-wide text-center mt-36">
                <DecorativeLines className="text-[40px] text-[#82B7DC]">About us</DecorativeLines>
              </div>
              <div className="w-24 h-px  mx-auto mt-2"></div>
            </>


            {/* Background Mesh Image 2 */}
            <img
              className="absolute w-[25.49%] h-[35.84%] top-[34.86%] left-[38.19%] md:w-[30%] md:h-[40%] md:top-[28%] md:left-[35%] animate-spin"
              style={{ animationDuration: "14s" }}
              alt="Mesh"
              src="/MESH.avif"
            />
            <img
              className="absolute w-[25.49%] h-[35.84%] top-[70.7%] left-[38.19%] md:w-[30%] md:h-[40%] md:top-[58%] md:left-[35%] opacity-10 animate-spin"
              style={{ animationDuration: "14s" }}
              alt="Mesh Shadow"
              src="/MESH.avif"
            />

            {/* Glow Orbs */}
            {glowOrbs.map((orb, index) => (
              <div key={`glow-orb-${index}`} className={orb.className} />
            ))}

            {/* Main Heading */}
            <h2 className="absolute top-[198px] left-[50%] -translate-x-1/2 w-[90%] max-w-[698px] md:top-[160px] lg:top-[198px] [font-family:'Montserrat',Helvetica] font-semibold text-white text-[20px] md:text-[28px] lg:text-[32px] text-center tracking-[0] leading-[normal] underline px-4">
              We build more than apps and websites
              <br />
              We build Solution Engines
            </h2>

            {/* Description Text */}
            <p className="absolute top-[379px] left-[77px] w-[353px] md:top-[310px] md:left-[5%] md:w-[40%] lg:top-[379px] lg:left-[77px] lg:w-[353px] [font-family:'Montserrat',Helvetica] font-medium text-[#bbbbbb] text-[15px] text-center tracking-[0] leading-[normal] px-4">
              We go beyond design and development - we build structured digital ecosystems that deliver measurable results.
            </p>

            {/* Vector Line */}
            <img
              className="absolute top-[512px] left-[192px] w-[366px] h-[74px] md:top-[420px] md:left-[5%] md:w-[300px] lg:top-[512px] lg:left-[132px] lg:w-[366px]"
              alt="Vector"
              src="/vector-1.svg"
            />

            {/* Explore Now Button */}
            <Button
              variant="ghost"
              className="absolute top-[486px] left-[138px] w-[194px] h-[52px] md:top-[395px] md:left-[5%] lg:top-[530px] lg:left-[100px]  h-auto
               text-white border-2 border-white rounded-[30px] hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2"
            >
              See How it Works <ArrowUpRight className="w-5 h-5 text-2xl" />
            </Button>

            {/* Stats Cards */}
            {statsCards.map((card, index) => (
              <Card
                key={`stat-card-${index}`}
                className={`${card.className} w-[305px] h-[136px] md:w-[280px] md:h-[120px] lg:w-[305px] lg:h-[136px] absolute rounded-[20px] overflow-hidden backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(153,178,213,0.06)_50%,rgba(52,102,170,0.08)_100%)] border-0 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.50),inset_1px_0_0_rgba(255,255,255,0.42),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] transition-shadow ${card.rotated ? "rotate-180" : ""}`}
              >
                <CardContent className="relative w-full h-full p-0">
                  <div
                    className={`absolute ${card.rotated ? "-top-12" : "top-8"} left-[67px] w-[152px] h-[152px] bg-[#0b1fd1] rounded-[76px] blur-[80px]`}
                  />
                  <div
                    className={`absolute ${card.rotated ? "top-[-61px]" : "top-[-84px]"} -left-1 w-1 h-[281px] rounded-[2px/140.5px] bg-white blur-sm`}
                  />
                  <div
                    className={`absolute top-[46px] ${card.valueLeft} ${card.rotated ? "rotate-180" : ""} [font-family:'Montserrat',Helvetica] font-bold text-white text-3xl md:text-4xl tracking-[0] leading-[normal]`}
                  >
                    {card.value}
                  </div>
                  <div
                    className={`absolute ${card.rotated ? "top-[46px]" : "top-[49px]"} ${card.descLeft} ${card.rotated ? "w-[146px] rotate-180" : "w-[166px]"} [font-family:'Montserrat',Helvetica] font-medium text-[#bbbbbb] text-lg md:text-xl text-center tracking-[0] leading-[normal]`}
                  >
                    {card.description}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Pill Buttons */}
            <div className="absolute top-[600px] left-[30%] -translate-x-1/2 z-50 p-10 flex flex-col items-center">
              <h1 className="text-white text-xl font-semibold mb-12">What We do !</h1>

              <div className="grid grid-cols-2 gap-x-6 gap-y-8 w-full max-w-4xl">
                {services.slice(0, 4).map((service) => (
                  <div
                    key={service}
                    className="group relative backdrop-blur-[20px] bg-white/[0.03] border border-white/[0.05] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-[35px] py-4 px-8 flex items-center justify-center transition-all duration-300 hover:bg-white/[0.08] hover:border-white/[0.15] cursor-default"
                  >
                    <p className="text-[#BBBBBB] text-[22px] font-medium tracking-wide">
                      {service}
                    </p>
                  </div>
                ))}
              </div>

              <div className="w-full max-w-xs mt-12 flex justify-center">
                <div
                  key={services[4]}
                  className="group relative backdrop-blur-[20px] bg-white/[0.03] border border-white/[0.05] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-[35px] py-4 px-8 flex items-center justify-center transition-all duration-300 hover:bg-white/[0.08] hover:border-white/[0.15] cursor-default"
                >
                  <p className="text-[#BBBBBB] text-xl font-medium tracking-wide">
                    {services[4]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="block xl:hidden">
        <AboutUsSectionMobile />
      </div>
    </>
  );
};

export default AboutUsSection;
