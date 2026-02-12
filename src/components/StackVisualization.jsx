
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Layers, Database, Cpu, Globe } from 'lucide-react';

// Layer definitions to visualize 4 builder levels
const layers = [
  { id: 4, label: "Scale & Growth", icon: Globe },
  { id: 3, label: "Operations & Admin", icon: Database },
  { id: 2, label: "Platform Logic", icon: Cpu },
  { id: 1, label: "Interface & UX", icon: Layers },
];

const StackVisualization = ({ currentLevel }) => {
  // Convert 0-indexed currentLevel to 1-based ID
  const activeId = currentLevel + 1;

  return (
    <div className="w-full h-full min-h-[500px] relative flex items-center justify-center p-8 overflow-hidden">
      {/* Dynamic Background Glow centered on active element */}
      <motion.div 
        animate={{
          background: `radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.15), transparent 70%)`
        }}
        className="absolute inset-0 pointer-events-none" 
      />

      {/* 3D Container */}
      <div className="relative w-[320px] h-[400px] perspective-[1200px] transform-style-3d flex items-center justify-center">
        {/* Stack Group */}
        <div className="relative w-full h-full transform rotate-x-[20deg] rotate-y-[-10deg] rotate-z-[5deg]">
          
          <AnimatePresence mode="popLayout">
            {layers.map((layer, index) => {
              const isActive = layer.id === activeId;
              const isCompleted = layer.id < activeId;
              const isFuture = layer.id > activeId;
              
              // Calculate vertical position in the stack
              // Bottom layer is index 3 (id 1), Top is index 0 (id 4)
              // We want ID 1 at bottom, ID 4 at top.
              // So translateY needs to be inverted relation to ID.
              const yOffset = (4 - layer.id) * 60; // Base spacing

              return (
                <motion.div
                  key={layer.id}
                  initial={{ opacity: 0, y: yOffset + 100 }}
                  animate={{ 
                    y: isActive ? yOffset - 15 : yOffset, // Lift active layer
                    scale: isActive ? 1.05 : 1,
                    opacity: isActive ? 1 : isCompleted ? 0.8 : 0.4,
                    z: isActive ? 50 : 0,
                    filter: isActive ? 'blur(0px)' : isFuture ? 'blur(2px)' : 'blur(0px)',
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 120,
                    damping: 20,
                    mass: 1
                  }}
                  className={cn(
                    "absolute left-0 right-0 h-24 rounded-2xl border transition-colors duration-500 flex items-center px-6 gap-4 backdrop-blur-xl transform-preserve-3d",
                    isActive 
                      ? "bg-[#1A1D24]/90 border-[#7C3AED] shadow-[0_0_30px_rgba(124,58,237,0.4)] z-50" 
                      : isCompleted
                        ? "bg-[#0B0F14]/80 border-white/20 shadow-lg z-10"
                        : "bg-[#0B0F14]/40 border-white/5 shadow-none z-0"
                  )}
                  style={{
                    top: '20%', // Centerish
                    transformOrigin: 'center center',
                  }}
                >
                  {/* Inner Content */}
                  <div className="flex items-center w-full gap-4 transform translate-z-[20px]">
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center shadow-inner",
                      isActive 
                        ? "bg-gradient-to-br from-[#7C3AED] to-[#EC4899] text-white shadow-[#7C3AED]/50" 
                        : isCompleted
                          ? "bg-white/10 text-white"
                          : "bg-white/5 text-gray-500"
                    )}>
                      <layer.icon size={22} />
                    </div>

                    <div className="flex flex-col">
                      <span className={cn(
                        "text-[10px] uppercase tracking-wider font-bold mb-0.5",
                        isActive ? "text-[#EC4899]" : "text-gray-500"
                      )}>
                        Level {layer.id}
                      </span>
                      <span className={cn(
                        "text-base font-bold",
                        isActive ? "text-white" : isCompleted ? "text-gray-200" : "text-gray-600"
                      )}>
                        {layer.label}
                      </span>
                    </div>

                    {/* Completion Check */}
                    {isCompleted && (
                       <div className="ml-auto w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/50">
                          <motion.div 
                            initial={{ scale: 0 }} 
                            animate={{ scale: 1 }}
                            className="w-2 h-2 bg-green-500 rounded-full" 
                          />
                       </div>
                    )}
                  </div>

                  {/* Edge highlight for 3D effect */}
                  <div className={cn(
                    "absolute inset-x-0 -bottom-1 h-1 rounded-b-2xl opacity-50",
                    isActive ? "bg-[#7C3AED]" : "bg-black"
                  )} />
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Base Platform Shadow */}
          <div className="absolute top-[85%] left-10 right-10 h-20 bg-black/60 blur-3xl rounded-[100%] transform scale-y-50" />
        </div>
      </div>
    </div>
  );
};

export default StackVisualization;
