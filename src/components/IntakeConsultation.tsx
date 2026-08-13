import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Copy, Check } from 'lucide-react';
import { IntakeFormData } from '../types';
import { ScrollReveal } from './ScrollReveal';

export const IntakeConsultation: React.FC = () => {
  const [formData, setFormData] = useState<IntakeFormData>({
    fullName: '',
    email: '',
    phone: '',
    projectType: 'Structural & New Builds',
    estimatedBudget: '£500k – £1M',
    postcode: '',
    projectDetails: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `ILB-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(generatedId);
    setSubmitted(true);
  };

  const handleCopyRef = () => {
    navigator.clipboard.writeText(referenceId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-12 bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <ScrollReveal duration={0.65}>
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[#C5A880] text-xs font-sans tracking-widest uppercase font-semibold">
              BESPOKE INQUIRY
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white">
              Begin Your Build.
            </h2>
            <p className="font-sans text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
              Connect directly with our senior project directors to schedule an initial site assessment and structural engineering briefing.
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop 50/50 Split (40% Left / 60% Right) | Mobile Single Column Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (40% on Desktop = 5 cols): Editorial Contact Block */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={0.1} duration={0.65}>
              <div className="space-y-8 bg-zinc-900/40 p-8 rounded-2xl border border-zinc-800/80">
                
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                    Let's discuss your project.
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-sans font-light leading-relaxed">
                    Our Mayfair headquarters manages master builds across London's prime boroughs including Kensington, Chelsea, Westminster, and Belgravia.
                  </p>
                </div>

                {/* 3 Minimal Gold Icon Contact Rows */}
                <div className="space-y-6 pt-2">
                  
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#C5A880] shrink-0 group-hover:border-[#C5A880] transition-colors">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-[11px] font-sans uppercase tracking-wider text-zinc-500 font-medium">LONDON HEADQUARTERS</div>
                      <div className="text-sm font-sans text-zinc-200">10 Hanover Square, Mayfair, London W1S 1HQ</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#C5A880] shrink-0 group-hover:border-[#C5A880] transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-[11px] font-sans uppercase tracking-wider text-zinc-500 font-medium">EXECUTIVE DIRECT LINE</div>
                      <a href="tel:+442079460982" className="text-sm font-sans text-zinc-200 hover:text-[#C5A880] transition-colors">
                        +44 (0)20 7946 0982
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#C5A880] shrink-0 group-hover:border-[#C5A880] transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-[11px] font-sans uppercase tracking-wider text-zinc-500 font-medium">DIRECT CONSULTATION EMAIL</div>
                      <a href="mailto:hello@infinitylondonbuilders.co.uk" className="text-sm font-sans text-zinc-200 hover:text-[#C5A880] transition-colors">
                        hello@infinitylondonbuilders.co.uk
                      </a>
                    </div>
                  </div>

                </div>

                {/* Operating Hours & Guarantee */}
                <div className="pt-6 border-t border-zinc-800 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-zinc-400 font-sans">
                    <Clock className="w-4 h-4 text-[#C5A880]" />
                    <span>Executive Office Hours: Mon – Fri (08:00 – 18:00 GMT)</span>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 font-sans leading-relaxed">
                    🔒 All inquiries are managed under strict NDA protocols. Your site details and property data remain 100% confidential.
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Right Column (60% on Desktop = 7 cols): High-End Digital Intake Form */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.2} duration={0.65}>
              <div className="bg-zinc-900/60 p-8 sm:p-10 rounded-2xl border border-zinc-800/80">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl text-white">Project Intake Dossier</h3>
                  <p className="text-xs text-zinc-400 font-sans font-light">
                    Complete the fields below to initiate your technical briefing.
                  </p>
                </div>

                {/* Border-Bottom-Only Custom Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-sans uppercase tracking-widest text-zinc-400 font-medium">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lord Alexander Wright"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-transparent border-b border-[#262626] focus:border-[#C5A880] focus:outline-none py-2.5 text-sm text-white placeholder-zinc-600 transition-colors font-sans"
                      id="intake-fullname-input"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-sans uppercase tracking-widest text-zinc-400 font-medium">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. wright@estate.co.uk"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-[#262626] focus:border-[#C5A880] focus:outline-none py-2.5 text-sm text-white placeholder-zinc-600 transition-colors font-sans"
                      id="intake-email-input"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-sans uppercase tracking-widest text-zinc-400 font-medium">
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +44 7700 900077"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-transparent border-b border-[#262626] focus:border-[#C5A880] focus:outline-none py-2.5 text-sm text-white placeholder-zinc-600 transition-colors font-sans"
                      id="intake-phone-input"
                    />
                  </div>

                  {/* Project Location Postcode */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-sans uppercase tracking-widest text-zinc-400 font-medium">
                      SITE POSTCODE / LOCATION
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. W8 4LA, Kensington"
                      value={formData.postcode}
                      onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                      className="w-full bg-transparent border-b border-[#262626] focus:border-[#C5A880] focus:outline-none py-2.5 text-sm text-white placeholder-zinc-600 transition-colors font-sans"
                      id="intake-postcode-input"
                    />
                  </div>

                  {/* Project Type Dropdown matching the 5 main service columns */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-sans uppercase tracking-widest text-zinc-400 font-medium">
                      PRIMARY CONTRACTING CATEGORY *
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#161616] border-b border-[#262626] focus:border-[#C5A880] focus:outline-none py-2.5 text-sm text-white transition-colors font-sans rounded-none cursor-pointer"
                      id="intake-category-select"
                    >
                      <option value="Structural & New Builds">Structural & New Builds</option>
                      <option value="Exterior & Envelope">Exterior & Envelope</option>
                      <option value="Complete Renovations">Complete Renovations</option>
                      <option value="Interiors & Finishes">Interiors & Finishes</option>
                      <option value="M&E and Maintenance">M&E and Maintenance</option>
                    </select>
                  </div>

                  {/* Estimated Budget Range */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-sans uppercase tracking-widest text-zinc-400 font-medium">
                      ESTIMATED BUILD BUDGET
                    </label>
                    <select
                      value={formData.estimatedBudget}
                      onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                      className="w-full bg-[#161616] border-b border-[#262626] focus:border-[#C5A880] focus:outline-none py-2.5 text-sm text-white transition-colors font-sans rounded-none cursor-pointer"
                      id="intake-budget-select"
                    >
                      <option value="£250k – £500k">£250k – £500k</option>
                      <option value="£500k – £1M">£500k – £1M</option>
                      <option value="£1M – £3M">£1M – £3M</option>
                      <option value="£3M+ Prestige Scope">£3M+ Prestige Scope</option>
                    </select>
                  </div>

                </div>

                {/* Project Details */}
                <div className="space-y-2 pt-2">
                  <label className="text-[11px] font-sans uppercase tracking-widest text-zinc-400 font-medium">
                    PROJECT SCOPE & TIMELINE DETAILS
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Outline your structural vision, target start date, architectural stage, or site access parameters..."
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    className="w-full bg-transparent border-b border-[#262626] focus:border-[#C5A880] focus:outline-none py-2.5 text-sm text-white placeholder-zinc-600 transition-colors font-sans resize-none"
                    id="intake-details-textarea"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-full bg-[#C5A880] text-[#111111] border border-[#DFCA9F] hover:bg-white hover:text-[#111111] text-xs sm:text-sm font-sans uppercase tracking-[0.18em] font-bold transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_4px_25px_rgba(197,168,128,0.3)] hover:shadow-[0_0_35px_rgba(197,168,128,0.55)] active:scale-[0.98] cursor-pointer"
                  id="intake-submit-btn"
                >
                  <span>REQUEST BESPOKE CONSTRUCTION CONSULTATION</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

              </form>
            ) : (
              /* Instant Confirmation UI */
              <div className="py-8 space-y-6 animate-fade-in text-center sm:text-left">
                <div className="w-14 h-14 rounded-full bg-[#C5A880]/20 border border-[#C5A880] text-[#C5A880] flex items-center justify-center mx-auto sm:mx-0">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono text-[#C5A880] tracking-widest uppercase">
                    CONSULTATION DOSSIER LOGGED
                  </span>
                  <h3 className="font-serif text-3xl text-white">
                    Thank you, {formData.fullName}.
                  </h3>
                  <p className="text-sm text-zinc-300 font-light leading-relaxed max-w-lg">
                    Your bespoke construction inquiry has been directed to our Senior Managing Director. We will review your site parameters and contact you within 4 business hours.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-3">
                  <div className="flex items-center justify-between text-xs text-zinc-400">
                    <span>DOSSIER REFERENCE ID:</span>
                    <button
                      onClick={handleCopyRef}
                      className="text-[#C5A880] hover:text-white flex items-center gap-1 font-mono text-xs cursor-pointer"
                    >
                      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'COPIED' : 'COPY'}</span>
                    </button>
                  </div>
                  <div className="text-2xl font-mono text-[#C5A880] font-bold">
                    {referenceId}
                  </div>
                  <div className="text-[11px] text-zinc-500 font-sans">
                    Category: {formData.projectType} • Budget: {formData.estimatedBudget}
                  </div>
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full border border-zinc-800 text-xs font-sans uppercase text-zinc-400 hover:text-white"
                >
                  Submit Another Project Inquiry
                </button>
              </div>
            )}
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
