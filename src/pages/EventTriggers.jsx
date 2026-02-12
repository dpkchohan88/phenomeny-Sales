import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Bell, 
  Clock, 
  Activity, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  Workflow, 
  Database, 
  Layers, 
  ShieldCheck, 
  PlayCircle,
  Users,
  Eye,
  Siren,
  Radio,
  Timer,
  Network
} from 'lucide-react';
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
        <Zap size={12} />
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

const EventTriggers = () => {
  return (
    <>
      <SEOHead {...(seoMetadata['/capabilities/event-triggers'] || {})} />
      
      <main className="bg-[#0E0F11] text-white overflow-hidden w-full font-sans">
        
        {/* 1. HERO SECTION */}
        <section className="relative pt-40 pb-20 px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-sky-900/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[800px] h-[500px] bg-indigo-900/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <Badge text="Capabilities" color="blue" />
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight"
            >
              Event Triggers <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
                Reactive processing based on live business signals
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Stop relying on scheduled jobs or manual checks. Activate intelligent workflows instantly when critical business events occur, ensuring your operations respond at the speed of data.
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

        {/* 2. WHY TIMING MATTERS */}
        <section className="py-20 px-6 bg-[#13151A] border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Why Timing Matters</h2>
            <p className="text-gray-400 text-lg mb-12 text-center leading-relaxed">
              In modern operations, the value of an action decays rapidly over time. Responding hours later is often as bad as not responding at all.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              {[
                { title: "Delays compound quickly", desc: "A 5-minute delay in detection can lead to a 5-hour delay in resolution." },
                { title: "Missed signals create risk", desc: "Silent failures in one system can cascade downstream if not caught instantly." },
                { title: "Manual monitoring doesn't scale", desc: "Humans cannot stare at dashboards 24/7 waiting for a needle in a haystack." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 p-6 rounded-xl border border-white/10"
                >
                  <div className="w-2 h-2 rounded-full bg-indigo-500 mb-4" />
                  <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-indigo-400 font-medium">
              Event Triggers close the gap between signal and action.
            </p>
          </div>
        </section>

        {/* 3. WHAT EVENT TRIGGERS DO */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="What Event Triggers Do" 
              subheading="Capture signals from anywhere in your stack and turn them into intelligent action."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
              <GlassCard 
                title="Workflow state changes" 
                description="Detect when a ticket moves to 'Done' or a deal moves to 'Closed Won'."
                icon={Workflow}
                variant="blue"
              />
              <GlassCard 
                title="Data updates in core systems" 
                description="React immediately when a customer address changes or inventory drops."
                icon={Database}
                variant="blue"
              />
              <GlassCard 
                title="Threshold breaches" 
                description="Trigger alerts when API latency exceeds 500ms or budget spend hits 90%."
                icon={Activity}
                variant="blue"
              />
              <GlassCard 
                title="Exceptions and anomalies" 
                description="Catch payment failures, sync errors, or unusual login patterns instantly."
                icon={AlertTriangle}
                variant="blue"
              />
              <GlassCard 
                title="Human decisions and approvals" 
                description="Launch the next phase of work the moment a manager clicks 'Approve'."
                icon={CheckCircle2}
                variant="blue"
              />
            </div>
            <BottomStatement text="If it happens in your business, we can trigger from it." color="blue" />
          </div>
        </section>

        {/* 4. REACTIVE, NOT SCHEDULED */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Reactive, Not Scheduled" 
              subheading="Move from 'check every hour' to 'act right now'."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard title="Actions on condition change" description="Logic executes only when specific criteria are met, saving compute and noise." icon={Zap} variant="violet" />
              <GlassCard title="Aligns with operational state" description="Responses are contextually relevant to what is happening at this exact second." icon={Activity} variant="violet" />
              <GlassCard title="No polling delays" description="Eliminate the lag inherent in batch processing or periodic syncs." icon={Timer} variant="violet" />
              <GlassCard title="AI engagement at relevance" description="AI Assistants™ step in exactly when they can add the most value." icon={BotIcon} variant="violet" />
            </div>
          </div>
        </section>

        {/* 5. CONTEXT-AWARE ACTIVATION */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Context-Aware Activation" 
              subheading="A trigger isn't just a dumb switch. It understands the environment."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard title="Current workflow state" description="Knows that 'Payment Failed' means something different during onboarding vs. renewal." icon={Workflow} variant="green" />
              <GlassCard title="Historical context" description="Checks if this specific error has happened 5 times in the last hour." icon={Clock} variant="green" />
              <GlassCard title="Dependency awareness" description="Waits to trigger until prerequisite systems are online and ready." icon={Layers} variant="green" />
              <GlassCard title="Governance rules" description="Ensures that the triggered action complies with current policy controls." icon={ShieldCheck} variant="green" />
            </div>
            <BottomStatement text="Smart triggers prevent chaotic cascades." color="green" />
          </div>
        </section>

        {/* 6. ENABLING COORDINATED RESPONSE */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Enabling Coordinated Response" 
              subheading="One signal can orchestrate a symphony of actions."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard title="Notify stakeholders" description="Slack the account manager and email the finance team simultaneously." icon={Bell} variant="blue" />
              <GlassCard title="Initiate governed workflows" description="Kick off a standardized remediation process that tracks every step." icon={PlayCircle} variant="blue" />
              <GlassCard title="Escalate with context" description="Page the on-call engineer with logs, not just a generic 'error' subject line." icon={Siren} variant="blue" />
              <GlassCard title="Activate Agent Workflows" description="Deploy an autonomous agent to attempt to fix the issue automatically." icon={Workflow} variant="blue" />
            </div>
            <BottomStatement text="Turn noise into coordinated action." color="blue" />
          </div>
        </section>

        {/* 7. DESIGNED FOR SAFETY AND CONTROL */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Designed for Safety and Control" 
              subheading="With great power comes great need for guardrails."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard title="Explicit trigger conditions" description="Define exactly what constitutes a valid signal to prevent misfires." icon={CheckCircle2} variant="pink" />
              <GlassCard title="Permissioned actions" description="Triggers operate with specific service accounts that have limited scope." icon={ShieldCheck} variant="pink" />
              <GlassCard title="Traceable escalations" description="See exactly which event caused which downstream process to fire." icon={Eye} variant="pink" />
              <GlassCard title="Auditable execution" description="Every triggered event is logged for compliance and post-mortem review." icon={Activity} variant="pink" />
            </div>
            <BottomStatement text="Automate without losing control." color="pink" />
          </div>
        </section>

        {/* 8. WHERE EVENT TRIGGERS ADD VALUE */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Where Event Triggers Add the Most Value" 
              subheading="Ideal for complex, fast-moving environments."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard title="Operations-heavy" description="Logistics, supply chain, and infrastructure management." icon={Layers} />
              <GlassCard title="Regulated workflows" description="Finance, healthcare, and compliance reporting." icon={ShieldCheck} />
              <GlassCard title="Cross-system processes" description="Onboarding, offboarding, and quote-to-cash cycles." icon={Network} />
              <GlassCard title="High-velocity contexts" description="Customer support triage and real-time fraud detection." icon={Zap} />
            </div>
            <BottomStatement text="Built for speed and complexity." color="blue" />
          </div>
        </section>

        {/* 9. WHAT EVENT TRIGGERS ENABLE */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title="What Event Triggers Enable" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard title="Faster response" description="Reduce mean-time-to-resolution (MTTR) dramatically." icon={Zap} variant="default" />
              <GlassCard title="Reduced blind spots" description="Surface issues that usually get buried in logs." icon={Eye} variant="default" />
              <GlassCard title="Earlier detection" description="Catch problems before they impact the customer." icon={Radio} variant="default" />
              <GlassCard title="Better alignment" description="Keep your systems of record in sync with reality." icon={CheckCircle2} variant="default" />
            </div>
            <BottomStatement text="Proactive operations, not reactive fire-fighting." color="blue" />
          </div>
        </section>

        {/* 10. CONTINUE EXPLORING */}
        <section className="py-20 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <Badge text="Next steps" color="pink" />
              <h2 className="text-3xl font-bold text-white">Continue Exploring</h2>
              <p className="text-gray-400 mt-4">See how triggers fit into the larger ecosystem.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PageCard 
                title="Agent Workflows" 
                description="See what happens after the trigger fires." 
                href="/capabilities/agent-workflows" 
                icon={Workflow} 
              />
              <PageCard 
                title="Data Pipeline" 
                description="Understand how we ingest the signals." 
                href="/capabilities/data-pipeline" 
                icon={Database} 
              />
              <PageCard 
                title="AI-Native Operating Layer" 
                description="The architecture connecting it all." 
                href="/ai-native-operating-layer" 
                icon={Layers} 
              />
              <PageCard 
                title="Discuss a transformation" 
                description="Let's build your reactive enterprise." 
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
                Ready to activate intelligence based on live business signals?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Transform from a reactive organization to a real-time, event-driven enterprise.
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

// Helper Icon for Bot (using generic user for now if Bot isn't exported, but Bot usually is)
// Re-using Lucide icons imported at top.
const BotIcon = ({ size, className }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
);

export default EventTriggers;