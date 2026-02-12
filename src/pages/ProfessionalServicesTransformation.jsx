import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  FileText, 
  Users, 
  Brain, 
  Clock, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  Search, 
  ArrowRight, 
  Lightbulb, 
  Scale, 
  Zap,
  BarChart3,
  Globe
} from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { seoMetadata } from '@/config/seoMetadata';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// --- Shared Components ---

const Badge = ({ text, color = "violet" }) => {
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
        colors[color] || colors.violet
      )}>
        <Briefcase size={12} />
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

const BottomStatement = ({ text, color = "violet" }) => {
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
      <p className={cn("text-xl font-medium", textColors[color] || textColors.violet)}>
        {text}
      </p>
    </motion.div>
  );
};

const ProfessionalServicesTransformation = () => {
  return (
    <>
      <SEOHead {...(seoMetadata['/transformations/professional-services-transformation'] || {})} />
      
      <main className="bg-[#0E0F11] text-white overflow-hidden w-full font-sans">
        
        {/* 1. HERO SECTION */}
        <section className="relative pt-40 pb-20 px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[800px] h-[500px] bg-pink-900/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <Badge text="Transformations" color="violet" />
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight"
            >
              Professional Services Transformation <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Automating billable workflows and client knowledge retrieval
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Scale your firm's expertise without scaling administrative overhead. Unify client knowledge, automate project coordination, and protect margins with AI-native operations.
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
            <h2 className="text-3xl font-bold text-white mb-6 text-center">The Core Challenge in Professional Services</h2>
            <p className="text-gray-400 text-lg mb-12 text-center leading-relaxed">
              As firms grow, the ability to deliver consistent quality across distributed teams becomes the primary constraint on scaling.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-10">
              {[
                { title: "Distributed Expertise", desc: "Your best knowledge lives in the heads of senior partners, not in the system." },
                { title: "Fragmented Knowledge", desc: "Client context is scattered across emails, Slack, and various document versions." },
                { title: "Manual Coordination", desc: "Billable workflows rely heavily on PMs manually chasing updates and documents." },
                { title: "Slow Onboarding", desc: "New consultants take months to become fully productive on complex accounts." },
                { title: "Margin Erosion", desc: "Rework and administrative drag silently eat into project profitability." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                  <div>
                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-purple-400 font-medium">
              Without a system of record for expertise, every project starts from scratch.
            </p>
          </div>
        </section>

        {/* 3. FROM INDIVIDUAL TO INSTITUTIONAL */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="From Individual Expertise to Institutional Knowledge" 
              subheading="Capture and organize intellectual property automatically as work happens."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard 
                title="Project Documents" 
                description="Ingest SOWs, deliverables, and briefs to build a searchable knowledge base."
                icon={FileText}
                variant="violet"
              />
              <GlassCard 
                title="Personal Notes" 
                description="Connect individual knowledge stores like Notion or Obsidian safely."
                icon={Lightbulb}
                variant="violet"
              />
              <GlassCard 
                title="Email Threads" 
                description="Surface key decisions and context often buried in individual inboxes."
                icon={Users}
                variant="violet"
              />
              <GlassCard 
                title="Individual Memory" 
                description="Externalize what stays in people's heads into shared context."
                icon={Brain}
                variant="violet"
              />
            </div>
            <BottomStatement text="When team members rotate, the knowledge often leaves with them. PDDT systems capture this automatically." color="violet" />
          </div>
        </section>

        {/* 4. AUTOMATING BILLABLE WORKFLOWS */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Automating Billable Workflows Safely" 
              subheading="Let experts focus on high-value advisory work while AI handles the process."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard 
                title="Structuring Workflows" 
                description="Define standard multi-step processes for repeatable delivery excellence."
                icon={Globe}
                variant="blue"
              />
              <GlassCard 
                title="Automating Coordination" 
                description="Handle scheduling, follow-ups, and data collection without manual intervention."
                icon={Zap}
                variant="blue"
              />
              <GlassCard 
                title="Tracking Progress" 
                description="Real-time visibility into deliverable status across all active engagements."
                icon={Clock}
                variant="blue"
              />
              <GlassCard 
                title="Ensuring Approvals" 
                description="Enforce QA gates and partner review before anything goes to the client."
                icon={CheckCircle2}
                variant="blue"
              />
            </div>
            <BottomStatement text="AI Assistants handle the administrative overhead." color="blue" />
          </div>
        </section>

        {/* 5. FASTER ONBOARDING */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Faster Onboarding Into Complex Engagements" 
              subheading="Get new team members up to speed in days, not weeks."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard 
                title="Client History" 
                description="Access the full timeline of the relationship and past deliverables instantly."
                icon={Clock}
                variant="green"
              />
              <GlassCard 
                title="Prior Decisions" 
                description="Understand why things were done a certain way to avoid repeating mistakes."
                icon={Brain}
                variant="green"
              />
              <GlassCard 
                title="Current Scope" 
                description="Clarify active deliverables, deadlines, and stakeholders immediately."
                icon={FileText}
                variant="green"
              />
              <GlassCard 
                title="Context Benefits" 
                description="Context Memory provides instant answers to 'how do we do X for client Y?'"
                icon={Lightbulb}
                variant="green"
              />
            </div>
            <BottomStatement text="Reduce ramp-up time significantly." color="green" />
          </div>
        </section>

        {/* 6. CLIENT KNOWLEDGE RETRIEVAL */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Client Knowledge Retrieval With Context" 
              subheading="Access the firm's collective intelligence instantly."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard 
                title="Context-Aware Retrieval" 
                description="Find answers based on semantic meaning, not just keyword matching."
                icon={Search}
                variant="pink"
              />
              <GlassCard 
                title="Similar Engagements" 
                description="Identify what worked for other clients with similar challenges."
                icon={Users}
                variant="pink"
              />
              <GlassCard 
                title="Understanding Constraints" 
                description="Automatically surface legal, contractual, or preference-based limits."
                icon={Scale}
                variant="pink"
              />
            </div>
            <BottomStatement text="Stop reinventing the wheel on every project." color="pink" />
          </div>
        </section>

        {/* 7. VISIBILITY INTO RISK */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Visibility Into Delivery and Margin Risk" 
              subheading="Proactive alerts before projects go off the rails."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard 
                title="Highlighting Delays" 
                description="Flag deliverables that are slipping before they impact the critical path."
                icon={Clock}
                variant="default"
              />
              <GlassCard 
                title="Surfacing Scope Creep" 
                description="Detect when work requests fall outside the agreed SOW parameters."
                icon={ArrowRight}
                variant="default"
              />
              <GlassCard 
                title="Tracking Utilization" 
                description="Monitor team bandwidth and burn rates in real-time."
                icon={BarChart3}
                variant="default"
              />
              <GlassCard 
                title="Identifying Risks" 
                description="Spot patterns that indicate potential client dissatisfaction or churn."
                icon={AlertTriangle}
                variant="default"
              />
            </div>
            <BottomStatement text="Protect margins by catching issues early." color="blue" />
          </div>
        </section>

        {/* 8. HUMAN-IN-THE-LOOP */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Human-in-the-Loop by Default" 
              subheading="Technology that amplifies experts, not replaces them."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard 
                title="Clear Ownership" 
                description="Every automated task has a clear human owner responsible for the outcome."
                icon={Users}
                variant="violet"
              />
              <GlassCard 
                title="Review & Approval" 
                description="Critical outputs are staged for expert review before release."
                icon={CheckCircle2}
                variant="violet"
              />
              <GlassCard 
                title="Traceability" 
                description="Complete audit trails of what the system did and who approved it."
                icon={FileText}
                variant="violet"
              />
              <GlassCard 
                title="Escalation" 
                description="Defined paths for the system to ask for help when uncertain."
                icon={AlertTriangle}
                variant="violet"
              />
            </div>
            <BottomStatement text="Maintain the high-touch service your clients expect." color="violet" />
          </div>
        </section>

        {/* 9. DESIGNED FOR TRUST-BASED BUSINESSES */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title="Designed for Trust-Based Businesses" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <GlassCard title="Management Consulting" description="Strategy & Ops" icon={Briefcase} variant="blue" />
              <GlassCard title="Legal Services" description="Law & Compliance" icon={Scale} variant="blue" />
              <GlassCard title="IT Services" description="Managed Providers" icon={Zap} variant="blue" />
              <GlassCard title="Accounting" description="Audit & Tax" icon={BarChart3} variant="blue" />
              <GlassCard title="Design & Engineering" description="Agencies & Firms" icon={Lightbulb} variant="blue" />
            </div>
            <BottomStatement text="Where reputation is the primary asset." color="blue" />
          </div>
        </section>

        {/* 10. OUTCOMES */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title="Outcomes Firms Experience" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <GlassCard title="Reduced Coordination" description="Lower admin overhead." icon={Users} variant="green" />
              <GlassCard title="Better Reuse" description="Leverage past work." icon={FileText} variant="green" />
              <GlassCard title="Faster Onboarding" description="Days, not weeks." icon={Clock} variant="green" />
              <GlassCard title="Predictable Delivery" description="Consistent quality." icon={CheckCircle2} variant="green" />
              <GlassCard title="Stronger Margins" description="Less rework & waste." icon={TrendingUp} variant="green" />
            </div>
            <BottomStatement text="Scale the business, not just the headcount." color="green" />
          </div>
        </section>

        {/* 11. CONTINUE EXPLORING */}
        <section className="py-20 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <Badge text="Next steps" color="violet" />
              <h2 className="text-3xl font-bold text-white">Continue Exploring</h2>
              <p className="text-gray-400 mt-4">Deep dive into the capabilities powering this transformation.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PageCard 
                title="Enterprise Ops" 
                description="Broader operational context." 
                href="/transformations/enterprise-operations-transformation" 
                icon={Briefcase} 
              />
              <PageCard 
                title="Context Memory" 
                description="How we recall knowledge." 
                href="/capabilities/context-memory" 
                icon={Brain} 
              />
              <PageCard 
                title="Agent Workflows" 
                description="The engine of automation." 
                href="/capabilities/agent-workflows" 
                icon={Zap} 
              />
              <PageCard 
                title="Discuss Transformation" 
                description="Modernize your firm." 
                href="/contact" 
                icon={ArrowRight} 
              />
            </div>
          </div>
        </section>

        {/* 12. FINAL CTA */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-3xl p-12 text-center border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to scale expertise without diluting quality?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Implement AI-native systems that capture knowledge and automate delivery workflows.
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

export default ProfessionalServicesTransformation;