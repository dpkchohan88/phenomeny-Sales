import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Brain, 
  ShieldCheck, 
  Workflow, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Users, 
  Layers, 
  Activity, 
  Lock, 
  Database,
  Cpu,
  Target,
  GitBranch,
  Scale,
  Settings,
  Plus,
  TrendingUp,
  ChevronRight
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

const GlassCard = ({ title, description, icon: Icon, className, delay = 0, variant = "default" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.4 }}
    whileHover={{ y: -5, scale: 1.02 }}
    className={cn(
      "p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 group h-full flex flex-col relative overflow-hidden shadow-lg hover:shadow-2xl",
      variant === "blue" && "bg-sky-900/5 border-sky-500/20 hover:border-sky-500/40 hover:bg-sky-900/10",
      variant === "pink" && "bg-pink-900/5 border-pink-500/20 hover:border-pink-500/40 hover:bg-pink-900/10",
      variant === "violet" && "bg-purple-900/5 border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-900/10",
      variant === "green" && "bg-emerald-900/5 border-emerald-500/20 hover:border-emerald-500/40 hover:bg-emerald-900/10",
      variant === "default" && "bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20",
      className
    )}
  >
    <div className="relative z-10">
      {Icon && (
        <div className={cn(
          "w-12 h-12 rounded-xl border flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110",
          variant === "blue" && "bg-sky-500/10 border-sky-500/20 text-sky-400",
          variant === "pink" && "bg-pink-500/10 border-pink-500/20 text-pink-400",
          variant === "violet" && "bg-purple-500/10 border-purple-500/20 text-purple-400",
          variant === "green" && "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
          variant === "default" && "bg-white/5 border-white/10 text-gray-200"
        )}>
          <Icon size={24} strokeWidth={1.5} />
        </div>
      )}
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm">{description}</p>
    </div>
  </motion.div>
);

const PageCard = ({ title, description, href, icon: Icon }) => (
  <a href={href} className="block group h-full">
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
  </a>
);

const BottomStatement = ({ text, color = "blue" }) => {
  const textColors = {
    blue: "text-sky-200/90",
    green: "text-emerald-200/90",
    violet: "text-purple-200/90",
    pink: "text-pink-200/90"
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-center mt-12 pt-8 border-t border-white/5 w-full max-w-4xl mx-auto"
    >
      <p className={cn("text-xl font-medium", textColors[color] || textColors.blue)}>
        {text}
      </p>
    </motion.div>
  );
};

const AIAssistantsOverview = () => {
  return (
    <>
      <SEOHead {...(seoMetadata['/ai-assistants/overview'] || {})} />
      
      <main className="bg-[#0E0F11] text-white overflow-hidden w-full font-sans">
        
        {/* Breadcrumb Navigation */}
        <div className="pt-24 px-6 max-w-7xl mx-auto">
          <nav className="flex items-center text-sm text-gray-400 space-x-2">
            <Link to="/ai-assistants" className="hover:text-white transition-colors">AI Assistants™</Link>
            <ChevronRight size={14} />
            <span className="text-white">Overview</span>
          </nav>
        </div>

        {/* 1. HERO SECTION */}
        <section className="relative pt-20 pb-20 px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[800px] h-[500px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <Badge text="AI Assistants" color="violet" />
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight"
            >
              Deploy autonomous <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-sky-400">
                AI Assistants™
              </span>
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl md:text-3xl text-gray-200 mb-6 font-semibold"
            >
              Scale your workforce and accelerate operations
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Move beyond simple chatbots. Deploy purpose-built operational agents that understand your business, follow your rules, and execute complex workflows autonomously—safely and at scale.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="bg-[#EC4899] hover:bg-[#db2777] text-white rounded-full px-8 h-14 text-lg font-bold shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all hover:scale-105">
                Learn more
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5 hover:text-white rounded-full px-8 h-14 text-lg font-medium text-gray-300">
                Contact Sales
              </Button>
            </motion.div>
          </div>
        </section>

        {/* 2. OVERVIEW */}
        <section className="py-20 px-6 bg-[#13151A] border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">What makes a true AI Assistant?</h2>
            <p className="text-gray-400 text-lg mb-12 text-center leading-relaxed">
              Unlike generic LLM wrappers, Phenomeny AI Assistants™ are engineered for enterprise reliability.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-10">
              {[
                { title: "Context-aware", desc: "Maintains deep memory of past interactions, decisions, and outcomes." },
                { title: "Governed", desc: "Operates strictly within defined permissions and guardrails." },
                { title: "Explainable", desc: "Provides clear reasoning traces for every action and suggestion." },
                { title: "Integrated", desc: "Connects natively to your existing tools and data pipelines." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2.5 shrink-0" />
                  <div>
                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-violet-400 font-medium">
              Intelligence you can trust to do the work, not just talk about it.
            </p>
          </div>
        </section>

        {/* 3. HOW THEY WORK */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="How They Work" 
              subheading="A continuous loop of perception, reasoning, and action."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <GlassCard 
                title="Understands Request" 
                description="Parses intent from natural language or system triggers."
                icon={Brain}
                variant="blue"
              />
              <GlassCard 
                title="Retrieves History" 
                description="Accesses relevant context from vector memory and logs."
                icon={Database}
                variant="blue"
              />
              <GlassCard 
                title="Plans Execution" 
                description="Formulates a multi-step plan to achieve the goal."
                icon={Workflow}
                variant="blue"
              />
              <GlassCard 
                title="Requests Approval" 
                description="Seeks human sign-off for sensitive or high-risk actions."
                icon={ShieldCheck}
                variant="blue"
              />
              <GlassCard 
                title="Executes Actions" 
                description="Interacts with APIs and systems to perform the work."
                icon={Zap}
                variant="blue"
              />
              <GlassCard 
                title="Adapts & Escalates" 
                description="Learns from feedback or escalates on failure."
                icon={GitBranch}
                variant="blue"
              />
            </div>
            <div className="text-center mt-12 text-gray-400">
               Execution is adaptive—if one path is blocked, the Assistant finds another safe route.
            </div>
            <BottomStatement text="Agents that think before they act." color="blue" />
          </div>
        </section>

        {/* 4. WHERE THEY FIT */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Where They Fit" 
              subheading="Seamlessly embedding into your operational fabric."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <GlassCard 
                title="Workflows" 
                description="Orchestrating processes."
                icon={Layers}
                variant="violet"
              />
              <GlassCard 
                title="Applications" 
                description="Inside your ERP/CRM."
                icon={Cpu}
                variant="violet"
              />
              <GlassCard 
                title="Decisions" 
                description="Augmenting choices."
                icon={Target}
                variant="violet"
              />
              <GlassCard 
                title="Approvals" 
                description="Managing sign-offs."
                icon={CheckCircle2}
                variant="violet"
              />
              <GlassCard 
                title="Reporting" 
                description="Monitoring & analytics."
                icon={Activity}
                variant="violet"
              />
            </div>
            <div className="text-center mt-12 text-gray-400">
              They live where the work happens, not in a separate chat window.
            </div>
            <BottomStatement text="Ubiquitous intelligence across the enterprise." color="violet" />
          </div>
        </section>

        {/* 5. HUMAN + AI COLLABORATION */}
        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Human + AI Collaboration" 
              subheading="A partnership where each plays to their strengths."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-10">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <Users className="text-gray-300" /> Humans:
                </h3>
                <ul className="space-y-6">
                  <li className="flex gap-4 text-gray-300 text-lg">
                    <span className="w-2 h-2 rounded-full bg-white mt-2.5 shrink-0"></span>
                    Set high-level intent and strategy.
                  </li>
                  <li className="flex gap-4 text-gray-300 text-lg">
                    <span className="w-2 h-2 rounded-full bg-white mt-2.5 shrink-0"></span>
                    Review and refine AI recommendations.
                  </li>
                  <li className="flex gap-4 text-gray-300 text-lg">
                    <span className="w-2 h-2 rounded-full bg-white mt-2.5 shrink-0"></span>
                    Approve critical or irreversible actions.
                  </li>
                  <li className="flex gap-4 text-gray-300 text-lg">
                    <span className="w-2 h-2 rounded-full bg-white mt-2.5 shrink-0"></span>
                    Retain final accountability for outcomes.
                  </li>
                </ul>
              </div>

              <div className="bg-sky-900/10 border border-sky-500/20 rounded-2xl p-10">
                <h3 className="text-2xl font-bold text-sky-400 mb-8 flex items-center gap-3">
                  <Bot className="text-sky-400" /> AI Assistants™:
                </h3>
                <ul className="space-y-6">
                  <li className="flex gap-4 text-gray-300 text-lg">
                    <span className="w-2 h-2 rounded-full bg-sky-400 mt-2.5 shrink-0"></span>
                    Reduce administrative and cognitive overhead.
                  </li>
                  <li className="flex gap-4 text-gray-300 text-lg">
                    <span className="w-2 h-2 rounded-full bg-sky-400 mt-2.5 shrink-0"></span>
                    Preserve context across shifts and teams.
                  </li>
                  <li className="flex gap-4 text-gray-300 text-lg">
                    <span className="w-2 h-2 rounded-full bg-sky-400 mt-2.5 shrink-0"></span>
                    Surface hidden risks and opportunities.
                  </li>
                  <li className="flex gap-4 text-gray-300 text-lg">
                    <span className="w-2 h-2 rounded-full bg-sky-400 mt-2.5 shrink-0"></span>
                    Support execution speed and consistency.
                  </li>
                </ul>
              </div>
            </div>
            
            <BottomStatement text="Explicit handoffs ensure clarity and control." color="blue" />
          </div>
        </section>

        {/* 6. GOVERNANCE & CONTROL */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Agent Governance & Control" 
              subheading="Safety is built-in, not bolted on."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <GlassCard 
                title="Permissions" 
                description="Role-based access."
                icon={Lock}
                variant="green"
              />
              <GlassCard 
                title="Boundaries" 
                description="Explicit scope limits."
                icon={ShieldCheck}
                variant="green"
              />
              <GlassCard 
                title="Thresholds" 
                description="Approval triggers."
                icon={Scale}
                variant="green"
              />
              <GlassCard 
                title="Escalation" 
                description="Paths for uncertainty."
                icon={ArrowRight}
                variant="green"
              />
              <GlassCard 
                title="Safety" 
                description="Safe-failure defaults."
                icon={ShieldCheck}
                variant="green"
              />
            </div>
            <div className="text-center mt-12 text-gray-400">
               Granular controls ensure that agents only do what they are authorized to do.
            </div>
            <BottomStatement text="Control scales as fast as the intelligence." color="green" />
          </div>
        </section>

        {/* 7. AUDIT TRAILS */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Audit Trails & Oversight" 
              subheading="Total visibility into the 'black box'."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <GlassCard 
                title="Events" 
                description="What triggered it."
                icon={Zap}
                variant="blue"
              />
              <GlassCard 
                title="Context" 
                description="What data was used."
                icon={Database}
                variant="blue"
              />
              <GlassCard 
                title="Reasoning" 
                description="Why it decided."
                icon={Brain}
                variant="blue"
              />
              <GlassCard 
                title="Actions" 
                description="What it executed."
                icon={Activity}
                variant="blue"
              />
              <GlassCard 
                title="Approvals" 
                description="Who signed off."
                icon={CheckCircle2}
                variant="blue"
              />
            </div>
            <div className="text-center mt-12 text-gray-400">
               Every automated action is logged, searchable, and auditable for compliance.
            </div>
            <BottomStatement text="Nothing operates without visibility." color="blue" />
          </div>
        </section>

        {/* 8. COMING NEXT */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Coming Next" 
              subheading="The evolution of autonomous operations."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <GlassCard 
                title="Coordination" 
                description="Deeper cross-workflow."
                icon={Users}
                variant="violet"
              />
              <GlassCard 
                title="Planning" 
                description="Sophisticated logic."
                icon={Brain}
                variant="violet"
              />
              <GlassCard 
                title="Specialization" 
                description="Expert capabilities."
                icon={Target}
                variant="violet"
              />
              <GlassCard 
                title="Learning" 
                description="Outcome-based adaption."
                icon={TrendingUp}
                variant="violet"
              />
              <GlassCard 
                title="Safety" 
                description="Enhanced guardrails."
                icon={ShieldCheck}
                variant="violet"
              />
            </div>
            <BottomStatement text="We are deliberately advancing capabilities to match enterprise needs." color="violet" />
          </div>
        </section>

        {/* 9. CUSTOM AGENT DESIGN */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Custom Agent Design" 
              subheading="Build agents that mirror your unique organizational structure."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard 
                title="Define Roles" 
                description="Map agents to job functions."
                icon={Users}
                variant="green"
              />
              <GlassCard 
                title="Specify Scope" 
                description="Set strict permissions."
                icon={Settings}
                variant="green"
              />
              <GlassCard 
                title="Embed Knowledge" 
                description="Upload proprietary context."
                icon={Database}
                variant="green"
              />
              <GlassCard 
                title="Align Execution" 
                description="Match workflows exactly."
                icon={Workflow}
                variant="green"
              />
            </div>
            <BottomStatement text="Tailored intelligence is safe intelligence." color="green" />
          </div>
        </section>

        {/* 10. INTEGRATION HORIZON */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Integration Horizon" 
              subheading="Connecting deeper into the enterprise stack."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard 
                title="Ongoing Expansion" 
                description="Continuously adding new connectors."
                icon={Plus}
                variant="blue"
              />
              <GlassCard 
                title="Deep Patterns" 
                description="More sophisticated bi-directional sync."
                icon={Layers}
                variant="blue"
              />
              <GlassCard 
                title="Interoperability" 
                description="Seamless data flow across vendors."
                icon={GitBranch}
                variant="blue"
              />
            </div>
            <BottomStatement text="The ecosystem expands to meet you where you work." color="blue" />
          </div>
        </section>

        {/* 11. RESPONSIBLE SCALE */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Designed for Responsible Scale</h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              We build operational systems, not toys. Our AI Assistants are designed from the ground up to scale safely with your business, handling increasing complexity without increasing risk.
            </p>
          </div>
        </section>

        {/* 12. CONTINUE EXPLORING */}
        <section className="py-20 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <Badge text="Next steps" color="violet" />
              <h2 className="text-3xl font-bold text-white">Continue Exploring</h2>
              <p className="text-gray-400 mt-4">Discover the capabilities that power AI Assistants.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PageCard 
                title="Operating Layer" 
                description="The foundation." 
                href="/ai-native-operating-layer" 
                icon={Layers} 
              />
              <PageCard 
                title="Security & Control" 
                description="Enterprise governance." 
                href="/security-governance-control" 
                icon={ShieldCheck} 
              />
              <PageCard 
                title="Transformations" 
                description="See them in action." 
                href="/transformations" 
                icon={Activity} 
              />
              <PageCard 
                title="Discuss Transformation" 
                description="Start the journey." 
                href="/contact" 
                icon={ArrowRight} 
              />
            </div>
          </div>
        </section>

        {/* 13. FINAL CTA */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-violet-900/20 to-sky-900/20 rounded-3xl p-12 text-center border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to deploy AI Assistants™?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Bring operational intelligence to your workforce and scale safely.
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

export default AIAssistantsOverview;