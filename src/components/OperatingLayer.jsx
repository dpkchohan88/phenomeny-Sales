import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Database,
  Factory,
  Building2,
  Briefcase,
  Users,
  Package,
  Settings,
  FileText,
  Table,
  Mail,
  MessageSquare,
  Calendar,
  FileInput,
  Activity,
  HardHat,
  GraduationCap,
  Server,
  Code,
  Puzzle,
  Cpu,
  Globe,
  Layers
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Helper to calculate position in a circle
const getPosition = (index, total, radius) => {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2; // Start from top
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;
  return { x, y };
};

const SystemIcon = ({ icon: Icon, label, subLabel, color, delay, x, y, isMobile }) => {
  return (
    <motion.div
      className={cn(
        "group absolute flex flex-col items-center justify-center p-3 rounded-xl bg-[#13161B] border border-white/5 transition-all duration-300 hover:z-20",
        isMobile ? "relative inset-auto translate-x-0 translate-y-0 w-full mb-4 flex-row justify-start gap-4 px-4" : "w-16 h-16 hover:scale-110 hover:border-white/20 hover:shadow-lg hover:shadow-purple-500/20 cursor-default"
      )}
      style={!isMobile ? { x, y } : {}}
      initial={!isMobile ? { opacity: 0, scale: 0 } : { opacity: 1 }}
      animate={!isMobile ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay, duration: 0.5 }}
    >
      <Icon className={cn("w-6 h-6", color)} />
      
      {/* Mobile Text */}
      {isMobile && (
        <div className="text-left">
          <p className="text-white text-sm font-medium">{label}</p>
          <p className="text-xs text-gray-500">{subLabel}</p>
        </div>
      )}

      {/* Desktop Tooltip */}
      {!isMobile && (
        <div className="absolute top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/90 text-xs text-white px-2 py-1 rounded whitespace-nowrap z-30 pointer-events-none border border-white/10">
          <span className="font-semibold block">{label}</span>
          <span className="text-gray-400 font-normal">{subLabel}</span>
        </div>
      )}
    </motion.div>
  );
};

const ConnectionLine = ({ startX, startY, endX, endY, color, delay }) => {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" style={{ zIndex: 0 }}>
      <motion.path
        d={`M ${startX + 500} ${startY + 400} L ${endX + 500} ${endY + 400}`} // Offset by half container size (assuming 1000x800 container roughly)
        stroke={color}
        strokeWidth="1"
        fill="none"
        strokeOpacity="0.2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.2 }}
        transition={{ duration: 1.5, delay }}
      />
      {/* Flowing particle */}
      <motion.circle
        r="2"
        fill={color}
        initial={{ offsetDistance: "100%" }}
        animate={{ offsetDistance: "0%" }}
        style={{
          offsetPath: `path("M ${startX + 500} ${startY + 400} L ${endX + 500} ${endY + 400}")`,
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          delay: delay + Math.random() * 2,
          repeatDelay: 1
        }}
      />
    </svg>
  );
};

const OperatingLayer = () => {
  // Data for Rings
  const ring1 = [
    { icon: Users, label: "CRM", subLabel: "Salesforce, HubSpot", color: "text-blue-400" },
    { icon: Briefcase, label: "ERP", subLabel: "SAP, Oracle", color: "text-blue-400" },
    { icon: Building2, label: "HMS", subLabel: "Workday, BambooHR", color: "text-blue-400" },
    { icon: Database, label: "Finance", subLabel: "QuickBooks, Xero", color: "text-blue-400" },
    { icon: Activity, label: "HR", subLabel: "Rippling, Gusto", color: "text-blue-400" },
    { icon: Package, label: "Inventory", subLabel: "NetSuite, Cin7", color: "text-blue-400" },
    { icon: Factory, label: "Operations", subLabel: "Samsara, Flexport", color: "text-blue-400" }
  ];

  const ring2 = [
    { icon: FileText, label: "Docs", subLabel: "Google Docs, Word", color: "text-purple-400" },
    { icon: Table, label: "Spreadsheets", subLabel: "Excel, Airtable", color: "text-purple-400" },
    { icon: Mail, label: "Email", subLabel: "Gmail, Outlook", color: "text-purple-400" },
    { icon: MessageSquare, label: "Chat", subLabel: "Slack, Teams", color: "text-purple-400" },
    { icon: Calendar, label: "Calendar", subLabel: "GCal, Calendly", color: "text-purple-400" },
    { icon: FileInput, label: "Forms", subLabel: "Typeform, JotForm", color: "text-purple-400" }
  ];

  const ring3 = [
    { icon: HardHat, label: "Manufacturing", subLabel: "Custom PLC", color: "text-amber-400" },
    { icon: Activity, label: "Healthcare", subLabel: "Epic, Cerner", color: "text-amber-400" },
    { icon: GraduationCap, label: "Education", subLabel: "Canvas, Blackboard", color: "text-amber-400" },
    { icon: Server, label: "Databases", subLabel: "SQL, Mongo", color: "text-amber-400" },
    { icon: Code, label: "Internal Tools", subLabel: "Retool, Custom", color: "text-amber-400" },
    { icon: Puzzle, label: "Integrations", subLabel: "Zapier, Make", color: "text-amber-400" }
  ];

  // Calculate Positions for Desktop
  // Center is (0,0) relative to the container center
  const desktopLayout = useMemo(() => {
    const r1Radius = 220;
    const r2Radius = 340;
    const r3Radius = 450;

    return {
      ring1: ring1.map((item, i) => ({ ...item, ...getPosition(i, ring1.length, r1Radius), radius: r1Radius })),
      ring2: ring2.map((item, i) => ({ ...item, ...getPosition(i, ring2.length, r2Radius), radius: r2Radius })),
      ring3: ring3.map((item, i) => ({ ...item, ...getPosition(i, ring3.length, r3Radius), radius: r3Radius }))
    };
  }, []);

  return (
    <section className="relative py-16 md:py-24 bg-[#0B0D10] overflow-hidden min-h-[900px] flex flex-col items-center">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0D10]/50 to-[#0B0D10] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 mb-12 md:mb-0">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          All your systems. One operating layer.
        </h2>
        <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
          CRMs, ERPs, documents, spreadsheets, industry software, and custom tools—working together through AI.
        </p>
      </div>

      {/* Responsive Container */}
      
      {/* MOBILE VIEW (Grid/List) */}
      <div className="md:hidden w-full max-w-md px-6 z-10 mt-10">
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 mb-8 text-center shadow-2xl shadow-purple-500/10">
          <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
            <Layers className="text-white w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white mb-1">Phenomeny Layer</h3>
          <p className="text-sm text-gray-400">AI-enabled system orchestration</p>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Core Business</h4>
            <div className="grid grid-cols-1 gap-2">
              {ring1.map((item, idx) => <SystemIcon key={idx} {...item} isMobile={true} />)}
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Productivity</h4>
            <div className="grid grid-cols-1 gap-2">
              {ring2.map((item, idx) => <SystemIcon key={idx} {...item} isMobile={true} />)}
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP VIEW (Orbital) */}
      <div className="hidden md:flex relative w-[1000px] h-[800px] items-center justify-center flex-shrink-0 mt-[-50px] transform scale-[0.65] lg:scale-[0.85] xl:scale-100 origin-center">
        
        {/* Orbital Rings (Visual Guides) */}
        <div className="absolute rounded-full border border-white/5 w-[440px] h-[440px]" />
        <div className="absolute rounded-full border border-white/5 w-[680px] h-[680px]" />
        <div className="absolute rounded-full border border-white/5 w-[900px] h-[900px]" />

        {/* Center Card */}
        <motion.div 
          className="relative z-50 w-64 h-64 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 flex flex-col items-center justify-center text-center p-6 shadow-2xl"
          style={{
            boxShadow: '0 0 80px -20px rgba(168, 85, 247, 0.25)',
          }}
          animate={{
            boxShadow: ['0 0 80px -20px rgba(168, 85, 247, 0.25)', '0 0 100px -10px rgba(168, 85, 247, 0.4)', '0 0 80px -20px rgba(168, 85, 247, 0.25)'],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
          <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-4 flex items-center justify-center shadow-lg">
            <Cpu className="text-white w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2 font-sans tracking-tight">
            Phenomeny <br/> Operating Layer
          </h3>
          <p className="text-sm text-indigo-200/80 font-medium">
            AI-enabled system orchestration
          </p>
        </motion.div>

        {/* Icons & Connections */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Ring 1 */}
          {desktopLayout.ring1.map((item, i) => (
            <React.Fragment key={`r1-${i}`}>
               {/* Use a wrapper div centered in the parent to create a local coordinate system */}
               <div className="absolute pointer-events-auto" style={{ transform: `translate(${item.x}px, ${item.y}px)` }}>
                  <SystemIcon {...item} delay={i * 0.1} />
               </div>
               <ConnectionLine 
                 startX={item.x} startY={item.y} 
                 endX={0} endY={0} 
                 color="#60A5FA" // Blue
                 delay={i * 0.2} 
               />
            </React.Fragment>
          ))}

          {/* Ring 2 */}
          {desktopLayout.ring2.map((item, i) => (
            <React.Fragment key={`r2-${i}`}>
               <div className="absolute pointer-events-auto" style={{ transform: `translate(${item.x}px, ${item.y}px)` }}>
                  <SystemIcon {...item} delay={0.5 + i * 0.1} />
               </div>
               <ConnectionLine 
                 startX={item.x} startY={item.y} 
                 endX={0} endY={0} 
                 color="#A78BFA" // Purple
                 delay={0.5 + i * 0.2} 
               />
            </React.Fragment>
          ))}

          {/* Ring 3 */}
          {desktopLayout.ring3.map((item, i) => (
            <React.Fragment key={`r3-${i}`}>
               <div className="absolute pointer-events-auto" style={{ transform: `translate(${item.x}px, ${item.y}px)` }}>
                  <SystemIcon {...item} delay={1 + i * 0.1} />
               </div>
               <ConnectionLine 
                 startX={item.x} startY={item.y} 
                 endX={0} endY={0} 
                 color="#FBBF24" // Amber
                 delay={1 + i * 0.2} 
               />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Footer Note */}
      <div className="relative z-10 mt-12 md:mt-[-50px] text-center px-6">
        <p className="text-sm md:text-base text-gray-500 font-medium tracking-wide">
          Phenomeny connects existing systems without replacing what already works.
        </p>
      </div>

    </section>
  );
};

export default OperatingLayer;