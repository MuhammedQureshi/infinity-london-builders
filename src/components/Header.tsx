import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, Mail } from 'lucide-react';

interface HeaderProps {
  onOpenIntakeModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenIntakeModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Simple active link spy
      const sections = ['hero', 'projects', 'services', 'process', 'insights', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'Builds', href: '#projects', id: 'projects' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'Insights', href: '#insights', id: 'insights' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Header Capsule - Enlarged & Prominent */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 flex justify-center ${
          scrolled ? 'pt-3 sm:pt-4' : 'pt-5 sm:pt-7'
        }`}
      >
        <div className="w-full max-w-7xl flex items-center justify-between bg-[#111111]/90 backdrop-blur-lg border border-white/15 rounded-full px-6 sm:px-8 lg:px-10 py-3.5 sm:py-4.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300">
          
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group shrink-0"
            id="brand-logo-link"
          >
            {/* Infinity Structural Icon */}
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#C5A880] group-hover:scale-110 transition-transform duration-300 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 12c-2-2.5-4-4-6.5-4A4.5 4.5 0 0 0 1 12.5 4.5 4.5 0 0 0 5.5 17c2.5 0 4.5-1.5 6.5-4zm0 0c2 2.5 4 4 6.5 4a4.5 4.5 0 0 0 4.5-4.5A4.5 4.5 0 0 0 18.5 7c-2.5 0-4.5 1.5-6.5 4z" />
            </svg>
            <div className="flex flex-col">
              <span className="font-serif tracking-wider text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-[#C5A880] transition-colors leading-none">
                INFINITY
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-zinc-300 font-sans font-medium leading-tight">
                LONDON BUILDERS
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-2 lg:gap-2.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-sans tracking-widest uppercase transition-all duration-200 ${
                    isActive
                      ? 'text-white font-semibold bg-white/15 shadow-sm'
                      : 'text-zinc-200 hover:text-[#C5A880] hover:bg-white/10 font-medium'
                  }`}
                  id={`nav-link-${link.id}`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Gold CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => {
                if (onOpenIntakeModal) onOpenIntakeModal();
                else {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-5 sm:px-6 py-3 rounded-full border border-[#C5A880] bg-[#C5A880]/20 text-[#C5A880] hover:bg-[#C5A880] hover:text-[#111111] text-xs sm:text-sm font-sans uppercase tracking-[0.18em] font-bold transition-all duration-300 flex items-center gap-2 group shadow-md hover:shadow-[0_0_25px_rgba(197,168,128,0.4)] active:scale-[0.98] cursor-pointer shrink-0"
              id="header-cta-button"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile & Tablet Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-11 h-11 rounded-full border border-zinc-700 bg-zinc-900/90 text-[#C5A880] hover:border-[#C5A880] hover:bg-[#C5A880] hover:text-[#111111] transition-all duration-300 flex items-center justify-center active:scale-[0.95] shrink-0"
            aria-label="Toggle Navigation Menu"
            id="mobile-menu-toggle-btn"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile & Tablet Full Screen Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#111111]/98 backdrop-blur-xl flex flex-col justify-between px-6 sm:px-10 pt-28 pb-10 transition-opacity duration-300 lg:hidden animate-fade-in">
          <div className="flex flex-col space-y-6">
            <span className="text-[10px] tracking-[0.25em] text-[#C5A880] uppercase font-sans font-semibold">
              NAVIGATION
            </span>
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-serif text-3xl text-zinc-200 hover:text-[#C5A880] transition-colors flex items-center justify-between py-2 border-b border-zinc-800/60"
                  id={`mobile-nav-${link.id}`}
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-sans text-zinc-500">0{idx + 1}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6 pt-6 border-t border-zinc-800/80">
            <div className="space-y-3">
              <a
                href="tel:+442079460982"
                className="flex items-center gap-3 text-zinc-300 text-sm hover:text-[#C5A880] transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#C5A880]">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+44 (0)20 7946 0982</span>
              </a>
              <a
                href="mailto:hello@infinitylondonbuilders.co.uk"
                className="flex items-center gap-3 text-zinc-300 text-sm hover:text-[#C5A880] transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#C5A880]">
                  <Mail className="w-4 h-4" />
                </div>
                <span>hello@infinitylondonbuilders.co.uk</span>
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full py-3.5 rounded-full bg-[#C5A880] text-[#111111] font-sans text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 shadow-lg"
              id="mobile-overlay-cta"
            >
              <span>REQUEST BESPOKE CONSULTATION</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
