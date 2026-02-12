import React from 'react';
import { 
  Search, CheckSquare, Network, Link as LinkIcon, Bot, Calendar, PenTool, Folder, Briefcase,
  Bell, PieChart, Flag, Square, FileText, Timer, CircleDot, Sparkles,
  Code, Milestone, FormInput as FormInputIcon, Zap, Sliders, Clock,
  Calculator, Brain, MessageSquare, PlayCircle, LayoutGrid, Key,
  Mail, BarChart3, Watch, Columns, Plug, User,
  Tag, Headphones, ListChecks, CalendarCheck, Table, Presentation, AlignLeft, Map, Inbox, Users,
  Workflow, LayoutDashboard, ShieldCheck
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Tile = ({ icon: Icon, label, className }) => (
  <div className={cn(
    "group relative flex flex-col items-center justify-center p-4 md:p-6 border-r border-b border-white/5 transition-all duration-300 h-full min-h-[120px] md:min-h-[140px]",
    "hover:bg-[#1A1D21] hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]",
    className
  )}>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    <Icon className="relative z-10 w-5 h-5 md:w-6 md:h-6 text-gray-500 mb-2 md:mb-3 stroke-[1.5] group-hover:text-gray-200 group-hover:scale-110 transition-all duration-300 ease-out" />
    <span className="relative z-10 text-[12px] md:text-sm font-medium text-gray-400 text-center leading-tight group-hover:text-gray-100 transition-colors duration-300">{label}</span>
  </div>
);

const HighlightedTile = ({ title, children, theme, className, icon: CustomIcon, description }) => {
    const themes = {
        blue: { 
            bgBase: "bg-[rgba(0,153,255,0.25)]", 
            borderBase: "border-[rgba(0,153,255,0.6)]",
            iconColor: "text-[#0099FF]",
            gradient: "from-[#0099FF]/40 to-[#0099FF]/10",
            shadow: "shadow-[0_0_30px_-5px_rgba(0,153,255,0.3)]"
        },
        orange: { 
            bgBase: "bg-[rgba(255,140,66,0.25)]",
            borderBase: "border-[rgba(255,140,66,0.6)]",
            iconColor: "text-[#FF8C42]",
            gradient: "from-[#FF8C42]/40 to-[#FF8C42]/10",
            shadow: "shadow-[0_0_30px_-5px_rgba(255,140,66,0.3)]"
        },
        purple: { 
            bgBase: "bg-[rgba(255,20,147,0.25)]",
            borderBase: "border-[rgba(255,20,147,0.6)]",
            iconColor: "text-[#FF1493]",
            gradient: "from-[#FF1493]/45 to-[#9D4EDD]/45",
            shadow: "shadow-[0_0_30px_-5px_rgba(255,20,147,0.3)]"
        },
        green: { 
            bgBase: "bg-[rgba(0,255,136,0.25)]",
            borderBase: "border-[rgba(0,255,136,0.6)]",
            iconColor: "text-[#00FF88]",
            gradient: "from-[#00FF88]/35 to-[#00DD77]/35",
            shadow: "shadow-[0_0_30px_-5px_rgba(0,255,136,0.3)]"
        }
    };

    const t = themes[theme] || themes.blue;

  return (
    <div className={cn(
      "relative flex flex-col items-center justify-between p-6 overflow-visible transition-all duration-300 h-full min-h-[200px] md:min-h-[280px] group border-2 rounded-xl lg:rounded-none",
      t.bgBase,
      t.borderBase,
      t.shadow,
      "hover:-translate-y-1 hover:shadow-2xl hover:z-30",
      className
    )}>
      
      <div className={cn(
          "absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none bg-gradient-to-br",
          t.gradient
      )} />

      <div className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] rounded-full blur-[50px] opacity-60 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none bg-current",
          t.iconColor
      )} />

      {/* Content hidden on mobile/tablet for highlighted tiles to save space, keeping icon mostly */}
      <div className="hidden lg:flex flex-1 w-full items-center justify-center mb-6 z-10 relative">
         {children}
      </div>
      
      <div className="relative z-10 flex flex-col items-center gap-3 text-center w-full my-auto lg:my-0">
        <div 
            className={cn(
                "transition-transform duration-300 transform group-hover:scale-110 drop-shadow-lg",
                t.iconColor
            )}
        >
          {CustomIcon && <CustomIcon className="w-8 h-8 md:w-10 md:h-10 fill-current" strokeWidth={0} />}
        </div>
        
        <div>
            <h3 className="text-lg md:text-xl font-bold text-white tracking-wide mb-2 drop-shadow-md">
                {title}
            </h3>
            {description && (
                <p className="text-[11px] md:text-xs text-gray-200 font-medium leading-relaxed max-w-[200px] mx-auto opacity-90 group-hover:opacity-100 transition-opacity">
                    {description}
                </p>
            )}
        </div>
      </div>
    </div>
  );
};

const CapabilityMatrix = () => {
  return (
    <section className="relative py-16 md:py-24 bg-[#0B0D10] overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0D10] via-transparent to-[#0B0D10] pointer-events-none opacity-50" />
      
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 mb-12 md:mb-20">
        <h2 className="text-[28px] md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 tracking-tight leading-[1.15]">
          All apps, AI Agents,<br />
          and humans in Phenomeny.
        </h2>
        <p className="text-[16px] md:text-lg text-gray-400 font-medium">
          100+ products to replace fragmented software & maximize human productivity.
        </p>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto border-t border-l border-white/5 shadow-2xl bg-[#0B0D10]/50 backdrop-blur-sm">
        
        {/* Desktop Grid Layout (10 columns) */}
        <div className="hidden lg:grid grid-cols-10">
          <Tile icon={Search} label="Connected Search" className="col-start-2" />
          <Tile icon={CheckSquare} label="Tasks" />
          <Tile icon={Network} label="Mind Maps" />
          <Tile icon={LinkIcon} label="Wikis" />
          <Tile icon={Bot} label="AI Notetaker" />
          <Tile icon={Calendar} label="Calendar" />
          <Tile icon={PenTool} label="Proofing" />
          <Tile icon={Folder} label="Portfolios" />
          <Tile icon={Briefcase} label="Templates" />

          <Tile icon={Bell} label="Reminders" className="col-start-1" />
          <Tile icon={PieChart} label="Reporting" />
          <Tile icon={Flag} label="Goals" />
          
          <div className="col-span-2 row-span-2 relative z-10">
            <HighlightedTile title="Connected Systems" theme="blue" icon={Workflow} description="Systems that already run your business are connected into a single operational flow." />
          </div>

          <div className="col-span-2 row-span-2 relative z-10">
            <HighlightedTile title="Unified Visibility" theme="orange" icon={LayoutDashboard} description="Operational data becomes visible across teams, customers, and outcomes." />
          </div>

          <Tile icon={Timer} label="Sprints" />
          <Tile icon={CircleDot} label="Custom Status" />
          <Tile icon={Sparkles} label="AI Writer" />

          <Tile icon={Code} label="API Calls" className="col-start-1" />
          <Tile icon={Milestone} label="Milestones" />
          <Tile icon={FormInputIcon} label="Forms" />
          
          <Tile icon={Zap} label="Automations" className="col-start-8" />
          <Tile icon={Sliders} label="Custom Fields" />
          <Tile icon={Clock} label="Timesheets" />

          <Tile icon={Flag} label="Priorities" className="col-start-2" />
          <Tile icon={Calculator} label="Time Estimates" />

          <div className="col-span-2 row-span-2 relative z-10">
             <HighlightedTile title="Assisted Execution" theme="purple" icon={Sparkles} description="AI supports routine coordination so teams focus on decisions." />
          </div>

          <div className="col-span-2 row-span-2 relative z-10">
            <HighlightedTile title="Ownership & Control" theme="green" icon={ShieldCheck} description="You retain control over data, workflows, and evolution." />
          </div>

          <Tile icon={PlayCircle} label="Clips" />
          <Tile icon={LayoutGrid} label="Everything view" />
          <Tile icon={Key} label="Single Sign-On" />

          <Tile icon={Mail} label="Emails" className="col-start-1" />
          <Tile icon={BarChart3} label="Dashboards" />
          <Tile icon={Watch} label="Time Tracking" />

          <Tile icon={Columns} label="Kanban Boards" className="col-start-8" />
          <Tile icon={Plug} label="Integrations" />
          <Tile icon={User} label="Guests" />

          <Tile icon={Tag} label="Tags" className="col-start-1" />
          <Tile icon={Headphones} label="24/7 Support" />
          <Tile icon={ListChecks} label="Checklists" />
          <Tile icon={CalendarCheck} label="Scheduling" />
          <Tile icon={Table} label="Spreadsheets" />
          <Tile icon={Presentation} label="Whiteboards" />
          <Tile icon={AlignLeft} label="Gantt Charts" />
          <Tile icon={Map} label="Roadmaps" />
          <Tile icon={Inbox} label="Inbox" />
          <Tile icon={Users} label="Teams" />
        </div>

        {/* Tablet Grid (2 cols) & Mobile Stack (1 col) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-4 p-4">
           {/* Highlighted items take full width on mobile if needed, or stick to grid */}
           <HighlightedTile title="Connected Systems" theme="blue" className="col-span-1 md:col-span-1" icon={Workflow} description="Connected operational flow." />
           <HighlightedTile title="Unified Visibility" theme="orange" className="col-span-1 md:col-span-1" icon={LayoutDashboard} description="Real-time data visibility." />
           <HighlightedTile title="Assisted Execution" theme="purple" className="col-span-1 md:col-span-1" icon={Sparkles} description="AI-supported coordination." />
           <HighlightedTile title="Ownership & Control" theme="green" className="col-span-1 md:col-span-1" icon={ShieldCheck} description="Total data control." />
           
           <div className="grid grid-cols-2 md:grid-cols-2 gap-px bg-white/5 col-span-1 md:col-span-2 border border-white/5 rounded-xl overflow-hidden mt-4">
               <Tile icon={Search} label="Connected Search" />
               <Tile icon={CheckSquare} label="Tasks" />
               <Tile icon={Bot} label="AI Notetaker" />
               <Tile icon={Flag} label="Goals" />
               <Tile icon={Bell} label="Reminders" />
               <Tile icon={Zap} label="Automations" />
               <Tile icon={BarChart3} label="Dashboards" />
               <Tile icon={Presentation} label="Whiteboards" />
           </div>
        </div>

      </div>
    </section>
  );
};

export default CapabilityMatrix;