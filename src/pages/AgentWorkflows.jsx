import React from 'react';
import { motion } from 'framer-motion';
import { 
  GitPullRequest, 
  ArrowRight, 
  AlertTriangle, 
  CheckCircle2, 
  Shield, 
  Activity, 
  Clock, 
  Users, 
  Zap, 
  Workflow, 
  Network,
  Lock,
  Eye,
  BarChart3,
  Layers,
  Bot,
  Brain,
  PauseCircle,
  PlayCircle,
  FileText,
  MessageSquare
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
        <Bot size={12} />
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

const AgentWorkflows = () => {
  return (
    <>
      <SEOHead {...(seoMetadata['/capabilities/agent-workflows'] || {})} />
      
      <main className="bg-[#0E0F11] text-white overflow-hidden w-full font-sans">
        
        {/* 1. HERO SECTION */}
        <section className="relative pt-40 pb-20 px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-sky-900/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[800px] h-[500px] bg-pink-900/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <Badge text="Capabilities" color="blue" />
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight"
            >
              Agent Workflows <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-pink-400">
                Autonomous Task Planning & Execution
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Move beyond simple chatbots. Deploy autonomous agents that plan, execute, and adapt to complex multi-step workflows while maintaining full human governance.
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

        {/* 2. WHY SINGLE-STEP AUTOMATION FALLS SHORT */}
        <section className="py-20 px-6 bg-[#13151A] border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Why Single-Step Automation Falls Short</h2>
            <p className="text-gray-400 text-lg mb-12 text-center leading-relaxed">
              Real business processes aren't linear. They are messy, dynamic, and full of edge cases. Simple "if this, then that" automation breaks when reality gets complicated.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-10">
              {[
                { title: "Tasks depend on prior outcomes", desc: "Step 3 cannot start until we know the result of Step 2." },
                { title: "Decisions require context", desc: "Agents need to see the whole picture, not just the current ticket." },
                { title: "Exceptions are common", desc: "Happy paths are rare. Systems must handle 'out of office' replies and API errors." },
                { title: "Approvals and checks are mandatory", desc: "Autonomy does not mean lack of supervision. Governance is key." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2.5 shrink-0" />
                  <div>
                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-sky-400 font-medium">
              We built Agent Workflows to bridge the gap between rigid automation and human flexibility.
            </p>
          </div>
        </section>

        {/* 3. WHAT AGENT WORKFLOWS ARE */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="What Agent Workflows Are" 
              subheading="A framework for intelligent, stateful execution."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard 
                title="Break objectives into sequenced steps" 
                description="Agents take a high-level goal like 'Onboard Customer X' and decompose it into actionable tasks."
                icon={Workflow}
                variant="blue"
                delay={0}
              />
              <GlassCard 
                title="Track progress across systems" 
                description="Maintain state even as the agent jumps between Slack, Jira, and Salesforce."
                icon={Activity}
                variant="blue"
                delay={0.1}
              />
              <GlassCard 
                title="React to outcomes and exceptions" 
                description="If an API fails or a user says 'no', the agent dynamically re-plans its path."
                icon={AlertTriangle}
                variant="blue"
                delay={0.2}
              />
              <GlassCard 
                title="Pause, escalate, or hand off when required" 
                description="Seamlessly transfer control to a human when confidence is low or risk is high."
                icon={PauseCircle}
                variant="blue"
                delay={0.3}
              />
            </div>
            <BottomStatement text="It's not just automation; it's adaptive execution." color="blue" />
          </div>
        </section>

        {/* 4. AUTONOMOUS BUT NEVER UNCONTROLLED */}
        <section className="py-20 px-6 bg-gradient-to-b from-[#0E0F11] to-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Autonomous But Never Uncontrolled" 
              subheading="We define clear boundaries for AI behavior."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left Column: AI Assistants Can */}
              <div>
                <h3 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
                  <CheckCircle2 size={24} /> AI Assistants™ can:
                </h3>
                <div className="space-y-6">
                  <GlassCard title="Plan execution paths" description="Determine the most efficient sequence of actions to achieve a goal." icon={Brain} variant="green" />
                  <GlassCard title="Carry out approved steps" description="Execute API calls and data updates that fall within their permission scope." icon={PlayCircle} variant="green" />
                  <GlassCard title="Adjust sequencing based on outcomes" description="Re-order tasks if dependencies change or new information arrives." icon={Workflow} variant="green" />
                </div>
              </div>

              {/* Right Column: They Cannot */}
              <div>
                <h3 className="text-2xl font-bold text-pink-400 mb-6 flex items-center gap-2">
                  <AlertTriangle size={24} /> They cannot:
                </h3>
                <div className="space-y-6">
                  <GlassCard title="Bypass permissions" description="Agents are strictly bound by the RBAC policies of the user who invoked them." icon={Lock} variant="pink" />
                  <GlassCard title="Ignore governance rules" description="Safety checks run before every single action is executed." icon={Shield} variant="pink" />
                  <GlassCard title="Execute outside defined scope" description="Agents cannot access tools or data they haven't been explicitly granted." icon={Bot} variant="pink" />
                </div>
              </div>
            </div>

            <BottomStatement text="Trust is built on predictable constraints." color="green" />
          </div>
        </section>

        {/* 5. MULTI-STEP PLANNING WITH CONTEXT */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Multi-Step Planning with Context" 
              subheading="Agents don't just react; they think ahead using the full context of your business."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard title="Workflow State" description="Knows exactly where in the process 'Onboarding' currently stands." icon={Workflow} variant="violet" />
              <GlassCard title="Dependencies & Constraints" description="Understands that 'Legal Review' must happen before 'Contract Sending'." icon={GitPullRequest} variant="violet" />
              <GlassCard title="Historical Decisions" description="Remembers that this client requested 'Net 60' payment terms last year." icon={Clock} variant="violet" />
              <GlassCard title="Current System Conditions" description="Aware that the 'Billing Service' is currently in maintenance mode." icon={Activity} variant="violet" />
            </div>
            <BottomStatement text="Context prevents stupid mistakes." color="violet" />
          </div>
        </section>

        {/* 6. EXCEPTION HANDLING AND ESCALATION */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Exception Handling and Escalation" 
              subheading="Resilience is key. We expect things to go wrong and handle it gracefully."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard title="Detect exceptions early" description="Identify stalls or errors instantly, rather than waiting for a timeout." icon={Eye} />
              <GlassCard title="Surface issues with context" description="When alerting a human, provide the full history of what went wrong." icon={FileText} />
              <GlassCard title="Escalate to the right owners" description="Route the error to 'Billing Support', not just a generic IT inbox." icon={ArrowRight} />
              <GlassCard title="Resume safely after resolution" description="Once the human fixes the issue, the agent picks up exactly where it left off." icon={PlayCircle} />
            </div>
            <BottomStatement text="Automation shouldn't mean abandonment." color="blue" />
          </div>
        </section>

        {/* 7. CROSS-SYSTEM EXECUTION */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Cross-System Execution" 
              subheading="Break down silos. Agents weave threads across your entire stack."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard title="Enterprise Applications" description="Salesforce, NetSuite, Workday, ServiceNow." icon={Layers} variant="blue" />
              <GlassCard title="Operational Tools" description="Jira, GitHub, Linear, Asana, PagerDuty." icon={Zap} variant="blue" />
              <GlassCard title="Documents & Messages" description="Slack, Teams, Email, Google Drive, Notion." icon={MessageSquare} variant="blue" />
              <GlassCard title="Human Approvals & Reviews" description="Approvals, feedback loops, and manual data entry steps." icon={Users} variant="blue" />
            </div>
            <BottomStatement text="One workflow, many systems." color="blue" />
          </div>
        </section>

        {/* 8. FULL VISIBILITY INTO EXECUTION */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Full Visibility into Execution" 
              subheading="No black boxes. See the brain of the agent at work."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <GlassCard title="Logged" description="Every thought, plan, and action is written to persistent logs." icon={FileText} />
              <GlassCard title="Time-stamped" description="Know exactly when an action was taken, down to the millisecond." icon={Clock} />
              <GlassCard title="Traceable" description="Link every output back to the specific inputs and rules that caused it." icon={Network} />
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Leaders and operators can always see:</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {["What is running", "What has completed", "What is blocked", "Why decisions were made"].map((item, i) => (
                  <div key={i} className="bg-black/20 p-4 rounded-xl text-center border border-white/5">
                    <span className="text-sky-400 font-medium block mb-2"><Eye size={20} className="mx-auto" /></span>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <BottomStatement text="Radical transparency builds trust in AI." color="blue" />
          </div>
        </section>

        {/* 9. DESIGNED FOR HIGH-STAKES ENVIRONMENTS */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Designed for High-Stakes Environments" 
              subheading="When failure is expensive, you need robust agents."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard title="Processes are long-running" description="Workflows that span days or weeks, not just seconds." icon={Clock} variant="pink" />
              <GlassCard title="Errors are costly" description="Financial transactions, compliance filings, and customer communications." icon={AlertTriangle} variant="pink" />
              <GlassCard title="Compliance is required" description="Audit trails must be preserved for 7+ years." icon={Shield} variant="pink" />
              <GlassCard title="Coordination is complex" description="Multiple teams and departments must stay in sync." icon={Network} variant="pink" />
            </div>
            <BottomStatement text="Built for the enterprise, not just the prototype." color="pink" />
          </div>
        </section>

        {/* 10. WHAT AGENT WORKFLOWS ENABLE */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title="What Agent Workflows Enable" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
              <GlassCard title="Reliable execution" description="Reliable execution of complex processes that usually require human glue." icon={CheckCircle2} />
              <GlassCard title="Reduced coordination overhead" description="Free up humans from the drudgery of 'checking in' on tasks." icon={Users} />
              <GlassCard title="Safer use of autonomy" description="Deploy AI agents without fear of them going rogue." icon={Shield} />
              <GlassCard title="Faster throughput" description="Move at machine speed without losing control." icon={Zap} />
              <GlassCard title="Confidence in AI" description="Confidence that AI execution aligns with your original intent." icon={Brain} />
            </div>
            <BottomStatement text="Scale your operations without scaling your headcount." color="blue" />
          </div>
        </section>

        {/* 11. CONTINUE EXPLORING */}
        <section className="py-20 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <Badge text="Next steps" color="pink" />
              <h2 className="text-3xl font-bold text-white">Continue Exploring</h2>
              <p className="text-gray-400 mt-4">Discover how Agent Workflows integrate with other Phenomeny capabilities.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PageCard 
                title="Workflow AI" 
                description="Understand the orchestration layer deeper." 
                href="/ai-features/workflow-ai" 
                icon={Workflow} 
              />
              <PageCard 
                title="Model Intelligence" 
                description="See the brains behind the agents." 
                href="/capabilities/model-intelligence" 
                icon={Brain} 
              />
              <PageCard 
                title="Security Governance" 
                description="Learn about the safety protocols." 
                href="/ai-resources/security-compliance" 
                icon={Shield} 
              />
              <PageCard 
                title="Discuss a transformation" 
                description="Talk to us about your automation needs." 
                href="/contact" 
                icon={ArrowRight} 
              />
            </div>
          </div>
        </section>

        {/* 12. FINAL CTA */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-sky-900/20 to-pink-900/20 rounded-3xl p-12 text-center border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to automate complex work safely?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Bring structure, governance, and intelligence to your most critical workflows.
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

export default AgentWorkflows;