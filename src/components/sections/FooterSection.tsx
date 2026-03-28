"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, LocateIcon, Mail, MapPin, Phone } from "lucide-react";

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
    {/* glow */}
    <Glow/>

    {/* Divider */}
    <div className="relative z-10 mt-8 md:mt-20 w-full max-w-[1258px] mx-auto h-px [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,1)_40%,rgba(0,0,0,1)_100%)]" />

    {/* Footer Grid */}
    <FooterGrid />
    
  </footer> 
);

export default FooterSection;



function Glow(){
  const [count, setCount] = useState(10);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCount(4); // mobile
      } else {
        setCount(10); // desktop
      }
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
        <div>
      {/* Top-left glow */}
      <div className="absolute top-[-145px] left-[-145px] w-[290px] h-[290px] rounded-full blur-[250px] [background:radial-gradient(50%_50%_at_95%_-3%,rgba(130,183,220,1)_0%)]" />
      {/* Bottom-right glow */}
      <div className="absolute bottom-[-145px] right-[-145px] w-[290px] h-[290px] rounded-full blur-[250px] [background:radial-gradient(50%_50%_at_95%_-3%,rgba(130,183,220,1)_0%)]" />

      {/* Hero card */}
      <div className="relative mx-auto max-w-[1106px] min-h-[400px] md:h-[358px] rounded-[30px] overflow-hidden border border-white/20 backdrop-blur-[2px] backdrop-brightness-[110%] bg-[linear-gradient(11deg,rgba(0,0,0,0.1)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] flex flex-col md:flex-row">
        <div className="absolute z-30 left-0 bottom-0 flex h-[150%] gap-[4px] items-start ">
          {[...Array(count)].map((_, i) => (
            <div
              key={i}
              className="w-[10px] h-full blur-[0.8px]"
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
          className="w-full md:w-[30.95%] h-[200px] sm:h-[200px] md:h-full object-contain"
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
    </div>
  )
}



function FooterGrid() {
  return (
    <footer className="relative  text-white overflow-hidden mt-4 ">
      
      {/* Background Gradient Glow (Matches the bottom-right teal/blue glow in image) */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] pointer-events-none" />

      <div className=" relative z-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          
          {/* Section 1: Brand & Social */}
          <div className="md:col-span-4 flex flex-col justify-center items-center space-y-4">
            <div className="flex items-center justify-center">
              <img src="/logo.png" alt="WaaW Logo" className="w-20 sm:w-32 h-auto" />
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              We design and implement structured digital systems that help businesses 
              scale with clarity, automation and measurable growth.
            </p>
            
            <p className="text-gray-300 italic text-sm">
              "We handle How, you handle WaaW!"
            </p>

            {/* Social Icons - Circular bordered style */}
            <div className="flex gap-4 pt-4">
              {socialIcons.map((icon, i) => (
                <a key={i} href={icon.href} className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-white/10 transition group">
                  <img src={icon.src} alt={icon.alt} className="w-5 h-5 opacity-80 group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </div>

          {/* Vertical Divider (Visible on Desktop) */}
          <div className="hidden md:block md:col-span-1 border-l border-gray-800 h-full ml-auto" />

          {/* Section 2: Links Columns */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            <div className="flex flex-col space-y-4">
              <h4 className="text-lg font-semibold text-gray-200">Company</h4>
              <nav className="flex flex-col space-y-2">
                {['Home', 'About Us', 'Solutions', 'Case Studies', 'Blogs', 'Let\'s Talk'].map((item) => (
                  <Link key={item} href="#" className="text-gray-400 hover:text-white text-sm transition">{item}</Link>
                ))}
              </nav>
            </div>
            
            <div className="flex flex-col space-y-4">
              <h4 className="text-lg font-semibold text-gray-200">Resources</h4>
              <nav className="flex flex-col space-y-2">
                {['Features', 'Pricing', 'Industry', 'Roadmap', 'FAQ'].map((item) => (
                  <Link key={item} href="#" className="text-gray-400 hover:text-white text-sm transition">{item}</Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Section 3: Contact */}
          <div className="md:col-span-3 flex flex-col  space-y-6 ">
            <h4 className="text-lg font-semibold text-gray-200">Let's Talk</h4>
            
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MapPin />
                <span className="text-gray-400 text-sm">Hyderabad, Telangana</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Phone />
                <span className="text-gray-400 text-sm">+91 7702118555</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Mail />
                <span className="text-gray-400 text-sm">support@waave.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Section */}
        <div className="mt-16 pt-8 border-t border-gray-900 flex flex-col md:row items-center justify-between text-[11px] text-gray-500 tracking-wide uppercase">
          <p>Copyright © 2025 WaaW. All rights reserved</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition">Refund Policy</Link>
            <Link href="#" className="hover:text-white transition">Terms and Condition</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

