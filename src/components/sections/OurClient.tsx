"use client";
import React from "react";
import Image from "next/image";
import DecorativeLines from "../common/DecorativeLines";

interface TrustedCompany {
  name: string;
  Logo: string;
  review?: string;
  link?: string;
}

export const TRUSTEDBYCOMPANY: TrustedCompany[] = [
  {
    name: "derive",
    Logo: "/partners/derive.webp",
    link: "https://www.derivesoftech.com/",
  },
  {
    name: "TrendyVibez",
    Logo: "/partners/trendy_vibes.webp",
    link: "https://www.trendyvibez.in/",
  },
  {
    name: "Clinicamapletree Analytics",
    Logo: "/partners/clinica-mapletree.webp",
    link: "https://clinicamapletreecro.com/",
  },
  {
    name: "DogoCares",
    Logo: "/partners/dogocares.webp",
    link: "https://dogocares.com/",
  },
  {
    name: "arpad",
    Logo: "/partners/arpad.webp",
    link: "https://www.arpad.in/",
  },
  {
    name: "ransh",
    Logo: "/partners/ransh.webp",
    link: "https://ranshpharma.in/",
  },
  {
    name: "BRCWeb",
    Logo: "/partners/brc.webp",
    link: "https://brcwebhelper.com/",
  },
];

const OurClient = () => {
  return (
    <section className="w-full bg-black py-16 sm:py-20 px-4 overflow-hidden">
      <div className="mx-auto">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <DecorativeLines className="mb-6 sm:mb-8">
            <h2 className="font-['Montserrat'] font-bold text-[#82B7DC] text-[20px] sm:text-[28px] md:text-[34px] tracking-widest uppercase">
              Trusted By Clients
            </h2>
          </DecorativeLines>

          <p className="text-[#9e9e9e] mt-3 text-xs sm:text-sm md:text-[15px] max-w-xl md:max-w-2xl mx-auto">
            Businesses that trust us to scale, automate, and grow faster.
          </p>
        </div>
        

        {/* Slider */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-4 sm:gap-6 animate-scroll">

            {[...TRUSTEDBYCOMPANY, ...TRUSTEDBYCOMPANY].map((company, index) => (
              <button
                key={index}
                onClick={() => window.open(company.link, "_blank")}
                className="
                  min-w-[160px] sm:min-w-[200px] md:min-w-[240px]
                  h-[100px] sm:h-[120px] md:h-[140px]
                  px-3 py-2
                  my-2 group relative bg-white border border-black 
                  rounded-xl sm:rounded-2xl 
                  flex justify-center items-center
                  transition-all duration-300 
                  hover:-translate-y-2 hover:border-[#82B7DC]/40
                "
              >
                <div className="relative w-[120px] sm:w-[160px] md:w-[200px] h-full">
                  <Image
                    src={company.Logo}
                    alt={company.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 18s linear infinite;
        }

        @media (min-width: 640px) {
          .animate-scroll {
            animation-duration: 22s;
          }
        }

        @media (min-width: 1024px) {
          .animate-scroll {
            animation-duration: 28s;
          }
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default OurClient;