import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Network, Layers, Database, Globe, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';
import { seoMetadata } from '@/config/seoMetadata';

const IntegrationHorizon = () => {
  return (
    <>
      <SEOHead {...(seoMetadata['/ai-assistants/integration-horizon'] || {})} />
      <main className="bg-[#0E0F11] text-white min-h-screen pt-24 font-sans antialiased">
        
        {/* 1. Hero Section */}
        <section className="relative py-24 px-6 flex flex-col items-center text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center mb-6"
            >
              <span className="px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-[11px] font-bold uppercase tracking-widest backdrop-blur-sm flex items-center gap-2">
                <Network size={12} />
                Ecosystem
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
            >
              Integration Horizon
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl text-blue-400 font-light mb-8"
            >
              Expanding ecosystem of supported tools and platforms
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
            >
              Intelligence is only as useful as its ability to act. We are expanding the ecosystem of tools that AI Assistants can perceive and control, moving from isolated insights to integrated action.
            </motion.p>
          </div>
        </section>

        {/* 2. Integration philosophy */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto bg-[#13151A] rounded-2xl p-8 border border-white/5 shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-6">Integration philosophy</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We prioritize deep, state-aware integrations over brittle screen scraping. We build for reliability and security first.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "API-first architecture for stability.",
                "Two-way synchronization for data consistency.",
                "Transactional integrity for safe writes.",
                "Security inheritance from source systems."
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Types of integrations */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">Types of integrations</h2>
            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
               We support a broad spectrum of enterprise connectors to ensure coverage across your stack.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { title: "ERP Systems", desc: "SAP, Oracle, NetSuite", icon: Layers },
                { title: "CRM Platforms", desc: "Salesforce, HubSpot", icon: Database },
                { title: "Communication", desc: "Slack, Teams, Email", icon: Globe },
                { title: "Documents", desc: "SharePoint, G-Drive", icon: Layers },
                { title: "Databases", desc: "Postgres, Snowflake", icon: Database }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-blue-500/30 transition-all text-center"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mx-auto mb-3">
                    <item.icon size={18} />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. How integrations evolve */}
        <section className="py-16 px-6 bg-[#13151A]/50 border-y border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">How integrations evolve</h2>
            <p className="text-gray-400 text-lg mb-8">
              Integrations are not static; they get smarter and deeper over time as agent capabilities mature.
            </p>
            <div className="space-y-4">
              {[
                "From read-only visibility to full read-write capability.",
                "From simple event triggers to complex natural language queries.",
                "From single-record updates to bulk batch processing.",
                "From predefined actions to dynamic tool usage."
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-white/5 border-l-4 border-blue-500 flex items-center">
                   <span className="text-gray-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. What organizations can expect */}
        <section className="py-16 px-6">
           <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
             <div className="md:w-1/2">
                <h2 className="text-2xl font-bold text-white mb-6">What organizations can expect</h2>
                <p className="text-gray-400 mb-6">
                  Reliable connectivity that respects your existing security posture is our baseline standard.
                </p>
                <ul className="space-y-3">
                  {[
                    "Zero-trust architecture integration",
                    "Strict API rate limiting compliance",
                    "Detailed logging of all connector traffic",
                    "Non-disruptive deployment methods"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                      <Shield size={16} className="text-blue-400" />
                      {item}
                    </li>
                  ))}
                </ul>
             </div>
             <div className="md:w-1/2 flex justify-center">
                <div className="relative w-64 h-64 border border-blue-500/30 rounded-full flex items-center justify-center animate-pulse">
                   <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-xl" />
                   <Globe size={64} className="text-blue-400" />
                   <div className="absolute top-0 right-0 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,1)]" />
                   <div className="absolute bottom-10 left-0 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,1)]" />
                </div>
             </div>
           </div>
        </section>

        {/* 6. CTA Section */}
        <section className="py-24 px-6 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F11] to-blue-900/10 pointer-events-none" />
           <div className="relative z-10 max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Connect your entire stack.</h2>
             <Link to="/contact">
               <Button size="lg" className="bg-[#0EA5E9] hover:bg-[#0284c7] text-white rounded-full px-8 py-6 text-lg font-bold shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all hover:scale-105 group">
                 Explore integration possibilities
                 <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
               </Button>
             </Link>
           </div>
        </section>

      </main>
    </>
  );
};

export default IntegrationHorizon;