import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, X, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

const FloatingContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const buttonVariants = {
    closed: { rotate: 0 },
    open: { rotate: 45 }
  };

  const actionVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        type: 'spring',
        stiffness: 300,
        damping: 20
      }
    }),
    exit: { opacity: 0, y: 10, scale: 0.8, transition: { duration: 0.2 } }
  };

  return (
    <div className="fixed z-40 bottom-4 right-4 md:bottom-5 md:right-5 flex flex-col items-end space-y-3">
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.a
              href="https://wa.me/919990377727"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact on WhatsApp"
              custom={1}
              variants={actionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex items-center gap-2 group"
            >
              <span className="bg-black/80 text-white text-xs px-2 py-1 rounded backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
                Chat on WhatsApp
              </span>
              <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                <MessageCircle size={24} fill="currentColor" strokeWidth={0} />
              </div>
            </motion.a>

            <motion.a
              href="tel:+919990377727"
              aria-label="Call Us"
              custom={0}
              variants={actionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex items-center gap-2 group"
            >
              <span className="bg-black/80 text-white text-xs px-2 py-1 rounded backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
                Call Now
              </span>
              <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                <Phone size={20} />
              </div>
            </motion.a>
          </>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleOpen}
        className={cn(
          "w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 relative overflow-hidden",
          isOpen 
            ? "bg-[#1A1A1A] text-white border border-white/20" 
            : "bg-[#EC4899] text-white hover:bg-[#db2777]"
        )}
        aria-label="Toggle contact options"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Glow effect */}
        {!isOpen && (
          <div className="absolute inset-0 rounded-full animate-pulse-slow bg-white/20 blur-md" />
        )}
        
        <motion.div
          variants={buttonVariants}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
          className="relative z-10"
        >
          {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        </motion.div>
      </motion.button>
    </div>
  );
};

export default FloatingContactWidget;