import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Layers, 
  Workflow, 
  GitBranch, 
  Users, 
  Globe, 
  ShieldCheck, 
  RefreshCw, 
  ArrowRight,
  ChevronRight,
  Shield,
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
      "p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.06] hover:border-pink-500/30 transition-all duration-300 group flex flex-col relative overflow-hidden shadow-lg",
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
    
    {/* Microcopy on hover */}
    <div className="absolute bottom-4 left-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
      <p className="text-[10px] uppercase tracking-widest text-pink-400 font-medium">
        Integrated
      </p>
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

const AIAssistantsWhereTheyFit = () => {
  const integrationPoints = [
    {
      title: "Across core business systems",
      description: "Agents live inside your ERP, CRM, and HRIS, executing tasks without needing a separate interface.",
      icon: Layers
    },
    {
      title: "Within workflows, not outside them",
      description: "Triggered by events like 'Deal Closed' or 'Ticket Created' to perform immediate downstream actions.",
      icon: Workflow
    },
    {
      title: "At decision points and handoffs",
      description: "Surfacing context and recommendations exactly when a human needs to make a critical choice.",
      icon: GitBranch
    },
    {
      title: "Alongside people and teams",
      description: "Acting as a digital team member that can be tagged, assigned tasks, and given feedback.",
      icon: Users
    },
    {
      title: "Across environments and regions",
      description: "Operating consistently across distributed teams, handling timezone logistics and localization.",
      icon: Globe
    },
    {
      title: "Inside governance frameworks",
      description: "Never bypassing security. Every action adheres to the same permission models as human users.",
      icon: ShieldCheck
    },
    {
      title: "Designed to evolve with your stack",
      description: "Modular architecture means agents update easily when you switch or upgrade underlying tools.",
      icon: RefreshCw
    }
  ];

  return (
    <>
      <SEOHead {...(seoMetadata['/ai-assistants/where-they-fit'] || {})} />
      
      <main className="bg-[#0E0F11] text-white overflow-hidden w-full font-sans">
        
        {/* Breadcrumb Navigation */}
        <div className="pt-24 px-6 max-w-7xl mx-auto">
          <nav className="flex items-center text-sm text-gray-400 space-x-2">
            <Link to="/ai-assistants" className="hover:text-white transition-colors">AI Assistants™</Link>
            <ChevronRight size={14} />
            <span className="text-white">Where They Fit</span>
          </nav>
        </div>

        {/* 1. HERO SECTION */}
        <section className="relative pt-20 pb-20 px-6 overflow-hidden min-h-[85vh] flex flex-col justify-center">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-pink-900/20 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <Badge text="WHERE THEY FIT" color="pink" />
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight"
            >
              Seamless integration points <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                across your tech stack
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Phenomeny AI Assistants™ don't require you to rip and replace. They inhabit the spaces between your existing systems, connecting them into a coherent operating layer.
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

        {/* 2. SEVEN INTEGRATION POINTS SECTION */}
        <section className="py-24 px-6 bg-[#13151A] relative border-t border-white/5">
          <div className="max-w-7xl mx-auto">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {integrationPoints.slice(0, 4).map((point, idx) => (
                 <GlassCard 
                   key={idx}
                   title={point.title}
                   description={point.description}
                   icon={point.icon}
                   delay={idx * 0.1}
                 />
               ))}
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 lg:w-3/4 mx-auto">
               {integrationPoints.slice(4, 7).map((point, idx) => (
                 <GlassCard 
                   key={idx + 4}
                   title={point.title}
                   description={point.description}
                   icon={point.icon}
                   delay={(idx + 4) * 0.1}
                 />
               ))}
             </div>
          </div>
        </section>

        {/* 3. CLOSING STATEMENT */}
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                AI Assistants™ fit wherever work crosses systems, people, and decisions.
              </h2>
              <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
                They are the glue that turns fragmented tools into a unified intelligent operation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 4. CONTINUE EXPLORING */}
        <section className="py-24 px-6 border-t border-white/10 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge text="Next steps" color="violet" />
              <h2 className="text-3xl font-bold text-white mb-4">Continue exploring</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">See how integration enables smarter collaboration and control.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PageCard 
                title="Human + AI Collaboration" 
                description="Optimizing the handoff between people and machines." 
                href="/ai-assistants/human-ai-collaboration" 
                icon={Users} 
              />
              <PageCard 
                title="Agent Governance & Control" 
                description="Deep dive into permissioning and safety guardrails." 
                href="/ai-assistants/governance-control" 
                icon={Shield} 
              />
              <PageCard 
                title="Audit Trails & Oversight" 
                description="Complete visibility into every agent action." 
                href="/ai-assistants/audit-trails" 
                icon={FileText} 
              />
            </div>
          </div>
        </section>

        {/* 5. FINAL CTA */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-pink-900/20 to-purple-900/20 rounded-3xl p-12 text-center border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to integrate AI Assistants™?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
                Connect your stack with a layer of intelligent, governed execution.
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

export default AIAssistantsWhereTheyFit;