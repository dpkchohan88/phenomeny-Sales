import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { seoMetadata } from '@/config/seoMetadata';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

// Section Component with strict spacing
const Section = ({ children, className = "" }) => (
  <section className={`py-16 md:py-20 border-t border-white/5 first:border-0 relative ${className}`}>
    <div className="max-w-[800px] mx-auto px-6">
      {children}
    </div>
  </section>
);

const HowItWorks = () => {
  return (
    <>
      <SEOHead {...seoMetadata['/how-it-works']} />
      <main className="bg-[#0E0F11] min-h-screen pt-24 text-white font-sans selection:bg-pink-500/30">
        
        {/* Section 1: Hero */}
        {/* Adjusted padding to lift content up, removing centering flex to ensure it starts at the right visual anchor */}
        <section className="pt-20 pb-16 md:pt-32 md:pb-20 border-none relative">
          <div className="max-w-[800px] mx-auto px-6 text-center md:text-left">
            <motion.div 
              initial="initial" 
              animate="animate" 
              variants={fadeInUp}
              className="flex flex-col md:items-start items-center"
            >
              <div className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wide text-gray-300 uppercase bg-white/5 border border-white/10 rounded-full">
                How It Works
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight max-w-4xl">
                An AI-native operating layer for real organizations
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed mb-8 font-light">
                Phenomeny embeds intelligence directly into how work is observed, coordinated, and executed — without replacing systems or breaking governance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                {/* Primary CTA - Styled to match Homepage Hero */}
                <Link
                  to="/contact"
                  className="w-full sm:w-auto min-h-[44px] px-4 py-2 text-sm md:px-6 md:py-2.5 md:text-base lg:px-7 lg:py-3 rounded-xl bg-gradient-to-r from-[#FF4ECD] to-[#7B5CFF] font-semibold text-white shadow-[0_0_20px_-5px_rgba(255,78,205,0.3)] hover:shadow-[0_0_25px_-5px_rgba(255,78,205,0.5)] flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-95"
                >
                  Discuss your business setup
                  <ArrowRight className="w-4 h-4" />
                </Link>
                {/* Secondary CTA - Styled to match Homepage Hero */}
                <Link 
                  to="/contact"
                  className="w-full sm:w-auto min-h-[44px] px-4 py-2 text-sm md:px-6 md:py-2.5 md:text-base lg:px-7 lg:py-3 rounded-xl bg-[#1A1D21] border border-white/10 font-medium text-white hover:bg-[#222529] hover:border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-[1.02] active:scale-95"
                >
                  Executive briefing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Departmental AI Assistants */}
        <Section>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-pink-500 font-bold uppercase tracking-wider text-sm mb-4 block">
              Department-level intelligence
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              AI Assistants™ aligned to real work, not generic tasks
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
              <p>
                We deploy specialized AI Assistants™ for specific organizational functions—Operations, Finance, R&D, and Leadership. Unlike generic chatbots, these assistants are configured with bounded scope, strict permissions, and deep context awareness relevant to their department. They understand the difference between a draft invoice and a final approval, or a prototype spec and a production requirement.
              </p>
              <p>
                By preserving context within the function, these assistants dramatically increase productivity. They handle routine coordination, data retrieval, and preliminary analysis without needing constant prompting. This reduces the coordination overhead that typically slows down large teams, ensuring continuity of knowledge even as staff changes or shifts occur.
              </p>
            </div>
          </motion.div>
        </Section>

        {/* Section 3: From Individual to Organizational Intelligence */}
        <Section>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              When assistants connect, the organization learns
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
              <p>
                Individual productivity is valuable, but organizational intelligence is transformative. Phenomeny creates a layer where these departmental assistants share context. When an R&D assistant logs a new material specification, the Operations assistant immediately recognizes the implication for supply chain lead times.
              </p>
              <p>
                This shared context creates unified visibility across the enterprise. It allows for connected operations where decisions in one unit inform actions in another, without manual reporting. It enables assisted execution where the system proactively flags misalignments before they become errors. This is contextual linkage, not centralization—allowing departments to run fast while staying aligned.
              </p>
            </div>
          </motion.div>
        </Section>

        {/* Section 4: Unified Visibility Without Centralization */}
        <Section>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              Clarity without forcing everyone into one system
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
              <p>
                Most transformation efforts fail because they try to force every team into a single "all-in-one" platform. Phenomeny takes a different approach. Our operating layer observes work across your existing ERPs, CRMs, R&D tools, and internal legacy systems. We don't need to replace them to understand them.
              </p>
              <p>
                We connect meaning, not just interfaces. By reading the signals from these disparate tools, Phenomeny constructs a coherent picture of operational health. We don't claim to replace your specialized tools; we simply ensure they aren't creating blind spots. You get clarity on the state of your business without the disruption of a massive migration.
              </p>
            </div>
          </motion.div>
        </Section>

        {/* Section 5: Assisted Execution, Not Autonomy */}
        <Section>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              AI supports action — humans retain control
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
              <p>
                We believe in assisted execution, not unchecked autonomy. In the Phenomeny model, AI supports action by preparing the data, proposing the path, and flagging risks—but humans retain control over key decisions. We implement strict permission boundaries and clear escalation paths for every automated workflow.
              </p>
              <p>
                There are no black-box decisions. Every suggestion made by an AI Assistant™ comes with a traceable lineage of why it was made. This conservative, safety-first approach ensures that your organization remains compliant and predictable, even as it becomes faster and more intelligent.
              </p>
            </div>
          </motion.div>
        </Section>

        {/* Section 6: Real-World Applications */}
        <Section>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-tight">
              How this works in practice
            </h2>
            
            <div className="mb-10">
              <h3 className="text-xl font-bold text-white mb-3">Advanced engineering systems</h3>
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                In complex engineering environments, accelerating convergence is critical. Phenomeny helps teams navigate trade-off spaces by preserving constraints and engineering reasoning throughout the design process. Similar to the computational engineering approaches pioneered by Leap71, we ensure that as designs evolve, the fundamental physical and operational constraints are respected, drastically reducing iteration cycles.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">Chemical R&D & PU formulation intelligence</h3>
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                For chemical R&D, specifically in Polyurethane formulation, capturing the logic behind experiments is as valuable as the result. Our system preserves experimental reasoning, allowing scientists to build on past context rather than repeating it. This has demonstrated 7.8× productivity gains in formulation speed and enabled the development of more sustainable products by intelligently navigating chemical search spaces.
              </p>
            </div>
          </motion.div>
        </Section>

        {/* Section 7: Organizational Impact */}
        <Section>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              What changes over time
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
              <p>
                Deploying Phenomeny changes the fundamental resilience of your organization. Over time, you see a significantly reduced dependency on specific individuals to keep processes moving. Knowledge becomes institutional rather than tribal, leading to faster onboarding for new team members and reduced disruption during turnover.
              </p>
              <p>
                Decision quality improves because leaders are looking at the whole picture, not just their silo's slice. Most importantly, operational risk decreases even as complexity increases. You gain the ability to scale your operations without scaling the chaos that usually accompanies growth.
              </p>
            </div>
          </motion.div>
        </Section>

        {/* Section 8: Closing CTA */}
        <section className="py-24 md:py-32 border-t border-white/5 relative">
          <div className="max-w-[800px] mx-auto px-6 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 tracking-tight">
                Apply this to your environment
              </h2>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link 
                  to="/contact" 
                  className="w-full sm:w-auto min-h-[44px] px-4 py-2 text-sm md:px-6 md:py-2.5 md:text-base lg:px-7 lg:py-3 rounded-xl bg-gradient-to-r from-[#FF4ECD] to-[#7B5CFF] font-semibold text-white shadow-[0_0_20px_-5px_rgba(255,78,205,0.3)] hover:shadow-[0_0_25px_-5px_rgba(255,78,205,0.5)] flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-95"
                >
                  Discuss your business setup
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/contact" 
                  className="w-full sm:w-auto min-h-[44px] px-4 py-2 text-sm md:px-6 md:py-2.5 md:text-base lg:px-7 lg:py-3 rounded-xl bg-[#1A1D21] border border-white/10 font-medium text-white hover:bg-[#222529] hover:border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-[1.02] active:scale-95"
                >
                  Executive briefing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HowItWorks;