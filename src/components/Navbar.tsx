"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="inset-x-0 top-0 z-50 w-full fixed bg-black px-4 py-2 sm:px-6 lg:px-32">
      <div className="mx-auto flex items-center justify-between ">
        {/* Left side - waaw logo */}
        <Link href="/">
          <img src="/logo.png" alt="Logo" className="h-20 w-20" />
        </Link>

        {/* Center - Navigation links - Desktop */}
        <nav className="hidden md:flex gap-10">
          <Link href="/" className={`${pathname === "/" ? "text-[#82b7dc]" : "text-[#bbbbbb] hover:text-[#82b7dc]"} font-semibold text-[18px] transition`}>
            Home
          </Link>
          <Link href="#about" className="text-[#bbbbbb] hover:text-[#82b7dc] font-semibold text-[18px] transition">
            About Us
          </Link>
          <Link href="#services" className="text-[#bbbbbb] hover:text-[#82b7dc] font-semibold text-[18px] transition">
            Solutions
          </Link>
          <Link href="#pricing" className="text-[#bbbbbb] hover:text-[#82b7dc] font-semibold text-[18px] transition">
            Pricing
          </Link>
          <Link href="#case-study" className="text-[#bbbbbb] hover:text-[#82b7dc] font-semibold text-[18px] transition">
            Case Studies
          </Link>
        </nav>

        {/* Desktop Contact Button */}
        <Link
          href="/contact"
          onClick={() => {
            import("@/lib/tracking").then(({ trackEvent }) => {
              trackEvent("cta_click", { label: "Let's Talk", location: "Navbar" });
            });
          }}
          className="hidden md:relative md:inline-flex md:items-center md:justify-center
            text-white border bg-[#FFFFFF21] border-white rounded-[30px] px-5 py-2 font-bold gap-2 items-center"
        >
            Let's Talk <ArrowUpRight className="w-5 h-5 text-2xl" />

        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#bbbbbb] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-4 py-4 space-y-4">
            <Link href="/" className={`block ${pathname === "/" ? "text-[#82b7dc]" : "text-[#bbbbbb] hover:text-[#82b7dc]"} font-semibold text-xl transition`} onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="#about" className="block text-[#bbbbbb] hover:text-[#82b7dc] font-semibold text-xl transition" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Link href="#services" className="block text-[#bbbbbb] hover:text-[#82b7dc] font-semibold text-xl transition" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link href="#blogs" className="block text-[#bbbbbb] hover:text-[#82b7dc] font-semibold text-xl transition" onClick={() => setIsOpen(false)}>
              Blogs
            </Link>
            <Link 
              href="/contact" 
              className="block mt-6" 
              onClick={() => {
                setIsOpen(false);
                import("@/lib/tracking").then(({ trackEvent }) => {
                  trackEvent("cta_click", { label: "Let's Talk", location: "Navbar (Mobile)" });
                });
              }}
            >
              <div className="relative inline-flex items-center justify-center w-[200px] h-[59px]">
                <img
                  className="absolute top-0 left-0 w-[200px] h-[59px]"
                  alt="Subtract"
                  src="/subtract.svg"
                />
                <span
                  className="absolute left-5 top-1/2 -translate-y-1/2 [font-family:'Montserrat',Helvetica] font-semibold text-black text-xl z-10"
                  style={{ width: '120px', textAlign: 'left' }}
                >
                  Let's Talk
                </span>
                <img
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 z-10"
                  alt="Vector"
                  src="/vector-20.svg"
                />
              </div>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}


