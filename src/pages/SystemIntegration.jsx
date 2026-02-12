import React from 'react';
import { motion } from 'framer-motion';
import { 
  Plug, 
  Database, 
  Layers, 
  Settings, 
  RefreshCw, 
  Link2, 
  ShieldCheck, 
  Activity, 
  GitBranch, 
  Lock, 
  Eye, 
  FileSearch, 
  Zap, 
  Globe, 
  Server, 
  Code2, 
  Share2, 
  Box, 
  CheckCircle2, 
  ArrowRight,
  Workflow,
  Rocket
} from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { seoMetadata } from '@/config/seoMetadata';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// --- Shared Components ---

const Badge = ({ text, color = "blue" }) => {
  const colors = {
    blue: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    pink: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    violet: "bg-purple-500/10 text-purple-400 border-purple-500/20",
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
        colors[color] || colors.blue
      )}>
        <Plug size={12} />
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
      variant === "pink" && "bg-pink-900/5 border-pink-500/20 hover:border-pink-500/40 hover:bg-pink-900/10",
      variant === "violet" && "bg-purple-900/5 border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-900/10",
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
          variant === "pink" && "bg-pink-500/10 border-pink-500/20 text-pink-400",
          variant === "violet" && "bg-purple-500/10 border-purple-500/20 text-purple-400",
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

const BottomStatement = ({ text, color = "blue" }) => {
  const textColors = {
    blue: "text-sky-200/90",
    green: "text-emerald-200/90",
    violet: "text-purple-200/90",
    pink: "text-pink-200/90"
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-center mt-12 pt-8 border-t border-white/5 w-full max-w-4xl mx-auto"
    >
      <p className={cn("text-xl font-medium", textColors[color] || textColors.blue)}>
        {text}
      </p>
    </motion.div>
  );
};

const SystemIntegration = () => {
  return (
    <>
      <SEOHead {...(seoMetadata['/capabilities/system-integration'] || {})} />
      
      <main className="bg-[#0E0F11] text-white overflow-hidden w-full font-sans">
        
        {/* 1. HERO SECTION */}
        <section className="relative pt-40 pb-20 px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-sky-900/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[800px] h-[500px] bg-indigo-900/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <Badge text="Capabilities" color="blue" />
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight"
            >
              System Integration <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
                Deep API connectors for enterprise stacks
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Bridge the gap between your legacy infrastructure and modern AI. 
              We provide secure, deep, and bidirectional connectivity to your most critical ERP, CRM, and database systems.
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

        {/* 2. WHY INTEGRATION IS THE REAL CONSTRAINT */}
        <section className="py-20 px-6 bg-[#13151A] border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Why integration is the real constraint</h2>
            <p className="text-gray-400 text-lg mb-12 text-center leading-relaxed">
              AI models are only as good as the systems they can access. Most AI projects fail because they remain isolated chatbots, unable to touch the real data.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-10">
              {[
                { title: "Siloed Data", desc: "Customer data lives in CRM, billing in ERP, and tickets in support tools." },
                { title: "Fragile APIs", desc: "Legacy SOAP endpoints and undocumented REST APIs are hard to automate." },
                { title: "Authentication Complexity", desc: "Handling OAuth flows, token rotation, and SSO for agents is non-trivial." },
                { title: "Write Safety", desc: "Reading data is easy; writing back to the system of record requires transaction safety." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 shrink-0" />
                  <div>
                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-indigo-400 font-medium">
              Our System Integration layer turns your entire stack into a unified API for AI.
            </p>
          </div>
        </section>

        {/* 3. BUILT FOR ENTERPRISE-GRADE SYSTEMS */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Built for enterprise-grade systems" 
              subheading="Connect to the tools that run your business, not just the easy ones."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard 
                title="ERP Systems" 
                description="SAP, Oracle NetSuite, Microsoft Dynamics 365, Workday."
                icon={Server}
                variant="blue"
              />
              <GlassCard 
                title="CRM & Sales" 
                description="Salesforce, HubSpot, Pipedrive, Zoho CRM."
                icon={Globe}
                variant="blue"
              />
              <GlassCard 
                title="Databases" 
                description="PostgreSQL, MySQL, Snowflake, MongoDB, BigQuery."
                icon={Database}
                variant="blue"
              />
              <GlassCard 
                title="Custom APIs" 
                description="Connect to proprietary internal microservices and legacy mainframes."
                icon={Code2}
                variant="blue"
              />
            </div>
          </div>
        </section>

        {/* 4. DEEP API CONNECTIVITY */}
        <section className="py-20 px-6 bg-gradient-to-b from-[#0E0F11] to-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Deep API connectivity, not surface-level sync" 
              subheading="We don't just scrape screens. We integrate at the protocol level."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard title="Full CRUD Operations" description="Create, Read, Update, and Delete records with full validation logic." icon={Database} variant="violet" />
              <GlassCard title="Webhooks & Events" description="Listen for real-time changes instead of polling every 5 minutes." icon={Zap} variant="violet" />
              <GlassCard title="Bulk Operations" description="Handle high-volume data syncs without hitting API rate limits." icon={Layers} variant="violet" />
              <GlassCard title="Rate Limit Handling" description="Intelligent backoff and retry logic built into every connector." icon={Activity} variant="violet" />
            </div>
          </div>
        </section>

        {/* 5. CONTEXT PRESERVED ACROSS SYSTEMS */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Context preserved across systems" 
              subheading="Data doesn't lose meaning when it moves between tools."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard title="Entity Mapping" description="Understand that 'Account ID' in Salesforce matches 'Billing ID' in Stripe." icon={Link2} variant="green" />
              <GlassCard title="Semantic Layers" description="Add business meaning to raw database column names." icon={FileSearch} variant="green" />
              <GlassCard title="Unified Identity" description="Track user actions across different logins and system accounts." icon={ShieldCheck} variant="green" />
              <GlassCard title="Relationship Graph" description="Maintain the web of connections between tickets, deals, and customers." icon={Share2} variant="green" />
            </div>
          </div>
        </section>

        {/* 6. SAFE INTERACTION WITH CORE RECORDS */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Safe interaction with core records" 
              subheading="Protect your system of record from AI hallucinations and errors."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard title="Dry Run Mode" description="Simulate API calls to see what would happen without changing data." icon={Eye} variant="default" />
              <GlassCard title="Automatic Rollback" description="If a multi-step transaction fails halfway, revert all changes." icon={RefreshCw} variant="default" />
              <GlassCard title="Permission Scopes" description="Grant agents only the specific access they need, nothing more." icon={Lock} variant="default" />
              <GlassCard title="Approval Gates" description="Require human confirmation before writing to sensitive fields." icon={CheckCircle2} variant="default" />
            </div>
            <BottomStatement text="Safety first, automation second." color="blue" />
          </div>
        </section>

        {/* 7. EVENT-DRIVEN INTEGRATION */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Event-driven integration for real-time operations" 
              subheading="Stop polling. Start reacting."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard title="Instant Triggers" description="Kick off workflows the millisecond a new lead arrives or a server goes down." icon={Zap} variant="blue" />
              <GlassCard title="Asynchronous Processing" description="Decouple systems so a slow ERP doesn't hang your fast chatbot." icon={GitBranch} variant="blue" />
              <GlassCard title="Event Replay" description="Recover from outages by replaying missed events from the log." icon={RefreshCw} variant="blue" />
            </div>
          </div>
        </section>

        {/* 8. DESIGNED TO EVOLVE WITH YOUR STACK */}
        <section className="py-20 px-6 bg-gradient-to-t from-[#0E0F11] to-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Designed to evolve with your stack" 
              subheading="Software changes. Your integrations shouldn't break."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard title="Version Control" description="Manage integration schemas like code with git-backed versioning." icon={GitBranch} variant="violet" />
              <GlassCard title="Schema Monitoring" description="Get alerted when a downstream API changes its response format." icon={Activity} variant="violet" />
              <GlassCard title="Modular Connectors" description="Swap out your CRM without rewriting all your AI agent logic." icon={Box} variant="violet" />
              <GlassCard title="Custom Extensions" description="Write your own connectors in Node.js or Python for bespoke tools." icon={Code2} variant="violet" />
            </div>
          </div>
        </section>

        {/* 9. GOVERNANCE AND AUDITABILITY BUILT IN */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title="Governance and auditability built in" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
               <GlassCard title="Full Audit Logs" description="Every API call is logged with request, response, and user context." icon={FileSearch} />
               <GlassCard title="PII Redaction" description="Automatically mask sensitive data in logs and debug traces." icon={Eye} />
               <GlassCard title="Policy Enforcement" description="Block data exfiltration attempts automatically at the gateway." icon={ShieldCheck} />
            </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="bg-white/5 p-4 rounded-xl text-center border border-white/10">
                 <span className="text-gray-400 text-sm">See WHO called the API</span>
               </div>
               <div className="bg-white/5 p-4 rounded-xl text-center border border-white/10">
                 <span className="text-gray-400 text-sm">See WHAT data was changed</span>
               </div>
               <div className="bg-white/5 p-4 rounded-xl text-center border border-white/10">
                 <span className="text-gray-400 text-sm">See WHEN it happened</span>
               </div>
            </div>
          </div>
        </section>

        {/* 10. WHAT SYSTEM INTEGRATION ENABLES */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title="What System Integration enables" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
              <GlassCard title="End-to-End Automation" description="Automate processes that span 5 different departments and 10 different tools." icon={Rocket} />
              <GlassCard title="Unified Customer View" description="Give agents a 360-degree view of the customer from all systems." icon={Globe} />
              <GlassCard title="Legacy Modernization" description="Give your 20-year-old ERP a modern REST API face for AI consumers." icon={Server} />
              <GlassCard title="Faster Dev Cycles" description="Stop writing boilerplate integration glue code. Focus on logic." icon={Code2} />
              <GlassCard title="Operational Agility" description="Change underlying tools without breaking your business processes." icon={RefreshCw} />
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
                title="Agent Workflows" 
                description="See how agents use these integrations to execute tasks." 
                href="/capabilities/agent-workflows" 
                icon={Workflow} 
              />
              <PageCard 
                title="Data Pipeline" 
                description="Understand how data is ingested before it's acted upon." 
                href="/capabilities/data-pipeline" 
                icon={Database} 
              />
              <PageCard 
                title="AI-Native Operating Layer" 
                description="The architecture that holds it all together." 
                href="/ai-native-operating-layer" 
                icon={Layers} 
              />
              <PageCard 
                title="Discuss a transformation" 
                description="Talk to our engineers about your custom stack." 
                href="/contact" 
                icon={ArrowRight} 
              />
            </div>
          </div>
        </section>

        {/* 12. FINAL CTA */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-indigo-900/20 to-pink-900/20 rounded-3xl p-12 text-center border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to embed intelligence into your enterprise systems?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Stop building isolated chatbots. Give your AI the keys to the engine (safely).
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

export default SystemIntegration;