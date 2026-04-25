"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import CountUp from "../ui/CountUp";
import { Zap, Layout, Settings, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";


const auditFeatures = [
  {
    title: "Performance",
    desc: "Speed, load time, and mobile responsiveness issues.",
    icon: <Zap className="text-[#07f3ac] w-6 h-6" />,
  },
  {
    title: "Design & UX",
    desc: "Conversion blockers and user experience gaps.",
    icon: <Layout className="text-[#166bf3] w-6 h-6" />,
  },
  {
    title: "Tech Stack",
    desc: "Scalability, integration, and infrastructure observations.",
    icon: <Settings className="text-[#25b8c0] w-6 h-6" />,
  },
  {
    title: "Growth Gaps",
    desc: "Missing features — LMS, CRM, EMS, or automation.",
    icon: <TrendingUp className="text-[#82b7dc] w-6 h-6" />,
  },
];


// -------------------- MAIN HERO --------------------

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2;

  // Auto-play effect (optional)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 10000); // Switches every 10 seconds
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <section className="relative w-full min-h-screen bg-[#000000] text-[#bbbbbb] overflow-hidden">

      {/* --- BACKGROUND BLOBS (Global to both slides) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Container for the animated blobs */}
        <div className="absolute top-[5%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] animate-blob">

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

      <div className="relative z-10">
        {/* Mobile View - Kept separate or you can wrap in slider too */}
        <div className="lg:hidden">
          <AnimatePresence mode="wait">
            {currentSlide === 0 ? (
              <motion.div
                key="hero1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <MobileHero1 />
              </motion.div>
            ) : (
              <motion.div
                key="hero2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <MobileHero2 />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* DESKTOP SLIDER */}
        <div className="hidden lg:block relative h-screen">
          <AnimatePresence mode="wait">
            {currentSlide === 0 ? (
              <motion.div
                key="hero1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <Hero1 />
              </motion.div>
            ) : (
              <motion.div
                key="hero2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <Hero2 />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20">
            <button onClick={prevSlide} className="p-2 rounded-full border border-white/20 hover:bg-white/10 transition">
              <ChevronLeft className="text-white" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {[...Array(totalSlides)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-2 transition-all duration-300 rounded-full ${currentSlide === i ? "w-8 bg-[#07f3ac]" : "w-2 bg-white/30"
                    }`}
                />
              ))}
            </div>

            <button onClick={nextSlide} className="p-2 rounded-full border border-white/20 hover:bg-white/10 transition">
              <ChevronRight className="text-white" />
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes blobMove {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(40px, -60px) scale(1.1); }
          66% { transform: translate(-30px, 30px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blobMove 4s infinite ease-in-out;
        }
      `}</style>
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


function MobileHero1() {
  const router = useRouter();
  return (
    <div className="lg:hidden mt-10">
      <div className="container mx-auto py-6 flex flex-col items-center justify-center gap-4">
        {/* Part 1 */}
        <div className="flex flex-col items-center justify-center">
          {/* IMAGE */}
          <div className="relative w-full mx-auto flex justify-center">
            <Image
              src="/land2.avif"
              alt="Elevate Strategy Transform Business Illustration"
              width={300}
              height={300}
              priority
              loading="eager"
              className="w-full mx-auto max-w-[300px] object-contain"
            />
          </div>

          {/* STATS (DESKTOP STYLE LIKE CARD ALIGNMENT) */}
          <div className="w-full absolute z-10 top-52 mx-auto max-w-sm  p-5 px-10 space-y-2">

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

            <motion.h2
              className="text-2xl sm:text-3xl font-bold text-white"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
            >
              ELEVATE YOUR STRATEGY
            </motion.h2>

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
          <div className="flex flex-col gap-3 mx-auto">
            <button 
              onClick={() => router.push('/contact')} 
              className="border border-white/30 rounded-full py-3 text-white text-sm hover:bg-white/10 transition"
              aria-label="Book a free strategy call"
            >
              Book a Free Strategy Call
            </button>
            <button 
              onClick={() => router.push('/services')} 
              className="border border-white/30 rounded-full py-3 text-white text-sm hover:bg-white/10 transition"
              aria-label="View our solutions"
            >
              View Our Solutions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileHero2() {
  const router = useRouter();
  return (
    <div className="px-5 py-10 mt-4 space-y-6 text-center">

      <span className="text-[#07f3ac] text-xs border px-3 py-1 rounded-full">
        FREE AUDIT
      </span>

      <h2 className="text-2xl font-bold text-white">
        Find Out What's Holding Your Digital Presence Back
      </h2>

      <p className="text-gray-400 text-sm">
        Share your website and get a personalized audit.
      </p>

      <button onClick={() => router.push("/contact")} className="bg-white text-black py-3 px-6 rounded-full font-bold">
        Get my free audit
      </button>

      {/* FEATURES */}
      <div className="grid grid-cols-1 gap-4 mt-6">
        {auditFeatures.map((feature, index) => (
          <div
            key={index}
            className="p-4 rounded-xl bg-white/5 border border-white/10"
          >
            <div className="mb-2">{feature.icon}</div>
            <h4 className="text-white font-semibold">{feature.title}</h4>
            <p className="text-gray-400 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


function Hero1() {
  const router = useRouter();
  return (
    <div className="relative hidden lg:flex flex-col items-center justify-center mt-8 min-h-screen">
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
            <button onClick={() => router.push('/contact')} className="border font-md hover:bg-[#FFFFFF21] rounded-[30px] w-[271px] h-[50px] py-2 px-5 text-[15px]">Book a Free Strategy Call</button>
            <button onClick={() => router.push('/#services')} className="border font-md hover:bg-[#FFFFFF21] rounded-[30px] w-[271px] h-[50px] py-2 px-5 text-[15px]">View Our Solutions</button>
          </motion.div>
        </div>

        <motion.div className="relative w-6/12 min-h-screen flex flex-col items-center justify-center">
          <Image src="/land2.avif" alt="Waaw - Innovative Software and Digital Solutions Illustration" width={420} height={220} priority className="w-full max-w-[460px] object-cover rounded-lg  mx-auto" />
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-full px-6">
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
  );
}

function Hero2() {
  const router = useRouter();
  return (
    <section className="relative w-full py-24 mt-5 bg-black text-white overflow-hidden">
      {/* --- BACKGROUND BLOBS (Matching Hero) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Container for the animated blobs */}
        <div className="absolute top-[5%] left-[4%] -translate-x-1/2 w-[600px] h-[600px] animate-blob">

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

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT COLUMN: Value Proposition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-[#07f3ac] font-bold tracking-widest text-sm uppercase border border-[#07f3ac]/30 px-4 py-1 rounded-full">
                FREE AUDIT · NO CALL NEEDED
              </span>
              <h2 className="text-5xl lg:text-6xl font-extrabold leading-tight">
                Find Out What's Holding <br />
                <span className="text-[#82b7dc]">Your Digital Presence Back</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
                Share your website or describe your tech setup. We'll review it and send you a
                personalised audit — specific issues, clear recommendations, zero sales pressure.
              </p>
            </div>

            {/* CTA & Trust Badges */}
            <div className="space-y-6">
              <button
                onClick={() => router.push("/contact")}
                className="group flex items-center gap-3 bg-white text-black font-bold py-4 px-8 rounded-full hover:bg-[#82b7dc] transition-all duration-300">
                Get my free audit <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="grid grid-cols-2 gap-4">
                {["Delivered within 48 hours", "No commitment required", "Specific to your business"].map((text, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                    <CheckCircle2 size={16} className="text-[#07f3ac]" />
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Feature Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            <div className="col-span-full mb-2">
              <h3 className="text-xl font-bold text-white mb-2">What your audit covers</h3>
              <div className="h-1 w-20 bg-[#0A6DD8]" />
            </div>

            {auditFeatures.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-[#82b7dc]/50 transition-colors"
              >
                <div className="mb-4 bg-white/5 w-12 h-12 flex items-center justify-center rounded-lg">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}