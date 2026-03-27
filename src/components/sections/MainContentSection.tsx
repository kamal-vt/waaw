import React from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";

const faqItems = [
  {
    id: "item-1",
    question: "What makes Waaw different from other agencies?",
    answer: "Waaw stands out by combining innovative design, cutting-edge technology, and personalized strategies. We focus on delivering measurable results for your business while maintaining a friendly and professional approach.",
  },
  {
    id: "item-2",
    question: "How does the project process work?",
    answer: "Our project process at Waaw begins with understanding your goals, followed by planning, design, development, and rigorous testing. We keep you updated at every stage to ensure your vision is brought to life efficiently.",
  },
  {
    id: "item-3",
    question: "What kind of businesses do you work with?",
    answer: "Waaw works with startups, small to medium-sized businesses, and established enterprises across industries. Whether you need a website, mobile app, or complete digital solution, we tailor our services to your business needs.",
  },
  {
    id: "item-4",
    question: "Can Waaw handle both web and app development?",
    answer: "Yes, Waaw provides full-service web and app development. From responsive websites to custom mobile applications, we deliver high-quality solutions that are both user-friendly and scalable.",
  },
  {
    id: "item-5",
    question: "Do you provide ongoing support after launch?",
    answer: "Absolutely. Waaw offers ongoing maintenance and support services to ensure your website or app runs smoothly. Our team is available for updates, troubleshooting, and performance optimization whenever you need it.",
  },
  {
    id: "item-6",
    question: "How can I start a project with Waaw?",
    answer: "Starting a project with Waaw is simple. Contact us via our website or email, share your project details, and our team will guide you through the planning and development process to bring your idea to life.",
  },
];


export const MainContentSection = (): JSX.Element => {
  return (
    <section className="w-full relative bg-black overflow-hidden py-[30px] md:py-[101px] ">

        {/* --- BACKGROUND BLOBS (FIXED EFFECT) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] -translate-x-1/2 w-[600px] h-[600px] animate-blob">
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


      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex flex-col items-center relative w-full md:w-auto">
            <div className="relative mb-[40px] md:mb-[51px]">
              <>
                <div className="w-24 h-px bg-[#82b7dc] mx-auto mb-2"></div>
                <div className="text-[#82b7dc] text-2xl font-extrabold tracking-wide text-center">
                  FAQS
                </div>
                <div className="w-24 h-px bg-[#82b7dc] mx-auto mt-2"></div>
              </>
            </div>

            <div className="w-full md:w-[462px] [font-family:'Montserrat',Helvetica] font-semibold text-[#bbbbbb] text-[24px] md:text-[32px] text-center tracking-[0] leading-[normal] mb-[40px] md:mb-[86px]">
              Get Clarity Before You Start
            </div>

            <img
              className="hidden md:block absolute w-[208px] h-[209px] top-[-100px] left-[-128px] object-cover animate-spin" style={{ animationDuration: "10s" }}
              alt="Tk"
              src="/tk3.png"
            />

            <div className="hidden md:block absolute top-[246px] left-[-15px] w-[89px] h-[89px] rounded-[44.5px] blur-[55px] [background:radial-gradient(50%_50%_at_95%_-3%,rgba(0,0,0,1)_0%,rgba(255,255,255,1)_100%)] " />

            <Link href="/contact" className="block mt-6 hover:scale-105 transition-transform duration-300">
              <div className="relative inline-flex items-center justify-center w-[200px] h-[59px]">
                <img
                  className="absolute top-0 left-0 w-[200px] h-[59px]"
                  alt="Subtract"
                  src="/subtract.svg"
                />
                <span
                  className="absolute left-5 top-1/2 -translate-y-1/2 [font-family:'Montserrat',Helvetica] font-semibold text-black text-lg z-10 "
                  style={{ width: '100px', textAlign: 'left' }}
                >
                  Plan with us
                </span>
                <img
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 z-10 transition-transform duration-300 group-hover:translate-x-1"
                  alt="Vector"
                  src="/vector-20.svg"
                />
              </div>
            </Link>
          </div>

          <div className="w-full md:w-[629px] max-w-[640px] flex flex-col cursor-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b-0"
                >
                  <div className="flex flex-col relative w-full">
                    <AccordionTrigger className="flex flex-1 items-center justify-between py-0 hover:no-underline [&>svg]:hidden group focus:outline-none">
                      <span className="[font-family:'Montserrat',Helvetica] font-medium text-[#bbbbbb] text-[17px] md:text-xl text-left tracking-[0] leading-[normal] pr-6">
                        {item.question}
                      </span>
                      <div className="relative w-[36px] md:w-[46px] h-9 md:h-11 flex-shrink-0">
                        <div className="absolute inset-0 rounded-full bg-white/5 shadow-[inset_0px_2px_4px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.4)] backdrop-blur-sm transition-all duration-300 group-hover:bg-white/10 group-data-[state=open]:bg-[#82b7dc]/20" />
                        <div className="absolute inset-0 flex items-center justify-center [font-family:'Montserrat',Helvetica] font-light text-white text-[24px] md:text-[32px] transition-transform duration-500 group-data-[state=open]:rotate-45">
                          +
                        </div>
                      </div>
                    </AccordionTrigger>
                    
                    <AccordionContent className="[font-family:'Montserrat',Helvetica] font-normal text-[#a3a3a3] text-[14px] md:text-[16px] text-left leading-relaxed mt-2 md:mt-4 max-w-[90%]">
                      {item.answer}
                    </AccordionContent>
                    
                    <div
                      className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent my-6"
                    />
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
