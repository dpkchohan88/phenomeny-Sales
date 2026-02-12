import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Map, 
  LayoutGrid, 
  Users, 
  BarChart3, 
  Activity, 
  CheckCircle2, 
  AlertTriangle, 
  Search, 
  ArrowRight, 
  Scale, 
  Zap,
  Building,
  Network,
  Eye,
  ShieldCheck,
  TrendingUp,
  Share2
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
        <Globe size={12} />
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

const MultiLocationServicesTransformation = () => {
  return (
    <>
      <SEOHead {...(seoMetadata['/transformations/multi-location-services-transformation'] || {})} />
      
      <main className="bg-[#0E0F11] text-white overflow-hidden w-full font-sans">
        
        {/* 1. HERO SECTION */}
        <section className="relative pt-40 pb-20 px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-sky-900/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[800px] h-[500px] bg-indigo-900/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <Badge text="Transformations" color="blue" />
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight"
            >
              Multi-Location Services Transformation <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
                Standardizing operations across distributed service centers
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Achieve operational consistency at scale. Connect distributed teams, standardize execution, and gain real-time visibility across every location in your network.
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

        {/* 2. THE CORE CHALLENGE */}
        <section className="py-20 px-6 bg-[#13151A] border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">The Core Challenge of Distributed Operations</h2>
            <p className="text-gray-400 text-lg mb-12 text-center leading-relaxed">
              When operations are spread across cities or regions, maintaining a single standard of excellence becomes exponentially harder.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-10">
              {[
                { title: "Inconsistent processes", desc: "Every location invents its own way of doing things, creating variance." },
                { title: "Uneven service quality", desc: "Customer experience fluctuates wildly depending on which branch they visit." },
                { title: "Local workarounds", desc: "Frontline teams bypass standard tools when they don't fit local reality." },
                { title: "Limited visibility", desc: "Headquarters sees problems only after monthly reports are compiled." },
                { title: "High dependency on managers", desc: "Performance relies entirely on the individual capability of the local manager." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2.5 shrink-0" />
                  <div>
                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-sky-400 font-medium">
              While systems may be standardized, execution rarely is.
            </p>
            <p className="text-center text-gray-500 text-sm mt-4">
              Generic AI tools often fail here because they lack the context of physical or localized workflows.
            </p>
          </div>
        </section>

        {/* 3. FROM LOCAL TO SHARED */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="From Local Practices to Shared Operational Intelligence" 
              subheading="Capture what works in one location and scale it to everyone instantly."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard 
                title="Capture" 
                description="Ingest successful workflows and decisions from top-performing sites."
                icon={Search}
                variant="blue"
              />
              <GlassCard 
                title="Identify" 
                description="Spot patterns in local adaptations that suggest process improvements."
                icon={Activity}
                variant="blue"
              />
              <GlassCard 
                title="Preserve" 
                description="Turn tribal knowledge into institutional assets accessible to all."
                icon={Share2}
                variant="blue"
              />
              <GlassCard 
                title="Make Available" 
                description="Serve best practices directly into the workflow of other locations."
                icon={Network}
                variant="blue"
              />
            </div>
            <BottomStatement text="Best practices spread naturally, without mandates." color="blue" />
          </div>
        </section>

        {/* 4. CONSISTENT EXECUTION */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Consistent Execution with Local Flexibility" 
              subheading="Balance the need for standardization with the reality of local conditions."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard 
                title="Guiding Execution" 
                description="Step-by-step AI guidance for complex procedures ensures adherence."
                icon={Map}
                variant="violet"
              />
              <GlassCard 
                title="Adapting Recommendations" 
                description="System adjusts protocols based on local resource availability or constraints."
                icon={Zap}
                variant="violet"
              />
              <GlassCard 
                title="Highlighting Deviations" 
                description="Detect when a process step is skipped or modified in real-time."
                icon={AlertTriangle}
                variant="violet"
              />
              <GlassCard 
                title="Escalating Issues" 
                description="Automatically route blockers to the right regional support tier."
                icon={ArrowRight}
                variant="violet"
              />
            </div>
            <BottomStatement text="This ensures consistency where it matters, and flexibility where it is required." color="violet" />
          </div>
        </section>

        {/* 5. REAL-TIME VISIBILITY */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Real-Time Visibility Across Locations" 
              subheading="Manage the network as a single organism, not a collection of islands."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard 
                title="Unified View" 
                description="See operational status across all sites in a single dashboard."
                icon={LayoutGrid}
                variant="green"
              />
              <GlassCard 
                title="Early Detection" 
                description="Spot emerging trends or risks before they affect quarterly results."
                icon={Eye}
                variant="green"
              />
              <GlassCard 
                title="Comparative Insights" 
                description="Benchmark locations against each other to identify outliers."
                icon={BarChart3}
                variant="green"
              />
              <GlassCard 
                title="Contextual Explanations" 
                description="Understand 'why' a location is underperforming, not just 'that' it is."
                icon={Search}
                variant="green"
              />
            </div>
            <BottomStatement text="Leaders see what is happening without relying on delayed reports or anecdotal updates." color="green" />
          </div>
        </section>

        {/* 6. REDUCING DEPENDENCY */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Reducing Dependency on Individual Managers" 
              subheading="Systematize success so quality survives staff turnover."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard 
                title="Faster Onboarding" 
                description="New managers ramp up quickly with AI-guided operational support."
                icon={Zap}
                variant="default"
              />
              <GlassCard 
                title="Stable Quality" 
                description="Customer experience remains consistent even during leadership transitions."
                icon={Scale}
                variant="default"
              />
              <GlassCard 
                title="Reduced Attrition Risk" 
                description="Less burnout for managers who no longer have to hold everything in their heads."
                icon={Users}
                variant="default"
              />
              <GlassCard 
                title="Resilient Operations" 
                description="The 'how-to' of the business lives in the system, not just the people."
                icon={ShieldCheck}
                variant="default"
              />
            </div>
            <BottomStatement text="Build an organization that is robust by design." color="blue" />
          </div>
        </section>

        {/* 7. SUPPORTING COMPLIANCE */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Supporting Compliance and Governance at Scale" 
              subheading="Enforce standards without adding administrative burden."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard 
                title="Consistent Enforcement" 
                description="Ensure every site follows the same safety and regulatory protocols."
                icon={CheckCircle2}
                variant="pink"
              />
              <GlassCard 
                title="Auditable Execution" 
                description="Prove compliance with detailed logs of every operational step."
                icon={Share2}
                variant="pink"
              />
              <GlassCard 
                title="Visible Exceptions" 
                description="Instantly flag when a mandatory compliance check is missed."
                icon={AlertTriangle}
                variant="pink"
              />
              <GlassCard 
                title="No Manual Oversight" 
                description="Automated monitoring replaces the need for constant human checking."
                icon={Eye}
                variant="pink"
              />
            </div>
            <BottomStatement text="Standards are upheld without constant supervision." color="pink" />
          </div>
        </section>

        {/* 8. DESIGNED FOR HIGH-VOLUME */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title="Designed for High-Volume, High-Variation Environments" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard title="Healthcare Networks" description="Clinics & Hospitals" icon={Activity} variant="blue" />
              <GlassCard title="Retail Franchises" description="Stores & Showrooms" icon={Building} variant="blue" />
              <GlassCard title="Logistics Operations" description="Warehouses & Hubs" icon={Globe} variant="blue" />
              <GlassCard title="Manufacturing Plants" description="Factories & Assembly" icon={Zap} variant="blue" />
            </div>
            <BottomStatement text="Anywhere consistency must scale across distance and diversity." color="blue" />
          </div>
        </section>

        {/* 9. OUTCOMES */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title="Outcomes Organizations Experience" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <GlassCard title="Consistent Delivery" description="Uniform excellence." icon={CheckCircle2} variant="green" />
              <GlassCard title="Faster Resolution" description="Problems solved locally." icon={Zap} variant="green" />
              <GlassCard title="Reduced Variance" description="Predictable results." icon={Scale} variant="green" />
              <GlassCard title="Stronger Governance" description="Audit-ready always." icon={ShieldCheck} variant="green" />
              <GlassCard title="Easier Scaling" description="Plug-and-play expansion." icon={TrendingUp} variant="green" />
            </div>
            <BottomStatement text="Standardization becomes a strength, not a constraint." color="green" />
          </div>
        </section>

        {/* 10. CONTINUE EXPLORING */}
        <section className="py-20 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <Badge text="Next steps" color="blue" />
              <h2 className="text-3xl font-bold text-white">Continue Exploring</h2>
              <p className="text-gray-400 mt-4">Discover the tools that enable distributed standardization.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PageCard 
                title="Enterprise Ops" 
                description="The bigger picture." 
                href="/transformations/enterprise-operations-transformation" 
                icon={Building} 
              />
              <PageCard 
                title="Unified Dashboards" 
                description="See it all in one place." 
                href="/ai-features/unified-dashboards" 
                icon={LayoutGrid} 
              />
              <PageCard 
                title="Workflow AI" 
                description="Automate the process." 
                href="/ai-features/workflow-ai" 
                icon={Zap} 
              />
              <PageCard 
                title="Discuss Transformation" 
                description="Standardize your network." 
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
                Ready to standardize operations across your network?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Implement shared intelligence that ensures consistency without sacrificing local flexibility.
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

export default MultiLocationServicesTransformation;