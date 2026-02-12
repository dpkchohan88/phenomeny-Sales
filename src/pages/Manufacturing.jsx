import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
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

const SectionHeading = ({ children, className = "" }) => (
  <h2 className={`text-3xl md:text-5xl font-bold text-white mb-6 ${className}`}>
    {children}
  </h2>
);

const ListItem = ({ children }) => (
  <li className="flex items-start gap-3 text-gray-300 text-lg leading-relaxed">
    <CheckCircle2 className="text-pink-500 shrink-0 mt-1" size={20} />
    <span>{children}</span>
  </li>
);

const Manufacturing = () => {
  return (
    <>
      <SEOHead {...(seoMetadata['/manufacturing'] || {})} />
      <main className="bg-[#0E0F11] text-white min-h-screen pt-24">
        
        {/* 1. Hero Section */}
        <section className="relative py-24 px-6 flex flex-col items-center text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-pink-900/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <Badge text="Manufacturing" />
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
            >
              Standardizing operations in <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">complex production environments</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
            >
              Bridge the gap between shop floor data and top-floor strategy. We help manufacturers reduce downtime, optimize inventory, and automate quality compliance.
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

        {/* 2. Challenge Section */}
        <section className="py-24 px-6 bg-[#13151A]/30 border-t border-white/5">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading>The complexity of modern production</SectionHeading>
              <p className="text-xl text-gray-400 leading-relaxed font-light mb-6">
                Manufacturing processes generate massive amounts of data, but most of it remains siloed in legacy ERPs or localized spreadsheets.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Common Challenges</h3>
              <ul className="space-y-4">
                <ListItem>Unplanned downtime due to reactive maintenance.</ListItem>
                <ListItem>Fragmented supply chain visibility across sites.</ListItem>
                <ListItem>Inconsistent quality control dependent on manual checks.</ListItem>
                <ListItem>Difficulty tracing root causes of production defects.</ListItem>
                <ListItem>Legacy systems that don't speak to modern analytics tools.</ListItem>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* 3. How Phenomeny Supports */}
        <section className="py-24 px-6 relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge text="Capabilities" />
            <SectionHeading>How Phenomeny Supports Manufacturing</SectionHeading>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our AI-native operating layer integrates directly with your existing infrastructure to provide real-time intelligence.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Predictive Maintenance", desc: "Analyze sensor data to predict equipment failure before it halts production." },
              { title: "Unified Data Pipeline", desc: "Normalize data streams from diverse machinery and ERP systems into a single source of truth." },
              { title: "Automated Compliance", desc: "Ensure safety and quality standards are met with automated audit trails and reporting." },
              { title: "Inventory Optimization", desc: "Dynamically adjust stock levels based on real-time demand signals and lead times." },
              { title: "Digital Twins", desc: "Create accurate operational models to test scenarios without disrupting the production line." }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#1A1C23] border border-white/10 p-8 rounded-xl hover:border-pink-500/30 transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 4. Where Intelligence is Applied */}
        <section className="py-24 px-6 bg-[#13151A]/50 border-y border-white/5">
          <div className="max-w-5xl mx-auto">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
               <motion.div
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="order-2 md:order-1 bg-white/5 border border-white/10 rounded-xl p-8"
               >
                 <ul className="space-y-4">
                   <li className="text-lg text-white border-b border-white/5 pb-3">Supply Chain Forecasting</li>
                   <li className="text-lg text-white border-b border-white/5 pb-3">Shop Floor Scheduling</li>
                   <li className="text-lg text-white border-b border-white/5 pb-3">Quality Assurance Automation</li>
                   <li className="text-lg text-white border-b border-white/5 pb-3">Worker Safety Monitoring</li>
                   <li className="text-lg text-white">Energy Consumption Optimization</li>
                 </ul>
               </motion.div>
               
               <motion.div
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="order-1 md:order-2"
               >
                 <Badge text="Applications" />
                 <SectionHeading>Where Intelligence is Applied</SectionHeading>
                 <p className="text-gray-400 text-lg leading-relaxed mb-8">
                   We deploy intelligence exactly where it drives the most value—whether that's optimizing the movement of raw materials or ensuring the final product meets rigorous specifications.
                 </p>
               </motion.div>
             </div>
           </div>
        </section>

        {/* 5. Outcomes Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <SectionHeading>Measurable Outcomes</SectionHeading>
            <p className="text-xl text-gray-400">
              Transforming operations translates directly to the bottom line.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-4 p-6 rounded-lg bg-white/5 border border-white/10"
              >
                <div className="text-pink-500 font-bold text-2xl">01</div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Reduced Downtime</h4>
                  <p className="text-gray-400">Shift from reactive to predictive maintenance.</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex gap-4 p-6 rounded-lg bg-white/5 border border-white/10"
              >
                <div className="text-pink-500 font-bold text-2xl">02</div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Higher Yields</h4>
                  <p className="text-gray-400">Minimize waste through tighter process control.</p>
                </div>
              </motion.div>
               <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex gap-4 p-6 rounded-lg bg-white/5 border border-white/10"
              >
                <div className="text-pink-500 font-bold text-2xl">03</div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Faster Time-to-Market</h4>
                  <p className="text-gray-400">Accelerate prototyping and production ramp-up.</p>
                </div>
              </motion.div>
            </div>
            
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-4 p-6 rounded-lg bg-white/5 border border-white/10"
              >
                <div className="text-pink-500 font-bold text-2xl">04</div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Improved Safety</h4>
                  <p className="text-gray-400">Reduce incidents with automated monitoring.</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex gap-4 p-6 rounded-lg bg-white/5 border border-white/10"
              >
                <div className="text-pink-500 font-bold text-2xl">05</div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Cost Efficiency</h4>
                  <p className="text-gray-400">Lower energy and material costs per unit.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 6. Final CTA */}
        <section className="py-32 px-6 relative overflow-hidden bg-[#0A0A0A]">
           <div className="absolute inset-0 bg-gradient-to-t from-pink-900/10 to-transparent pointer-events-none" />
           <div className="relative z-10 max-w-4xl mx-auto text-center">
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
               Ready to optimize your production line?
             </h2>
             <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
               Let's discuss how Phenomeny can integrate with your existing equipment and systems.
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

export default Manufacturing;