import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, X } from 'lucide-react';
import { cn } from '@/lib/utils';

// --- Menu Data Structure ---
const MENU_DATA = {
  main: [
    { id: 'product', label: 'Product', hasSubmenu: true },
    { id: 'solutions', label: 'Solutions', hasSubmenu: true },
    { id: 'company', label: 'Company', hasSubmenu: true },
    { id: 'pricing', label: 'Pricing', href: '/pricing' },
    { id: 'enterprise', label: 'Enterprise', href: '/contact' },
    { id: 'contact', label: 'Contact', href: '/contact' },
  ],
  product: {
    title: 'Product',
    sections: [
      {
        header: 'AI PLATFORM',
        items: [
          { label: 'Platform Overview', href: '/platform/overview' },
          { label: 'AI-Native Operating Layer', href: '/ai-native-operating-layer' },
          { label: 'Security, Governance & Control', href: '/security-governance-control' },
        ]
      },
      {
        header: 'CAPABILITIES',
        items: [
          { label: 'Model Intelligence', href: '/capabilities/model-intelligence' },
          { label: 'Context Memory', href: '/capabilities/context-memory' },
          { label: 'Data Pipeline', href: '/capabilities/data-pipeline' },
          { label: 'Agent Workflows', href: '/capabilities/agent-workflows' },
          { label: 'System Integration', href: '/capabilities/system-integration' },
          { label: 'Deep Observability', href: '/capabilities/deep-observability' },
          { label: 'Trust & Safety', href: '/capabilities/trust-and-safety' },
        ]
      },
      {
        header: 'AI ASSISTANTS™',
        items: [
          { label: 'Overview', href: '/ai-assistants/overview' },
          { label: 'How They Work', href: '/ai-assistants/how-they-work' },
          { label: 'Where They Fit', href: '/ai-assistants/where-they-fit' },
          { label: 'Governance & Control', href: '/ai-assistants/governance-control' },
          { label: 'Human + AI Collaboration', href: '/ai-assistants/human-ai-collaboration' },
          { label: 'Custom Agent Design', href: '/ai-assistants/custom-agents' },
        ]
      }
    ]
  },
  solutions: {
    title: 'Solutions',
    sections: [
      {
        header: 'BY INDUSTRY',
        items: [
          { label: 'Healthcare', href: '/transformations/healthcare-transformation' },
          { label: 'Professional Services', href: '/transformations/professional-services-transformation' },
          { label: 'Multi-Location Services', href: '/transformations/multi-location-services-transformation' },
        ]
      },
      {
        header: 'BY FUNCTION',
        items: [
          { label: 'Enterprise Operations', href: '/transformations/enterprise-operations-transformation' },
          { label: 'Sales & Revenue Systems', href: '/transformations/sales-revenue-systems-transformation' },
          { label: 'Product & R&D', href: '/transformations/product-rd-acceleration' },
        ]
      }
    ]
  },
  company: {
    title: 'Company',
    sections: [
      {
        header: 'ABOUT',
        items: [
          { label: 'About Phenomeny', href: '/about' },
          { label: 'Careers', href: '/careers' },
          { label: 'Contact', href: '/contact' },
        ]
      },
      {
        header: 'RESOURCES',
        items: [
          { label: 'PDDT Whitepaper', href: '/ai-resources/pddt-whitepaper' },
          { label: 'AI Transformation Playbook', href: '/ai-resources/ai-transformation-playbook' },
          { label: 'Blog', href: '/blog' },
        ]
      },
      {
        header: 'LEGAL',
        items: [
          { label: 'Security', href: '/security' },
          { label: 'Privacy Policy', href: '/privacy' },
          { label: 'Terms', href: '/terms' },
        ]
      }
    ]
  }
};

const MobileMenu = ({ isOpen, onClose }) => {
  const [navStack, setNavStack] = useState(['main']);
  const [direction, setDirection] = useState(0); // 1 for push (right), -1 for pop (left)
  const closeButtonRef = useRef(null);

  // Reset navigation when menu closes
  useEffect(() => {
    if (!isOpen) {
      // Delay reset to allow exit animation
      const timer = setTimeout(() => {
        setNavStack(['main']);
        setDirection(0);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => closeButtonRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const currentViewId = navStack[navStack.length - 1];

  const pushView = (viewId) => {
    setDirection(1);
    setNavStack((prev) => [...prev, viewId]);
  };

  const popView = () => {
    setDirection(-1);
    setNavStack((prev) => prev.slice(0, -1));
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? '-25%' : '100%', 
      opacity: 0,
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-40" // Solid dark backdrop
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Menu Container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 right-0 w-full sm:max-w-md bg-[#0E0F11] z-50 flex flex-col border-l border-white/10 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            {/* Top Bar: Title & Close */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 z-20 bg-[#0E0F11] min-h-[72px]">
               {/* Show contextual title or "Menu" */}
               <span className="text-xl font-bold text-white tracking-tight">
                 {currentViewId === 'main' ? 'Menu' : MENU_DATA[currentViewId]?.title || 'Menu'}
               </span>

              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content Area with Slide Animation */}
            <div className="relative flex-1 overflow-hidden w-full">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentViewId}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                  className="absolute inset-0 w-full h-full overflow-y-auto bg-[#0E0F11]"
                >
                  {currentViewId === 'main' ? (
                    <Level1View 
                      items={MENU_DATA.main} 
                      onNavigate={pushView} 
                      onClose={onClose} 
                    />
                  ) : (
                    <Level2View 
                      data={MENU_DATA[currentViewId]} 
                      onBack={popView} 
                      onClose={onClose} 
                      currentViewId={currentViewId}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Sticky Bottom CTA for Level 1 */}
             {currentViewId === 'main' && (
              <div className="p-6 border-t border-white/10 bg-[#0E0F11] z-20 space-y-3">
                <Link 
                  to="/contact" 
                  onClick={onClose}
                  className="flex items-center justify-center w-full rounded-xl bg-[#EC4899] hover:bg-[#db2777] text-white font-bold transition-all shadow-lg shadow-pink-500/20 active:scale-95 px-4 py-2 text-sm min-h-[44px] md:px-6 md:py-2.5 md:text-base"
                >
                  Discuss a Transformation
                </Link>
                <div className="flex flex-row justify-center gap-6 pt-2">
                   <Link to="/login" onClick={onClose} className="text-sm font-medium text-gray-400 hover:text-white py-2 px-4 min-h-[44px] flex items-center">Login</Link>
                   <Link to="/contact" onClick={onClose} className="text-sm font-medium text-gray-400 hover:text-white py-2 px-4 min-h-[44px] flex items-center">Support</Link>
                </div>
              </div>
            )}

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// --- Level 1 View Component ---
const Level1View = ({ items, onNavigate, onClose }) => {
  return (
    <div className="px-6 py-6 pb-24 space-y-1">
      {items.map((item) => (
        <div key={item.id} className="border-b border-white/5 last:border-0">
          {item.hasSubmenu ? (
            <button
              onClick={() => onNavigate(item.id)}
              className="w-full flex items-center justify-between py-4 text-left group transition-colors focus-visible:outline-none min-h-[44px]"
              aria-label={`Open ${item.label} submenu`}
            >
              <span className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors">
                {item.label}
              </span>
              <ChevronRight className="text-gray-500 group-hover:text-pink-400 transition-colors" size={24} />
            </button>
          ) : (
            <Link
              to={item.href}
              onClick={onClose}
              className="w-full block py-4 text-xl font-bold text-white hover:text-pink-400 transition-colors focus-visible:outline-none min-h-[44px] flex items-center"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

// --- Level 2 View Component (Drill Down) ---
const Level2View = ({ data, onBack, onClose, currentViewId }) => {
  if (!data || !data.sections) return null; // Ensure data and sections exist

  return (
    <div className="flex flex-col min-h-full">
      {/* Drill-down Header */}
      <div className="sticky top-0 bg-[#0E0F11] z-10 px-6 py-4 border-b border-white/10 flex items-center gap-3 min-h-[72px]">
        <button 
          onClick={onBack}
          className="p-2 -ml-2 text-gray-400 hover:text-white rounded-full transition-colors active:bg-white/10 min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label={`Back to previous menu`}
        >
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-lg font-bold text-white">{data.title}</h2>
      </div>

      {/* Drill-down Content */}
      <div className="px-6 py-4 pb-24 space-y-8">
        {data.sections.map((section, idx) => (
          <div key={idx} className="space-y-3">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest px-2 pt-2">
              {section.header}
            </h3>
            <ul className="space-y-1">
              {section.items.map((item, itemIdx) => (
                <li key={itemIdx}>
                  <Link
                    to={item.href}
                    onClick={onClose}
                    className="block py-3 px-2 rounded-lg text-base font-medium text-gray-200 hover:text-white hover:bg-white/5 transition-colors active:bg-white/10 min-h-[44px] flex items-center"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;