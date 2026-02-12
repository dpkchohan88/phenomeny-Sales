import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  GitPullRequest, 
  ArrowRight, 
  AlertTriangle, 
  CheckCircle2, 
  Shield, 
  Activity, 
  Clock, 
  Users, 
  Zap, 
  Workflow, 
  Network,
  Lock,
  Eye,
  BarChart3,
  Layers
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
      <p className="text-gray-400 leading-relaxed text-sm md:text-[15px] flex-grow">{description}</p>
    </motion.div>
  );
};

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

const WorkflowAI = () => {
  return (
    <>
      <SEOHead {...(seoMetadata['/ai-features/workflow-ai'] || {})} />
      
      <main className="bg-[#0E0F11] text-white overflow-hidden w-full">
        
        {/* 1. HERO SECTION */}
        <section className="relative pt-32 pb-20 px-6 min-h-[85vh] flex flex-col items-center justify-center overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <Badge text="Workflow Automation" color="pink" />
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-[1.1]"
            >
              Workflow <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
                AI
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Automate coordination, handoffs, and escalations. Move work across teams and systems without friction or delay.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="bg-[#EC4899] hover:bg-[#db2777] text-white rounded-full px-8 py-6 text-lg font-bold shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all hover:scale-105">
                Explore Workflow AI
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5 hover:text-white rounded-full px-8 py-6 text-lg font-medium text-gray-300">
                Request demo
              </Button>
            </motion.div>
          </div>

          {/* Abstract Visual - Nodes Connecting */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute inset-0 pointer-events-none overflow-hidden"
          >
            <div className="absolute top-[60%] left-[10%] w-32 h-32 border border-white/5 rounded-full animate-pulse opacity-20" />
            <div className="absolute top-[70%] right-[15%] w-48 h-48 border border-white/5 rounded-full animate-pulse opacity-20 delay-700" />
            <div className="absolute top-[20%] right-[25%] w-24 h-24 border border-white/5 rounded-full animate-pulse opacity-20 delay-300" />
          </motion.div>
        </section>

        {/* 2. CHALLENGE SECTION */}
        <section className="py-24 px-6 relative border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <Badge text="The challenge" color="blue" />
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-8"
            >
              Why Coordination Breaks at Scale
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400 leading-relaxed"
            >
              As organizations grow, the "glue" work of coordinating tasks outpaces the actual work. Projects stall in email threads, Slack DMs, and forgotten tickets. The friction of handoffs eats up productivity, leaving teams reactive instead of proactive.
            </motion.p>
          </div>
        </section>

        {/* 3. SOLUTION SECTION */}
        <section className="py-24 px-6 bg-[#0E0F11]">
          <div className="max-w-7xl mx-auto">
            <Badge text="The solution" color="violet" />
            <SectionHeading 
              title="What Workflow AI Does Differently" 
              subtitle="It doesn't just track work—it moves it."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <GlassCard 
                title="Who owns what" 
                description="Automatically identifies and assigns clear ownership at every step."
                icon={Users}
                color="blue"
                delay={0}
              />
              <GlassCard 
                title="What depends on what" 
                description="Maps dependencies dynamically so blockers are visible instantly."
                icon={Network}
                color="violet"
                delay={0.1}
              />
              <GlassCard 
                title="Where delays occur" 
                description="Pinpoints bottlenecks before they become critical path issues."
                icon={Clock}
                color="green"
                delay={0.2}
              />
              <GlassCard 
                title="Requires escalation" 
                description="Knows exactly when to involve human leadership for decisions."
                icon={AlertTriangle}
                color="blue"
                delay={0.3}
              />
            </div>
            <BottomStatement text="Workflow AI coordinates execution continuously and predictably." color="violet" />
          </div>
        </section>

        {/* 4. CAPABILITY SECTION */}
        <section className="py-24 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <Badge text="The capability" color="pink" />
            <SectionHeading 
              title="Intelligent Handoffs" 
              subtitle="Seamless transitions between teams, tools, and agents."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <GlassCard 
                title="Transfer Ownership" 
                description="Ownership is clearly transferred with accepted responsibility."
                icon={ArrowRight}
                color="pink"
              />
              <GlassCard 
                title="Context Travels" 
                description="Context travels with the task, eliminating 'catch-up' meetings."
                icon={Activity}
                color="pink"
              />
              <GlassCard 
                title="Visible Dependencies" 
                description="Dependencies are visible to both upstream and downstream teams."
                icon={GitPullRequest}
                color="pink"
              />
              <GlassCard 
                title="No Silent Stalls" 
                description="Nothing stalls silently; inaction triggers automated nudges."
                icon={Zap}
                color="pink"
              />
            </div>
            <BottomStatement text="Handoffs stop being moments of risk and become reliable transitions." color="pink" />
          </div>
        </section>

        {/* 5. INTELLIGENCE SECTION */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <Badge text="The intelligence" color="blue" />
            <SectionHeading 
              title="Timely, Governed Escalations" 
              subtitle="The system knows when to ask for help."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <GlassCard 
                title="Delay Thresholds" 
                description="Triggers when work is delayed beyond acceptable pre-set thresholds."
                icon={Clock}
                color="blue"
              />
              <GlassCard 
                title="Blocking Dependencies" 
                description="Alerts when critical dependencies are blocking overall progress."
                icon={Network}
                color="blue"
              />
              <GlassCard 
                title="Risk Accumulation" 
                description="Detects when small delays are compounding into major risk."
                icon={AlertTriangle}
                color="blue"
              />
              <GlassCard 
                title="Governance Checks" 
                description="Ensures every escalation follows proper compliance protocols."
                icon={Shield}
                color="blue"
              />
            </div>
          </div>
        </section>

        {/* 6. BENEFIT SECTION */}
        <section className="py-24 px-6 bg-[#0E0F11] border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <Badge text="The benefit" color="green" />
            <SectionHeading 
              title="Coordination Without Micromanagement" 
              subtitle="Empower teams to execute while maintaining full visibility."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <GlassCard 
                title="Focused Execution" 
                description="Teams stay focused on execution, not status updates."
                icon={Zap}
                color="green"
              />
              <GlassCard 
                title="Leader Visibility" 
                description="Leaders see progress without interruption or pestering."
                icon={Eye}
                color="green"
              />
              <GlassCard 
                title="Proactive Issues" 
                description="Issues surface before becoming crises that derail the quarter."
                icon={AlertTriangle}
                color="green"
              />
              <GlassCard 
                title="Fluid Progress" 
                description="Work moves forward without constant supervision or checking in."
                icon={Workflow}
                color="green"
              />
            </div>
          </div>
        </section>

        {/* 7. APPLICATION SECTION */}
        <section className="py-24 px-6 bg-gradient-to-b from-[#0E0F11] to-[#13151A]">
          <div className="max-w-4xl mx-auto text-center">
            <Badge text="The application" color="violet" />
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-8"
            >
              Designed for Complex, <br/> Cross-Functional Work
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400 leading-relaxed"
            >
              Perfect for product launches, enterprise sales cycles, incident response, and regulatory compliance workflows. Anywhere multiple teams, tools, and timelines intersect, Workflow AI brings order to chaos.
            </motion.p>
          </div>
        </section>

        {/* 8. GOVERNANCE SECTION */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <Badge text="The governance" color="blue" />
            <SectionHeading 
              title="Safe Automation, Not Blind Execution" 
              subtitle="Control frames the automation."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <GlassCard 
                title="Defined Permissions" 
                description="Strictly defined permissions for every automated action."
                icon={Lock}
                color="blue"
              />
              <GlassCard 
                title="Approval Thresholds" 
                description="Logic gates that require human sign-off for sensitive steps."
                icon={CheckCircle2}
                color="blue"
              />
              <GlassCard 
                title="Escalation Paths" 
                description="Clear paths for when the system encounters ambiguity."
                icon={GitPullRequest}
                color="blue"
              />
              <GlassCard 
                title="Full Auditability" 
                description="Every automated decision is logged and traceable."
                icon={Shield}
                color="blue"
              />
            </div>
            <BottomStatement text="Humans remain in control, while the system ensures execution does not drift." color="blue" />
          </div>
        </section>

        {/* 9. OUTCOME SECTION */}
        <section className="py-24 px-6 bg-[#0E0F11] border-t border-white/5">
          <div className="max-w-5xl mx-auto text-center">
            <Badge text="The outcome" color="pink" />
            <SectionHeading 
              title="What Workflow AI Enables" 
              subtitle="A new standard for operational excellence."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 text-left">
              {[
                "Faster execution without pressure",
                "Fewer dropped handoffs",
                "Predictable escalation paths",
                "Reduced operational noise",
                "Consistent coordination at scale"
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10"
                >
                  <div className="w-6 h-6 rounded-full bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={14} className="text-pink-400" />
                  </div>
                  <span className="text-gray-200 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. NEXT STEPS SECTION */}
        <section className="py-24 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <Badge text="Next steps" color="green" />
            <SectionHeading 
              title="Continue Exploring" 
              subtitle="See how Workflow AI connects with the rest of the platform."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/ai-native-operating-layer" className="group block h-full">
                <GlassCard 
                  title="Signal Intelligence" 
                  description="Detect patterns and anomalies in real time."
                  icon={Activity}
                  color="green"
                  className="group-hover:scale-105 transition-transform cursor-pointer"
                />
              </Link>
              <Link to="/ai-features/unified-dashboards" className="group block h-full">
                <GlassCard 
                  title="Unified Dashboards" 
                  description="Real-time visibility across teams and tools."
                  icon={BarChart3}
                  color="green"
                  className="group-hover:scale-105 transition-transform cursor-pointer"
                />
              </Link>
              <Link to="/ai-native-operating-layer" className="group block h-full">
                <GlassCard 
                  title="AI-Native Operating Layer" 
                  description="The foundation that powers all AI features."
                  icon={Layers}
                  color="green"
                  className="group-hover:scale-105 transition-transform cursor-pointer"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* 11. FINAL CTA SECTION */}
        <section className="py-32 px-6 relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-b from-[#0E0F11] to-pink-900/20" />
           <div className="relative z-10 max-w-4xl mx-auto text-center">
             <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
               Ready to eliminate <br />
               <span className="text-pink-500">coordination friction?</span>
             </h2>
             <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
               Workflow AI ensures work moves predictably across teams and systems.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[#EC4899] hover:bg-[#db2777] text-white rounded-full px-10 py-7 text-lg font-bold shadow-2xl shadow-pink-600/20">
                  Get started
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white rounded-full px-10 py-7 text-lg font-medium">
                  Request demo
                </Button>
             </div>
           </div>
        </section>

      </main>
    </>
  );
};

export default WorkflowAI;