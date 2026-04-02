import React from "react";
import DecorativeLines from "../common/DecorativeLines";

export const ContentWrapperSection = () => {
  return (
    <section className="w-full relative bg-black py-12 md:py-10 px-4 overflow-hidden ">
      <div className="relative mx-auto ">
        <div className="flex justify-center w-full mb-10">
          <DecorativeLines>
            <h2 className="text-center [font-family:'Montserrat',Helvetica] font-extrabold text-[#82b7dc] text-2xl md:text-4xl lg:text-5xl tracking-[0] leading-normal mb-4 md:mb-6">
              HOW WAAW BUILDS HIGH- <br /> IMPACT DIGITAL PRODUCTS
            </h2>
          </DecorativeLines>
        </div>


        {/* Description text */}
        <p className="text-center [font-family:'Montserrat',Helvetica] font-medium text-[#bbbbbb] text-sm md:text-base lg:text-lg md:max-w-[800px] mx-auto leading-relaxed mb-12 md:mb-16">
          From initial ideas to a polished final product, we guide every step with creativity and precision.
          Our process ensures seamless design, development, and delivery for impactful digital experiences.
        </p>

        {/* ===== Main visual + desktop positioned process cards ===== */}
        <div className="relative w-3/5  mx-auto mb-12 md:mb-16 ">
          {/* Visual container: gives a fixed-ish area on md+ so cards can be positioned around it */}
          <div className="relative  md:w-full  mx-auto flex items-center justify-center">
            {/* Frame-50 background image */}
            <img
              src="/Frame 51.png"
              alt="Process Framework"
              className="md:w-[350px] lg:w-[500px] object-contain animate-pulse" style={{ animationDuration: '4s' }}
            />

            {/* Rotating center image - audiencegridm */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 lg:w-48 aspect-square">
              <img
                src="/audiencegridm.png"
                alt="Audience Grid"
                className="object-contain animate-spin-slow"
              />
            </div>

            {/* ---------- Desktop absolute positioned process cards (md+) ---------- */}
            {/* Hidden on small screens, visible on md+ */}
            <div className="hidden md:block">
              {/* Top Left */}
              <div className="absolute left-2 xl:left-14 top-2 xl:top-10 w-84 lg:w-72">
                <ProcessCard
                  title="Envision"
                  // icon="/frame-1.svg"
                  items={[
                    "Define goals",
                    "Research audience",
                    "Plan features",
                    "Set the vision",
                  ]}
                />
              </div>

              {/* Top Right */}
              <div className="absolute -right-48  xl:-right-36 top-2 xl:top-10 w-84 lg:w-72 text-right ">
                <ProcessCard
                  title="Design"
                  // icon="/frame-47.svg"
                  align="left"
                  items={[
                    "Wireframes & flows",
                    "UI/UX layouts",
                    "Visual interfaces",
                    "Interactive prototypes",
                  ]}
                />
              </div>

              {/* Bottom Left */}
              <div className="absolute left-2 xl:left-14 bottom-0 w-84 lg:w-72">
                <ProcessCard
                  title="Elevate"
                  // icon="/frame-39.svg"
                  items={[
                    "Refine design",
                    "Optimize usability",
                    "Ensure responsiveness",
                    "Enhance features",
                  ]}
                />
              </div>

              {/* Bottom Right */}
              <div className="absolute -right-48 xl:-right-36 bottom-0  text-right ">
                <ProcessCard
                  title="Unleash"
                  // icon="/frame-40.svg"
                  align="left"
                  items={[
                    "Finalize product",
                    "Test & QA",
                    "Launch smoothly",
                    "Provide support",
                  ]}
                />
              </div>
            </div>
            <div className="hidden md:block">
              {/* Top Left */}
              <div className="absolute left-2 xl:left-14 top-4 xl:top-10 w-84 lg:w-72">

              </div>

              {/* Top Right */}
              <div className="absolute -right-48  xl:-right-36 top-4 xl:top-10 w-84 lg:w-72 text-right ">

              </div>

              {/* Bottom Left */}
              <div className="absolute left-2 xl:left-14 bottom-0 w-84 lg:w-72">

              </div>

              {/* Bottom Right */}
              <div className="absolute -right-48 xl:-right-36 bottom-0  text-right ">

              </div>
            </div>
          </div>
        </div>

        {/* ===== Mobile / small screens ===== */}
        <MobileView />
      </div>

      {/* small CSS for slow-spin (kept) */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ContentWrapperSection;

/* ---------- helper ProcessCard component (inside same file) ---------- */
/* If you prefer to split into another file you can — I put it here for convenience. */
interface ProcessCardProps {
  title: string;
  // icon: string;
  items: string[];
  align?: "left" | "right";
}

const ProcessCard: React.FC<ProcessCardProps> = ({ title, items = [], align = "left" }) => {
  const isRight = align === "right";
  return (
    <div className={`text-${isRight ? "right" : "left"} space-y-3 w-64 md:w-72`}>

      <h3 className="[font-family:'Montserrat',Helvetica] font-semibold text-[#bbbbbb] text-lg md:text-xl">
        {title}
      </h3>
      <ul className="space-y-2 text-[#bbbbbb] text-sm md:text-base">
        {items.map((it) => (
          <li key={it} className={`flex items-start ${isRight ? "justify-end" : "justify-start"}`}>
            {/* dot */}
            <span className={`w-1.5 h-1.5 bg-[#82b7dc] rounded-full mt-2 mr-2 flex-shrink-0 ${isRight ? "order-2 ml-2 mr-0" : ""}`}></span>
            <span className={`${isRight ? "text-right" : ""}`}>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};




function MobileView() {
  return (
    <div className="block md:hidden flex flex-row items-center justify-center gap-10 w-full ">
      <div>
        <div className="flex justify-center sm:justify-start w-[150px] mb-10">
          <ProcessCard
            title="Envision"
            items={[
              "Define goals",
              "Research audience",
              "Plan features",
              "Set the vision",
            ]}
          />
        </div>
        <div className="flex justify-center sm:justify-start  w-[150px]">
          <ProcessCard
            title="Design"
            items={[
              "Wireframes & flows",
              "UI/UX layouts",
              "Visual interfaces",
              "Interactive prototypes",
            ]}
          />
        </div>
      </div>
      <div>
        <div className="flex justify-center sm:justify-start  w-[150px] mb-10">
          <ProcessCard
            title="Elevate"
            items={[
              "Refine design",
              "Optimize usability",
              "Ensure responsiveness",
              "Enhance features",
            ]}
          />
        </div>
        <div className="flex justify-center sm:justify-start  w-[150px]">
          <ProcessCard
            title="Unleash"
            items={[
              "Finalize product",
              "Test & QA",
              "Launch smoothly",
              "Provide support",
            ]}
          />
        </div>
      </div>
    </div>
  );
}