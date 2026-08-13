import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsSeparator } from './components/StatsSeparator';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ServicesBento } from './components/ServicesBento';
import { ProcessTimeline } from './components/ProcessTimeline';
import { IntakeConsultation } from './components/IntakeConsultation';
import { InsightsFooter } from './components/InsightsFooter';

export default function App() {
  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#111111] text-zinc-100 font-sans selection:bg-[#C5A880] selection:text-[#111111]">
      {/* 1. Floating Sticky Glassmorphic Header */}
      <Header onOpenIntakeModal={handleScrollToContact} />

      {/* 2. Hero Section (Dark Theme) */}
      <Hero />

      {/* Stats Bar Separator Strip (Hidden on Mobile) */}
      <StatsSeparator />

      {/* 3. Featured Projects Masonry Grid & Mobile Touch Slider (Light Theme) */}
      <FeaturedProjects />

      {/* 4. End-to-End 5-Column Construction Bento Grid (Dark Theme) */}
      <ServicesBento />

      {/* 5. Process Stage-Gate Timeline (Light Theme) */}
      <ProcessTimeline />

      {/* 6. Luxury Consultation & Intake Section (Dark Theme) */}
      <IntakeConsultation />

      {/* 7. Insights Grid & Editorial Footer (Dark Theme) */}
      <InsightsFooter />
    </div>
  );
}
