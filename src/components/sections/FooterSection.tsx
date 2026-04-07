"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, LocateIcon, Mail, MapPin, Phone } from "lucide-react";

const socialIcons = [
  { src: "/frame-14.svg", alt: "LinkedIn", href: "https://www.linkedin.com/company/waaw-tech-official/posts/?feedView=all" },
  { src: "/frame-15.svg", alt: "x", href: "https://x.com/WaaWTech" },
  { src: "/frame-16.svg", alt: "Instagram", href: "https://www.instagram.com/waaw_tech/?hl=en" },
  { src: "/frame-60.svg", alt: "Facebook", href: "https://www.facebook.com/people/WAAW-Technologies/61583492387843/" },
  { src: "/whatsapp.png", alt: "WhatsApp", href: "https://whatsapp.com/channel/0029VbCghgKLY6dErEU7lX1x" },
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
  { label: "Features", href: "/" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Industry", href: "/industries" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "FAQ", href: "/contact" },
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
    <Glow />

    {/* Divider */}
    <div className="relative z-10 mt-8 md:mt-20 w-full max-w-[1258px] mx-auto h-px [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,1)_40%,rgba(0,0,0,1)_100%)]" />

    {/* Footer Grid */}
    <FooterGrid />

  </footer>
);

export default FooterSection;



function Glow() {
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
        <div className="w-full md:w-[30.95%] h-[200px] sm:h-[200px] md:h-full relative">
          <Image
            className="object-contain"
            src="/audiencegridm.webp"
            alt="WAAW Audience Illustration"
            fill
            sizes="(max-width: 768px) 100vw, 31vw"
          />
        </div>

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
    <footer className="relative text-white overflow-hidden mt-10 ">
      <div className="relative z-10  mx-auto">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Section 1 */}
          <div className="md:col-span-4 flex flex-col space-y-4">
            <Link href="/" aria-label="Go to Home">
              <Image src="/logo.png" alt="Waaw Logo" width={96} height={32} className="w-24" />
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed">
              We design and implement structured digital systems that help businesses
              scale with clarity, automation and measurable growth.
            </p>

            <p className="text-gray-300 italic text-sm">
              "We handle How, you handle WaaW!"
            </p>

            {/* Social */}
            <div className="flex gap-4 pt-3">
              {socialIcons.map((icon, i) => (
                <a
                  key={i}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center hover:bg-white/10 transition p-2 rounded-full"
                  aria-label={`Follow us on ${icon.alt}`}
                >
                  <img src={icon.src} alt="" aria-hidden="true" className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block md:col-span-1 border-l border-gray-800" />

          {/* Section 2 */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <div className="flex flex-col gap-2">
                {companyLinks.map((item) => (
                  <Link key={item.label} href={item.href} className="text-gray-400 hover:text-white text-sm">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <div className="flex flex-col gap-2">
                {resourceLinks.map((item) => (
                  <Link key={item.label} href={item.href} className="text-gray-400 hover:text-white text-sm">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="md:col-span-3 flex flex-col space-y-4">
            <h4 className="text-lg font-semibold">Let's Talk</h4>

            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <MapPin size={16} />
              Hyderabad, Telangana
            </div>

            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Phone size={16} />
              +91 7702118555
            </div>

            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Mail size={16} />
              waaw@visiontech.world
            </div>
          </div>

        </div>

            {/* Divider */}
    <div className="relative z-10 mt-8 md:mt-20 w-full max-w-[1258px] mx-auto h-px [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,1)_40%,rgba(0,0,0,1)_100%)]" />


        {/* Bottom Bar */}
        <div className="mt-12 pt-6  flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 uppercase">
          <p>© 2026 WaaW. All rights reserved</p>

          <div className="flex gap-6">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Refund Policy</Link>
            <Link href="#">Terms & Condition</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

