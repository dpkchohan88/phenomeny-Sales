import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Lock, 
  Scale, 
  AlertTriangle, 
  CheckCircle2, 
  Activity, 
  Eye, 
  FileText, 
  Users, 
  ArrowRight, 
  Zap, 
  TrendingUp, 
  StopCircle,
  FileSearch,
  Siren,
  ThumbsUp
} from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { seoMetadata } from '@/config/seoMetadata';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// --- Shared Components ---

const Badge = ({ text, color = "green" }) => {
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
        colors[color] || colors.green
      )}>
        <ShieldCheck size={12} />
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

const TrustAndSafety = () => {
  return (
    <>
      <SEOHead {...(seoMetadata['/capabilities/trust-and-safety'] || {})} />
      
      <main className="bg-[#0E0F11] text-white overflow-hidden w-full font-sans">
        
        {/* 1. HERO SECTION */}
        <section className="relative pt-40 pb-20 px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-900/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[800px] h-[500px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <Badge text="Capabilities" color="green" />
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight"
            >
              Trust & Safety <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                Enterprise guardrails for compliance & quality
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Deploy AI with confidence. Enforce policies, prevent hallucinations, and ensure every automated action aligns with your enterprise standards and regulatory requirements.
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

        {/* 2. WHY TRUST CANNOT BE ASSUMED */}
        <section className="py-20 px-6 bg-[#13151A] border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Why trust cannot be assumed in AI systems</h2>
            <p className="text-gray-400 text-lg mb-12 text-center leading-relaxed">
              Without explicit safety layers, probabilistic models will eventually fail in ways that create risk for the enterprise.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-10">
              {[
                { title: "Policy Violations", desc: "Standard models don't know your specific corporate policies or legal constraints." },
                { title: "Drift", desc: "Model behavior can drift over time or react unpredictably to novel inputs." },
                { title: "Error Propagation", desc: "A single hallucination early in a workflow can cascade into major operational failures." },
                { title: "Degrading Confidence", desc: "Users stop trusting the system after just a few unchecked errors." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                  <div>
                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-emerald-400 font-medium">
              Trust must be engineered, not expected.
            </p>
          </div>
        </section>

        {/* 3. GUARDRAILS EMBEDDED */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Guardrails embedded into the system" 
              subheading="Define the boundaries of safe operation before a single token is generated."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard 
                title="Content Constraints" 
                description="Strictly define what the AI can and cannot generate or discuss."
                icon={StopCircle}
                variant="blue"
              />
              <GlassCard 
                title="Action Whitelists" 
                description="Explicitly allow only specific API calls or tool usage patterns."
                icon={CheckCircle2}
                variant="blue"
              />
              <GlassCard 
                title="Review Triggers" 
                description="Automatically flag outputs that contain sensitive keywords or ambiguity."
                icon={Eye}
                variant="blue"
              />
              <GlassCard 
                title="Mandatory Escalation" 
                description="Force human handoff for high-stakes topics like legal or financial advice."
                icon={Siren}
                variant="blue"
              />
            </div>
            <BottomStatement text="Safety at the architectural level." color="blue" />
          </div>
        </section>

        {/* 4. OUTPUT QUALITY CONTROLS */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Output quality and reliability controls" 
              subheading="Ensure consistent, high-quality results at scale."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard 
                title="Rule Validation" 
                description="Check outputs against business rules before showing them to users."
                icon={CheckCircle2}
                variant="violet"
              />
              <GlassCard 
                title="Consistency Checks" 
                description="Verify that answers remain stable across similar queries."
                icon={Activity}
                variant="violet"
              />
              <GlassCard 
                title="Confidence Thresholds" 
                description="Suppress answers where the model's internal confidence is too low."
                icon={TrendingUp}
                variant="violet"
              />
              <GlassCard 
                title="Quality Detection" 
                description="Identify and regenerate low-quality or vague responses automatically."
                icon={FileSearch}
                variant="violet"
              />
            </div>
            <BottomStatement text="Quality assurance built into the loop." color="violet" />
          </div>
        </section>

        {/* 5. COMPLIANCE-AWARE OPERATION */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Compliance-aware operation" 
              subheading="Meet regulatory standards without slowing down innovation."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard 
                title="Data Access Constraints" 
                description="Enforce least-privilege access to underlying documents and databases."
                icon={Lock}
                variant="green"
              />
              <GlassCard 
                title="Disclosure Prevention" 
                description="Scrub PII and sensitive data from model inputs and outputs."
                icon={ShieldCheck}
                variant="green"
              />
              <GlassCard 
                title="Role-Based Visibility" 
                description="Ensure users only see AI outputs relevant to their clearance level."
                icon={Users}
                variant="green"
              />
              <GlassCard 
                title="Audit Support" 
                description="Generate comprehensive logs for compliance audits and reviews."
                icon={FileText}
                variant="green"
              />
            </div>
            <BottomStatement text="Compliance is a feature, not a blocker." color="green" />
          </div>
        </section>

        {/* 6. BIAS AND DRIFT MANAGEMENT */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Bias and drift management" 
              subheading="Keep your models fair and accurate over time."
            />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <GlassCard 
                title="Monitor Drift" 
                description="Track performance metrics to detect degradation over time."
                icon={Activity}
                variant="pink"
              />
              <GlassCard 
                title="Identify Patterns" 
                description="Spot recurring errors or biases in model responses."
                icon={FileSearch}
                variant="pink"
              />
              <GlassCard 
                title="Surface Deviations" 
                description="Alert operators when model behavior shifts unexpectedly."
                icon={AlertTriangle}
                variant="pink"
              />
              <GlassCard 
                title="Adjust Constraints" 
                description="Update rules and prompts to correct behavior without retraining."
                icon={Scale}
                variant="pink"
              />
            </div>
            <BottomStatement text="Continuous monitoring for continuous reliability." color="pink" />
          </div>
        </section>

        {/* 7. HUMAN OVERRIDE AND ACCOUNTABILITY */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Human override and accountability" 
              subheading="Humans remain the ultimate authority."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard 
                title="Human Override" 
                description="Operators can intervene and correct AI actions at any stage."
                icon={StopCircle}
                variant="blue"
              />
              <GlassCard 
                title="Logged Interventions" 
                description="Every manual override is recorded to improve future performance."
                icon={FileText}
                variant="blue"
              />
              <GlassCard 
                title="Feedback Loop" 
                description="Corrections are fed back into the system to refine guardrails."
                icon={ThumbsUp}
                variant="blue"
              />
            </div>
            <BottomStatement text="Control is never lost, only delegated." color="blue" />
          </div>
        </section>

        {/* 8. DESIGNED FOR REGULATED ENVIRONMENTS */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Designed for regulated and high-impact environments" 
              subheading="Where accuracy is not optional."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard 
                title="High Impact" 
                description="For decisions affecting customers, patients, or finances."
                icon={Zap}
                variant="default"
              />
              <GlassCard 
                title="Regulatory Oversight" 
                description="Built to satisfy the requirements of external auditors."
                icon={Scale}
                variant="default"
              />
              <GlassCard 
                title="Consequence Management" 
                description="Fail-safe mechanisms prevent catastrophic errors."
                icon={ShieldCheck}
                variant="default"
              />
            </div>
            <BottomStatement text="Safety-critical AI infrastructure." color="green" />
          </div>
        </section>

        {/* 9. WHAT TRUST & SAFETY ENABLES */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title="What Trust & Safety enables" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <GlassCard title="Consistent Behavior" description="Predictable outputs every time." icon={CheckCircle2} />
              <GlassCard title="Reduced Risk" description="Minimize legal and reputational exposure." icon={ShieldCheck} />
              <GlassCard title="Higher Confidence" description="Teams trust the tools they use." icon={ThumbsUp} />
              <GlassCard title="Faster Adoption" description="Safety clears the path for deployment." icon={Zap} />
              <GlassCard title="Scalable Intelligence" description="Grow without losing control." icon={TrendingUp} />
            </div>
            <BottomStatement text="The foundation for sustainable AI." color="violet" />
          </div>
        </section>

        {/* 10. CONTINUE EXPLORING */}
        <section className="py-20 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <Badge text="Next steps" color="green" />
              <h2 className="text-3xl font-bold text-white">Continue Exploring</h2>
              <p className="text-gray-400 mt-4">See how safety integrates with other capabilities.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PageCard 
                title="Security Compliance" 
                description="Enterprise-grade security standards." 
                href="/ai-resources/security-compliance" 
                icon={Lock} 
              />
              <PageCard 
                title="Deep Observability" 
                description="Trace reasoning behind decisions." 
                href="/capabilities/deep-observability" 
                icon={Eye} 
              />
              <PageCard 
                title="Collaboration" 
                description="Human-in-the-loop interfaces." 
                href="/capabilities/collaboration" 
                icon={Users} 
              />
              <PageCard 
                title="Discuss transformation" 
                description="Secure your AI adoption." 
                href="/contact" 
                icon={ArrowRight} 
              />
            </div>
          </div>
        </section>

        {/* 11. FINAL CTA */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-emerald-900/20 to-teal-900/20 rounded-3xl p-12 text-center border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to scale AI with confidence?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Build on a foundation of trust. Deploy systems that are safe, compliant, and reliable by design.
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

export default TrustAndSafety;