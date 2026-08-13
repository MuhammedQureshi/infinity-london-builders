import React, { useState } from 'react';
import { ArrowUpRight, MapPin, Calendar, Ruler, ChevronRight, X, ShieldCheck, Tag, Clock } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/constructionData';
import { FeaturedProject } from '../types';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

export const FeaturedProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<FeaturedProject | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredProjects = activeFilter === 'all'
    ? FEATURED_PROJECTS
    : activeFilter === 'extensions'
    ? FEATURED_PROJECTS.filter(p => p.category.toLowerCase().includes('extension') || p.category.toLowerCase().includes('loft'))
    : activeFilter === 'refurbishments'
    ? FEATURED_PROJECTS.filter(p => p.category.toLowerCase().includes('renovation') || p.category.toLowerCase().includes('remodel'))
    : FEATURED_PROJECTS.filter(p => p.tier === 'premium' || p.category.toLowerCase().includes('rebuild') || p.category.toLowerCase().includes('basement'));

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-12 bg-[#F9F9F9] text-[#111111]">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Header */}
        <ScrollReveal duration={0.65}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-zinc-200">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-200/80 text-zinc-800 text-xs font-sans tracking-widest uppercase font-semibold">
                OUR PROJECT PORTFOLIO
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#111111] leading-tight">
                Featured Works & Completed Projects
              </h2>
              <p className="font-sans text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
                From home extensions, loft conversions, and kitchen remodels to complete house refurbishments and large structural builds across London.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3.5 rounded-full border-2 border-[#111111] bg-[#111111] text-white hover:bg-[#C5A880] hover:text-[#111111] hover:border-[#C5A880] text-xs font-sans uppercase tracking-[0.18em] font-bold transition-all duration-300 flex items-center gap-2 group shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer"
                id="view-all-builds-btn"
              >
                <span>DISCUSS YOUR PROJECT</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Filter Tabs Bar */}
        <ScrollReveal delay={0.1} duration={0.6}>
          <div className="flex flex-wrap items-center gap-3 pt-2 pb-2">
            <span className="text-xs font-sans uppercase tracking-wider text-zinc-500 font-semibold mr-2">
              PROJECT CATEGORY:
            </span>

            {/* All Button */}
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-[0.12em] transition-all duration-300 border active:scale-[0.98] ${
                activeFilter === 'all'
                  ? 'bg-[#111111] text-white border-[#111111] shadow-md scale-[1.02]'
                  : 'bg-white text-zinc-700 border-zinc-300 hover:border-[#111111] hover:bg-zinc-100'
              }`}
            >
              All Projects ({FEATURED_PROJECTS.length})
            </button>

            {/* Extensions & Lofts */}
            <button
              onClick={() => setActiveFilter('extensions')}
              className={`px-4 py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-[0.12em] transition-all duration-300 border flex items-center gap-2 active:scale-[0.98] ${
                activeFilter === 'extensions'
                  ? 'bg-[#C5A880] text-[#111111] border-[#C5A880] shadow-md scale-[1.02]'
                  : 'bg-white text-zinc-700 border-zinc-300 hover:border-[#C5A880] hover:bg-amber-50/50'
              }`}
            >
              <span>Extensions & Lofts</span>
            </button>

            {/* Refurbishments */}
            <button
              onClick={() => setActiveFilter('refurbishments')}
              className={`px-4 py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-[0.12em] transition-all duration-300 border flex items-center gap-2 active:scale-[0.98] ${
                activeFilter === 'refurbishments'
                  ? 'bg-[#111111] text-white border-[#111111] shadow-md scale-[1.02]'
                  : 'bg-white text-zinc-700 border-zinc-300 hover:border-[#111111] hover:bg-zinc-100'
              }`}
            >
              <span>Refurbishments & Remodels</span>
            </button>

            {/* Structural & Rebuilds */}
            <button
              onClick={() => setActiveFilter('structural')}
              className={`px-4 py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-[0.12em] transition-all duration-300 border flex items-center gap-2 active:scale-[0.98] ${
                activeFilter === 'structural'
                  ? 'bg-zinc-900 text-amber-200 border-zinc-900 shadow-md scale-[1.02]'
                  : 'bg-white text-zinc-700 border-zinc-300 hover:border-zinc-900 hover:bg-zinc-100'
              }`}
            >
              <span>Large Structural Builds</span>
            </button>
          </div>
        </ScrollReveal>

        {/* Dynamic Project Cards Grid */}
        <StaggerContainer
          key={activeFilter}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch"
          staggerDelay={0.1}
        >
          {filteredProjects.map((project) => (
            <StaggerItem key={project.id}>
              <div
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-2xl overflow-hidden bg-zinc-900 cursor-pointer h-[420px] sm:h-[450px] shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-between border border-zinc-800"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover filter contrast-[1.05] transition-transform duration-700 group-hover:scale-105 absolute inset-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/50 to-black/20 opacity-90 transition-opacity group-hover:opacity-95" />
                
                {/* Top Card Badges */}
                <div className="relative z-10 p-6 flex items-start justify-between gap-2 w-full">
                  <div className="flex flex-col gap-1.5 items-start">
                    <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[10px] font-sans tracking-wider uppercase font-semibold text-white">
                      {project.category}
                    </span>
                    {project.tierLabel && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider bg-[#C5A880] text-[#111111]">
                        {project.tierLabel}
                      </span>
                    )}
                  </div>

                  <div className="w-10 h-10 rounded-full bg-[#C5A880] text-[#111111] flex items-center justify-center shrink-0 transform group-hover:scale-110 group-hover:bg-white transition-all shadow-md">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Bottom Content Area */}
                <div className="relative z-10 p-6 space-y-3 text-white">
                  <div className="flex items-center gap-2 text-xs text-[#C5A880] font-sans">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{project.location}</span>
                    <span>•</span>
                    <span className="shrink-0">{project.duration}</span>
                  </div>

                  <h3 className="font-serif text-2xl font-normal leading-snug group-hover:text-[#C5A880] transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 font-sans line-clamp-2 font-light leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-[11px] font-sans text-zinc-400 border-t border-white/10">
                    <span className="font-mono text-[#C5A880]">Area: {project.area}</span>
                    <span className="group-hover:text-white transition-colors font-semibold flex items-center gap-1">
                      VIEW DETAILS <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>

      {/* Interactive Project Drawer / Inspection Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-[#111111]/80 backdrop-blur-md flex justify-end animate-fade-in">
          <div className="w-full max-w-2xl bg-[#111111] border-l border-zinc-800 text-white h-full overflow-y-auto p-6 sm:p-10 flex flex-col justify-between space-y-8 shadow-2xl">
            
            <div className="space-y-6">
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-sans uppercase tracking-[0.2em] text-[#C5A880]">
                    PROJECT OVERVIEW
                  </span>
                  {selectedProject.tierLabel && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase font-bold bg-[#C5A880]/20 text-[#C5A880] border border-[#C5A880]/40">
                      {selectedProject.tierLabel}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-[#C5A880] flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close project modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Title & Metadata */}
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-xs text-[#C5A880]">
                  <MapPin className="w-4 h-4" />
                  <span>{selectedProject.location}</span>
                  <span>•</span>
                  <span>Completed {selectedProject.year}</span>
                  <span>•</span>
                  <Clock className="w-3.5 h-3.5" />
                  <span>{selectedProject.duration}</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
                  {selectedProject.title}
                </h2>
              </div>

              {/* Image Preview */}
              <div className="relative rounded-xl overflow-hidden aspect-video border border-zinc-800">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Description */}
              <div className="space-y-4 text-sm text-zinc-300 font-light leading-relaxed">
                <h3 className="text-xs font-sans uppercase tracking-widest text-zinc-400 font-semibold">
                  PROJECT DESCRIPTION
                </h3>
                <p>{selectedProject.fullDescription}</p>
              </div>

              {/* Engineering Highlight Card */}
              <div className="p-5 rounded-xl bg-zinc-900/90 border border-[#C5A880]/30 space-y-2">
                <div className="flex items-center gap-2 text-xs text-[#C5A880] font-semibold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>STRUCTURAL HIGHLIGHT</span>
                </div>
                <p className="text-sm text-zinc-200 font-serif italic">
                  "{selectedProject.structuralHighlight}"
                </p>
              </div>

              {/* Specs List */}
              <div className="space-y-3">
                <h3 className="text-xs font-sans uppercase tracking-widest text-zinc-400 font-semibold">
                  WORK SPECIFICATIONS
                </h3>
                <ul className="space-y-2 text-xs text-zinc-300 font-sans">
                  {selectedProject.engineeringSpecs.map((spec, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] mt-1.5 shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Client Quote */}
              {selectedProject.clientQuote && (
                <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-2">
                  <p className="text-sm font-serif italic text-zinc-300">
                    "{selectedProject.clientQuote.text}"
                  </p>
                  <div className="text-xs text-[#C5A880] font-sans">
                    — {selectedProject.clientQuote.author}, <span className="text-zinc-400">{selectedProject.clientQuote.role}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-zinc-800 flex items-center justify-between gap-4">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-3.5 rounded-full border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 text-xs font-sans uppercase tracking-[0.18em] font-semibold transition-all duration-300 active:scale-[0.98] cursor-pointer"
              >
                Close Window
              </button>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedProject(null);
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-7 py-3.5 rounded-full bg-[#C5A880] text-[#111111] border border-[#DFCA9F] hover:bg-white text-xs font-sans font-bold uppercase tracking-[0.18em] shadow-lg hover:shadow-[0_0_25px_rgba(197,168,128,0.4)] active:scale-[0.98] transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <span>GET A FREE QUOTE</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
