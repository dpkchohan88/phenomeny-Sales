import React from 'react';
import { 
  LayoutDashboard, 
  Workflow, 
  Sparkles 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const ShiftItem = ({ icon: Icon, title, description, colorClass, className }) => {
  return (
    <div className={cn("flex flex-col items-center text-center px-4 w-full", className)}>
      <div className={cn("mb-4 md:mb-6 p-4 rounded-2xl bg-white/[0.03] border border-white/10", colorClass)}>
        <Icon className="w-6 h-6 md:w-8 md:h-8 stroke-[1.5]" />
      </div>
      <h3 className="text-[20px] md:text-xl font-bold text-white mb-2 md:mb-3 font-sans tracking-tight">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed font-sans text-[14px] md:text-base max-w-sm">
        {description}
      </p>
    </div>
  );
};

const TheShift = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 px-4 md:px-8 bg-[#0E0F11] overflow-hidden border-t border-white/5">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/10 via-[#0E0F11] to-[#0E0F11] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)] pointer-events-none opacity-50" />

      <div className="relative w-full max-w-7xl mx-auto z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20 lg:mb-24">
          <h2 className="text-[24px] md:text-[32px] lg:text-5xl font-bold text-white mb-4 md:mb-6 tracking-tight leading-tight">
            When systems connect, work starts flowing.
          </h2>
          <p className="text-[16px] md:text-xl text-gray-400 leading-relaxed font-normal px-2">
            Instead of people chasing information, systems share it automatically—giving leaders visibility and teams momentum.
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-x-8 lg:gap-y-16">
          
          <ShiftItem 
            icon={LayoutDashboard}
            title="Unified visibility"
            description="Leaders see what's happening across teams, customers, and operations—without waiting for reports."
            colorClass="text-blue-400"
          />

          <ShiftItem 
            icon={Workflow}
            title="Connected operations"
            description="Sales, service, operations, and support work from the same data—no handoffs required."
            colorClass="text-purple-400"
          />

          <ShiftItem 
            icon={Sparkles}
            title="Assisted execution"
            description="AI supports routine coordination so teams focus on decisions, not follow-ups."
            colorClass="text-emerald-400"
            className="md:col-span-2 lg:col-span-1 md:w-2/3 lg:w-full md:mx-auto"
          />
        </div>

        {/* Closing Note */}
        <div className="mt-16 md:mt-24 text-center">
          <p className="text-gray-500 text-sm md:text-base font-medium tracking-wide uppercase opacity-80 px-4">
            This is the foundation AI needs to actually deliver value.
          </p>
        </div>

      </div>
    </section>
  );
};

export default TheShift;