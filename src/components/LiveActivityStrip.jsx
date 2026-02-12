
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Custom minimal SVG icons as components to ensure precise control over stroke and color
const CalendarIcon = ({ className, color }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" className={color} />
    <line x1="16" y1="2" x2="16" y2="6" className={color} />
    <line x1="8" y1="2" x2="8" y2="6" className={color} />
    <line x1="3" y1="10" x2="21" y2="10" className={color} />
    <path d="M12 14h.01" className={color} strokeWidth="3"/>
  </svg>
);

const PenIcon = ({ className, color }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9" className={color} />
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" className={color} />
    <path d="M14 7l3 3" className={color} />
  </svg>
);

const ChatIcon = ({ className, color }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" className={color} />
  </svg>
);

const ChartIcon = ({ className, color }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" className={color} />
    <line x1="12" y1="20" x2="12" y2="4" className={color} />
    <line x1="6" y1="20" x2="6" y2="14" className={color} />
    <path d="M4 20h16" className={color} />
  </svg>
);

const SwapIcon = ({ className, color }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 3h5v5" className={color} />
    <path d="M4 20L21 3" className={color} />
    <path d="M21 16v5h-5" className={color} />
    <path d="M15 15l5 5" className={color} />
    <path d="M4 4l5 5" className={color} />
  </svg>
);

const LiveActivityStrip = ({ activeIndex }) => {
  const activities = [
    {
      text: "From idea to launch — in weeks, not months.",
      icon: CalendarIcon,
      color: "text-fuchsia-500", // Purple/Magenta
    },
    {
      text: "AI-assisted systems built into real business workflows",
      icon: PenIcon,
      color: "text-cyan-400", // Cyan/Turquoise
    },
    {
      text: "Connecting your website, apps, and marketing into one system.",
      icon: ChatIcon,
      color: "text-pink-500", // Pink/Hot Pink
    },
    {
      text: "Clear visibility into performance, operations, and growth.",
      icon: ChartIcon,
      color: "text-lime-400", // Green/Lime
    },
    {
      text: "Turning traffic into leads through structured digital funnels.",
      icon: SwapIcon,
      color: "text-orange-500", // Orange/Coral
    }
  ];

  const totalLines = activities.length;

  const getWrappedIndex = (idx) => {
    return ((idx % totalLines) + totalLines) % totalLines;
  };

  // Get current active item
  const index = getWrappedIndex(activeIndex);
  const item = activities[index];
  const Icon = item.icon;

  return (
    // Height adjusted to 120px for single card container
    <div className="relative h-[120px] w-full max-w-[800px] flex items-center justify-center overflow-visible">
      
      {/* Container for single card animation */}
      <div className="relative w-full flex items-center justify-center h-full">
        <AnimatePresence mode="popLayout">
            <motion.div
                key={activeIndex} 
                layout
                initial={{ 
                  y: 20,
                  opacity: 0,
                  scale: 0.95, 
                  filter: 'blur(4px)',
                }}
                animate={{ 
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  filter: 'blur(0px)',
                  zIndex: 10,
                }}
                exit={{ 
                   y: -20,
                   opacity: 0, 
                   scale: 1.05, 
                   filter: 'blur(4px)',
                   zIndex: 0,
                   transition: { duration: 0.4, ease: "easeInOut" }
                }}
                transition={{ 
                    duration: 0.5,
                    ease: [0.25, 0.4, 0.25, 1],
                }}
                className="absolute top-0 left-0 right-0 bottom-0 m-auto w-full max-w-[600px] flex justify-center items-center"
              >
                <div 
                  className="
                    relative flex items-center gap-5 px-6 py-4
                    w-full mx-auto
                    rounded-2xl border backdrop-blur-md transition-all duration-500
                    bg-[#1A1D21]/95 border-white/10 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.8)]
                  "
                >
                    {/* Top edge subtle highlight */}
                    <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-70" />

                    {/* Icon */}
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8">
                        <Icon 
                          className="w-6 h-6" 
                          color={item.color}
                        />
                    </div>

                    {/* Text Content */}
                   <span 
                     className="text-[16px] font-medium tracking-tight leading-snug truncate w-full transition-colors duration-500 text-gray-100 opacity-100"
                     style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
                   >
                     {item.text}
                   </span>
                </div>
            </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LiveActivityStrip;
