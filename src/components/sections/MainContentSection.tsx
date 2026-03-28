import React from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqItems = [
  {
    id: "item-1",
    question: "What makes WaaW different from other agencies?",
    answer: "Waaw stands out by combining innovative design, cutting-edge technology, and personalized strategies. We focus on delivering measurable results for your business while maintaining a friendly and professional approach.",
  },
  {
    id: "item-2",
    question: "Who do you typically work with?",
    answer: "Waaw works with startups, small to medium-sized businesses, and established enterprises across industries. Whether you need a website, mobile app, or complete digital solution, we tailor our services to your business needs.",
  },
  {
    id: "item-3",
    question: "What kind of solutions does WaaW provide?",
    answer: "Waaw provides full-service web and app development. From responsive websites to custom mobile applications, we deliver high-quality solutions that are both user-friendly and scalable.",
  },
  {
    id: "item-4",
    question: "What is the typical process when starting a project?",
    answer: "Our project process at Waaw begins with understanding your goals, followed by planning, design, development, and rigorous testing. We keep you updated at every stage to ensure your vision is brought to life efficiently.",
  },
  {
    id: "item-5",
    question: "How lon does a project usually take?",
    answer: "Project timelines vary depending on the scope and complexity. We will provide a detailed timeline during the planning phase. Typically, projects range from a few weeks to several months.",
  },
  {
    id: "item-6",
    question: "How can I start a project with WaaW?",
    answer: "Starting a project with Waaw is simple. Contact us via our website or email, share your project details, and our team will guide you through the planning and development process to bring your idea to life.",
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="w-full relative bg-[#0a0a0a] overflow-hidden py-[80px] md:py-[140px]">
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-16 md:gap-10">
          
          {/* Left Column */}
          <div className="flex flex-col items-center justify-center relative w-full md:w-[45%] text-center md:-mt-10">
            <h2 className="text-[#82B7DC] text-[24px] sm:text-[28px] md:text-[34px] font-bold sm:mb-6 tracking-wide [font-family:'Montserrat',Helvetica]">
              FAQ
            </h2>
            <h3 className="text-white text-[20px] sm:text-[24px] md:text-[28px] font-medium mb-5 sm:mb-10 [font-family:'Montserrat',Helvetica]">
              Get Clarity Before You Start
            </h3>

            <Link href="/contact" className="group relative">
              <div className="relative inline-flex items-center justify-center px-10 py-[14px] rounded-[30px] bg-[#679bc2]/30 border border-white/20 hover:bg-[#679bc2]/40 transition-all duration-300 backdrop-blur-md shadow-lg z-10 min-w-[200px]">
                <span className="[font-family:'Montserrat',Helvetica] font-medium text-white text-[16px]">
                  Plan with us
                </span>
              </div>
            </Link>
          </div>

          {/* Right Column / Accordion */}
          <div className="w-full md:w-[55%] flex flex-col">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b-0 border-transparent mb-1"
                >
                  <div className="flex flex-col relative w-full border-b border-white/[0.08]">
                    <AccordionTrigger className="flex flex-1 items-center justify-between py-6 hover:no-underline [&>svg]:hidden group focus:outline-none">
                      <span className="[font-family:'Montserrat',Helvetica] font-normal text-[#a6a6a6] text-[15px] md:text-[17px] text-left pr-6 group-hover:text-white transition-colors duration-300">
                        {item.question}
                      </span>
                      <div className="relative w-[34px] h-[34px] md:w-[38px] md:h-[38px] rounded-full border border-white/20 bg-black/40 flex flex-shrink-0 items-center justify-center transition-transform duration-300 group-data-[state=open]:rotate-45 group-hover:bg-white/10 group-hover:border-white/30">
                         <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 1V13M1 7H13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </AccordionTrigger>
                    
                    <AccordionContent className="[font-family:'Montserrat',Helvetica] font-normal text-[#8c8c8c] text-[14px] md:text-[15px] text-left leading-relaxed pb-6 max-w-[90%]">
                      {item.answer}
                    </AccordionContent>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MainContentSection;
