
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import SelectionCard from './SelectionCard';

const LevelAccordion = ({ 
  levelIndex, 
  title, 
  description,
  isOpen, 
  isCompleted, 
  options, 
  selections, 
  onSelect, 
  onNext,
  onToggle
}) => {
  const currentSelections = selections[levelIndex] || [];
  const hasSelection = currentSelections.length > 0;

  const handleSelection = (option) => {
    onSelect(levelIndex, option);
  };

  const isOptionSelected = (optionId) => {
    return currentSelections.some(s => s.id === optionId);
  };

  return (
    <motion.div 
      initial={false}
      animate={{
        opacity: isOpen ? 1 : 0.6,
        borderColor: isOpen ? 'rgba(124, 58, 237, 0.5)' : 'rgba(255, 255, 255, 0.05)',
        boxShadow: isOpen ? '0 0 20px -5px rgba(124, 58, 237, 0.3)' : 'none'
      }}
      className={cn(
        "rounded-2xl border bg-[#0F1218] overflow-hidden transition-all duration-300 backdrop-blur-sm",
        !isOpen && "hover:opacity-80 hover:border-white/10"
      )}
    >
      {/* Header */}
      <button 
        onClick={() => onToggle(levelIndex)}
        className="w-full flex items-center justify-between p-5 text-left outline-none focus:outline-none"
      >
        <div className="flex flex-col gap-1">
          <span className={cn(
            "text-[10px] font-bold uppercase tracking-widest transition-colors",
            isOpen || isCompleted ? "text-[#7C3AED]" : "text-gray-600"
          )}>
            Level {levelIndex + 1}
          </span>
          <h3 className={cn(
            "font-bold text-lg transition-colors", 
            isOpen ? "text-white" : "text-gray-400"
          )}>
            {title}
          </h3>
        </div>

        <div className="flex items-center gap-4">
          {currentSelections.length > 0 && (
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-white/60">
                {currentSelections.length} selected
              </span>
              <div className="w-2 h-2 rounded-full bg-[#7C3AED] shadow-[0_0_8px_#7C3AED]" />
            </div>
          )}
          
          <div className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
            isOpen ? "bg-white/10 rotate-180" : "bg-transparent"
          )}>
            <ChevronDown 
              className={cn("transition-colors", isOpen ? "text-white" : "text-gray-500")} 
              size={18} 
            />
          </div>
        </div>
      </button>

      {/* Expandable Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-5 pb-5 pt-0">
              <p className="text-sm text-gray-500 mb-5">{description}</p>
              
              <div className="grid grid-cols-1 gap-3 mb-6">
                {options.map((option) => (
                  <SelectionCard
                    key={option.id}
                    item={option}
                    isSelected={isOptionSelected(option.id)}
                    onClick={() => handleSelection(option)}
                  />
                ))}
              </div>

              <div className="flex justify-end pt-2 border-t border-white/5">
                <Button 
                  onClick={onNext}
                  disabled={!hasSelection}
                  className={cn(
                    "transition-all duration-300 rounded-lg font-semibold px-6",
                    hasSelection 
                      ? "bg-white text-black hover:bg-gray-200 shadow-[0_0_15px_rgba(255,255,255,0.2)]" 
                      : "bg-white/5 text-gray-500 cursor-not-allowed hover:bg-white/5"
                  )}
                >
                  Next Step
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default LevelAccordion;
