import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  ArrowRight, 
  Layers, 
  ShieldCheck, 
  LayoutDashboard,
  Zap,
  Eye,
  Lock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';
import { seoMetadata } from '@/config/seoMetadata';
import { cn } from '@/lib/utils';

// --- Components ---

const Badge = ({ text }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex justify-center mb-6"
  >
    <span className="px-3 py-1 rounded-full border border-pink-500/20 bg-pink-500/10 text-pink-400 text-[11px] font-bold uppercase tracking-widest backdrop-blur-sm">
      {text}
    </span>
  </motion.div>
);

const NavTab = ({ label, href, active }) => (
  <Link 
    to={href}
    className={cn(
      "relative px-6 py-3 text-sm font-medium transition-colors duration-300 rounded-lg",
      active 
        ? "text-white bg-white/10" 
        : "text-gray-400 hover:text-white hover:bg-white/5"
    )}
  >
    {label}
    {active && (
      <motion.div 
        layoutId="activeTab"
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#EC4899]"
        initial={false}
      />
    )}
  </Link>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-pink-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/10 group"
  >
    <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-pink-500/20 transition-colors">
      <Icon size={24} className="text-gray-300 group-hover:text-pink-400 transition-colors" />
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-sm">{description}</p>
  </motion.div>
);

const LinkCard = ({ title, description, href, image }) => (
  <Link to={href} className="group block h-full">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="h-full relative overflow-hidden rounded-xl border border-white/10 bg-[#13151A] hover:border-pink-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
      {/* Abstract Background Visual */}
      <div className={cn("absolute inset-0 opacity-20 transition-transform duration-700 group-hover:scale-105", image)} />
      
      <div className="relative z-20 p-8 flex flex-col h-full justify-end min-h-[300px]">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors flex items-center gap-2">
          {title} <ArrowRight size={20} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
          {description}
        </p>
      </div>
    </motion.div>
  </Link>
);

const Platform = () => {
  const location = useLocation();

  return (
    <>
      <SEOHead {...(seoMetadata['/platform'] || {})} />
      <main className="bg-[#0E0F11] text-white overflow-hidden w-full pt-24">
        
        {/* 1. Hero Section */}
        <section className="relative py-20 px-6 flex flex-col items-center text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-pink-900/20 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <Badge text="Platform" />
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
            >
              The AI-native operating foundation for <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">modern enterprises</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light"
            >
              A unified infrastructure that connects your data, systems, and people—enabling safe, scalable autonomy across the business.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/contact">
                <Button className="w-full sm:w-auto h-auto min-h-[44px] px-4 py-2 text-sm md:px-6 md:py-2.5 md:text-base lg:px-7 lg:py-3 bg-[#EC4899] hover:bg-[#db2777] text-white rounded-full font-bold shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all hover:scale-105">
                  Discuss a transformation
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 2. Platform Navigation Tabs */}
        <section className="sticky top-[72px] z-30 bg-[#0E0F11]/90 backdrop-blur-md border-y border-white/10 py-4">
          <div className="max-w-7xl mx-auto px-6 overflow-x-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 min-w-max">
              <NavTab 
                label="Platform Overview" 
                href="/platform/overview" 
                active={location.pathname === '/platform/overview' || location.pathname === '/platform'} 
              />
              <NavTab 
                label="AI-Native Operating Layer" 
                href="/ai-native-operating-layer" 
                active={location.pathname === '/ai-native-operating-layer'} 
              />
              <NavTab 
                label="Security, Governance & Control" 
                href="/security-governance-control" 
                active={location.pathname === '/security-governance-control'} 
              />
            </div>
          </div>
        </section>

        {/* 3. Platform Explanation */}
        <section className="py-24 px-6 relative">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white mb-8"
            >
              Built to sit across your <br/> existing systems
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
            >
              The Phenomeny Platform isn't another silo. It is the connective tissue. It sits horizontally across your vertical SaaS stack, ingesting context, reasoning about work, and orchestrating execution. It transforms fragmented tools into a cohesive operating system.
            </motion.p>
          </div>
        </section>

        {/* 4. What Platform Enables */}
        <section className="py-24 px-6 bg-[#13151A]/50 border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={Zap}
                title="Continuity"
                description="Business logic and context persist in the platform, ensuring operations continue smoothly even as teams change and scale."
              />
              <FeatureCard 
                icon={Eye}
                title="Visibility"
                description="See the true state of your operations in real-time. Unified dashboards cut through the noise of scattered SaaS tools."
              />
              <FeatureCard 
                icon={Lock}
                title="Control"
                description="Govern AI autonomy with precision. Define exactly what agents can do, see, and touch with enterprise-grade security."
              />
            </div>
          </div>
        </section>

        {/* 5. Path Forward / Subpages */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Explore the Platform in depth</h2>
              <p className="text-gray-400">Dive into the specific components that power the foundation.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <LinkCard 
                title="Platform Overview"
                description="A high-level view of how the platform unifies data, workflow, and intelligence."
                href="/platform/overview"
                image="bg-gradient-to-br from-blue-900/40 to-blue-600/10"
              />
              <LinkCard 
                title="AI-Native Operating Layer"
                description="The core engine that ingests signals, understands intent, and orchestrates action."
                href="/ai-native-operating-layer"
                image="bg-gradient-to-br from-purple-900/40 to-purple-600/10"
              />
              <LinkCard 
                title="Security & Governance"
                description="How we ensure safety, compliance, and human control at every step."
                href="/security-governance-control"
                image="bg-gradient-to-br from-emerald-900/40 to-emerald-600/10"
              />
            </div>
          </div>
        </section>

        {/* 6. Final CTA */}
        <section className="py-32 px-6 relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F11] to-pink-900/10 pointer-events-none" />
           <div className="relative z-10 max-w-4xl mx-auto text-center">
             <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
               Start with understanding, <br />
               <span className="text-pink-500">not tooling</span>
             </h2>
             <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
               Don't just add more AI features. Build the foundation that makes them work together.
             </p>
             <div className="flex justify-center">
                <Link to="/contact">
                  <Button className="w-full sm:w-auto h-auto min-h-[44px] px-4 py-2 text-sm md:px-6 md:py-2.5 md:text-base lg:px-7 lg:py-3 bg-[#EC4899] hover:bg-[#db2777] text-white rounded-full font-bold shadow-2xl shadow-pink-600/20 transition-transform hover:scale-105">
                    Discuss a transformation
                  </Button>
                </Link>
             </div>
           </div>
        </section>

      </main>
    </>
  );
};

export default Platform;