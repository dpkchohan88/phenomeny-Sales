import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, PieChart, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';
import { seoMetadata } from '@/config/seoMetadata';

const MeasuredImpact = () => {
  return (
    <>
      <SEOHead {...(seoMetadata['/transformations/measured-impact'] || {})} />
      <main className="bg-[#0E0F11] text-white min-h-screen pt-24 font-sans antialiased">
        
        {/* 1. Hero Section */}
        <section className="relative py-24 px-6 flex flex-col items-center text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-pink-900/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center mb-6"
            >
              <span className="px-3 py-1 rounded-full border border-pink-500/20 bg-pink-500/10 text-pink-400 text-[11px] font-bold uppercase tracking-widest backdrop-blur-sm">
                Impact
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
            >
              Measuring impact without exaggeration
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
            >
              We focus on tangible operational improvements, not vanity metrics. True impact is felt in the reliability and speed of execution.
            </motion.p>
          </div>
        </section>

        {/* 2. How Impact is Evaluated */}
        <section className="py-24 px-6 border-t border-white/5 bg-[#13151A]/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-10">How Impact is Evaluated</h2>
            <div className="space-y-6">
              {[
                "Reduction in manual coordination overhead",
                "Faster onboarding into complex workflows",
                "Improved decision confidence across leadership",
                "Lower operational risk through automated governance",
                "Greater system-to-system data consistency"
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/5 hover:border-pink-500/30 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-400 shrink-0">
                    <TrendingUp size={16} />
                  </div>
                  <span className="text-lg text-gray-200 font-light">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Why Numbers are Not Published Publicly */}
        <section className="py-24 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
               <h2 className="text-3xl font-bold text-white mb-6">Why Numbers are Not Published Publicly</h2>
               <p className="text-lg text-gray-400 font-light leading-relaxed">
                 Every environment is unique. Publishing generic ROI numbers is often misleading and fails to account for specific organizational complexity. We share specific, relevant metrics and modeled outcomes during executive briefings where we can provide the necessary context.
               </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-64 h-64 relative">
                <div className="absolute inset-0 bg-pink-500/20 blur-[60px] rounded-full" />
                <div className="relative z-10 w-full h-full border border-white/10 bg-[#0E0F11] rounded-2xl flex items-center justify-center">
                   <BarChart3 size={64} className="text-gray-600" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. What Organizations Gain */}
        <section className="py-24 px-6 border-t border-white/5 bg-[#13151A]/30">
          <div className="max-w-4xl mx-auto">
             <h2 className="text-3xl font-bold text-white mb-10 text-center">What Organizations Gain</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { title: "Clarity", desc: "On exactly where value is created and where friction exists." },
                 { title: "Visibility", desc: "Into what changed, why it changed, and how it performs." },
                 { title: "Confidence", desc: "That improvements are durable and not dependent on individuals." }
               ].map((card, idx) => (
                 <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 bg-[#0E0F11] border border-white/10 rounded-xl text-center hover:border-pink-500/30 transition-colors"
                 >
                   <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                   <p className="text-gray-400 font-light">{card.desc}</p>
                 </motion.div>
               ))}
             </div>
          </div>
        </section>

        {/* 5. CTA Section */}
        <section className="py-24 px-6 text-center border-t border-white/5 relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F11] to-pink-900/5 pointer-events-none" />
           <div className="relative z-10 max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Measure what matters.</h2>
             <Link to="/contact">
               <Button size="lg" className="bg-[#EC4899] hover:bg-[#db2777] text-white rounded-full px-8 py-6 text-lg font-bold shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all hover:scale-105 group">
                 Discuss impact for your environment
                 <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
               </Button>
             </Link>
           </div>
        </section>

      </main>
    </>
  );
};

export default MeasuredImpact;