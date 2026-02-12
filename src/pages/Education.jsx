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

const Education = () => {
  return (
    <>
      <SEOHead {...(seoMetadata['/education'] || {})} />
      <main className="bg-[#0E0F11] text-white min-h-screen pt-24">
        
        {/* 1. Hero Section */}
        <section className="relative py-24 px-6 flex flex-col items-center text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-900/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <Badge text="Education" />
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
            >
              Creating continuity in <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">educational ecosystems</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
            >
              Empower administrators, faculty, and students with AI-native infrastructure that streamlines operations and personalizes the learning journey.
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
              <SectionHeading>The administrative burden</SectionHeading>
              <p className="text-xl text-gray-400 leading-relaxed font-light mb-6">
                Educational institutions are often slowed down by fragmented systems, manual record-keeping, and disconnected student data.
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
                <ListItem>Siloed data between admissions, registrar, and departments.</ListItem>
                <ListItem>High administrative overhead for faculty and staff.</ListItem>
                <ListItem>Delayed responses to student inquiries and support tickets.</ListItem>
                <ListItem>Inconsistent tracking of student progress and engagement.</ListItem>
                <ListItem>Difficulty managing compliance and accreditation reporting.</ListItem>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* 3. How Phenomeny Supports */}
        <section className="py-24 px-6 relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge text="Capabilities" />
            <SectionHeading>How Phenomeny Supports Education</SectionHeading>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We provide a unified operating layer that connects your campus systems, automating routine tasks so educators can focus on teaching.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Unified Student Record", desc: "Aggregate data from admissions, LMS, and financial aid into a single, secure view." },
              { title: "Intelligent Assistants", desc: "Deploy AI agents to handle routine inquiries from students about schedules, deadlines, and policies." },
              { title: "Automated Workflows", desc: "Streamline enrollment, grading submission, and grant application processes." },
              { title: "Predictive Analytics", desc: "Identify students at risk of falling behind early with engagement pattern analysis." },
              { title: "Secure Data Governance", desc: "Ensure FERPA compliance and data privacy with enterprise-grade security controls." }
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
                   <li className="text-lg text-white border-b border-white/5 pb-3">Admissions Processing</li>
                   <li className="text-lg text-white border-b border-white/5 pb-3">Student Support Services</li>
                   <li className="text-lg text-white border-b border-white/5 pb-3">Curriculum Planning</li>
                   <li className="text-lg text-white border-b border-white/5 pb-3">Alumni Engagement</li>
                   <li className="text-lg text-white">Research Grant Administration</li>
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
                   From the first touchpoint in admissions to ongoing alumni relations, Phenomeny helps institutions maintain continuity and intelligence throughout the entire lifecycle.
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
              Better operations lead to better educational outcomes.
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
                  <h4 className="text-white font-bold text-lg mb-2">Increased Retention</h4>
                  <p className="text-gray-400">Proactive support keeps students engaged and enrolled.</p>
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
                  <h4 className="text-white font-bold text-lg mb-2">Operational Efficiency</h4>
                  <p className="text-gray-400">Reduce manual data entry and administrative overhead.</p>
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
                  <h4 className="text-white font-bold text-lg mb-2">Faster Response Times</h4>
                  <p className="text-gray-400">Instant answers for students, 24/7.</p>
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
                  <h4 className="text-white font-bold text-lg mb-2">Compliance Confidence</h4>
                  <p className="text-gray-400">Automated reporting and data security.</p>
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
                  <h4 className="text-white font-bold text-lg mb-2">Faculty Focus</h4>
                  <p className="text-gray-400">More time for teaching and research.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 6. Final CTA */}
        <section className="py-32 px-6 relative overflow-hidden bg-[#0A0A0A]">
           <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent pointer-events-none" />
           <div className="relative z-10 max-w-4xl mx-auto text-center">
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
               Modernize your campus operations
             </h2>
             <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
               Discover how Phenomeny can help your institution build a resilient, AI-native foundation.
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

export default Education;