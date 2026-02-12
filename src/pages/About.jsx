import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Shield, Zap } from 'lucide-react';
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

const About = () => {
  return (
    <>
      <SEOHead {...(seoMetadata['/about'] || {})} />
      <main className="bg-[#0E0F11] text-white min-h-screen pt-24 font-sans antialiased text-rendering-optimizeLegibility">
        
        {/* 1. Hero Section */}
        <section className="relative py-24 px-6 flex flex-col items-center text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-900/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <Badge text="Company" />
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
            >
              Building the foundations for responsible AI transformation
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
            >
              Phenomeny exists to bridge the gap between AI capability and operational reality. We build the systems that make intelligence usable, safe, and scalable for the enterprise.
            </motion.p>
          </div>
        </section>

        {/* 2. Our Purpose */}
        <section className="py-24 px-6 border-t border-white/5 bg-[#13151A]/30">
          <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-3xl font-bold text-white mb-6">Our Purpose</h2>
             <p className="text-2xl md:text-3xl text-gray-300 font-light leading-relaxed">
               "To provide the operating infrastructure that allows complex organizations to evolve into AI-native entities without losing control, context, or their human core."
             </p>
          </div>
        </section>

        {/* 3. How we operate */}
        <section className="py-24 px-6 border-t border-white/5">
           <div className="max-w-6xl mx-auto">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
               <div>
                 <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">How we operate</h2>
                 <p className="text-xl text-gray-400 font-light mb-8">
                   We don't believe in magic boxes. We believe in engineering.
                 </p>
               </div>
               <div>
                  <ul className="space-y-6">
                    {[
                      { title: "First Principles", desc: "We deconstruct problems to their core constraints before writing a line of code." },
                      { title: "Systemic View", desc: "We optimize for the whole organism, not just the isolated function." },
                      { title: "Radical Transparency", desc: "Our systems (and our teams) explain their reasoning." },
                      { title: "Durable Design", desc: "We build for the decade, not the demo." }
                    ].map((item, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="border-l-2 border-pink-500/30 pl-6"
                      >
                        <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                        <p className="text-gray-400 font-light">{item.desc}</p>
                      </motion.li>
                    ))}
                  </ul>
               </div>
             </div>
           </div>
        </section>

        {/* 4. What defines our culture */}
        <section className="py-24 px-6 border-t border-white/5 bg-[#13151A]/30">
          <div className="max-w-6xl mx-auto">
             <h2 className="text-3xl font-bold text-white mb-12 text-center">What defines our culture</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: Target, title: "Precision", text: "We value accuracy over speed. Measure twice, cut once." },
                  { icon: Users, title: "Empathy", text: "We build for humans. Technology serves us, not the other way around." },
                  { icon: Shield, title: "Integrity", text: "We do what we say. In code, in contracts, and in conversation." },
                  { icon: Zap, title: "Curiosity", text: "We are relentless learners, constantly updating our mental models." }
                ].map((val, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 rounded-xl bg-[#0E0F11] border border-white/10 hover:border-pink-500/20 transition-all text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-400 mb-6 mx-auto">
                      <val.icon size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{val.title}</h3>
                    <p className="text-gray-400 font-light text-sm leading-relaxed">{val.text}</p>
                  </motion.div>
                ))}
             </div>
          </div>
        </section>

        {/* 5. Who we work with */}
        <section className="py-24 px-6 border-t border-white/5">
           <div className="max-w-4xl mx-auto">
             <h2 className="text-3xl font-bold text-white mb-8">Who we work with</h2>
             <p className="text-xl text-gray-400 font-light mb-12">
               We partner with forward-thinking enterprises in regulated and complex sectors.
             </p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">High-Stakes Operations</h3>
                  <p className="text-gray-400 font-light">Healthcare, Manufacturing, and Logistics where errors have real-world consequences.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">Knowledge-Intensive Services</h3>
                  <p className="text-gray-400 font-light">Legal, Financial, and Consulting firms where expertise is the primary asset.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">Scaling Platforms</h3>
                  <p className="text-gray-400 font-light">Tech-enabled service providers needing to break linear headcount growth.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">Education & Public Sector</h3>
                  <p className="text-gray-400 font-light">Institutions managing massive data flows with strict governance needs.</p>
                </div>
             </div>
           </div>
        </section>

        {/* 6. Explore Phenomeny */}
        <section className="py-24 px-6 border-t border-white/5 bg-[#13151A]/30">
           <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Explore Phenomeny</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <Link to="/about" className="group bg-[#0E0F11] p-8 rounded-xl border border-white/10 hover:border-pink-500/40 transition-all">
                   <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">About Us</h3>
                   <p className="text-gray-400 font-light">Learn more about our mission and origin.</p>
                 </Link>
                 <Link to="/careers" className="group bg-[#0E0F11] p-8 rounded-xl border border-white/10 hover:border-pink-500/40 transition-all">
                   <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">Careers</h3>
                   <p className="text-gray-400 font-light">Join the team building the future.</p>
                 </Link>
                 <Link to="/resources" className="group bg-[#0E0F11] p-8 rounded-xl border border-white/10 hover:border-pink-500/40 transition-all">
                   <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">Resources</h3>
                   <p className="text-gray-400 font-light">Whitepapers, guides, and insights.</p>
                 </Link>
                 <Link to="/contact" className="group bg-[#0E0F11] p-8 rounded-xl border border-white/10 hover:border-pink-500/40 transition-all">
                   <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">Contact</h3>
                   <p className="text-gray-400 font-light">Start a conversation with us.</p>
                 </Link>
              </div>
           </div>
        </section>

        {/* 7. Looking Ahead */}
        <section className="py-24 px-6 border-t border-white/5">
           <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-3xl font-bold text-white mb-6">Looking Ahead</h2>
             <p className="text-xl text-gray-400 font-light leading-relaxed">
               We are just beginning. The shift to AI-native operations is a generational transformation. We are committed to being the steady hand that guides enterprises through this transition, ensuring that as systems become more intelligent, they also become more reliable, transparent, and aligned with human intent.
             </p>
           </div>
        </section>

        {/* 8. CTA */}
        <section className="py-32 px-6 text-center border-t border-white/5 relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-b from-[#13151A] to-[#0E0F11]" />
           <div className="relative z-10 max-w-3xl mx-auto">
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to begin?</h2>
             <p className="text-xl text-gray-400 mb-10 font-light">
               Let's build the future of your operations together.
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

export default About;