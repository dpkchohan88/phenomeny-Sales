import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, ArrowRight, BookOpen, Layers, ShieldCheck } from 'lucide-react';
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

const Resources = () => {
  return (
    <>
      <SEOHead {...(seoMetadata['/resources'] || {})} />
      <main className="bg-[#0E0F11] text-white min-h-screen pt-24 font-sans antialiased text-rendering-optimizeLegibility">
        
        {/* 1. Hero Section */}
        <section className="relative py-24 px-6 flex flex-col items-center text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-pink-900/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <Badge text="Resources" />
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
            >
              Perspectives on building AI-native enterprises responsibly
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
            >
              We believe that clarity is the precursor to transformation. Our resources are designed to cut through the noise and provide actionable frameworks for serious operators.
            </motion.p>
          </div>
        </section>

        {/* 2. What you'll find here */}
        <section className="py-24 px-6 border-t border-white/5 bg-[#13151A]/30">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/3">
                <h2 className="text-3xl font-bold text-white mb-4">What you'll find here</h2>
                <div className="h-1 w-20 bg-pink-500 rounded-full"></div>
              </div>
              <div className="md:w-2/3">
                <ul className="space-y-6">
                   {[
                     "Technical whitepapers detailing architecture and integration patterns.",
                     "Strategic playbooks for managing organizational change.",
                     "Deep dives into governance, security, and compliance in the age of AI.",
                     "Case studies on real-world operational transformation."
                   ].map((item, i) => (
                     <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-4"
                      >
                       <div className="mt-1.5 w-6 h-6 rounded-full bg-pink-500/10 border border-pink-500/20 flex items-center justify-center shrink-0">
                         <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                       </div>
                       <span className="text-lg text-gray-300 font-light leading-relaxed">{item}</span>
                     </motion.li>
                   ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. What you won't find */}
        <section className="py-24 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/3">
                <h2 className="text-3xl font-bold text-white mb-4">What you won't find</h2>
                <div className="h-1 w-20 bg-gray-700 rounded-full"></div>
              </div>
              <div className="md:w-2/3">
                <ul className="space-y-6">
                   {[
                     "Hype cycles or breathless speculation about AGI.",
                     "Marketing fluff disguised as technical advice.",
                     "Vendor-biased comparisons that ignore trade-offs.",
                     "Simplistic solutions to complex enterprise problems."
                   ].map((item, i) => (
                     <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-4"
                      >
                       <div className="mt-1.5 w-6 h-6 rounded-full bg-gray-700/30 border border-gray-600/30 flex items-center justify-center shrink-0">
                         <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                       </div>
                       <span className="text-lg text-gray-400 font-light leading-relaxed">{item}</span>
                     </motion.li>
                   ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Who this is for */}
        <section className="py-24 px-6 border-t border-white/5 bg-[#13151A]/30">
          <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-3xl font-bold text-white mb-10">Who this is for</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Layers,
                    title: "System Architects",
                    desc: "Looking for robust patterns to integrate AI into legacy stacks."
                  },
                  {
                    icon: ShieldCheck,
                    title: "Compliance Officers",
                    desc: "Needing to understand governance boundaries and risk controls."
                  },
                  {
                    icon: BookOpen,
                    title: "Operational Leaders",
                    desc: "Seeking clarity on how to drive efficiency without breaking continuity."
                  }
                ].map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-pink-500/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-400 mb-6 mx-auto border border-pink-500/20">
                      <card.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                    <p className="text-gray-400 font-light leading-relaxed">{card.desc}</p>
                  </motion.div>
                ))}
             </div>
          </div>
        </section>

        {/* 5. Available Resources */}
        <section className="py-24 px-6 border-t border-white/5">
           <div className="max-w-6xl mx-auto">
             <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Available Resources</h2>
               <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                 Foundational reading for the AI-native enterprise.
               </p>
             </div>
             
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Resource 1: PDDT Whitepaper */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group relative bg-[#1A1C23] rounded-2xl border border-white/10 overflow-hidden hover:border-pink-500/30 transition-all duration-500"
                >
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <FileText size={120} />
                  </div>
                  <div className="p-8 md:p-12 relative z-10 flex flex-col h-full">
                    <div className="mb-6">
                      <span className="text-xs font-bold text-pink-400 uppercase tracking-widest mb-2 block">Whitepaper</span>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">PDDT Framework</h3>
                      <p className="text-gray-400 leading-relaxed mb-6 font-light">
                        The Operating Blueprint for AI-Native Enterprises. Learn how to design intelligence as infrastructure, not just a feature. Covers Perception, Decision, Decision, and Transformation layers.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <Link to="/ai-resources/pddt-whitepaper">
                        <Button className="w-full md:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 gap-2">
                          Read Whitepaper <ArrowRight size={16} />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>

                {/* Resource 2: AI Transformation Playbook */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="group relative bg-[#1A1C23] rounded-2xl border border-white/10 overflow-hidden hover:border-pink-500/30 transition-all duration-500"
                >
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <BookOpen size={120} />
                  </div>
                  <div className="p-8 md:p-12 relative z-10 flex flex-col h-full">
                    <div className="mb-6">
                       <span className="text-xs font-bold text-pink-400 uppercase tracking-widest mb-2 block">Guide</span>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">AI Transformation Playbook</h3>
                      <p className="text-gray-400 leading-relaxed mb-6 font-light">
                        A step-by-step guide to modernize operations with confidence. Prioritizing continuity, safety, and long-term capability building over quick wins.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <Link to="/ai-resources/ai-transformation-playbook">
                        <Button className="w-full md:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 gap-2">
                          View Playbook <ArrowRight size={16} />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
             </div>
           </div>
        </section>

        {/* 6. How to use these resources */}
        <section className="py-24 px-6 border-t border-white/5 bg-[#13151A]/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">How to use these resources</h2>
            <ul className="space-y-4">
               {[
                 "Use them to align stakeholders on a common vocabulary.",
                 "Reference them when evaluating build vs. buy decisions.",
                 "Adopt the frameworks to audit your current operational maturity.",
                 "Share them with technical teams to establish governance standards."
               ].map((item, i) => (
                 <li key={i} className="flex items-start gap-4 text-lg text-gray-300 font-light">
                   <div className="mt-2 w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0" />
                   <span>{item}</span>
                 </li>
               ))}
            </ul>
          </div>
        </section>

        {/* 7. CTA */}
        <section className="py-32 px-6 text-center border-t border-white/5 relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-b from-[#13151A] to-[#0E0F11]" />
           <div className="relative z-10 max-w-3xl mx-auto">
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to explore?</h2>
             <p className="text-xl text-gray-400 mb-10 font-light">
               We're happy to discuss how these frameworks apply to your specific context.
             </p>
             <Link to="/contact">
               <Button size="lg" className="bg-[#EC4899] hover:bg-[#db2777] text-white rounded-full px-8 py-6 text-lg font-bold shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all hover:scale-105">
                 Contact Us
               </Button>
             </Link>
           </div>
        </section>

      </main>
    </>
  );
};

export default Resources;