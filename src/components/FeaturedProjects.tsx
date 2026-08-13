import React, { useState } from 'react';
import { ArrowUpRight, MapPin, Calendar, Ruler, ChevronRight, X, ShieldCheck } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/constructionData';
import { FeaturedProject } from '../types';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

export const FeaturedProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<FeaturedProject | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = ['all', 'Structural Extension', 'Commercial Fit-Out', 'Subterranean Build', 'Residential Rebuild'];

  const filteredProjects = activeFilter === 'all' 
    ? FEATURED_PROJECTS 
    : FEATURED_PROJECTS.filter(p => p.category.toLowerCase().includes(activeFilter.toLowerCase()) || p.title.toLowerCase().includes(activeFilter.toLowerCase()));

  const getProjectByPosition = (id: string) => {
    return FEATURED_PROJECTS.find(p => p.id === id) || FEATURED_PROJECTS[0];
  };

  const projectKensington = getProjectByPosition('kensington-extension');
  const projectMayfair = getProjectByPosition('mayfair-commercial');
  const projectBelgravia = getProjectByPosition('belgravia-basement');
  const projectChelsea = getProjectByPosition('chelsea-residential');

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-12 bg-[#F9F9F9] text-[#111111]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <ScrollReveal duration={0.65}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-zinc-200">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200/80 text-zinc-700 text-xs font-sans tracking-widest uppercase font-semibold">
                FEATURED BUILDS
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#111111] leading-tight">
                Structures That Define Excellence
              </h2>
              <p className="font-sans text-sm sm:text-base text-zinc-600 font-light">
                Explore a curated selection of our master craft structural extensions, subterranean conversions, and prestige developments across London's prime postcodes.
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
                className="px-6 py-3 rounded-full border-2 border-[#111111] bg-[#111111] text-white hover:bg-[#C5A880] hover:text-[#111111] hover:border-[#C5A880] text-xs font-sans uppercase tracking-[0.18em] font-bold transition-all duration-300 flex items-center gap-2 group shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer"
                id="view-all-builds-btn"
              >
                <span>COMMISSION A BUILD</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Desktop & Tablet Asymmetrical Architectural Grid */}
        <StaggerContainer className="hidden md:grid grid-cols-12 gap-6 lg:gap-8 items-stretch" staggerDelay={0.12}>
          
          {/* Card 1: Kensington Extension (Row 1 Left, 7 Cols) */}
          <StaggerItem className="col-span-6 lg:col-span-7">
            <div
              onClick={() => setSelectedProject(projectKensington)}
              className="relative group rounded-2xl overflow-hidden bg-zinc-900 cursor-pointer h-[380px] lg:h-[440px] shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={projectKensington.imageUrl}
                alt={projectKensington.title}
                className="w-full h-full object-cover filter contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent opacity-90 transition-opacity group-hover:opacity-95" />
              
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between text-white overflow-hidden">
                <div className="flex justify-between items-start gap-3 w-full">
                  <span className="max-w-[70%] truncate whitespace-nowrap px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-sans tracking-wider uppercase font-medium">
                    {projectKensington.category}
                  </span>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#C5A880]/90 text-[#111111] flex items-center justify-center shrink-0 transform group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-[#C5A880] font-sans">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{projectKensington.location}</span>
                    <span>•</span>
                    <span className="shrink-0">{projectKensington.area}</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal leading-snug group-hover:text-[#C5A880] transition-colors truncate">
                    {projectKensington.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 font-sans line-clamp-2 font-light leading-relaxed">
                    {projectKensington.summary}
                  </p>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Card 2: Mayfair Commercial (Row 1 Right, 5 Cols) */}
          <StaggerItem className="col-span-6 lg:col-span-5">
            <div
              onClick={() => setSelectedProject(projectMayfair)}
              className="relative group rounded-2xl overflow-hidden bg-zinc-900 cursor-pointer h-[380px] lg:h-[440px] shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={projectMayfair.imageUrl}
                alt={projectMayfair.title}
                className="w-full h-full object-cover filter contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent opacity-90 transition-opacity group-hover:opacity-95" />
              
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between text-white overflow-hidden">
                <div className="flex justify-between items-start gap-3 w-full">
                  <span className="max-w-[70%] truncate whitespace-nowrap px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-sans tracking-wider uppercase font-medium">
                    {projectMayfair.category}
                  </span>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#C5A880]/90 text-[#111111] flex items-center justify-center shrink-0 transform group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-[#C5A880] font-sans">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{projectMayfair.location}</span>
                    <span>•</span>
                    <span className="shrink-0">{projectMayfair.area}</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal leading-snug group-hover:text-[#C5A880] transition-colors truncate">
                    {projectMayfair.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 font-sans line-clamp-2 font-light leading-relaxed">
                    {projectMayfair.summary}
                  </p>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Card 3: Belgravia Basement (Row 2 Left, 5 Cols) */}
          <StaggerItem className="col-span-6 lg:col-span-5">
            <div
              onClick={() => setSelectedProject(projectBelgravia)}
              className="relative group rounded-2xl overflow-hidden bg-zinc-900 cursor-pointer h-[380px] lg:h-[440px] shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={projectBelgravia.imageUrl}
                alt={projectBelgravia.title}
                className="w-full h-full object-cover filter contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent opacity-90 transition-opacity group-hover:opacity-95" />
              
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between text-white overflow-hidden">
                <div className="flex justify-between items-start gap-3 w-full">
                  <span className="max-w-[70%] truncate whitespace-nowrap px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-sans tracking-wider uppercase font-medium">
                    {projectBelgravia.category}
                  </span>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#C5A880]/90 text-[#111111] flex items-center justify-center shrink-0 transform group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-[#C5A880] font-sans">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{projectBelgravia.location}</span>
                    <span>•</span>
                    <span className="shrink-0">{projectBelgravia.area}</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal leading-snug group-hover:text-[#C5A880] transition-colors truncate">
                    {projectBelgravia.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 font-sans line-clamp-2 font-light leading-relaxed">
                    {projectBelgravia.summary}
                  </p>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Card 4: Chelsea Residential Rebuild (Row 2 Right, 7 Cols) */}
          <StaggerItem className="col-span-6 lg:col-span-7">
            <div
              onClick={() => setSelectedProject(projectChelsea)}
              className="relative group rounded-2xl overflow-hidden bg-zinc-900 cursor-pointer h-[380px] lg:h-[440px] shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={projectChelsea.imageUrl}
                alt={projectChelsea.title}
                className="w-full h-full object-cover filter contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent opacity-90 transition-opacity group-hover:opacity-95" />
              
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between text-white overflow-hidden">
                <div className="flex justify-between items-start gap-3 w-full">
                  <span className="max-w-[70%] truncate whitespace-nowrap px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-sans tracking-wider uppercase font-medium">
                    {projectChelsea.category}
                  </span>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#C5A880]/90 text-[#111111] flex items-center justify-center shrink-0 transform group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-[#C5A880] font-sans">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{projectChelsea.location}</span>
                    <span>•</span>
                    <span className="shrink-0">{projectChelsea.area}</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal leading-snug group-hover:text-[#C5A880] transition-colors truncate">
                    {projectChelsea.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 font-sans line-clamp-2 font-light leading-relaxed">
                    {projectChelsea.summary}
                  </p>
                </div>
              </div>
            </div>
          </StaggerItem>

        </StaggerContainer>

        {/* Mobile Layout: Touch-Swipe Horizontal Carousel Slider */}
        <div className="md:hidden space-y-4">
          <div className="flex items-center justify-between text-xs text-zinc-500 font-sans">
            <span>SWIPE TO EXPLORE BUILDS</span>
            <span>4 PROJECTS</span>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory no-scrollbar w-full">
            {FEATURED_PROJECTS.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="snap-center shrink-0 w-[85vw] max-w-[340px] relative rounded-2xl overflow-hidden bg-zinc-900 cursor-pointer aspect-[3/4] shadow-lg"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white overflow-hidden">
                  <div className="flex justify-between items-start gap-2 w-full">
                    <span className="max-w-[70%] truncate whitespace-nowrap px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] uppercase tracking-wider font-sans">
                      {project.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#C5A880] text-[#111111] flex items-center justify-center shrink-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs text-[#C5A880] font-sans flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </div>
                    <h3 className="font-serif text-xl font-normal truncate">
                      {project.title}
                    </h3>
                    <p className="text-xs text-zinc-300 line-clamp-2 font-light">
                      {project.summary}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Interactive Structural Project Drawer / Inspection Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-[#111111]/80 backdrop-blur-md flex justify-end animate-fade-in">
          <div className="w-full max-w-2xl bg-[#111111] border-l border-zinc-800 text-white h-full overflow-y-auto p-6 sm:p-10 flex flex-col justify-between space-y-8 shadow-2xl">
            
            <div className="space-y-6">
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <span className="text-xs font-sans uppercase tracking-[0.2em] text-[#C5A880]">
                  STRUCTURAL BUILD DOSSIER
                </span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-[#C5A880] flex items-center justify-center transition-colors"
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
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#111111]/80 text-xs text-zinc-300 font-sans border border-white/10">
                  Value Range: {selectedProject.valueRange}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4 text-sm text-zinc-300 font-light leading-relaxed">
                <h3 className="text-xs font-sans uppercase tracking-widest text-zinc-400 font-semibold">
                  PROJECT OVERVIEW
                </h3>
                <p>{selectedProject.fullDescription}</p>
              </div>

              {/* Engineering Highlight Card */}
              <div className="p-5 rounded-xl bg-zinc-900/90 border border-[#C5A880]/30 space-y-2">
                <div className="flex items-center gap-2 text-xs text-[#C5A880] font-semibold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>STRUCTURAL ENGINEERING HIGHLIGHT</span>
                </div>
                <p className="text-sm text-zinc-200 font-serif italic">
                  "{selectedProject.structuralHighlight}"
                </p>
              </div>

              {/* Engineering Specs List */}
              <div className="space-y-3">
                <h3 className="text-xs font-sans uppercase tracking-widest text-zinc-400 font-semibold">
                  TECHNICAL BUILD SPECIFICATIONS
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
                Close Dossier
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
                <span>COMMISSION SIMILAR BUILD</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
