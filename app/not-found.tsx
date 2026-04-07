'use client';

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import FooterSection from "@/components/sections/FooterSection";

export default function NotFound() {
    const router = useRouter();

    return (
        <section className="relative w-full min-h-screen bg-black text-[#bbbbbb] flex flex-col">

            <Navbar />

            {/* ===== MAIN CENTER AREA ===== */}
            <div className="flex-1 flex items-center justify-center relative overflow-hidden">

                {/* ===== CENTERED BLOBS ===== */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">

                    <div className="relative w-[90vw] max-w-[600px] h-[90vw] max-h-[600px] animate-blob">

                        <div className="absolute top-[5%] left-[5%] w-[40%] h-[40%] rounded-full bg-[#001D4A] blur-xl opacity-60" />
                        <div className="absolute top-[0%] left-[45%] w-[45%] h-[45%] bg-[#1E56B1] rounded-full blur-xl opacity-60" />
                        <div className="absolute top-[50%] left-[10%] w-[40%] h-[40%] rounded-full bg-[#2A9192] blur-xl opacity-60" />
                        <div className="absolute top-[65%] left-[40%] w-[38%] h-[38%] rounded-full bg-[#0E3386] blur-xl opacity-60" />
                        <div className="absolute top-[35%] left-[70%] w-[40%] h-[40%] rounded-full bg-[#65A7FC] blur-xl opacity-60" />

                        {/* Center Glow */}
                        <div className="absolute top-[30%] left-[30%] w-[40%] h-[40%] rounded-full bg-[#3CA5D8] blur-lg z-10" />
                    </div>
                </div>

                {/* ===== CONTENT ===== */}
                <div className="relative z-10 text-center px-6 max-w-2xl min-h-screen flex flex-col items-center justify-center">

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[100px] sm:text-[140px] md:text-[160px] font-extrabold text-[#82b7dc] leading-none"
                    >
                        404
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2"
                    >
                        Page Not Found
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-400 mt-4 text-base sm:text-lg"
                    >
                        The page you’re looking for doesn’t exist or has been moved.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <button
                            onClick={() => router.push("/")}
                            className="group flex items-center gap-2 bg-white text-black font-bold py-3 px-6 rounded-full hover:bg-[#82b7dc] transition"
                        >
                            Go Home
                            <ArrowRight className="group-hover:translate-x-1 transition" />
                        </button>

                        <button
                            onClick={() => router.back()}
                            className="border border-white/20 text-white py-3 px-6 rounded-full hover:bg-white/10 transition"
                        >
                            Go Back
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* ===== FOOTER (BOTTOM FIXED FLOW) ===== */}
            <FooterSection />

            {/* ===== ANIMATION ===== */}
            <style jsx global>{`
                @keyframes blobMove {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(40px, -60px) scale(1.1); }
                    66% { transform: translate(-30px, 30px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob {
                    animation: blobMove 8s infinite ease-in-out;
                }
            `}</style>

        </section>
    );
}