import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// --- Custom SVG Icons for AI Assistants Mega Menu ---

// Column 1: Agent Overview (Cool Blue)
const OverviewIcon = ({ className, style }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    {/* Central Node */}
    <circle cx="16" cy="16" r="4" strokeLinecap="round" strokeLinejoin="round" />
    {/* Radiating Connections */}
    <path d="M16 12V6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 26V20" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 16H26" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 16H12" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 13L23 9" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 19L9 23" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 19L23 23" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 13L9 9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const HowItWorksIcon = ({ className, style }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    {/* Process Flow */}
    <rect x="4" y="12" width="6" height="8" rx="1" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="22" y="12" width="6" height="8" rx="1" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="16" cy="16" r="3" strokeLinecap="round" strokeLinejoin="round" />
    {/* Arrows */}
    <path d="M10 16H13" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 16H22" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const WhereItFitsIcon = ({ className, style }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    {/* Grid Pattern */}
    <rect x="5" y="5" width="8" height="8" rx="1" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="19" y="5" width="8" height="8" rx="1" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" />
    <rect x="5" y="19" width="8" height="8" rx="1" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" />
    <rect x="19" y="19" width="8" height="8" rx="1" strokeLinecap="round" strokeLinejoin="round" />
    {/* Connections */}
    <path d="M13 9H19" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 13V19" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 23H19" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Column 2: Control & Collaboration (Violet)
const CollaborationIcon = ({ className, style }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    {/* Human Entity */}
    <circle cx="10" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 13V18" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* AI Entity */}
    <rect x="19" y="7" width="6" height="6" rx="1" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 13V18" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Handshake/Link */}
    <path d="M10 18C10 18 13 22 16 22C19 22 22 18 22 18" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 22V26" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GovernanceIcon = ({ className, style }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    {/* Shield */}
    <path d="M16 4L6 9V15C6 22 10.5 26.5 16 28C21.5 26.5 26 22 26 15V9L16 4Z" strokeLinecap="round" strokeLinejoin="round" />
    {/* Lock/Control Element */}
    <circle cx="16" cy="15" r="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 12V10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const AuditIcon = ({ className, style }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    {/* Document */}
    <path d="M9 4H23C24.1046 4 25 4.89543 25 6V26C25 27.1046 24.1046 28 23 28H9C7.89543 28 7 27.1046 7 26V6C7 4.89543 7.89543 4 9 4Z" strokeLinecap="round" strokeLinejoin="round" />
    {/* Checkmarks */}
    <path d="M11 12L13 14L17 10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11 20L13 22L17 18" strokeLinecap="round" strokeLinejoin="round" />
    {/* Chain Links (Oversight) */}
    <path d="M21 12H22" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" />
    <path d="M21 20H22" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" />
  </svg>
);

// Column 3: Roadmap & Advancements (Soft Green)
const NextIcon = ({ className, style }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    {/* Forward Arrow */}
    <path d="M6 16H24" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 10L24 16L18 22" strokeLinecap="round" strokeLinejoin="round" />
    {/* Sparkle */}
    <path d="M26 8L27 6L28 8L30 9L28 10L27 12L26 10L24 9L26 8Z" fill="currentColor" stroke="none" />
  </svg>
);

const DesignIcon = ({ className, style }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    {/* Palette/Builder Board */}
    <path d="M26 18V24C26 25.1046 25.1046 26 24 26H8C6.89543 26 6 25.1046 6 24V8C6 6.89543 6.89543 6 8 6H16" strokeLinecap="round" strokeLinejoin="round" />
    {/* Elements */}
    <rect x="10" y="10" width="6" height="6" rx="1" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="24" cy="10" r="4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 20H18" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IntegrationIcon = ({ className, style }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    {/* Core Node */}
    <circle cx="8" cy="24" r="3" strokeLinecap="round" strokeLinejoin="round" />
    {/* Expansion Nodes */}
    <circle cx="24" cy="8" r="3" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="16" cy="16" r="2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Connection Lines */}
    <path d="M10.5 21.5L21.5 10.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 4" />
    <path d="M10 21L14 17" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 15L22 11" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// --- Styles for Glassmorphism & Animation ---
const styles = `
  /* Cool Blue Column Styles */
  .assist-item-blue {
    transition: all 300ms ease-in-out;
    border: 1px solid transparent;
  }
  .assist-item-blue:hover { 
    background-color: rgba(14, 165, 233, 0.20); 
    border-color: rgba(14, 165, 233, 0.50); 
    box-shadow: 0 0 12px rgba(14, 165, 233, 0.25);
    backdrop-filter: blur(12px); 
  }
  
  /* Violet Column Styles */
  .assist-item-violet {
    transition: all 300ms ease-in-out;
    border: 1px solid transparent;
  }
  .assist-item-violet:hover { 
    background-color: rgba(147, 51, 234, 0.20); 
    border-color: rgba(147, 51, 234, 0.50); 
    box-shadow: 0 0 12px rgba(147, 51, 234, 0.25);
    backdrop-filter: blur(12px); 
  }

  /* Soft Green Column Styles */
  .assist-item-green {
    transition: all 300ms ease-in-out;
    border: 1px solid transparent;
  }
  .assist-item-green:hover { 
    background-color: rgba(16, 185, 129, 0.20); 
    border-color: rgba(16, 185, 129, 0.50); 
    box-shadow: 0 0 12px rgba(16, 185, 129, 0.25);
    backdrop-filter: blur(12px); 
  }

  /* Glow Effects */
  .assist-icon-glow-blue { transition: filter 300ms ease-in-out; }
  .assist-icon-glow-blue:hover { filter: drop-shadow(0 0 8px rgba(14, 165, 233, 0.6)); }
  
  .assist-icon-glow-violet { transition: filter 300ms ease-in-out; }
  .assist-icon-glow-violet:hover { filter: drop-shadow(0 0 8px rgba(147, 51, 234, 0.6)); }

  .assist-icon-glow-green { transition: filter 300ms ease-in-out; }
  .assist-icon-glow-green:hover { filter: drop-shadow(0 0 8px rgba(16, 185, 129, 0.6)); }
  
  .lucide {
    overflow: visible;
  }
`;

const MenuColumn = ({ title, items, variant }) => {
  const getThemeClasses = (v) => {
    switch(v) {
      case 'blue': return { 
        bar: 'bg-sky-500', 
        item: 'assist-item-blue', 
        icon: 'assist-icon-glow-blue' 
      };
      case 'violet': return { 
        bar: 'bg-purple-600', 
        item: 'assist-item-violet', 
        icon: 'assist-icon-glow-violet' 
      };
      case 'green': return { 
        bar: 'bg-emerald-500', 
        item: 'assist-item-green', 
        icon: 'assist-icon-glow-green' 
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

const AIAssistantsMegaMenu = () => {
  // Column 1: Agent Overview (Cool Blue)
  const agentOverview = [
    {
      title: "AI Assistants™ Overview",
      description: "Meet the intelligent agents powering modern workflows.",
      icon: OverviewIcon,
      href: "/ai-assistants/overview",
      gradientId: "assist-grad-blue"
    },
    {
      title: "How They Work",
      description: "From natural language prompt to autonomous execution.",
      icon: HowItWorksIcon,
      href: "/ai-assistants/how-they-work",
      gradientId: "assist-grad-blue"
    },
    {
      title: "Where They Fit",
      description: "Seamless integration points across your tech stack.",
      icon: WhereItFitsIcon,
      href: "/ai-assistants/where-they-fit",
      gradientId: "assist-grad-blue"
    }
  ];

  // Column 2: Control & Collaboration (Violet)
  const controlCollaboration = [
    {
      title: "Human + AI Collaboration",
      description: "Optimizing the handoff between people and machines.",
      icon: CollaborationIcon,
      href: "/ai-assistants/human-ai-collaboration",
      gradientId: "assist-grad-violet"
    },
    {
      title: "Agent Governance & Control",
      description: "Setting boundaries, permissions, and safety protocols.",
      icon: GovernanceIcon,
      href: "/ai-assistants/governance-control",
      gradientId: "assist-grad-violet"
    },
    {
      title: "Audit Trails & Oversight",
      description: "Complete visibility into every agent action and decision.",
      icon: AuditIcon,
      href: "/ai-assistants/audit-trails",
      gradientId: "assist-grad-violet"
    }
  ];

  // Column 3: Roadmap & Advancements (Soft Green)
  const roadmapAdvancements = [
    {
      title: "Coming Next",
      description: "Preview upcoming agent capabilities and features.",
      icon: NextIcon,
      href: "/ai-assistants/coming-next",
      gradientId: "assist-grad-green"
    },
    {
      title: "Custom Agent Design",
      description: "Build your own specialized agents for unique needs.",
      icon: DesignIcon,
      href: "/ai-assistants/custom-agents",
      gradientId: "assist-grad-green"
    },
    {
      title: "Integration Horizon",
      description: "Expanding ecosystem of supported tools and platforms.",
      icon: IntegrationIcon,
      href: "/ai-assistants/integration-horizon",
      gradientId: "assist-grad-green"
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
          <linearGradient id="assist-grad-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0EA5E9">
              <animate attributeName="stop-color" values="#0EA5E9; #38BDF8; #0EA5E9" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#38BDF8">
              <animate attributeName="stop-color" values="#38BDF8; #0EA5E9; #38BDF8" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>

          <linearGradient id="assist-grad-violet" x1="0%" y1="0%" x2="100%" y2="100%">
             <stop offset="0%" stopColor="#9333EA">
              <animate attributeName="stop-color" values="#9333EA; #C084FC; #9333EA" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#C084FC">
              <animate attributeName="stop-color" values="#C084FC; #9333EA; #C084FC" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>

          <linearGradient id="assist-grad-green" x1="0%" y1="0%" x2="100%" y2="100%">
             <stop offset="0%" stopColor="#10B981">
              <animate attributeName="stop-color" values="#10B981; #34D399; #10B981" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#34D399">
              <animate attributeName="stop-color" values="#34D399; #10B981; #34D399" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-[1100px] mx-auto">
        <div className="bg-[#0E0F11]/95 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl p-5 overflow-y-auto max-h-[80vh] relative">
          
          {/* Header Section */}
          <div className="mb-4 text-center pb-3 border-b border-white/5">
            <p className="text-[12.5px] text-gray-400 font-medium">
              Deploy autonomous <span className="text-white font-bold">AI Assistants™</span> to scale your workforce and accelerate operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative z-10">
            {/* Column 1 - Agent Overview */}
            <MenuColumn 
              title="Agent Overview"
              items={agentOverview} 
              variant="blue"
            />

            {/* Column 2 - Control & Collaboration */}
            <MenuColumn 
              title="Control & Collaboration"
              items={controlCollaboration} 
              variant="violet"
            />

            {/* Column 3 - Roadmap & Advancements */}
            <MenuColumn 
              title="Roadmap & Advancements"
              items={roadmapAdvancements} 
              variant="green"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AIAssistantsMegaMenu;