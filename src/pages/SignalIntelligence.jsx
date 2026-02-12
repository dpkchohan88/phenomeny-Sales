import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Radio, 
  Activity, 
  AlertTriangle, 
  Search, 
  BarChart3, 
  Zap, 
  Users, 
  TrendingUp, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight, 
  Eye, 
  Layers, 
  Workflow, 
  Shield 
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

const SignalIntelligence = () => {
  return (
    <>
      <SEOHead {...(seoMetadata['/ai-features/signal-intelligence'] || {})} />
      
      <main className="bg-[#0E0F11] text-white overflow-hidden w-full">
        
        {/* 1. HERO SECTION */}
        <section className="relative pt-32 pb-20 px-6 min-h-[85vh] flex flex-col items-center justify-center overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <Badge text="Proactive risk detection" color="blue" />
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-[1.1]"
            >
              Signal <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400">
                Intelligence
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Detect operational, cultural, and execution risks automatically. Surface early warning signals before they become visible in reports.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="bg-[#EC4899] hover:bg-[#db2777] text-white rounded-full px-8 py-6 text-lg font-bold shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all hover:scale-105">
                Start detecting risk
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5 hover:text-white rounded-full px-8 py-6 text-lg font-medium text-gray-300">
                Watch demo
              </Button>
            </motion.div>
          </div>

          {/* Radar Wave Visualization */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute inset-0 pointer-events-none overflow-hidden"
          >
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-500/10 rounded-full animate-[ping_4s_ease-out_infinite]" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-blue-500/10 rounded-full animate-[ping_4s_ease-out_infinite_1s]" />
          </motion.div>
        </section>

        {/* 2. THE BLIND SPOT */}
        <section className="py-24 px-6 relative border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <Badge text="The blind spot" color="pink" />
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-8"
            >
              Bad news travels slowly
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400 leading-relaxed"
            >
              By the time a "red" status appears on an executive dashboard, the problem has usually existed for weeks. Cultural hesitation, optimism bias, and siloed data hide the early warning signs of failure until it's too late to pivot.
            </motion.p>
          </div>
        </section>

        {/* 3. THE SOLUTION */}
        <section className="py-24 px-6 bg-[#0E0F11]">
          <div className="max-w-7xl mx-auto">
            <Badge text="The solution" color="violet" />
            <SectionHeading 
              title="Continuous Risk Monitoring" 
              subtitle="Signal Intelligence listens to the faint heartbeat of your operations."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <GlassCard 
                title="Sentiment Drift" 
                description="Detects subtle shifts in team morale and confidence before attrition spikes."
                icon={Users}
                color="violet"
                delay={0}
              />
              <GlassCard 
                title="Velocity Variance" 
                description="Identifies unexplained slowdowns in delivery speed across specific pods."
                icon={Activity}
                color="violet"
                delay={0.1}
              />
              <GlassCard 
                title="Silence Detection" 
                description="Flags when communication unexpectedly stops on critical initiatives."
                icon={Radio}
                color="violet"
                delay={0.2}
              />
              <GlassCard 
                title="Pattern Recognition" 
                description="Correlates small anomalies that historically precede major outages."
                icon={Search}
                color="violet"
                delay={0.3}
              />
            </div>
            <BottomStatement text="It doesn't just report status—it predicts trajectory." color="violet" />
          </div>
        </section>

        {/* 4. OPERATIONAL SIGNALS */}
        <section className="py-24 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <Badge text="Operational" color="blue" />
            <SectionHeading 
              title="Operational Signals" 
              subtitle="Hard data derived from your systems of record."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <GlassCard 
                title="Code Churn" 
                description="High rework rates in engineering indicating unclear requirements."
                icon={Activity}
                color="blue"
              />
              <GlassCard 
                title="Stale Tickets" 
                description="Work items aging beyond standard deviation for their type."
                icon={AlertTriangle}
                color="blue"
              />
              <GlassCard 
                title="Scope Creep" 
                description="Rapid expansion of requirements mid-cycle without timeline adjustment."
                icon={TrendingUp}
                color="blue"
              />
              <GlassCard 
                title="Resource Contention" 
                description="Multiple critical paths blocked by the same key individual or team."
                icon={Users}
                color="blue"
              />
            </div>
          </div>
        </section>

        {/* 5. CULTURAL SIGNALS */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <Badge text="Cultural" color="pink" />
            <SectionHeading 
              title="Cultural Signals" 
              subtitle="Soft data derived from communication patterns."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <GlassCard 
                title="Sentiment Analysis" 
                description="Aggregated mood tracking from public channels and updates."
                icon={Users}
                color="pink"
              />
              <GlassCard 
                title="Conflict Detection" 
                description="Identifies heated exchanges or circular arguments blocking progress."
                icon={AlertTriangle}
                color="pink"
              />
              <GlassCard 
                title="Engagement Drop" 
                description="When key contributors stop commenting or reviewing code."
                icon={Radio}
                color="pink"
              />
              <GlassCard 
                title="Burnout Risk" 
                description="Sustained after-hours activity and weekend commits."
                icon={Zap}
                color="pink"
              />
            </div>
          </div>
        </section>

        {/* 6. EXECUTION SIGNALS */}
        <section className="py-24 px-6 bg-[#0E0F11] border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <Badge text="Execution" color="green" />
            <SectionHeading 
              title="Execution Signals" 
              subtitle="Predictive insights on delivery confidence."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <GlassCard 
                title="Miss Probability" 
                description="AI-calculated likelihood of missing upcoming deadlines."
                icon={BarChart3}
                color="green"
              />
              <GlassCard 
                title="Dependency Risk" 
                description="Fragile chains of dependencies that threaten the critical path."
                icon={Workflow}
                color="green"
              />
              <GlassCard 
                title="Quality Regression" 
                description="Increasing bug rates that suggest rushed development."
                icon={ShieldAlert}
                color="green"
              />
              <GlassCard 
                title="Alignment Gap" 
                description="Divergence between stated goals and actual work being performed."
                icon={Layers}
                color="green"
              />
            </div>
            <BottomStatement text="Leading indicators that give you time to act." color="green" />
          </div>
        </section>

        {/* 7. INTELLIGENT TRIAGE */}
        <section className="py-24 px-6 bg-gradient-to-b from-[#0E0F11] to-[#13151A]">
          <div className="max-w-4xl mx-auto text-center">
            <Badge text="The filter" color="violet" />
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-8"
            >
              Intelligent Triage
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400 leading-relaxed"
            >
              Not every signal is noise. Signal Intelligence filters out transient spikes and false positives, surfacing only the patterns that require human attention. It explains <strong>why</strong> it flagged a risk, citing the specific data points.
            </motion.p>
          </div>
        </section>

        {/* 8. PRIVACY FIRST */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <Badge text="The privacy" color="blue" />
            <SectionHeading 
              title="Surveillance-Free Insight" 
              subtitle="We analyze work patterns, not individuals."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <GlassCard 
                title="Aggregated Data" 
                description="Insights are presented at the team or project level, not per-person."
                icon={Users}
                color="blue"
              />
              <GlassCard 
                title="No PII Training" 
                description="Our models do not learn from or retain Personally Identifiable Information."
                icon={Shield}
                color="blue"
              />
              <GlassCard 
                title="Opt-In Context" 
                description="Teams choose which channels and repositories are analyzed."
                icon={CheckCircle2}
                color="blue"
              />
              <GlassCard 
                title="Transparent Logs" 
                description="Full visibility into what data triggered a specific risk alert."
                icon={Eye}
                color="blue"
              />
            </div>
            <BottomStatement text="Trust is preserved while visibility is improved." color="blue" />
          </div>
        </section>

        {/* 9. WHAT IT ENABLES (OUTCOMES) */}
        <section className="py-24 px-6 bg-[#0E0F11] border-t border-white/5">
          <div className="max-w-5xl mx-auto text-center">
            <Badge text="The outcome" color="pink" />
            <SectionHeading 
              title="What Signal Intelligence Enables" 
              subtitle="Shift from reactive firefighting to proactive management."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 text-left">
              {[
                " intervene weeks before a deadline is missed",
                " retain top talent by addressing burnout early",
                " identify toxic bottlenecks instantly",
                " align resources to actual (not reported) risk",
                " accurate forecasting based on reality"
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

        {/* 10. CONTINUE EXPLORING */}
        <section className="py-24 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <Badge text="Next steps" color="green" />
            <SectionHeading 
              title="Continue Exploring" 
              subtitle="See how Signal Intelligence connects with other features."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/ai-features/workflow-ai" className="group block h-full">
                <GlassCard 
                  title="Workflow AI" 
                  description="Automate the actions needed to mitigate detected risks."
                  icon={Workflow}
                  color="green"
                  className="group-hover:scale-105 transition-transform cursor-pointer"
                />
              </Link>
              <Link to="/ai-features/unified-dashboards" className="group block h-full">
                <GlassCard 
                  title="Unified Dashboards" 
                  description="Visualize risk signals alongside your KPIs."
                  icon={BarChart3}
                  color="green"
                  className="group-hover:scale-105 transition-transform cursor-pointer"
                />
              </Link>
              <Link to="/security-governance-control" className="group block h-full">
                <GlassCard 
                  title="Security, Governance & Control" 
                  description="Ensure risk monitoring remains compliant."
                  icon={Shield}
                  color="green"
                  className="group-hover:scale-105 transition-transform cursor-pointer"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* 11. FINAL CTA */}
        <section className="py-32 px-6 relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-b from-[#0E0F11] to-blue-900/20" />
           <div className="relative z-10 max-w-4xl mx-auto text-center">
             <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
               Ready to detect risk <br />
               <span className="text-blue-500">before it becomes visible?</span>
             </h2>
             <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
               Stop flying blind. Switch on Signal Intelligence today.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[#EC4899] hover:bg-[#db2777] text-white rounded-full px-10 py-7 text-lg font-bold shadow-2xl shadow-pink-600/20">
                  Start detecting
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

export default SignalIntelligence;