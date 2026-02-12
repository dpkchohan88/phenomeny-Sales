
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
  { id: 1, label: "Interface" },
  { id: 2, label: "Platform" },
  { id: 3, label: "Operations" },
  { id: 4, label: "Scale" }
];

const ProgressBar = ({ currentStep, totalSteps = 4 }) => {
  // Calculate progress percentage for the bar background
  const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="w-full max-w-3xl mx-auto mb-10 px-4">
      <div className="relative flex items-center justify-between">
        
        {/* Background Track */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/[0.1] -translate-y-1/2 rounded-full z-0" />
        
        {/* Active Progress Fill */}
        <motion.div 
          className="absolute top-1/2 left-0 h-[2px] bg-gradient-to-r from-[#7C3AED] to-[#EC4899] -translate-y-1/2 rounded-full z-0"
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(progressPercentage, 100)}%` }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />

        {/* Steps */}
        {steps.map((step) => {
          const isCompleted = currentStep > step.id;
          const isActive = currentStep === step.id;

          return (
            <div key={step.id} className="relative z-10 flex flex-col items-center group">
              <motion.div
                initial={false}
                animate={{
                  scale: isActive ? 1.2 : 1,
                  backgroundColor: '#0F1218', // Consistent dark background for circles
                  borderColor: isCompleted ? '#10B981' : (isActive ? '#7C3AED' : 'rgba(255, 255, 255, 0.1)'),
                  boxShadow: isActive ? '0 0 10px rgba(124, 58, 237, 0.15)' : 'none', // Subtle glow only on active
                }}
                className={cn(
                  "w-8 h-8 md:w-10 md:h-10 rounded-full border-[1.5px] flex items-center justify-center transition-all duration-300",
                )}
              >
                {isCompleted ? (
                   <Check className="w-4 h-4 md:w-5 md:h-5 text-[#10B981]" strokeWidth={3} /> // Muted green checkmark
                ) : (
                   <span className={cn(
                     "text-xs md:text-sm font-bold",
                     isActive ? "text-[#EC4899]" : "text-gray-500"
                   )}>
                     {step.id}
                   </span>
                )}
              </motion.div>

              {/* Label */}
              <span className={cn(
                "absolute top-10 md:top-12 text-xs font-medium uppercase tracking-wider transition-colors duration-300 w-24 text-center", // Lighter gray labels
                isActive ? "text-white" : isCompleted ? "text-gray-500" : "text-gray-600"
              )}>
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
