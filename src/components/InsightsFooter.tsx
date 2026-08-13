import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, BookOpen, Clock, X, ShieldCheck, Mail, Check, Award } from 'lucide-react';
import { INSIGHT_ARTICLES } from '../data/constructionData';
import { InsightArticle } from '../types';

export const InsightsFooter: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer id="insights" className="bg-[#0D0D0D] text-white pt-24 pb-12 px-4 sm:px-6 lg:px-12 border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* INSIGHTS SECTION: "Ideas. Trends. Inspiration." */}
        <div className="space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-zinc-800">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[#C5A880] text-xs font-sans tracking-widest uppercase font-semibold">
                EDITORIAL INSIGHTS
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white">
                Ideas. Trends. Inspiration.
              </h2>
              <p className="font-sans text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                Expert analysis on London subterranean planning, structural engineering, and high-performance building envelope materials.
              </p>
            </div>
          </div>

          {/* 3-Card Minimalist Blog Grid (1 column on mobile, 3 columns on desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INSIGHT_ARTICLES.map((article) => (
              <article
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="group bg-zinc-900/60 rounded-2xl border border-zinc-800/80 overflow-hidden hover:border-[#C5A880]/50 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-lg"
              >
                <div className="space-y-5 p-6">
                  {/* Image */}
                  <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-zinc-800">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover filter contrast-[1.05] transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#111111]/80 backdrop-blur-md text-[10px] font-sans text-[#C5A880] uppercase tracking-wider font-semibold border border-white/10">
                      {article.category}
                    </div>
                  </div>

                  {/* Date & Read time */}
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                    <span>{article.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#C5A880]" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  {/* Title & Summary */}
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl text-white font-normal group-hover:text-[#C5A880] transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-xs text-zinc-400 font-sans font-light line-clamp-3 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>
                </div>

                {/* Bottom Read Action */}
                <div className="px-6 py-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-sans text-zinc-400 group-hover:text-white transition-colors">
                  <span className="uppercase tracking-wider text-[11px] font-medium">READ JOURNAL ENTRY</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C5A880] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </article>
            ))}
          </div>

        </div>

        {/* ACCREDITATION BADGES BAR */}
        <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 flex flex-wrap items-center justify-around gap-6 text-xs text-zinc-400 font-sans">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#C5A880]" />
            <span className="font-semibold text-zinc-200">FMB MASTER BUILDER</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
            <span className="font-semibold text-zinc-200">RICS ACCREDITED</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#C5A880]" />
            <span className="font-semibold text-zinc-200">CIOB CHARTERED BUILDER</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
            <span className="font-semibold text-zinc-200">NHBC 10-YEAR REGISTERED</span>
          </div>
        </div>

        {/* FOOTER MAIN GRID: Left Statement | Center Newsletter & Contact | Right Logo Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10 border-t border-zinc-800/80 items-start">
          
          {/* Left Column (4 cols): Low-Contrast Statement Link */}
          <div className="lg:col-span-4 space-y-6 text-center lg:text-left">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C5A880]">
              OUR CONTRACTING COMMITMENT
            </span>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="block font-serif text-3xl sm:text-4xl text-zinc-300 hover:text-white transition-colors leading-tight group"
              id="footer-statement-link"
            >
              Let's Build Something <span className="italic text-[#C5A880] group-hover:underline">Extraordinary.</span>
            </a>
            <p className="text-xs text-zinc-500 font-sans font-light leading-relaxed max-w-sm mx-auto lg:mx-0">
              Bespoke main contracting and structural engineering throughout London's premier residential postcodes.
            </p>
          </div>

          {/* Center Column (4 cols): Newsletter Capture & Contact Links */}
          <div className="lg:col-span-4 space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C5A880]">
                QUARTERLY BRIEFING
              </span>
              <h4 className="font-serif text-lg text-white">Structural Insights Newsletter</h4>
              <p className="text-xs text-zinc-400 font-sans font-light">
                Receive curated analysis on London planning laws and engineering innovations.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-3 max-w-md mx-auto lg:mx-0">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-full py-3 pl-4 pr-12 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#C5A880] transition-colors font-sans"
                  id="newsletter-email-input"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 w-9 rounded-full bg-[#C5A880] text-[#111111] hover:bg-white flex items-center justify-center transition-colors"
                  aria-label="Subscribe"
                >
                  {subscribed ? <Check className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
              {subscribed && (
                <div className="text-[11px] text-[#C5A880] font-sans">
                  ✓ Thank you. You are subscribed to our executive journal.
                </div>
              )}
            </form>
          </div>

          {/* Right Column (4 cols): Signature Corporate Logo Block */}
          <div className="lg:col-span-4 space-y-6 text-center lg:text-right flex flex-col items-center lg:items-end justify-between">
            
            <div className="space-y-3">
              <div className="flex items-center justify-center lg:justify-end gap-3">
                <svg className="w-8 h-8 text-[#C5A880] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 12c-2-2.5-4-4-6.5-4A4.5 4.5 0 0 0 1 12.5 4.5 4.5 0 0 0 5.5 17c2.5 0 4.5-1.5 6.5-4zm0 0c2 2.5 4 4 6.5 4a4.5 4.5 0 0 0 4.5-4.5A4.5 4.5 0 0 0 18.5 7c-2.5 0-4.5 1.5-6.5 4z" />
                </svg>
                <div className="text-left">
                  <div className="font-serif text-lg tracking-widest text-white font-medium leading-none">
                    INFINITY
                  </div>
                  <div className="text-[9px] tracking-[0.25em] text-zinc-400 font-sans">
                    LONDON BUILDERS
                  </div>
                </div>
              </div>

              <p className="text-xs text-zinc-400 font-sans font-light max-w-xs leading-relaxed">
                Master craft construction, structural extensions, and bespoke luxury developments.
              </p>
            </div>

            <div className="text-[11px] text-zinc-500 font-sans space-y-1">
              <div>Registered in England & Wales • Company No. 09842104</div>
              <div>Mayfair Executive Office: 10 Hanover Square, W1S 1HQ</div>
            </div>

          </div>

        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-zinc-500">
          <div>
            © 2026 Infinity London Builders Ltd. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-[#C5A880] transition-colors">Privacy Policy</a>
            <a href="#hero" className="hover:text-[#C5A880] transition-colors">Terms of Build Service</a>
            <a href="#hero" className="hover:text-[#C5A880] transition-colors">Site Map</a>
          </div>
        </div>

      </div>

      {/* Article Reader Slide-Over Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-[#111111]/85 backdrop-blur-md flex justify-end animate-fade-in">
          <div className="w-full max-w-2xl bg-[#111111] border-l border-zinc-800 text-white h-full overflow-y-auto p-6 sm:p-10 flex flex-col justify-between space-y-8 shadow-2xl">
            
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C5A880]">
                  EDITORIAL JOURNAL
                </span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3">
                <div className="text-xs text-[#C5A880] font-mono">{selectedArticle.date} • {selectedArticle.category}</div>
                <h2 className="font-serif text-3xl font-normal leading-snug">
                  {selectedArticle.title}
                </h2>
                <div className="text-xs text-zinc-400 font-sans">
                  By <span className="text-white font-medium">{selectedArticle.author.name}</span> ({selectedArticle.author.role})
                </div>
              </div>

              <div className="rounded-xl overflow-hidden aspect-video border border-zinc-800">
                <img src={selectedArticle.imageUrl} alt={selectedArticle.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>

              <div className="space-y-4 text-sm text-zinc-300 font-light leading-relaxed">
                {selectedArticle.content.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-800 flex items-center justify-between gap-4">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-3 rounded-full border border-zinc-700 text-xs font-sans uppercase tracking-[0.15em] text-zinc-300 hover:text-white hover:border-zinc-500 font-semibold transition-all duration-300 active:scale-[0.98]"
              >
                Close Article
              </button>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedArticle(null);
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-full bg-[#C5A880] text-[#111111] border border-[#DFCA9F] hover:bg-white font-sans text-xs font-bold uppercase tracking-[0.15em] shadow-lg hover:shadow-[0_0_20px_rgba(197,168,128,0.4)] transition-all duration-300 active:scale-[0.98]"
              >
                Inquire With Engineering Team
              </a>
            </div>

          </div>
        </div>
      )}
    </footer>
  );
};
