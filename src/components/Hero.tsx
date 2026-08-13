import React from 'react';
import { ArrowDownRight, Award, Shield, CheckCircle2, Clock } from 'lucide-react';
import { STATS_DATA } from '../data/constructionData';
import { ScrollReveal } from './ScrollReveal';

export const Hero: React.FC = () => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative w-full min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-12 bg-[#111111] overflow-hidden">
      
      {/* High-Res Luxury Building Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={new URL('../assets/images/luxury_hero_bg_1786619260131.jpg', import.meta.url).href}
          alt="Luxury High-Res London Residence Structural Build"
          className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.05] transition-transform duration-1000 scale-105"
          referrerPolicy="no-referrer"
        />
        
        {/* Subtle Dark Gradient Overlay for Crisp Text Contrast while Keeping Background Vivid */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/90 via-[#111111]/70 to-[#111111]/20 sm:w-4/5 lg:w-3/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-[#111111]/40" />
      </div>

      {/* Main Left Content Overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto my-auto pt-4 sm:pt-8 pb-6 sm:pb-10">
        <div className="max-w-2xl lg:max-w-3xl p-0 space-y-7 sm:space-y-9 lg:space-y-10">
          
          {/* Eyebrow badge */}
          <ScrollReveal delay={0.1} distance={18}>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#C5A880]/50 bg-[#C5A880]/15 text-[#C5A880] text-[11px] sm:text-xs font-sans tracking-[0.22em] uppercase font-bold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse" />
              <span>PRESTIGE LONDON CONTRACTING</span>
            </div>
          </ScrollReveal>

          {/* Headline */}
          <ScrollReveal delay={0.2} distance={28}>
            <h1 className="font-serif text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.2] sm:leading-[1.18] tracking-tight">
              We Build Timeless Spaces. <br className="hidden sm:inline" />
              <span className="italic text-[#C5A880] mt-1 inline-block">Built Around You.</span>
            </h1>
          </ScrollReveal>

          {/* Subtitle / Description */}
          <ScrollReveal delay={0.3} distance={24}>
            <p className="font-sans text-sm sm:text-base lg:text-lg text-zinc-200 font-light leading-[1.8] max-w-xl drop-shadow-sm">
              From concept to completion, we craft extraordinary structural builds, subterranean basement conversions, and bespoke luxury extensions across Chelsea, Kensington, and Mayfair.
            </p>
          </ScrollReveal>

          {/* Crisp CTA Buttons with Generous Spacing */}
          <ScrollReveal delay={0.4} distance={20}>
            <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="px-8 py-4 sm:px-9 sm:py-4.5 rounded-full bg-[#C5A880] text-[#111111] border border-[#DFCA9F] hover:bg-white hover:text-[#111111] hover:border-white text-xs sm:text-sm font-sans uppercase tracking-[0.18em] font-bold transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_4px_25px_rgba(197,168,128,0.35)] hover:shadow-[0_0_35px_rgba(197,168,128,0.6)] active:scale-[0.98] group cursor-pointer"
                id="hero-explore-btn"
              >
                <span>EXPLORE OUR WORK</span>
                <ArrowDownRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-7 py-4 sm:px-8 sm:py-4.5 rounded-full border border-white/40 bg-zinc-900/80 backdrop-blur-md hover:bg-white hover:text-[#111111] hover:border-white text-white text-xs sm:text-sm font-sans uppercase tracking-[0.18em] font-bold transition-all duration-300 text-center cursor-pointer shadow-lg active:scale-[0.98]"
                id="hero-consult-btn"
              >
                OUR CONTRACTING SCOPE
              </a>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};


