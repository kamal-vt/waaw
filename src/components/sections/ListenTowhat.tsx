import React from "react";
import ParallaxCard from "../ui/ParallaxCard";
import DecorativeLines from "../common/DecorativeLines";

const testimonials = [
  {
    quote: "WaaW didn't just build our website \u2014 they structured our entire lead system. Within weeks, our inquiry quality improved and follow-ups became fully automated. The clarity in their execution is what truly stands out.",
    name: "Rohan Mehra",
    title: "Founder, Elevate Consulting",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "WaaW didn't just build our website \u2014 they structured our entire lead system. Within weeks, our inquiry quality improved and follow-ups became fully automated. The clarity in their execution is what truly stands out.",
    name: "Ananya Kapoor",
    title: "Founder, Elevate Consulting",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "WaaW didn't just build our website \u2014 they structured our entire lead system. Within weeks, our inquiry quality improved and follow-ups became fully automated. The clarity in their execution is what truly stands out.",
    name: "Rohan Mehra",
    title: "Director, Zenith Innovations",
    image: "https://randomuser.me/api/portraits/men/55.jpg"
  }
];

export const ListenTowhat = () => {
  return (
    <section className="relative w-full bg-black py-20 px-4 overflow-hidden">
      {/* Container */}
      <div className="relative mx-auto z-10 flex flex-col items-center">
        
        {/* Decorative Top Title Area */}
        <div className="relative flex flex-col items-center mb-16 w-full text-center">
          
          <div className="relative inline-block text-center mb-6 mt-4">

            <DecorativeLines>
            <h2 className="font-['Montserrat'] font-bold text-[#82B7DC] text-[20px] sm:text-[28px] md:text-[34px] tracking-widest uppercase z-10  drop-shadow-md">
              LISTEN TO WHAT OUR PARTNERS SAY
            </h2>
            </DecorativeLines>
          </div>

          <p className="font-['Montserrat'] text-[#c4c4c4] text-center max-w-3xl text-sm md:text-[15px] leading-relaxed px-4">
            Discover how we empower businesses to scale through automation and precision engineering. 
            <br className="hidden md:block" />
            Our partners share their experiences with our strategic solutions and technical excellence.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[1050px]">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center w-full h-full">
              <ParallaxCard intensity={10} className="w-full h-full">
                {/* Outer Glow & Border Wrapper */}
                <div className="relative w-full h-full rounded-[40px] p-[2px] bg-gradient-to-b from-[#82B7DC]/60 via-white/5 to-transparent shadow-[0_-10px_30px_-15px_rgba(130,183,220,0.4)] group overflow-hidden">
                  
                  {/* Subtle top inner edge gleam */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[2px] bg-gradient-to-r from-transparent via-[#82B7DC]/80 to-transparent blur-[2px] opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Inner dark smoky mesh card */}
                  <div 
                    className="relative w-full h-full backdrop-blur-3xl rounded-[38px] p-8 md:p-10 flex flex-col justify-between z-10 border border-white/5"
                    style={{
                      background: `
                        radial-gradient(circle at 0% 0%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
                        radial-gradient(circle at 100% 0%, rgba(255, 255, 255, 0.08) 0%, transparent 40%),
                        radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 60%),
                        radial-gradient(circle at 80% 90%, rgba(255, 255, 255, 0.12) 0%, transparent 50%),
                        #0A0A0A
                      `
                    }}
                  >
                    
                    {/* Top Section with Quote Text */}
                    <div className="relative">
                      {/* Enormous White Quote Icon */}
                      <div className="text-white text-[90px] md:text-[110px] font-['Georgia'] font-bold leading-[0.5] mb-4 md:mb-6 pt-4 text-left drop-shadow-lg opacity-95">
                        “
                      </div>

                      {/* Italic Testimonial Text */}
                      <p className="font-['Montserrat'] italic text-[#b5b5b5] text-[15px] md:text-[16px] leading-[1.8] font-medium pr-2">
                        "{testimonial.quote}"
                      </p>
                    </div>

                    {/* Bottom Profile Section */}
                    <div className="flex items-center justify-between w-full mt-12">
                      <div className="flex flex-col gap-1">
                        <h4 className="font-['Montserrat'] font-bold text-white text-[16px] tracking-wide">
                          {testimonial.name}
                        </h4>
                        <p className="font-['Montserrat'] text-[12px] text-[#8e8e8e] font-medium italic">
                          {testimonial.title}
                        </p>
                      </div>
                      
                      {/* Avatar Wrapper with glow */}
                      <div className="relative w-[60px] h-[60px] rounded-full mt-1 shrink-0 overflow-visible">
                        <div className="absolute inset-[-3px] rounded-full bg-gradient-to-tr from-transparent via-[#ffffff40] to-white/80 opacity-60 pointer-events-none" />
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="relative w-full h-full object-cover rounded-full z-10 border border-transparent shadow-lg"
                        />
                      </div>
                    </div>
            
                  </div>

                  {/* Hover background ambient shift */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#82B7DC]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0 mix-blend-screen" />
                </div>
              </ParallaxCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListenTowhat;
