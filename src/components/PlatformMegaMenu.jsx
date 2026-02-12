import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Smartphone, 
  Globe, 
  TrendingUp, 
  Cpu
} from 'lucide-react';
import { cn } from '@/lib/utils';

// CSS Styles injected for specific animations and glassmorphism effects
const styles = `
  /* Gradient Animations for SVGs */
  /* We use SMIL animations inside the SVG defs for smooth color transitions */

  /* Purple Column Styles */
  .menu-item-purple {
    transition: all 300ms ease-in-out;
    border: 1px solid transparent;
  }
  .menu-item-purple:hover { 
    background-color: rgba(147, 51, 234, 0.20); 
    border-color: rgba(147, 51, 234, 0.50); 
    box-shadow: 0 0 15px rgba(147, 51, 234, 0.25);
    backdrop-filter: blur(12px); 
  }
  
  /* Blue Column Styles */
  .menu-item-blue {
    transition: all 300ms ease-in-out;
    border: 1px solid transparent;
  }
  .menu-item-blue:hover { 
    background-color: rgba(14, 165, 233, 0.20); 
    border-color: rgba(14, 165, 233, 0.50); 
    box-shadow: 0 0 15px rgba(14, 165, 233, 0.25);
    backdrop-filter: blur(12px); 
  }

  /* Pink Column Styles */
  .menu-item-pink {
    transition: all 300ms ease-in-out;
    border: 1px solid transparent;
  }
  .menu-item-pink:hover { 
    background-color: rgba(236, 72, 153, 0.20); 
    border-color: rgba(236, 72, 153, 0.50); 
    box-shadow: 0 0 15px rgba(236, 72, 153, 0.25);
    backdrop-filter: blur(12px); 
  }

  /* Glow Effects */
  .icon-glow-purple { transition: filter 300ms ease-in-out; }
  .icon-glow-purple:hover { filter: drop-shadow(0 0 12px rgba(147, 51, 234, 0.6)); }
  
  .icon-glow-blue { transition: filter 300ms ease-in-out; }
  .icon-glow-blue:hover { filter: drop-shadow(0 0 12px rgba(14, 165, 233, 0.6)); }

  .icon-glow-pink { transition: filter 300ms ease-in-out; }
  .icon-glow-pink:hover { filter: drop-shadow(0 0 12px rgba(236, 72, 153, 0.6)); }
  
  .lucide {
    overflow: visible;
  }
`;

const MenuColumn = ({ title, items, variant }) => {
  const getThemeClasses = (v) => {
    switch(v) {
      case 'purple': return { 
        bar: 'bg-purple-600', 
        item: 'menu-item-purple', 
        icon: 'icon-glow-purple' 
      };
      case 'blue': return { 
        bar: 'bg-sky-500', 
        item: 'menu-item-blue', 
        icon: 'icon-glow-blue' 
      };
      case 'pink': return { 
        bar: 'bg-pink-500', 
        item: 'menu-item-pink', 
        icon: 'icon-glow-pink' 
      };
      default: return { bar: 'bg-gray-500', item: '', icon: '' };
    }
  };

  const themeClasses = getThemeClasses(variant);

  return (
    <div className="flex flex-col space-y-2">
      <h3 className="text-[11px] font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
        <span className={cn("w-1 h-3 rounded-full", themeClasses.bar)}></span>
        {title}
      </h3>
      <div className="flex flex-col space-y-1">
        {items.map((item, idx) => (
          <Link 
            key={idx}
            to={item.href || "#"} 
            className={cn(
              "group flex items-start gap-3 p-2 rounded-lg",
              themeClasses.item
            )}
          >
            {/* Icon Container */}
            <div className="mt-0.5 w-8 h-8 rounded-md bg-black/40 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
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
              {item.description && (
                <p className="text-[11.5px] font-medium text-gray-400 mt-0.5 leading-snug group-hover:text-gray-300">
                  {item.description}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const PlatformMegaMenu = () => {
  const developmentItems = [
    {
      title: "One-Day Web App Development",
      description: "Launch your MVP in record time.",
      icon: Zap,
      href: "/services/one-day-web-app",
      gradientId: "grad-purple"
    },
    {
      title: "Web & Mobile App Development",
      description: "Full-scale custom applications.",
      icon: Smartphone,
      href: "/services/web-mobile-app-development",
      gradientId: "grad-purple"
    }
  ];

  const platformItems = [
    {
      title: "Digital Platforms & E-Commerce",
      description: "Scalable solutions for digital business.",
      icon: Globe,
      href: "/services/digital-platforms-ecommerce",
      gradientId: "grad-blue"
    },
    {
      title: "Marketing & Growth Systems",
      description: "Data-driven growth infrastructure.",
      icon: TrendingUp,
      href: "/services/marketing-growth-systems",
      gradientId: "grad-blue"
    }
  ];

  const intelligenceItems = [
    {
      title: "AI & Automation",
      description: "Intelligent workflows and automation.",
      icon: Cpu,
      href: "/ai-automation",
      gradientId: "grad-pink"
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
      
      {/* SVG Defs for Gradients with SMIL Animation for "Running" effect */}
      <svg width="0" height="0" className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
        <defs>
          <linearGradient id="grad-purple" x1="0%" y1="0%" x2="200%" y2="0%">
            <stop offset="0%" stopColor="#9333EA">
              <animate attributeName="offset" values="0; 1" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#C084FC">
              <animate attributeName="offset" values="0.5; 1.5" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#9333EA">
              <animate attributeName="offset" values="1; 2" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>

          <linearGradient id="grad-blue" x1="0%" y1="0%" x2="200%" y2="0%">
             <stop offset="0%" stopColor="#0EA5E9">
              <animate attributeName="stop-color" values="#0EA5E9; #38BDF8; #0EA5E9" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#38BDF8">
              <animate attributeName="stop-color" values="#38BDF8; #0EA5E9; #38BDF8" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#0EA5E9">
              <animate attributeName="stop-color" values="#0EA5E9; #38BDF8; #0EA5E9" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>

          <linearGradient id="grad-pink" x1="0%" y1="0%" x2="200%" y2="0%">
             <stop offset="0%" stopColor="#EC4899">
              <animate attributeName="stop-color" values="#EC4899; #F472B6; #EC4899" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#F472B6">
              <animate attributeName="stop-color" values="#F472B6; #EC4899; #F472B6" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#EC4899">
              <animate attributeName="stop-color" values="#EC4899; #F472B6; #EC4899" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-[1100px] mx-auto">
        <div className="bg-[#0E0F11]/95 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl p-5 overflow-y-auto max-h-[80vh] relative">
          
          {/* Top text */}
          <div className="mb-4 text-center pb-3 border-b border-white/5">
            <p className="text-[12.5px] text-gray-400 font-medium">
              Explore our <span className="text-white font-bold">Services</span> — transforming ideas into digital reality.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative z-10">
            {/* Column 1 - Purple */}
            <MenuColumn 
              title="Development" 
              items={developmentItems} 
              variant="purple"
            />

            {/* Column 2 - Blue */}
            <MenuColumn 
              title="Platforms" 
              items={platformItems} 
              variant="blue"
            />

            {/* Column 3 - Pink */}
            <div className="flex flex-col space-y-3">
              <MenuColumn 
                title="Intelligence" 
                items={intelligenceItems} 
                variant="pink"
              />
              
              {/* CTA Box */}
              <Link 
                to="/contact"
                className="mt-1 p-3 rounded-lg bg-gradient-to-br from-gray-900 to-gray-950 border border-white/10 group hover:border-white/20 transition-colors cursor-pointer shadow-lg block"
              >
                <div className="flex items-start gap-3">
                  <span className="text-lg mt-0.5">👋</span>
                  <div>
                    <h4 className="text-[13px] font-bold text-white mb-1">
                      Ready to start?
                    </h4>
                    <span className="text-[12px] text-[#A855F7] font-bold group-hover:text-[#C084FC] transition-colors flex items-center gap-1">
                      Get a Quote
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                    <p className="text-[11.5px] font-medium text-gray-400 mt-1 leading-relaxed">
                      Discuss your project with our expert team.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PlatformMegaMenu;