import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, X, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';
import { seoMetadata } from '@/config/seoMetadata';

const BeforeAfter = () => {
  return (
    <>
      <SEOHead {...(seoMetadata['/transformations/before-after'] || {})} />
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
              <span className="px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-400 text-[11px] font-bold uppercase tracking-widest backdrop-blur-sm">
                Transformation
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
            >
              Operational change, made visible
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
            >
              We create clarity where there was complexity. Moving from individual heroics to systemic reliability is not just a goal—it is a structural shift in how work gets done.
            </motion.p>
          </div>
        </section>

        {/* 2. Comparison Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              
              {/* Before Column */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#13151A] rounded-2xl p-8 md:p-12 border border-white/5 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gray-700" />
                <h2 className="text-2xl font-bold text-gray-300 mb-8 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-500 border border-gray-700">
                    <X size={16} />
                  </span>
                  Fragmented systems
                </h2>
                <ul className="space-y-6">
                  {[
                    "Manual handoffs between teams",
                    "Knowledge held by individuals",
                    "Delayed decisions due to missing context",
                    "High dependence on follow-ups and escalations"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-gray-400 font-light">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* After Column */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#13151A] rounded-2xl p-8 md:p-12 border border-purple-500/20 relative overflow-hidden shadow-[0_0_30px_rgba(147,51,234,0.05)]"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-purple-500" />
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 border border-purple-500/30">
                    <Check size={16} />
                  </span>
                  Connected systems with shared context
                </h2>
                <ul className="space-y-6">
                  {[
                    "Clear ownership and governed execution",
                    "Operational knowledge preserved institutionally",
                    "Faster, more confident decision-making",
                    "Reduced coordination overhead"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-gray-200 font-light">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 3. Clarifying Line */}
        <section className="py-12 px-6 text-center">
          <div className="max-w-2xl mx-auto border-t border-b border-white/5 py-8">
            <p className="text-gray-500 text-sm font-medium tracking-wide uppercase">
              These comparisons describe structural shifts, not guaranteed timelines or results.
            </p>
          </div>
        </section>

        {/* 4. CTA Section */}
        <section className="py-24 px-6 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-b from-[#0E0F11] to-[#13151A]" />
           <div className="relative z-10 max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready to shift your operations?</h2>
             <Link to="/contact">
               <Button size="lg" className="bg-[#EC4899] hover:bg-[#db2777] text-white rounded-full px-8 py-6 text-lg font-bold shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all hover:scale-105 group">
                 Discuss a transformation
                 <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
               </Button>
             </Link>
           </div>
        </section>

      </main>
    </>
  );
};

export default BeforeAfter;