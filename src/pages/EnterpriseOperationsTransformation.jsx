import React from 'react';
import { motion } from 'framer-motion';
import { 
  Layers, 
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
  Building,
  Scale,
  GitPullRequest,
  Link as LinkIcon,
  Search,
  FileText
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
        <Layers size={12} />
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

const EnterpriseOperationsTransformation = () => {
  return (
    <>
      <SEOHead {...(seoMetadata['/transformations/enterprise-operations-transformation'] || {})} />
      
      <main className="bg-[#0E0F11] text-white overflow-hidden w-full font-sans">
        
        {/* 1. HERO SECTION */}
        <section className="relative pt-40 pb-20 px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[800px] h-[500px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <Badge text="Transformations" color="blue" />
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight"
            >
              Enterprise Operations Transformation <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Connecting siloed back-office systems into a unified operating fabric
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Move from fragmented departments to coordinated execution. Unify finance, HR, legal, and operational workflows into a seamless, intelligent fabric that drives efficiency at scale.
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

        {/* 2. THE HIDDEN COST */}
        <section className="py-20 px-6 bg-[#13151A] border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">The Hidden Cost of Functional Silos</h2>
            <p className="text-gray-400 text-lg mb-12 text-center leading-relaxed">
              When departments optimize only for themselves, the enterprise as a whole suffers from friction at the boundaries.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-10">
              {[
                { title: "Manual handoffs", desc: "Requests are thrown 'over the wall' via email or Slack without tracking." },
                { title: "Duplicate data entry", desc: "The same information is typed into three different systems by three different people." },
                { title: "Delays caused by unclear ownership", desc: "Tasks sit in limbo because no one knows whose turn it is." },
                { title: "Decisions made with partial context", desc: "Finance approves budgets without seeing operational constraints." },
                { title: "Heavy reliance on email and meetings", desc: "Coordination happens in ephemeral channels, leaving no audit trail." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                  <div>
                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-blue-400 font-medium">
              The organization appears busy, yet progress slows at the seams.
            </p>
            <p className="text-center text-gray-500 text-sm mt-4">
              Enterprise Operations Transformation targets these seams.
            </p>
          </div>
        </section>

        {/* 3. VERTICAL TO HORIZONTAL */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="From Vertical Optimization to Horizontal Flow" 
              subheading="Shift focus from optimizing individual departments to optimizing the value stream that flows through them."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard 
                title="Request Movement" 
                description="How requests move from one function to another seamlessly."
                icon={ArrowRight}
                variant="blue"
              />
              <GlassCard 
                title="Approval Propagation" 
                description="How approvals propagate instantly across hierarchical lines."
                icon={CheckCircle2}
                variant="blue"
              />
              <GlassCard 
                title="Cross-Functional Impact" 
                description="How decisions in one area affect others immediately."
                icon={Network}
                variant="blue"
              />
              <GlassCard 
                title="Compound Delays" 
                description="How delays compound across the enterprise when visibility is low."
                icon={Clock}
                variant="blue"
              />
            </div>
            <BottomStatement text="AI Assistants™ operate across these boundaries, not inside one silo." color="blue" />
          </div>
        </section>

        {/* 4. UNIFYING SYSTEMS */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Unifying Back-Office Systems Without Consolidation" 
              subheading="You don't need to replace your ERP or CRM. You need to connect them."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard 
                title="Finance & Accounting" 
                description="Connect ledger logic with operational reality."
                icon={BarChart3}
                variant="violet"
              />
              <GlassCard 
                title="Procurement & Vendor" 
                description="Streamline purchasing from request to payment."
                icon={ShoppingBagIcon} 
                // Note: ShoppingBag is not imported, replacing with LinkIcon or similar contextually appropriate icon
                // Using LinkIcon as a generic connector for supply chain/vendor
                variant="violet"
              />
              <GlassCard 
                title="HR & Workforce" 
                description="Sync people data with project assignment and access control."
                icon={Users}
                variant="violet"
              />
              <GlassCard 
                title="Internal Services" 
                description="Unify IT, legal, and facilities requests into one portal."
                icon={Layers}
                variant="violet"
              />
            </div>
            <div className="mt-12 text-center max-w-4xl mx-auto space-y-4">
              <p className="text-xl text-purple-200/90 font-medium">Systems remain independent, but intelligence spans them.</p>
              <p className="text-gray-400">
                A unified operating fabric provides shared context across departments, visibility into cross-functional dependencies, and coordinated execution across tools. Back-office work becomes connected, not fragmented.
              </p>
            </div>
          </div>
        </section>

        {/* 5. COORDINATED EXECUTION */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Coordinated Execution Across Functions" 
              subheading="Orchestrate complex workflows that require input from multiple teams."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard 
                title="Structured Handoffs" 
                description="Ensure complete information transfer between teams."
                icon={GitPullRequest}
                variant="green"
              />
              <GlassCard 
                title="Clear Ownership" 
                description="Define exactly who owns the ball at each stage of a process."
                icon={Users}
                variant="green"
              />
              <GlassCard 
                title="Automatic Escalation" 
                description="Trigger alerts automatically when work stalls beyond defined SLAs."
                icon={AlertTriangle}
                variant="green"
              />
              <GlassCard 
                title="Reduced Follow-ups" 
                description="Eliminate the need for manual status checks and 'just checking in' emails."
                icon={CheckCircle2}
                variant="green"
              />
            </div>
            <BottomStatement text="AI Assistants™ support coordination by tracking progress, preserving context, and ensuring nothing disappears between departments." color="green" />
          </div>
        </section>

        {/* 6. DECISION MAKING */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Decision-Making with Enterprise Context" 
              subheading="Empower leaders to make choices based on the full picture, not just their slice."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard 
                title="Context Transfer" 
                description="Decisions carry context across systems automatically."
                icon={LinkIcon}
                variant="default"
              />
              <GlassCard 
                title="Visible Trade-offs" 
                description="See the downstream impact before execution begins."
                icon={Scale}
                variant="default"
              />
              <GlassCard 
                title="Early Exceptions" 
                description="Surface deviations from the plan immediately."
                icon={AlertTriangle}
                variant="default"
              />
              <GlassCard 
                title="Enterprise Impact" 
                description="Leaders understand enterprise-wide impact of local choices."
                icon={Building}
                variant="default"
              />
            </div>
            <BottomStatement text="Decision-making becomes informed, not reactive." color="blue" />
          </div>
        </section>

        {/* 7. VISIBILITY WITHOUT MICROMANAGEMENT */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Visibility Without Micromanagement" 
              subheading="See the flow of work without interrupting the people doing it."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard 
                title="Real-time Visibility" 
                description="Monitor cross-functional workflows as they happen."
                icon={Eye}
                variant="pink"
              />
              <GlassCard 
                title="Early Detection" 
                description="Identify bottlenecks before they become critical delays."
                icon={Activity}
                variant="pink"
              />
              <GlassCard 
                title="Clear Explanations" 
                description="Understand the root cause of delays or risks instantly."
                icon={Search}
                variant="pink"
              />
            </div>
            <BottomStatement text="Leaders gain insight without interrupting teams or demanding constant updates." color="pink" />
          </div>
        </section>

        {/* 8. REDUCING INFORMAL COORDINATION */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Reducing Dependency on Informal Coordination" 
              subheading="Make the process robust, independent of personal relationships."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard 
                title="Who to Contact" 
                description="System knows the right owner, reducing navigation time."
                icon={Users}
                variant="violet"
              />
              <GlassCard 
                title="How to Escalate" 
                description="Standardized paths for resolving blockers."
                icon={ArrowRight}
                variant="violet"
              />
              <GlassCard 
                title="What to Expedite" 
                description="Intelligent prioritization of critical tasks."
                icon={Zap}
                variant="violet"
              />
            </div>
            <div className="mt-12 text-center max-w-4xl mx-auto space-y-4">
              <p className="text-xl text-purple-200/90 font-medium">Enterprise Operations Transformation institutionalizes this knowledge into systems, reducing reliance on personal networks and tribal memory.</p>
              <p className="text-gray-400">The organization becomes more resilient as people and roles change.</p>
            </div>
          </div>
        </section>

        {/* 9. SCALE, GOVERNANCE, CONTROL */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Built for Scale, Governance, and Control" 
              subheading="Maintain strict standards even as volume and complexity grow."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard 
                title="Role-Based Permissions" 
                description="Granular access control ensures data safety."
                icon={Lock}
                variant="blue"
              />
              <GlassCard 
                title="Approval Thresholds" 
                description="Automated gates based on value or risk."
                icon={CheckCircle2}
                variant="blue"
              />
              <GlassCard 
                title="Full Auditability" 
                description="Complete history of every action and decision."
                icon={FileText}
                variant="blue"
              />
              <GlassCard 
                title="Human-in-the-Loop" 
                description="Governance that keeps humans in control of critical steps."
                icon={Shield}
                variant="blue"
              />
            </div>
            <BottomStatement text="Coordination scales without losing control." color="blue" />
          </div>
        </section>

        {/* 10. OUTCOMES */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title="Outcomes Enterprises Experience" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <GlassCard title="Faster Execution" description="Speed across functions." icon={Zap} variant="green" />
              <GlassCard title="Fewer Drops" description="Seamless handoffs." icon={CheckCircle2} variant="green" />
              <GlassCard title="Reduced Friction" description="Smoother operations." icon={Activity} variant="green" />
              <GlassCard title="Better Visibility" description="Enterprise-wide view." icon={Eye} variant="green" />
              <GlassCard title="Improved Confidence" description="Decisions at scale." icon={Shield} variant="green" />
            </div>
            <BottomStatement text="Horizontal efficiency becomes a competitive advantage." color="green" />
          </div>
        </section>

        {/* 11. DESIGNED FOR COMPLEX ENTERPRISES */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title="Designed for Complex Enterprises" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard title="Large Service Orgs" description="Managing thousands of employees." icon={Users} variant="blue" />
              <GlassCard title="Ops-Heavy Enterprises" description="Logistics, supply chain, infrastructure." icon={Layers} variant="blue" />
              <GlassCard title="Regulated Environments" description="Finance, healthcare, insurance." icon={Shield} variant="blue" />
              <GlassCard title="Scaling Companies" description="Rapid growth across regions." icon={Building} variant="blue" />
            </div>
            <BottomStatement text="Anywhere work depends on multiple functions moving together." color="blue" />
          </div>
        </section>

        {/* 12. CONTINUE EXPLORING */}
        <section className="py-20 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <Badge text="Next steps" color="pink" />
              <h2 className="text-3xl font-bold text-white">Continue Exploring</h2>
              <p className="text-gray-400 mt-4">Discover how Enterprise Operations Transformation integrates with other PDDT capabilities.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PageCard 
                title="Multi-Location Services" 
                description="Standardize distributed ops." 
                href="/transformations/multi-location-services-transformation" 
                icon={Building} 
              />
              <PageCard 
                title="Unified Dashboards" 
                description="See the full picture." 
                href="/ai-features/unified-dashboards" 
                icon={BarChart3} 
              />
              <PageCard 
                title="Agent Workflows" 
                description="Automate the connections." 
                href="/capabilities/agent-workflows" 
                icon={Workflow} 
              />
              <PageCard 
                title="Discuss Transformation" 
                description="Connect your enterprise." 
                href="/contact" 
                icon={ArrowRight} 
              />
            </div>
          </div>
        </section>

        {/* 13. FINAL CTA */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-3xl p-12 text-center border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to connect your enterprise operations?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Enterprise Operations Transformation provides the coordination and visibility needed to scale efficiently.
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

// Simple Icon replacement for ShoppingBag since it wasn't in the initial import list and I prefer to stick to standard Lucide set
const ShoppingBagIcon = ({ size, className }) => (
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
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
);

export default EnterpriseOperationsTransformation;