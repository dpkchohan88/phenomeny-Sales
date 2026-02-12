import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Database, 
  Search, 
  GitBranch, 
  History, 
  Users, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  Layers, 
  FileText,
  Network,
  Cpu,
  Lock,
  RefreshCw,
  HardDrive
} from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { seoMetadata } from '@/config/seoMetadata';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// --- Shared Components ---

const Badge = ({ text, color = "violet" }) => {
  const colors = {
    violet: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    pink: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    blue: "bg-sky-500/10 text-sky-400 border-sky-500/20",
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex justify-center mb-6"
    >
      <span className={cn(
        "px-3 py-1 rounded-full border text-[11px] font-bold uppercase tracking-widest backdrop-blur-sm flex items-center gap-2",
        colors[color] || colors.violet
      )}>
        <Brain size={12} />
        {text}
      </span>
    </motion.div>
  );
};

const SectionHeading = ({ title, subheading, className }) => (
  <div className={cn("text-center max-w-4xl mx-auto mb-16", className)}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
    >
      {title}
    </motion.h2>
    {subheading && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
      >
        {subheading}
      </motion.p>
    )}
  </div>
);

const GlassCard = ({ title, description, icon: Icon, className, delay = 0, variant = "default" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.4 }}
    whileHover={{ y: -5, scale: 1.02 }}
    className={cn(
      "p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 group h-full flex flex-col relative overflow-hidden shadow-lg hover:shadow-2xl",
      variant === "blue" && "bg-sky-900/5 border-sky-500/20 hover:border-sky-500/40 hover:bg-sky-900/10",
      variant === "violet" && "bg-violet-900/5 border-violet-500/20 hover:border-violet-500/40 hover:bg-violet-900/10",
      variant === "green" && "bg-emerald-900/5 border-emerald-500/20 hover:border-emerald-500/40 hover:bg-emerald-900/10",
      variant === "default" && "bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20",
      className
    )}
  >
    <div className="relative z-10">
      {Icon && (
        <div className={cn(
          "w-12 h-12 rounded-xl border flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110",
          variant === "blue" && "bg-sky-500/10 border-sky-500/20 text-sky-400",
          variant === "violet" && "bg-violet-500/10 border-violet-500/20 text-violet-400",
          variant === "green" && "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
          variant === "default" && "bg-white/5 border-white/10 text-gray-200"
        )}>
          <Icon size={24} strokeWidth={1.5} />
        </div>
      )}
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm">{description}</p>
    </div>
  </motion.div>
);

const PageCard = ({ title, description, href, icon: Icon }) => (
  <a href={href} className="block group h-full">
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-6 rounded-2xl border border-white/10 bg-[#13151A] hover:border-pink-500/30 transition-all h-full flex flex-col relative"
    >
      <div className="mb-4 text-pink-400 group-hover:text-pink-300 transition-colors">
        <Icon size={28} strokeWidth={1.5} />
      </div>
      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-pink-400 transition-colors flex items-center gap-2">
        {title} <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
      </h3>
      <p className="text-sm text-gray-400">{description}</p>
    </motion.div>
  </a>
);

const ContextMemory = () => {
  return (
    <>
      <SEOHead {...(seoMetadata['/capabilities/context-memory'] || {})} />
      
      <main className="bg-[#0E0F11] text-white overflow-hidden w-full font-sans">
        
        {/* 1. HERO SECTION */}
        <section className="relative pt-40 pb-20 px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-violet-900/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[800px] h-[500px] bg-pink-900/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <Badge text="Capabilities" color="violet" />
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight"
            >
              Context Memory <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">
                Vector-Based Retrieval & Semantic State
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Move beyond the limitations of finite context windows. Give your AI agents durable, 
              institutional knowledge that grows with your business and persists across every interaction.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="bg-[#EC4899] hover:bg-[#db2777] text-white rounded-full px-8 h-14 text-lg font-bold shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all hover:scale-105">
                Learn more
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5 hover:text-white rounded-full px-8 h-14 text-lg font-medium text-gray-300">
                Contact Sales
              </Button>
            </motion.div>
          </div>
        </section>

        {/* 2. WHY MEMORY IS THE LIMITATION */}
        <section className="py-20 px-6 bg-[#13151A] border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Why Memory Is the Real Limitation of Enterprise AI</h2>
            <p className="text-gray-400 text-lg mb-12 text-center leading-relaxed">
              Standard LLMs are amnesic. They reset after every session. To build true business value, AI needs to remember policies, past decisions, and user preferences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              {[
                { title: "Finite Context Windows", desc: "Even 'large' context windows are expensive and slow when filled with irrelevant documents." },
                { title: "Institutional Amnesia", desc: "Without memory, AI cannot learn from mistakes or adapt to changing business rules over time." },
                { title: "Hallucination Risk", desc: "Forcing models to 'guess' due to lack of retrieved context leads to confident errors." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 p-6 rounded-xl border border-white/10"
                >
                  <div className="w-2 h-2 rounded-full bg-pink-500 mb-4" />
                  <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-violet-400 font-medium">
              Phenomeny solves this by decoupling memory from the model.
            </p>
          </div>
        </section>

        {/* 3. DYNAMIC RETRIEVAL (RAG) */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Dynamic Retrieval (RAG)" 
              subheading="We turn your static documentation into active intelligence using advanced Retrieval-Augmented Generation."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard 
                title="Semantic Search"
                description="Find information by meaning, not just keywords. Matches 'how do I reset?' with 'password recovery procedures'."
                icon={Search}
                variant="violet"
                delay={0}
              />
              <GlassCard 
                title="Hybrid Ranking"
                description="Combines dense vector search with sparse keyword matching (BM25) for maximum retrieval accuracy."
                icon={Layers}
                variant="violet"
                delay={0.1}
              />
              <GlassCard 
                title="Metadata Filtering"
                description="Filter context by date, author, or department before the vector search even begins."
                icon={Database}
                variant="violet"
                delay={0.2}
              />
            </div>
          </div>
        </section>

        {/* 4. SEMANTIC STATE MANAGEMENT */}
        <section className="py-20 px-6 bg-gradient-to-b from-[#0E0F11] to-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Semantic State Management" 
              subheading="Beyond documents, we track the 'state' of your business objects and workflows."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard title="Session State" description="Remembers what was said 5 minutes ago in the current chat." icon={History} variant="blue" />
              <GlassCard title="User State" description="Tracks user preferences and role-specific constraints across sessions." icon={Users} variant="blue" />
              <GlassCard title="Global State" description="Maintains organization-wide facts (e.g., 'Maintenance Mode is ON')." icon={Globe} variant="blue" />
              <GlassCard title="Workflow State" description="Persists the progress of multi-step agents (e.g., 'Step 3 of 5 completed')." icon={GitBranch} variant="blue" />
            </div>
          </div>
        </section>

        {/* 5. KNOWLEDGE GRAPHS */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Structured Knowledge Graphs" 
              subheading="Connecting the dots. We map relationships between entities to understand the 'why' and 'how'."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard title="Entity Linking" description="Identifies that 'Project Apollo' implies 'Q3 Deadline' and 'Engineering Team'." icon={Network} variant="green" />
              <GlassCard title="Conflict Detection" description="Flags when a new document contradicts an established policy node." icon={ShieldCheck} variant="green" />
              <GlassCard title="Causal Reasoning" description="Helps agents understand dependencies (A must happen before B)." icon={Brain} variant="green" />
            </div>
          </div>
        </section>

        {/* 6. EPHEMERAL VS DURABLE */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Ephemeral vs. Durable Memory" 
              subheading="Smart data lifecycle management ensures the right information is kept for the right duration."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard title="Working Memory" description="High-speed cache for immediate task context. Cleared post-task." icon={Zap} />
              <GlassCard title="Episodic Memory" description="Logs of past events and interactions for historical reference." icon={History} />
              <GlassCard title="Semantic Memory" description="Long-term storage of facts, definitions, and world knowledge." icon={HardDrive} />
              <GlassCard title="Procedural Memory" description="Stored 'muscle memory' of how to execute specific tools or APIs." icon={Cpu} />
            </div>
          </div>
        </section>

        {/* 7. USER PERSONALIZATION */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Hyper-Personalization at Scale" 
              subheading="Every user gets a tailored experience based on their history and role."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard title="Adaptive Tone" description="Agents learn if a user prefers concise data or detailed explanations." icon={Users} variant="violet" />
              <GlassCard title="Role Awareness" description="A CFO gets financial context; a CTO gets technical context from the same query." icon={Briefcase} variant="violet" />
              <GlassCard title="Proactive Context" description="Agents anticipate needs based on previous patterns of behavior." icon={Brain} variant="violet" />
            </div>
          </div>
        </section>

        {/* 8. CROSS-SESSION CONTINUITY */}
        <section className="py-20 px-6 bg-gradient-to-t from-[#0E0F11] to-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Cross-Session Continuity" 
              subheading="Pick up exactly where you left off, even weeks later or on a different device."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard title="Universal Sync" description="State is synchronized across web, mobile, and API interfaces." icon={RefreshCw} variant="blue" />
              <GlassCard title="Context Hydration" description="Instantly re-loads relevant past context when a topic re-emerges." icon={Zap} variant="blue" />
              <GlassCard title="Summary Compression" description="Old sessions are summarized into compact vectors to save space." icon={FileText} variant="blue" />
              <GlassCard title="Topic threading" description="Automatically groups disparate conversations by subject matter." icon={Layers} variant="blue" />
            </div>
          </div>
        </section>

        {/* 9. INFORMATION GOVERNANCE */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Information Governance" 
              subheading="Memory is powerful. We ensure it respects security boundaries."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard title="Vector ACLs" description="Access Control Lists applied directly to memory chunks." icon={Lock} variant="green" />
              <GlassCard title="Tenant Isolation" description="Strict physical separation of vector indexes between customers." icon={ShieldCheck} variant="green" />
              <GlassCard title="Right to Forget" description="One-click purging of specific memories or entire user histories." icon={Trash2} variant="green" />
              <GlassCard title="PII Redaction" description="Automatically detects and masks sensitive data before storage." icon={EyeOff} variant="green" />
            </div>
          </div>
        </section>

        {/* 10. PERFORMANCE AT SCALE */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title="Performance at Scale" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard title="Sub-50ms Latency" description="Optimized indexing ensures retrieval doesn't slow down the chat experience." icon={Zap} />
              <GlassCard title="Billion-Scale Support" description="Architecture tested on indices with over 1 billion vectors." icon={Database} />
              <GlassCard title="Incremental Updates" description="Add new documents in real-time without rebuilding the entire index." icon={RefreshCw} />
            </div>
          </div>
        </section>

        {/* 11. CONTINUE EXPLORING */}
        <section className="py-20 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <Badge text="Next steps" color="pink" />
              <h2 className="text-3xl font-bold text-white">Continue Exploring</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PageCard 
                title="Model Intelligence" 
                description="See how we orchestrate the models that use this memory." 
                href="/capabilities/model-intelligence" 
                icon={Brain} 
              />
              <PageCard 
                title="AI-Native Operating Layer" 
                description="Understand the architecture connecting memory to action." 
                href="/ai-native-operating-layer" 
                icon={Layers} 
              />
              <PageCard 
                title="Security, Governance & Control" 
                description="Learn how we secure your vector data." 
                href="/ai-resources/security-compliance" 
                icon={ShieldCheck} 
              />
              <PageCard 
                title="Discuss a transformation" 
                description="Talk to our engineers about your data needs." 
                href="/contact" 
                icon={ArrowRight} 
              />
            </div>
          </div>
        </section>

        {/* 12. FINAL CTA */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-violet-900/20 to-pink-900/20 rounded-3xl p-12 text-center border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to build memory into your AI systems?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Stop starting from zero with every interaction. Give your enterprise the memory it deserves.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[#EC4899] hover:bg-[#db2777] text-white rounded-full px-8 py-6 text-lg font-bold shadow-lg transition-all hover:scale-105">
                  Contact Sales
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white rounded-full px-8 py-6 text-lg font-medium">
                  Request demo
                </Button>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

// Icon imports for specific sections not in top import
import { Briefcase, Trash2, EyeOff, Globe } from 'lucide-react';

export default ContextMemory;