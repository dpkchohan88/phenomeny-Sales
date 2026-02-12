import React from 'react';
import { motion } from 'framer-motion';
import { 
  Layers, 
  Workflow, 
  Shield, 
  Zap, 
  Brain, 
  Share2, 
  Lock, 
  Database,
  Search,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Network,
  Eye,
  Users
} from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { seoMetadata } from '@/config/seoMetadata';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// --- Shared Components ---

const Badge = ({ text, color = "pink" }) => {
  const colors = {
    pink: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    blue: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    violet: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    green: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex justify-center mb-6"
    >
      <span className={cn(
        "px-3 py-1 rounded-full border text-[11px] font-bold uppercase tracking-widest backdrop-blur-sm",
        colors[color] || colors.pink
      )}>
        {text}
      </span>
    </motion.div>
  );
};

const SectionHeading = ({ title, subtitle, className }) => (
  <div className={cn("text-center max-w-4xl mx-auto mb-16", className)}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const GlassCard = ({ title, description, icon: Icon, color = "pink", className, delay = 0 }) => {
  const themes = {
    pink: {
      bg: "bg-pink-500/[0.03]",
      border: "border-pink-500/10",
      hover: "hover:bg-pink-500/[0.08] hover:border-pink-500/30 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]",
      icon: "text-pink-400 bg-pink-500/10 border-pink-500/20"
    },
    blue: {
      bg: "bg-sky-500/[0.03]",
      border: "border-sky-500/10",
      hover: "hover:bg-sky-500/[0.08] hover:border-sky-500/30 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)]",
      icon: "text-sky-400 bg-sky-500/10 border-sky-500/20"
    },
    violet: {
      bg: "bg-purple-500/[0.03]",
      border: "border-purple-500/10",
      hover: "hover:bg-purple-500/[0.08] hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]",
      icon: "text-purple-400 bg-purple-500/10 border-purple-500/20"
    },
    green: {
      bg: "bg-emerald-500/[0.03]",
      border: "border-emerald-500/10",
      hover: "hover:bg-emerald-500/[0.08] hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
      icon: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
    }
  };

  const theme = themes[color] || themes.pink;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={cn(
        "p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 group flex flex-col h-full",
        theme.bg,
        theme.border,
        theme.hover,
        className
      )}
    >
      {Icon && (
        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6 border", theme.icon)}>
          <Icon size={24} strokeWidth={2} />
        </div>
      )}
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm md:text-[15px]">{description}</p>
    </motion.div>
  );
};

// --- Page Component ---

const AINativeOperatingLayer = () => {
  return (
    <>
      <SEOHead {...(seoMetadata['/ai-native-operating-layer'] || {})} />
      
      <main className="bg-[#0E0F11] text-white overflow-hidden w-full">
        
        {/* 1. HERO SECTION */}
        <section className="relative pt-32 pb-20 px-6 min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-pink-900/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <Badge text="The foundation" color="pink" />
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-[1.1]"
            >
              AI-Native <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
                Operating Layer
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
            >
              The missing link between your fragmented systems and the promise of autonomous enterprise operations.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="bg-[#EC4899] hover:bg-[#db2777] text-white rounded-full px-8 py-6 text-lg font-bold shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all hover:scale-105">
                Explore the layer
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5 hover:text-white rounded-full px-8 py-6 text-lg font-medium text-gray-300">
                Request demo
              </Button>
            </motion.div>
          </div>

          {/* Hero Abstract Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-20 relative w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-pink-500/50 to-transparent"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-1 bg-pink-500 shadow-[0_0_40px_rgba(236,72,153,0.8)] blur-sm rounded-full" />
          </motion.div>
        </section>

        {/* 2. THE PROBLEM */}
        <section className="py-24 px-6 relative border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <Badge text="The challenge" color="blue" />
            <SectionHeading 
              title="Your stack is powerful. But it's disconnected." 
              subtitle="SaaS sprawl has created silos where data is trapped, context is lost, and automation hits a wall."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <GlassCard 
                title="Siloed Data" 
                description="Vital information lives in closed loops—Slack, CRM, Jira—without a unified view."
                icon={Database}
                color="blue"
                delay={0}
              />
              <GlassCard 
                title="Fragile Scripts" 
                description="Zapier and Python scripts break whenever an API changes or a process evolves."
                icon={Network}
                color="blue"
                delay={0.1}
              />
              <GlassCard 
                title="Context Blindness" 
                description="AI tools generate generic text because they lack deep awareness of your company history."
                icon={Eye}
                color="blue"
                delay={0.2}
              />
              <GlassCard 
                title="Human Bottlenecks" 
                description="Simple approvals and routings still require manual intervention, slowing execution."
                icon={Users}
                color="blue"
                delay={0.3}
              />
            </div>
          </div>
        </section>

        {/* 3. WHAT AI-NATIVE MEANS */}
        <section className="py-24 px-6 bg-[#0E0F11]">
          <div className="max-w-5xl mx-auto text-center">
            <Badge text="The definition" color="violet" />
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-white mb-8"
            >
              What does "AI-Native" mean?
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12"
            >
              It means your operating system doesn't just store data—it <span className="text-purple-400 font-bold">understands</span> it.
            </motion.p>
            
            <div className="p-8 border border-purple-500/20 rounded-3xl bg-purple-500/[0.03] backdrop-blur-sm">
               <p className="text-lg text-gray-400 italic">
                 "Traditional software waits for input. An AI-Native Operating Layer proactively observes, reasons, and acts to move business objectives forward."
               </p>
            </div>
          </div>
        </section>

        {/* 4. THREE RESPONSIBILITIES */}
        <section className="py-24 px-6 bg-gradient-to-b from-[#0E0F11] to-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <Badge text="The architecture" color="pink" />
            <SectionHeading 
              title="Three core responsibilities" 
              subtitle="The layer sits above your apps and below your people, handling the cognitive load of coordination."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <GlassCard 
                title="1. Unify Context" 
                description="Ingests signals from every tool to build a dynamic, real-time knowledge graph of your business."
                icon={Layers}
                color="pink"
                className="bg-pink-900/[0.05] border-pink-500/20"
                delay={0}
              />
               <GlassCard 
                title="2. Understand Intent" 
                description="Uses LLMs to interpret what users need and what the business requires, not just keyword matching."
                icon={Brain}
                color="pink"
                className="bg-pink-900/[0.05] border-pink-500/20"
                delay={0.1}
              />
               <GlassCard 
                title="3. Enable Execution" 
                description="Doesn't just advise—it orchestrates agents to perform tasks, update records, and notify teams."
                icon={Zap}
                color="pink"
                className="bg-pink-900/[0.05] border-pink-500/20"
                delay={0.2}
              />
            </div>
          </div>
        </section>

        {/* 5. FROM FRAGMENTED TO CLARITY */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <Badge text="The transformation" color="violet" />
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">From fragmentation to clarity.</h2>
                <p className="text-gray-400 text-lg mb-8">
                  Stop switching between 20 tabs to understand the state of a project. The operating layer brings it all to you.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Unified search across all connected apps",
                    "Auto-generated status reports from raw signals",
                    "Proactive risk detection in communication channels",
                    "Knowledge that travels with the user"
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="text-purple-400" size={20} />
                      <span className="text-gray-200">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden border border-purple-500/20 bg-[#1A1C23] shadow-2xl"
              >
                {/* Abstract UI representation */}
                <div className="p-8 bg-gradient-to-br from-purple-900/10 to-transparent min-h-[400px] flex items-center justify-center">
                   <div className="relative z-10 w-full max-w-sm bg-black/60 backdrop-blur-xl rounded-xl border border-white/10 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
                          <Brain size={16} className="text-white" />
                        </div>
                        <div className="h-2 w-24 bg-white/20 rounded-full" />
                      </div>
                      <div className="space-y-3">
                        <div className="h-2 w-full bg-white/10 rounded-full" />
                        <div className="h-2 w-5/6 bg-white/10 rounded-full" />
                        <div className="h-2 w-4/6 bg-white/10 rounded-full" />
                      </div>
                      <div className="mt-6 flex gap-3">
                        <div className="h-8 w-20 bg-purple-500/20 rounded-lg border border-purple-500/30" />
                        <div className="h-8 w-20 bg-white/5 rounded-lg border border-white/10" />
                      </div>
                   </div>
                   
                   {/* Orbiting elements */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/5 rounded-full animate-spin-slow pointer-events-none" />
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[180%] border border-white/5 rounded-full animate-reverse-spin pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 6. EXISTING STACK */}
        <section className="py-24 px-6 bg-[#0E0F11] border-y border-white/5">
          <div className="max-w-7xl mx-auto text-center">
            <Badge text="The integration" color="blue" />
            <SectionHeading 
              title="Works with your existing stack" 
              subtitle="No rip and replace. We layer intelligence on top of the tools you already use."
            />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {['Communication', 'Project Mgmt', 'CRM & Sales', 'Development'].map((cat, i) => (
                <div key={i} className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center h-32 hover:bg-white/10 transition-colors">
                  <span className="text-gray-400 font-medium">{cat}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. INTELLIGENCE COMPOUNDS */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <Badge text="The advantage" color="green" />
            <SectionHeading 
              title="Intelligence that compounds" 
              subtitle="The more you use the layer, the smarter it gets at anticipating your business needs."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
               {[
                 { title: "Day 1", desc: "Connects to apps and indexes historical data." },
                 { title: "Month 1", desc: "Learns team patterns, jargon, and workflows." },
                 { title: "Month 6", desc: "Predicts bottlenecks and suggests optimizations." },
                 { title: "Year 1", desc: "Autonomous operation of routine business logic." },
               ].map((item, i) => (
                 <div key={i} className="relative p-6 border-l-2 border-emerald-500/30 pl-8">
                   <div className="absolute left-[-9px] top-6 w-4 h-4 rounded-full bg-[#0E0F11] border-2 border-emerald-500" />
                   <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                   <p className="text-gray-400">{item.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* 8. CONTROL NOT AUTONOMY */}
        <section className="py-24 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
             <Badge text="The governance" color="pink" />
             <SectionHeading 
              title="Control, not just autonomy" 
              subtitle="Enterprise AI requires guardrails. We built safety in by default."
            />
             
             <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
               <GlassCard 
                  title="Human-in-the-loop" 
                  description="Critical decisions are staged for approval. AI proposes, you dispose." 
                  icon={CheckCircle2} 
                  color="pink"
               />
               <GlassCard 
                  title="Role-Based Access" 
                  description="Respects existing permissions. AI never shows data a user can't already see." 
                  icon={Lock} 
                  color="pink"
               />
               <GlassCard 
                  title="Audit Logging" 
                  description="Every AI action is recorded. Rewind and review any automated decision." 
                  icon={Shield} 
                  color="pink"
               />
               <GlassCard 
                  title="Data Privacy" 
                  description="Your data trains your model, and nobody else's. Zero retention policies available." 
                  icon={Database} 
                  color="pink"
               />
             </div>
          </div>
        </section>

        {/* 9. WHAT THIS ENABLES */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <Badge text="The outcome" color="violet" />
            <SectionHeading 
              title="What this enables" 
              subtitle="When the friction of coordination is removed, teams operate at a higher order."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20">
                 <h3 className="text-2xl font-bold text-white mb-4">Instant Onboarding</h3>
                 <p className="text-gray-400 leading-relaxed">
                   New hires don't need to tap shoulders to find docs. The operating layer answers "How do we do X?" instantly with context.
                 </p>
               </div>
               <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20">
                 <h3 className="text-2xl font-bold text-white mb-4">Elastic Scale</h3>
                 <p className="text-gray-400 leading-relaxed">
                   Handle 10x the operational volume without 10x the headcount. Agents absorb the complexity of scaling.
                 </p>
               </div>
               <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20">
                 <h3 className="text-2xl font-bold text-white mb-4">Institutional Memory</h3>
                 <p className="text-gray-400 leading-relaxed">
                   When employees leave, their knowledge stays. The system remembers why decisions were made.
                 </p>
               </div>
               <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20">
                 <h3 className="text-2xl font-bold text-white mb-4">Perfect Compliance</h3>
                 <p className="text-gray-400 leading-relaxed">
                   SOPs are enforced by code, not willpower. Every process step is followed, every time.
                 </p>
               </div>
            </div>
          </div>
        </section>

        {/* 10. FINAL CTA */}
        <section className="py-32 px-6 relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-b from-[#0E0F11] to-pink-900/20" />
           <div className="relative z-10 max-w-4xl mx-auto text-center">
             <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
               Ready to build your <br />
               <span className="text-pink-500">Operating Layer?</span>
             </h2>
             <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
               Join the forward-thinking enterprises that are moving from fragmented SaaS to unified AI operations.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[#EC4899] hover:bg-[#db2777] text-white rounded-full px-10 py-7 text-lg font-bold shadow-2xl shadow-pink-600/20">
                  Start your transformation
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white rounded-full px-10 py-7 text-lg font-medium">
                  Talk to an architect
                </Button>
             </div>
           </div>
        </section>

      </main>
    </>
  );
};

export default AINativeOperatingLayer;