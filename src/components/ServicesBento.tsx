import React, { useState } from 'react';
import { Building2, ShieldCheck, Sparkles, Layers, Wrench, ArrowUpRight, Check, Clock, ChevronRight, ChevronLeft, X } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/constructionData';
import { ServiceCategory } from '../types';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

export const ServicesBento: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeServiceDetail, setActiveServiceDetail] = useState<ServiceCategory | null>(null);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-5 h-5 text-[#C5A880]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#C5A880]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#C5A880]" />;
      case 'Layers': return <Layers className="w-5 h-5 text-[#C5A880]" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-[#C5A880]" />;
      default: return <Building2 className="w-5 h-5 text-[#C5A880]" />;
    }
  };

  const categoriesToDisplay = selectedCategory === 'all'
    ? SERVICE_CATEGORIES
    : SERVICE_CATEGORIES.filter(cat => cat.id === selectedCategory);

  const handlePrevCategory = () => {
    const currentIndex = SERVICE_CATEGORIES.findIndex(cat => cat.id === selectedCategory);
    if (currentIndex > 0) {
      setSelectedCategory(SERVICE_CATEGORIES[currentIndex - 1].id);
    } else {
      setSelectedCategory(SERVICE_CATEGORIES[SERVICE_CATEGORIES.length - 1].id);
    }
  };

  const handleNextCategory = () => {
    const currentIndex = SERVICE_CATEGORIES.findIndex(cat => cat.id === selectedCategory);
    if (currentIndex >= 0 && currentIndex < SERVICE_CATEGORIES.length - 1) {
      setSelectedCategory(SERVICE_CATEGORIES[currentIndex + 1].id);
    } else {
      setSelectedCategory(SERVICE_CATEGORIES[0].id);
    }
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-12 bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Header */}
        <ScrollReveal duration={0.65}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-zinc-800">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[#C5A880] text-xs font-sans tracking-widest uppercase font-semibold">
                CONTRACTING CAPABILITIES
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight">
                Categorised Services
              </h2>
              <p className="font-sans text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                Explore our master contracting scope structured across five specialized engineering and construction divisions. Select a category below to filter capabilities.
              </p>
            </div>

            <div>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#C5A880] hover:text-white transition-colors group cursor-pointer"
                id="explore-services-cta"
              >
                <span className="font-semibold">INQUIRE SPECIFIC SCOPE</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Category Navigation Bar & Filter Buttons */}
        <ScrollReveal delay={0.1} duration={0.6}>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-zinc-500 font-sans">
              <span className="tracking-widest uppercase font-mono text-[11px] text-[#C5A880]">FILTER & NAVIGATE DIVISIONS</span>
              <span className="text-zinc-400">
                {selectedCategory === 'all' ? 'Showing All 5 Categories' : `Viewing Category ${SERVICE_CATEGORIES.find(c => c.id === selectedCategory)?.number}`}
              </span>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 no-scrollbar w-full">
              {/* All Button */}
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-[0.12em] whitespace-nowrap transition-all duration-300 shrink-0 border active:scale-[0.98] ${
                  selectedCategory === 'all'
                    ? 'bg-[#C5A880] text-[#111111] border-[#DFCA9F] shadow-[0_0_15px_rgba(197,168,128,0.3)] scale-[1.02]'
                    : 'bg-zinc-900/90 text-zinc-300 border-zinc-700/80 hover:border-[#C5A880]/70 hover:text-white hover:bg-zinc-800'
                }`}
                id="category-btn-all"
              >
                All Capabilities ({SERVICE_CATEGORIES.length})
              </button>

              {/* Category Navigation Buttons */}
              {SERVICE_CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-[0.12em] whitespace-nowrap transition-all duration-300 shrink-0 flex items-center gap-2 border active:scale-[0.98] ${
                      isActive
                        ? 'bg-[#C5A880] text-[#111111] border-[#DFCA9F] shadow-[0_0_15px_rgba(197,168,128,0.3)] scale-[1.02]'
                        : 'bg-zinc-900/90 text-zinc-300 border-zinc-700/80 hover:border-[#C5A880]/70 hover:text-white hover:bg-zinc-800'
                    }`}
                    id={`category-btn-${cat.id}`}
                  >
                    <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${isActive ? 'bg-[#111111]/20 text-[#111111] font-extrabold' : 'bg-zinc-800 text-[#C5A880]'}`}>
                      {cat.number}
                    </span>
                    <span>{cat.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Category Controls Bar (When a specific category is filtered) */}
        {selectedCategory !== 'all' && (
          <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs font-sans">
            <div className="flex items-center gap-2 text-zinc-300">
              <span className="text-[#C5A880] font-mono font-bold">CATEGORISED VIEW:</span>
              <span className="text-white font-medium">{SERVICE_CATEGORIES.find(c => c.id === selectedCategory)?.title}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevCategory}
                className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white flex items-center gap-1 transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Prev Category</span>
              </button>
              <button
                onClick={handleNextCategory}
                className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white flex items-center gap-1 transition-colors"
              >
                <span>Next Category</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#C5A880]" />
              </button>
            </div>
          </div>
        )}

        {/* Services Cards Grid - Clean, Concise, Legible */}
        <StaggerContainer
          key={selectedCategory}
          className={`grid gap-6 sm:gap-8 items-stretch ${
            selectedCategory === 'all'
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-1 max-w-3xl mx-auto'
          }`}
          staggerDelay={0.1}
        >
          {categoriesToDisplay.map((category) => (
            <StaggerItem key={category.id}>
              <div
                className="group relative bg-zinc-900/70 hover:bg-zinc-900 border border-zinc-800/90 hover:border-[#C5A880]/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 h-full"
              >
              {/* Subtle Gold Accent Top Line */}
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-zinc-800 group-hover:bg-[#C5A880] transition-colors" />

              <div className="space-y-5">
                {/* Top Badge Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-[#C5A880]/15 border border-[#C5A880]/30 text-[#C5A880] font-mono text-xs font-bold">
                      {category.number}
                    </span>
                    <span className="text-[10px] font-sans uppercase tracking-widest text-zinc-400 font-medium">
                      DIVISION SCOPE
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center shrink-0 group-hover:border-[#C5A880]/50 transition-colors">
                    {getCategoryIcon(category.iconName)}
                  </div>
                </div>

                {/* Title & Short Overview */}
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl text-white font-normal group-hover:text-[#C5A880] transition-colors leading-snug">
                    {category.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 font-sans font-light leading-relaxed">
                    {category.shortOverview}
                  </p>
                </div>

                {/* Categorised Sub-services Grid */}
                <div className="pt-4 border-t border-zinc-800/80 space-y-3">
                  <div className="flex items-center justify-between text-xs font-sans">
                    <span className="text-[11px] uppercase tracking-wider text-[#C5A880] font-semibold">
                      INCLUDED SERVICES ({category.items.length})
                    </span>
                    <span className="text-[11px] text-zinc-500 font-mono">SPEC CHECKLIST</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {category.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="p-2.5 rounded-lg bg-zinc-950/60 border border-zinc-800/60 flex items-center gap-2 text-xs text-zinc-300 font-sans"
                      >
                        <Check className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Duration & Key Standards Badges */}
                <div className="pt-3 flex flex-wrap items-center gap-2 text-[11px] font-sans">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-800/80 border border-zinc-700/60 text-zinc-300">
                    <Clock className="w-3 h-3 text-[#C5A880]" />
                    <span>{category.typicalDuration}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-800/80 border border-zinc-700/60 text-zinc-300">
                    <ShieldCheck className="w-3 h-3 text-[#C5A880]" />
                    <span>{category.keyStandards[0]}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveServiceDetail(category)}
                  className="w-full py-3 px-4 rounded-xl bg-[#C5A880]/15 border border-[#C5A880]/50 text-[#C5A880] hover:bg-[#C5A880] hover:text-[#111111] font-sans text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(197,168,128,0.35)] active:scale-[0.98] cursor-pointer"
                >
                  <span>VIEW SPECIFICATIONS</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="shrink-0 p-3 rounded-xl border border-[#C5A880]/50 bg-[#C5A880]/10 hover:bg-[#C5A880] text-[#C5A880] hover:text-[#111111] transition-all duration-300 hover:shadow-[0_0_15px_rgba(197,168,128,0.3)] active:scale-[0.95]"
                  title="Inquire this scope"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Detailed Service Category Modal */}
        {activeServiceDetail && (
          <div className="fixed inset-0 z-50 bg-[#111111]/85 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
            <div className="w-full max-w-2xl bg-[#111111] border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative text-white max-h-[90vh] overflow-y-auto">
              
              <button
                onClick={() => setActiveServiceDetail(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-[#C5A880] flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-[#C5A880]/40 flex items-center justify-center shrink-0">
                  {getCategoryIcon(activeServiceDetail.iconName)}
                </div>
                <div>
                  <span className="text-xs font-mono text-[#C5A880]">CATEGORY {activeServiceDetail.number}</span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                    {activeServiceDetail.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-sans uppercase tracking-widest text-zinc-400 font-semibold">
                  DETAILED CONTRACTING SCOPE
                </h4>
                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                  {activeServiceDetail.detailedDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1">
                  <div className="text-[11px] text-zinc-400 font-sans uppercase">TYPICAL BUILD TIMELINE</div>
                  <div className="text-sm font-serif text-[#C5A880]">{activeServiceDetail.typicalDuration}</div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1">
                  <div className="text-[11px] text-zinc-400 font-sans uppercase">QUALITY STANDARDS</div>
                  <div className="text-xs text-zinc-200 font-sans">
                    {activeServiceDetail.keyStandards.join(" • ")}
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-sans uppercase tracking-widest text-zinc-400 font-semibold">
                  LINE ITEM CONTRACTING SERVICES ({activeServiceDetail.items.length})
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300 font-sans">
                  {activeServiceDetail.items.map((item, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800/80 flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between gap-4">
                <button
                  onClick={() => setActiveServiceDetail(null)}
                  className="px-5 py-2.5 rounded-full border border-zinc-800 text-xs font-sans uppercase text-zinc-400 hover:text-white transition-colors"
                >
                  Close Scope
                </button>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveServiceDetail(null);
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#C5A880] text-[#111111] font-sans text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors"
                >
                  Request Consultation
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
