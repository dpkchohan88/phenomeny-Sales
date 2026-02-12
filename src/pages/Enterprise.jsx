import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';
import { seoMetadata } from '@/config/seoMetadata';

const Badge = ({ text }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex justify-center mb-6"
  >
    <span className="px-3 py-1 rounded-full border border-pink-500/20 bg-pink-500/10 text-pink-400 text-[11px] font-bold uppercase tracking-widest backdrop-blur-sm">
      {text}
    </span>
  </motion.div>
);

const TextBlock = ({ title, content }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex flex-col border-t border-white/10 pt-6"
  >
    <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
    <p className="text-sm md:text-base text-gray-400 leading-relaxed">{content}</p>
  </motion.div>
);

const Enterprise = () => {
  return (
    <>
      <SEOHead {...(seoMetadata['/enterprise'] || {})} />
      <main className="bg-[#0E0F11] text-white min-h-screen pt-24">
        
        {/* 1. Hero Section */}
        <section className="relative py-24 px-6 flex flex-col items-center text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-pink-900/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <Badge text="Enterprise" />
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
            >
              Built for organizations where <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">complexity is the norm</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
            >
              For large enterprises, "move fast and break things" isn't an option. We provide the infrastructure to move fast while keeping your systems, data, and compliance intact.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/contact">
                <Button size="lg" className="bg-[#EC4899] hover:bg-[#db2777] text-white rounded-full px-8 py-6 text-lg font-bold shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all hover:scale-105">
                  Discuss a transformation
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 2. Enterprise-ready Explanation */}
        <section className="py-24 px-6 bg-[#13151A]/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Enterprise-ready is not a feature — it's a foundation
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 leading-relaxed font-light"
            >
              Many tools claim to be "enterprise-ready" by adding SSO and an audit log at the end of development. Phenomeny was architected from day one to handle the friction, scale, and rigorous governance requirements of large organizations. We understand that in your environment, reliability is just as critical as innovation.
            </motion.p>
          </div>
        </section>

        {/* 3. Design Principles */}
        <section className="py-24 px-6 relative border-y border-white/5">
          <div className="max-w-7xl mx-auto">
             <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="mb-12"
             >
                <h2 className="text-2xl font-bold text-white mb-2">Core Design Principles</h2>
                <div className="h-1 w-20 bg-pink-500 rounded-full"></div>
             </motion.div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
               <TextBlock 
                 title="Governance First" 
                 content="Autonomy without boundaries is a liability. Our platform requires explicit permission modeling, approval thresholds, and human-in-the-loop gates before any agent can execute an action."
               />
               <TextBlock 
                 title="System Compatibility" 
                 content="You cannot rewrite your entire stack for AI. We are designed to sit on top of legacy ERPs, CRMs, and custom databases, bridging old infrastructure with new intelligence."
               />
               <TextBlock 
                 title="Operational Continuity" 
                 content="Staff turnover shouldn't mean knowledge loss. By embedding context and reasoning into the operating layer, we ensure institutional knowledge persists beyond individual tenure."
               />
               <TextBlock 
                 title="Security by Default" 
                 content="We operate in zero-trust environments. Data isolation, encryption in transit and at rest, and comprehensive audit trails are standard configuration, not optional add-ons."
               />
             </div>
          </div>
        </section>

        {/* 4. Where Enterprises Use Phenomeny */}
        <section className="py-24 px-6 bg-[#13151A]/50">
           <div className="max-w-5xl mx-auto">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
               <motion.div
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
               >
                 <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Designed for enterprise environments across industries</h2>
                 <p className="text-gray-400 text-lg leading-relaxed mb-8">
                   Our operating layer is agnostic to the vertical but specific to the complexity. Wherever there is high-volume data, complex coordination, and rigorous compliance needs, Phenomeny fits.
                 </p>
               </motion.div>
               
               <motion.div
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="bg-white/5 border border-white/10 rounded-xl p-8"
               >
                 <ul className="space-y-4">
                   <li className="text-lg text-white border-b border-white/5 pb-3">Healthcare systems requiring HIPAA compliance</li>
                   <li className="text-lg text-white border-b border-white/5 pb-3">Professional services firms scaling expertise</li>
                   <li className="text-lg text-white border-b border-white/5 pb-3">Multi-location service organizations</li>
                   <li className="text-lg text-white border-b border-white/5 pb-3">Operations-heavy logistics & supply chain</li>
                   <li className="text-lg text-white">Product and R&D-driven organizations</li>
                 </ul>
               </motion.div>
             </div>
           </div>
        </section>

        {/* 5. Scale Without Fragmentation */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Scale intelligence without losing control
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 leading-relaxed font-light"
            >
              The biggest risk to enterprise AI adoption is fragmentation—hundreds of disconnected bots and tools creating a new layer of shadow IT. Phenomeny centralizes the intelligence layer. You get a single control plane for observability, cost management, and compliance, regardless of how many agents or workflows you deploy.
            </motion.p>
          </div>
        </section>

        {/* 6. Engagement Model / Final CTA */}
        <section className="py-32 px-6 relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F11] to-pink-900/10 pointer-events-none" />
           <div className="relative z-10 max-w-4xl mx-auto text-center">
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
               Transformation begins with understanding
             </h2>
             <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
               We don't sell licenses; we partner on outcomes. Our engagement starts with a structured assessment of your data readiness and operational bottlenecks.
             </p>
             <div className="flex justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-[#EC4899] hover:bg-[#db2777] text-white rounded-full px-10 py-7 text-lg font-bold shadow-2xl shadow-pink-600/20 transition-transform hover:scale-105 group">
                    Discuss a transformation <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </Link>
             </div>
           </div>
        </section>

      </main>
    </>
  );
};

export default Enterprise;