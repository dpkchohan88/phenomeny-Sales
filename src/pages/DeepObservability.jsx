import React from 'react';
import { motion } from 'framer-motion';
import { 
  Eye, 
  Search, 
  FileText, 
  Activity, 
  ShieldCheck, 
  Brain, 
  GitBranch, 
  CheckCircle2, 
  ArrowRight, 
  Lock, 
  AlertTriangle, 
  Database, 
  Layers, 
  Scale, 
  History,
  Terminal,
  FileSearch,
  ScanEye,
  BarChart3,
  Zap
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
        "px-3 py-1 rounded-full border text-[11px] font-bold uppercase tracking-widest backdrop-blur-sm flex items-center gap-2",
        colors[color] || colors.pink
      )}>
        <Eye size={12} />
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

const DeepObservability = () => {
  return (
    <>
      <SEOHead {...(seoMetadata['/capabilities/deep-observability'] || {})} />
      
      <main className="bg-[#0E0F11] text-white overflow-hidden w-full font-sans">
        
        {/* 1. HERO SECTION */}
        <section className="relative pt-40 pb-20 px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-pink-900/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[800px] h-[500px] bg-purple-900/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <Badge text="Capabilities" color="pink" />
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight"
            >
              Deep Observability <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                Trace visibility into agent reasoning
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Go beyond black boxes. See exactly why an AI agent made a decision, what data it used, and how it complied with your governance rules—step by step, in real time.
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

        {/* 2. WHY OBSERVABILITY IS CRITICAL */}
        <section className="py-20 px-6 bg-[#13151A] border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Why observability is critical for AI systems</h2>
            <p className="text-gray-400 text-lg mb-12 text-center leading-relaxed">
              When AI systems operate as black boxes, they create operational risk. You can't trust what you can't see or explain.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-10">
              {[
                { title: "Unexplained Outputs", desc: "Results appear magically without a clear logic trail, making validation impossible." },
                { title: "No Post-Mortem", desc: "Decisions cannot be justified after the fact when an auditor or customer asks 'Why?'." },
                { title: "Diagnosis Difficulty", desc: "Errors are difficult to diagnose because the root cause is hidden in stochastic noise." },
                { title: "Eroding Trust", desc: "Teams quickly stop using tools that behave unpredictably without explanation." }
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
            <p className="text-center text-pink-400 font-medium">
              Deep Observability turns the lights on inside the black box.
            </p>
          </div>
        </section>

        {/* 3. VISIBILITY INTO REASONING */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Visibility into reasoning, not just outcomes" 
              subheading="Understand the 'thought process' behind every automated action."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard 
                title="Inputs Considered" 
                description="See exactly what data, prompts, and system variables were fed into the model."
                icon={FileSearch}
                variant="pink"
              />
              <GlassCard 
                title="Context Retrieved" 
                description="Verify which documents or memory fragments the agent pulled from the vector store."
                icon={Database}
                variant="pink"
              />
              <GlassCard 
                title="Constraint Application" 
                description="Check how governance rules and safety guardrails modified the final output."
                icon={Scale}
                variant="pink"
              />
              <GlassCard 
                title="Decision Logic" 
                description="Read the step-by-step chain of thought that led to a specific conclusion."
                icon={GitBranch}
                variant="pink"
              />
            </div>
            <BottomStatement text="No more guessing games." color="pink" />
          </div>
        </section>

        {/* 4. END-TO-END TRACEABILITY */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="End-to-end traceability" 
              subheading="Follow the thread from the initial trigger to the final outcome."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              <GlassCard title="1. Trigger" description="The event or request that started the process." icon={Zap} variant="blue" />
              <GlassCard title="2. Retrieval" description="Context gathered from memory and tools." icon={Search} variant="blue" />
              <GlassCard title="3. Reasoning" description="The model's internal deliberation process." icon={Brain} variant="blue" />
              <GlassCard title="4. Action" description="The specific tool call or API request made." icon={Terminal} variant="blue" />
              <GlassCard title="5. Approval" description="Any human review or policy check applied." icon={CheckCircle2} variant="blue" />
            </div>
            <BottomStatement text="A complete audit trail for every single execution." color="blue" />
          </div>
        </section>

        {/* 5. DESIGNED FOR OPERATORS */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Designed for operators, not just engineers" 
              subheading="Make system behavior transparent to the people running the business."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard title="Operational Clarity" description="Ops managers can see why a ticket was routed a certain way without reading code." icon={Activity} variant="violet" />
              <GlassCard title="Leadership Confidence" description="Executives can spot-check decisions to ensure alignment with strategy." icon={Eye} variant="violet" />
              <GlassCard title="Audit Readiness" description="Compliance officers can generate reports on agent behavior for regulators." icon={FileText} variant="violet" />
              <GlassCard title="Efficient Debugging" description="Engineers can pinpoint exactly where a prompt chain failed." icon={Terminal} variant="violet" />
            </div>
            <BottomStatement text="Democratizing visibility across the organization." color="violet" />
          </div>
        </section>

        {/* 6. SUPPORTING ACCOUNTABILITY AND LEARNING */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Supporting accountability and learning" 
              subheading="Use observability to improve your systems over time."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard title="Objective Review" description="Analyze past decisions based on data, not anecdotes." icon={History} variant="green" />
              <GlassCard title="Assumption Checking" description="Identify where the model's underlying assumptions clashed with reality." icon={Search} variant="green" />
              <GlassCard title="Iterative Improvement" description="Use traces to refine prompts, update rules, and retrain models." icon={GitBranch} variant="green" />
              <GlassCard title="Threshold Tuning" description="Adjust confidence thresholds based on actual performance data." icon={BarChart3} variant="green" />
            </div>
            <BottomStatement text="Every error becomes a learning opportunity." color="green" />
          </div>
        </section>

        {/* 7. SAFE OVERSIGHT WITHOUT SLOWING EXECUTION */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Safe oversight without slowing execution" 
              subheading="Balance speed with control."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard title="Passive Monitoring" description="Watch standard operations in real-time without interfering with throughput." icon={Eye} variant="default" />
              <GlassCard title="Focused Review" description="Automatically flag exceptions for deeper human analysis." icon={ScanEye} variant="default" />
              <GlassCard title="Targeted Escalation" description="Stop high-impact actions for approval while low-risk tasks run automatically." icon={AlertTriangle} variant="default" />
            </div>
            <BottomStatement text="Visibility that scales with your volume." color="blue" />
          </div>
        </section>

        {/* 8. BUILT FOR REGULATED ENVIRONMENTS */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Built for regulated and high-stakes environments" 
              subheading="When 'it depends' isn't a good enough answer."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard title="High Impact" description="Essential for decisions affecting customer finances, patient health, or critical infrastructure." icon={Activity} variant="pink" />
              <GlassCard title="Regulatory Review" description="Provide the detailed logs required by GDPR, HIPAA, and industry auditors." icon={Scale} variant="pink" />
              <GlassCard title="Mandatory Audits" description="Pass third-party audits with comprehensive, immutable records." icon={FileText} variant="pink" />
              <GlassCard title="Consequence Management" description="Trace errors to their source quickly to mitigate liability." icon={ShieldCheck} variant="pink" />
            </div>
            <BottomStatement text="Transparency is your best defense." color="pink" />
          </div>
        </section>

        {/* 9. WHAT DEEP OBSERVABILITY ENABLES */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title="What Deep Observability enables" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
              <GlassCard title="Decision Confidence" description="Trust that the AI is acting for the right reasons." icon={CheckCircle2} />
              <GlassCard title="Clear Accountability" description="Know exactly who (or what) is responsible for every outcome." icon={ShieldCheck} />
              <GlassCard title="Faster Diagnosis" description="Reduce mean-time-to-resolution for AI-related issues." icon={Zap} />
              <GlassCard title="Stronger Compliance" description="Meet governance requirements without manual reporting." icon={Lock} />
              <GlassCard title="Team Adoption" description="Teams embrace tools they understand and trust." icon={Brain} />
            </div>
            <BottomStatement text="The foundation of trusted AI." color="pink" />
          </div>
        </section>

        {/* 10. CONTINUE EXPLORING */}
        <section className="py-20 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <Badge text="Next steps" color="blue" />
              <h2 className="text-3xl font-bold text-white">Continue Exploring</h2>
              <p className="text-gray-400 mt-4">Connect observability with control and intelligence.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PageCard 
                title="Unified Dashboards" 
                description="Visualize these traces alongside your KPIs." 
                href="/ai-features/unified-dashboards" 
                icon={BarChart3} 
              />
              <PageCard 
                title="Signal Intelligence" 
                description="Detect risks before they become incidents." 
                href="/ai-features/signal-intelligence" 
                icon={Activity} 
              />
              <PageCard 
                title="Security, Governance & Control" 
                description="Enforce the rules that observability monitors." 
                href="/security-governance-control" 
                icon={ShieldCheck} 
              />
              <PageCard 
                title="Discuss a transformation" 
                description="Build a transparent AI strategy." 
                href="/contact" 
                icon={ArrowRight} 
              />
            </div>
          </div>
        </section>

        {/* 11. FINAL CTA */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-pink-900/20 to-purple-900/20 rounded-3xl p-12 text-center border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to bring transparency to your AI systems?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Stop operating in the dark. Enable Deep Observability today.
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

export default DeepObservability;