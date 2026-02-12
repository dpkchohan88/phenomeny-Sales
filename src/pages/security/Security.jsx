import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Lock, Server, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';
import { seoMetadata } from '@/config/seoMetadata';

const Security = () => {
  return (
    <>
      <SEOHead {...(seoMetadata['/security/security'] || {})} />
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
                <Shield size={12} />
                Architecture
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
            >
              Security
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl text-emerald-400 font-light mb-8"
            >
              Enterprise-grade safeguards for privacy, risk, and governance.
            </motion.p>
          </div>
        </section>

        {/* 2. Security by Design */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto bg-[#13151A] rounded-2xl p-8 border border-white/5 shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-6">Security by Design</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Security is not an overlay; it is the substrate of our platform. Every component is built with a zero-trust architecture from the ground up.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Zero-trust network access control (ZTNA).",
                "Mandatory encryption in transit and at rest.",
                "Granular role-based access control (RBAC).",
                "Automated vulnerability scanning in CI/CD pipelines."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                   <div className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                   <span className="text-gray-300 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 3. Data Protection */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Lock className="text-emerald-400" size={32} />
              <h2 className="text-3xl font-bold text-white">Data Protection</h2>
            </div>
            <p className="text-gray-400 text-lg mb-8">
              We employ state-of-the-art cryptographic standards to ensure your data remains yours, regardless of where it resides in the lifecycle.
            </p>
            <ul className="space-y-4">
              {[
                "AES-256 encryption for all persistent data storage.",
                "TLS 1.3 for all data in transit across public networks.",
                "Tenant isolation at the database level to prevent leakage."
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/30 transition-colors"
                >
                  <span className="text-gray-200 text-lg">{item}</span>
                </motion.div>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. Operational Security */}
        <section className="py-16 px-6 border-t border-white/5 bg-[#13151A]/30">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Activity className="text-emerald-400" size={32} />
              <h2 className="text-3xl font-bold text-white">Operational Security</h2>
            </div>
            <p className="text-gray-400 text-lg mb-8">
              Our internal protocols are as rigorous as our code. We maintain strict procedural controls to minimize human error and insider risk.
            </p>
            <ul className="space-y-4">
              {[
                "Multi-factor authentication (MFA) enforcement for all personnel.",
                "Regular third-party penetration testing and red-teaming.",
                "Continuous security awareness training for all employees."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                   <div className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                   <span className="text-gray-300 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 5. Compliance Alignment */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Server className="text-emerald-400" size={32} />
              <h2 className="text-3xl font-bold text-white">Compliance Alignment</h2>
            </div>
            <p className="text-gray-400 text-lg mb-8">
              We align our controls with globally recognized frameworks to support your regulatory obligations.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "SOC 2 Type II",
                "ISO 27001",
                "GDPR",
                "HIPAA",
                "CCPA"
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-center">
                   <span className="text-emerald-300 font-bold">{item}</span>
                </div>
              ))}
            </ul>
          </div>
        </section>

        {/* 6. CTA Section */}
        <section className="py-24 px-6 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F11] to-emerald-900/10 pointer-events-none" />
           <div className="relative z-10 max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Secure by default.</h2>
             <Link to="/contact">
               <Button size="lg" className="bg-[#10B981] hover:bg-[#059669] text-white rounded-full px-8 py-6 text-lg font-bold shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all hover:scale-105 group">
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

export default Security;