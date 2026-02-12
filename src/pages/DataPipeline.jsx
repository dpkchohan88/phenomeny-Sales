import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Activity, 
  GitBranch, 
  MousePointerClick, 
  MessageSquare, 
  LayoutTemplate, 
  BookOpen, 
  Filter, 
  CheckCircle2, 
  Binary, 
  Network, 
  Search, 
  Database, 
  RefreshCw, 
  History, 
  BarChart3, 
  Shield, 
  Split, 
  Lock, 
  Key, 
  EyeOff, 
  FileSearch, 
  Ban, 
  LayoutDashboard, 
  Radio, 
  Bot, 
  Lightbulb, 
  Settings, 
  FastForward, 
  ShieldCheck, 
  ArrowRight,
  Layers,
  Brain
} from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { seoMetadata } from '@/config/seoMetadata';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// --- Shared Components ---

const Badge = ({ text, color = "purple" }) => {
  const colors = {
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    pink: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    blue: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    green: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
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
        colors[color] || colors.purple
      )}>
        <Zap size={12} />
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
      variant === "purple" && "bg-purple-900/5 border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-900/10",
      variant === "pink" && "bg-pink-900/5 border-pink-500/20 hover:border-pink-500/40 hover:bg-pink-900/10",
      variant === "default" && "bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20",
      className
    )}
  >
    <div className="relative z-10">
      {Icon && (
        <div className={cn(
          "w-12 h-12 rounded-xl border flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110",
          variant === "blue" && "bg-sky-500/10 border-sky-500/20 text-sky-400",
          variant === "purple" && "bg-purple-500/10 border-purple-500/20 text-purple-400",
          variant === "pink" && "bg-pink-500/10 border-pink-500/20 text-pink-400",
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

const DataPipeline = () => {
  return (
    <>
      <SEOHead {...(seoMetadata['/capabilities/data-pipeline'] || {})} />
      
      <main className="bg-[#0E0F11] text-white overflow-hidden w-full font-sans">
        
        {/* 1. HERO SECTION */}
        <section className="relative pt-40 pb-20 px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[800px] h-[500px] bg-sky-900/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <Badge text="Capabilities" color="purple" />
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight"
            >
              Data Pipeline <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Real-time ingestion & normalization
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Feed your AI systems with clean, normalized, and embedded data in real-time. 
              Transform chaotic event streams into a structured source of truth that drives intelligent action.
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

        {/* 2. WHY PIPELINES BREAK */}
        <section className="py-20 px-6 bg-[#13151A] border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Why data pipelines break in enterprise environments</h2>
            <p className="text-gray-400 text-lg mb-12 text-center leading-relaxed">
              Traditional ETL isn't built for the speed of AI. When data lags, intelligence fails.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              {[
                { title: "Batch Processing", desc: "Waiting for nightly jobs means your AI is always making decisions on yesterday's reality.", icon: RefreshCw },
                { title: "Periodic Analytics", desc: "Summarized reports strip away the rich context needed for granular AI reasoning.", icon: BarChart3 },
                { title: "Historical Summaries", desc: "Flattening complex signals into simple averages hides critical operational nuance.", icon: History }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 p-6 rounded-xl border border-white/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 mb-4 border border-pink-500/20">
                     <item.icon size={20} />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center border-t border-white/10 pt-8">
               <p className="text-red-400/80 font-medium">Result: Data arrives late</p>
               <p className="text-red-400/80 font-medium">Result: Context is stripped away</p>
               <p className="text-red-400/80 font-medium">Result: Signals are flattened</p>
            </div>
          </div>
        </section>

        {/* 3. REAL-TIME INGESTION */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Real-time ingestion across systems" 
              subheading="We connect to the pulse of your business, capturing events as they happen, millisecond by millisecond."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard 
                title="System Events"
                description="Server logs, API triggers, and infrastructure status updates captured instantly."
                icon={Activity}
                variant="purple"
                delay={0}
              />
              <GlassCard 
                title="Workflow State Changes"
                description="Track when a ticket moves to 'Done' or a deal enters 'Negotiation'."
                icon={GitBranch}
                variant="purple"
                delay={0.1}
              />
              <GlassCard 
                title="User Actions"
                description="Capture clicks, approvals, edits, and navigation events across your platform."
                icon={MousePointerClick}
                variant="purple"
                delay={0.2}
              />
              <GlassCard 
                title="Messages & Documents"
                description="Ingest Slack threads, emails, and PDF uploads the moment they are created."
                icon={MessageSquare}
                variant="purple"
                delay={0.3}
              />
            </div>
          </div>
        </section>

        {/* 4. NORMALIZATION */}
        <section className="py-20 px-6 bg-gradient-to-b from-[#0E0F11] to-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Normalization for consistency and reliability" 
              subheading="Raw data is messy. We clean, map, and structure it into a unified schema before it ever reaches your AI models."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard title="Shared Structure" description="Map disparate JSON schemas from 50 tools into one common object model." icon={LayoutTemplate} variant="blue" />
              <GlassCard title="Aligned Terminology" description="Ensure 'Client', 'Customer', and 'Account' all map to the same entity concept." icon={BookOpen} variant="blue" />
              <GlassCard title="Reduced Noise" description="Filter out heartbeat pings and irrelevant log lines that distract models." icon={Filter} variant="blue" />
              <GlassCard title="Consistent Signals" description="Standardize timestamps, units, and formats across all data sources." icon={CheckCircle2} variant="blue" />
            </div>
          </div>
        </section>

        {/* 5. EMBEDDING STREAMS */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Embedding streams for semantic understanding" 
              subheading="We don't just store text; we store meaning. Real-time vectorization turns data into understanding."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard title="Semantic Representation" description="Convert text, code, and logs into high-dimensional vector embeddings." icon={Binary} variant="pink" />
              <GlassCard title="Preserve Relationships" description="Capture the conceptual link between a Jira bug and a GitHub PR." icon={Network} variant="pink" />
              <GlassCard title="Similarity-based Retrieval" description="Find relevant context based on meaning, not just keyword matching." icon={Search} variant="pink" />
              <GlassCard title="Feed Context Memory" description="Stream vectors directly into long-term memory stores for retrieval." icon={Database} variant="pink" />
            </div>
          </div>
        </section>

        {/* 6. CONTINUOUS FLOW INTO CONTEXT MEMORY */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Continuous flow into Context Memory" 
              subheading="The pipeline isn't a destination; it's a feeder system for your enterprise brain."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard title="Context Updated" description="As new data arrives, the AI's understanding of the 'now' is instantly refreshed." icon={RefreshCw} />
              <GlassCard title="State Refreshed" description="Old assumptions are discarded as live signals contradict outdated states." icon={Zap} />
              <GlassCard title="Historical Understanding" description="Every event adds a layer of depth to the long-term institutional memory." icon={History} />
            </div>
          </div>
        </section>

        {/* 7. DESIGNED FOR SCALE AND RESILIENCE */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Designed for scale and resilience" 
              subheading="Built on event-driven architecture to handle spikes without dropping a single packet."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard title="High-Volume Streams" description="Process millions of events per minute without latency degradation." icon={BarChart3} variant="purple" />
              <GlassCard title="Graceful Degradation" description="If one connector fails, the rest of the pipeline continues uninterrupted." icon={Shield} variant="purple" />
              <GlassCard title="Isolated Failures" description="Bad data in one stream acts as a blast door, protecting the wider system." icon={Split} variant="purple" />
              <GlassCard title="Maintain Integrity" description="Exact-once processing guarantees ensures accurate financial and audit data." icon={Lock} variant="purple" />
            </div>
          </div>
        </section>

        {/* 8. GOVERNED DATA FLOW */}
        <section className="py-20 px-6 bg-gradient-to-t from-[#0E0F11] to-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Governed data flow" 
              subheading="Security isn't an afterthought. It's baked into every ingestion point."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard title="Ingestion Permissions" description="Strictly control which services are allowed to push data into the pipeline." icon={Key} variant="default" />
              <GlassCard title="Sensitive Data Protection" description="PII detection runs at the edge, masking data before it enters storage." icon={EyeOff} variant="default" />
              <GlassCard title="Auditable Processing" description="Trace the lineage of every data point back to its original source." icon={FileSearch} variant="default" />
              <GlassCard title="No Unauthorized Replication" description="Prevent data from being copied to unapproved sinks or external endpoints." icon={Ban} variant="default" />
            </div>
          </div>
        </section>

        {/* 9. ENABLING DOWNSTREAM INTELLIGENCE */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title="Enabling downstream intelligence" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard title="Unified Dashboards" description="Power live executive views with data that is seconds old, not days." icon={LayoutDashboard} variant="blue" />
              <GlassCard title="Workflow AI" description="Trigger agents to act immediately when specific data conditions are met." icon={GitBranch} variant="blue" />
              <GlassCard title="Signal Intelligence" description="Detect anomalies and risks in real-time streams before they escalate." icon={Radio} variant="blue" />
              <GlassCard title="AI Assistants" description="Give chat bots access to the absolute latest company information." icon={Bot} variant="blue" />
            </div>
          </div>
        </section>

        {/* 10. WHAT THE DATA PIPELINE ENABLES */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title="What the Data Pipeline enables" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard title="Up-to-date Intelligence" description="Decisions are made on current facts, eliminating the 'stale data' penalty." icon={Lightbulb} />
              <GlassCard title="Reduced Manual Prep" description="Stop spending 80% of your time cleaning data. Let the pipeline do it." icon={Settings} />
              <GlassCard title="Faster Response" description="Move from reactive reporting to proactive, real-time intervention." icon={FastForward} />
              <GlassCard title="Confidence in AI" description="Trust your models because you trust the clean data feeding them." icon={ShieldCheck} />
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
                title="Context Memory" 
                description="See how normalized data is stored for long-term recall." 
                href="/capabilities/context-memory" 
                icon={Database} 
              />
              <PageCard 
                title="Model Intelligence" 
                description="Explore the reasoning engines that consume this data." 
                href="/capabilities/model-intelligence" 
                icon={Brain} 
              />
              <PageCard 
                title="AI-Native Operating Layer" 
                description="Understand the architecture unifying these streams." 
                href="/ai-native-operating-layer" 
                icon={Layers} 
              />
              <PageCard 
                title="Discuss a transformation" 
                description="Talk to our engineers about your data infrastructure." 
                href="/contact" 
                icon={ArrowRight} 
              />
            </div>
          </div>
        </section>

        {/* 12. FINAL CTA */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-3xl p-12 text-center border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to build intelligence on real-time data?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Stop feeding your advanced AI models with yesterday's stale data.
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

export default DataPipeline;