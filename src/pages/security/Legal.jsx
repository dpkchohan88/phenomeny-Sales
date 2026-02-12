import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Lock, FileText, CheckCircle, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';
import { seoMetadata } from '@/config/seoMetadata';

const Legal = () => {
  return (
    <>
      <SEOHead {...(seoMetadata['/security'] || {})} />
      <main className="bg-[#0E0F11] text-white min-h-screen pt-24 font-sans antialiased">
        
        {/* 1. Hero Section */}
        <section className="relative py-24 px-6 flex flex-col items-center text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-900/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center mb-6"
            >
              <span className="px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 text-[11px] font-bold uppercase tracking-widest backdrop-blur-sm flex items-center gap-2">
                <Scale size={12} />
                Legal Center
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
            >
              Legal
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl text-indigo-400 font-light mb-8"
            >
              Trust, transparency, and responsibility by design
            </motion.p>
          </div>
        </section>

        {/* 2. What This Section Covers */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto bg-[#13151A] rounded-2xl p-8 border border-white/5 shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-6">What This Section Covers</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              This repository contains all critical documentation regarding our operational standards, data handling practices, and terms of engagement. It is designed to provide clarity on how we protect your interests.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Comprehensive security protocols and architecture.",
                "Data privacy frameworks and processing activities.",
                "Standard terms of service and acceptable use.",
                "Regulatory compliance and certification status."
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-indigo-500 shrink-0" />
                  <span className="text-gray-300 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Our Guiding Principle */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
             <h2 className="text-3xl font-bold text-white mb-6">Our Guiding Principle</h2>
             <div className="space-y-6 text-lg text-gray-400 leading-relaxed font-light">
               <p>
                 We believe that trust is not built through obscurity, but through radical transparency and engineering rigour. In an era of autonomous systems, the "black box" approach is a liability. We engineer our legal and security frameworks with the same precision as our software.
               </p>
               <p>
                 Our commitment extends beyond compliance checkboxes. We actively design our systems to ensure data sovereignty, minimize exposure, and maintain clear lines of accountability for every automated action our platform performs.
               </p>
             </div>
          </div>
        </section>

        {/* 4. Explore Legal Resources */}
        <section className="py-16 px-6 border-t border-white/5 bg-[#13151A]/30">
           <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Explore Legal Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {[
                   { title: "Security", path: "/security/security", icon: Shield, desc: "Deep dive into our defense-in-depth architecture." },
                   { title: "Privacy", path: "/security/privacy", icon: Lock, desc: "How we respect, protect, and process your data." },
                   { title: "Terms", path: "/security/terms", icon: FileText, desc: "The rules of engagement for our platform." },
                   { title: "Compliance", path: "/security/compliance", icon: CheckCircle, desc: "Our regulatory alignment and certifications." }
                 ].map((card, idx) => (
                   <Link 
                      key={idx} 
                      to={card.path}
                      className="group bg-[#0E0F11] p-8 rounded-xl border border-white/10 hover:border-indigo-500/40 hover:shadow-2xl transition-all duration-300"
                   >
                     <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                        <card.icon size={24} />
                     </div>
                     <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">{card.title}</h3>
                     <p className="text-gray-400 font-light">{card.desc}</p>
                     <div className="mt-6 flex items-center text-sm font-bold text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0">
                        View Page <ArrowRight size={16} className="ml-2" />
                     </div>
                   </Link>
                 ))}
              </div>
           </div>
        </section>

        {/* 5. CTA Section */}
        <section className="py-24 px-6 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F11] to-indigo-900/10 pointer-events-none" />
           <div className="relative z-10 max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Have specific requirements?</h2>
             <Link to="/contact">
               <Button size="lg" className="bg-[#6366F1] hover:bg-[#4F46E5] text-white rounded-full px-8 py-6 text-lg font-bold shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all hover:scale-105 group">
                 Discuss security requirements
                 <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
               </Button>
             </Link>
           </div>
        </section>

      </main>
    </>
  );
};

export default Legal;