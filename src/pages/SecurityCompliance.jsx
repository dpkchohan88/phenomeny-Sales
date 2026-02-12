import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  FileCheck, 
  Globe, 
  Database, 
  Eye, 
  Server, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  Layers, 
  Bot,
  Scale,
  Activity,
  Key,
  Network,
  RefreshCw,
  Cpu,
  Zap
} from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { seoMetadata } from '@/config/seoMetadata';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// --- Shared Components ---

const Badge = ({ text, color = "green" }) => {
  const colors = {
    green: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
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
        colors[color] || colors.green
      )}>
        {color === 'green' && <Lock size={12} />}
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

const GlassCard = ({ title, description, icon: Icon, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.4 }}
    whileHover={{ y: -5 }}
    className={cn(
      "p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 group h-full flex flex-col",
      className
    )}
  >
    {Icon && (
      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300">
        <Icon size={24} strokeWidth={1.5} />
      </div>
    )}
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-sm">{description}</p>
  </motion.div>
);

const ComplianceBadge = ({ title, description, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="flex flex-col items-center text-center p-6"
  >
    <div className="w-16 h-16 rounded-full border-2 border-dashed border-emerald-500/30 flex items-center justify-center mb-4 text-emerald-400 bg-emerald-500/5">
      <Icon size={32} strokeWidth={1.5} />
    </div>
    <h4 className="text-white font-bold text-lg mb-2">{title}</h4>
    <p className="text-sm text-gray-400 leading-snug max-w-[200px]">{description}</p>
  </motion.div>
);

const PageCard = ({ title, description, href, icon: Icon }) => (
  <a href={href} className="block group h-full">
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-6 rounded-2xl border border-white/10 bg-[#13151A] hover:border-pink-500/30 transition-all h-full flex flex-col"
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

const SecurityCompliance = () => {
  const whitepaperUrl = 'https://uhfzyehcokdlvdpqloky.supabase.co/storage/v1/object/sign/white_paper/Security%20&%20Compliance%20Whitepaper.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yNDVjZDM4MC0zZjgyLTRkZTYtYmVlYS1iODU5ZWY5OGM1ZWIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3aGl0ZV9wYXBlci9TZWN1cml0eSAmIENvbXBsaWFuY2UgV2hpdGVwYXBlci5wZGYiLCJpYXQiOjE3Njg2NDcxMjYsImV4cCI6MjA4NDAwNzEyNn0.2d4ScgElMLCg3Qr6CnnquEiVDDEMhPVV5oARMCGS7I8';

  return (
    <>
      <SEOHead {...(seoMetadata['/ai-resources/security-compliance'] || {})} />
      
      <main className="bg-[#0E0F11] text-white overflow-hidden w-full font-sans">
        
        {/* 1. HERO SECTION */}
        <section className="relative pt-40 pb-20 px-6 overflow-hidden">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <Badge text="Privacy & Compliance" color="green" />
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight"
            >
              Enterprise-grade safeguards for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                privacy, risk, and governance
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
            >
              Your data stays secure and private. Third-party AI providers never store or learn from your information.
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

        {/* 2. COMPLIANCE BADGES */}
        <section className="py-12 border-y border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <ComplianceBadge 
                title="GDPR Compliant" 
                description="Rigorous controls protecting personal data privacy and sovereignty."
                icon={Globe}
                delay={0}
              />
              <ComplianceBadge 
                title="ISO 27001" 
                description="Certified standard for secure information management systems."
                icon={Shield}
                delay={0.1}
              />
              <ComplianceBadge 
                title="HIPAA Compliant" 
                description="Safeguarding sensitive health information with strict protocols."
                icon={Activity}
                delay={0.2}
              />
              <ComplianceBadge 
                title="AICPA SOC 2" 
                description="Verified controls for security, availability, and confidentiality."
                icon={FileCheck}
                delay={0.3}
              />
            </div>
          </div>
        </section>

        {/* 3. ADDITIONAL FEATURES */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard 
                title="No Third-Party Data Training"
                description="We forbid third-party AI providers from training their models on your proprietary data."
                icon={Database}
                delay={0}
              />
              <GlassCard 
                title="Zero Third-Party Retention"
                description="We ensure third-party AI providers do not store your data after processing is complete."
                icon={RefreshCw}
                delay={0.1}
              />
              <GlassCard 
                title="Multi-Model Support"
                description="Unified permissions, privacy, and security controls across all integrated AI models."
                icon={Cpu}
                delay={0.2}
              />
            </div>
          </div>
        </section>

        {/* 4. YOUR DATA NEVER BECOMES OUR PRODUCT */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Your Data Never Becomes Our Product
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              We operate on a simple principle: You are the customer, not the commodity. Our business model is based on software licensing, not data monetization.
            </p>
            <div className="flex flex-col md:flex-row gap-8 justify-center text-left">
              {[
                "We do not sell your data.",
                "We do not train our foundation models on your data.",
                "We do not claim ownership of your IP."
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-emerald-400 shrink-0" size={20} />
                  <span className="text-white font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. DATA OWNERSHIP IS EXPLICIT */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Data Ownership Is Explicit and Enforced" 
              subheading="You retain full rights to your data inputs and the outputs generated by the AI."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard title="Tenant Isolation" description="Your data is logically and physically separated from other customers." icon={Layers} />
              <GlassCard title="IP Protection" description="All content generated by AI agents within your instance belongs to you." icon={FileText} />
              <GlassCard title="Data Portability" description="Export your data at any time in standard formats without lock-in." icon={ArrowRight} />
              <GlassCard title="Deletion Guarantee" description="When you delete data, it is permanently erased from all active systems." icon={Lock} />
            </div>
          </div>
        </section>

        {/* 6. NO THIRD-PARTY DATA TRAINING */}
        <section className="py-20 px-6 bg-gradient-to-b from-[#0E0F11] to-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="No Third-Party Data Training" 
              subheading="We have negotiated strict Zero Data Retention (ZDR) policies with all model providers."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <GlassCard title="Ephemeral Processing" description="Data sent to LLMs exists only in memory for the duration of the inference." icon={Zap} />
              <GlassCard title="Opt-Out by Default" description="Your data is strictly tagged to prevent inclusion in future model training sets." icon={Shield} />
              <GlassCard title="Private Instances" description="Enterprise plans offer dedicated model instances for maximum isolation." icon={Server} />
            </div>
            <p className="text-center text-gray-500 text-sm max-w-2xl mx-auto border-t border-white/10 pt-8">
              *Applies to all major model providers integrated into Phenomeny, including OpenAI, Anthropic, and Azure.
            </p>
          </div>
        </section>

        {/* 7. CONTROLLED ACCESS */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Controlled Access and Role-Based Permissions" 
              subheading="Granular control over who can see what, and which agents can access which data."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlassCard title="Granular RBAC" description="Define roles with specific permissions down to the field level." icon={Users} />
              <GlassCard title="SSO Integration" description="Seamlessly integrate with Okta, Azure AD, and Google Workspace." icon={Key} />
              <GlassCard title="Agent Scopes" description="Restrict AI agents to specific datasets or operational boundaries." icon={Bot} />
              <GlassCard title="Just-in-Time Access" description="Grant temporary elevated privileges that auto-expire." icon={Activity} />
            </div>
          </div>
        </section>

        {/* 8. FULL VISIBILITY */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Full Visibility and Auditability" 
              subheading="Eliminate Shadow AI. See exactly how intelligence is being used across your organization."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <GlassCard title="Comprehensive Logs" description="Every prompt, output, and API call is immutably logged." icon={FileText} />
              <GlassCard title="User Activity Tracking" description="Monitor who is using which models and for what purpose." icon={Eye} />
              <GlassCard title="Governance Dashboards" description="Visualize AI adoption and risk metrics in real-time." icon={Activity} />
              <GlassCard title="Compliance Reporting" description="One-click export for internal and external audits." icon={CheckCircle2} />
            </div>
            <div className="text-center">
              <p className="inline-block px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-lg text-sm font-medium border border-emerald-500/20">
                You can't manage what you can't measure. We give you the yardstick.
              </p>
            </div>
          </div>
        </section>

        {/* 9. REGULATED ENVIRONMENTS */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Designed for Regulated and High-Stakes Environments</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Whether you are in Finance, Healthcare, or Government, Phenomeny is built to meet your specific compliance needs. We support strict data residency requirements, allowing you to keep your data within specific geographic regions (e.g., EU, US, APAC).
            </p>
            <p className="text-emerald-400 font-medium">
              Ready for: HIPAA • GDPR • CCPA • SOC 2 Type II
            </p>
          </div>
        </section>

        {/* 10. SECURE BY ARCHITECTURE */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              title="Secure by Architecture, Not by Promises" 
              subheading="Security is baked into the code, infrastructure, and deployment processes."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <GlassCard title="VPC Peering" description="Private connectivity options for maximum network security." icon={Network} />
              <GlassCard title="Encryption" description="AES-256 encryption at rest and TLS 1.3 in transit." icon={Lock} />
              <GlassCard title="Penetration Testing" description="Regular third-party security audits and red-teaming." icon={Shield} />
              <GlassCard title="Bug Bounty" description="Active program incentivizing researchers to find vulnerabilities." icon={Bot} />
            </div>
            <p className="text-center text-gray-400">
              We maintain a dedicated Trust Center where you can request our latest audit reports.
            </p>
          </div>
        </section>

        {/* 11. CONFIDENTIALITY BEYOND TECHNOLOGY */}
        <section className="py-20 px-6">
           <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-10 text-center">
             <h3 className="text-2xl font-bold text-white mb-4">Confidentiality Beyond Technology</h3>
             <p className="text-gray-300 leading-relaxed">
               Our commitment to security extends to our people. All Phenomeny employees undergo rigorous background checks and mandatory security training. Access to customer data is strictly prohibited except for authorized support tickets initiated by you, with time-bounded access controls.
             </p>
           </div>
        </section>

        {/* 12. CONFIDENCE AT SCALE */}
        <section className="py-20 px-6 bg-[#13151A]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title="Confidence at Scale" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <GlassCard title="99.9% Uptime SLA" description="Enterprise guarantees for system availability." icon={Activity} />
              <GlassCard title="Auto-Scaling" description="Infrastructure that grows instantly with your workload." icon={Scale} />
              <GlassCard title="Disaster Recovery" description="Robust backups and failover protocols to ensure continuity." icon={RefreshCw} />
            </div>
            <p className="text-center text-gray-400">
              Built to handle the throughput of Fortune 500 enterprises.
            </p>
          </div>
        </section>

        {/* 13. IN SUMMARY */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeading title="In Summary" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <GlassCard title="Privacy First" description="Your data is yours. Period." className="border-emerald-500/30" />
              <GlassCard title="User Control" description="You decide who accesses what." className="border-emerald-500/30" />
              <GlassCard title="Transparency" description="No black boxes. Full audit logs." className="border-emerald-500/30" />
              <GlassCard title="Security" description="Defense-in-depth architecture." className="border-emerald-500/30" />
            </div>
            <div className="text-center">
              <Button 
                variant="outline" 
                className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10"
                onClick={() => window.open(whitepaperUrl, '_blank')}
              >
                Download Security Whitepaper
              </Button>
            </div>
          </div>
        </section>

        {/* 14. CONTINUE EXPLORING */}
        <section className="py-20 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <Badge text="Next steps" color="pink" />
              <h2 className="text-3xl font-bold text-white">Continue Exploring</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PageCard 
                title="Platform Overview" 
                description="See the big picture of the Phenomeny platform." 
                href="/platform/overview" 
                icon={Layers} 
              />
              <PageCard 
                title="Operating Layer" 
                description="Deep dive into the AI-Native architecture." 
                href="/ai-native-operating-layer" 
                icon={Cpu} 
              />
              <PageCard 
                title="AI Assistants™" 
                description="Meet your new digital workforce." 
                href="/platform/ai-assistants" 
                icon={Bot} 
              />
              <PageCard 
                title="Transformation" 
                description="Start your journey to AI adoption." 
                href="/contact" 
                icon={ArrowRight} 
              />
            </div>
          </div>
        </section>

        {/* 15. FINAL CTA */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-pink-900/20 to-purple-900/20 rounded-3xl p-12 text-center border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to operate with confidence?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Secure your operations with the industry's most robust AI governance framework.
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

export default SecurityCompliance;