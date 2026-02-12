import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  BarChart3, 
  Target, 
  Search, 
  RefreshCcw, 
  ShieldCheck, 
  Users, 
  Activity, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  Brain, 
  PieChart, 
  Zap, 
  Clock, 
  Database,
  Lock,
  Layers,
  LineChart,
  Building
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
    orange: "bg-orange-500/10 text-orange-400 border-orange-500/20",
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
        <TrendingUp size={12} />
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
      variant === "orange" && "bg-orange-900/5 border-orange-500/20 hover:border-orange-500/40 hover:bg-orange-900/10",
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
          variant === "orange" && "bg-orange-500/10 border-orange-500/20 text-orange-400",
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
    pink: "text-pink-200/90",
    orange: "text-orange-200/90"
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

const SalesRevenueSystemsTransformation = () => {
  return (
    <>
      <SEOHead {...(seoMetadata['/transformations/sales-revenue-systems-transformation'] || {})} />
      
      <main className="bg-[#0E0F11] text-white overflow-hidden w-full font-sans">
        
        {/* 1. HERO SECTION */}
        <section className="relative pt-40 pb-20 px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-orange-900/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[800px] h-[500px] bg-red-900/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <Badge text="Transformations" color="orange" />
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight"
            >
              Sales & Revenue Systems Transformation <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">
                Predictive pipeline intelligence and automated CRM hygiene
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Move from opinion-based forecasting to data-driven revenue operations. Automate data entry, uncover hidden deal risks, and give leadership the confidence to commit to the number.
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

        {/* 2. THE CORE PROBLEM */}
        <section className="py-20 px-6 bg-[#13151A] border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">The Core Problem in Modern Sales Operations</h2>
            <p className="text-gray-400 text-lg mb-12 text-center leading-relaxed">
              Sales organizations often fly blind because their primary instrument—the CRM—lags behind reality.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-10">
              {[
                { title: "Incomplete pipeline data", desc: "Critical details are missing or stuck in reps' heads, not the system." },
                { title: "Manual CRM updates lag", desc: "Data entry happens days or weeks after key events occur." },
                { title: "Opinion-based forecasts", desc: "Projections rely on optimism rather than verifiable signals." },
                { title: "Limited risk visibility", desc: "Deal stall points and risks remain hidden until it's too late." },
                { title: "Reliance on judgment", desc: "Heavy dependence on individual sales judgment creates variance." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 shrink-0" />
                  <div>
                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-orange-400 font-medium">
              As a result, leadership sees numbers, but not confidence.
            </p>
          </div>
        </section>

        {/* 3. FROM STATIC TO LIVING */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="From Static Pipelines to Living Revenue Intelligence" 
              subheading="Transform your CRM from a filing cabinet into a real-time radar system."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard 
                title="Observing Activity" 
                description="Automatically capture emails, meetings, and calls across systems."
                icon={Search}
                variant="orange"
              />
              <GlassCard 
                title="Tracking Progression" 
                description="Monitor engagement levels and stage movement in real-time."
                icon={TrendingUp}
                variant="orange"
              />
              <GlassCard 
                title="Preserving Context" 
                description="Capture the 'why' behind decisions, delays, and deal changes."
                icon={Database}
                variant="orange"
              />
              <GlassCard 
                title="Identifying Patterns" 
                description="Spot the hidden signals that precede success or failure."
                icon={Brain}
                variant="orange"
              />
            </div>
            <BottomStatement text="Revenue intelligence becomes continuous, not episodic." color="orange" />
          </div>
        </section>

        {/* 4. PREDICTIVE PIPELINE INTELLIGENCE */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Predictive Pipeline Intelligence" 
              subheading="Look beyond the commit. See what the data actually says."
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Activity className="text-rose-400" /> Analyzing Signals Like:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <GlassCard title="Consistency" description="Regularity of engagement." icon={CheckCircle2} variant="default" className="p-6" />
                  <GlassCard title="Response Patterns" description="Speed and sentiment of replies." icon={Clock} variant="default" className="p-6" />
                  <GlassCard title="Deal Velocity" description="Time spent in each stage." icon={Zap} variant="default" className="p-6" />
                  <GlassCard title="Dependencies" description="Waiting on internal/external actions." icon={Layers} variant="default" className="p-6" />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Target className="text-orange-400" /> To Surface:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <GlassCard title="Stall Risks" description="Deals losing momentum quietly." icon={AlertTriangle} variant="pink" className="p-6" />
                  <GlassCard title="Forecast Risk" description="Commits that lack data support." icon={BarChart3} variant="pink" className="p-6" />
                  <GlassCard title="Interventions" description="Opportunities needing help now." icon={Zap} variant="pink" className="p-6" />
                  <GlassCard title="Reality Checks" description="Unrealistic close dates flagged." icon={Search} variant="pink" className="p-6" />
                </div>
              </div>
            </div>
            
            <BottomStatement text="Predictions are explainable and contextual — not black-box scores." color="pink" />
          </div>
        </section>

        {/* 5. AUTOMATED CRM HYGIENE */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Automated CRM Hygiene Without Burdening Sellers" 
              subheading="Keep your system of record accurate without turning reps into data entry clerks."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard 
                title="Auto-Updates" 
                description="Update records automatically based on observed activity."
                icon={RefreshCcw}
                variant="violet"
              />
              <GlassCard 
                title="Inconsistency Flags" 
                description="Flag discrepancies between activity and stage status."
                icon={AlertTriangle}
                variant="violet"
              />
              <GlassCard 
                title="Reduced Entry" 
                description="Minimize redundant typing and manual logging tasks."
                icon={Database}
                variant="violet"
              />
              <GlassCard 
                title="Context Preservation" 
                description="Log key details without requiring manual narration."
                icon={ShieldCheck}
                variant="violet"
              />
            </div>
            <BottomStatement text="Sellers spend less time maintaining systems and more time engaging customers." color="violet" />
          </div>
        </section>

        {/* 6. HUMAN-IN-THE-LOOP */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Human-in-the-Loop by Default" 
              subheading="AI supports the sales process. It does not replace the sales leader's judgment."
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
              <div className="bg-sky-900/10 border border-sky-500/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-sky-400 mb-6 flex items-center gap-2">
                  <CheckCircle2 /> AI Agents Will:
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0"></span>
                    Surface insights and recommendations based on data.
                  </li>
                  <li className="flex gap-3 text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0"></span>
                    Highlight risks and data inconsistencies for review.
                  </li>
                  <li className="flex gap-3 text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0"></span>
                    Suggest next best actions to accelerate deals.
                  </li>
                </ul>
              </div>

              <div className="bg-pink-900/10 border border-pink-500/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-pink-400 mb-6 flex items-center gap-2">
                  <Lock /> AI Agents Do Not:
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 shrink-0"></span>
                    Change deal values autonomously without oversight.
                  </li>
                  <li className="flex gap-3 text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 shrink-0"></span>
                    Commit forecasts without human approval.
                  </li>
                  <li className="flex gap-3 text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 shrink-0"></span>
                    Replace human accountability for the number.
                  </li>
                </ul>
              </div>
            </div>
            
            <BottomStatement text="Final decisions always remain with sales leadership." color="blue" />
          </div>
        </section>

        {/* 7. VISIBILITY FOR LEADERSHIP */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Visibility for Leadership Without Micromanagement" 
              subheading="Understand the state of the business without interrogating your team."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard 
                title="Real-time Health" 
                description="Instant visibility into overall pipeline health."
                icon={Activity}
                variant="green"
              />
              <GlassCard 
                title="Early Warnings" 
                description="Detect forecast risk weeks before the quarter ends."
                icon={AlertTriangle}
                variant="green"
              />
              <GlassCard 
                title="Clear Explanations" 
                description="Understand exactly why the forecast changed."
                icon={Search}
                variant="green"
              />
              <GlassCard 
                title="Less Review Time" 
                description="Reduce the need for manual deal interrogation."
                icon={Clock}
                variant="green"
              />
            </div>
            <BottomStatement text="Confidence increases without adding pressure on teams." color="green" />
          </div>
        </section>

        {/* 8. ALIGNMENT */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Alignment Between Sales and Revenue Operations" 
              subheading="Create a single source of truth for everyone touching revenue."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard 
                title="Frontline Sellers" 
                description="Focused on execution, supported by clean data."
                icon={Users}
                variant="orange"
              />
              <GlassCard 
                title="Sales Operations" 
                description="Focused on process efficiency and system integrity."
                icon={RefreshCcw}
                variant="orange"
              />
              <GlassCard 
                title="Finance & Forecasting" 
                description="Focused on predictability and accurate reporting."
                icon={PieChart}
                variant="orange"
              />
            </div>
            <BottomStatement text="Shared context reduces friction, improves forecast alignment, and enables faster, better-informed decisions." color="orange" />
          </div>
        </section>

        {/* 9. DESIGNED FOR ENTERPRISE */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Designed for Complex, Enterprise Sales Environments" 
              subheading="Built to handle the nuance and scale of sophisticated sales organizations."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard 
                title="B2B Organizations" 
                description="Tailored for complex B2B sales cycles."
                icon={Building}
                variant="blue"
              />
              <GlassCard 
                title="Long-Cycle Deals" 
                description="Maintains context over months or years."
                icon={Clock}
                variant="blue"
              />
              <GlassCard 
                title="Multi-Stakeholder" 
                description="Tracks engagement across buying committees."
                icon={Users}
                variant="blue"
              />
              <GlassCard 
                title="Global Teams" 
                description="Supports revenue teams operating across regions."
                icon={LineChart}
                variant="blue"
              />
            </div>
            <BottomStatement text="It supports scale without sacrificing accuracy." color="blue" />
          </div>
        </section>

        {/* 10. OUTCOMES */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title="Outcomes Organizations Experience" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <GlassCard title="Reliable Pipelines" description="Cleaner data." icon={CheckCircle2} variant="green" />
              <GlassCard title="Forecast Confidence" description="Trust the number." icon={Target} variant="green" />
              <GlassCard title="Less Admin" description="More selling time." icon={Zap} variant="green" />
              <GlassCard title="Early Detection" description="Risk surfaced sooner." icon={Search} variant="green" />
              <GlassCard title="Better Alignment" description="Sales & Leadership sync." icon={Users} variant="green" />
            </div>
            <BottomStatement text="Revenue operations become predictable without becoming rigid." color="green" />
          </div>
        </section>

        {/* 11. CONTINUE EXPLORING */}
        <section className="py-20 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <Badge text="Next steps" color="orange" />
              <h2 className="text-3xl font-bold text-white">Continue Exploring</h2>
              <p className="text-gray-400 mt-4">Discover the tools that power revenue transformation.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PageCard 
                title="Enterprise Ops" 
                description="Connect back-office systems." 
                href="/transformations/enterprise-operations-transformation" 
                icon={Layers} 
              />
              <PageCard 
                title="Unified Dashboards" 
                description="Visualize the data." 
                href="/ai-features/unified-dashboards" 
                icon={BarChart3} 
              />
              <PageCard 
                title="Signal Intelligence" 
                description="Analyze the signals." 
                href="/ai-features/signal-intelligence" 
                icon={Activity} 
              />
              <PageCard 
                title="Discuss Transformation" 
                description="Transform your sales." 
                href="/contact" 
                icon={ArrowRight} 
              />
            </div>
          </div>
        </section>

        {/* 12. FINAL CTA */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-orange-900/20 to-rose-900/20 rounded-3xl p-12 text-center border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to transform your sales operations?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Implement predictive intelligence that gives you confidence in your pipeline and forecast.
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

export default SalesRevenueSystemsTransformation;