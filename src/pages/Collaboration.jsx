import React from 'react';
import { motion } from 'framer-motion';
import { Users, HeartHandshake as Handshake, MessageSquare, Workflow, CheckCircle2, ShieldCheck, Eye, Clock, AlertTriangle, ArrowRight, GitBranch, Layers, Zap, Globe, Bell, Fingerprint } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { seoMetadata } from '@/config/seoMetadata';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

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
        <Handshake size={12} />
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

const Collaboration = () => {
  return (
    <>
      <SEOHead {...(seoMetadata['/capabilities/collaboration'] || {})} />
      
      <main className="bg-[#0E0F11] text-white overflow-hidden w-full font-sans">
        
        {/* 1. HERO SECTION */}
        <section className="relative pt-40 pb-20 px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[800px] h-[500px] bg-sky-900/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <Badge text="Capabilities" color="blue" />
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight"
            >
              Collaboration <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
                Human-in-the-loop interfaces for seamless handoffs
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
            >
              AI shouldn't be a black box that operates in isolation. Build workflows where intelligence amplifies human intent, ensuring smooth transitions between automated tasks and manual decisions.
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

        {/* 2. WHY HANDOFFS ARE WHERE WORK BREAKS */}
        <section className="py-20 px-6 bg-[#13151A] border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Why handoffs are where work breaks</h2>
            <p className="text-gray-400 text-lg mb-12 text-center leading-relaxed">
              Most operational failures happen in the "white space" between teams and tools. When context is lost, errors are introduced.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-10">
              {[
                { title: "Informal messages", desc: "Critical task details get buried in Slack threads or email chains." },
                { title: "Assumptions about context", desc: "The receiver doesn't know what the sender knew, leading to bad decisions." },
                { title: "Manual explanations", desc: "Wasting time re-explaining the 'why' and 'how' of a task." },
                { title: "Delayed follow-ups", desc: "Requests sit in inboxes because there's no shared tracking system." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 shrink-0" />
                  <div>
                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-indigo-400 font-medium">
              Adding AI without structure only accelerates this chaos.
            </p>
          </div>
        </section>

        {/* 3. HUMAN-IN-THE-LOOP BY DESIGN */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Human-in-the-loop by design" 
              subheading="We build systems that know when to ask for help and when to execute."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard 
                title="AI proposes, humans decide" 
                description="Agents draft the email or the plan; you click 'Approve' to send it."
                icon={CheckCircle2}
                variant="blue"
              />
              <GlassCard 
                title="Actions visible before execution" 
                description="See the exact API call or database change the agent intends to make."
                icon={Eye}
                variant="blue"
              />
              <GlassCard 
                title="Responsibility clearly assigned" 
                description="Every automated task has a specific human owner if things go wrong."
                icon={Fingerprint}
                variant="blue"
              />
              <GlassCard 
                title="Oversight embedded, not external" 
                description="Approvals happen within the workflow, not in a separate ticketing portal."
                icon={Layers}
                variant="blue"
              />
            </div>
            <BottomStatement text="Control without the bottleneck." color="blue" />
          </div>
        </section>

        {/* 4. SEAMLESS TRANSITIONS */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Seamless transitions between AI and people" 
              subheading="Fluid movement of work based on confidence and complexity."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard 
                title="AI-assisted planning & human review" 
                description="The agent gathers data and suggests a strategy. You refine and authorize it."
                icon={GitBranch}
                variant="violet"
              />
              <GlassCard 
                title="Automated execution & manual intervention" 
                description="The system handles the routine 90%. Humans step in only for the complex 10%."
                icon={Zap}
                variant="violet"
              />
              <GlassCard 
                title="System-driven alerts & human response" 
                description="The AI monitors for anomalies and pings the right person with full context."
                icon={Bell}
                variant="violet"
              />
            </div>
            <BottomStatement text="The best of both biological and artificial intelligence." color="violet" />
          </div>
        </section>

        {/* 5. SHARED CONTEXT ACROSS ROLES */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Shared context across roles" 
              subheading="A single source of truth for everyone involved in the process."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard 
                title="Operators" 
                description="See exactly what tasks require their immediate attention and why."
                icon={Users}
                variant="green"
              />
              <GlassCard 
                title="Managers" 
                description="View real-time status, bottlenecks, and dependencies across the team."
                icon={Workflow}
                variant="green"
              />
              <GlassCard 
                title="Leaders" 
                description="Understand the impact of operations on broader business goals and risk."
                icon={ShieldCheck}
                variant="green"
              />
              <GlassCard 
                title="Everyone" 
                description="Works from the same underlying context, eliminating 'he said, she said'."
                icon={Globe}
                variant="green"
              />
            </div>
            <BottomStatement text="Alignment through visibility." color="green" />
          </div>
        </section>

        {/* 6. DESIGNED FOR CLARITY */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Designed for clarity, not noise" 
              subheading="Interfaces that respect your attention span."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard 
                title="What matters" 
                description="Information hierarchy that surfaces the critical signal over the noise."
                icon={Eye}
                variant="default"
              />
              <GlassCard 
                title="When it matters" 
                description="Notifications that arrive at the moment of action, not hours later."
                icon={Clock}
                variant="default"
              />
              <GlassCard 
                title="To the right people" 
                description="Routing logic that knows exactly who needs to see this specific update."
                icon={Users}
                variant="default"
              />
            </div>
            <BottomStatement text="Focus on the work, not the tool." color="blue" />
          </div>
        </section>

        {/* 7. SUPPORTING ACCOUNTABILITY */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Supporting accountability and ownership" 
              subheading="Knowing who did what is the foundation of trust."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard 
                title="Who initiated" 
                description="Trace every workflow back to the specific event or user request that started it."
                icon={Zap}
                variant="pink"
              />
              <GlassCard 
                title="Who approved" 
                description="Permanent logs of every human authorization decision."
                icon={CheckCircle2}
                variant="pink"
              />
              <GlassCard 
                title="Who is responsible" 
                description="Clear ownership assignments for both automated agents and human tasks."
                icon={ShieldCheck}
                variant="pink"
              />
            </div>
            <BottomStatement text="Accountability builds high-performing cultures." color="pink" />
          </div>
        </section>

        {/* 8. BUILT FOR DISTRIBUTED TEAMS */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Built for distributed, cross-functional teams" 
              subheading="Collaboration that spans boundaries."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard 
                title="Cross-departmental" 
                description="Seamlessly link Sales, Engineering, and Support workflows."
                icon={Workflow}
                variant="blue"
              />
              <GlassCard 
                title="Across time zones" 
                description="Asynchronous handoffs that keep work moving while you sleep."
                icon={Globe}
                variant="blue"
              />
              <GlassCard 
                title="Multi-stakeholder" 
                description="Consolidate approvals from Legal, Finance, and Ops in one place."
                icon={Users}
                variant="blue"
              />
            </div>
            <BottomStatement text="One platform, many teams." color="blue" />
          </div>
        </section>

        {/* 9. WHAT COLLABORATION ENABLES */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title="What Collaboration enables" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <GlassCard title="Fewer dropped handoffs" description="Stop losing tasks in the cracks between teams." icon={CheckCircle2} />
              <GlassCard title="Clearer ownership" description="Everyone knows exactly what they are responsible for." icon={Fingerprint} />
              <GlassCard title="Faster resolution" description="Solve exceptions in minutes, not days." icon={Zap} />
              <GlassCard title="Stronger trust" description="Believe in the system because you can see it working." icon={ShieldCheck} />
              <GlassCard title="Confident adoption" description="Teams embrace AI when they feel in control." icon={Users} />
            </div>
            <BottomStatement text="A better way to work together." color="green" />
          </div>
        </section>

        {/* 10. CONTINUE EXPLORING */}
        <section className="py-20 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <Badge text="Next steps" color="pink" />
              <h2 className="text-3xl font-bold text-white">Continue Exploring</h2>
              <p className="text-gray-400 mt-4">Discover how collaboration connects with other capabilities.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PageCard 
                title="Agent Workflows" 
                description="See how agents execute tasks." 
                href="/capabilities/agent-workflows" 
                icon={Workflow} 
              />
              <PageCard 
                title="Deep Observability" 
                description="Trace the reasoning behind decisions." 
                href="/capabilities/deep-observability" 
                icon={Eye} 
              />
              <PageCard 
                title="Security & Governance" 
                description="Ensure collaboration is safe." 
                href="/security-governance-control" 
                icon={ShieldCheck} 
              />
              <PageCard 
                title="Discuss a transformation" 
                description="Let's build your collaborative future." 
                href="/contact" 
                icon={ArrowRight} 
              />
            </div>
          </div>
        </section>

        {/* 11. FINAL CTA */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-sky-900/20 to-indigo-900/20 rounded-3xl p-12 text-center border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to strengthen collaboration with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Implement human-centered interfaces that make your teams faster, not just your software.
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

export default Collaboration;