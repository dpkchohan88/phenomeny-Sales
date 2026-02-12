import React from 'react';

const AIBadge = () => {
  return (
    <div className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-purple-500/20 bg-[#15171B]/80 backdrop-blur-md shadow-sm">
      <span className="flex h-1.5 w-1.5 rounded-full bg-purple-400 mr-2 shadow-[0_0_8px_rgba(192,132,252,0.6)] animate-pulse" />
      <span className="text-[11px] md:text-xs font-medium text-purple-200/90 tracking-wide uppercase">
        AI-Enabled Operating Layer
      </span>
    </div>
  );
};

export default AIBadge;