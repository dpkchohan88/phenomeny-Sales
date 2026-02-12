import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Shield, 
  Brain, 
  Workflow, 
  Eye, 
  Lock, 
  FileText, 
  Activity, 
  Layers, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Network,
  Cpu,
  Database
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';
import { seoMetadata } from '@/config/seoMetadata';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

// --- Shared Components ---

const SectionHeading = ({ eyebrow, title, subtitle, align = 'center', className }) => (
  <div className={cn("mb-16", align === 'center' ? 'text-center max-w-4xl mx-auto' : 'text-left', className)}>
    {eyebrow && (
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-4"
      >
        <span className="px-3 py-1 rounded-full border border-pink-500/20 bg-pink-500/10 text-pink-400 text-[11px] font-bold uppercase tracking-widest backdrop-blur-sm">
          {eyebrow}
        </span>
      </motion.div>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const GlassCard = ({ title, description, icon: Icon, className, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5, scale: 1.02 }}
    className={cn(
      "p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.06] hover:border-pink-500/30 transition-all duration-300 group flex flex-col relative overflow-hidden shadow-lg",
      className
    )}
  >
    {Icon && (
      <div className="mb-6 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 group-hover:text-pink-400 group-hover:bg-pink-500/10 group-hover:border-pink-500/20 transition-all">
        <Icon size={24} />
      </div>
    )}
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    {description && <p className="text-gray-400 leading-relaxed text-sm">{description}</p>}
    {children}
    
    {/* Microcopy on hover */}
    <div className="absolute bottom-4 left-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
      <p className="text-[10px] uppercase tracking-widest text-pink-400 font-medium">
        Designed for governed execution
      </p>
    </div>
  </motion.div>
);

const FeaturePillar = ({ title, description, icon: Icon }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
  >
    <div className="mb-4 text-pink-400">
      <Icon size={32} strokeWidth={1.5} />
    </div>
    <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const ComplianceBadge = ({ icon: Icon, label }) => (
  <div className="flex items-center gap-2 text-gray-400 bg-white/5 px-4 py-2 rounded-full border border-white/10">
    <Icon size={16} className="text-green-400" />
    <span className="text-xs font-semibold uppercase tracking-wider">{label}</span>
  </div>
);

const AIAssistants = () => {
  return (
    <>
      <SEOHead {...(seoMetadata['/ai-assistants'] || {})} />
      
      <main className="bg-[#0E0F11] text-white overflow-hidden w-full font-sans">
        
        {/* 1. HERO SECTION */}
        <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 pt-32 pb-20 overflow-hidden">
          {/* Ambient Background */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-pink-900/20 blur-[130px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 flex justify-center gap-3 flex-wrap"
            >
              {['Governed', 'Context-aware', 'Permissioned', 'Auditable'].map((tag, i) => (
                <span key={i} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300 text-[11px] font-bold uppercase tracking-widest backdrop-blur-md">
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-6 inline-block"
            >
               <span className="text-pink-500 font-bold tracking-[0.2em] text-sm uppercase">Enterprise AI Assistants™</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-[1.1]"
            >
              AI Assistants™ for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
                real enterprise work
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Deploy autonomous agents that understand your business context, follow strict governance protocols, and coordinate complex workflows safely at scale.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-5 justify-center"
            >
              <Link to="/ai-assistants/ai-assistants-overview">
                <Button size="lg" className="bg-[#EC4899] hover:bg-[#db2777] text-white rounded-full px-8 h-14 text-lg font-bold shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all hover:scale-105">
                  Explore AI Assistants™
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5 hover:text-white rounded-full px-8 h-14 text-lg font-medium text-gray-300">
                Executive briefing
              </Button>
            </motion.div>
          </div>
        </section>

        {/* 2. AI ASSISTANTS MOSAIC */}
        <section className="py-24 px-6 relative bg-[#13151A] border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="AI Assistants™ across your organization" 
              subtitle="Specialized agents for every function, unified by a single operating layer."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
              {/* Row 1 */}
              <GlassCard title="Operations Assistant" description="Coordinate logistics, resource allocation, and daily dispatching." icon={Activity} className="md:col-span-2" />
              <GlassCard title="Revenue Intelligence" description="Predict pipeline risks and automate forecast updates." icon={Zap} />
              
              {/* Row 2 */}
              <GlassCard title="Clinical Workflow" description="Optimize patient throughput and care coordination." icon={HeartHandshake} />
              <GlassCard title="Research & Analysis" description="Synthesize millions of documents into actionable strategy." icon={Search} className="md:col-span-2" />
              
              {/* Row 3 */}
              <GlassCard title="Compliance & Audit" description="Real-time monitoring of every digital action." icon={Shield} />
              <GlassCard title="Program Delivery" description="Track milestones, risks, and dependencies autonomously." icon={Layers} />
              <GlassCard title="Custom Assistant" description="Build bespoke agents for your unique IP." icon={Cpu} className="bg-gradient-to-br from-pink-900/10 to-purple-900/10 border-pink-500/20" />
            </div>
          </div>
        </section>

        {/* 3. SCALE SIGNAL & ORCHESTRATION */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-32">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-block mb-4"
              >
                <span className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 opacity-20">
                  ∞
                </span>
              </motion.div>
              <h3 className="text-4xl font-bold text-white mb-6">Built to support thousands of concurrent workflows</h3>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The Phenomeny AI-Native Operating Layer™ ensures that as you add more agents, your system gets smarter, not more chaotic.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-[400px] border border-white/10 rounded-2xl bg-white/5 flex items-center justify-center overflow-hidden">
                {/* Abstract Node Visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-pink-500 rounded-full shadow-[0_0_20px_rgba(236,72,153,1)] z-10" />
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                      <motion.div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-32 h-[1px] bg-gradient-to-r from-pink-500/50 to-transparent origin-left"
                        style={{ rotate: deg }}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
                      />
                    ))}
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                      <div key={i} className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-400/50 rounded-full" 
                        style={{ transform: `rotate(${deg}deg) translateX(128px) translate(-50%, -50%)` }} 
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <span className="text-pink-500 font-bold tracking-widest text-sm uppercase mb-4 block">ORCHESTRATION AT SCALE</span>
                <h2 className="text-4xl font-bold text-white mb-6">One intent coordinates an entire system</h2>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  A single high-level instruction triggers a cascade of coordinated actions across multiple specialized assistants. Revenue agents talk to legal agents; ops agents sync with finance agents.
                </p>
                <a href="/capabilities/agent-workflows" className="text-white border-b border-pink-500 pb-1 hover:text-pink-400 transition-colors flex items-center gap-2 w-max group">
                  See how they work <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 4. EXTEND HUMAN CAPACITY */}
        <section className="py-24 px-6 bg-[#13151A] border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title="Extend Human Capacity" subtitle="Free your experts to do expert work." />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10">
                <Brain className="text-blue-400 mb-6" size={40} />
                <h3 className="text-2xl font-bold text-white mb-4">Reduce Cognitive Load</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Assistants handle the "search, summarize, and sync" work that burns out high-performers, allowing them to focus on judgment and strategy.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10">
                <Users className="text-purple-400 mb-6" size={40} />
                <h3 className="text-2xl font-bold text-white mb-4">Amplify Authority</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Humans direct the "what" and "why". Assistants handle the "how". One manager can now effectively oversee the output of ten.
                </p>
              </div>
            </div>

            <div className="text-center py-8 border-t border-b border-white/5 mb-16">
              <p className="text-xl font-medium text-gray-300 italic">"This is augmentation, not replacement."</p>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-8">Designed for human oversight</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['Humans define intent', 'AI Assistants™ execute', 'Humans remain accountable'].map((text, i) => (
                <div key={i} className="bg-black/40 border border-white/10 p-6 rounded-lg text-center">
                  <span className="text-pink-500 font-bold text-xl block mb-2">{i + 1}.</span>
                  <span className="text-white font-medium">{text}</span>
                </div>
              ))}
            </div>
            
            <p className="text-center text-gray-500 text-sm mt-8 uppercase tracking-widest">
              Agents have managers. Always.
            </p>
          </div>
        </section>

        {/* 5. INTELLIGENCE UNDER THE HOOD */}
        <section className="py-32 px-6 relative overflow-hidden">
           {/* Background Gradient */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none" />

           <div className="max-w-7xl mx-auto relative z-10">
            <SectionHeading title="Intelligence Under the Hood" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <FeaturePillar 
                title="Context Memory" 
                description="Vector-based recall of institutional history, policies, and past decisions." 
                icon={Database} 
              />
              <FeaturePillar 
                title="Model Intelligence" 
                description="Orchestrating the best-in-class LLMs for specific reasoning tasks." 
                icon={Brain} 
              />
              <FeaturePillar 
                title="Agent Workflows" 
                description="Autonomous planning, step-by-step execution, and error recovery." 
                icon={Workflow} 
              />
              <FeaturePillar 
                title="Deep Observability" 
                description="Full transparency into the 'thought process' behind every action." 
                icon={Eye} 
              />
            </div>
            
            <p className="text-center text-gray-300 text-lg mb-24 font-light">
              Every Assistant reasons with context, acts within boundaries, and leaves a trail.
            </p>

            {/* Enterprise Control Section */}
            <div className="bg-[#1A1D24] rounded-3xl p-12 border border-white/10 relative overflow-hidden">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                 <div>
                   <h3 className="text-3xl font-bold text-white mb-6">Enterprise-grade control by default</h3>
                   <ul className="space-y-4">
                     {[
                       'Role-based permissions & access control',
                       'Human-in-the-loop execution checkpoints',
                       'Full audit trails for compliance',
                       'Client-owned infrastructure & data'
                     ].map((item, i) => (
                       <li key={i} className="flex items-start gap-3 text-gray-300">
                         <CheckCircle className="text-green-400 mt-1 shrink-0" size={18} />
                         <span>{item}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
                 <div className="bg-black/30 p-8 rounded-xl border border-white/10 text-center">
                   <Lock className="text-pink-500 mx-auto mb-4" size={48} />
                   <p className="text-white font-bold text-lg mb-2">Your data remains yours.</p>
                   <p className="text-gray-400 text-sm">AI Assistants™ do not learn from your organization's data to train public models.</p>
                 </div>
               </div>
            </div>
           </div>
        </section>

        {/* 6. COMPLIANCE & EVOLUTION */}
        <section className="py-16 px-6 bg-[#0E0F11] border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            {/* Compliance Strip */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <ComplianceBadge icon={Shield} label="GDPR Aligned" />
              <ComplianceBadge icon={Shield} label="HIPAA Compliant" />
              <ComplianceBadge icon={Shield} label="SOC 2 Aligned" />
              <ComplianceBadge icon={Shield} label="ISO Controls" />
              <ComplianceBadge icon={Shield} label="ABDM/ABHA" />
            </div>
            <p className="text-center text-gray-500 text-sm mb-24">Designed for regulated, high-stakes environments.</p>

            {/* Evolution */}
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">Built to evolve responsibly</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                As your organization grows, your Assistants learn new workflows and adapt to new policies—without ever bypassing the governance layer.
              </p>
              <a href="/platform/overview" className="text-pink-400 hover:text-pink-300 font-medium flex items-center justify-center gap-2 group">
                Coming next <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* 7. FINAL CTA */}
        <section className="py-24 px-6 relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-b from-[#13151A] to-[#0E0F11]" />
           <div className="relative z-10 max-w-4xl mx-auto text-center">
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Deploy intelligence where it matters</h2>
             <div className="flex flex-col sm:flex-row gap-6 justify-center">
               <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/30 transition-all group w-full sm:w-1/2">
                 <h3 className="text-2xl font-bold text-white mb-2">Executive Briefing</h3>
                 <p className="text-gray-400 mb-6 text-sm">Strategic alignment for leadership teams.</p>
                 <Button className="w-full bg-[#EC4899] hover:bg-[#db2777] text-white font-bold rounded-full h-12">
                   Schedule Briefing
                 </Button>
               </div>
               <div className="p-8 rounded-2xl bg-transparent border border-white/20 hover:border-white/40 transition-all group w-full sm:w-1/2">
                 <h3 className="text-2xl font-bold text-white mb-2">Discuss a Transformation</h3>
                 <p className="text-gray-400 mb-6 text-sm">Technical deep dive for architects.</p>
                 <Button variant="outline" className="w-full border-white/20 hover:bg-white/10 text-white font-bold rounded-full h-12">
                   Contact Sales
                 </Button>
               </div>
             </div>
           </div>
        </section>

      </main>
    </>
  );
};

// Required imports for additional icons used in the component
import { HeartHandshake, Search } from 'lucide-react';

export default AIAssistants;