"use client";
import Image from "next/image";
import DecorativeLines from "../common/DecorativeLines";
import { motion } from "framer-motion";

const floatAnimation = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1], // premium easeOutExpo feel
    },
  },
};

const floatingLoop = {
  animate: {
    y: [0, -8, 0],
    rotate: [0, 1.5, -1.5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
     },
  },
};

/* ---------- helper ProcessCard component (inside same file) ---------- */
/* If you prefer to split into another file you can — I put it here for convenience. */
interface ProcessCardProps {
  title: string;
  // icon: string;
  items: string[];
  align?: "left" | "right";
}

export const ContentWrapperSection = () => {


  return (
    <section className="w-full relative bg-black py-12 md:py-10 px-4 overflow-hidden ">
      <div className="relative mx-auto ">
        <div className="flex justify-center w-full mb-8 md:mb-12">
          <DecorativeLines>
            <h2 className="text-center [font-family:'Montserrat',Helvetica] font-extrabold text-[#82b7dc] text-xl sm:text-2xl md:text-4xl lg:text-5xl tracking-tight leading-snug md:leading-normal mb-4">
              HOW WAAW BUILDS HIGH-IMPACT <br className="hidden md:block" /> DIGITAL PRODUCTS
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
            <div className="relative md:w-[350px] lg:w-[500px] h-[350px] lg:h-[500px]">
              <Image
                src="/Frame 50.png"
                alt="Process Framework"
                fill
                className="object-contain animate-pulse" 
                style={{ animationDuration: '4s' }}
              /> 
            </div>

            {/* Rotating center image - audiencegridm */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 lg:w-48 aspect-square">
              <Image
                src="/audiencegridm.webp"
                alt="Audience Grid"
                fill
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

            {/* icons */}


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



const ProcessCard: React.FC<ProcessCardProps> = ({ title, items = [], align = "left" }) => {
  const isRight = align === "right";
  return (
    <div className={`text-${isRight ? "right" : "left"} space-y-3 w-full max-w-[280px] md:max-w-none md:w-72`}>

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
    <div className="block md:hidden w-full px-4 sm:px-8">
      <div className="grid grid-cols-2 gap-8 md:gap-10">
        <div className="space-y-10">
          <div className="flex justify-center sm:justify-start">
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
          <div className="flex justify-center sm:justify-start">
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
        <div className="space-y-10">
          <div className="flex justify-center sm:justify-start">
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
          <div className="flex justify-center sm:justify-start">
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
    </div>
  );
}











            // <div className="">
            //   {/* Top  */}
            //   <motion.div
            //     className="absolute top-[4%]  left-[44%] lg:top-[4%] lg:left-[48%]"
            //     variants={floatAnimation}
            //     initial="initial"
            //     animate="animate"
            //   >
            //     <motion.div variants={floatingLoop} animate="animate">
            //       {/* SVG */}
            //       <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            //         <path d="M15.733 6.84149C14.8438 7.15911 14.0783 7.73082 13.5384 8.4931C13.0461 9.19185 12.7666 9.98907 12.719 10.8466C9.37856 12.3092 6.64279 14.8763 4.9708 18.1171C3.29881 21.358 2.79235 25.0753 3.53641 28.6453C4.28047 32.2154 6.22977 35.4208 9.05719 37.7238C11.8846 40.0268 15.4181 41.2871 19.0647 41.2933C24.5655 41.2933 29.4121 38.4983 32.261 34.2454L32.6421 35.4079C32.9279 36.1384 33.3884 36.7482 33.9982 37.2405C32.0537 39.6975 29.5333 41.6371 26.6603 42.8875C23.7873 44.1379 20.6503 44.6606 17.5271 44.4091C14.4039 44.1577 11.3908 43.14 8.75481 41.4462C6.11878 39.7523 3.94108 37.4345 2.41454 34.6981C0.888012 31.9617 0.0597536 28.891 0.00311421 25.7581C-0.0535252 22.6252 0.663202 19.5266 2.08983 16.7368C3.51645 13.9469 5.60896 11.552 8.18204 9.76392C10.7551 7.97587 13.7294 6.84991 16.8415 6.48576L15.733 6.84149ZM15.0216 15.055C15.263 15.1927 15.5213 15.3091 15.7966 15.4044L19.1663 16.5161C19.6427 16.6749 20.0873 16.929 20.659 17.4372C20.7374 17.5176 20.8125 17.6023 20.8845 17.6913C19.4425 17.3509 17.9341 17.4208 16.5297 17.893C15.1254 18.3653 13.8812 19.2211 12.9379 20.3636C11.9945 21.5062 11.3897 22.8899 11.1917 24.3583C10.9937 25.8267 11.2105 27.3212 11.8176 28.6728C12.4247 30.0244 13.3978 31.1791 14.6269 32.0065C15.856 32.8339 17.2921 33.3008 18.7727 33.3545C20.2533 33.4082 21.7195 33.0465 23.0053 32.3104C24.2911 31.5743 25.3453 30.493 26.0487 29.189L26.1916 29.4018C26.6998 30.1005 27.3985 30.6087 28.256 30.9263L28.6371 31.0534C27.7378 32.5807 26.4863 33.8708 24.9871 34.8162C23.4878 35.7615 21.7843 36.3346 20.0185 36.4877C18.2528 36.6408 16.476 36.3694 14.8364 35.6962C13.1969 35.023 11.7421 33.9675 10.5933 32.6177C9.44458 31.2679 8.63523 29.663 8.23279 27.9369C7.83034 26.2107 7.84647 24.4133 8.27981 22.6947C8.71316 20.976 9.55117 19.3859 10.7239 18.0569C11.8967 16.728 13.3702 15.6987 15.0216 15.055ZM36.4819 19.057C36.681 19.0552 36.8757 19.1157 37.0386 19.2302C37.2015 19.3447 37.3245 19.5074 37.3902 19.6954L38.181 22.1284C38.4278 22.8666 38.843 23.5373 39.3936 24.0875C39.9443 24.6376 40.6154 25.0521 41.3539 25.2982L43.7835 26.0859L43.8311 26.0986C43.971 26.1484 44.0974 26.2298 44.2005 26.3366C44.3036 26.4434 44.3806 26.5725 44.4255 26.714C44.4704 26.8555 44.482 27.0054 44.4593 27.1521C44.4366 27.2988 44.3803 27.4383 44.2948 27.5596C44.1804 27.7215 44.0183 27.8436 43.8311 27.909L41.4015 28.6967C40.663 28.9427 39.9919 29.3572 39.4413 29.9074C38.8906 30.4575 38.4755 31.1282 38.2287 31.8665L37.4378 34.2994C37.3721 34.487 37.2497 34.6496 37.0875 34.7646C36.9254 34.8796 36.7315 34.9413 36.5327 34.9413C36.3339 34.9413 36.14 34.8796 35.9778 34.7646C35.8157 34.6496 35.6933 34.487 35.6275 34.2994L34.8335 31.8665C34.5887 31.1262 34.1748 30.4532 33.6246 29.9008C33.0744 29.3483 32.4031 28.9317 31.6639 28.684L29.2342 27.8963C29.0944 27.8465 28.968 27.765 28.8649 27.6582C28.7618 27.5515 28.6848 27.4223 28.6399 27.2808C28.595 27.1393 28.5834 26.9894 28.6061 26.8427C28.6287 26.696 28.685 26.5566 28.7705 26.4352C28.885 26.2734 29.0471 26.1512 29.2342 26.0859L31.6639 25.2982C32.3935 25.0458 33.0551 24.6285 33.5971 24.0788C34.1392 23.529 34.5471 22.8615 34.7891 22.1284L35.5799 19.6922C35.6458 19.5059 35.768 19.3446 35.9296 19.2308C36.0912 19.117 36.2842 19.0562 36.4819 19.057ZM19.0647 22.2332C19.907 22.2332 20.7148 22.5678 21.3104 23.1635C21.9061 23.7591 22.2407 24.567 22.2407 25.4093C22.2407 26.2517 21.9061 27.0596 21.3104 27.6552C20.7148 28.2509 19.907 28.5855 19.0647 28.5855C18.2223 28.5855 17.4145 28.2509 16.8189 27.6552C16.2233 27.0596 15.8887 26.2517 15.8887 25.4093C15.8887 24.567 16.2233 23.7591 16.8189 23.1635C17.4145 22.5678 18.2223 22.2332 19.0647 22.2332ZM26.938 4.15551e-05C27.2162 -0.00149327 27.488 0.0840302 27.7152 0.244638C27.9425 0.405246 28.1138 0.632897 28.2052 0.895719L29.3104 4.30056C29.6536 5.33463 30.2339 6.27412 31.0048 7.04399C31.7757 7.81385 32.716 8.39277 33.7505 8.73449L37.1552 9.84297L37.225 9.85885C37.4849 9.95328 37.7094 10.1254 37.868 10.3518C38.0266 10.5783 38.1117 10.8481 38.1117 11.1245C38.1117 11.401 38.0266 11.6708 37.868 11.8972C37.7094 12.1237 37.4849 12.2958 37.225 12.3902L33.8204 13.4987C32.7865 13.8422 31.8467 14.4217 31.0755 15.1913C30.3043 15.9609 29.7229 16.8994 29.3771 17.9326L28.2751 21.3375C28.2057 21.5332 28.092 21.7101 27.9428 21.8544C27.7936 21.9987 27.6129 22.1065 27.4151 22.1693C27.2172 22.232 27.0075 22.2481 26.8024 22.2162C26.5973 22.1843 26.4024 22.1053 26.2329 21.9854L26.1694 21.9378C25.9736 21.7799 25.8253 21.5711 25.7406 21.3343L24.6354 17.9358C24.2947 16.8982 23.7156 15.9549 22.9446 15.1816C22.1735 14.4083 21.2319 13.8265 20.1953 13.4828L16.7875 12.3744C16.5262 12.2814 16.3001 12.1098 16.1403 11.8832C15.9804 11.6565 15.8946 11.386 15.8946 11.1087C15.8946 10.8313 15.9804 10.5608 16.1403 10.3342C16.3001 10.1076 16.5262 9.93598 16.7875 9.84297L20.1921 8.73449C21.2131 8.38179 22.1389 7.79819 22.8975 7.02914C23.656 6.26009 24.2268 5.32633 24.5655 4.30056L25.6707 0.895719C25.7623 0.632381 25.9341 0.404363 26.162 0.24371C26.3899 0.0830558 26.6592 -0.00215857 26.938 4.15551e-05Z" fill="#D9D9D9" />
            //       </svg>
            //     </motion.div>
            //   </motion.div>

            //   {/* middle-left */}
            //   <motion.div
            //     className="absolute top-[46%] left-[29%]"
            //     variants={floatAnimation}
            //     initial="initial"
            //     animate="animate"
            //     transition={{ delay: 0.2 }}
            //   >
            //     <motion.div variants={floatingLoop} animate="animate">
            //       {/* SVG */}
            //       <svg width="43" height="37" viewBox="0 0 43 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            //         <path fill-rule="evenodd" clip-rule="evenodd" d="M30.1529 6.45571C30.0857 10.0211 26.7087 12.9115 22.6103 12.9115C18.5119 12.9115 15.2441 10.0211 15.3114 6.45571C15.3787 2.89031 18.7556 0 22.8539 0C26.9523 0 30.2202 2.89031 30.1529 6.45571ZM13.0867 11.9892C13.0386 14.5359 10.6265 16.6005 7.69914 16.6005C4.77174 16.6005 2.43757 14.5359 2.48562 11.9892C2.53368 9.4425 4.94566 7.37799 7.87316 7.37799C10.8007 7.37799 13.1347 9.4425 13.0867 11.9892ZM0.139109 23.9785C0.196773 20.9225 3.09131 18.445 6.6042 18.445H8.72449C8.9807 18.445 9.23329 18.4581 9.48117 18.4838C8.97286 19.5454 8.68147 20.7092 8.65844 21.9295L8.48057 31.3565H-4.94089e-06L0.139109 23.9785ZM29.0901 18.445L34.9797 18.445L34.9424 20.4195C35.9598 20.7348 36.8984 21.2116 37.7113 21.826L39.6982 20.8375L42.5591 25.2747L40.5734 26.2626C40.6628 26.726 40.7033 27.1962 40.6941 27.6674C40.6855 28.1386 40.6273 28.6088 40.5204 29.0721L42.469 30.0602L39.4404 34.4974L37.4909 33.5088C36.6548 34.1231 35.6981 34.5999 34.6689 34.9152L34.6316 36.89H28.742L28.7793 34.9158C27.7614 34.6006 26.8223 34.1238 26.009 33.5092L24.0234 34.4971L21.1625 30.0599L23.1465 29.0728C23.0569 28.6092 23.0165 28.1388 23.0256 27.6674C23.0346 27.1874 23.0941 26.7176 23.1995 26.262L21.2528 25.2748L24.2813 20.8376L26.2294 21.8256C27.0659 21.211 28.023 20.7341 29.0528 20.4189L29.0901 18.445ZM35.3935 27.6676C35.3615 29.3654 33.7535 30.7418 31.8019 30.7418C29.8502 30.7418 28.2941 29.3654 28.3261 27.6676C28.3581 25.9697 29.9662 24.5934 31.9179 24.5934C33.8695 24.5934 35.4256 25.9697 35.3935 27.6676ZM10.7748 22.134C10.8517 18.0592 14.711 14.756 19.395 14.756H25.7556C27.9176 14.756 29.8773 15.4598 31.3534 16.6183C24.6601 16.9465 19.2628 21.768 19.1515 27.6675C19.1271 28.961 19.3588 30.2027 19.8058 31.3565H10.6008L10.7748 22.134Z" fill="#D9D9D9" />
            //       </svg>
            //     </motion.div>
            //   </motion.div>


            //   {/* Bottom Left */}
            //   <motion.div
            //     className="absolute bottom-[4%] left-[48%]"
            //     variants={floatAnimation}
            //     initial="initial"
            //     animate="animate"
            //     transition={{ delay: 0.4 }}
            //   >
            //     <motion.div variants={floatingLoop} animate="animate">
            //       {/* SVG */}
            //       <svg width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            //         <path d="M8.28931 36.1759C7.49853 37.8848 6.99957 39.0236 2.6003 39.1897C2.72675 34.7763 3.53578 34.3028 5.15571 33.4637C5.83577 33.1112 6.68254 32.673 7.59793 31.9411L6.06606 29.9077C5.3426 30.4852 4.67697 30.7893 4.0334 31.1222C1.33459 32.5212 0.0626252 33.8992 0.0626252 40.469L0.0839754 41.8058L1.32079 41.777C7.99053 41.777 9.23678 40.2106 10.4862 37.5127C10.7598 36.9215 10.9121 36.5219 11.3732 35.7252L9.50729 33.9633C8.94802 34.7566 8.59883 35.5114 8.28931 36.1759ZM27.7631 7.78248C24.9806 7.78248 22.7165 10.1363 22.7165 13.0284C22.7165 15.9218 24.9812 18.2751 27.7631 18.2751C30.545 18.2751 32.8091 15.9212 32.8091 13.0285C32.8091 10.1363 30.5444 7.78248 27.7631 7.78248ZM27.7631 15.6478C26.3741 15.6478 25.2436 14.4725 25.2436 13.0284C25.2436 11.5849 26.3741 10.409 27.7631 10.409C29.1522 10.409 30.2827 11.5849 30.2827 13.0284C30.282 14.4732 29.1522 15.6478 27.7631 15.6478ZM40.2988 1.26895C40.2604 0.616226 39.7629 0.0928788 39.135 0.0444806C39.135 0.0444806 32.0935 -0.489208 25.3193 2.14065C22.8444 3.10142 20.8074 4.62339 18.9063 6.92885C17.3209 8.85108 15.7456 12.3259 14.3553 15.2108C13.8181 16.3246 13.3047 17.3901 12.8694 18.2037H5.87002C5.69213 18.2037 5.51627 18.243 5.35405 18.3189C5.19182 18.3947 5.04691 18.5055 4.92888 18.6439L0.3169 23.8408C0.17192 24.0107 0.0720037 24.2169 0.0269901 24.4392C-0.0180235 24.6614 -0.00658221 24.892 0.0601874 25.1083C0.195444 25.5491 0.544596 25.8827 0.977457 25.9847L8.48516 27.7696C8.99658 28.4262 9.84901 29.4086 11.2129 30.9822L14.0571 34.2602L15.5883 40.9934C15.638 41.2118 15.7409 41.4132 15.8871 41.5783C16.0333 41.7433 16.2179 41.8665 16.4231 41.9359C16.5502 41.9778 16.6817 42 16.8125 42C17.113 42.0002 17.4037 41.8883 17.6316 41.6848L22.2933 36.8639C22.4311 36.7412 22.5418 36.5889 22.6177 36.4176C22.6937 36.2462 22.733 36.0598 22.733 35.8711V29.1215C23.3596 28.7166 24.4706 28.0933 25.5161 27.4851C28.3653 25.8298 32.6181 23.7689 34.3814 22.1391C36.8645 19.8447 37.7691 18.1626 38.6574 15.6759C40.7693 9.76153 40.3202 1.61297 40.2988 1.26895ZM36.297 14.7647C35.5219 16.9342 34.8198 18.2323 32.7092 20.1833C31.1496 21.6235 26.885 23.6915 24.2874 25.2017C22.3485 26.3286 21.1872 26.9866 20.6782 27.4195C20.5337 27.5421 20.4171 27.6966 20.3371 27.8719C20.2572 28.0471 20.2157 28.2387 20.2159 28.4326V35.2692L17.5611 38.302L16.4306 33.3314C16.3818 33.1173 16.2818 32.9196 16.1399 32.7565C13.8261 30.0906 10.3308 26.0605 10.0627 25.7407C9.88595 25.5176 9.64305 25.3617 9.37199 25.2972L3.60816 23.9264L6.43535 20.8198H13.5926C13.8077 20.8198 14.0191 20.7625 14.2068 20.6534C14.3945 20.5443 14.5521 20.387 14.6646 20.1965C15.2182 19.2592 15.8605 17.9263 16.6048 16.3828C17.8649 13.7687 19.4326 10.3108 20.8166 8.63125C22.4517 6.64757 24.1125 5.4016 26.1992 4.59065C30.8426 2.78683 35.6345 2.59716 37.825 2.61413C37.8659 5.02619 37.7785 10.6188 36.297 14.7647Z" fill="#D9D9D9" />
            //       </svg>
            //     </motion.div>
            //   </motion.div>


            //   {/* Middle Right */}
            //   <motion.div
            //     className="absolute top-[45%] right-[28%]"
            //     variants={floatAnimation}
            //     initial="initial"
            //     animate="animate"
            //     transition={{ delay: 0.3 }}
            //   >
            //     <motion.div variants={floatingLoop} animate="animate">
            //       {/* SVG */}
            //       <svg width="38" height="52" viewBox="0 0 38 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            //         <path d="M1.5 5.48667L15.5522 1.5V16.9486L1.5 20.9353V5.48667ZM1.5 27.8288L15.5522 23.8421V39.2907L1.5 43.2774V27.8288ZM22.0372 22.2423L36.0882 18.7755V46.6215L22.0384 50.0882L22.0372 22.2423Z" stroke="#D9D9D9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            //       </svg>
            //     </motion.div>
            //   </motion.div>

            // </div>