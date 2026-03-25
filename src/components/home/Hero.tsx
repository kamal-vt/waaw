"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import InfinityHero from "./InfinityHero";
import Image from "next/image";
// import Galaxy from "../Galaxy";

// -------------------- ORBIT CARD (FIXED PATH) --------------------
function OrbitCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="relative w-[260px] h-[120px] overflow-visible">

      {/* Card */}
      <div
        className="absolute inset-0 rounded-2xl z-10 overflow-visible
        bg-[radial-gradient(120%_120%_at_50%_-20%,rgba(255,255,255,0.18)_0%,rgba(52,102,170,0.18)_40%,rgba(0,0,0,0.2)_100%)]
        border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.35)]
        backdrop-blur-md flex flex-col items-center justify-center"
      >
        <span className="text-4xl font-extrabold text-white">{number}</span>
        <span className="mt-2 text-sm text-[#c7d0d9]">{label}</span>
      </div>

      {/* Orbiting ball */}
      <svg
        className="absolute inset-0 w-full h-full z-20 overflow-visible pointer-events-none"
        viewBox="0 0 260 120"
        fill="none"
      >
        <motion.circle
          r="4"                 // smaller ball
          cx="0"
          cy="0"
          fill="white"
          style={{ filter: "drop-shadow(0 0 6px rgba(255,255,255,0.6))" }}
          animate={{
            opacity: [0.6, 0.2, 1], // top = visible, sides = dim, bottom = visible
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <animateMotion
            dur="8s"
            repeatCount="indefinite"
            path="M 20 0 H 240 Q 260 0 260 20 V 100 Q 260 120 240 120 H 20 Q 0 120 0 100 V 20 Q 0 0 20 0 Z"
          />
        </motion.circle>
      </svg>

    </div>
  );
}


// -------------------- MAIN HERO --------------------
export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#000000] text-[#bbbbbb] overflow-hidden">

      <div className="relative z-10">
        {/* MOBILE VERSION */}
        <div className="lg:hidden">
          <div className="container mx-auto px-4 py-2 flex flex-col items-center gap-6">

            <div className="flex-1 max-w-2xl text-center space-y-4">
              <motion.h1
                className="text-2xl sm:text-3xl font-bold leading-tight"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                ELEVATE YOUR STRATEGY
              </motion.h1>

              <motion.h2
                className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#82b7dc] to-[#5D3ACD] bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                TRANSFORM <br />
                YOUR BUSINESS
              </motion.h2>

              <motion.p
                className="text-base sm:text-lg text-gray-300 max-w-lg mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                From brand positioning to high-performing digital platforms, we create smart systems that help ambitious businesses scale with clarity and confidence.              </motion.p>

              <motion.div
                className="mt-6 flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.div
                  animate={{ rotate: [-4, 4, -4] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="origin-center"
                >
                  <Link
                    href="/contact"
                    className="relative block w-[200px] h-[59px] z-40 hover:scale-105 hover:shadow-lg transition-all duration-300"
                  >
                    <img src="/subtract-4.svg" alt="" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="relative z-10 flex items-center justify-between px-5 h-full">
                      <span className="font-semibold text-black text-xl">Get Started</span>
                      <img src="/vector-20.svg" className="w-6 h-6" />
                    </div>
                  </Link>
                </motion.div>
              </motion.div>

            </div>

            <div className="relative flex items-center justify-center mb-2 ">
              <motion.img
                src="/land1.png"
                alt=""
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="w-full max-w-[240px] sm:max-w-[320px] object-cover rounded-lg"
                style={{ aspectRatio: "480/220" }}
              />
            </div>

            <div className="relative z-10 flex flex-col gap-4 items-center pb-8">
              <Stat number="150+" label="Relied on by Leaders" />
              <Stat number="300+" label="Real-Time User" className="-mt-6" />
              <Stat number="15+" label="Industry Expertise" className="-mt-6" />
            </div>
          </div>
        </div>

        {/* DESKTOP VERSION */}
        <div className="relative  flex flex-col items-center justify-center mt-[96px]  min-h-screen">
          <div className="container  mx-auto px-4  flex flex-row items-center justify-between">
            {/* Left Section */}
            <div className="flex flex-col gap-10 w-7/12 text-left space-y-4 mt-2 h-full">
              <div className="flex flex-col gap-4">
                <motion.h1
                  className="text-5xl lg:text-[55px] font-bold text-white"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  ELEVATE YOUR STRATEGY
                </motion.h1>

                <motion.h2
                  className="text-7xl font-bold text-[#82b7dc]"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  TRANSFORM <br />
                  YOUR BUSINESS
                </motion.h2>

                <motion.p
                  className="text-xl text-gray-300 max-w-lg "
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  From brand positioning to high-performing digital platforms, we create smart systems that help ambitious businesses scale with clarity and confidence.
                </motion.p>
              </div>

              <motion.div
                className=" flex items-center gap-10 text-[#FFFFFF]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <button className="border font-md hover:bg-[#FFFFFF21]  rounded-[30px] w-[271px] h-[50px] py-2 px-5 text-[15px]">
                  Book a Free Startegy Call
                </button>
                <button className="border font-md hover:bg-[#FFFFFF21]  rounded-[30px] w-[271px] h-[50px] py-2 px-5 text-[15px]">
                  View Our Solutions
                </button>
              </motion.div>
            </div>
            {/* Right Section */}
            <div className="relative w-6/12 min-h-screen flex flex-col items-center justify-between">
              {/* Image */}
              <Image
                src="/land2.png"
                alt="land"
                width={420}
                height={220}
                className="w-full max-w-[460px] object-cover rounded-lg mt-0 mx-auto"
              />

              
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full px-6">

                
                <div className="flex flex-col items-center mb-4">
                  <p className="text-[#0A6DD8] text-[32px] md:text-[40px] font-extrabold">
                    7+
                  </p>
                  <p className="text-white text-[28px] md:text-[24px] font-bold">
                    Website
                  </p>
                </div>

                
                <div className="flex justify-between text-center">

                  <div>
                    <p className="text-[#0A6DD8] text-[28px] md:text-[36px] font-extrabold">
                      15+
                    </p>
                    <p className="text-white text-[28px] md:text-[24px] font-bold">
                      Industry Expertise
                    </p>
                  </div>

                  <div>
                    <p className="text-[#0A6DD8] text-[28px] md:text-[36px] font-extrabold">
                      900%+
                    </p>
                    <p className="text-white text-[28px] md:text-[24px] font-bold">
                      Social Media Growth
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// -------------------- MOBILE STAT CARD --------------------
function Stat({ number, label, className }: { number: string; label: string; className?: string }) {
  return (
    <div
      className={`w-[180px] h-[100px] flex flex-col items-center justify-center bg-gradient-to-b from-white/10 to-[#3466aa]/20 border border-white/20 backdrop-blur-lg rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.1)] ${className}`}
    >
      <span className="text-2xl sm:text-3xl font-bold">{number}</span>
      <p className="mt-1 text-xs sm:text-sm text-gray-300">{label}</p>
    </div>
  );
}
