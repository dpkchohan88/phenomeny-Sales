import React from 'react';
import { ShieldCheck, Lock, Globe, Gauge } from 'lucide-react';
import { cn } from '@/lib/utils';

// Custom SVG Icons for specific badge requirements
const Soc2Icon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IsoIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <circle cx="12" cy="11" r="3" />
    <path d="M12 11l2 2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GdprIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M12 8l.5 1.5h1.5l-1.2 1 .5 1.5-1.3-1-1.3 1 .5-1.5-1.2-1h1.5z" fill="currentColor" stroke="none" transform="scale(0.8) translate(3, 3)" />
    <path d="M16 12l.5 1.5h1.5l-1.2 1 .5 1.5-1.3-1-1.3 1 .5-1.5-1.2-1h1.5z" fill="currentColor" stroke="none" transform="scale(0.6) translate(8, 6)" />
    <path d="M8 12l.5 1.5h1.5l-1.2 1 .5 1.5-1.3-1-1.3 1 .5-1.5-1.2-1h1.5z" fill="currentColor" stroke="none" transform="scale(0.6) translate(-2, 6)" />
  </svg>
);

const HipaaIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M12 2v20" />
    <path d="M12 6c2.5 0 5 1.5 5 4s-2.5 4-5 4-5-1.5-5-4 2.5-4 5-4z" />
    <path d="M17 6l-1-2" />
    <path d="M7 6l1-2" />
    <path d="M12 14c2 0 4 1.5 4 3s-2 3-4 3-4-1.5-4-3 2-3 4-3z" />
  </svg>
);

const Badge = ({ icon: Icon, label, delay }) => (
  <div 
    className="group flex flex-col items-center justify-center p-4 w-full h-[80px] md:h-[120px] rounded-[16px] md:rounded-[20px] border border-white/[0.08] bg-white/[0.01] transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.03]"
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="mb-2 md:mb-3 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 text-white">
      <Icon className="w-8 h-8 md:w-12 md:h-12" />
    </div>
    <span className="text-[10px] md:text-[12px] font-medium text-[#A0A0A0] uppercase tracking-[1px] group-hover:text-white transition-colors duration-300 text-center">
      {label}
    </span>
  </div>
);

const EnterpriseComplianceSection = () => {
  return (
    <section className="relative py-16 md:py-24 px-4 md:px-6 bg-[#0B0D10] border-t border-white/5 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                             linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
      />
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center lg:items-start">
          
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-[40%] flex flex-col items-center lg:items-start text-center lg:text-left pt-0 lg:pt-4">
            <h2 className="text-[24px] md:text-[32px] lg:text-4xl font-bold font-['Space_Grotesk'] text-white mb-3 md:mb-4 tracking-tight leading-[1.1]">
              Enterprise-grade<br className="hidden md:block"/>
              <span className="text-[#9D4EDD] ml-1 md:ml-0">everything</span>
            </h2>
            
            <p className="text-[14px] md:text-[16px] text-[#A0A0A0] leading-relaxed mb-6 max-w-[400px] lg:max-w-none">
              Out of the box security & AI that's even more private than ChatGPT¹
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 mb-8 lg:mb-12">
              <div className="flex items-center gap-2 text-[#808080]">
                <Gauge className="w-4 h-4" />
                <span className="text-[11px] font-bold tracking-widest uppercase">99.99% Uptime</span>
              </div>
              <div className="flex items-center gap-2 text-[#808080]">
                <Globe className="w-4 h-4" />
                <span className="text-[11px] font-bold tracking-widest uppercase">24/7 Support</span>
              </div>
            </div>

            <p className="text-[11px] text-[#505050] max-w-[350px] leading-normal">
              ¹ Phenomeny uses end-to-end encryption and does not train on user data.
            </p>
          </div>

          {/* Right Column: Badges */}
          <div className="w-full lg:w-[60%] mt-4 lg:mt-0">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <Badge icon={Soc2Icon} label="SOC 2 Type II" delay={0} />
              <Badge icon={IsoIcon} label="ISO 27001" delay={100} />
              <Badge icon={GdprIcon} label="GDPR" delay={200} />
              <Badge icon={HipaaIcon} label="HIPAA" delay={300} />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default EnterpriseComplianceSection;