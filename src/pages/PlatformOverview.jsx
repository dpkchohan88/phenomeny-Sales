import React from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  Users, 
  CreditCard, 
  Eye, 
  Brain, 
  Zap, 
  ShieldCheck, 
  Check, 
  UserCheck, 
  FileText, 
  Server,
  Lock
} from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { seoMetadata } from '@/config/seoMetadata';
import { cn } from '@/lib/utils';

// --- Configuration & Styles ---

const themeColors = {
  blue: {
    accent: '#0EA5E9',
    badge: {
      bg: 'rgba(14, 165, 233, 0.10)',
      text: '#0EA5E9',
      border: 'rgba(14, 165, 233, 0.20)'
    },
    card: {
      bg: 'rgba(14, 165, 233, 0.15)',
      border: 'rgba(14, 165, 233, 0.40)',
      shadow: '0 0 20px rgba(14, 165, 233, 0.30)',
      hover: {
        bg: 'rgba(14, 165, 233, 0.25)',
        border: 'rgba(14, 165, 233, 0.50)',
        shadow: '0 0 30px rgba(14, 165, 233, 0.50)',
      }
    },
    divider: 'rgba(14, 165, 233, 0.30)'
  },
  violet: {
    accent: '#9333EA',
    badge: {
      bg: 'rgba(147, 51, 234, 0.10)',
      text: '#9333EA',
      border: 'rgba(147, 51, 234, 0.20)'
    },
    card: {
      bg: 'rgba(147, 51, 234, 0.15)',
      border: 'rgba(147, 51, 234, 0.40)',
      shadow: '0 0 20px rgba(147, 51, 234, 0.30)',
      hover: {
        bg: 'rgba(147, 51, 234, 0.25)',
        border: 'rgba(147, 51, 234, 0.50)',
        shadow: '0 0 30px rgba(147, 51, 234, 0.50)',
      }
    },
    divider: 'rgba(147, 51, 234, 0.30)'
  },
  green: {
    accent: '#10B981',
    badge: {
      bg: 'rgba(16, 185, 129, 0.10)',
      text: '#10B981',
      border: 'rgba(16, 185, 129, 0.20)'
    },
    card: {
      bg: 'rgba(16, 185, 129, 0.15)',
      border: 'rgba(16, 185, 129, 0.40)',
      shadow: '0 0 20px rgba(16, 185, 129, 0.30)',
      hover: {
        bg: 'rgba(16, 185, 129, 0.25)',
        border: 'rgba(16, 185, 129, 0.50)',
        shadow: '0 0 30px rgba(16, 185, 129, 0.50)',
      }
    },
    divider: 'rgba(16, 185, 129, 0.30)'
  }
};

// --- Shared Components ---

const SectionBadge = ({ text, theme = 'blue' }) => {
  const styles = themeColors[theme].badge;
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex justify-center mb-5" // Spacing: 16-20px below badge (handled by next element margin)
    >
      <span 
        className="px-4 py-2 rounded-lg text-[13px] font-bold uppercase tracking-widest backdrop-blur-sm transition-colors duration-300"
        style={{
          backgroundColor: styles.bg,
          color: styles.text,
          border: `1px solid ${styles.border}`
        }}
      >
        {text}
      </span>
    </motion.div>
  );
};

const SectionHeading = ({ title, subtitle, className }) => (
  <div className={cn("text-center max-w-4xl mx-auto mb-10", className)}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto font-medium"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const ProminentGlassCard = ({ title, description, icon: Icon, theme = 'blue', index, className }) => {
  const t = themeColors[theme].card;
  const accentColor = themeColors[theme].accent;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className={cn(
        "group relative flex flex-col h-full backdrop-blur-xl transition-all duration-300 rounded-2xl overflow-hidden",
        className
      )}
      style={{
        backgroundColor: t.bg,
        border: `1.5px solid ${t.border}`,
        boxShadow: t.shadow
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = t.hover.bg;
        e.currentTarget.style.borderColor = t.hover.border;
        e.currentTarget.style.boxShadow = t.hover.shadow;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = t.bg;
        e.currentTarget.style.borderColor = t.border;
        e.currentTarget.style.boxShadow = t.shadow;
      }}
    >
      <div className="p-8 flex flex-col h-full relative z-10">
        {Icon && (
          <div 
            className="mb-6 p-3 w-fit rounded-xl bg-black/20 border border-white/10"
            style={{ color: accentColor }}
          >
            <Icon size={32} strokeWidth={1.5} />
          </div>
        )}
        <h3 
          className="text-xl md:text-2xl font-bold mb-4"
          style={{ color: '#fff' }}
        >
          {title}
        </h3>
        <p className="text-gray-300 leading-relaxed text-[15px] md:text-[16px] flex-grow">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const OutcomeItem = ({ text, index }) => {
  const t = themeColors.green;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="flex items-center gap-4 p-5 rounded-2xl backdrop-blur-xl transition-all duration-300 border mb-4"
      style={{
        backgroundColor: 'rgba(16, 185, 129, 0.12)',
        borderColor: 'rgba(16, 185, 129, 0.30)',
        boxShadow: '0 0 15px rgba(16, 185, 129, 0.25)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(16, 185, 129, 0.22)';
        e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.40)';
        e.currentTarget.style.boxShadow = '0 0 25px rgba(16, 185, 129, 0.40)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(16, 185, 129, 0.12)';
        e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.30)';
        e.currentTarget.style.boxShadow = '0 0 15px rgba(16, 185, 129, 0.25)';
      }}
    >
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
        <Check size={18} color="#10B981" strokeWidth={3} />
      </div>
      <span className="text-gray-100 font-semibold text-lg">{text}</span>
    </motion.div>
  );
};

// --- Main Page Component ---

const PlatformOverview = () => {
  return (
    <>
      <SEOHead {...(seoMetadata['/platform/overview'] || {})} />
      
      <main className="bg-[#0E0F11] text-white overflow-hidden w-full">
        
        {/* --- SECTION 1: HERO (Modified) --- */}
        <section className="relative pt-32 pb-20 px-4 md:px-6 flex flex-col items-center min-h-[85vh] justify-center">
          {/* Ambient Background */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-sky-900/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center text-center">
            
            <SectionBadge 
              text="The complete AI-enabled operating layer" 
              theme="blue"
            />

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-5xl tracking-tight leading-tight"
            >
              Intelligence that stays with the business
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 mb-16 max-w-3xl leading-relaxed font-light"
            >
              PDDT designs AI-native operating layers that embed intelligence into real business operations — so knowledge, decisions, and context don't disappear when people change.
            </motion.p>

            {/* Signal Strip (Moved here, visual removed) */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full border-y border-white/10 bg-[#12141a]/80 backdrop-blur-md mb-16 max-w-5xl rounded-xl border-x"
            >
              <div className="px-6 py-5">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center text-center">
                  {/* Left */}
                  <div className="md:col-span-2 flex flex-col items-center md:items-start justify-center">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                      Why this matters
                    </span>
                  </div>
                  {/* Center */}
                  <div className="md:col-span-7 flex flex-col items-center justify-center">
                    <p className="text-[15px] md:text-[17px] font-bold text-white leading-tight mb-2">
                      When intelligence is institutional, operations survive change.
                    </p>
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
                      <span className="text-[10px] font-medium text-white/40 tracking-wider uppercase">Continuity over dependency</span>
                      <span className="text-[10px] font-medium text-white/40 tracking-wider uppercase">Context over documentation</span>
                      <span className="text-[10px] font-medium text-white/40 tracking-wider uppercase">Systems over heroics</span>
                    </div>
                  </div>
                  {/* Right */}
                  <div className="md:col-span-3 flex flex-col items-center md:items-end justify-center">
                     <p className="text-[11px] md:text-xs text-gray-400 leading-relaxed max-w-[280px] text-center md:text-right">
                      Projects, decisions, and context don't reset when people leave, scale, or rotate.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-5 justify-center w-full"
            >
              <button className="px-8 py-4 rounded-xl bg-[#0EA5E9] text-white font-bold text-sm md:text-base hover:bg-sky-500 transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] hover:scale-105">
                Discuss a transformation
              </button>
              <button className="px-8 py-4 rounded-xl border border-white/20 text-white font-medium text-sm md:text-base hover:bg-white/5 transition-all hover:border-white/40">
                Executive briefing
              </button>
            </motion.div>

          </div>
        </section>


        {/* --- SECTION 2: THE PROBLEM (Redesigned) --- */}
        <section 
          className="py-20 px-4 md:px-6 relative"
          style={{ 
            borderTop: `1px solid ${themeColors.blue.divider}`,
            background: 'linear-gradient(to bottom, #0E0F11, #111318)'
          }}
        >
          <div className="max-w-7xl mx-auto pt-10">
            <SectionBadge 
              text="The challenge" 
              theme="blue"
            />
            
            <SectionHeading 
              title="When intelligence lives in people, risk lives with the business" 
              subtitle="Operations that rely solely on individual memory are inherently fragile. Scaling becomes impossible without linear headcount growth."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <ProminentGlassCard 
                index={0}
                theme="blue"
                icon={AlertTriangle}
                title="01 — Projects become fragile"
                description="When a key lead leaves, project context leaves with them. Timelines reset, mistakes repeat, and momentum stalls."
              />
              <ProminentGlassCard 
                index={1}
                theme="blue"
                icon={Users}
                title="02 — Knowledge does not transfer"
                description="SOPs are rarely read. The actual 'how-to' of your business lives in Slack DMs, Zoom calls, and unshared mental models."
              />
              <ProminentGlassCard 
                index={2}
                theme="blue"
                icon={CreditCard}
                title="03 — Organizations pay silently"
                description="The hidden tax of re-explaining context, searching for lost files, and correcting avoidable errors drains 30% of productivity."
              />
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <p className="text-xl md:text-2xl text-sky-200/90 font-semibold tracking-tight">
                This is not a people problem. It is a system design problem.
              </p>
            </motion.div>
          </div>
        </section>


        {/* --- SECTION 3: THE SOLUTION (Redesigned) --- */}
        <section 
          className="py-20 px-4 md:px-6 relative bg-[#0E0F11]"
          style={{ borderTop: `1px solid ${themeColors.violet.divider}` }}
        >
          <div className="max-w-7xl mx-auto pt-10">
            <SectionBadge 
              text="The approach" 
              theme="violet"
            />
            
            <SectionHeading 
              title="An AI-native operating layer built around your business" 
              subtitle="We don't replace your people. We build a permanent digital cortex that observes, learns, and assists them in real-time."
            />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <ProminentGlassCard 
                index={0}
                theme="violet"
                icon={Eye}
                title="Observe"
                description="Ingest signals from Slack, Email, Jira, and CRM to understand the real-time state of work."
              />
              <ProminentGlassCard 
                index={1}
                theme="violet"
                icon={Brain}
                title="Interpret"
                description="Structure chaotic data into clear context, identifying risks, blockers, and next steps automatically."
              />
              <ProminentGlassCard 
                index={2}
                theme="violet"
                icon={Zap}
                title="Assist or act"
                description="Deploy agents to draft responses, update records, or nudge teams—handling routine work instantly."
              />
              <ProminentGlassCard 
                index={3}
                theme="violet"
                icon={Lock}
                title="No black boxes"
                description="Every AI action is logged, explainable, and reversable. No autonomous surprises, ever."
              />
            </div>
          </div>
        </section>


        {/* --- SECTION 4: OUTCOMES (Redesigned) --- */}
        <section 
          className="py-20 px-4 md:px-6 bg-gradient-to-t from-[#0E0F11] to-[#111318]"
          style={{ borderTop: `1px solid ${themeColors.green.divider}` }}
        >
          <div className="max-w-6xl mx-auto pt-10">
             <div className="flex flex-col md:flex-row gap-16 items-start">
                
                <div className="flex-1 text-left sticky top-24">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                  >
                    <span 
                      className="px-4 py-2 rounded-lg text-[13px] font-bold uppercase tracking-widest backdrop-blur-sm"
                      style={{
                        backgroundColor: themeColors.green.badge.bg,
                        color: themeColors.green.badge.text,
                        border: `1px solid ${themeColors.green.badge.border}`
                      }}
                    >
                      The impact
                    </span>
                  </motion.div>
                  
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold text-white mb-8"
                  >
                    Outcomes
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-xl text-gray-400 font-medium leading-relaxed"
                  >
                    When intelligence stays with the organization:
                  </motion.p>
                </div>

                <div className="flex-1 w-full">
                  <div className="space-y-6">
                    {[
                      "Dependency on individual memory reduces",
                      "New teams onboard into complex work faster",
                      "Decisions are grounded in historical context",
                      "Operations improve without disruption",
                      "Risk decreases as complexity increases"
                    ].map((item, i) => (
                      <OutcomeItem key={i} text={item} index={i} />
                    ))}
                  </div>
                </div>

             </div>
          </div>
        </section>


        {/* --- SECTION 5: GOVERNANCE & TRUST (Redesigned) --- */}
        <section 
          className="py-20 px-4 md:px-6 relative bg-[#0E0F11] mb-20"
          style={{ borderTop: `1px solid ${themeColors.green.divider}` }}
        >
          <div className="max-w-7xl mx-auto pt-10">
            <SectionBadge 
              text="Built for enterprise" 
              theme="green"
            />
            
            <SectionHeading 
              title="Governance and trust" 
              subtitle="Designed for regulated environments where control, privacy, and auditability are non-negotiable."
            />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <ProminentGlassCard 
                index={0}
                theme="green"
                icon={UserCheck}
                title="Human-in-the-loop"
                description="Critical actions always require approval. AI suggests, you decide. Default to safety."
              />
              <ProminentGlassCard 
                index={1}
                theme="green"
                icon={ShieldCheck}
                title="Clear boundaries"
                description="Granular permission sets ensure AI agents only access data they absolutely need."
              />
              <ProminentGlassCard 
                index={2}
                theme="green"
                icon={FileText}
                title="Full audit trails"
                description="Every reasoning step, API call, and decision is logged permanently for compliance review."
              />
              <ProminentGlassCard 
                index={3}
                theme="green"
                icon={Server}
                title="Client-owned infra"
                description="Deploy into your VPC or on-premise. Your data model never leaves your control."
              />
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center pt-8 border-t border-white/10"
            >
              <p className="text-xl text-emerald-200/90 font-medium">
                AI should increase confidence — not introduce risk.
              </p>
            </motion.div>
          </div>
        </section>

      </main>
    </>
  );
};

export default PlatformOverview;