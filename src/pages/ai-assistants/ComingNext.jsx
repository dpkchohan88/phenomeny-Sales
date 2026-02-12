import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, GitBranch } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';
import { seoMetadata } from '@/config/seoMetadata';

const ComingNext = () => {
  return (
    <>
      <SEOHead {...(seoMetadata['/ai-assistants/coming-next'] || {})} />
      <main className="bg-[#0E0F11] text-white min-h-screen pt-24 font-sans antialiased">
        
        {/* 1. Hero Section */}
        <section className="relative py-24 px-6 flex flex-col items-center text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-900/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center mb-6"
            >
              <span className="px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-[11px] font-bold uppercase tracking-widest backdrop-blur-sm flex items-center gap-2">
                <Sparkles size={12} />
                Roadmap
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
            >
              Coming Next
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl text-emerald-400 font-light mb-8"
            >
              Preview upcoming agent capabilities and features
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
            >
              As the enterprise landscape evolves, so do our capabilities. We are continuously advancing the autonomy, reasoning, and integration depth of our AI Assistants to handle increasingly complex operational realities.
            </motion.p>
          </div>
        </section>

        {/* 2. How evolution is approached */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto bg-[#13151A] rounded-2xl p-8 border border-white/5 shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-6">How evolution is approached</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We don't chase trends. Our roadmap is driven by the practical needs of large-scale operations, prioritizing reliability over novelty.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Stability First", desc: "Features are stress-tested in sandbox environments before general release." },
                { title: "Backward Compatibility", desc: "New capabilities never break existing governed workflows." },
                { title: "Governance by Default", desc: "No new feature ships without corresponding control mechanisms." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 p-6 rounded-xl border border-white/5">
                  <h3 className="text-emerald-400 font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Areas of advancement */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Areas of advancement</h2>
            <p className="text-gray-400 text-lg mb-8">
              We are focusing on deeper cognitive architectures that allow agents to handle ambiguity and complexity with human-like nuance.
            </p>
            <ul className="space-y-4">
              {[
                "Multi-step reasoning and long-horizon planning capabilities.",
                "Cross-agent negotiation for resource conflict resolution.",
                "Proactive anomaly detection before operational impact.",
                "Deeper semantic memory for year-over-year institutional context.",
                "Rigorous self-correction loops for autonomous error recovery."
              ].map((item, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/30 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                    <TrendingUp size={16} />
                  </div>
                  <span className="text-gray-200">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. What will not change */}
        <section className="py-16 px-6 bg-[#13151A]/50 border-y border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">What will not change</h2>
            <p className="text-gray-400 text-lg mb-8">
              While our capabilities expand, our core principles regarding safety, data, and control remain immutable.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Human-in-the-loop control for critical decisions.",
                "Absolute data sovereignty and tenant isolation.",
                "Strict auditability of every agent action.",
                "Transparent, predictable pricing models."
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <ShieldCheck className="text-emerald-400 shrink-0 mt-1" size={20} />
                  <span className="text-gray-300 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. How organizations engage with the roadmap */}
        <section className="py-16 px-6">
           <div className="max-w-3xl mx-auto text-center">
             <div className="inline-block p-4 rounded-full bg-white/5 mb-6">
                <GitBranch size={32} className="text-gray-400" />
             </div>
             <h2 className="text-2xl font-bold text-white mb-4">How organizations engage with the roadmap</h2>
             <p className="text-gray-400 leading-relaxed text-lg">
               Organizations on the enterprise plan have direct influence on our roadmap through quarterly strategy councils. We prioritize features that solve real friction for our largest deployments, ensuring our evolution matches your operational reality.
             </p>
           </div>
        </section>

        {/* 6. CTA Section */}
        <section className="py-24 px-6 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F11] to-emerald-900/10 pointer-events-none" />
           <div className="relative z-10 max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Shape the future of operations.</h2>
             <Link to="/contact">
               <Button size="lg" className="bg-[#10B981] hover:bg-[#059669] text-white rounded-full px-8 py-6 text-lg font-bold shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all hover:scale-105 group">
                 Discuss future capabilities
                 <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
               </Button>
             </Link>
           </div>
        </section>

      </main>
    </>
  );
};

export default ComingNext;