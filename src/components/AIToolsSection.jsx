import React from 'react';
import { Bot, ClipboardList, Calendar, Search, Wand2, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const ToolCard = ({ icon: Icon, title, description, color, children, className }) => {
  const colorsMap = {
    pink: "text-[#FF1493]",
    purple: "text-[#9D4EDD]",
    blue: "text-[#0099FF]",
    orange: "text-[#FF8C42]",
    green: "text-[#00FF88]"
  };

  const gradients = {
    pink: "linear-gradient(135deg, rgba(255, 20, 147, 0.15), rgba(255, 20, 147, 0.05)), rgba(15, 15, 20, 0.6)",
    purple: "linear-gradient(135deg, rgba(147, 78, 221, 0.15), rgba(147, 78, 221, 0.05)), rgba(15, 15, 20, 0.6)",
    blue: "linear-gradient(135deg, rgba(0, 153, 255, 0.15), rgba(0, 153, 255, 0.05)), rgba(15, 15, 20, 0.6)",
    orange: "linear-gradient(135deg, rgba(255, 140, 66, 0.15), rgba(255, 140, 66, 0.05)), rgba(15, 15, 20, 0.6)",
    green: "linear-gradient(135deg, rgba(0, 255, 136, 0.15), rgba(0, 255, 136, 0.05)), rgba(15, 15, 20, 0.6)"
  };

  const iconColorClass = colorsMap[color];
  const bgGradient = gradients[color];

  return (
    <div 
      className={cn(
        "group relative flex flex-col overflow-hidden min-h-[320px] md:min-h-[360px]",
        "p-6 md:p-10 rounded-[20px]",
        "border-2 border-white/[0.12]",
        "backdrop-blur-[25px] backdrop-saturate-[1.2] backdrop-brightness-[1.1]",
        "shadow-[inset_0_0_30px_rgba(255,255,255,0.08),0_20px_60px_rgba(0,0,0,0.5)]",
        "transition-all duration-300 ease-out",
        "hover:backdrop-blur-[30px] hover:backdrop-saturate-[1.3] hover:backdrop-brightness-[1.15]",
        "hover:border-white/[0.18]",
        "hover:shadow-[inset_0_0_30px_rgba(255,255,255,0.08),0_24px_80px_rgba(0,0,0,0.6)]",
        "hover:-translate-y-[4px] md:hover:-translate-y-[6px]",
        className
      )}
      style={{
        background: bgGradient
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_60%)] pointer-events-none" />
      
      <div className={cn(
        "mb-5 md:mb-6 w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center transition-all duration-300",
        iconColorClass,
        "drop-shadow-[0_0_15px_rgba(var(--tw-shadow-color),0.5)]" 
      )} style={{ filter: `drop-shadow(0 0 10px ${color === 'pink' ? '#FF1493' : color === 'purple' ? '#9D4EDD' : color === 'blue' ? '#0099FF' : color === 'orange' ? '#FF8C42' : '#00FF88'}66)` }}>
        <Icon size={32} className="md:w-[48px] md:h-[48px]" strokeWidth={1.5} />
      </div>

      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 tracking-tight font-sans">{title}</h3>
      
      <p className="text-[#B0B0B0] text-[13px] md:text-sm leading-relaxed mb-6 md:mb-8 max-w-[95%]">
        {description}
      </p>

      <div className="mt-auto relative w-full rounded-xl overflow-hidden bg-black/20 border border-white/5 min-h-[140px] md:min-h-[180px]">
        {children}
      </div>
    </div>
  );
};

const AgentsVisual = () => (
  <div className="absolute inset-0 p-4 flex flex-col gap-3 pointer-events-none">
     <div className="flex items-center justify-between p-3 rounded-lg bg-[#1A1D21] border border-white/10 shadow-lg transform group-hover:translate-x-1 transition-transform duration-700">
        <div className="flex items-center gap-3">
           <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center">
              <Bot size={16} className="text-pink-500" />
           </div>
           <div className="flex flex-col">
              <span className="text-xs font-medium text-white">Status updates</span>
           </div>
        </div>
     </div>
  </div>
);

const ProjectsVisual = () => (
  <div className="absolute inset-0 p-4 flex flex-col gap-2 pointer-events-none overflow-hidden">
    {[1, 2].map((_, i) => (
      <div key={i} className="flex items-center justify-between p-2.5 rounded border border-white/5 bg-[#151518]">
         <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full border border-white/10 bg-gray-700`} />
            <span className="text-[10px] text-gray-300 font-medium">Workflow step</span>
         </div>
      </div>
    ))}
  </div>
);

const MeetingsVisual = () => (
    <div className="absolute inset-0 p-4 flex flex-col justify-end pointer-events-none">
       <div className="flex gap-2 mb-3 h-16 relative z-10">
          <div className="flex-1 bg-[#2A2D33] rounded-lg border border-white/5 relative overflow-hidden"></div>
          <div className="flex-1 bg-[#2A2D33] rounded-lg border border-white/5 relative overflow-hidden"></div>
       </div>
    </div>
)

const SearchVisual = () => (
    <div className="absolute inset-0 p-4 pointer-events-none">
       <div className="w-full bg-[#1A1D21] rounded-lg border border-white/10 overflow-hidden shadow-2xl relative">
          <div className="p-2 border-b border-white/5 bg-[#222529] flex items-center gap-2">
             <Sparkles size={12} className="text-orange-400" />
             <span className="text-[10px] font-bold text-white">Answers</span>
          </div>
       </div>
    </div>
)

const CreatorVisual = () => (
    <div className="absolute inset-0 p-4 pointer-events-none flex flex-col">
       <div className="bg-[#1A1D21] border border-white/10 rounded-lg flex-1 p-3 relative overflow-hidden shadow-xl">
       </div>
    </div>
)

const AIToolsSection = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 px-4 md:px-8 bg-gradient-to-b from-black via-[#0B0D10] to-[#121417]">
       <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
       
       <div className="max-w-[1200px] mx-auto relative z-10">
          
          <div className="flex flex-col items-center text-center mb-12 md:mb-20">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)] mb-6 md:mb-8">
                <span className="text-xs md:text-sm font-medium text-white/90 font-['Space_Grotesk']">⚡ The complete AI-enabled operating layer</span>
             </div>
             
             <h2 className="text-[28px] md:text-4xl lg:text-6xl font-bold font-['Space_Grotesk'] tracking-tight leading-[1.1] md:leading-[1.15]">
                <span className="text-white block">Transform how work runs</span>
                <span className="text-[#A0A0A0] block">with AI that fits your business</span>
             </h2>

             <p className="mt-6 md:mt-10 text-[16px] md:text-[18px] font-normal text-[#A0A0A0] leading-[1.6] max-w-[700px] px-2">
                AI that operates across your systems, teams, and workflows — without replacing what already works.
             </p>
          </div>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8">
             
             <div className="lg:col-span-3">
                <ToolCard 
                   icon={Bot} 
                   title="AI-Assisted Execution" 
                   description="Routine coordination, follow-ups, and task movement happen automatically."
                   color="pink"
                >
                   <AgentsVisual />
                </ToolCard>
             </div>
             <div className="lg:col-span-3">
                <ToolCard 
                   icon={ClipboardList} 
                   title="Autonomous Workflows" 
                   description="Work progresses across systems with built-in logic and outcomes."
                   color="purple"
                >
                   <ProjectsVisual />
                </ToolCard>
             </div>

             <div className="lg:col-span-2">
                <ToolCard 
                   icon={Calendar} 
                   title="AI Meetings & Notes" 
                   description="Conversations turn into structured actions automatically."
                   color="blue"
                >
                   <MeetingsVisual />
                </ToolCard>
             </div>
             <div className="lg:col-span-2">
                <ToolCard 
                   icon={Search} 
                   title="Unified Search & Ask" 
                   description="Ask questions across systems and get answers grounded in real data."
                   color="orange"
                >
                   <SearchVisual />
                </ToolCard>
             </div>
             <div className="lg:col-span-2">
                <ToolCard 
                   icon={Wand2} 
                   title="Custom AI Assistants" 
                   description="AI assistants tailored to your workflows, data, and rules."
                   color="green"
                >
                   <CreatorVisual />
                </ToolCard>
             </div>
          </div>

       </div>
    </section>
  );
};

export default AIToolsSection;