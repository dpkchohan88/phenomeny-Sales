import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MetricItem = ({ value, label, description }) => (
  <div className="flex flex-col items-center text-center relative group p-4">
    <div className="text-[36px] md:text-[40px] lg:text-[48px] font-bold text-white mb-2 font-['Space_Grotesk'] leading-tight">
      {value}
    </div>
    <div className="text-[11px] md:text-[12px] font-bold text-[#9D4EDD] uppercase tracking-[1px] mb-2 md:mb-3">
      {label}
    </div>
    <p className="text-[13px] md:text-[14px] text-[#A0A0A0] leading-relaxed max-w-[200px]">
      {description}
    </p>
  </div>
);

const FinalCTASection = () => {
  return (
    <section className="relative py-16 md:py-[100px] lg:py-[140px] px-4 md:px-6 bg-[#0B0D10] overflow-hidden">
      {/* Background Grid Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                             linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
      />

      {/* Radial Glow behind Headline */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[400px] bg-[rgba(147,78,221,0.08)] blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1000px] mx-auto relative z-10 flex flex-col items-center">
        
        {/* Main Heading */}
        <h2 className="text-[28px] md:text-[36px] lg:text-[52px] font-bold font-['Space_Grotesk'] text-white text-center leading-[1.15] mb-4 md:mb-6 tracking-tight">
          It's like adding an operations team — <br className="hidden md:block" />
          without hiring one.
        </h2>
        
        {/* Supporting Paragraph */}
        <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[#A0A0A0] text-center max-w-[700px] leading-[1.6] mb-0 px-2">
          Phenomeny connects your existing systems and quietly handles coordination, visibility, and execution — so teams move faster, leaders stay informed, and operations scale without extra overhead.
        </p>

        {/* Metrics Card */}
        {/* Mobile: 1 col, Tablet: 2 cols, Desktop: 4 cols */}
        <div 
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 md:gap-y-10 md:gap-x-10 lg:gap-x-[60px] 
                     bg-white/[0.05] border border-white/[0.08] rounded-[24px] 
                     backdrop-blur-[18px] backdrop-saturate-[110%]
                     shadow-[inset_0_0_20px_rgba(255,255,255,0.04),0_12px_40px_rgba(0,0,0,0.4)]
                     p-6 md:p-10 lg:p-[60px_40px] mt-10 md:mt-[60px] transition-all duration-300
                     hover:border-white/[0.12] hover:shadow-[inset_0_0_25px_rgba(255,255,255,0.06),0_15px_50px_rgba(0,0,0,0.5)]"
        >
          <MetricItem 
            value="Up to 4×"
            label="PRODUCTIVITY"
            description="Less coordination. More execution."
          />
          <MetricItem 
            value="Weeks saved"
            label="EVERY QUARTER"
            description="Reporting, follow-ups, and handoffs automated."
          />
          <MetricItem 
            value="Single source"
            label="OF TRUTH"
            description="Across teams, tools, and workflows."
          />
          <MetricItem 
            value="Fast"
            label="TIME TO VALUE"
            description="No rip-and-replace. Use what you already have."
          />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-10 md:mt-[60px] w-full sm:w-auto px-4 md:px-0">
          <Link 
            to="/contact" 
            className="w-full sm:w-auto min-h-[44px] px-4 py-2 text-sm md:px-6 md:py-2.5 md:text-base lg:px-7 lg:py-3 group relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#9D4EDD] to-[#FF1493] text-white font-bold shadow-[0_0_24px_rgba(147,78,221,0.4)] transition-all duration-300 hover:brightness-110 hover:-translate-y-[2px] hover:shadow-[0_0_28px_rgba(147,78,221,0.4)] flex items-center justify-center text-center"
          >
             Discuss Your Business Setup
          </Link>
          
          <Link 
            to="/contact" 
            className="w-full sm:w-auto min-h-[44px] px-4 py-2 text-sm md:px-6 md:py-2.5 md:text-base lg:px-7 lg:py-3 rounded-[20px] border border-white/20 text-[#D0D0D0] hover:text-white hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2 bg-transparent text-center"
          >
            See how it works <ArrowRight size={14} />
          </Link>
        </div>

        {/* Trust Line */}
        <p className="text-[12px] md:text-[13px] text-[#909090] text-center leading-[1.5] max-w-[600px] mt-8 md:mt-[40px] px-4">
          Trusted by healthcare, professional services, manufacturing, education, and service-led businesses.
        </p>

        {/* Footer Transition Text */}
        <div className="w-full pt-8 md:pt-[40px] border-t border-white/[0.04] mt-10 md:mt-[60px]">
          <p className="text-[11px] md:text-[12px] text-[#606060] text-center tracking-[1px] uppercase font-normal">
            SECURITY-FIRST · PRIVACY-FOCUSED · BUILT FOR SCALE
          </p>
        </div>

      </div>
    </section>
  );
};

export default FinalCTASection;