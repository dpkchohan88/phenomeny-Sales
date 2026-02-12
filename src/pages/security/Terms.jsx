import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';
import { seoMetadata } from '@/config/seoMetadata';

const Terms = () => {
  return (
    <>
      <SEOHead {...(seoMetadata['/security/terms'] || {})} />
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
                <FileText size={12} />
                Agreement
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
            >
              Terms of Service
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl text-purple-400 font-light mb-8"
            >
              Clear terms for responsible engagement.
            </motion.p>
          </div>
        </section>

        {/* 2. Use of the Website */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto bg-[#13151A] rounded-2xl p-8 border border-white/5 shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-6">Use of the Website</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              By accessing the website at Phenomeny, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
            </p>
          </div>
        </section>

        {/* 3. Intellectual Property */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Intellectual Property</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of Phenomeny and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Phenomeny.
            </p>
          </div>
        </section>

        {/* 4. Engagement Discussions */}
        <section className="py-16 px-6 border-t border-white/5 bg-[#13151A]/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Engagement Discussions</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Initial consultations and strategy discussions are confidential. We respect the proprietary nature of your operational challenges. Detailed commercial terms, including SLAs, support tiers, and custom development scope, are defined in separate Master Services Agreements (MSAs) executed prior to deployment.
            </p>
          </div>
        </section>

        {/* 5. Limitation of Liability */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Limitation of Liability</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              In no event shall Phenomeny, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content.
            </p>
          </div>
        </section>

        {/* 6. Governing Law */}
        <section className="py-16 px-6 border-t border-white/5 bg-[#13151A]/30">
          <div className="max-w-4xl mx-auto flex gap-6">
             <Scale className="text-purple-400 shrink-0" size={32} />
             <div>
                <h2 className="text-3xl font-bold text-white mb-6">Governing Law</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  These Terms shall be governed and construed in accordance with the laws of Delaware, United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                </p>
             </div>
          </div>
        </section>

        {/* 7. CTA Section */}
        <section className="py-24 px-6 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F11] to-purple-900/10 pointer-events-none" />
           <div className="relative z-10 max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Ready to move forward?</h2>
             <Link to="/contact">
               <Button size="lg" className="bg-[#9333EA] hover:bg-[#7E22CE] text-white rounded-full px-8 py-6 text-lg font-bold shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-all hover:scale-105 group">
                 Discuss engagement terms
                 <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
               </Button>
             </Link>
           </div>
        </section>

      </main>
    </>
  );
};

export default Terms;