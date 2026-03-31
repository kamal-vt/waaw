import DecorativeLines from "../common/DecorativeLines";
import ParallaxCard from "../ui/ParallaxCard";

const pricingData = [
  {
    title: "Business Website Solution",
    price: "₹ 1.8 L/-",
    features: [
      "Strategic information architecture",
      "Custom conversion-focused UI/UX",
      "Responsive front-end development",
      "Lead capture & WhatsApp integration",
      "SEO-optimized structural setup",
      "Deployment with performance tuning",
    ],
    highlighted: false,
    smallPriceText: false,
  },
  {
    title: "Website + Automation Solution",
    price: "₹3.5 L - 4.5 L",
    features: [
      "Complete website system development",
      "CRM integration & lead automation",
      "Email & WhatsApp workflow sequences",
      "Conversion tracking & analytics dashboard",
      "Funnel structure & process optimization",
      "Lead segmentation & structured data management",
    ],
    highlighted: true,
    smallPriceText: false,
  },
  {
    title: "Education Platform Solution",
    price: "Starting at ₹ 6.0 L",
    features: [
      "Custom LMS architecture & system design",
      "Admin & instructor dashboards",
      "Automated certification workflows",
      "Student tracking & performance reporting",
      "Basic SEO setup",
      "Delivery within standard timeline",
    ],
    highlighted: false,
    smallPriceText: true,
  },
  {
    title: "HR Automation Solution",
    price: "Starting at ₹ 4.0 L",
    features: [
      "HRMS system development",
      "Interview scheduling workflows",
      "Offer letter & payslip automation",
      "Attendance & leave management",
      "Internal workflow communication setup",
      "Employee onboarding & lifecycle management",
    ],
    highlighted: false,
    smallPriceText: true,
  },
  {
    title: "Growth & Digital Presence Platform",
    price: "Starting at ₹ 1.2 L / Month",
    features: [
      "Digital visibility optimization",
      "Campaign planning & execution",
      "Monthly analytics & reporting",
      "Strategic growth consultation",
      "Conversion optimization & funnel refinement",
      "Audience targeting & performance scaling strategy",
    ],
    highlighted: false,
    smallPriceText: true,
    whiteButton: true,
  },
]

export default function PricingSection () {
  return (
    <section className="relative w-full bg-[#050B14] overflow-hidden py-16 md:py-24 text-white font-sans">
      
      {/* Background glow */}
      <div className="absolute top-[10%] left-[-10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full blur-[120px] bg-[radial-gradient(circle_at_center,rgba(40,110,180,0.15)_0%,transparent_70%)]" />
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full blur-[120px] bg-[radial-gradient(circle_at_center,rgba(40,110,180,0.15)_0%,transparent_70%)]" />

      <div className="relative mx-auto z-10 max-w-7xl px-4 md:px-8">
        
        {/* Header */}
        <header className="flex flex-col items-center mb-16 md:mb-24 text-center">
          <div className="mb-6">
            <DecorativeLines className="text-[#82B7DC] text-[28px] md:text-[34px]">
              PRICING
            </DecorativeLines>
          </div>

          <h2 className="text-[20px] md:text-[28px] font-bold mb-4 underline decoration-dotted decoration-white/40 underline-offset-[8px]">
            Invest in Your Digital Future
          </h2>

          <p className="text-[#a0a0a0] max-w-2xl text-sm md:text-base leading-relaxed">
            Select the plan that aligns with your business objectives.
          </p>
        </header>

        {/* Pricing Cards */}
        <div className="flex flex-col gap-8 items-center">

          {/* Top Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {pricingData.slice(0, 3).map((plan, index) => (
              <PricingCard key={index} plan={plan} />
            ))}
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
            {pricingData.slice(3, 5).map((plan, index) => (
              <PricingCard key={index + 3} plan={plan} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ plan }: { plan: any }) => {
  return (
    <div
      className={`w-full max-w-[380px] mx-auto transition-all duration-500 ${
        plan.highlighted ? "lg:-mt-20 lg:mb-20 scale-105 z-20" : ""
      }`}
    >
      <div
        className={`relative w-full h-full rounded-[30px] md:rounded-[45px] p-4 flex flex-col items-center group ${
          plan.highlighted
            ? "border-2 border-[#4ddbf0] shadow-[0_0_40px_rgba(130,183,220,0.2)]"
            : "border border-white/10"
        }`}
        style={{
          background: `
            radial-gradient(circle at 0% 0%, rgba(27, 92, 230, 0.35) 0%, transparent 50%),
            radial-gradient(circle at 100% 10%, rgba(20, 184, 166, 0.3) 0%, transparent 40%),
            radial-gradient(circle at 40% 50%, rgba(79, 70, 229, 0.2) 0%, transparent 60%),
            radial-gradient(circle at 80% 90%, rgba(6, 182, 212, 0.2) 0%, transparent 50%),
            #060D1A
          `,
        }}
      >
        {/* Title */}
        <h3 className="text-white text-[18px] md:text-[22px] font-bold text-center mb-4 min-h-[60px] flex items-center justify-center">
          {plan.title}
        </h3>

        {/* Glass box */}
        <div className="w-full backdrop-blur-2xl rounded-[25px] md:rounded-[38px] p-4 md:p-6 flex flex-col items-center border border-white/10">

          {/* Price */}
          <div className="mb-6 text-center">
            <span
              className={`font-bold ${
                plan.smallPriceText
                  ? "text-lg md:text-xl"
                  : "text-2xl md:text-3xl"
              }`}
            >
              {plan.price}
            </span>
          </div>

          {/* Button */}
          <button
            className={`w-full max-w-[200px] py-3 rounded-full font-semibold text-sm transition ${
              plan.whiteButton
                ? "bg-white text-black"
                : "border border-white/30 hover:bg-white/10"
            }`}
          >
            Find Your Plan
          </button>

          {/* Features */}
          <div className="w-full mt-6 pt-4 border-t border-white/10">
            <p className="text-xs md:text-sm mb-4 opacity-70 uppercase">
              Everything You Get
            </p>

            <ul className="space-y-3">
              {plan.features.map((feature: string, idx: number) => (
                <li key={idx} className="flex gap-2 text-sm text-white/80">
                  <div className="mt-[3px] w-[18px] h-[18px] rounded-full bg-white flex items-center justify-center shrink-0">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4L3.5 6.5L9 1" stroke="#112445" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>{feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};