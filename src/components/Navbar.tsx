"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

/* NAV LINKS DATA */
const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about" },
  { label: "Solutions", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Case Studies", href: "#case-study" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full bg-black px-4 py-2 sm:px-6 lg:px-20">
      <div className="mx-auto flex items-center justify-between">

        {/* LOGO */}
        <Link href="/">
          <img src="/logo.png" alt="Logo" className="h-16 w-16 sm:h-20 sm:w-20" />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 lg:gap-10">
          {navLinks.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className={`font-semibold text-[16px] lg:text-[18px] transition ${
                pathname === item.href
                  ? "text-[#82b7dc]"
                  : "text-[#bbbbbb] hover:text-[#82b7dc]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* DESKTOP BUTTON */}
        <Link
          href="/contact"
          onClick={() => {
            import("@/lib/tracking").then(({ trackEvent }) => {
              trackEvent("cta_click", {
                label: "Let's Talk",
                location: "Navbar",
              });
            });
          }}
          className="hidden md:inline-flex items-center gap-2 text-white border bg-[#FFFFFF21] border-white rounded-full px-5 py-2 font-bold hover:bg-white hover:text-black transition"
        >
          Let's Talk <ArrowUpRight className="w-4 h-4" />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-[#bbbbbb]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <MobileMenu
          pathname={pathname}
          setIsOpen={setIsOpen}
        />
      )}
    </header>
  );
}



/* MOBILE MENU COMPONENT */
function MobileMenu({
  pathname,
  setIsOpen,
}: {
  pathname: string;
  setIsOpen: (val: boolean) => void;
}) {
  return (
    <div className="md:hidden bg-black border-t border-gray-800 animate-fadeIn">
      <div className="px-4 py-5 space-y-5 flex flex-col items-center">

        {navLinks.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className={`block text-lg font-semibold transition ${
              pathname === item.href
                ? "text-[#82b7dc]"
                : "text-[#bbbbbb] hover:text-[#82b7dc]"
            }`}
          >
            {item.label}
          </Link>
        ))}

        {/* MOBILE CTA */}
        <Link
          href="/contact"
          onClick={() => {
            setIsOpen(false);
            import("@/lib/tracking").then(({ trackEvent }) => {
              trackEvent("cta_click", {
                label: "Let's Talk",
                location: "Navbar (Mobile)",
              });
            });
          }}
          className="inline-flex items-center justify-center gap-2 mt-4 w-full bg-white text-black font-semibold py-3 rounded-full"
        >
          Let's Talk <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}