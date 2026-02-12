import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  FileText, 
  Users, 
  AlertTriangle, 
  Activity, 
  CheckCircle2, 
  Fingerprint, 
  Server, 
  FileSearch,
  ArrowRight,
  Database,
  Scale
} from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { seoMetadata } from '@/config/seoMetadata';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// --- Shared Components (Consistent with other pages) ---

const Badge = ({ text, color = "pink" }) => {
  const colors = {
    pink: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    blue: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    violet: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    green: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    gray: "bg-gray-500/10 text-gray-400 border-gray-500/20", 
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

const GlassCard = ({ title, description, icon: Icon, color = "blue", className, delay = 0 }) => {
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

  const theme = themes[color] || themes.blue;

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

const PrincipleCard = ({ number, title, statement }) => (
  <div className="p-6 rounded-lg border border-white/10 bg-white/[0.02] flex items-start gap-4">
    <span className="text-gray-600 font-mono text-xs font-bold pt-1.5 opacity-60">
      {number.toString().padStart(2, '0')}
    </span>
    <div>
      <h3 className="text-white font-bold text-base md:text-lg leading-snug mb-2 tracking-tight">
        {title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {statement}
      </p>
    </div>
  </div>
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

const SecurityGovernanceControl = () => {
  const operatingPrinciples = [
    {
      title: "Intelligence Must Be Explainable",
      statement: "No intelligence is permitted to act without a traceable basis. Every recommendation or action must be explainable through inputs, assumptions, and constraints."
    },
    {
      title: "Accountability Cannot Be Automated Away",
      statement: "AI may assist decisions, but responsibility for outcomes always remains human. Accountability is never transferred to a system."
    },
    {
      title: "Context Is Preserved Alongside Outcomes",
      statement: "Intelligence must retain the reasoning, trade-offs, and constraints behind decisions — not just the results."
    },
    {
      title: "Authority Is Explicitly Bounded",
      statement: "AI operates only within predefined permissions. It cannot infer, expand, or override its own authority."
    },
    {
      title: "All Actions Are Auditable",
      statement: "Every action, recommendation, and escalation must leave an inspectable, time-stamped record."
    },
    {
      title: "Autonomy Is Earned, Not Assumed",
      statement: "AI begins as assistive. Increased autonomy is permitted only after predictability, reliability, and trust are established."
    },
    {
      title: "Data Ownership Is Absolute",
      statement: "Client data remains client-owned. No implicit training, reuse, or cross-boundary transfer is permitted."
    },
    {
      title: "Integration Comes Before Replacement",
      statement: "AI must operate within existing enterprise systems, respecting their records, constraints, and transactional integrity."
    },
    {
      title: "Predictability Is Preferred Over Novelty",
      statement: "Reliable and bounded behavior is more valuable than surprising intelligence."
    },
    {
      title: "Intelligence Must Strengthen the Organization",
      statement: "AI must reduce fragility over time by preserving institutional knowledge and improving decision quality as complexity grows."
    }
  ];

  return (
    <>
      <SEOHead {...(seoMetadata['/security-governance-control'] || {})} />
      
      <main className="bg-[#0E0F11] text-white overflow-hidden w-full">
        
        {/* 1. HERO SECTION */}
        <section className="relative pt-32 pb-20 px-6 min-h-[85vh] flex flex-col items-center justify-center overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <Badge text="Enterprise safety" color="green" />
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-[1.1]"
            >
              Security, Governance <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                & Control
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Built for compliance, visibility, and operational safety at scale. We ensure your AI adoption is secure, auditable, and firmly under your control.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button className="w-full sm:w-auto min-h-[44px] h-auto px-4 py-2 text-sm md:px-6 md:py-2.5 md:text-base lg:px-7 lg:py-3 bg-[#EC4899] hover:bg-[#db2777] text-white rounded-full font-bold shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all hover:scale-105">
                Explore security
              </Button>
              <Button variant="outline" className="w-full sm:w-auto min-h-[44px] h-auto px-4 py-2 text-sm md:px-6 md:py-2.5 md:text-base lg:px-7 lg:py-3 border-white/20 hover:bg-white/5 hover:text-white rounded-full font-medium text-gray-300">
                Request demo
              </Button>
            </motion.div>
          </div>
        </section>

        {/* 2. HIGH-STAKES ENVIRONMENTS */}
        <section className="py-24 px-6 relative border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <Badge text="The requirement" color="blue" />
            <SectionHeading 
              title="Designed for high-stakes environments" 
              subtitle="Enterprise AI cannot be a black box. It must survive the scrutiny of CISOs, auditors, and regulators."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <GlassCard 
                title="Strict Compliance" 
                description="Your industry regulations (GDPR, HIPAA, SOC2) are the baseline, not an afterthought."
                icon={Scale}
                color="blue"
                delay={0}
              />
              <GlassCard 
                title="Complex Processes" 
                description="Workflows that touch sensitive data or financial systems require precision, not hallucination."
                icon={Activity}
                color="blue"
                delay={0.1}
              />
              <GlassCard 
                title="Mandatory Oversight" 
                description="Autonomous agents must be observable. You need to know what they did, when, and why."
                icon={Eye}
                color="blue"
                delay={0.2}
              />
              <GlassCard 
                title="Earned Trust" 
                description="Trust isn't granted; it's verified. Systems must prove their reliability every day."
                icon={ShieldCheck}
                color="blue"
                delay={0.3}
              />
            </div>
          </div>
        </section>

        {/* 3. GOVERNANCE BY DESIGN */}
        <section className="py-24 px-6 bg-[#0E0F11]">
          <div className="max-w-5xl mx-auto text-center">
            <Badge text="The approach" color="violet" />
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-white mb-8"
            >
              Governance by Design
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12"
            >
              We don't bolt security on at the end. The entire architecture is predicated on the concept of <span className="text-purple-400 font-bold">verifiable control</span>.
            </motion.p>
          </div>
        </section>

        {/* NEW SECTION: Operating Guarantees / Principles */}
        <section className="py-24 px-6 border-t border-white/5 bg-[#0E0F11]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge text="Operating Guarantees" color="gray" />
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
              >
                Phenomeny AI Operating Principles
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto"
              >
                These principles define how intelligence is allowed to behave inside enterprise systems. They are enforced by design, not policy.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {operatingPrinciples.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <PrincipleCard 
                    number={index + 1}
                    title={principle.title}
                    statement={principle.statement}
                  />
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 text-center"
            >
              <p className="text-lg text-white font-bold mb-4 tracking-tight">
                If a system violates any of these principles, it is not production-ready — regardless of capability.
              </p>
              <Link 
                to="/ai-assistants/governance-control" 
                className="text-sky-400 hover:text-sky-300 transition-colors inline-flex items-center gap-1.5 text-sm font-medium hover:underline underline-offset-4"
              >
                See how these principles are enforced in practice <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 4. HUMAN CONTROL DEFAULT */}
        <section className="py-24 px-6 bg-gradient-to-b from-[#0E0F11] to-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <Badge text="The principle" color="green" />
            <SectionHeading 
              title="Human control is the default" 
              subtitle="We build systems that amplify human intent, not override it."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <GlassCard 
                title="Human-in-the-loop" 
                description="AI drafts, humans approve. Critical actions are staged for review by default."
                icon={Users}
                color="green"
                delay={0}
              />
               <GlassCard 
                title="Approval Thresholds" 
                description="Set confidence scores or dollar values that automatically trigger manual review."
                icon={AlertTriangle}
                color="green"
                delay={0.1}
              />
               <GlassCard 
                title="Clear Ownership" 
                description="Every AI agent has a human owner responsible for its performance and outputs."
                icon={CheckCircle2}
                color="green"
                delay={0.2}
              />
              <GlassCard 
                title="Escalation Paths" 
                description="When the AI is unsure, it knows exactly who to ask for help, avoiding silent failures."
                icon={ArrowRight}
                color="green"
                delay={0.3}
              />
            </div>
            <BottomStatement text="Autonomy is introduced deliberately, not assumed." color="green" />
          </div>
        </section>

        {/* 5. VISIBILITY AND AUDITABILITY */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <Badge text="The transparency" color="blue" />
            <SectionHeading 
              title="Radical visibility & auditability" 
              subtitle="If you can't see it, you can't trust it. We log everything."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <GlassCard 
                title="Complete Trails" 
                description="Every API call, data access, and decision logic step is permanently recorded."
                icon={FileText}
                color="blue"
              />
               <GlassCard 
                title="Decision Paths" 
                description="See the 'chain of thought'—why the AI made a specific recommendation or action."
                icon={FileSearch}
                color="blue"
              />
               <GlassCard 
                title="Time-Stamped" 
                description="Immutable logs with precise timestamps for forensic analysis and compliance."
                icon={Activity}
                color="blue"
              />
              <GlassCard 
                title="Cross-System Trace" 
                description="Track a request as it flows through Slack, Jira, CRM, and back again."
                icon={Server}
                color="blue"
              />
            </div>
            <BottomStatement text="Nothing operates invisibly." color="blue" />
          </div>
        </section>

        {/* 6. ROLE-BASED ACCESS */}
        <section className="py-24 px-6 bg-[#0E0F11] border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <Badge text="The control" color="violet" />
            <SectionHeading 
              title="Granular role-based access" 
              subtitle="AI doesn't get a 'god mode' key. It respects your existing hierarchy."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <GlassCard 
                title="Data Protection" 
                description="Sensitive PII or financial data is masked or blocked based on user roles."
                icon={Lock}
                color="violet"
              />
               <GlassCard 
                title="Action Constraints" 
                description="Limit what agents can do—read-only, draft-only, or full execution rights."
                icon={ShieldCheck}
                color="violet"
              />
               <GlassCard 
                title="Authorized Scope" 
                description="AI Assistants™ only operate within the specific teams and channels you authorize."
                icon={Fingerprint}
                color="violet"
              />
              <GlassCard 
                title="Assigned Roles" 
                description="Map AI capabilities directly to your existing Okta or AD groups."
                icon={Users}
                color="violet"
              />
            </div>
            <BottomStatement text="Control scales with the organization." color="violet" />
          </div>
        </section>

        {/* 7. DATA SECURITY */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <Badge text="The ownership" color="green" />
            <SectionHeading 
              title="Your data remains yours" 
              subtitle="We bring the intelligence to the data, not the other way around."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <GlassCard 
                title="Data Isolation" 
                description="Single-tenant architecture options ensure your data never touches another client's."
                icon={Database}
                color="green"
              />
               <GlassCard 
                title="Standard Support" 
                description="Encryption at rest and in transit, meeting modern enterprise security standards."
                icon={ShieldCheck}
                color="green"
              />
               <GlassCard 
                title="Leakage Prevention" 
                description="Output filters prevent the AI from accidentally revealing secrets or keys."
                icon={AlertTriangle}
                color="green"
              />
              <GlassCard 
                title="No Reuse" 
                description="We do not train our foundation models on your proprietary business data."
                icon={Lock}
                color="green"
              />
            </div>
            <BottomStatement text="Intelligence is built on top of your data — never extracted away from it." color="green" />
          </div>
        </section>

        {/* 8. SAFE EXECUTION */}
        <section className="py-24 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <Badge text="The safety" color="blue" />
            <SectionHeading 
              title="Safe execution environments" 
              subtitle="Preventing runaway scripts and unintended consequences."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <GlassCard 
                title="Logged Actions" 
                description="Review every modification before it happens, or audit it immediately after."
                icon={FileText}
                color="blue"
              />
               <GlassCard 
                title="Immediate Exceptions" 
                description="Errors don't fail silently. They trigger high-priority alerts to ops teams."
                icon={AlertTriangle}
                color="blue"
              />
               <GlassCard 
                title="Degrade Safely" 
                description="If a system goes down, the AI pauses gracefully rather than hallucinating inputs."
                icon={ShieldCheck}
                color="blue"
              />
              <GlassCard 
                title="Informed Humans" 
                description="Dashboards provide real-time status of all active autonomous agents."
                icon={Users}
                color="blue"
              />
            </div>
            <BottomStatement text="Operational safety is engineered, not assumed." color="blue" />
          </div>
        </section>

        {/* 9. COMPLIANCE READY */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <Badge text="The architecture" color="violet" />
            <SectionHeading 
              title="Compliance ready" 
              subtitle="Automating the bureaucracy of compliance so you can focus on work."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <GlassCard 
                title="Separation of Duties" 
                description="Enforce checks and balances between who requests, approves, and executes."
                icon={Scale}
                color="violet"
              />
               <GlassCard 
                title="Accountability" 
                description="Clear attribution of every action ensures no 'ghost' changes in your systems."
                icon={CheckCircle2}
                color="violet"
              />
               <GlassCard 
                title="Policy Alignment" 
                description="Encode your company policies as system prompts that agents must follow."
                icon={FileText}
                color="violet"
              />
              <GlassCard 
                title="Auto-Documentation" 
                description="Generate compliance reports automatically from the system's operational logs."
                icon={FileSearch}
                color="violet"
              />
            </div>
            <BottomStatement text="Compliance becomes a by-product of good system design." color="violet" />
          </div>
        </section>

        {/* 10. CONFIDENCE AT SCALE */}
        <section className="py-24 px-6 bg-[#0E0F11] border-y border-white/5">
          <div className="max-w-5xl mx-auto text-center">
            <Badge text="The outcome" color="green" />
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-white mb-8"
            >
              Confidence at Scale
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-gray-300 leading-relaxed"
            >
              When you trust the system, you can unleash the speed. Security isn't a brake—it's the steering wheel that lets you drive fast.
            </motion.p>
          </div>
        </section>

        {/* 11. CONTINUE EXPLORING */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <Badge text="Next steps" color="pink" />
            <SectionHeading 
              title="Continue exploring" 
              subtitle="Dive deeper into the platform capabilities."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Link to="/platform/overview" className="block h-full">
                <GlassCard 
                  title="Platform Overview" 
                  description="Understand the complete PDDT platform architecture."
                  icon={ArrowRight}
                  color="pink"
                  className="hover:scale-105 cursor-pointer"
                />
              </Link>
              <Link to="/ai-native-operating-layer" className="block h-full">
                <GlassCard 
                  title="AI-Native Layer" 
                  description="Learn how the operating layer orchestrates your business."
                  icon={ArrowRight}
                  color="pink"
                  className="hover:scale-105 cursor-pointer"
                />
              </Link>
              <Link to="/ai-assistants" className="block h-full">
                <GlassCard 
                  title="AI Assistants™" 
                  description="Explore the capabilities of our digital workforce."
                  icon={ArrowRight}
                  color="pink"
                  className="hover:scale-105 cursor-pointer"
                />
              </Link>
              <Link to="/contact" className="block h-full">
                <GlassCard 
                  title="Discuss Transformation" 
                  description="Talk to our team about your specific needs."
                  icon={ArrowRight}
                  color="pink"
                  className="hover:scale-105 cursor-pointer"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* 12. FINAL CTA */}
        <section className="py-32 px-6 relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-b from-[#0E0F11] to-pink-900/20" />
           <div className="relative z-10 max-w-4xl mx-auto text-center">
             <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
               Ready to implement enterprise-grade <br />
               <span className="text-pink-500">AI governance?</span>
             </h2>
             <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
               Discover how PDDT's security and governance approach enables safe, scalable AI across your organization.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="w-full sm:w-auto min-h-[44px] h-auto px-4 py-2 text-sm md:px-6 md:py-2.5 md:text-base lg:px-7 lg:py-3 bg-[#EC4899] hover:bg-[#db2777] text-white rounded-full font-bold shadow-2xl shadow-pink-600/20">
                  Explore security
                </Button>
                <Button variant="outline" className="w-full sm:w-auto min-h-[44px] h-auto px-4 py-2 text-sm md:px-6 md:py-2.5 md:text-base lg:px-7 lg:py-3 border-white/20 hover:bg-white/10 text-white rounded-full font-medium">
                  Request demo
                </Button>
             </div>
           </div>
        </section>

      </main>
    </>
  );
};

export default SecurityGovernanceControl;