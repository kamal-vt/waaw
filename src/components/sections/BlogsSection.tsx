"use client";
import Image from "next/image";
import ParallaxCard from "../ui/ParallaxCard";
import DecorativeLines from "../common/DecorativeLines";

const blogCards = [
  {
    title: "Design That Drives Engagement",
    description: "Explore how thoughtful UI/UX design shapes user behavior and builds lasting digital experiences.",
  },
  {
    title: "Smarter Apps for Modern Business",
    description: "Explore the strategies and tech behind scalable, high-performing apps.",
  },
  {
    title: "The Future of Digital Innovation",
    description: "Discover how AI, automation, and new tools are transforming brand growth online.",
  },
];

export const BlogsSection = ({ topOffset = false }: { topOffset?: boolean }) => {
  return (
    <section className={`relative w-full bg-black py-20 px-4 overflow-hidden ${topOffset ? "pt-32" : ""}`}>
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] bg-[#82B7DC]/10" />
      </div>

      <div className="relative w-[80%] mx-auto z-10">
        <div className="flex flex-col items-center">

          {/* Header */}
          <div className="flex flex-col items-center mb-16">
            <DecorativeLines className="text-[#82B7DC] text-2xl font-bold tracking-[0.2em] mb-6">
              BLOGS
            </DecorativeLines>
            <h3 className="font-['Montserrat'] font-bold text-white text-3xl md:text-4xl text-center mb-6">
              Insights That Inspire Innovation
            </h3>
            <p className="font-['Montserrat'] text-[#bbbbbb] text-center max-w-3xl leading-relaxed text-sm md:text-base">
              Explore the latest in design, development, and digital strategy. At
              WAAW, we share ideas, trends, and expert perspectives that help
              businesses stay ahead in the ever-evolving digital world.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 w-full ">
            {blogCards.map((card, index) => (
              <BlogCard key={index} card={card} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;

function BlogCard({ card, index }: { card: any; index: number }) {
  return (
    <div key={index} className="flex flex-col items-center w-[280px] sm:w-[310px]">
      <ParallaxCard intensity={10} className="w-full">
        <div className="relative w-full group flex items-center justify-center">
          {/* The Background Image from your design */}
          <Image
            src="/blogcard.png"
            alt="Card Background"
            width={310}
            height={400}
            className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.03]"
          />

          {/* Content Overlay */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-start text-center pt-[10%] px-4 group-hover:scale-[1.03] transition-transform duration-700">
            {/* Title inside the card */}
            <h4 className="font-['Montserrat'] font-bold text-white text-[22px] md:text-[26px] leading-[1.3] mb-5 tracking-wide drop-shadow-md">
              {card.title}
            </h4>

            {/* Description centered below title */}
            <p className="font-['Montserrat'] font-medium text-[#c4c4c4] text-sm md:text-[15px] leading-relaxed max-w-[90%] md:max-w-[85%]">
              {card.description}
            </p>

            {/* Bottom Icon Section (The simple sphere in the U-shape notch) */}
            <div className="absolute bottom-[5.2%] md:bottom-[5.3%]   animate-spin">
              <div className="w-[48px] h-[48px] sm:w-[50px] sm:h-[50px] md:w-[54px] md:h-[54px] rounded-full bg-gradient-to-br from-[#77B1E4] via-[#407BBE] to-[#122b40] shadow-[inset_-3px_-3px_8px_rgba(0,0,0,0.4),_0_4px_10px_rgba(64,123,190,0.4)]" />
            </div>
          </div>
        </div>
      </ParallaxCard>
    </div>
  );
}