import React from "react";

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
    price: "Starting at ₹ 6 L",
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
    price: "Starting at ₹ 4 L",
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
];

export const PricingSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#050B14] overflow-hidden py-24 min-h-screen text-white font-sans">
      {/* Background glow effects */}
      <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[150px] bg-[radial-gradient(circle_at_center,rgba(40,110,180,0.15)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[150px] bg-[radial-gradient(circle_at_center,rgba(40,110,180,0.15)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-[40%] left-[20%] w-[800px] h-[800px] rounded-full blur-[200px] bg-[radial-gradient(circle_at_center,rgba(40,140,180,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-12 z-10">
        {/* Header */}
        <header className="flex flex-col items-center mb-20 text-center">
          <div className="flex items-center justify-center gap-6 mb-8 mt-10">
            <div className="flex flex-col items-center">
              <div className="w-[1px] h-6 bg-gradient-to-t from-[#82b7dc] to-transparent relative">
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_12px_#fff]" />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#95C8EC] tracking-[0.2em] uppercase [font-family:'Montserrat',Helvetica]">
              PRICING
            </h1>
            <div className="flex flex-col items-center">
              <div className="w-[1px] h-6 bg-gradient-to-t from-[#82b7dc] to-transparent relative">
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_12px_#fff]" />
              </div>
            </div>
          </div>
          
          <h2 className="text-[28px] md:text-[34px] font-bold mb-6 tracking-wide underline decoration-dotted decoration-white/40 underline-offset-[10px] [font-family:'Montserrat',Helvetica]">
            Invest in Your Digital Future
          </h2>
          
          <p className="text-[#a0a0a0] max-w-2xl mx-auto text-sm md:text-[15px] leading-relaxed font-medium mt-4">
            Select the plan that aligns with your business objectives. Each package is designed
            to provide reliable, scalable, and high-quality digital solutions.
          </p>
        </header>

        {/* Pricing Cards */}
        <div className="flex flex-col items-center gap-8 lg:gap-12">
          {/* Top Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full max-w-6xl mx-auto items-stretch lg:items-center">
            {pricingData.slice(0, 3).map((plan, index) => (
              <PricingCard key={index} plan={plan} />
            ))}
          </div>

          {/* Bottom Row - 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full max-w-[800px] mx-auto items-stretch">
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
      className={`relative rounded-[32px] p-[1px] overflow-hidden transition-all duration-300 hover:-translate-y-2 flex flex-col h-full ${
        plan.highlighted ? "lg:-mt-8 lg:mb-8 z-20" : "z-10"
      }`}
      style={{
        background: "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)",
      }}
    >
      <div className={`relative h-full rounded-[31px] overflow-hidden flex flex-col ${
        plan.highlighted ? "bg-gradient-to-b from-[#1C3A6A] to-[#0A111E]" : "bg-gradient-to-b from-[#112445] to-[#070C15]"
      }`}>
        {/* Glow Effects inside card */}
        <div className="absolute top-0 right-0 w-[80%] h-[30%] bg-blue-400/10 blur-[60px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[90%] h-[50%] bg-[#40c9ff]/15 blur-[60px] pointer-events-none" />
        
        {/* Header Section */}
        <div className="relative pt-10 px-8 pb-8 text-center z-10 flex-shrink-0">
          <h3 className="text-[18px] md:text-[20px] font-semibold text-white/95 mb-6 min-h-[56px] flex items-center justify-center leading-snug">
            {plan.title}
          </h3>
          <div className="mb-8 min-h-[40px] flex items-center justify-center">
            <span
              className={`font-bold text-white tracking-wide ${
                plan.smallPriceText ? "text-lg md:text-[22px]" : "text-[26px] md:text-[28px]"
              }`}
            >
              {plan.price}
            </span>
          </div>
          <button
            className={`w-full py-3 px-6 rounded-full font-semibold text-[15px] transition-all duration-300 shadow-xl ${
              plan.whiteButton
                ? "bg-white text-black hover:bg-gray-100 shadow-white/10"
                : "bg-transparent text-white border border-white/30 hover:bg-white/10 shadow-black/20"
            }`}
          >
            Find Your Plan
          </button>
        </div>

        {/* Features Section */}
        <div className="relative p-8 pt-6 flex-grow z-10 flex flex-col border-t border-white/5 bg-black/10">
          <p className="text-[14px] text-white/90 mb-5 font-semibold tracking-wide">Everything You Get</p>
          <ul className="space-y-4 flex-grow">
            {plan.features.map((feature: string, idx: number) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="mt-[3px] w-[18px] h-[18px] rounded-full bg-white flex items-center justify-center shrink-0">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4L3.5 6.5L9 1" stroke="#112445" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-[14px] text-white/80 leading-relaxed font-medium">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
