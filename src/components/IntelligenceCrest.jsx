import React from 'react';
import { motion } from 'framer-motion';

const IntelligenceCrest = () => {
  return (
    <div className="relative w-full max-w-[600px] h-[180px] flex items-center justify-center pointer-events-none select-none overflow-visible">
      
      {/* Background Circuit Lines - Extremely subtle */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <svg width="600" height="100" viewBox="0 0 600 100" className="w-full h-full">
          <defs>
            <linearGradient id="line-fade" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0)" />
              <stop offset="20%" stopColor="rgba(139, 92, 246, 0.3)" />
              <stop offset="50%" stopColor="rgba(139, 92, 246, 0.5)" />
              <stop offset="80%" stopColor="rgba(139, 92, 246, 0.3)" />
              <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
            </linearGradient>
          </defs>
          {/* Left Lines */}
          <path d="M0 50 L220 50 L240 30" stroke="url(#line-fade)" strokeWidth="1" fill="none" />
          <path d="M0 50 L220 50 L240 70" stroke="url(#line-fade)" strokeWidth="1" fill="none" />
          <circle cx="240" cy="30" r="2" fill="#8B5CF6" className="opacity-50" />
          <circle cx="240" cy="70" r="2" fill="#8B5CF6" className="opacity-50" />

          {/* Right Lines */}
          <path d="M600 50 L380 50 L360 30" stroke="url(#line-fade)" strokeWidth="1" fill="none" />
          <path d="M600 50 L380 50 L360 70" stroke="url(#line-fade)" strokeWidth="1" fill="none" />
          <circle cx="360" cy="30" r="2" fill="#8B5CF6" className="opacity-50" />
          <circle cx="360" cy="70" r="2" fill="#8B5CF6" className="opacity-50" />
        </svg>
      </div>

      {/* Main Core Container */}
      <motion.div 
        className="relative w-32 h-32 flex items-center justify-center"
        animate={{ 
          filter: ['brightness(1)', 'brightness(1.1)', 'brightness(1)'] 
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        {/* Glow Halo */}
        <div className="absolute inset-0 bg-purple-500/30 blur-[40px] rounded-full scale-150" />
        <div className="absolute inset-0 bg-blue-500/20 blur-[30px] rounded-full scale-125 translate-y-2" />

        {/* Petals / Lobes - Radial symmetry */}
        {[0, 60, 120, 180, 240, 300].map((rotation, i) => (
          <motion.div
            key={i}
            className="absolute w-12 h-16 origin-bottom rounded-full opacity-80 mix-blend-screen"
            style={{ 
              rotate: rotation, 
              bottom: '50%',
              background: `linear-gradient(to top, rgba(59, 130, 246, 0.8), rgba(168, 85, 247, 0.6))`
            }}
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          >
             <div className="w-full h-full bg-gradient-to-t from-blue-500/40 to-fuchsia-500/40 rounded-full blur-[2px]" />
          </motion.div>
        ))}

        {/* Central Core - Bright Diamond/Star */}
        <motion.div 
          className="absolute z-10 w-10 h-10 bg-white rounded-lg shadow-[0_0_30px_rgba(255,255,255,0.8)]"
          style={{ rotate: 45 }}
          animate={{ 
            opacity: [0.9, 1, 0.9],
            scale: [0.95, 1.05, 0.95]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 via-white to-pink-100 opacity-100 rounded-lg blur-[1px]" />
        </motion.div>

        {/* Inner Soft Core Glow */}
        <div className="absolute z-0 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-md opacity-60" />

      </motion.div>
    </div>
  );
};

export default IntelligenceCrest;