import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const SelectionCard = ({
  item,
  isSelected,
  onClick,
  multiSelect = false,
  accentColor = "#8B5CF6", // default violet, can be overridden per section
}) => {
  return (
    <motion.div
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      layout
      className={cn(
        "relative p-5 rounded-2xl cursor-pointer transition-all duration-300",
        "flex flex-col items-start gap-3 overflow-hidden",
        "border backdrop-blur-xl",
        "bg-[rgba(20,28,40,0.55)]", // glass base
        "shadow-[0_10px_30px_rgba(0,0,0,0.45)]", // soft depth shadow
        isSelected
          ? "border-white/20"
          : "border-white/8 hover:border-white/20"
      )}
      style={{
        boxShadow: isSelected
          ? `0 0 0 1px ${accentColor}40, 0 10px 30px rgba(0,0,0,0.5)`
          : undefined,
      }}
    >
      {/* Left Accent Strip */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl opacity-80"
        style={{ backgroundColor: accentColor }}
      />

      <div className="flex w-full items-start justify-between gap-3">
        {/* Icon */}
        {item.icon && (
          <div
            className={cn(
              "w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
            )}
            style={{
              backgroundColor: isSelected
                ? `${accentColor}20`
                : "rgba(255,255,255,0.05)",
              color: isSelected ? accentColor : "#9CA3AF",
            }}
          >
            <item.icon size={16} />
          </div>
        )}

        {/* Selection Indicator */}
        <div className="relative w-5 h-5 flex-shrink-0 ml-auto">
          <motion.div
            initial={false}
            animate={{
              scale: isSelected ? 1 : 0,
              opacity: isSelected ? 1 : 0,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="absolute inset-0 rounded-full flex items-center justify-center"
            style={{ backgroundColor: accentColor }}
          >
            <Check size={12} className="text-white stroke-[3px]" />
          </motion.div>

          {!isSelected && (
            <div
              className={cn(
                "w-5 h-5 border transition-colors",
                multiSelect ? "rounded-md" : "rounded-full"
              )}
              style={{
                borderColor: "rgba(255,255,255,0.2)",
              }}
            />
          )}
        </div>
      </div>

      {/* Text */}
      <div className="w-full min-w-0">
        <h4
          className={cn(
            "font-semibold text-sm mb-1 transition-colors",
            isSelected ? "text-white" : "text-gray-200"
          )}
        >
          {item.label || item.title}
        </h4>

        {item.description && (
          <p
            className={cn(
              "text-xs leading-relaxed",
              isSelected ? "text-white/70" : "text-gray-400"
            )}
          >
            {item.description}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default SelectionCard;
