import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Clock, ShieldAlert, FileCheck, ChevronRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/constructionData';
import { ProcessStep } from '../types';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<ProcessStep | null>(null);

  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-12 bg-[#F9F9F9] text-[#111111]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <ScrollReveal duration={0.65}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-zinc-200">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200/80 text-zinc-700 text-xs font-sans tracking-widest uppercase font-semibold">
                THE CONTRACTING METHODOLOGY
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#111111] leading-tight">
                A Seamless Journey. <br className="hidden sm:inline" />
                <span className="italic text-zinc-600">From Blueprint to Handover.</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-zinc-600 font-light leading-relaxed">
                Every Infinity build is governed by rigorous stage-gate engineering controls, chartered site inspections, and transparent progress reporting.
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
                className="px-6 py-3.5 rounded-full bg-[#111111] text-white border-2 border-[#111111] hover:bg-[#C5A880] hover:text-[#111111] hover:border-[#C5A880] text-xs font-sans uppercase tracking-[0.18em] font-bold transition-all duration-300 inline-flex items-center gap-2 shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer"
                id="process-consultation-cta"
              >
                <span>INQUIRE FOR YOUR PROJECT</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Desktop Layout: Horizontal Timeline Connected by Thin Line with Gold Number Badges */}
        <div className="hidden lg:block relative pt-6 pb-8">
          
          {/* Horizontal Connecting Line */}
          <div className="absolute top-14 left-10 right-10 h-[2px] bg-zinc-300 z-0" />

          <StaggerContainer className="grid grid-cols-5 gap-6 relative z-10" staggerDelay={0.1}>
            {PROCESS_STEPS.map((step) => {
              const isSelected = activeStep?.number === step.number;

              return (
                <StaggerItem key={step.number}>
                  <div
                    onClick={() => setActiveStep(isSelected ? null : step)}
                    className={`group bg-white rounded-2xl p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-6 shadow-sm hover:shadow-xl h-full ${
                      isSelected ? 'border-[#C5A880] ring-2 ring-[#C5A880]/30 scale-[1.02]' : 'border-zinc-200 hover:border-[#C5A880]/60'
                    }`}
                  >
                    <div className="space-y-4">
                      {/* Gold Badge Step Circle */}
                      <div className="w-12 h-12 rounded-full bg-[#C5A880] text-[#111111] font-serif text-lg font-bold flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                        {step.number}
                      </div>

                      <div className="space-y-1">
                        <span className="text-[10px] font-sans uppercase tracking-widest text-[#C5A880] font-semibold">
                          {step.subtitle}
                        </span>
                        <h3 className="font-serif text-xl text-[#111111] font-normal group-hover:text-[#C5A880] transition-colors">
                          {step.title}
                        </h3>
                      </div>

                      <p className="text-xs text-zinc-600 font-sans font-light leading-relaxed line-clamp-3">
                        {step.description}
                      </p>
                    </div>

                    {/* Micro-Details Preview */}
                    <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-[11px] font-sans text-zinc-500">
                      <span className="flex items-center gap-1 font-medium">
                        <Clock className="w-3 h-3 text-[#C5A880]" />
                        <span>{step.duration}</span>
                      </span>
                      <span className="text-[#C5A880] font-semibold group-hover:underline">
                        VIEW GATES →
                      </span>
                    </div>

                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

        {/* Mobile Layout: Vertical Timeline Stack with Thin Dashed Line on Left */}
        <div className="lg:hidden relative pl-6 space-y-8">
          
          {/* Vertical Dashed Line */}
          <div className="absolute top-4 bottom-4 left-3 w-[2px] border-l-2 border-dashed border-[#C5A880]/80" />

          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              onClick={() => setActiveStep(activeStep?.number === step.number ? null : step)}
              className="relative bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm space-y-4 cursor-pointer"
            >
              {/* Badge Circle anchored on vertical line */}
              <div className="absolute -left-9 top-6 w-8 h-8 rounded-full bg-[#C5A880] text-[#111111] font-serif text-xs font-bold flex items-center justify-center shadow-md">
                {step.number}
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-sans uppercase tracking-widest text-[#C5A880] font-semibold">
                  {step.subtitle}
                </span>
                <h3 className="font-serif text-2xl text-[#111111]">
                  {step.title}
                </h3>
              </div>

              <p className="text-xs text-zinc-600 font-sans font-light leading-relaxed">
                {step.description}
              </p>

              <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500 font-sans">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>{step.duration}</span>
                </span>
                <span className="text-[#C5A880] font-semibold">
                  {step.deliverables.length} Key Deliverables ↓
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Active Step Stage Gate Drawer / Inspection Panel */}
        {activeStep && (
          <div className="p-6 sm:p-8 rounded-2xl bg-[#111111] text-white border border-[#C5A880]/40 space-y-6 shadow-2xl animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-[#C5A880] text-[#111111] font-serif font-bold text-base flex items-center justify-center">
                  {activeStep.number}
                </span>
                <div>
                  <div className="text-xs text-[#C5A880] font-sans uppercase">{activeStep.subtitle}</div>
                  <h3 className="font-serif text-2xl text-white">{activeStep.title} Detailed Protocol</h3>
                </div>
              </div>

              <button
                onClick={() => setActiveStep(null)}
                className="text-xs text-zinc-400 hover:text-white uppercase font-sans tracking-widest border border-zinc-800 px-4 py-2 rounded-full self-start sm:self-auto"
              >
                Close Protocol
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="space-y-3">
                <h4 className="text-xs font-sans uppercase tracking-widest text-[#C5A880] font-semibold flex items-center gap-2">
                  <FileCheck className="w-4 h-4" />
                  <span>MANDATORY DELIVERABLES</span>
                </h4>
                <ul className="space-y-2 text-xs text-zinc-300 font-sans">
                  {activeStep.deliverables.map((del, i) => (
                    <li key={i} className="flex items-center gap-2 p-2 rounded-lg bg-zinc-900 border border-zinc-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-sans uppercase tracking-widest text-[#C5A880] font-semibold flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4" />
                  <span>QUALITY ASSURANCE GATE</span>
                </h4>
                <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
                  <p className="text-xs text-zinc-200 font-sans font-light leading-relaxed">
                    "{activeStep.qualityGate}"
                  </p>
                  <div className="text-[11px] text-zinc-400 font-mono">
                    Estimated Stage Duration: {activeStep.duration}
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
