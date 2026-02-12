import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Share2, 
  Download, 
  ChevronRight, 
  CheckCircle2, 
  Layers, 
  Eye, 
  Zap, 
  BrainCircuit, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { seoMetadata } from '@/config/seoMetadata';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// --- Shared Components ---

const Badge = ({ text, color = "pink" }) => {
  const colors = {
    pink: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    blue: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    violet: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    green: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-block mb-6"
    >
      <span className={cn(
        "px-3 py-1 rounded-full border text-[11px] font-bold uppercase tracking-widest backdrop-blur-sm",
        colors[color] || colors.pink
      )}>
        {text}
      </span>
    </motion.div>
  );
};

const SectionHeading = ({ number, title, className }) => (
  <div className={cn("mb-8", className)}>
    <span className="text-pink-500 font-mono text-sm tracking-wider uppercase mb-2 block">
      Section {number}
    </span>
    <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
      {title}
    </h2>
  </div>
);

const GlassCard = ({ title, description, icon: Icon, color = "pink", listItems = [], className }) => {
  const themes = {
    pink: {
      bg: "bg-pink-500/[0.03]",
      border: "border-pink-500/10",
      hover: "hover:bg-pink-500/[0.08] hover:border-pink-500/30 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]",
      icon: "text-pink-400 bg-pink-500/10 border-pink-500/20"
    },
    blue: {
      bg: "bg-sky-500/[0.03]",
      border: "border-sky-500/10",
      hover: "hover:bg-sky-500/[0.08] hover:border-sky-500/30 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)]",
      icon: "text-sky-400 bg-sky-500/10 border-sky-500/20"
    },
    violet: {
      bg: "bg-purple-500/[0.03]",
      border: "border-purple-500/10",
      hover: "hover:bg-purple-500/[0.08] hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]",
      icon: "text-purple-400 bg-purple-500/10 border-purple-500/20"
    },
    green: {
      bg: "bg-emerald-500/[0.03]",
      border: "border-emerald-500/10",
      hover: "hover:bg-emerald-500/[0.08] hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
      icon: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
    }
  };

  const theme = themes[color] || themes.pink;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 group flex flex-col h-full",
        theme.bg,
        theme.border,
        theme.hover,
        className
      )}
    >
      {Icon && (
        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6 border transition-colors", theme.icon)}>
          <Icon size={24} strokeWidth={2} />
        </div>
      )}
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      {description && <p className="text-gray-400 leading-relaxed text-sm mb-6">{description}</p>}
      
      {listItems.length > 0 && (
        <ul className="space-y-3 mt-auto">
          {listItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
              <span className={cn("mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0", 
                 color === 'blue' ? 'bg-sky-400' : 
                 color === 'violet' ? 'bg-purple-400' : 
                 color === 'green' ? 'bg-emerald-400' : 'bg-pink-400'
              )} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

const PDDTWhitepaper = () => {
  return (
    <>
      <SEOHead {...(seoMetadata['/ai-resources/pddt-whitepaper'] || {})} />
      
      <main className="bg-[#0E0F11] text-white overflow-hidden w-full font-sans">
        
        {/* 1. WHITEPAPER HEADER */}
        <section className="relative pt-40 pb-20 px-6 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <Badge text="Whitepaper" color="pink" />
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight"
            >
              The Operating Blueprint for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
                AI-Native Enterprises
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
            >
              How to design intelligence as infrastructure, not just a tool. A comprehensive guide for leaders building the future of work.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="bg-[#EC4899] hover:bg-[#db2777] text-white rounded-full px-8 h-14 text-lg font-bold shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all hover:scale-105 flex items-center gap-2">
                <Download size={20} />
                Download PDF
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5 hover:text-white rounded-full px-8 h-14 text-lg font-medium text-gray-300 flex items-center gap-2">
                <Share2 size={20} />
                Share
              </Button>
            </motion.div>
          </div>
        </section>

        {/* CONTENT WRAPPER */}
        <div className="max-w-4xl mx-auto px-6 pb-32">
          
          {/* EXECUTIVE SUMMARY */}
          <section className="mb-24 pt-12 border-t border-white/10">
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Executive Summary</h3>
            <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed">
              <p>
                The adoption of Artificial Intelligence in the enterprise has transitioned from experimentation to expectation. However, most organizations are deploying AI as isolated tools—chatbots, copilots, and generators—rather than as a fundamental operating layer.
              </p>
              <p>
                This whitepaper introduces the <strong>Phenomeny Digital Delivery Theory (PDDT)</strong>, a framework for designing organizations where intelligence is structural. We argue that the true value of AI isn't in generating content, but in orchestrating execution. By decoupling work from human effort, organizations can scale capacity linearly without scaling headcount linearly.
              </p>
            </div>
          </section>

          {/* SECTION 1: THE DISCONNECT */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <SectionHeading number="01" title="The Disconnect: Why Tools Aren't Enough" />
            <div className="text-gray-300 text-lg leading-relaxed space-y-6">
              <p>
                We are currently in the "Tool Era" of AI. Employees have access to powerful models, but these models are passive. They wait for prompts. They lack context. They do not communicate with each other.
              </p>
              <p>
                This creates a paradox: <strong className="text-white">individual productivity rises, but organizational velocity remains stagnant.</strong> Why? because the friction of coordination—handoffs, approvals, context switching—has not been addressed. In fact, the volume of AI-generated content often increases this friction.
              </p>
              <div className="bg-white/5 border-l-4 border-pink-500 p-6 my-8 rounded-r-lg">
                <p className="italic text-white font-medium">
                  "Adding horsepower to a car with a broken transmission doesn't make it faster; it just makes the engine louder."
                </p>
              </div>
            </div>
          </motion.section>

          {/* SECTION 2: INTELLIGENCE AS INFRASTRUCTURE */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <SectionHeading number="02" title="Intelligence as Infrastructure" />
            <div className="text-gray-300 text-lg leading-relaxed space-y-6">
              <p>
                To move beyond the Tool Era, we must treat intelligence as infrastructure. Just as electricity runs through the walls of a building, waiting to be used, intelligence should run through the systems of a business.
              </p>
              <p>
                An <strong>AI-Native Operating Layer</strong> sits between your systems of record (CRM, ERP, Jira) and your people. It doesn't replace these systems; it connects them. It observes data streams, detects patterns, and initiates actions based on pre-defined governance models.
              </p>
            </div>
          </motion.section>

          {/* SECTION 3: THE THREE LAYERS */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <SectionHeading number="03" title="The Three Layers of AI Operations" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
              <div className="p-6 bg-[#13151A] rounded-xl border border-white/10">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 text-blue-400 font-bold">1</div>
                <h4 className="text-lg font-bold text-white mb-2">Data Layer</h4>
                <p className="text-sm text-gray-400">Unified context from fragmented tools.</p>
              </div>
              <div className="p-6 bg-[#13151A] rounded-xl border border-white/10">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 text-purple-400 font-bold">2</div>
                <h4 className="text-lg font-bold text-white mb-2">Reasoning Layer</h4>
                <p className="text-sm text-gray-400">Decision-making engines and agents.</p>
              </div>
              <div className="p-6 bg-[#13151A] rounded-xl border border-white/10">
                <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center mb-4 text-pink-400 font-bold">3</div>
                <h4 className="text-lg font-bold text-white mb-2">Action Layer</h4>
                <p className="text-sm text-gray-400">Execution, API calls, and human handoffs.</p>
              </div>
            </div>
          </motion.section>

          {/* SECTION 4: UNIFIED CONTEXT */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <SectionHeading number="04" title="The Problem of Context" />
            <div className="text-gray-300 text-lg leading-relaxed space-y-6">
              <p>
                AI models hallucinate when they lack context. In the enterprise, context is shattered across dozens of SaaS tools. Sales data lives in Salesforce, product data in Jira, and conversations in Slack.
              </p>
              <p>
                A true operating layer solves this by creating a <strong>semantic graph</strong> of the business. It understands that "Project Alpha" in Slack is the same as "Feature-102" in Jira and "Opportunity-88" in Salesforce. This allows agents to reason across silos.
              </p>
            </div>
          </motion.section>

          {/* SECTION 5: GOVERNANCE */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <SectionHeading number="05" title="Governance: The Safety Valve" />
            <div className="text-gray-300 text-lg leading-relaxed space-y-6">
              <p>
                Automation without governance is chaos at speed. The PDDT framework emphasizes <strong>Human-in-the-Loop (HITL)</strong> design for all critical decisions.
              </p>
              <p>
                We define "Trust Boundaries" for AI agents. Inside the boundary (e.g., scheduling a meeting), the agent acts autonomously. At the edge of the boundary (e.g., refunding a customer {'>'}$500), the agent drafts the action and requests human approval. This builds trust incrementally.
              </p>
            </div>
          </motion.section>

          {/* SECTION 6: THREE RESPONSIBILITIES */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <SectionHeading number="06" title="The Three Responsibilities" />
            <p className="text-gray-300 text-lg mb-8">
              To successfully implement an AI operating layer, leadership must focus on three core responsibilities:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard 
                title="Unify" 
                description="Bring data together."
                icon={Layers}
                color="blue"
                listItems={[
                  "Map data sources",
                  "Define semantic relationships",
                  "Break down permission silos"
                ]}
              />
              <GlassCard 
                title="Understand" 
                description="Derive signal from noise."
                icon={BrainCircuit}
                color="violet"
                listItems={[
                  "Monitor operational health",
                  "Detect risk patterns",
                  "Measure actual velocity"
                ]}
              />
              <GlassCard 
                title="Enable Execution" 
                description="Empower action."
                icon={Zap}
                color="green"
                listItems={[
                  "Deploy specialized agents",
                  "Automate low-risk workflows",
                  "Orchestrate complex handoffs"
                ]}
              />
            </div>
          </motion.section>

          {/* SECTION 7: SIGNAL INTELLIGENCE */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <SectionHeading number="07" title="Signal Intelligence" />
            <div className="text-gray-300 text-lg leading-relaxed space-y-6">
              <p>
                Traditional dashboards show lagging indicators—what happened last month. AI-native operations rely on <strong>Signal Intelligence</strong>: the detection of patterns that predict future outcomes.
              </p>
              <p>
                By analyzing communication sentiment, code churn, and ticket staleness simultaneously, the system can flag a project "at risk" weeks before a deadline is missed. This shifts management from reactive firefighting to proactive steering.
              </p>
            </div>
          </motion.section>

          {/* SECTION 8: THE AI WORKFORCE */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <SectionHeading number="08" title="Defining the AI Workforce" />
            <div className="text-gray-300 text-lg leading-relaxed space-y-6">
              <p>
                Agents should not be generic. They should have defined roles, just like employees.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li><strong>The Librarian:</strong> Organizes and retrieves knowledge.</li>
                <li><strong>The Coordinator:</strong> Manages schedules and handoffs.</li>
                <li><strong>The Analyst:</strong> Monitors data for anomalies.</li>
                <li><strong>The Doer:</strong> Executes specific API tasks (e.g., "Create Invoice").</li>
              </ul>
              <p>
                Specialization improves reliability. It is easier to debug a "Coordinator" agent that fails to schedule a meeting than a "Generalist" agent that tries to do everything.
              </p>
            </div>
          </motion.section>

          {/* SECTION 9: IMPLEMENTATION STRATEGY */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <SectionHeading number="09" title="Implementation Strategy" />
            <div className="text-gray-300 text-lg leading-relaxed space-y-6">
              <p>
                Do not try to boil the ocean. Start small.
              </p>
              <p>
                <strong>Phase 1: Visibility.</strong> Connect systems to the operating layer to gain a unified view. Do not automate yet. Just observe.<br/>
                <strong>Phase 2: Assistance.</strong> Deploy agents that help humans do their work faster (e.g., drafts, summaries). Humans still execute.<br/>
                <strong>Phase 3: Automation.</strong> Allow agents to execute low-risk tasks autonomously within strict trust boundaries.<br/>
                <strong>Phase 4: Orchestration.</strong> Agents coordinate complex multi-step workflows across teams.
              </p>
            </div>
          </motion.section>

          {/* SECTION 10: METRICS OF SUCCESS */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <SectionHeading number="10" title="New Metrics of Success" />
            <div className="text-gray-300 text-lg leading-relaxed space-y-6">
              <p>
                In an AI-native enterprise, we measure differently:
              </p>
              <ul className="space-y-4 mt-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-400 mt-1 shrink-0" size={20} />
                  <span><strong>Time to Resolution vs. Time to Action:</strong> We care less about how long a task takes, and more about how quickly it is initiated.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-400 mt-1 shrink-0" size={20} />
                  <span><strong>Coordination Overhead:</strong> What percentage of time is spent "talking about work" vs "doing work"? This should decrease.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-400 mt-1 shrink-0" size={20} />
                  <span><strong>Agent Reliability Score:</strong> How often does a human have to intervene or correct an agent's work?</span>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* SECTION 13: CONCLUSION */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-24 p-8 bg-white/5 border border-white/10 rounded-2xl"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Conclusion: Designing for the Long Term</h2>
            <div className="text-gray-300 text-lg leading-relaxed space-y-6">
              <p>
                The shift to AI-native operations is not a software upgrade; it is an organizational transformation. It requires leaders to think like architects.
              </p>
              <p>
                Those who succeed will build organizations that are self-correcting, infinitely scalable, and relentlessly focused on high-value creative work. The friction of the past will be replaced by the fluid intelligence of the future.
              </p>
              <p className="font-bold text-white mt-6 mb-2">Success looks like:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Systems that talk to each other without APIs breaking.</li>
                <li>Risks that are flagged before they become fires.</li>
                <li>Employees who are captains of agents, not servants of tickets.</li>
              </ul>
            </div>
          </motion.section>

          {/* SECTION 14: ABOUT PDDT */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-24 pt-12 border-t border-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-4">About the Phenomeny Digital Delivery Theory (PDDT)</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              The PDDT is Phenomeny's proprietary framework for enterprise AI adoption. It was developed through the observation of over 50 large-scale digital transformations. It prioritizes semantic consistency, governance, and human-centric design over raw model performance.
            </p>
          </motion.section>

          {/* SECTION 15: CONTINUE CONVERSATION */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="text-center mb-10">
              <Badge text="Next steps" color="green" />
              <h2 className="text-3xl font-bold text-white mb-4">Continue the conversation</h2>
              <p className="text-gray-400">Where to go from here.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="#" className="block group">
                <GlassCard 
                  title="Executive Briefing" 
                  description="Schedule a 30-minute briefing on applying PDDT to your organization."
                  icon={ShieldCheck}
                  color="green"
                  className="h-full group-hover:scale-[1.02] transition-transform cursor-pointer"
                />
              </a>
              <a href="#" className="block group">
                <GlassCard 
                  title="Discuss a Transformation" 
                  description="Talk to our solution architects about your current infrastructure."
                  icon={ArrowRight}
                  color="green"
                  className="h-full group-hover:scale-[1.02] transition-transform cursor-pointer"
                />
              </a>
            </div>
          </motion.section>

          {/* SECTION 16: FINAL CTA */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="py-16 px-8 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-3xl border border-white/10 text-center relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
             
             <div className="relative z-10">
               <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                 Ready to design AI-native operations?
               </h2>
               <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                 Start by auditing your current friction points.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-[#EC4899] hover:bg-[#db2777] text-white rounded-full px-8 py-6 text-lg font-bold shadow-lg transition-all hover:scale-105">
                    Download PDF
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white rounded-full px-8 py-6 text-lg font-medium">
                    Request briefing
                  </Button>
               </div>
             </div>
          </motion.section>

        </div>
      </main>
    </>
  );
};

export default PDDTWhitepaper;