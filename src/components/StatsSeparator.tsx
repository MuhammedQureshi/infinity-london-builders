import React from 'react';
import { Clock, CheckCircle2, Shield, Award } from 'lucide-react';
import { STATS_DATA } from '../data/constructionData';
import { ScrollReveal } from './ScrollReveal';

export const StatsSeparator: React.FC = () => {
  const statIcons = [
    <Clock key="clock" className="w-4 h-4 text-[#C5A880]" />,
    <CheckCircle2 key="check" className="w-4 h-4 text-[#C5A880]" />,
    <Shield key="shield" className="w-4 h-4 text-[#C5A880]" />,
    <Award key="award" className="w-4 h-4 text-[#C5A880]" />,
  ];

  return (
    <div className="hidden sm:block w-full bg-[#111111] border-y border-zinc-800/80 py-8 px-4 sm:px-6 lg:px-12 relative z-20">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal duration={0.7} distance={20}>
          <div className="w-full bg-zinc-900/90 backdrop-blur-md border border-zinc-800 rounded-2xl sm:rounded-full px-6 lg:px-10 py-6 shadow-2xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-zinc-800/80">
              {STATS_DATA.map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`flex items-center gap-4 ${
                    idx > 0 && idx % 2 === 0 ? 'pt-4 lg:pt-0' : ''
                  } ${idx % 2 !== 0 ? 'pt-4 sm:pt-0' : ''} ${
                    idx > 0 ? 'lg:pl-6' : ''
                  }`}
                >
                  <div className="p-3 rounded-full bg-black/80 border border-zinc-800 shrink-0 shadow-inner">
                    {statIcons[idx % statIcons.length]}
                  </div>
                  <div>
                    <div className="font-serif text-2xl sm:text-3xl text-white font-medium">
                      {stat.value}
                    </div>
                    <div className="text-xs font-sans text-zinc-300 font-medium tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

