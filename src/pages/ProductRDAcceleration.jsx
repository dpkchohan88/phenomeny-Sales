import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Beaker, 
  GitBranch, 
  Lightbulb, 
  Search, 
  Database, 
  History, 
  Users, 
  Shield, 
  Zap, 
  ArrowRight, 
  Cpu, 
  FileText, 
  Microscope,
  Layers,
  Brain,
  Repeat,
  Activity,
  Infinity
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
        <Rocket size={12} />
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

const ProductRDAcceleration = () => {
  return (
    <>
      <SEOHead {...(seoMetadata['/transformations/product-rd-acceleration'] || {})} />
      
      <main className="bg-[#0E0F11] text-white overflow-hidden w-full font-sans">
        
        {/* 1. HERO SECTION */}
        <section className="relative pt-40 pb-20 px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[800px] h-[500px] bg-indigo-900/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <Badge text="Transformations" color="blue" />
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight"
            >
              Product & R&D Acceleration <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                Speeding up innovation cycles with AI-assisted research
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Move from fragmented experiments to cumulative intelligence. Connect research, engineering, and product data into a unified knowledge engine that accelerates discovery and reduces duplication.
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

        {/* 2. THE HIDDEN DRAG ON INNOVATION */}
        <section className="py-20 px-6 bg-[#13151A] border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">The Hidden Drag on Innovation</h2>
            <p className="text-gray-400 text-lg mb-12 text-center leading-relaxed">
              When research lives in silos, innovation slows down because teams are constantly reinventing the wheel.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-10">
              {[
                { title: "Prior research scattered", desc: "Critical findings are buried in PDFs, emails, and forgotten drive folders." },
                { title: "Experiments repeated", desc: "Teams unknowingly run tests that have already failed or succeeded elsewhere." },
                { title: "Decisions without visibility", desc: "Product choices are made without full context of previous learnings." },
                { title: "Knowledge leaves with people", desc: "When experts leave, their implicit knowledge walks out the door with them." },
                { title: "Innovation depends on few", desc: "Only tenured employees know 'what we tried five years ago'." }
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
              The organization learns, but the learning doesn't accumulate.
            </p>
            <p className="text-center text-gray-500 text-sm mt-4">
              Product & R&D Acceleration stops the leak.
            </p>
          </div>
        </section>

        {/* 3. FROM EPISODIC TO CONTINUOUS */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="From Episodic Research to Continuous Intelligence" 
              subheading="Transform sporadic learning into a permanent, searchable asset."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard 
                title="Capture Activity" 
                description="Capture research activity automatically as it happens."
                icon={Activity}
                variant="blue"
              />
              <GlassCard 
                title="Preserve Outcomes" 
                description="Preserve hypotheses, assumptions, and outcomes clearly."
                icon={Database}
                variant="blue"
              />
              <GlassCard 
                title="Connect Experiments" 
                description="Connect experiments across time and different teams."
                icon={GitBranch}
                variant="blue"
              />
              <GlassCard 
                title="Living Record" 
                description="Maintain a living record of what has been tried and why."
                icon={History}
                variant="blue"
              />
            </div>
            <BottomStatement text="Innovation builds on itself, rather than starting from scratch every time." color="blue" />
          </div>
        </section>

        {/* 4. AI-ASSISTED RESEARCH */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="AI-Assisted Research with Context" 
              subheading="Accelerate discovery by having the system surface relevant knowledge instantly."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard 
                title="Retrieval" 
                description="Retrieving relevant prior experiments and findings."
                icon={Search}
                variant="violet"
              />
              <GlassCard 
                title="Related Work" 
                description="Surfacing related work across domains and teams."
                icon={Layers}
                variant="violet"
              />
              <GlassCard 
                title="Constraint Check" 
                description="Highlighting technical constraints and known failure modes."
                icon={Shield}
                variant="violet"
              />
              <GlassCard 
                title="Summarization" 
                description="Summarizing complex research histories into actionable insights."
                icon={FileText}
                variant="violet"
              />
            </div>
            <BottomStatement text="Researchers stand on the shoulders of the entire organization's history." color="violet" />
          </div>
        </section>

        {/* 5. FASTER EXPERIMENTATION */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Faster Experimentation Without Increased Risk" 
              subheading="Move fast with the confidence that you aren't breaking critical guardrails."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard 
                title="Traceable" 
                description="Experiments are fully traceable and easily reviewable."
                icon={Microscope}
                variant="green"
              />
              <GlassCard 
                title="Grounded Decisions" 
                description="Decisions are grounded in clearly documented reasoning."
                icon={Brain}
                variant="green"
              />
              <GlassCard 
                title="Explicit Governance" 
                description="Governance and approval workflows are explicit and automated."
                icon={Shield}
                variant="green"
              />
              <GlassCard 
                title="Oversight" 
                description="High-risk changes trigger required oversight automatically."
                icon={Zap}
                variant="green"
              />
            </div>
            <BottomStatement text="Speed and safety are no longer a trade-off." color="green" />
          </div>
        </section>

        {/* 6. SUPPORTING CROSS-FUNCTIONAL INNOVATION */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Supporting Cross-Functional Innovation" 
              subheading="Break down the walls between research, engineering, and product."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard 
                title="Shared Context" 
                description="Preserving shared context across diverse functions."
                icon={Users}
                variant="blue"
              />
              <GlassCard 
                title="Visible Dependencies" 
                description="Making dependencies visible early in the process."
                icon={GitBranch}
                variant="blue"
              />
              <GlassCard 
                title="Reduced Friction" 
                description="Reducing friction between research findings and execution."
                icon={Beaker}
                variant="blue"
              />
              <GlassCard 
                title="Aligned Reality" 
                description="Aligning innovation goals with operational realities."
                icon={Cpu}
                variant="blue"
              />
            </div>
            <BottomStatement text="R&D becomes an engine that drives the whole company, not a silo." color="blue" />
          </div>
        </section>

        {/* 7. REDUCING DEPENDENCY */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Reducing Dependency on Individual Experts" 
              subheading="Institutionalize knowledge so the organization gets smarter, not just individuals."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard 
                title="Faster Onboarding" 
                description="New team members onboard faster with accessible history."
                icon={Rocket}
                variant="violet"
              />
              <GlassCard 
                title="Reusable Expertise" 
                description="Expertise becomes reusable across projects and teams."
                icon={Repeat}
                variant="violet"
              />
              <GlassCard 
                title="Continuous Innovation" 
                description="Innovation continues despite team changes and turnover."
                icon={Infinity}
                variant="violet"
              />
              <GlassCard 
                title="Resilient Org" 
                description="The organization becomes resilient, not person-dependent."
                icon={Shield}
                variant="violet"
              />
            </div>
          </div>
        </section>

        {/* 8. DESIGNED FOR LONG-TERM */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Designed for Long-Term Innovation Environments" 
              subheading="Built for organizations where knowledge is the primary asset."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard 
                title="Product-Led" 
                description="Product-led growth companies."
                icon={Rocket}
                variant="green"
              />
              <GlassCard 
                title="R&D Intensive" 
                description="R&D-intensive enterprises."
                icon={Microscope}
                variant="green"
              />
              <GlassCard 
                title="Engineering-Driven" 
                description="Engineering-driven organizations."
                icon={Cpu}
                variant="green"
              />
              <GlassCard 
                title="Innovation Labs" 
                description="Innovation labs operating at scale."
                icon={Beaker}
                variant="green"
              />
            </div>
            <BottomStatement text="Anywhere sustained learning is a competitive advantage." color="green" />
          </div>
        </section>

        {/* 9. OUTCOMES */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title="Outcomes Organizations Experience" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <GlassCard title="Faster Cycles" description="Faster innovation cycles." icon={Zap} variant="blue" />
              <GlassCard title="Less Duplication" description="Reduced duplication of research." icon={Repeat} variant="blue" />
              <GlassCard title="Better Decisions" description="Better-informed product decisions." icon={Lightbulb} variant="blue" />
              <GlassCard title="Stronger Continuity" description="Stronger continuity across R&D." icon={GitBranch} variant="blue" />
              <GlassCard title="Higher ROI" description="Higher return on research investment." icon={Rocket} variant="blue" />
            </div>
            <BottomStatement text="Innovation becomes cumulative rather than cyclical." color="blue" />
          </div>
        </section>

        {/* 10. CONTINUE EXPLORING */}
        <section className="py-20 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <Badge text="Next steps" color="violet" />
              <h2 className="text-3xl font-bold text-white">Continue Exploring</h2>
              <p className="text-gray-400 mt-4">Discover how Product & R&D Acceleration integrates with other PDDT capabilities.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PageCard 
                title="Enterprise Ops" 
                description="Coordinate execution." 
                href="/transformations/enterprise-operations-transformation" 
                icon={Layers} 
              />
              <PageCard 
                title="Context Memory" 
                description="Vector-based recall." 
                href="/capabilities/context-memory" 
                icon={Brain} 
              />
              <PageCard 
                title="Model Intelligence" 
                description="Orchestrate AI models." 
                href="/capabilities/model-intelligence" 
                icon={Cpu} 
              />
              <PageCard 
                title="Discuss Transformation" 
                description="Start your journey." 
                href="/contact" 
                icon={ArrowRight} 
              />
            </div>
          </div>
        </section>

        {/* 11. FINAL CTA */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-900/20 to-violet-900/20 rounded-3xl p-12 text-center border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to accelerate your innovation?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Turn your research into a permanent competitive advantage with intelligent knowledge management.
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

export default ProductRDAcceleration;