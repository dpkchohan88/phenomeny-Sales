import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Share2, 
  Download, 
  ChevronRight, 
  CheckCircle2, 
  Layers, 
  Eye, 
  Zap, 
  BrainCircuit, 
  ShieldCheck,
  ArrowRight,
  Map,
  Search,
  LayoutTemplate,
  Bot,
  Scale,
  TrendingUp,
  AlertTriangle
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
      className="inline-block mb-6"
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

const SectionHeading = ({ number, title, className }) => (
  <div className={cn("mb-8", className)}>
    {number && (
      <span className="text-pink-500 font-mono text-sm tracking-wider uppercase mb-2 block">
        Step {number}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
      {title}
    </h2>
  </div>
);

const StepCard = ({ number, title, description, icon: Icon, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="relative pl-12 pb-12 border-l border-white/10 last:border-0 last:pb-0"
  >
    <div className="absolute left-[-20px] top-0 w-10 h-10 rounded-full bg-[#0E0F11] border border-pink-500/30 flex items-center justify-center z-10">
      <div className="w-3 h-3 rounded-full bg-pink-500" />
    </div>
    
    <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 border border-pink-500/20">
          {Icon ? <Icon size={24} /> : <span className="font-bold text-xl">{number}</span>}
        </div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-gray-400 leading-relaxed text-lg">{description}</p>
    </div>
  </motion.div>
);

const GlassCard = ({ title, description, icon: Icon, color = "pink", className }) => {
  const themes = {
    pink: {
      bg: "bg-pink-500/[0.03]",
      border: "border-pink-500/10",
      hover: "hover:bg-pink-500/[0.08] hover:border-pink-500/30 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]",
      icon: "text-pink-400 bg-pink-500/10 border-pink-500/20"
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
      whileHover={{ y: -5 }}
      className={cn(
        "p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 group flex flex-col h-full",
        theme.bg,
        theme.border,
        theme.hover,
        className
      )}
    >
      {Icon && (
        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6 border transition-colors", theme.icon)}>
          <Icon size={24} strokeWidth={2} />
        </div>
      )}
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm">{description}</p>
    </motion.div>
  );
};

const AITransformationPlaybook = () => {
  return (
    <>
      <SEOHead {...(seoMetadata['/ai-resources/ai-transformation-playbook'] || {})} />
      
      <main className="bg-[#0E0F11] text-white overflow-hidden w-full font-sans">
        
        {/* 1. HEADER */}
        <section className="relative pt-40 pb-20 px-6 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-pink-900/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <Badge text="Playbook" color="pink" />
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
            >
              AI Transformation <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400">
                Playbook
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
            >
              A step-by-step guide to modernize operations with confidence, prioritizing continuity, safety, and long-term capability.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="bg-[#EC4899] hover:bg-[#db2777] text-white rounded-full px-8 h-14 text-lg font-bold shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all hover:scale-105 flex items-center gap-2">
                <Download size={20} />
                Download PDF
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5 hover:text-white rounded-full px-8 h-14 text-lg font-medium text-gray-300 flex items-center gap-2">
                <Share2 size={20} />
                Share
              </Button>
            </motion.div>
          </div>
        </section>

        {/* CONTENT WRAPPER */}
        <div className="max-w-4xl mx-auto px-6 pb-32">
          
          {/* INTRODUCTION */}
          <section className="mb-24 pt-12 border-t border-white/10">
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Introduction</h3>
            <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed">
              <p>
                Transformation is not a switch you flip; it is a ladder you climb. The biggest mistake organizations make is treating AI adoption as a series of isolated software purchases rather than a fundamental architectural shift.
              </p>
              <p>
                This playbook outlines the sequence that successful AI-native enterprises follow. It moves from gaining visibility to establishing governance, and finally to enabling autonomous execution.
              </p>
            </div>
          </section>

          {/* PRINCIPLE */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-24 p-8 bg-gradient-to-br from-pink-900/10 to-transparent border border-pink-500/20 rounded-2xl"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Principle: Sequence Matters More Than Speed</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Trying to automate a process you don't understand is a recipe for disaster at scale. You cannot improve what you cannot see, and you cannot safely automate what you cannot govern. This playbook is ordered intentionally: <strong className="text-pink-400">Visibility → Governance → Automation.</strong>
            </p>
          </motion.section>

          {/* STEPS 1-7 */}
          <section className="mb-24">
            <h2 className="text-4xl font-bold text-white mb-16 text-center">The 7-Step Roadmap</h2>
            
            <div className="relative">
              <StepCard 
                number="01"
                title="Map Work Flows" 
                description="Before you automate, you must observe. Catalog your primary data sources (Salesforce, Jira, Slack) and map the critical paths where value is created. Identify who talks to whom, and where information gets stuck."
                icon={Map}
              />
              
              <StepCard 
                number="02"
                title="Identify Gaps" 
                description="Look for the 'blind spots'—places where work happens outside of systems of record. Where are the spreadsheets? Where are the frantic DMs? These gaps are where your operating layer will provide the most immediate value."
                icon={Search}
                delay={0.1}
              />
              
              <StepCard 
                number="03"
                title="Design Operating Layer" 
                description="Implement a semantic layer that connects your fragmented tools. Ensure that a 'Customer' in your CRM is understood to be the same entity as the 'Client' in your support tickets. This unified context is the foundation of reasoning."
                icon={LayoutTemplate}
                delay={0.2}
              />
              
              <StepCard 
                number="04"
                title="Introduce AI Assistants" 
                description="Deploy 'Human-in-the-Loop' agents first. Use them to draft communications, summarize threads, and surface risks. At this stage, the human is still the driver; the AI is the navigator."
                icon={Bot}
                delay={0.3}
              />
              
              <StepCard 
                number="05"
                title="Embed Governance" 
                description="Define clear 'Trust Boundaries.' What is the maximum dollar amount an agent can approve? Which stakeholders must review a generated report? Hard-code these rules into the operating layer before enabling autonomy."
                icon={Scale}
                delay={0.4}
              />
              
              <StepCard 
                number="06"
                title="Expand Safely" 
                description="Once assistants have proven reliable, grant them limited autonomy within their trust boundaries. Allow the 'Coordinator' agent to schedule meetings without review, but keep the 'Finance' agent on strict approval."
                icon={ShieldCheck}
                delay={0.5}
              />
              
              <StepCard 
                number="07"
                title="Allow Intelligence to Compound" 
                description="As agents execute tasks, they generate data about the work itself—how long it takes, where it blocks, and how success is defined. Feed this 'Signal Intelligence' back into the system to optimize workflows continuously."
                icon={TrendingUp}
                delay={0.6}
              />
            </div>
          </section>

          {/* COMMON PITFALLS */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <SectionHeading title="Common Pitfalls" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-[#13151A] rounded-xl border border-white/10">
                <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center mb-4 text-red-400">
                  <AlertTriangle size={24} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">The Tool Trap</h4>
                <p className="text-sm text-gray-400">Buying dozens of disparate AI tools that don't talk to each other, increasing fragmentation.</p>
              </div>
              <div className="p-6 bg-[#13151A] rounded-xl border border-white/10">
                <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center mb-4 text-red-400">
                  <Eye size={24} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">The Black Box</h4>
                <p className="text-sm text-gray-400">Deploying models that don't explain their reasoning, making it impossible to audit mistakes.</p>
              </div>
              <div className="p-6 bg-[#13151A] rounded-xl border border-white/10">
                <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center mb-4 text-red-400">
                  <Zap size={24} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">The Big Bang</h4>
                <p className="text-sm text-gray-400">Trying to change every workflow at once. Start with one vertical, prove value, then scale.</p>
              </div>
            </div>
          </motion.section>

          {/* WHAT SUCCESS LOOKS LIKE */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <SectionHeading title="What Success Looks Like" />
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-400 mt-1 shrink-0" size={20} />
                  <span className="text-gray-300"><strong>Reduced Coordination Overhead:</strong> Managers spend less time chasing status updates and more time on strategy.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-400 mt-1 shrink-0" size={20} />
                  <span className="text-gray-300"><strong>Linear Scaling:</strong> Taking on 2x the projects only requires 1.2x the headcount.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-400 mt-1 shrink-0" size={20} />
                  <span className="text-gray-300"><strong>Institutional Memory:</strong> When a key employee leaves, the project context remains in the system.</span>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* CLOSING PERSPECTIVE */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Closing Perspective</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              The future belongs to the organized. In an era where intelligence is a commodity, the competitive advantage will go to the companies that can orchestrate that intelligence effectively. This playbook is your starting point for building an organization that is not just faster, but smarter, safer, and more resilient.
            </p>
          </motion.section>

          {/* CONTINUE CONVERSATION */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="text-center mb-10">
              <Badge text="Next steps" color="green" />
              <h2 className="text-3xl font-bold text-white mb-4">Continue the conversation</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="#" className="block group">
                <GlassCard 
                  title="Executive Briefing" 
                  description="Schedule a briefing to discuss how these steps apply to your specific industry constraints."
                  icon={ShieldCheck}
                  color="green"
                  className="h-full group-hover:scale-[1.02] transition-transform cursor-pointer"
                />
              </a>
              <a href="#" className="block group">
                <GlassCard 
                  title="Discuss a Transformation" 
                  description="Talk to our solution architects about mapping your current workflows."
                  icon={ArrowRight}
                  color="green"
                  className="h-full group-hover:scale-[1.02] transition-transform cursor-pointer"
                />
              </a>
            </div>
          </motion.section>

          {/* FINAL CTA */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="py-16 px-8 bg-gradient-to-r from-pink-900/20 to-orange-900/20 rounded-3xl border border-white/10 text-center relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
             
             <div className="relative z-10">
               <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                 Ready to modernize?
               </h2>
               <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                 Start step one today. Download the full PDF for offline reading.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-[#EC4899] hover:bg-[#db2777] text-white rounded-full px-8 py-6 text-lg font-bold shadow-lg transition-all hover:scale-105">
                    Download PDF
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white rounded-full px-8 py-6 text-lg font-medium">
                    Request briefing
                  </Button>
               </div>
             </div>
          </motion.section>

        </div>
      </main>
    </>
  );
};

export default AITransformationPlaybook;