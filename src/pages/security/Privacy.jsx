import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Database, UserCheck, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';
import { seoMetadata } from '@/config/seoMetadata';

const Privacy = () => {
  return (
    <>
      <SEOHead {...(seoMetadata['/security/privacy'] || {})} />
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
                <Eye size={12} />
                Transparency
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
            >
              Privacy Policy
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl text-blue-400 font-light mb-8"
            >
              Respecting data, context, and confidentiality.
            </motion.p>
          </div>
        </section>

        {/* 2. Information We Collect */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto bg-[#13151A] rounded-2xl p-8 border border-white/5 shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-6">Information We Collect</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We limit collection to what is strictly necessary to provide our services and maintain operational security.
            </p>
            <ul className="space-y-4">
              {[
                "Account information (e.g., name, email, role) for authentication and access control.",
                "Usage data and telemetry to optimize system performance and reliability.",
                "Operational inputs provided explicitly by you for processing by our AI models."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                   <div className="p-1 rounded bg-blue-500/20 text-blue-400 mt-1">
                     <Database size={16} />
                   </div>
                   <span className="text-gray-300 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 3. How Information Is Used */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">How Information Is Used</h2>
            <p className="text-gray-400 text-lg mb-8">
              Data is processed solely for the purpose of delivering the service you have contracted. We do not monetize your data.
            </p>
            <ul className="space-y-4">
              {[
                "To provide, maintain, and improve our AI-native operating layer.",
                "To detect, prevent, and address technical issues or security threats.",
                "To communicate administrative updates and support responses."
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/5"
                >
                  <span className="text-gray-200 text-lg">{item}</span>
                </motion.div>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. Data Retention */}
        <section className="py-16 px-6 border-t border-white/5 bg-[#13151A]/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Data Retention</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements. Upon termination of service, data is deleted or anonymized in accordance with our data lifecycle policies.
            </p>
          </div>
        </section>

        {/* 5. Third-Party Services */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Third-Party Services</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We may employ third-party companies and individuals to facilitate our service ("Service Providers"), to provide the service on our behalf, or to assist us in analyzing how our service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
          </div>
        </section>

        {/* 6. Your Rights */}
        <section className="py-16 px-6 border-t border-white/5 bg-[#13151A]/30">
          <div className="max-w-4xl mx-auto flex gap-6">
            <UserCheck className="text-blue-400 shrink-0" size={32} />
            <div>
               <h2 className="text-3xl font-bold text-white mb-6">Your Rights</h2>
               <p className="text-gray-300 text-lg leading-relaxed">
                 You have the right to access, update, or delete the information we have on you. Whenever made possible, you can access, update, or request deletion of your Personal Data directly within your account settings section. If you are unable to perform these actions yourself, please contact us to assist you.
               </p>
            </div>
          </div>
        </section>

        {/* 7. CTA Section */}
        <section className="py-24 px-6 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F11] to-blue-900/10 pointer-events-none" />
           <div className="relative z-10 max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Data privacy matters.</h2>
             <Link to="/contact">
               <Button size="lg" className="bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-full px-8 py-6 text-lg font-bold shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all hover:scale-105 group">
                 Contact us about your data
                 <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
               </Button>
             </Link>
           </div>
        </section>

      </main>
    </>
  );
};

export default Privacy;