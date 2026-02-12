import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';
import { seoMetadata } from '@/config/seoMetadata';
import { cn } from '@/lib/utils';

const Badge = ({ text }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex justify-center mb-6"
  >
    <span className="px-3 py-1 rounded-full border border-pink-500/20 bg-pink-500/10 text-pink-400 text-[11px] font-bold uppercase tracking-widest backdrop-blur-sm">
      {text}
    </span>
  </motion.div>
);

const NavColumn = ({ title, description, links }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex flex-col h-full border-t border-white/10 pt-8"
  >
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-sm text-gray-400 mb-8 leading-relaxed min-h-[40px]">{description}</p>
    <ul className="space-y-4">
      {links.map((link, idx) => (
        <li key={idx}>
          <Link 
            to={link.href}
            className="group flex items-center text-gray-300 hover:text-white transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="text-sm md:text-base font-medium border-b border-transparent group-hover:border-pink-500/50 transition-all">
              {link.label}
            </span>
            <ChevronRight size={14} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-pink-400" />
          </Link>
        </li>
      ))}
    </ul>
  </motion.div>
);

const Capabilities = () => {
  const column1Links = [
    { label: "Model Intelligence", href: "/capabilities/model-intelligence" },
    { label: "Context Memory", href: "/capabilities/context-memory" },
    { label: "Data Pipeline", href: "/capabilities/data-pipeline" }
  ];

  const column2Links = [
    { label: "AI Assistants™", href: "/ai-assistants" },
    { label: "Overview", href: "/ai-assistants/overview" },
    { label: "How They Work", href: "/ai-assistants/how-they-work" },
    { label: "Agent Workflows", href: "/capabilities/agent-workflows" },
    { label: "System Integration", href: "/capabilities/system-integration" },
    { label: "Event Triggers", href: "/capabilities/event-triggers" }
  ];

  const column3Links = [
    { label: "Deep Observability", href: "/capabilities/deep-observability" },
    { label: "Collaboration", href: "/capabilities/collaboration" },
    { label: "Trust & Safety", href: "/capabilities/trust-and-safety" }
  ];

  return (
    <>
      <SEOHead {...(seoMetadata['/capabilities'] || {})} />
      <main className="bg-[#0E0F11] text-white min-h-screen pt-24">
        
        {/* 1. Hero Section */}
        <section className="relative py-24 px-6 flex flex-col items-center text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-pink-900/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <Badge text="Capabilities" />
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
            >
              Foundational capabilities for <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">AI-native operations</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
            >
              A comprehensive infrastructure designed to enable safe, scalable, and intelligent autonomy across the modern enterprise.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/contact">
                <Button size="lg" className="bg-[#EC4899] hover:bg-[#db2777] text-white rounded-full px-8 py-6 text-lg font-bold shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all hover:scale-105">
                  Discuss a transformation
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 2. Three-column Capability Navigation */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              <NavColumn 
                title="Core Capabilities" 
                description="The intelligence engine and memory systems that power understanding."
                links={column1Links}
              />
              <NavColumn 
                title="Execution Automation" 
                description="The hands and tools that perform work and integrate with systems."
                links={column2Links}
              />
              <NavColumn 
                title="AI-Native Enablement" 
                description="The governance, visibility, and safety layers that make autonomy enterprise-ready."
                links={column3Links}
              />
            </div>
          </div>
        </section>

        {/* 3. Explanatory Context */}
        <section className="py-24 px-6 bg-[#13151A]/50 border-y border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white mb-8"
            >
              Capabilities designed to work together — <br className="hidden md:block"/> not in isolation
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 leading-relaxed font-light"
            >
              True enterprise autonomy doesn't come from a single feature or a loose collection of tools. It requires an interlocking system where memory informs logic, logic directs action, and action is wrapped in safety. Every capability listed here is designed to reinforce the others, creating a resilient operating layer for your business.
            </motion.p>
          </div>
        </section>

        {/* 4. Navigation Forward / CTA */}
        <section className="py-32 px-6 relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F11] to-pink-900/10 pointer-events-none" />
           <div className="relative z-10 max-w-4xl mx-auto text-center">
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
               Explore capabilities in depth
             </h2>
             <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
               Ready to see how these components fit into your existing architecture?
             </p>
             <div className="flex justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-[#EC4899] hover:bg-[#db2777] text-white rounded-full px-10 py-7 text-lg font-bold shadow-2xl shadow-pink-600/20 transition-transform hover:scale-105 group">
                    Discuss a transformation <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </Link>
             </div>
           </div>
        </section>

      </main>
    </>
  );
};

export default Capabilities;