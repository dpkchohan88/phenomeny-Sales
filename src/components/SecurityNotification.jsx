import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert } from 'lucide-react';

const SecurityNotification = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: -20, x: '-50%' }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed z-[100] w-[90%] max-w-[360px] md:max-w-[400px] 
                     top-1/2 left-1/2 -translate-y-1/2
                     md:top-24 md:left-auto md:right-6 md:translate-x-0 md:translate-y-0"
        >
          <div className="bg-[#0A0A0A] border border-red-900/50 shadow-[0_0_40px_-10px_rgba(220,38,38,0.3)] rounded-xl p-5 flex gap-4 w-full relative overflow-hidden">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-red-500/5 pointer-events-none" />
            
            <div className="shrink-0 pt-0.5 relative z-10">
              <div className="w-10 h-10 rounded-full bg-red-950/30 flex items-center justify-center border border-red-900/50 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                <ShieldAlert className="text-red-500 w-5 h-5" />
              </div>
            </div>
            
            <div className="flex-1 relative z-10">
              <h4 className="text-white font-bold text-[13px] mb-1.5 tracking-wide uppercase">
                Unauthorized Source: Access Restricted
              </h4>
              <p className="text-gray-400 text-[12px] leading-[1.6]">
                Current IP address is not authorized for this environment. Reach out to your Business Manager for mandatory security clearance.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SecurityNotification;