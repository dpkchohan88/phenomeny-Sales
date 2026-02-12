import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// --- Custom SVG Icons (Redesigned - ClickUp Style) ---

const HealthcareIcon = ({ className, style }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    {/* Medical Cross Vertical */}
    <path d="M16 5V27" strokeLinecap="round" strokeLinejoin="round" />
    {/* Heartbeat Wave acting as Horizontal line */}
    <path d="M4 16H9L12 11L18 21L21 16H28" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ServicesIcon = ({ className, style }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    {/* Upward Arrow */}
    <path d="M16 22V12" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 16L16 12L20 16" strokeLinecap="round" strokeLinejoin="round" />
    {/* Briefcase Body */}
    <rect x="5" y="9" width="22" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Briefcase Handle */}
    <path d="M11 9V6C11 5.44772 11.4477 5 12 5H20C20.5523 5 21 5.44772 21 6V9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MultiLocationIcon = ({ className, style }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    {/* Connections */}
    <path d="M11 12L13.5 14.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 12L18.5 14.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 23V20" strokeLinecap="round" strokeLinejoin="round" />
    {/* Main Hub */}
    <circle cx="16" cy="17" r="4" strokeLinecap="round" strokeLinejoin="round" />
    {/* Satellites */}
    <circle cx="8" cy="9" r="3" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="24" cy="9" r="3" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="16" cy="26" r="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const EnterpriseIcon = ({ className, style }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    {/* Overlapping Circles */}
    <circle cx="11" cy="16" r="7" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="21" cy="16" r="7" strokeLinecap="round" strokeLinejoin="round" />
    {/* Connection Node */}
    <circle cx="16" cy="16" r="2" fill="currentColor" className="opacity-20" />
    <path d="M16 9V7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 25V23" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const RevenueIcon = ({ className, style }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    {/* Funnel Shape */}
    <path d="M5 6H27L19 18V26H13V18L5 6Z" strokeLinecap="round" strokeLinejoin="round" />
    {/* Trend Arrow */}
    <path d="M22 22L28 14" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M28 14H24" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M28 14V18" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ProductIcon = ({ className, style }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    {/* Rocket Body */}
    <path d="M16 3L22 13V24H10V13L16 3Z" strokeLinecap="round" strokeLinejoin="round" />
    {/* Fins */}
    <path d="M10 24H7V19L10 15" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 24H25V19L22 15" strokeLinecap="round" strokeLinejoin="round" />
    {/* Window */}
    <circle cx="16" cy="14" r="2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Speed Lines */}
    <path d="M4 10V16" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M28 10V16" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BeforeAfterIcon = ({ className, style }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    {/* Left Panel (Before) */}
    <rect x="3" y="7" width="10" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Right Panel (After) */}
    <rect x="19" y="7" width="10" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Double Headed Arrow */}
    <path d="M14 16H18" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 14L13 16L15 18" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 14L19 16L17 18" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CaseStudiesIcon = ({ className, style }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    {/* Document Shape */}
    <path d="M8 4H20L25 9V28H8V4Z" strokeLinecap="round" strokeLinejoin="round" />
    {/* Checkmark */}
    <path d="M12 16L15 19L21 12" strokeLinecap="round" strokeLinejoin="round" />
    {/* Text Lines */}
    <path d="M12 23H20" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" />
  </svg>
);

const ImpactIcon = ({ className, style }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    {/* Chart Bars */}
    <path d="M8 26V18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
    <path d="M16 26V12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
    <path d="M24 26V6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
    {/* Upward Arrow */}
    <path d="M4 22L28 4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="opacity-50" />
    <path d="M28 4V10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="opacity-50" />
    <path d="M28 4H22" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="opacity-50" />
  </svg>
);


// --- Styles for Glassmorphism & Animation ---
const styles = `
  /* Purple Column Styles */
  .trans-item-purple {
    transition: all 300ms ease-in-out;
    border: 1px solid transparent;
  }
  .trans-item-purple:hover { 
    background-color: rgba(147, 51, 234, 0.20); 
    border-color: rgba(147, 51, 234, 0.50); 
    box-shadow: 0 0 12px rgba(147, 51, 234, 0.25);
    backdrop-filter: blur(12px); 
  }
  
  /* Blue Column Styles */
  .trans-item-blue {
    transition: all 300ms ease-in-out;
    border: 1px solid transparent;
  }
  .trans-item-blue:hover { 
    background-color: rgba(14, 165, 233, 0.20); 
    border-color: rgba(14, 165, 233, 0.50); 
    box-shadow: 0 0 12px rgba(14, 165, 233, 0.25);
    backdrop-filter: blur(12px); 
  }

  /* Pink Column Styles */
  .trans-item-pink {
    transition: all 300ms ease-in-out;
    border: 1px solid transparent;
  }
  .trans-item-pink:hover { 
    background-color: rgba(236, 72, 153, 0.20); 
    border-color: rgba(236, 72, 153, 0.50); 
    box-shadow: 0 0 12px rgba(236, 72, 153, 0.25);
    backdrop-filter: blur(12px); 
  }

  /* Glow Effects */
  .trans-icon-glow-purple { transition: filter 300ms ease-in-out; }
  .trans-icon-glow-purple:hover { filter: drop-shadow(0 0 8px rgba(147, 51, 234, 0.6)); }
  
  .trans-icon-glow-blue { transition: filter 300ms ease-in-out; }
  .trans-icon-glow-blue:hover { filter: drop-shadow(0 0 8px rgba(14, 165, 233, 0.6)); }

  .trans-icon-glow-pink { transition: filter 300ms ease-in-out; }
  .trans-icon-glow-pink:hover { filter: drop-shadow(0 0 8px rgba(236, 72, 153, 0.6)); }
  
  .lucide {
    overflow: visible;
  }
`;

const MenuColumn = ({ title, description, items, variant }) => {
  const getThemeClasses = (v) => {
    switch(v) {
      case 'purple': return { 
        bar: 'bg-purple-600', 
        item: 'trans-item-purple', 
        icon: 'trans-icon-glow-purple' 
      };
      case 'blue': return { 
        bar: 'bg-sky-500', 
        item: 'trans-item-blue', 
        icon: 'trans-icon-glow-blue' 
      };
      case 'pink': return { 
        bar: 'bg-pink-500', 
        item: 'trans-item-pink', 
        icon: 'trans-icon-glow-pink' 
      };
      default: return { bar: 'bg-gray-500', item: '', icon: '' };
    }
  };

  const themeClasses = getThemeClasses(variant);

  return (
    <div className="flex flex-col h-full">
      <div className="mb-3">
        <h3 className="text-[11px] font-bold text-white uppercase tracking-wider mb-1 flex items-center gap-2">
          <span className={cn("w-1 h-3 rounded-full", themeClasses.bar)}></span>
          {title}
        </h3>
        <p className="text-[11px] text-gray-500 font-medium pl-3 border-l border-white/5 ml-0.5">
          {description}
        </p>
      </div>

      <div className="flex flex-col space-y-1 flex-grow">
        {items.map((item, idx) => (
          <a 
            key={idx}
            href={item.href || "#"} 
            className={cn(
              "group flex items-center gap-3 p-2 rounded-lg",
              themeClasses.item
            )}
          >
            {/* Icon Container */}
            <div className="w-8 h-8 rounded-md bg-black/40 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
              <item.icon 
                className={cn("w-6 h-6 transition-all duration-300 stroke-[1.5]", themeClasses.icon)} 
                style={{ stroke: item.gradientId ? `url(#${item.gradientId})` : 'currentColor' }} 
              />
            </div>
            <div>
              <h4 className="text-[13px] font-semibold text-gray-100 group-hover:text-white transition-colors">
                {item.title}
              </h4>
              <p className="text-[11.5px] font-medium text-gray-400 mt-0.5 leading-snug group-hover:text-gray-300">
                {item.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

const TransformationsMegaMenu = () => {
  // Column 1: Industry Transformations (Purple)
  const industryTransformations = [
    {
      title: "Healthcare Transformation",
      description: "Optimizing patient data flow and clinical decision support.",
      icon: HealthcareIcon,
      href: "/transformations/healthcare-transformation",
      gradientId: "trans-grad-purple"
    },
    {
      title: "Professional Services",
      description: "Automating billable workflows and client knowledge retrieval.",
      icon: ServicesIcon,
      href: "/transformations/professional-services-transformation",
      gradientId: "trans-grad-purple"
    },
    {
      title: "Multi-Location Services",
      description: "Standardizing operations across distributed service centers.",
      icon: MultiLocationIcon,
      href: "/transformations/multi-location-services-transformation",
      gradientId: "trans-grad-purple"
    }
  ];

  // Column 2: Cross-Functional Impact (Blue)
  const crossFunctionalImpact = [
    {
      title: "Enterprise Operations",
      description: "Connecting siloed back-office systems into a unified grid.",
      icon: EnterpriseIcon,
      href: "/transformations/enterprise-operations-transformation",
      gradientId: "trans-grad-blue"
    },
    {
      title: "Sales & Revenue Systems",
      description: "Predictive pipeline intelligence and automated CRM hygiene.",
      icon: RevenueIcon,
      href: "/transformations/sales-revenue-systems-transformation",
      gradientId: "trans-grad-blue"
    },
    {
      title: "Product & R&D Acceleration",
      description: "Speeding up innovation cycles with AI-assisted research.",
      icon: ProductIcon,
      href: "/transformations/product-rd-acceleration",
      gradientId: "trans-grad-blue"
    }
  ];

  // Column 3: Proof of Execution (Pink)
  const proofOfExecution = [
    {
      title: "Before & After Snapshots",
      description: "Visual evidence of efficiency gains and error reduction.",
      icon: BeforeAfterIcon,
      href: "/transformations/before-after",
      gradientId: "trans-grad-pink"
    },
    {
      title: "Operational Case Studies",
      description: "Deep dives into successful enterprise AI deployments.",
      icon: CaseStudiesIcon,
      href: "/transformations/case-studies",
      gradientId: "trans-grad-pink"
    },
    {
      title: "Measured Impact",
      description: "Quantifiable ROI metrics from real-world implementations.",
      icon: ImpactIcon,
      href: "/transformations/measured-impact",
      gradientId: "trans-grad-pink"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 w-full pt-2 z-50"
    >
      <style>{styles}</style>
      
      {/* SVG Defs for Gradients with SMIL Animation */}
      <svg width="0" height="0" className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
        <defs>
          <linearGradient id="trans-grad-purple" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9333EA">
              <animate attributeName="stop-color" values="#9333EA; #C084FC; #9333EA" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#C084FC">
              <animate attributeName="stop-color" values="#C084FC; #9333EA; #C084FC" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>

          <linearGradient id="trans-grad-blue" x1="0%" y1="0%" x2="100%" y2="100%">
             <stop offset="0%" stopColor="#0EA5E9">
              <animate attributeName="stop-color" values="#0EA5E9; #38BDF8; #0EA5E9" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#38BDF8">
              <animate attributeName="stop-color" values="#38BDF8; #0EA5E9; #38BDF8" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>

          <linearGradient id="trans-grad-pink" x1="0%" y1="0%" x2="100%" y2="100%">
             <stop offset="0%" stopColor="#EC4899">
              <animate attributeName="stop-color" values="#EC4899; #F472B6; #EC4899" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#F472B6">
              <animate attributeName="stop-color" values="#F472B6; #EC4899; #F472B6" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-[1100px] mx-auto">
        <div className="bg-[#0E0F11]/95 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl p-5 overflow-y-auto max-h-[80vh] relative">
          
          {/* Header Section */}
          <div className="mb-4 text-center pb-3 border-b border-white/5">
            <p className="text-[12.5px] text-gray-400 font-medium">
              Real-world application of <span className="text-white font-bold">AI-Native Systems</span> across industries and functions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative z-10">
            {/* Column 1 - Industry Transformations */}
            <MenuColumn 
              title="Industry Transformations"
              description="Vertical-specific AI modernization."
              items={industryTransformations} 
              variant="purple"
            />

            {/* Column 2 - Cross-Functional Impact */}
            <MenuColumn 
              title="Cross-Functional Impact"
              description="Horizontal efficiency at scale."
              items={crossFunctionalImpact} 
              variant="blue"
            />

            {/* Column 3 - Proof of Execution */}
            <MenuColumn 
              title="Proof of Execution"
              description="Data-driven results and evidence."
              items={proofOfExecution} 
              variant="pink"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TransformationsMegaMenu;