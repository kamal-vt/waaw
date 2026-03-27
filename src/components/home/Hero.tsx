"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import CountUp from "../ui/CountUp";


// -------------------- MAIN HERO --------------------
export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#000000] text-[#bbbbbb] overflow-hidden">

      {/* --- BACKGROUND BLOBS (FIXED EFFECT) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] animate-blob">
          <div className="absolute top-[33px] left-0 w-[307px] h-[263px] rounded-full bg-[#0660f3] opacity-60 blur-3xl" />
          <div className="absolute top-[190px] left-[307px] w-[281px] h-[264px] rounded-full bg-[#468deb] opacity-40 blur-3xl" />
          <div className="absolute top-0 left-[212px] w-[283px] h-[258px] bg-[#0765f3] rounded-full opacity-50 blur-3xl" />
          <div className="absolute top-[235px] left-2 w-[280px] h-[260px] rounded-full bg-[#288b91] opacity-40 blur-3xl" />
          <div className="absolute top-[296px] left-[212px] w-[247px] h-[228px] rounded-full bg-[#0454de] opacity-60 blur-3xl" />
          <div className="absolute top-[169px] left-[154px] w-[267px] h-[253px] rounded-full bg-[#079feb] opacity-40 blur-3xl" />
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

      <div className="relative z-10">
        {/* Mobile View */}
        <MobileView />

        {/* DESKTOP VERSION */}
        <div className="relative hidden lg:flex flex-col items-center justify-center mt-[96px] min-h-screen">
          <div className="container mx-auto px-4 flex flex-row items-center justify-between">
            <div className="flex flex-col gap-10 w-7/12 text-left space-y-4 mt-2 h-full">
              <div className="flex flex-col gap-4">
                <motion.h1 className="text-5xl lg:text-[55px] font-bold text-white" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                  ELEVATE YOUR STRATEGY
                </motion.h1>
                <motion.h2 className="text-7xl font-bold text-[#82b7dc]" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  TRANSFORM <br /> YOUR BUSINESS
                </motion.h2>
                <motion.p className="text-xl text-gray-300 max-w-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                  From brand positioning to high-performing digital platforms, we create smart systems that help ambitious businesses scale with clarity and confidence.
                </motion.p>
              </div>
              <motion.div className="flex items-center gap-10 text-[#FFFFFF]" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                <button className="border font-md hover:bg-[#FFFFFF21] rounded-[30px] w-[271px] h-[50px] py-2 px-5 text-[15px]">Book a Free Strategy Call</button>
                <button className="border font-md hover:bg-[#FFFFFF21] rounded-[30px] w-[271px] h-[50px] py-2 px-5 text-[15px]">View Our Solutions</button>
              </motion.div>
            </div>

            <motion.div className="relative w-6/12 min-h-screen flex flex-col items-center justify-between">
              <Image src="/land2.png" alt="land" width={420} height={220} className="w-full max-w-[460px] object-cover rounded-lg mt-0 mx-auto" />
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full px-6">
                <div className="flex flex-col items-center mb-4">
                  <p className="text-[#0A6DD8] text-[40px] font-extrabold">
                    <CountUp
                      from={0}
                      to={7}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text"
                    />+
                  </p>
                  <p className="text-white text-[24px] font-bold">Website</p>
                </div>
                <div className="flex justify-between text-center">
                  <div>
                    <p className="text-[#0A6DD8] text-[36px] font-extrabold"><CountUp
                      from={0}
                      to={15}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text"
                    />+</p>
                    <p className="text-white text-[24px] font-bold">Industry Expertise</p>
                  </div>
                  <div>
                    <p className="text-[#0A6DD8] text-[36px] font-extrabold">
                      <CountUp
                        from={0}
                        to={900}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text"
                      />%+</p>
                    <p className="text-white text-[24px] font-bold">Social Media Growth</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// -------------------- MOBILE STAT CARD --------------------
function Stat({ number, label, className }: { number: string; label: string; className?: string }) {
  return (
    <div className={`w-[180px] h-[100px] flex flex-col items-center justify-center bg-gradient-to-b from-white/10 to-[#3466aa]/20 border border-white/20 backdrop-blur-lg rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.1)] ${className}`}>
      <span className="text-2xl sm:text-3xl font-bold text-white">{number}</span>
      <p className="mt-1 text-xs sm:text-sm text-gray-300">{label}</p>
    </div>
  );
}


function MobileView() {
  return (
    <div className="lg:hidden mt-10">
      <div className="container mx-auto px-5 py-6 flex flex-col items-center gap-4">
        {/* Part 1 */}
        <div>
          {/* IMAGE */}
          <motion.div
            className="relative w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <img
              src="/land2.png"
              alt="hero"
              className="w-full max-w-[280px] sm:max-w-[360px] object-contain "
            />
          </motion.div>

          {/* STATS (DESKTOP STYLE LIKE CARD ALIGNMENT) */}
          <div className="w-full absolute z-10 top-48 left-2 max-w-sm  p-5 px-10 space-y-2 ">

            {/* TOP */}
            <div className="text-center">
              <p className="text-[#0A6DD8] text-3xl font-extrabold"> <CountUp
                        from={0}
                        to={7}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text"
                      />+</p>
              <p className="text-white text-base font-semibold">Website</p>
            </div>

            {/* BOTTOM */}
            <div className="flex justify-between text-center">
              <div>
                <p className="text-[#0A6DD8] text-2xl font-bold"> <CountUp
                        from={0}
                        to={15}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text"
                      />+</p>
                <p className="text-white text-sm">Industry</p>
              </div>
              <div>
                <p className="text-[#0A6DD8] text-2xl font-bold"> <CountUp
                        from={0}
                        to={900}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text"
                      />%+</p>
                <p className="text-white text-sm">Growth</p>
              </div>
            </div>
          </div>
        </div>
          {/* Part 2 */}
         <div className="mt-5">
          {/* TEXT */}
          <div className="text-center space-y-3">

            <motion.h1
              className="text-2xl sm:text-3xl font-bold text-white"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
            >
              ELEVATE YOUR STRATEGY
            </motion.h1>

            <motion.h2
              className="text-4xl sm:text-5xl font-extrabold text-[#82b7dc] leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              TRANSFORM <br /> YOUR BUSINESS
            </motion.h2>

            <motion.p
              className="text-sm sm:text-base text-gray-300 max-w-md mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              From brand positioning to high-performing digital platforms, we
              create smart systems that help ambitious businesses scale with
              clarity and confidence.
            </motion.p>
          </div>

          {/* CTA BUTTONS (DESKTOP STYLE MATCH) */}
          <div className="flex flex-col gap-3 w-full max-w-xs">
            <button className="border border-white/30 rounded-full py-3 text-white text-sm hover:bg-white/10 transition">
              Book a Free Strategy Call
            </button>
            <button className="border border-white/30 rounded-full py-3 text-white text-sm hover:bg-white/10 transition">
              View Our Solutions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}