import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Check, 
  Clock, 
  FileX, 
  RefreshCw, 
  FileText, 
  Zap, 
  Users, 
  Bot, 
  Brain,
  ChevronRight,
  TrendingUp,
  ShieldAlert,
  PieChart,
  Stethoscope,
  Activity,
  Briefcase
} from 'lucide-react';
import { cn } from '@/lib/utils';

const TEAMS_DATA = [
  {
    id: 'operations',
    label: 'Operations',
    headline: 'Autonomous Operations',
    description: 'Turn chaotic inputs into structured workflows. AI handles the intake, assignment, and tracking—so your team focuses on execution.',
    replaces: [
      { text: 'Manual coordination', icon: Users },
      { text: 'Disconnected tools', icon: FileX },
      { text: 'Status chasing', icon: RefreshCw },
      { text: 'Fragmented reporting', icon: FileText }
    ],
    bullets: [
      'Reduce project setup time dramatically',
      'Cut hours of coordination weekly',
      'Real-time visibility into deliverable'
    ],
    actions: [
      { title: 'Intake AI', desc: 'Auto-triages requests from Slack/Email.', icon: Zap, color: 'blue' },
      { title: 'Assignment AI', desc: 'Matches tasks based on capacity.', icon: Users, color: 'purple' },
      { title: 'Execution AI', desc: 'Drafts initial plans and SOPs.', icon: Bot, color: 'pink' },
      { title: 'Live Updates AI', desc: 'Detects blockers automatically.', icon: Activity, color: 'green' }
    ]
  },
  {
    id: 'sales',
    label: 'Sales',
    headline: 'Intelligence-Driven Sales',
    description: 'Stop wasting time on data entry. AI enriches leads, schedules meetings, and drafts follow-ups so reps can focus on closing.',
    replaces: [
      { text: 'CRM data entry', icon: FileText },
      { text: 'Manual research', icon: Brain }, 
      { text: 'Scheduling ping-pong', icon: Clock },
      { text: 'Generic outreach', icon: FileX }
    ],
    bullets: [
      '2x more meetings booked per rep',
      '100% accurate CRM data',
      'Instant response to inbound leads'
    ],
    actions: [
      { title: 'Lead Scoring AI', desc: 'Analyzes intent signals.', icon: TrendingUp, color: 'blue' },
      { title: 'Outreach AI', desc: 'Personalizes emails instantly.', icon: Zap, color: 'purple' },
      { title: 'Meeting Prep AI', desc: 'Generates one-page briefings.', icon: FileText, color: 'pink' },
      { title: 'Follow-up AI', desc: 'Drafts post-call summaries.', icon: RefreshCw, color: 'green' }
    ]
  },
  {
    id: 'marketing',
    label: 'Marketing',
    headline: 'Creative Velocity',
    description: 'Accelerate campaigns from ideation to launch. AI manages assets, variations, and performance tracking across all channels.',
    replaces: [
      { text: 'Asset hunting', icon: Users },
      { text: 'Version control chaos', icon: RefreshCw },
      { text: 'Slow approval loops', icon: Clock },
      { text: 'Manual tagging', icon: FileText }
    ],
    bullets: [
      'Launch campaigns 5x faster',
      'Auto-generate asset variations',
      'Unified performance reporting'
    ],
    actions: [
      { title: 'Content Gen AI', desc: 'Drafts copy and generates visuals.', icon: Sparkles, color: 'blue' },
      { title: 'Asset Manager AI', desc: 'Tags and organizes assets.', icon: Briefcase, color: 'purple' },
      { title: 'Campaign AI', desc: 'Monitors budget pacing.', icon: PieChart, color: 'pink' },
      { title: 'Analytics AI', desc: 'Aggregates cross-channel data.', icon: TrendingUp, color: 'green' }
    ]
  },
  {
    id: 'finance',
    label: 'Finance',
    headline: 'Zero-Touch Finance',
    description: 'Close the books faster with automated reconciliation. AI catches anomalies and processes invoices without human intervention.',
    replaces: [
      { text: 'Receipt matching', icon: FileText },
      { text: 'Manual reconciliation', icon: RefreshCw },
      { text: 'Expense approvals', icon: Clock },
      { text: 'Fraud checks', icon: ShieldAlert }
    ],
    bullets: [
      'Cut month-end close time in half',
      '99.9% accuracy in categorization',
      'Real-time cash flow visibility'
    ],
    actions: [
      { title: 'Invoice AI', desc: 'Extracts data and matches POs.', icon: FileText, color: 'blue' },
      { title: 'Expense AI', desc: 'Categorizes and flags violations.', icon: ShieldAlert, color: 'purple' },
      { title: 'Forecast AI', desc: 'Predicts cash flow.', icon: TrendingUp, color: 'pink' },
      { title: 'Audit AI', desc: 'Scans for compliance risks.', icon: Check, color: 'green' }
    ]
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    headline: 'Patient-First Care',
    description: 'Reduce administrative burden. AI handles intake, triage, and documentation so providers can focus on patient outcomes.',
    replaces: [
      { text: 'Manual intake forms', icon: FileText },
      { text: 'Scheduling calls', icon: Clock },
      { text: 'Transcribing notes', icon: FileX },
      { text: 'Insurance verification', icon: ShieldAlert }
    ],
    bullets: [
      'Save 2 hours per provider per day',
      'Reduce no-shows by 40%',
      'Instant insurance eligibility checks'
    ],
    actions: [
      { title: 'Triage AI', desc: 'Routes patients to correct care.', icon: Stethoscope, color: 'blue' },
      { title: 'Scribe AI', desc: 'Drafts SOAP notes automatically.', icon: Bot, color: 'purple' },
      { title: 'Scheduling AI', desc: 'Optimizes calendar density.', icon: Clock, color: 'pink' },
      { title: 'Billing AI', desc: 'Codes visits automatically.', icon: FileText, color: 'green' }
    ]
  },
  {
    id: 'hr',
    label: 'Human Resources',
    headline: 'Take Control of Your HR Workflows',
    description: 'Turn fragmented people operations into structured workflows. AI supports hiring, onboarding, attendance, and HR coordination—without replacing human judgment.',
    replaces: [
      { text: 'Manual HR coordination', icon: Users },
      { text: 'Disconnected HR tools', icon: FileX },
      { text: 'Spreadsheet-based tracking', icon: FileText },
      { text: 'Email-driven approvals', icon: RefreshCw }
    ],
    bullets: [
      'Reduce hiring and onboarding delays',
      'Eliminate manual follow-ups and reminders',
      'Improve visibility into workforce status',
      'Keep sensitive decisions human-led'
    ],
    actions: [
      { title: 'HR Intake AI', desc: 'Auto-organizes requests from email, forms, and internal messages.', icon: Zap, color: 'blue' },
      { title: 'Hiring & Onboarding AI', desc: 'Supports candidate shortlisting, document collection, and onboarding checklists.', icon: Briefcase, color: 'purple' },
      { title: 'Engagement AI', desc: 'Tracks pulse surveys, burnout signals, and workload balance', icon: Clock, color: 'pink' },
      { title: 'Policy & Compliance AI', desc: 'Flags missing documents, expiries, and compliance gaps.', icon: ShieldAlert, color: 'green' }
    ]
  },
  {
    id: 'leadership',
    label: 'Leadership',
    headline: 'Executive Clarity',
    description: 'Make decisions based on reality, not slide decks. AI aggregates ground-truth data from every department into a live view.',
    replaces: [
      { text: 'Status meetings', icon: Users },
      { text: 'Stale dashboards', icon: FileX },
      { text: 'Data gathering', icon: RefreshCw },
      { text: 'Gut-feel decisions', icon: Brain }
    ],
    bullets: [
      'Eliminate status report prep',
      'Spot risks weeks before issues',
      'Align entire org on priorities'
    ],
    actions: [
      { title: 'Signal AI', desc: 'Surfaces cultural/ops risks.', icon: Activity, color: 'blue' },
      { title: 'KPI Watch AI', desc: 'Alerts when metrics deviate.', icon: TrendingUp, color: 'purple' },
      { title: 'Summary AI', desc: 'Digests updates into summaries.', icon: FileText, color: 'pink' },
      { title: 'Strategy AI', desc: 'Simulates resource allocation.', icon: Brain, color: 'green' }
    ]
  }
];

const COLORS = {
  blue: { text: 'text-[#0099FF]', bg: 'bg-[#0099FF]', glow: 'shadow-[#0099FF]/40', border: 'from-[#0099FF]' },
  purple: { text: 'text-[#9D4EDD]', bg: 'bg-[#9D4EDD]', glow: 'shadow-[#9D4EDD]/40', border: 'from-[#9D4EDD]' },
  pink: { text: 'text-[#FF1493]', bg: 'bg-[#FF1493]', glow: 'shadow-[#FF1493]/40', border: 'from-[#FF1493]' },
  green: { text: 'text-[#00FF88]', bg: 'bg-[#00FF88]', glow: 'shadow-[#00FF88]/40', border: 'from-[#00FF88]' },
};

const AIActionCard = ({ title, desc, icon: Icon, color, delay }) => {
  const theme = COLORS[color] || COLORS.blue;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: delay, duration: 0.4, ease: "easeOut" }}
      className="group flex items-center gap-3 p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/5 hover:bg-white/[0.06] hover:border-white/10 hover:-translate-y-[2px] transition-all duration-300 relative overflow-hidden"
    >
      <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-r from-transparent via-current to-transparent pointer-events-none", theme.text)} />
      
      <div className={cn(
        "flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border border-white/5 shadow-lg relative z-10 transition-all duration-300", 
        "bg-[#1A1D21] group-hover:shadow-[0_0_15px_rgba(var(--tw-shadow-color),0.3)]",
        "group-hover:scale-105 transition-transform duration-300 ease-out", 
        theme.text
      )}>
        <Icon size={16} className="md:w-[18px] md:h-[18px]" />
      </div>

      <div className="flex-1 min-w-0 relative z-10">
        <h4 className={cn("text-xs md:text-sm font-bold mb-0.5 tracking-tight", theme.text)}>
          {title}
        </h4>
        <p className="text-[10px] md:text-xs text-gray-400 leading-relaxed line-clamp-2">
          {desc}
        </p>
      </div>
    </motion.div>
  );
};

const AITeamSolutionsSection = () => {
  const [activeTab, setActiveTab] = useState('operations');
  const currentData = TEAMS_DATA.find(t => t.id === activeTab) || TEAMS_DATA[0];

  return (
    <section className="relative py-16 md:py-32 px-4 md:px-6 bg-[#0B0D10] overflow-hidden">
      {/* Background Grid Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                             linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
      />
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)] mb-4 md:mb-6">
            <Sparkles size={14} className="text-[#FF1493]" />
            <span className="text-xs md:text-sm font-medium text-white/90 font-['Space_Grotesk']">
              AI solutions across your operations
            </span>
          </div>
          
          <h2 className="text-[28px] md:text-6xl font-bold font-['Space_Grotesk'] text-white mb-4 md:mb-6 tracking-tight">
            AI solutions for every team
          </h2>
          
          <p className="text-[16px] md:text-lg text-[#A0A0A0] max-w-2xl mx-auto leading-relaxed px-2">
            From automated intake to executive reporting, empower every department with purpose-built AI.
          </p>
        </div>

        {/* Scrollable Tabs */}
        <div className="flex flex-nowrap overflow-x-auto md:justify-center gap-2 mb-8 md:mb-12 pb-4 px-2 no-scrollbar mask-gradient-sides">
          {TEAMS_DATA.map((team) => {
            const isActive = activeTab === team.id;
            return (
              <button
                key={team.id}
                onClick={() => setActiveTab(team.id)}
                className={cn(
                  "relative flex-shrink-0 px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 outline-none select-none whitespace-nowrap",
                  isActive 
                    ? "text-white bg-white/[0.08] shadow-[0_0_20px_rgba(147,78,221,0.15)]" 
                    : "text-[#A0A0A0] bg-white/[0.03] hover:bg-white/[0.06] hover:text-white"
                )}
              >
                {team.label}
                {isActive && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#9D4EDD] to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Main Content Card */}
        <div 
          className="relative rounded-[24px] border border-white/[0.08] bg-white/[0.05] backdrop-blur-[18px] backdrop-saturate-[1.1] shadow-[0_12px_40px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.05)] overflow-hidden min-h-[auto] md:min-h-[600px] flex flex-col"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex flex-col lg:flex-row h-full"
            >
              {/* Left Column */}
              <div className="flex-1 p-6 md:p-14 flex flex-col border-b lg:border-b-0 lg:border-r border-white/5">
                <div className="mb-6 md:mb-8">
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4 font-['Space_Grotesk']">
                    {currentData.headline}
                  </h3>
                  <p className="text-[#B0B0B0] text-[15px] md:text-lg leading-relaxed">
                    {currentData.description}
                  </p>
                </div>

                {/* Replaces Section */}
                <div className="mb-8 md:mb-10">
                  <span className="block text-[10px] md:text-xs font-bold text-[#D0D0D0] tracking-widest uppercase mb-3 md:mb-4 pl-1">Replaces</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    {currentData.replaces.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-[13px] md:text-sm text-[#D0D0D0]">
                         <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/5">
                            <item.icon size={14} className="text-[#A0A0A0]" />
                         </div>
                         <span className="relative">
                            {item.text}
                            <span className="absolute left-0 right-0 top-1/2 h-[1px] border-b border-dashed border-white/20 -translate-y-1/2"></span>
                         </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Checkmarks */}
                <ul className="mt-auto space-y-3">
                  {currentData.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-[#00FF88]/10 flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-[#00FF88]" strokeWidth={3} />
                      </div>
                      <span className="text-white/90 text-[13px] md:text-sm font-medium">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: AI Actions */}
              <div className="flex-1 p-6 md:p-14 bg-black/20 flex flex-col justify-center relative">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />
                 
                 <div className="relative z-10 space-y-3 md:space-y-4">
                    <span className="block text-[10px] md:text-xs font-bold text-[#A0A0A0] tracking-widest uppercase mb-4 md:mb-6 pl-1">
                       AI Capabilities
                    </span>
                    {currentData.actions.map((action, idx) => (
                       <AIActionCard 
                          key={`${activeTab}-${idx}`}
                          {...action} 
                          delay={idx * 0.1} 
                       />
                    ))}
                 </div>
                 
                 {/* CTA Button */}
                 <div className="mt-8 md:mt-10 flex justify-center md:justify-end">
                    <Link 
                      to="/contact" 
                      className="w-full md:w-auto group relative overflow-hidden rounded-[24px] py-3.5 px-8 bg-gradient-to-br from-[#9D4EDD] to-[#FF1493] text-white font-bold text-sm shadow-[0_0_24px_rgba(147,78,221,0.4)] transition-all duration-300 hover:brightness-110 hover:-translate-y-[2px] hover:shadow-[0_0_35px_rgba(147,78,221,0.6)] flex items-center justify-center gap-2 text-center"
                    >
                       Explore solution 
                       <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                 </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default AITeamSolutionsSection;