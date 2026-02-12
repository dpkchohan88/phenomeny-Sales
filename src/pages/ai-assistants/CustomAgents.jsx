import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Settings, Lock, Users, PenTool } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';
import { seoMetadata } from '@/config/seoMetadata';

const CustomAgents = () => {
  return (
    <>
      <SEOHead {...(seoMetadata['/ai-assistants/custom-agents'] || {})} />
      <main className="bg-[#0E0F11] text-white min-h-screen pt-24 font-sans antialiased">
        
        {/* 1. Hero Section */}
        <section className="relative py-24 px-6 flex flex-col items-center text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-900/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center mb-6"
            >
              <span className="px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-400 text-[11px] font-bold uppercase tracking-widest backdrop-blur-sm flex items-center gap-2">
                <PenTool size={12} />
                Design
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
            >
              Custom Agent Design
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl text-purple-400 font-light mb-8"
            >
              Build your own specialized agents for unique needs
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
            >
              Off-the-shelf agents handle common tasks, but your competitive advantage lies in your unique processes. Build agents that think like your best experts, speak your internal language, and follow your specific rules.
            </motion.p>
          </div>
        </section>

        {/* 2. Why customization matters */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto bg-[#13151A] rounded-2xl p-8 border border-white/5 shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-6">Why customization matters</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Generic models lack your institutional context. Custom agents bridge the gap between general intelligence and specific execution.
            </p>
            <ul className="space-y-4">
              {[
                "They understand specific company terminology and acronyms.",
                "They adhere to unique compliance and policy rules.",
                "They execute proprietary workflows that define your edge.",
                "They navigate legacy system quirks that standard APIs miss."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                   <div className="mt-1.5 w-2 h-2 rounded-full bg-purple-500 shrink-0" />
                   <span className="text-gray-300 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 3. What can be customized */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">What can be customized</h2>
            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
               We allow deep configuration of every layer of the agent's operation, not just the prompt.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Reasoning Models", desc: "Select specific LLMs or SLMs for the task." },
                { title: "Tool Access", desc: "Define exactly which APIs and data sources are available." },
                { title: "Memory Scope", desc: "Set boundaries on what history is recalled." },
                { title: "Interaction Style", desc: "Match the tone and format of your team." },
                { title: "Permission Sets", desc: "Granular control over who can invoke the agent." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-xl bg-white/[0.03] border border-white/5 hover:border-purple-500/30 transition-all hover:-translate-y-1"
                >
                  <Settings className="text-purple-400 mb-4" size={24} />
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. How custom agents are designed */}
        <section className="py-16 px-6 bg-[#13151A]/50 border-y border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">How custom agents are designed</h2>
            <p className="text-gray-400 text-lg mb-8">
              We use a collaborative workshop approach to extract your expert knowledge and encode it into the agent's behavior.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { step: "01", title: "Process Mapping", text: "Deconstructing the workflow into atomic steps." },
                { step: "02", title: "Constraint Definition", text: "Establishing hard rules and safety boundaries." },
                { step: "03", title: "Integration Scoping", text: "Connecting the necessary data pipes." },
                { step: "04", title: "Iterative Training", text: "Refining behavior with real-world feedback." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                   <span className="text-3xl font-bold text-purple-500/30">{item.step}</span>
                   <div>
                      <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-gray-400">{item.text}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Ownership and control */}
        <section className="py-16 px-6">
           <div className="max-w-4xl mx-auto bg-purple-900/10 border border-purple-500/20 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center">
             <div className="shrink-0 p-4 bg-purple-500/20 rounded-full">
                <Lock size={32} className="text-purple-300" />
             </div>
             <div>
               <h2 className="text-2xl font-bold text-white mb-4">Ownership and control</h2>
               <p className="text-gray-300 mb-4">
                 You own the intellectual property of your custom agents. They are your digital workforce, trained on your expertise.
               </p>
               <ul className="flex flex-wrap gap-4">
                 {["Your data", "Your rules", "Your competitive edge"].map((tag, i) => (
                   <span key={i} className="px-3 py-1 bg-purple-500/10 rounded-full text-xs font-bold text-purple-300 border border-purple-500/20 uppercase">
                     {tag}
                   </span>
                 ))}
               </ul>
             </div>
           </div>
        </section>

        {/* 6. CTA Section */}
        <section className="py-24 px-6 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F11] to-purple-900/10 pointer-events-none" />
           <div className="relative z-10 max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Digitize your unique expertise.</h2>
             <Link to="/contact">
               <Button size="lg" className="bg-[#9333EA] hover:bg-[#7e22ce] text-white rounded-full px-8 py-6 text-lg font-bold shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-all hover:scale-105 group">
                 Discuss custom agent design
                 <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
               </Button>
             </Link>
           </div>
        </section>

      </main>
    </>
  );
};

export default CustomAgents;