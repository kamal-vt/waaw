"use client";
import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const socialIcons = [
  { src: "/frame-14.svg", alt: "LinkedIn", href: "#" },
  { src: "/frame-15.svg", alt: "x", href: "#" },
  { src: "/frame-16.svg", alt: "Instagram", href: "https://www.instagram.com/waaw_tech/?hl=en" },
];

const contactIcons = [
  { src: "/frame-17-3.svg", alt: "Phone icon" },
  { src: "/frame-18.svg", alt: "Email icon" },
];

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blogs", href: "/blogs" },
  { label: "Let's Talk", href: "/contact" },
];
const resourceLinks = [
  { label: "Features", href: "#home" },
  { label: "Pricing", href: "#pricing" },
  { label: "Industry", href: "#industries" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "FAQ", href: "#faq" },
];
const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Refund Policy", href: "#" },
  { label: "Terms and Conditions", href: "#" },
];



export const FooterSection = (): JSX.Element => (
  <footer id="contact" className="w-full relative bg-black overflow-hidden py-[40px] sm:py-[60px] md:py-[84px] px-4 sm:px-8 md:px-[167px]">

    {/* --- BACKGROUND BLOBS (FIXED EFFECT) --- */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[5%] left-[8%] -translate-x-1/2 w-[600px] h-[600px] animate-blob">
        <div className="absolute top-[33px] left-0 w-[307px] h-[263px] rounded-full bg-[#011e4e] opacity-60 blur-3xl" />
        <div className="absolute top-[190px] left-[307px] w-[281px] h-[264px] rounded-full bg-[#65a7fc] opacity-40 blur-3xl" />
        <div className="absolute top-0 left-[212px] w-[283px] h-[258px] bg-[#1f5cb5] rounded-full opacity-50 blur-3xl" />
        <div className="absolute top-[235px] left-2 w-[280px] h-[260px] rounded-full bg-[#288b91] opacity-40 blur-3xl" />
        <div className="absolute top-[296px] left-[212px] w-[247px] h-[228px] rounded-full bg-[#133d86] opacity-60 blur-3xl" />
        <div className="absolute top-[169px] left-[154px] w-[267px] h-[253px] rounded-full bg-[#3ca5d8] opacity-40 blur-3xl" />
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
    {/* Top-left glow */}
    <div className="absolute top-[-145px] left-[-145px] w-[290px] h-[290px] rounded-full blur-[250px] [background:radial-gradient(50%_50%_at_95%_-3%,rgba(130,183,220,1)_0%)]" />
    {/* Bottom-right glow */}
    <div className="absolute bottom-[-145px] right-[-145px] w-[290px] h-[290px] rounded-full blur-[250px] [background:radial-gradient(50%_50%_at_95%_-3%,rgba(130,183,220,1)_0%)]" />

    {/* Hero card */}
    <div className="relative mx-auto max-w-[1106px] min-h-[400px] md:h-[358px] rounded-[30px] overflow-hidden border border-white/20 backdrop-blur-[2px] backdrop-brightness-[110%] bg-[linear-gradient(11deg,rgba(0,0,0,0.1)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] flex flex-col md:flex-row">
      <div className="absolute z-30 left-0 bottom-0 flex h-[150%] gap-[4px] items-start ">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="w-[18px] h-full blur-[0.8px]"
            style={{
              // Gradient ko vibrant banaya hai (White/Silver glow)
              background: 'linear-gradient(to right, rgba(255,255,255,0.1), #ffffff, rgba(255,255,255,0.1))',
              // Mask ko replace/adjust kiya taaki pura visible ho
              WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 100%)',
              maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 100%)',
              // Glow effect ke liye box-shadow (Optional) 
              boxShadow: '0 0 15px rgba(255,255,255,0.3)',
            }}
          />
        ))}
      </div>
      {/* Left image */}
      <img
        className="w-full md:w-[30.95%] h-[160px] sm:h-[200px] md:h-full object-contain"
        src="/audiencegridm.png"
        alt="Decor"
      />

      {/* Text content */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start p-4 md:p-8 relative">

        {/* Decorative ellipse - hidden on mobile, shown on md+ */}
        <img
          className="hidden md:block absolute top-[180px] left-[-50px] w-[920px] h-[190px]"
          src="/ellipse-3-1.svg"
          alt="Ellipse"
        />

        {/* Small glow circle - adjusted for mobile */}
        <div className="absolute top-[-15px] right-[50px] md:left-[200px] w-[30px] md:w-[53px] h-[30px] md:h-[53px] rounded-full blur-[6px] md:blur-[8.5px] [background:radial-gradient(50%_50%_at_95%_-3%,rgba(0,0,0,1)_0%,rgba(255,255,255,1)_100%)] animate-orb-5" />

        {/* Title */}
        <h2 className="w-full md:w-[507px] [font-family:'Montserrat',Helvetica] font-extrabold text-2xl md:text-4xl text-[#82b7dc] text-center md:text-left mb-4">
          WHERE IDEAS FLOW AND BRANDS GROW.
        </h2>

        {/* Subtitle */}
        <p className="w-full md:w-[472px] [font-family:'Montserrat',Helvetica] font-medium text-[#bbbbbb] text-xs md:text-sm text-center md:text-left mb-6">
          Ideas begin as ripples and rise into powerful waves of creation. At
          WAAW, we shape digital experiences that move brands forward.
        </p>

          {/* Button */}
          <Link
            href="/contact"
            onClick={() => {
              import("@/lib/tracking").then(({ trackEvent }) => {
                trackEvent("cta_click", { label: "Let's Talk", location: "Navbar" });
              });
            }}
            className="hidden mt-10 md:relative text-center md:inline-flex md:items-center md:justify-center
                    text-white border bg-[#FFFFFF21] border-white rounded-[30px] px-5 py-2 font-bold gap-2 items-center"
          >
            Schedule a Strategy Call <ArrowUpRight className="w-5 h-5 text-2xl" />

          </Link>
        </div>
      </div>
    {/* Divider */}
    <div className="relative z-10 mt-10 md:mt-20 w-full max-w-[1258px] mx-auto h-px [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,1)_40%,rgba(0,0,0,1)_100%)]" />

    {/* Footer grid */}
    <div className="relative z-10 mt-8 sm:mt-12 md:mt-16 max-w-[1258px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
      {/* Brand + Social */}
      <div className="flex flex-col items-center md:items-start">
        <img src="/logo.png" alt="Logo" className="h-28 w-28 mb-2" />
        <div className="flex gap-4">
          {socialIcons.map((icon, i) => (
            icon.href ? (
              <a
                key={i}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="w-10 h-10 md:w-12 md:h-12"
                />
              </a>
            ) : (
              <img
                key={i}
                src={icon.src}
                alt={icon.alt}
                className="w-10 h-10 md:w-12 md:h-12 hover:opacity-80 transition-opacity"
              />
            )
          ))}
        </div>
      </div>

      {/* Company Links */}
      <div className="flex flex-col items-center md:items-start">
        <h4 className="[font-family:'Montserrat',Helvetica] font-medium text-[#bbbbbb] text-xl mb-4">
          Company
        </h4>
        {companyLinks.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            className="[font-family:'Montserrat',Helvetica] font-normal text-[#bbbbbb] text-base mb-3 hover:text-[#bbbbbb] transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Resources */}
      <div className="flex flex-col items-center md:items-start">
        <h4 className="[font-family:'Montserrat',Helvetica] font-medium text-[#bbbbbb] text-xl mb-4">
          Resources
        </h4>
        {resourceLinks.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            className="[font-family:'Montserrat',Helvetica] font-normal text-[#bbbbbb] text-base mb-3 hover:text-[#bbbbbb] transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Contact */}
      <div className="flex flex-col items-center md:items-start">
        <h4 className="[font-family:'Montserrat',Helvetica] font-medium text-[#bbbbbb] text-xl mb-4">
          Let&apos;s Talk
        </h4>
        <div className="flex items-center gap-3 mb-3">
          <img src={contactIcons[0].src} alt={contactIcons[0].alt} className="w-8 h-8 md:w-10 md:h-10" />
          <span className="[font-family:'Montserrat',Helvetica] text-[#bbbbbb] text-base">
            7702118555
          </span>
        </div>
        <div className="flex items-center gap-3">
          <img src={contactIcons[1].src} alt={contactIcons[1].alt} className="w-8 h-8 md:w-10 md:h-10" />
          <a
            href="mailto:support@WAAW.world"
            className="[font-family:'Montserrat',Helvetica] text-[#bbbbbb] text-base hover:text-[#bbbbbb] transition-colors"
          >
            support@WAAW.world
          </a>
        </div>
      </div>
    </div>

    {/* Bottom legal */}
    <div className="relative z-10 mt-8 sm:mt-10 md:mt-12 max-w-[1258px] mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 md:gap-12">
      <p className="[font-family:'Montserrat',Helvetica] font-normal text-[#bbbbbb] text-xs">
        Copyright © 2024 VisionTech. All rights reserved
      </p>
      <div className="flex gap-6">
        {legalLinks.map((link, i) => (
          <a
            key={i}
            href={link.href}
            className="[font-family:'Montserrat',Helvetica] font-normal text-[#bbbbbb] text-xs hover:text-[#82b7dc] transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default FooterSection;
