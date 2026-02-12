import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Users, 
  Hand, 
  Eye, 
  MessageSquare, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight,
  ChevronRight,
  Shield,
  FileText,
  Layers,
  Scale
} from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { seoMetadata } from '@/config/seoMetadata';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// --- Shared Components ---

const Badge = ({ text, color = "blue" }) => {
  const colors = {
    blue: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    pink: "bg-pink-500/10 text-pink-400 border-pink-500/20",
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
        "px-3 py-1 rounded-full border text-[11px] font-bold uppercase tracking-widest backdrop-blur-sm flex items-center gap-2",
        colors[color] || colors.blue
      )}>
        <Bot size={12} />
        {text}
      </span>
    </motion.div>
  );
};

const SectionHeading = ({ title, subheading, className }) => (
  <div className={cn("text-center max-w-4xl mx-auto mb-16", className)}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
    >
      {title}
    </motion.h2>
    {subheading && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
      >
        {subheading}
      </motion.p>
    )}
  </div>
);

const GlassCard = ({ title, description, icon: Icon, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.4 }}
    whileHover={{ y: -5, scale: 1.02 }}
    className={cn(
      "p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.06] hover:border-pink-500/30 transition-all duration-300 group flex flex-col relative overflow-hidden shadow-lg h-full",
      className
    )}
  >
    <div className="relative z-10">
      {Icon && (
        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 group-hover:text-pink-400 group-hover:bg-pink-500/10 group-hover:border-pink-500/20 transition-all duration-300 mb-6 group-hover:scale-110">
          <Icon size={24} strokeWidth={1.5} />
        </div>
      )}
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm">{description}</p>
    </div>
  </motion.div>
);

const PageCard = ({ title, description, href, icon: Icon }) => (
  <Link to={href} className="block group h-full">
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-6 rounded-2xl border border-white/10 bg-[#13151A] hover:border-pink-500/30 transition-all h-full flex flex-col relative"
    >
      <div className="mb-4 text-pink-400 group-hover:text-pink-300 transition-colors">
        <Icon size={28} strokeWidth={1.5} />
      </div>
      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-pink-400 transition-colors flex items-center gap-2">
        {title} <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
      </h3>
      <p className="text-sm text-gray-400">{description}</p>
    </motion.div>
  </Link>
);

const AIAssistantsHumanAICollaboration = () => {
  return (
    <>
      <SEOHead {...(seoMetadata['/ai-assistants/human-ai-collaboration'] || {})} />
      
      <main className="bg-[#0E0F11] text-white overflow-hidden w-full font-sans">
        
        {/* Breadcrumb Navigation */}
        <div className="pt-24 px-6 max-w-7xl mx-auto">
          <nav className="flex items-center text-sm text-gray-400 space-x-2">
            <Link to="/ai-assistants" className="hover:text-white transition-colors">AI Assistants™</Link>
            <ChevronRight size={14} />
            <span className="text-white">Human + AI Collaboration</span>
          </nav>
        </div>

        {/* 1. HERO SECTION */}
        <section className="relative pt-20 pb-20 px-6 overflow-hidden min-h-[85vh] flex flex-col justify-center">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <Badge text="HUMAN + AI COLLABORATION" color="violet" />
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight"
            >
              Optimizing the handoff between <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">
                people and machines
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Enterprise autonomy isn't about replacing humans—it's about creating a seamless, high-trust loop where AI handles the execution and humans handle the judgment.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/ai-assistants/overview">
                <Button size="lg" className="bg-[#EC4899] hover:bg-[#db2777] text-white rounded-full px-8 h-14 text-lg font-bold shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all hover:scale-105">
                  Explore AI Assistants™
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5 hover:text-white rounded-full px-8 h-14 text-lg font-medium text-gray-300">
                Executive briefing
              </Button>
            </motion.div>
          </div>
        </section>

        {/* 2. WHY HANDOFFS MATTER */}
        <section className="py-24 px-6 bg-[#13151A] border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Why Handoffs Matter" 
              subheading="The biggest risk in automation isn't the AI—it's the gap where context is lost."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               <GlassCard 
                 title="Context Loss" 
                 description="Crucial details are dropped when moving between teams or systems." 
                 icon={AlertTriangle} 
               />
               <GlassCard 
                 title="Blind Decisions" 
                 description="Decisions are made without full visibility into upstream data." 
                 icon={Eye} 
               />
               <GlassCard 
                 title="Ownership Gaps" 
                 description="Automation acts without clear human accountability for the outcome." 
                 icon={Users} 
               />
               <GlassCard 
                 title="Intervention Lag" 
                 description="People are unsure when or how to intervene safely." 
                 icon={Hand} 
               />
            </div>
          </div>
        </section>

        {/* 3. HUMANS REMAIN OWNERS & RESPONSIBILITY */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              <div className="p-10 rounded-3xl bg-white/[0.03] border border-white/10">
                 <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                   <Users className="text-pink-400" /> Humans:
                 </h3>
                 <ul className="space-y-4 text-lg text-gray-300">
                   <li className="flex gap-3"><span className="text-pink-400">•</span> Define intent and priorities</li>
                   <li className="flex gap-3"><span className="text-pink-400">•</span> Set constraints and approval thresholds</li>
                   <li className="flex gap-3"><span className="text-pink-400">•</span> Review and approve high-impact actions</li>
                   <li className="flex gap-3"><span className="text-pink-400">•</span> Remain accountable for results</li>
                 </ul>
              </div>
              <div className="p-10 rounded-3xl bg-white/[0.03] border border-white/10">
                 <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                   <Bot className="text-violet-400" /> AI Assistants™ support:
                 </h3>
                 <ul className="space-y-4 text-lg text-gray-300">
                   <li className="flex gap-3"><span className="text-violet-400">•</span> Execution, coordination, and insight</li>
                   <li className="flex gap-3"><span className="text-violet-400">•</span> Observing workflows and signals</li>
                   <li className="flex gap-3"><span className="text-violet-400">•</span> Preserving and surfacing context</li>
                   <li className="flex gap-3"><span className="text-violet-400">•</span> Authority remains human</li>
                 </ul>
              </div>
            </div>

            <SectionHeading 
              title="Seamless Handoffs with Context" 
              subheading="When the AI pauses for a human, it brings everything needed to decide instantly."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <GlassCard title="Relevant History" description="Surfaced automatically." icon={Layers} />
              <GlassCard title="Reasoning" description="Decisions presented clearly." icon={FileText} />
              <GlassCard title="Constraints" description="Dependencies visible." icon={Scale} />
              <GlassCard title="No Reconstruction" description="Background info ready." icon={CheckCircle2} />
            </div>
          </div>
        </section>

        {/* 4. REDUCE INTERRUPTION & TRANSPARENCY */}
        <section className="py-24 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
             <SectionHeading 
               title="Designed to Reduce Interruption" 
               subheading="We optimize for 'quiet' autonomy that respects human attention."
             />
             <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
               <GlassCard title="Act Autonomously" description="Where permitted." icon={Zap} />
               <GlassCard title="Pause Only" description="When required." icon={Hand} />
               <GlassCard title="Escalate Exceptions" description="With full context." icon={AlertTriangle} />
               <GlassCard title="Avoid Noise" description="No low-value pings." icon={Shield} />
             </div>

             <SectionHeading 
               title="Supporting Trust Through Transparency" 
               subheading="Trust is earned through observability, not black boxes."
             />
             <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
               <GlassCard title="Explain Why" description="Rationale for actions." icon={MessageSquare} />
               <GlassCard title="Show Inputs" description="Data considered." icon={Eye} />
               <GlassCard title="Observable Steps" description="Watch execution live." icon={Activity} />
               <GlassCard title="Easy Override" description="Intervene anytime." icon={Lock} />
             </div>
          </div>
        </section>

        {/* 5. COLLABORATION & LEARNING */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
             <SectionHeading title="Collaboration Across Roles" />
             <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
               <GlassCard title="Individual Contributors" icon={Users} />
               <GlassCard title="Managers & Reviewers" icon={ShieldCheck} />
               <GlassCard title="Cross-Functional Teams" icon={Network} />
               <GlassCard title="Distributed Teams" icon={Globe} />
             </div>

             <SectionHeading title="Learning & Improvement Over Time" />
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <GlassCard title="Refines Recommendations" description="Gets smarter with every interaction." icon={TrendingUp} />
               <GlassCard title="Adjusts Thresholds" description="Tunes escalation sensitivity based on feedback." icon={Settings} />
               <GlassCard title="Improves Alignment" description="Learns your specific organizational norms." icon={Target} />
             </div>
          </div>
        </section>

        {/* 6. WHAT THIS ENABLES */}
        <section className="py-24 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="What Human + AI Collaboration Enables" 
              subheading="The outcome of a well-designed partnership."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
               <GlassCard title="Faster Execution" description="Without loss of control." icon={Zap} />
               <GlassCard title="Clear Ownership" description="Of every outcome." icon={ShieldCheck} />
               <GlassCard title="Reduced Friction" description="Smoother operations." icon={Layers} />
               <GlassCard title="Higher Trust" description="In AI-assisted work." icon={HeartHandshake} />
               <GlassCard title="Sustainable Adoption" description="At enterprise scale." icon={Scale} />
            </div>
          </div>
        </section>

        {/* 7. CONTINUE EXPLORING */}
        <section className="py-24 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge text="Next steps" color="violet" />
              <h2 className="text-3xl font-bold text-white mb-4">Continue exploring</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Deep dive into the safety and governance layers.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PageCard 
                title="Agent Governance & Control" 
                description="Deep dive into permissioning and safety guardrails." 
                href="/ai-assistants/governance-control" 
                icon={Shield} 
              />
              <PageCard 
                title="Audit Trails & Oversight" 
                description="Complete visibility into every agent action." 
                href="/ai-assistants/audit-trails" 
                icon={FileText} 
              />
              <PageCard 
                title="Where They Fit" 
                description="See where agents integrate into your existing stack." 
                href="/ai-assistants/where-they-fit" 
                icon={Layers} 
              />
            </div>
          </div>
        </section>

        {/* 8. FINAL CTA */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-pink-900/20 to-purple-900/20 rounded-3xl p-12 text-center border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to design collaboration at scale?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
                Build a workforce where humans and AI play to their strengths.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[#EC4899] hover:bg-[#db2777] text-white rounded-full px-8 py-6 text-lg font-bold shadow-lg transition-all hover:scale-105">
                  Contact Sales
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white rounded-full px-8 py-6 text-lg font-medium">
                  Request demo
                </Button>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

// Imports for icons used in the component
import { Activity, Globe, HeartHandshake, Lock, Network, Settings, ShieldCheck, Target, TrendingUp, Zap } from 'lucide-react';

export default AIAssistantsHumanAICollaboration;