import React from 'react';
import { motion } from 'framer-motion';
import { Brain, BookOpen, Zap, Rocket, Plug, Bell, HeartHandshake as Handshake, Shield, Eye, Bot, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

// CSS Styles injected for specific animations and enhanced glassmorphism effects
const styles = `
  /* Purple Column Styles */
  .cap-item-purple {
    transition: all 300ms ease-in-out;
    border: 1px solid transparent;
  }
  .cap-item-purple:hover { 
    background-color: rgba(147, 51, 234, 0.20); 
    border-color: rgba(147, 51, 234, 0.50); 
    box-shadow: 0 0 15px rgba(147, 51, 234, 0.25);
    backdrop-filter: blur(12px); 
  }
  
  /* Blue Column Styles */
  .cap-item-blue {
    transition: all 300ms ease-in-out;
    border: 1px solid transparent;
  }
  .cap-item-blue:hover { 
    background-color: rgba(14, 165, 233, 0.20); 
    border-color: rgba(14, 165, 233, 0.50); 
    box-shadow: 0 0 15px rgba(14, 165, 233, 0.25);
    backdrop-filter: blur(12px); 
  }

  /* Pink Column Styles */
  .cap-item-pink {
    transition: all 300ms ease-in-out;
    border: 1px solid transparent;
  }
  .cap-item-pink:hover { 
    background-color: rgba(236, 72, 153, 0.20); 
    border-color: rgba(236, 72, 153, 0.50); 
    box-shadow: 0 0 15px rgba(236, 72, 153, 0.25);
    backdrop-filter: blur(12px); 
  }

  /* Glow Effects */
  .cap-icon-glow-purple { transition: filter 300ms ease-in-out; }
  .cap-icon-glow-purple:hover { filter: drop-shadow(0 0 12px rgba(147, 51, 234, 0.5)); }
  
  .cap-icon-glow-blue { transition: filter 300ms ease-in-out; }
  .cap-icon-glow-blue:hover { filter: drop-shadow(0 0 12px rgba(14, 165, 233, 0.5)); }

  .cap-icon-glow-pink { transition: filter 300ms ease-in-out; }
  .cap-icon-glow-pink:hover { filter: drop-shadow(0 0 12px rgba(236, 72, 153, 0.5)); }
  
  .lucide {
    overflow: visible;
  }
`;

const MenuColumn = ({ title, description, items, variant }) => {
  const getThemeClasses = (v) => {
    switch(v) {
      case 'purple': return { 
        bar: 'bg-purple-600', 
        item: 'cap-item-purple', 
        icon: 'cap-icon-glow-purple' 
      };
      case 'blue': return { 
        bar: 'bg-sky-500', 
        item: 'cap-item-blue', 
        icon: 'cap-icon-glow-blue' 
      };
      case 'pink': return { 
        bar: 'bg-pink-500', 
        item: 'cap-item-pink', 
        icon: 'cap-icon-glow-pink' 
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
                size={18} 
                strokeWidth={1.5}
                className={cn("transition-all duration-300", themeClasses.icon)} 
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

const CapabilitiesMegaMenu = () => {
  // Column 1: Core Capabilities (Purple)
  const coreCapabilities = [
    {
      title: "Model Intelligence",
      description: "Unified orchestration for LLMs, SLMs, and custom reasoning engines.",
      icon: Brain,
      href: "/capabilities/model-intelligence",
      gradientId: "cap-grad-purple"
    },
    {
      title: "Context Memory",
      description: "Vector-based retrieval and semantic state management.",
      icon: BookOpen,
      href: "/capabilities/context-memory",
      gradientId: "cap-grad-purple"
    },
    {
      title: "Data Pipeline",
      description: "Real-time ingestion, normalization, and embedding streams.",
      icon: Zap,
      href: "/capabilities/data-pipeline",
      gradientId: "cap-grad-purple"
    }
  ];

  // Column 2: Execution Automation (Blue)
  const executionAutomation = [
    {
      title: "AI Assistants™",
      description: "Deploy autonomous agents with governance and accountability.",
      icon: Bot,
      href: "/ai-assistants",
      gradientId: "cap-grad-blue"
    },
    {
      title: "AI Assistants Overview",
      description: "Overview of autonomous agents capabilities.",
      icon: Bot,
      href: "/ai-assistants/overview",
      gradientId: "cap-grad-blue"
    },
    {
      title: "How They Work",
      description: "Seven-step flow from natural language to execution.",
      icon: Settings,
      href: "/ai-assistants/how-they-work",
      gradientId: "cap-grad-blue"
    },
    {
      title: "Agent Workflows",
      description: "Autonomous multi-step task planning and execution.",
      icon: Rocket,
      href: "/capabilities/agent-workflows",
      gradientId: "cap-grad-blue"
    },
    {
      title: "System Integration",
      description: "Deep API connectors for enterprise ERP and CRM stacks.",
      icon: Plug,
      href: "/capabilities/system-integration",
      gradientId: "cap-grad-blue"
    },
    {
      title: "Event Triggers",
      description: "Reactive processing based on live business signals.",
      icon: Bell,
      href: "/capabilities/event-triggers",
      gradientId: "cap-grad-blue"
    }
  ];

  // Column 3: AI-Native Enablement (Pink)
  const aiNativeEnablement = [
    {
      title: "Deep Observability",
      description: "Trace visibility into agent reasoning and decisions.",
      icon: Eye,
      href: "/capabilities/deep-observability",
      gradientId: "cap-grad-pink"
    },
    {
      title: "Collaboration",
      description: "Human-in-the-loop interfaces for seamless handoffs.",
      icon: Handshake,
      href: "/capabilities/collaboration",
      gradientId: "cap-grad-pink"
    },
    {
      title: "Trust & Safety",
      description: "Enterprise guardrails for compliance and output quality.",
      icon: Shield,
      href: "/capabilities/trust-and-safety",
      gradientId: "cap-grad-pink"
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
      
      {/* SVG Defs for Gradients with SMIL Animation - Unique IDs to prevent conflict */}
      <svg width="0" height="0" className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
        <defs>
          <linearGradient id="cap-grad-purple" x1="0%" y1="0%" x2="200%" y2="0%">
            <stop offset="0%" stopColor="#9333EA">
              <animate attributeName="offset" values="0; 1" dur="2.5s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#C084FC">
              <animate attributeName="offset" values="0.5; 1.5" dur="2.5s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#9333EA">
              <animate attributeName="offset" values="1; 2" dur="2.5s" repeatCount="indefinite" />
            </stop>
          </linearGradient>

          <linearGradient id="cap-grad-blue" x1="0%" y1="0%" x2="200%" y2="0%">
             <stop offset="0%" stopColor="#0EA5E9">
              <animate attributeName="stop-color" values="#0EA5E9; #38BDF8; #0EA5E9" dur="2.5s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#38BDF8">
              <animate attributeName="stop-color" values="#38BDF8; #0EA5E9; #38BDF8" dur="2.5s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#0EA5E9">
              <animate attributeName="stop-color" values="#0EA5E9; #38BDF8; #0EA5E9" dur="2.5s" repeatCount="indefinite" />
            </stop>
          </linearGradient>

          <linearGradient id="cap-grad-pink" x1="0%" y1="0%" x2="200%" y2="0%">
             <stop offset="0%" stopColor="#EC4899">
              <animate attributeName="stop-color" values="#EC4899; #F472B6; #EC4899" dur="2.5s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#F472B6">
              <animate attributeName="stop-color" values="#F472B6; #EC4899; #F472B6" dur="2.5s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#EC4899">
              <animate attributeName="stop-color" values="#EC4899; #F472B6; #EC4899" dur="2.5s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-[1100px] mx-auto">
        <div className="bg-[#0E0F11]/95 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl p-5 overflow-y-auto max-h-[80vh] relative">
          
          {/* Header Section */}
          <div className="mb-4 text-center pb-3 border-b border-white/5">
            <p className="text-[12.5px] text-gray-400 font-medium">
              Comprehensive tools to <span className="text-white font-bold">build, deploy, and scale</span> AI-native operations securely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative z-10">
            {/* Column 1 - Core Capabilities */}
            <MenuColumn 
              title="Core Capabilities"
              description="Foundational infrastructure for AI."
              items={coreCapabilities} 
              variant="purple"
            />

            {/* Column 2 - Execution Automation */}
            <MenuColumn 
              title="Execution Automation"
              description="Turning intelligence into action."
              items={executionAutomation} 
              variant="blue"
            />

            {/* Column 3 - AI-Native Enablement */}
            <MenuColumn 
              title="AI-Native Enablement"
              description="Empowering teams with visibility."
              items={aiNativeEnablement} 
              variant="pink"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CapabilitiesMegaMenu;