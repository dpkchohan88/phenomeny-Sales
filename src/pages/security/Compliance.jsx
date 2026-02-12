import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckSquare, ClipboardCheck, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';
import { seoMetadata } from '@/config/seoMetadata';

const Compliance = () => {
  return (
    <>
      <SEOHead {...(seoMetadata['/security/compliance'] || {})} />
      <main className="bg-[#0E0F11] text-white min-h-screen pt-24 font-sans antialiased">
        
        {/* 1. Hero Section */}
        <section className="relative py-24 px-6 flex flex-col items-center text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-900/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center mb-6"
            >
              <span className="px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-400 text-[11px] font-bold uppercase tracking-widest backdrop-blur-sm flex items-center gap-2">
                <CheckSquare size={12} />
                Standards
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
            >
              Compliance
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl text-orange-400 font-light mb-8"
            >
              Operating responsibly within regulated environments.
            </motion.p>
          </div>
        </section>

        {/* 2. Compliance-First Approach */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto bg-[#13151A] rounded-2xl p-8 border border-white/5 shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-6">Compliance-First Approach</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We understand that in regulated industries, compliance is not optional—it's existential. We build our tools to facilitate, not hinder, your audit requirements.
            </p>
            <ul className="space-y-4">
              {[
                "Built-in audit logging for all critical system actions.",
                "Data residency controls to meet geographic sovereignty laws.",
                "Automated policy enforcement to prevent drift.",
                "Read-only observer roles for external auditors."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                   <div className="mt-1.5 w-2 h-2 rounded-full bg-orange-500 shrink-0" />
                   <span className="text-gray-300 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 3. Regulatory Alignment */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Regulatory Alignment</h2>
            <p className="text-gray-400 text-lg mb-8">
              Our architecture is designed to map to the controls of major regulatory frameworks, simplifying your vendor risk assessment process.
            </p>
            <ul className="space-y-4">
              {[
                "Healthcare: HIPAA Business Associate Agreement (BAA) availability.",
                "Finance: SOC 2 Type II controls for security, availability, and confidentiality.",
                "Global Privacy: GDPR and CCPA compliant data processing addendums."
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-orange-500/30 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-1">
                    <ClipboardCheck className="text-orange-400" size={20} />
                    <span className="text-gray-200 text-lg font-medium">{item.split(':')[0]}</span>
                  </div>
                  <p className="text-gray-400 pl-8">{item.split(':')[1]}</p>
                </motion.div>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. Shared Responsibility */}
        <section className="py-16 px-6 border-t border-white/5 bg-[#13151A]/30">
          <div className="max-w-4xl mx-auto flex gap-6">
             <Users className="text-orange-400 shrink-0" size={32} />
             <div>
                <h2 className="text-3xl font-bold text-white mb-6">Shared Responsibility</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Compliance is a shared responsibility. While we secure the platform and the underlying infrastructure (Security of the Cloud), you remain responsible for the configuration of your agents, the data you choose to process, and the permissions you grant (Security in the Cloud). We provide the tools and documentation to help you uphold your end of the model effectively.
                </p>
             </div>
          </div>
        </section>

        {/* 5. CTA Section */}
        <section className="py-24 px-6 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F11] to-orange-900/10 pointer-events-none" />
           <div className="relative z-10 max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Stay compliant.</h2>
             <Link to="/contact">
               <Button size="lg" className="bg-[#F97316] hover:bg-[#EA580C] text-white rounded-full px-8 py-6 text-lg font-bold shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all hover:scale-105 group">
                 Discuss compliance requirements
                 <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
               </Button>
             </Link>
           </div>
        </section>

      </main>
    </>
  );
};

export default Compliance;