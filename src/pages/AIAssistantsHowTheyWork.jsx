import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  ArrowRight, 
  Shield, 
  Layers, 
  Users,
  ChevronRight
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

const StepCard = ({ number, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="group relative flex flex-col items-center text-center p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.06] hover:border-pink-500/30 transition-all duration-300 h-full"
  >
    <div className="w-12 h-12 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 flex items-center justify-center text-xl font-bold mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(236,72,153,0.15)]">
      {number}
    </div>
    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-200 transition-colors">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    
    {/* Connecting Line (Desktop) */}
    {number !== 7 && (
      <div className="hidden lg:block absolute top-1/2 -right-8 w-16 h-[1px] bg-gradient-to-r from-white/10 to-transparent z-0 pointer-events-none" />
    )}
  </motion.div>
);

const PageCard = ({ title, description, href, icon: Icon }) => (
  <a href={href} className="block group h-full">
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-6 rounded-2xl border border-white/10 bg-[#13151A] hover:border-pink-500/30 transition-all h-full flex flex-col relative overflow-hidden"
    >
      <div className="mb-4 text-pink-400 group-hover:text-pink-300 transition-colors">
        <Icon size={28} strokeWidth={1.5} />
      </div>
      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-pink-400 transition-colors flex items-center gap-2">
        {title} <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
      </h3>
      <p className="text-sm text-gray-400">{description}</p>
      
      {/* Subtle background glow */}
      <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-pink-500/10 blur-2xl rounded-full group-hover:bg-pink-500/20 transition-all duration-500" />
    </motion.div>
  </a>
);

const AIAssistantsHowTheyWork = () => {
  const steps = [
    { title: "Intent is expressed naturally", description: "Users trigger action via chat, voice, or API calls, without needing specific syntax." },
    { title: "Context is assembled automatically", description: "The agent retrieves relevant history, user permissions, and active project data." },
    { title: "Reasoning occurs within defined boundaries", description: "The model plans a path forward, strictly adhering to role-based constraints." },
    { title: "Human review is introduced when required", description: "High-stakes decisions pause for approval before execution proceeds." },
    { title: "Execution happens inside enterprise systems", description: "The agent interacts directly with APIs (ERP, CRM, Slack) to perform the work." },
    { title: "Continuous monitoring and adaptation", description: "Real-time feedback loops detect errors and adjust the plan instantly." },
    { title: "Full traceability and auditability", description: "Every step, thought, and API call is logged for compliance and review." }
  ];

  return (
    <>
      <SEOHead {...(seoMetadata['/ai-assistants/how-they-work'] || {})} />
      
      <main className="bg-[#0E0F11] text-white overflow-hidden w-full font-sans">
        
        {/* Breadcrumb Navigation */}
        <div className="pt-24 px-6 max-w-7xl mx-auto">
          <nav className="flex items-center text-sm text-gray-400 space-x-2">
            <Link to="/ai-assistants" className="hover:text-white transition-colors">AI Assistants™</Link>
            <ChevronRight size={14} />
            <span className="text-white">How They Work</span>
          </nav>
        </div>

        {/* 1. HERO SECTION */}
        <section className="relative pt-20 pb-24 px-6 overflow-hidden min-h-[85vh] flex flex-col justify-center">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[800px] h-[500px] bg-pink-900/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <Badge text="HOW THEY WORK" color="pink" />
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]"
            >
              From natural language prompt to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                autonomous execution
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
            >
              See the invisible mechanics of agency. How Phenomeny transforms a simple request into a safe, multi-step operation across your enterprise stack.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="bg-[#EC4899] hover:bg-[#db2777] text-white rounded-full px-8 h-14 text-lg font-bold shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all hover:scale-105">
                Explore AI Assistants™
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5 hover:text-white rounded-full px-8 h-14 text-lg font-medium text-gray-300">
                Executive briefing
              </Button>
            </motion.div>
          </div>
        </section>

        {/* 2. SEVEN-STEP FLOW SECTION */}
        <section className="py-24 px-6 bg-[#13151A] relative border-t border-white/5">
           {/* Connecting Line Backdrop */}
           <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-y-12 pointer-events-none" />

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 mb-6">
              {steps.slice(0, 4).map((step, idx) => (
                <StepCard 
                  key={idx} 
                  number={idx + 1} 
                  title={step.title} 
                  description={step.description} 
                  delay={idx * 0.1} 
                />
              ))}
            </div>
            {/* Second row centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 lg:w-3/4 mx-auto">
              {steps.slice(4, 7).map((step, idx) => (
                <StepCard 
                  key={idx + 4} 
                  number={idx + 5} 
                  title={step.title} 
                  description={step.description} 
                  delay={(idx + 4) * 0.1} 
                />
              ))}
            </div>
          </div>
        </section>

        {/* 3. CLOSING STATEMENT SECTION */}
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                AI Assistants™ are designed for enterprises where reliability, governance, and clarity matter more than novelty.
              </h2>
              <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
                They enable autonomy without surrendering control, and intelligence without opacity.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 4. CONTINUE EXPLORING SECTION */}
        <section className="py-24 px-6 border-t border-white/10 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge text="Next steps" color="violet" />
              <h2 className="text-3xl font-bold text-white mb-4">Continue exploring</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Discover how AI Assistants™ work across your organization.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PageCard 
                title="Where They Fit" 
                description="See where agents integrate into your existing operational fabric." 
                href="/ai-assistants/where-they-fit" 
                icon={Layers} 
              />
              <PageCard 
                title="Human + AI Collaboration" 
                description="Learn how humans and agents work together safely." 
                href="/ai-assistants/human-ai-collaboration" 
                icon={Users} 
              />
              <PageCard 
                title="Agent Governance & Control" 
                description="Deep dive into permissioning and safety guardrails." 
                href="/ai-assistants/governance-control" 
                icon={Shield} 
              />
            </div>
          </div>
        </section>

        {/* 5. FINAL CTA SECTION */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-pink-900/20 to-purple-900/20 rounded-3xl p-12 text-center border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to see AI Assistants™ in action?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
                Understand how AI Assistants™ translate intent into governed, observable execution.
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

export default AIAssistantsHowTheyWork;