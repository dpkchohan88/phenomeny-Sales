import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';
import { seoMetadata } from '@/config/seoMetadata';

const CaseStudies = () => {
  return (
    <>
      <SEOHead {...(seoMetadata['/transformations/case-studies'] || {})} />
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
              <span className="px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-[11px] font-bold uppercase tracking-widest backdrop-blur-sm">
                Case Studies
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
            >
              How transformation works in practice
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
            >
              Real change happens quietly. It looks less like a revolution and more like things finally working the way they should.
            </motion.p>
          </div>
        </section>

        {/* 2. Narrative Section */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-16">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">The Context</h2>
              <p className="text-2xl text-white font-light leading-relaxed">
                Enterprises often operate across dozens of disconnected systems, creating friction that slows down every initiative. Teams compensate with manual effort, but this doesn't scale.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">The Challenge</h2>
              <p className="text-xl text-gray-300 font-light leading-relaxed">
                AI initiatives fail when they are introduced as tools without addressing the underlying operational workflow. Without structural change, new tools just add noise to an already loud environment.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">The Approach</h2>
              <p className="text-xl text-gray-300 font-light leading-relaxed">
                We map the operational reality first, then introduce intelligence incrementally to connect systems rather than adding noise. We focus on "Intelligence as Infrastructure" — embedding capability directly into the flow of work.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">The Outcome</h2>
              <p className="text-xl text-gray-300 font-light leading-relaxed">
                Organizations gain continuity, reduced friction, and the ability to scale operations without linear headcount growth. The result is a calmer, more predictable, and more capable enterprise.
              </p>
            </motion.div>

          </div>
        </section>

        {/* 3. Important Note */}
        <section className="py-24 px-6 bg-[#13151A]/50 border-t border-white/5">
          <div className="max-w-2xl mx-auto text-center p-8 border border-white/10 rounded-2xl bg-[#0E0F11]">
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock size={20} className="text-gray-400" />
            </div>
            <p className="text-gray-300 text-lg font-light mb-8">
              "Detailed case studies are shared privately during executive briefings to ensure proper context and responsible disclosure."
            </p>
            <Link to="/contact">
              <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20">
                Request an executive briefing
              </Button>
            </Link>
          </div>
        </section>

      </main>
    </>
  );
};

export default CaseStudies;