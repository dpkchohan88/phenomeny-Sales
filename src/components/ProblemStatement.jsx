import React from 'react';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  TrendingUp, 
  Database, 
  Users, 
  Package, 
  Building, 
  BarChart3, 
  CheckSquare, 
  HelpCircle, 
  AlertCircle 
} from 'lucide-react';

const ProblemCard = ({ title, description, icons, accentColor, glowColor }) => {
  return (
    <div 
      className="group relative bg-[#13161B] border border-white/5 rounded-xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 h-full"
      style={{
        '--card-glow': glowColor
      }}
    >
      {/* Hover Glow Effect */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: `0 0 40px -10px ${glowColor}`,
          border: `1px solid ${glowColor}40` 
        }}
      />
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Icon Cluster */}
        <div className="mb-6 md:mb-8 flex justify-center">
          <div className="relative w-full aspect-[2/1] bg-black/20 rounded-lg border border-white/5 flex items-center justify-center overflow-hidden">
            {/* Subtle grid pattern inside icon container */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px]" />
            
            <div className="relative grid grid-cols-2 gap-4">
              {icons.map((Icon, idx) => (
                <div 
                  key={idx} 
                  className="p-3 rounded-lg flex items-center justify-center transition-colors duration-300"
                  style={{
                    backgroundColor: `${accentColor}1A`, 
                    color: accentColor,
                    borderColor: `${accentColor}33` 
                  }}
                >
                  <Icon className="w-6 h-6 stroke-[1.5]" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-auto text-center md:text-left">
          <h3 className="text-xl md:text-xl font-bold text-white mb-2 md:mb-3 font-sans tracking-tight">
            {title}
          </h3>
          <p className="text-gray-400 leading-relaxed font-sans text-[14px] md:text-base">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const ProblemStatement = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-6 bg-[#0B0D10] overflow-hidden">
      {/* Background Elements: Dark Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] pointer-events-none" />
      
      <div className="relative w-full max-w-7xl mx-auto z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 lg:mb-24">
          <h2 className="text-[24px] md:text-[32px] lg:text-5xl font-bold text-white mb-4 md:mb-6 tracking-tight leading-tight">
            When systems don't connect, people fill the gaps.
          </h2>
          <p className="text-[16px] md:text-xl text-gray-400 leading-relaxed font-normal px-2">
            Manual coordination replaces automation, and context is lost between teams, tools, and decisions.
          </p>
        </div>

        {/* Cards Grid - Responsive Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          <ProblemCard 
            title="Disconnected tools"
            description="Customer conversations and activity live in separate places."
            icons={[Phone, MessageCircle, Mail, TrendingUp]}
            accentColor="#60A5FA" 
            glowColor="rgba(96, 165, 244, 0.2)"
          />

          <ProblemCard 
            title="Context loss"
            description="Data exists, but teams and leaders never see the full picture."
            icons={[Database, Users, Package, Building]}
            accentColor="#A78BFA" 
            glowColor="rgba(167, 139, 250, 0.2)"
          />

          {/* On tablet, the 3rd item might span or just sit in 2nd row - grid-cols-2 handles wrap */}
          <div className="md:col-span-2 lg:col-span-1 md:w-2/3 lg:w-full md:mx-auto">
             <ProblemCard 
              title="Manual stitching"
              description="People spend time connecting systems instead of running the business."
              icons={[BarChart3, CheckSquare, HelpCircle, AlertCircle]}
              accentColor="#FBBF24" 
              glowColor="rgba(251, 191, 36, 0.2)"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;