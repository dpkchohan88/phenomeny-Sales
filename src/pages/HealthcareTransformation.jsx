import React from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  HeartPulse, 
  Stethoscope, 
  FileText, 
  Database, 
  Users, 
  Brain, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  ArrowRight, 
  Lock, 
  Search, 
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
        <HeartPulse size={12} />
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

const HealthcareTransformation = () => {
  return (
    <>
      <SEOHead {...(seoMetadata['/transformations/healthcare-transformation'] || {})} />
      
      <main className="bg-[#0E0F11] text-white overflow-hidden w-full font-sans">
        
        {/* 1. HERO SECTION */}
        <section className="relative pt-40 pb-20 px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-sky-900/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[800px] h-[500px] bg-emerald-900/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <Badge text="Transformations" color="blue" />
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight"
            >
              Healthcare Transformation <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">
                Optimizing patient data flow and clinical decision support
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Modernize healthcare operations by connecting systems, clinicians, and data. Ensure vital information flows seamlessly while maintaining strict compliance and safety standards.
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
            <h2 className="text-3xl font-bold text-white mb-6 text-center">The Core Challenge in Healthcare Operations</h2>
            <p className="text-gray-400 text-lg mb-12 text-center leading-relaxed">
              Healthcare data is abundant but often trapped in silos, leading to operational inefficiencies that impact patient care.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-10">
              {[
                { title: "Fragmented information", desc: "Patient data scattered across EHRs, labs, and imaging systems." },
                { title: "Access delays", desc: "Clinicians waste critical time searching for complete clinical context." },
                { title: "Manual coordination", desc: "Heavy reliance on phone calls and faxes between departments." },
                { title: "Alert overload", desc: "Decision fatigue caused by constant, unprioritized system notifications." },
                { title: "Dependency on experience", desc: "Quality of care varies based on individual provider memory and tenure." }
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
              Adding generic AI without operational structure only adds noise to an already loud environment.
            </p>
          </div>
        </section>

        {/* 3. FROM FRAGMENTED TO CONTINUOUS */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="From Fragmented Records to Continuous Patient Context" 
              subheading="Unify the patient journey into a coherent, accessible narrative."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard 
                title="Preserve relationships" 
                description="Link clinical events, labs, and medications to see the full picture."
                icon={Network}
                variant="blue"
              />
              <GlassCard 
                title="Longitudinal context" 
                description="Maintain patient history over time, not just for the current visit."
                icon={Activity}
                variant="blue"
              />
              <GlassCard 
                title="Track decisions" 
                description="Record clinical interpretations and outcomes for future reference."
                icon={FileText}
                variant="blue"
              />
              <GlassCard 
                title="Point of care access" 
                description="Make relevant information immediately available where it's needed."
                icon={Stethoscope}
                variant="blue"
              />
            </div>
            <BottomStatement text="Data that follows the patient, not the department." color="blue" />
          </div>
        </section>

        {/* 4. OPTIMIZING DATA FLOW */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Optimizing Patient Data Flow Across Systems" 
              subheading="Break down interoperability barriers between critical platforms."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard 
                title="Clinical Documentation" 
                description="Seamless integration with major EHR/EMR platforms."
                icon={FileText}
                variant="green"
              />
              <GlassCard 
                title="Diagnostics & Imaging" 
                description="Connect PACS and LIS data directly to the care workflow."
                icon={Search}
                variant="green"
              />
              <GlassCard 
                title="Lab & Reporting" 
                description="Automate the delivery and alerting of critical lab results."
                icon={Database}
                variant="green"
              />
              <GlassCard 
                title="Care Coordination" 
                description="Sync administrative systems with clinical realities."
                icon={Users}
                variant="green"
              />
            </div>
            <BottomStatement text="Interoperability that works." color="green" />
          </div>
        </section>

        {/* 5. CLINICAL DECISION SUPPORT */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Clinical Decision Support Without Alert Fatigue" 
              subheading="Smart assistance that respects the clinician's expertise."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard 
                title="Relevant Insights" 
                description="Surface only what is relevant based on the specific patient context."
                icon={Brain}
                variant="violet"
              />
              <GlassCard 
                title="Prioritize Action" 
                description="Rank notifications so critical issues are addressed first."
                icon={AlertTriangle}
                variant="violet"
              />
              <GlassCard 
                title="Explainable AI" 
                description="Always explain why a recommendation is being made."
                icon={FileText}
                variant="violet"
              />
              <GlassCard 
                title="Defer to Clinicians" 
                description="System recognizes uncertainty and flags it for human review."
                icon={Users}
                variant="violet"
              />
            </div>
            <BottomStatement text="Support, don't interrupt." color="violet" />
          </div>
        </section>

        {/* 6. HUMAN-IN-THE-LOOP */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Human-in-the-Loop by Default" 
              subheading="Safety first. Technology serves the provider."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard 
                title="Clear Boundaries" 
                description="Distinction between AI recommendation and clinical action."
                icon={ShieldCheck}
                variant="default"
              />
              <GlassCard 
                title="Mandatory Oversight" 
                description="Critical decisions always require clinician sign-off."
                icon={CheckCircle2}
                variant="default"
              />
              <GlassCard 
                title="Escalation Paths" 
                description="Clear workflows for handling ambiguity or low confidence."
                icon={ArrowRight}
                variant="default"
              />
              <GlassCard 
                title="Full Traceability" 
                description="Every automated suggestion is logged for audit and review."
                icon={Database}
                variant="default"
              />
            </div>
            <BottomStatement text="Accountability remains with the human expert." color="blue" />
          </div>
        </section>

        {/* 7. IMPROVING COORDINATION */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Improving Coordination Across Care Teams" 
              subheading="Seamless handoffs for better patient outcomes."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard 
                title="Reduce Handoffs" 
                description="Minimize manual data entry and verbal repetition."
                icon={Clock}
                variant="blue"
              />
              <GlassCard 
                title="Preserve Context" 
                description="Ensure the 'why' travels with the patient between departments."
                icon={Network}
                variant="blue"
              />
              <GlassCard 
                title="Highlight Delays" 
                description="Identify gaps in care pathways before they become incidents."
                icon={AlertTriangle}
                variant="blue"
              />
              <GlassCard 
                title="Smoother Transitions" 
                description="Support discharge planning and transfer protocols."
                icon={ArrowRight}
                variant="blue"
              />
            </div>
            <BottomStatement text="Team-based care empowered by connected data." color="blue" />
          </div>
        </section>

        {/* 8. COMPLIANCE & PRIVACY */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Compliance, Privacy, and Patient Trust" 
              subheading="Built for the most regulated environments."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard 
                title="Data Privacy" 
                description="Strict adherence to HIPAA, GDPR, and local regulations."
                icon={Lock}
                variant="green"
              />
              <GlassCard 
                title="Consent-Driven" 
                description="Respect patient consent in every data access request."
                icon={CheckCircle2}
                variant="green"
              />
              <GlassCard 
                title="Auditability" 
                description="Comprehensive logs of who accessed what and when."
                icon={FileText}
                variant="green"
              />
              <GlassCard 
                title="National Frameworks" 
                description="Support for ABDM/ABHA and regional digital health standards."
                icon={ShieldCheck}
                variant="green"
              />
            </div>
            <BottomStatement text="Trust is the foundation of care." color="green" />
          </div>
        </section>

        {/* 9. OUTCOMES */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title="Outcomes Healthcare Organizations See" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <GlassCard title="Faster Access" description="Complete patient context in seconds." icon={Clock} />
              <GlassCard title="Reduced Load" description="Less cognitive burden for clinicians." icon={Brain} />
              <GlassCard title="Safer Decisions" description="Explainable, verified support." icon={ShieldCheck} />
              <GlassCard title="Better Sync" description="Improved cross-dept coordination." icon={Users} />
              <GlassCard title="Stronger Governance" description="Robust compliance posture." icon={Lock} />
            </div>
            <BottomStatement text="Better operations mean better care." color="violet" />
          </div>
        </section>

        {/* 10. DESIGNED FOR REAL ENVIRONMENTS */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Designed for Real Healthcare Environments" 
              subheading="Scalable solutions for providers of all sizes."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard 
                title="Hospitals & Networks" 
                description="Integrated operations for large-scale facilities."
                icon={Activity}
                variant="blue"
              />
              <GlassCard 
                title="Diagnostic Centers" 
                description="Streamlined workflow for imaging and labs."
                icon={Search}
                variant="blue"
              />
              <GlassCard 
                title="Specialty Clinics" 
                description="Focused tools for specialized care pathways."
                icon={Stethoscope}
                variant="blue"
              />
              <GlassCard 
                title="Service Providers" 
                description="Operational backbone for health services at scale."
                icon={Network}
                variant="blue"
              />
            </div>
            <BottomStatement text="Technology that fits your reality." color="blue" />
          </div>
        </section>

        {/* 11. CONTINUE EXPLORING */}
        <section className="py-20 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <Badge text="Next steps" color="pink" />
              <h2 className="text-3xl font-bold text-white">Continue Exploring</h2>
              <p className="text-gray-400 mt-4">Discover related capabilities and transformations.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PageCard 
                title="Enterprise Ops" 
                description="Broader operational transformation." 
                href="/transformations/enterprise-operations-transformation" 
                icon={Activity} 
              />
              <PageCard 
                title="Security & Governance" 
                description="Compliance deeply integrated." 
                href="/ai-resources/security-compliance" 
                icon={ShieldCheck} 
              />
              <PageCard 
                title="AI Assistants" 
                description="Digital workforce for healthcare." 
                href="/ai-resources/ai-assistants-healthcare" 
                icon={Brain} 
              />
              <PageCard 
                title="Discuss Transformation" 
                description="Modernize your facility." 
                href="/contact" 
                icon={ArrowRight} 
              />
            </div>
          </div>
        </section>

        {/* 12. FINAL CTA */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-sky-900/20 to-emerald-900/20 rounded-3xl p-12 text-center border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to modernize healthcare operations?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Implement AI-native systems that respect clinical expertise and prioritize patient safety.
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

export default HealthcareTransformation;