import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  UserCheck, 
  AlertTriangle, 
  FileKey, 
  Scale, 
  Eye, 
  Settings, 
  Bot, 
  ArrowRight,
  ChevronRight,
  StopCircle,
  FileCheck,
  Ban,
  Activity,
  Search,
  Users,
  Building,
  Gavel,
  ShieldCheck,
  Zap,
  TrendingUp,
  ThumbsUp,
  FileText
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

const GlassCard = ({ title, description, icon: Icon, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.4 }}
    whileHover={{ y: -5, scale: 1.02 }}
    className={cn(
      "p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.06] hover:border-pink-500/30 transition-all duration-300 group flex flex-col relative overflow-hidden shadow-lg h-full",
      className
    )}
  >
    <div className="relative z-10">
      {Icon && (
        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 group-hover:text-pink-400 group-hover:bg-pink-500/10 group-hover:border-pink-500/20 transition-all duration-300 mb-6 group-hover:scale-110">
          <Icon size={24} strokeWidth={1.5} />
        </div>
      )}
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm">{description}</p>
    </div>
  </motion.div>
);

const PageCard = ({ title, description, href, icon: Icon }) => (
  <Link to={href} className="block group h-full">
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
  </Link>
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

const AIAssistantsGovernanceControl = () => {
  return (
    <>
      <SEOHead {...(seoMetadata['/ai-assistants/governance-control'] || {})} />
      
      <main className="bg-[#0E0F11] text-white overflow-hidden w-full font-sans">
        
        {/* Breadcrumb Navigation */}
        <div className="pt-24 px-6 max-w-7xl mx-auto">
          <nav className="flex items-center text-sm text-gray-400 space-x-2">
            <Link to="/ai-assistants" className="hover:text-white transition-colors">AI Assistants™</Link>
            <ChevronRight size={14} />
            <span className="text-white">Governance & Control</span>
          </nav>
        </div>

        {/* 1. HERO SECTION */}
        <section className="relative pt-20 pb-20 px-6 overflow-hidden min-h-[85vh] flex flex-col justify-center">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-green-900/20 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <Badge text="AGENT GOVERNANCE & CONTROL" color="green" />
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight"
            >
              Setting boundaries, permissions, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
                and safety protocols
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Autonomy requires guardrails. Phenomeny AI Assistants™ operate within a strict governance layer that defines exactly what they can do, see, and execute.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/ai-assistants/overview">
                <Button size="lg" className="bg-[#EC4899] hover:bg-[#db2777] text-white rounded-full px-8 h-14 text-lg font-bold shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all hover:scale-105">
                  Explore AI Assistants™
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5 hover:text-white rounded-full px-8 h-14 text-lg font-medium text-gray-300">
                Executive briefing
              </Button>
            </motion.div>
          </div>
        </section>

        {/* 2. WHY GOVERNANCE MUST PRECEDE AUTONOMY */}
        <section className="py-24 px-6 bg-[#13151A] border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center">
             <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-3xl md:text-4xl font-bold text-white mb-6"
             >
               Why governance must precede autonomy
             </motion.h2>
             <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-lg text-gray-400 leading-relaxed mb-8"
             >
               In enterprise environments, an unconstrained agent is a liability. True value comes from agents that can be trusted to act independently because their boundaries are explicitly defined and technically enforced.
             </motion.p>
             <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-xl font-medium text-emerald-400"
             >
               We build safety in, not bolt it on.
             </motion.p>
          </div>
        </section>

        {/* 3. PERMISSIONED OPERATION */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
             <SectionHeading 
               title="Permissioned Operation by Role and Context" 
               subheading="Agents inherit permissions just like employees, but with greater granularity."
             />
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               <GlassCard title="Role Responsibility" description="Defined by job function." icon={Users} />
               <GlassCard title="Access Rights" description="Strict system & data limits." icon={FileKey} />
               <GlassCard title="Action Types" description="Read vs. write controls." icon={Settings} />
               <GlassCard title="Context Rules" description="Where actions occur." icon={Activity} />
             </div>
             <BottomStatement text="Identity-based control for every agent action." color="green" />
          </div>
        </section>

        {/* 4. EXPLICIT ACTION BOUNDARIES */}
        <section className="py-24 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
             <SectionHeading 
               title="Explicit Action Boundaries" 
               subheading="Clear technical limits on what an agent can touch and change."
             />
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               <GlassCard title="Read vs Write" description="Prevent unauthorized edits." icon={FileText} />
               <GlassCard title="Impact Limits" description="Cap financial exposure." icon={Ban} />
               <GlassCard title="System Scope" description="Restrict cross-app calls." icon={Shield} />
               <GlassCard title="Data Controls" description="Limit data modification." icon={Lock} />
             </div>
             <BottomStatement text="Hard limits prevent unintended consequences." color="green" />
          </div>
        </section>

        {/* 5. HUMAN-IN-THE-LOOP */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
             <SectionHeading 
               title="Human-in-the-Loop Enforcement" 
               subheading="Automated escalation when risk thresholds are met."
             />
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               <GlassCard title="Approval Triggers" description="Actions requiring sign-off." icon={AlertTriangle} />
               <GlassCard title="Authorized Users" description="Who can approve." icon={UserCheck} />
               <GlassCard title="Review Context" description="Information for decision." icon={Eye} />
               <GlassCard title="Override Handling" description="Safe manual intervention." icon={Settings} />
             </div>
             <BottomStatement text="Humans remain the ultimate authority." color="green" />
          </div>
        </section>

        {/* 6. SAFETY PROTOCOLS */}
        <section className="py-24 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
             <SectionHeading 
               title="Safety Protocols & Safe-Failure Defaults" 
               subheading="If in doubt, the system does nothing harm."
             />
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               <GlassCard title="Execution Pauses" description="Stops on uncertainty." icon={StopCircle} />
               <GlassCard title="Human Notification" description="Alerts sent immediately." icon={Users} />
               <GlassCard title="No Auto-Action" description="Prevents runaway errors." icon={Ban} />
               <GlassCard title="Safety Default" description="Fails to a safe state." icon={ShieldCheck} />
             </div>
             <BottomStatement text="Design for the worst case ensures safety in the best case." color="green" />
          </div>
        </section>

        {/* 7. COMPLIANCE CONTROLS */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
             <SectionHeading 
               title="Policy Alignment & Compliance" 
               subheading="Ensuring AI behavior adheres to regulatory standards."
             />
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               <GlassCard title="Data Privacy" description="Respects access rules." icon={Lock} />
               <GlassCard title="Regulatory Align" description="Meets compliance specs." icon={Scale} />
               <GlassCard title="Auditable Work" description="Traceable sensitive flows." icon={FileCheck} />
               <GlassCard title="Violation Block" description="Prevents policy breaches." icon={Shield} />
             </div>
             <BottomStatement text="Compliance is codified, not just suggested." color="green" />
          </div>
        </section>

        {/* 8. MONITORING & ADJUSTMENT */}
        <section className="py-24 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
             <SectionHeading 
               title="Continuous Monitoring & Adjustment" 
               subheading="Governance that evolves with your organization."
             />
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               <GlassCard title="Refine Permissions" description="Tighten or loosen scope." icon={Settings} />
               <GlassCard title="Adjust Boundaries" description="Adapt to new needs." icon={Activity} />
               <GlassCard title="Recalibrate" description="Tune approval thresholds." icon={Scale} />
               <GlassCard title="Update Protocols" description="Evolve safety rules." icon={FileText} />
             </div>
             <BottomStatement text="Dynamic control for a dynamic environment." color="green" />
          </div>
        </section>

        {/* 9. VISIBILITY */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
             <SectionHeading 
               title="Visibility into Governance Decisions" 
               subheading="Transparency into why actions were allowed or blocked."
             />
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <GlassCard title="Why Permitted" description="Rationale for allowance." icon={CheckCircle2} />
               <GlassCard title="Rule Applied" description="Specific policy cited." icon={FileText} />
               <GlassCard title="Approval Log" description="Who signed off." icon={UserCheck} />
             </div>
             <BottomStatement text="No black boxes in decision making." color="green" />
          </div>
        </section>

        {/* 10. REGULATED ENVIRONMENTS */}
        <section className="py-24 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
             <SectionHeading 
               title="Built for Regulated Environments" 
               subheading="Designed for industries where errors have consequences."
             />
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <GlassCard title="Real Consequences" description="Legal, financial, safety." icon={Gavel} />
               <GlassCard title="Mandatory Oversight" description="Required by law." icon={Eye} />
               <GlassCard title="Accountability" description="Cannot be delegated." icon={Building} />
             </div>
             <BottomStatement text="Trust is a requirement, not a feature." color="green" />
          </div>
        </section>

        {/* 11. WHAT IT ENABLES */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
             <SectionHeading 
               title="What Governance & Control Enables" 
               subheading="Safety unlocks speed."
             />
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               <GlassCard title="Safe Autonomy" description="Use capabilities freely." icon={Zap} />
               <GlassCard title="Predictability" description="Consistent behavior." icon={TrendingUp} />
               <GlassCard title="Reduced Risk" description="Operational confidence." icon={ShieldCheck} />
               <GlassCard title="High Confidence" description="Trust in execution." icon={ThumbsUp} />
             </div>
             <BottomStatement text="Move fast without breaking things." color="green" />
          </div>
        </section>

        {/* 12. CONTINUE EXPLORING */}
        <section className="py-24 px-6 border-t border-white/10 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge text="Next steps" color="violet" />
              <h2 className="text-3xl font-bold text-white mb-4">Continue exploring</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Deep dive into how we maintain safety and transparency.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PageCard 
                title="Audit Trails & Oversight" 
                description="Complete visibility into every agent action." 
                href="/ai-assistants/audit-trails" 
                icon={Search} 
              />
              <PageCard 
                title="Human + AI Collaboration" 
                description="Optimizing the handoff between people and machines." 
                href="/ai-assistants/human-ai-collaboration" 
                icon={Users} 
              />
              <PageCard 
                title="Security & Control" 
                description="Enterprise-grade security foundation." 
                href="/security-governance-control" 
                icon={Shield} 
              />
            </div>
          </div>
        </section>

        {/* 13. FINAL CTA */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-pink-900/20 to-purple-900/20 rounded-3xl p-12 text-center border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to implement governance at scale?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
                Deploy autonomous agents with the control and safety your enterprise demands.
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

// Component-specific Icon import fallback (re-importing used icons to ensure no reference errors if list at top changes)
import { CheckCircle2 } from 'lucide-react';

export default AIAssistantsGovernanceControl;