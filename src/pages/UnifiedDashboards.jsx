import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BarChart3, 
  PieChart, 
  Activity, 
  Layers, 
  Database, 
  Zap, 
  Eye, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle,
  Clock,
  Search,
  Users
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
      className="flex justify-center mb-6"
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

const SectionHeading = ({ title, subtitle, className }) => (
  <div className={cn("text-center max-w-4xl mx-auto mb-16", className)}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const GlassCard = ({ title, description, icon: Icon, color = "pink", className, delay = 0 }) => {
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={cn(
        "p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 group flex flex-col h-full",
        theme.bg,
        theme.border,
        theme.hover,
        className
      )}
    >
      {Icon && (
        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6 border", theme.icon)}>
          <Icon size={24} strokeWidth={2} />
        </div>
      )}
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm md:text-[15px] flex-grow">{description}</p>
    </motion.div>
  );
};

const UnifiedDashboards = () => {
  return (
    <>
      <SEOHead {...(seoMetadata['/ai-features/unified-dashboards'] || {})} />
      
      <main className="bg-[#0E0F11] text-white overflow-hidden w-full">
        
        {/* 1. HERO SECTION */}
        <section className="relative pt-32 pb-20 px-6 min-h-[85vh] flex flex-col items-center justify-center overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <Badge text="Real-time Visibility" color="pink" />
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-[1.1]"
            >
              Unified <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
                Dashboards
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
            >
              A single pane of glass for your entire enterprise. See people, projects, and processes in one shared operational reality.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="bg-[#EC4899] hover:bg-[#db2777] text-white rounded-full px-8 py-6 text-lg font-bold shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all hover:scale-105">
                View live demo
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5 hover:text-white rounded-full px-8 py-6 text-lg font-medium text-gray-300">
                Talk to sales
              </Button>
            </motion.div>
          </div>

          {/* Abstract Dashboard Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.6, type: "spring" }}
            className="mt-20 relative w-full max-w-5xl mx-auto perspective-1000"
          >
            <div className="relative rounded-xl border border-white/10 bg-[#121212]/80 backdrop-blur-xl shadow-2xl overflow-hidden aspect-[16/9]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              {/* Mock Dashboard UI */}
              <div className="p-6 grid grid-cols-12 gap-6 h-full opacity-60">
                 <div className="col-span-3 h-full bg-white/5 rounded-lg border border-white/5 animate-pulse" />
                 <div className="col-span-9 grid grid-rows-3 gap-6 h-full">
                    <div className="row-span-1 grid grid-cols-3 gap-6">
                       <div className="bg-white/5 rounded-lg border border-white/5" />
                       <div className="bg-white/5 rounded-lg border border-white/5" />
                       <div className="bg-white/5 rounded-lg border border-white/5" />
                    </div>
                    <div className="row-span-2 bg-white/5 rounded-lg border border-white/5" />
                 </div>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="text-center">
                    <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_40px_rgba(236,72,153,0.5)]">
                       <Activity className="text-white" size={32} />
                    </div>
                    <p className="text-white font-bold text-xl">Connecting data sources...</p>
                 </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 2. PROBLEM SECTION */}
        <section className="py-24 px-6 relative border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <Badge text="The challenge" color="blue" />
            <SectionHeading 
              title="You can't manage what you can't see" 
              subtitle="Data fragmentation creates a 'fog of war' over your own operations, making strategic alignment impossible."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <GlassCard 
                title="Siloed Truths" 
                description="Engineering looks at Jira, Sales looks at Salesforce, and Leadership looks at stale slide decks."
                icon={Database}
                color="blue"
                delay={0}
              />
              <GlassCard 
                title="Context Switching" 
                description="Users toggle between 15+ tabs just to understand the status of a single initiative."
                icon={Layers}
                color="blue"
                delay={0.1}
              />
              <GlassCard 
                title="Stale Reporting" 
                description="By the time a weekly report is compiled and presented, the data is already obsolete."
                icon={Clock}
                color="blue"
                delay={0.2}
              />
              <GlassCard 
                title="Hidden Risks" 
                description="Critical bottlenecks and cultural issues remain invisible until they become crises."
                icon={AlertCircle}
                color="blue"
                delay={0.3}
              />
            </div>
          </div>
        </section>

        {/* 3. THE SOLUTION - SINGLE PANE */}
        <section className="py-24 px-6 bg-[#0E0F11]">
          <div className="max-w-5xl mx-auto text-center">
            <Badge text="The solution" color="violet" />
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-white mb-8"
            >
              One Shared Reality
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12"
            >
              Unified Dashboards don't just display data—they <span className="text-purple-400 font-bold">synthesize</span> it. We connect the dots between tasks, goals, and outcomes.
            </motion.p>
          </div>
        </section>

        {/* 4. HOW IT WORKS */}
        <section className="py-24 px-6 bg-gradient-to-b from-[#0E0F11] to-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <Badge text="The mechanism" color="green" />
            <SectionHeading 
              title="How it works" 
              subtitle="From raw signals to executive clarity in four steps."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="relative">
                <GlassCard 
                  title="1. Ingest" 
                  description="Connectors pull live events from 50+ enterprise tools (Slack, GitHub, HubSpot)."
                  icon={Database}
                  color="green"
                  className="h-full"
                />
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[2px] bg-emerald-500/30" />
              </div>
              <div className="relative">
                <GlassCard 
                  title="2. Normalize" 
                  description="Our AI layer maps disparate data points to a common object model of your business."
                  icon={Activity}
                  color="green"
                  className="h-full"
                />
                 <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[2px] bg-emerald-500/30" />
              </div>
              <div className="relative">
                <GlassCard 
                  title="3. Visualize" 
                  description="Dynamic views render the state of work for every role, from CEO to IC."
                  icon={LayoutDashboard}
                  color="green"
                  className="h-full"
                />
                 <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[2px] bg-emerald-500/30" />
              </div>
              <div>
                <GlassCard 
                  title="4. Act" 
                  description="Take action directly from the dashboard. Update, approve, or comment anywhere."
                  icon={Zap}
                  color="green"
                  className="h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 5. CORE CAPABILITIES */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
             <Badge text="Capabilities" color="pink" />
             <SectionHeading title="Built for operational intelligence" />

             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <GlassCard 
                  title="Live Metrics" 
                  description="Forget 'last updated yesterday'. Watch your KPIs move in real-time as work happens."
                  icon={BarChart3}
                  color="pink"
                />
                <GlassCard 
                  title="AI Summaries" 
                  description="Don't just see charts. Get natural language explanations of *why* the numbers changed."
                  icon={Zap}
                  color="pink"
                />
                <GlassCard 
                  title="Drill-Down" 
                  description="Click any metric to see the specific tasks, commits, or tickets that compose it."
                  icon={Search}
                  color="pink"
                />
             </div>
          </div>
        </section>

        {/* 6. FOR EXECUTIVES */}
        <section className="py-24 px-6 bg-[#0E0F11] border-t border-white/5">
           <div className="max-w-7xl mx-auto">
             <div className="flex flex-col md:flex-row items-center gap-16">
                <div className="flex-1">
                   <Badge text="Perspective" color="violet" />
                   <h2 className="text-4xl font-bold text-white mb-6">For Executives</h2>
                   <p className="text-lg text-gray-400 mb-8">
                     Stop chasing updates. Get a high-level view of organizational health, resource allocation, and strategic progress without pestering your managers.
                   </p>
                   <ul className="space-y-4">
                      {['Strategic Oversight', 'Resource Allocation', 'Risk Management'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-white">
                           <CheckCircle2 className="text-purple-400" size={20} />
                           {item}
                        </li>
                      ))}
                   </ul>
                </div>
                <div className="flex-1">
                   <div className="aspect-video bg-gradient-to-br from-purple-900/20 to-black rounded-xl border border-purple-500/20 shadow-2xl relative overflow-hidden group">
                      <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      {/* Visual placeholder for Exec Dashboard */}
                      <div className="p-8 flex items-center justify-center h-full">
                         <PieChart className="text-purple-400/50 w-32 h-32" strokeWidth={1} />
                      </div>
                   </div>
                </div>
             </div>
           </div>
        </section>

        {/* 7. FOR TEAMS */}
        <section className="py-24 px-6 bg-[#0E0F11]">
           <div className="max-w-7xl mx-auto">
             <div className="flex flex-col md:flex-row-reverse items-center gap-16">
                <div className="flex-1">
                   <Badge text="Perspective" color="blue" />
                   <h2 className="text-4xl font-bold text-white mb-6">For Teams</h2>
                   <p className="text-lg text-gray-400 mb-8">
                     Cut the noise. Give individual contributors a clear view of their priorities, dependencies, and how their work impacts the bigger picture.
                   </p>
                   <ul className="space-y-4">
                      {['Task Clarity', 'Blocker Identification', 'Team Alignment'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-white">
                           <CheckCircle2 className="text-sky-400" size={20} />
                           {item}
                        </li>
                      ))}
                   </ul>
                </div>
                <div className="flex-1">
                   <div className="aspect-video bg-gradient-to-br from-sky-900/20 to-black rounded-xl border border-sky-500/20 shadow-2xl relative overflow-hidden group">
                      <div className="absolute inset-0 bg-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      {/* Visual placeholder for Team Dashboard */}
                      <div className="p-8 flex items-center justify-center h-full">
                         <LayoutDashboard className="text-sky-400/50 w-32 h-32" strokeWidth={1} />
                      </div>
                   </div>
                </div>
             </div>
           </div>
        </section>

        {/* 8. INTEGRATION */}
        <section className="py-24 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto text-center">
            <Badge text="Integration" color="green" />
            <SectionHeading 
              title="Works with your stack" 
              subtitle="We don't ask you to migrate data. We visualize it where it lives."
            />
            
            <div className="flex flex-wrap justify-center gap-4 opacity-70">
               {['Salesforce', 'Jira', 'GitHub', 'Slack', 'HubSpot', 'Linear', 'Notion', 'Asana'].map((tool, i) => (
                 <span key={i} className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-semibold">
                    {tool}
                 </span>
               ))}
            </div>
            <p className="mt-8 text-sm text-gray-500">And 40+ more integrations via our API.</p>
          </div>
        </section>

        {/* 9. BENEFITS */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
             <Badge text="The impact" color="pink" />
             <SectionHeading title="Why unified visibility matters" />
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <GlassCard 
                  title="Speed" 
                  description="Decisions that used to take days of email tag now happen in minutes."
                  icon={Zap}
                  color="pink"
                />
                <GlassCard 
                  title="Accuracy" 
                  description="Eliminate human error in reporting. The data is the data."
                  icon={CheckCircle2}
                  color="pink"
                />
                <GlassCard 
                  title="Agility" 
                  description="Spot trends and pivot resources before they become expensive problems."
                  icon={Activity}
                  color="pink"
                />
             </div>
          </div>
        </section>

        {/* 10. CONTINUE EXPLORING */}
        <section className="py-24 px-6 border-t border-white/5">
           <div className="max-w-7xl mx-auto">
              <Badge text="Explore more" color="violet" />
              <SectionHeading title="Go deeper into the platform" />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <Link to="/ai-native-operating-layer" className="group">
                    <GlassCard 
                       title="Operating Layer" 
                       description="See the architecture behind the dashboards."
                       icon={Layers}
                       color="violet"
                       className="group-hover:scale-105 transition-transform cursor-pointer"
                    />
                 </Link>
                 <Link to="/security-governance-control" className="group">
                    <GlassCard 
                       title="Security & Governance" 
                       description="How we keep your data safe while visualizing it."
                       icon={Users}
                       color="violet"
                       className="group-hover:scale-105 transition-transform cursor-pointer"
                    />
                 </Link>
                 <Link to="/platform/overview" className="group">
                    <GlassCard 
                       title="Platform Overview" 
                       description="The big picture of the Phenomeny platform."
                       icon={Eye}
                       color="violet"
                       className="group-hover:scale-105 transition-transform cursor-pointer"
                    />
                 </Link>
              </div>
           </div>
        </section>

        {/* 11. FINAL CTA */}
        <section className="py-32 px-6 relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-b from-[#0E0F11] to-pink-900/20" />
           <div className="relative z-10 max-w-4xl mx-auto text-center">
             <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
               Ready to see <br />
               <span className="text-pink-500">clearly?</span>
             </h2>
             <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
               Stop navigating in the dark. Switch on the lights with Unified Dashboards.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[#EC4899] hover:bg-[#db2777] text-white rounded-full px-10 py-7 text-lg font-bold shadow-2xl shadow-pink-600/20">
                  Get started
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white rounded-full px-10 py-7 text-lg font-medium">
                  Request demo
                </Button>
             </div>
           </div>
        </section>

      </main>
    </>
  );
};

export default UnifiedDashboards;