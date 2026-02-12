import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Layers, 
  Scale, 
  Shield, 
  Activity, 
  Zap, 
  Lock, 
  CheckCircle2, 
  ArrowRight, 
  Network, 
  RefreshCw,
  Server,
  Eye,
  CreditCard,
  Shuffle,
  FileText,
  MousePointerClick
} from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { seoMetadata } from '@/config/seoMetadata';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// --- Shared Components ---

const Badge = ({ text }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex justify-center mb-6"
  >
    <span className="px-3 py-1 rounded-full border border-pink-500/20 bg-pink-500/10 text-pink-400 text-[11px] font-bold uppercase tracking-widest backdrop-blur-sm flex items-center gap-2">
      <Brain size={12} />
      {text}
    </span>
  </motion.div>
);

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
    whileHover={{ y: -5 }}
    className={cn(
      "p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.06] hover:border-pink-500/20 transition-all duration-300 group h-full flex flex-col relative overflow-hidden",
      className
    )}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative z-10">
      {Icon && (
        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-pink-400 group-hover:scale-110 group-hover:bg-pink-500/10 transition-all duration-300">
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

const ModelIntelligence = () => {
  return (
    <>
      <SEOHead {...(seoMetadata['/capabilities/model-intelligence'] || {})} />
      
      <main className="bg-[#0E0F11] text-white overflow-hidden w-full font-sans">
        
        {/* 1. HERO SECTION */}
        <section className="relative pt-40 pb-20 px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-pink-900/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <Badge text="Capabilities" />
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight"
            >
              Model Intelligence <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                Unified Orchestration
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Orchestrate LLMs, SLMs, and custom reasoning engines through a single control plane. 
              Optimize performance, control costs, and ensure governance without locking into a single model provider.
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

        {/* 2. WHY MODEL CHOICE ALONE IS NOT ENOUGH */}
        <section className="py-20 px-6 bg-[#13151A] border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Why Model Choice Alone Is Not Enough</h2>
            <p className="text-gray-400 text-lg mb-12 text-center leading-relaxed">
              Selecting a model is easy. Controlling it at scale is hard. Organizations relying on direct model access face compounding challenges as they scale.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {[
                { title: "Overuse of Large Models", desc: "Using expensive frontier models for simple tasks wastes budget." },
                { title: "Rising Inference Costs", desc: "Uncontrolled token usage leads to unpredictable monthly bills." },
                { title: "Inconsistent Outputs", desc: "Different models require different prompting strategies to maintain quality." },
                { title: "Limited Adaptation", desc: "Hard-coded model dependencies make switching providers painful." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2.5 shrink-0" />
                  <div>
                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. ONE ORCHESTRATION LAYER */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="One Orchestration Layer, Multiple Forms of Intelligence" 
              subheading="Phenomeny routes work to the right intelligence for the job—whether it's creative, fast, or strictly logical."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard 
                title="Large Language Models (LLMs)"
                description="Leverage GPT-4, Claude 3, and Gemini for complex reasoning, nuance, and creative generation."
                icon={Brain}
                delay={0}
              />
              <GlassCard 
                title="Small Language Models (SLMs)"
                description="Deploy Llama 3, Mistral, and Phi for high-speed, privacy-centric, and low-cost specialized tasks."
                icon={Zap}
                delay={0.1}
              />
              <GlassCard 
                title="Domain-Specific Engines"
                description="Integrate symbolic AI and rule-based engines for tasks requiring 100% deterministic logic."
                icon={Cpu}
                delay={0.2}
              />
            </div>
          </div>
        </section>

        {/* 4. DELIBERATE MODEL SELECTION */}
        <section className="py-20 px-6 bg-gradient-to-b from-[#0E0F11] to-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Deliberate Model Selection" 
              subheading="Our router evaluates every prompt against five key dimensions before selecting a model."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <GlassCard title="Task Complexity" description="Is this a simple classification or multi-step reasoning?" icon={Layers} />
              <GlassCard title="Reasoning Depth" description="Does the task require nuance or just fact retrieval?" icon={Brain} />
              <GlassCard title="Latency Tolerance" description="Does the user need a sub-200ms response?" icon={Activity} />
              <GlassCard title="Cost Budget" description="Is this a high-volume task requiring cost optimization?" icon={CreditCard} />
              <GlassCard title="Governance Level" description="Does the data require a private, self-hosted model?" icon={Shield} />
            </div>
          </div>
        </section>

        {/* 5. CONTEXT-AWARE REASONING */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Context-Aware Reasoning by Default" 
              subheading="Models don't just see the prompt. They see the entire business state."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard title="Operational Context" description="Injects real-time data from your ERP, CRM, and PM tools." icon={Network} />
              <GlassCard title="Historical Decisions" description="Retrieves similar past cases to ensure consistency." icon={RefreshCw} />
              <GlassCard title="Workflow State" description="Understands where in the process the request originated." icon={Layers} />
              <GlassCard title="Governance Rules" description="Applies organizational policy constraints before generation." icon={Scale} />
            </div>
          </div>
        </section>

        {/* 6. VALIDATION BEFORE EXECUTION */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Validation Before Execution" 
              subheading="We don't trust raw model outputs. Everything passes through a verification layer."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard title="Confidence Checks" description="If model confidence is low, the system requests clarification." icon={Activity} />
              <GlassCard title="Constraint Validation" description="Ensures outputs match JSON schemas or specific formats." icon={CheckCircle2} />
              <GlassCard title="Human Approval" description="High-stakes actions route to a human for final sign-off." icon={MousePointerClick} />
              <GlassCard title="Escalation Paths" description="Automatically flags edge cases that require expert review." icon={ArrowRight} />
            </div>
          </div>
        </section>

        {/* 7. COST AND PERFORMANCE CONTROL */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title="Cost and Performance Control at Scale" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard title="Avoid Expensive Models" description="Don't use a PhD-level model for an intern-level task." icon={CreditCard} />
              <GlassCard title="Optimize Latency" description="Route real-time user requests to the fastest capable model." icon={Zap} />
              <GlassCard title="Predict Costs" description="See estimated cost before execution, not at the end of the month." icon={Eye} />
              <GlassCard title="Scale Without Volatility" description="Use SLMs to handle volume spikes without breaking the bank." icon={Activity} />
            </div>
          </div>
        </section>

        {/* 8. MODEL EVOLUTION */}
        <section className="py-20 px-6 bg-gradient-to-t from-[#0E0F11] to-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Model Evolution Without Disruption" 
              subheading="The AI landscape changes weekly. Your operations shouldn't break when it does."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard title="Evaluate Safely" description="Test new models against your evaluation datasets in the background." icon={Shield} />
              <GlassCard title="Replace Incrementally" description="Roll out new models to 1% of traffic before full adoption." icon={Shuffle} />
              <GlassCard title="Avoid Redesign" description="Swap the underlying engine without rewriting your application logic." icon={RefreshCw} />
            </div>
          </div>
        </section>

        {/* 9. ENTERPRISE OWNERSHIP */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title="Enterprise Ownership and Transparency" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard title="No Vendor Lock-in" description="Switch between OpenAI, Anthropic, and Azure instantly." icon={Lock} />
              <GlassCard title="Transparent Visibility" description="See exactly which model processed which request and why." icon={Eye} />
              <GlassCard title="Clear Boundaries" description="Define which data can be sent to which model provider." icon={Layers} />
              <GlassCard title="Organizational Control" description="Centralized API key management and usage quotas." icon={Server} />
            </div>
          </div>
        </section>

        {/* 10. WHAT MODEL INTELLIGENCE ENABLES */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title="What Model Intelligence Enables" />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <GlassCard title="Reliable Behavior" description="Consistent outputs regardless of underlying model fluctuations." icon={CheckCircle2} />
              <GlassCard title="Safer Reasoning" description="Reduced hallucinations through multi-step verification." icon={Shield} />
              <GlassCard title="Predictable Costs" description="Budget-aware routing eliminates surprise overages." icon={CreditCard} />
              <GlassCard title="Flexibility" description="Adopt state-of-the-art models the day they are released." icon={Shuffle} />
              <GlassCard title="Confidence" description="Trust that the system works as designed, every time." icon={Lock} />
            </div>
          </div>
        </section>

        {/* 11. CONTINUE EXPLORING */}
        <section className="py-20 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <Badge text="Next steps" />
              <h2 className="text-3xl font-bold text-white">Continue Exploring</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PageCard 
                title="Operating Layer" 
                description="Deep dive into the AI-Native architecture." 
                href="/ai-native-operating-layer" 
                icon={Layers} 
              />
              <PageCard 
                title="Security & Governance" 
                description="Learn how we secure your data and operations." 
                href="/security-governance-control" 
                icon={Shield} 
              />
              <PageCard 
                title="AI Assistants" 
                description="Meet the digital workforce powered by this intelligence." 
                href="/platform/ai-assistants" 
                icon={Brain} 
              />
              <PageCard 
                title="Transformation" 
                description="Discuss your specific model orchestration needs." 
                href="/contact" 
                icon={ArrowRight} 
              />
            </div>
          </div>
        </section>

        {/* 12. FINAL CTA */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-pink-900/20 to-purple-900/20 rounded-3xl p-12 text-center border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to orchestrate intelligence responsibly?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Take control of your AI operations with a unified model intelligence layer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[#EC4899] hover:bg-[#db2777] text-white rounded-full px-8 py-6 text-lg font-bold shadow-lg transition-all hover:scale-105">
                  Start Orchestrating
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white rounded-full px-8 py-6 text-lg font-medium">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default ModelIntelligence;