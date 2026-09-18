import React from 'react';
import { Compass, Hammer, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { ABOUT_CONTENT, CONTACT_INFO } from '../data/content';

interface AboutSectionProps {
  onConsultationClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onConsultationClick }) => {
  const iconMap = [
    <Compass className="w-6 h-6 text-[#8c671b]" />,
    <Hammer className="w-6 h-6 text-[#8c671b]" />,
    <ShieldCheck className="w-6 h-6 text-[#8c671b]" />
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#fbf8f3] border-b border-[#e8decb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Architectural Imagery & Workshop Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#dcd0bd] shadow-xl bg-white">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/bespoke_showroom_daylight.webp"
                  alt="Hyat Enterprises Interior & Fabrication Workshop"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 inset-x-6 text-white space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#f5d796]">
                  Santacruz East, Mumbai
                </span>
                <h4 className="text-lg font-bold font-cinzel text-white">
                  Local Mumbai Execution Atelier
                </h4>
                <p className="text-xs text-neutral-200 font-light">
                  Fabrication, structural design, and interior contracting under one roof.
                </p>
              </div>
            </div>

            {/* Floating feature badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white border border-[#decfa8] rounded-xl p-4 shadow-xl max-w-[240px] hidden sm:block">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#f6eee2] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#8c671b]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1c1917]">Direct Contractor</div>
                  <div className="text-[11px] text-[#635a4d]">No middleman costs or unmonitored subcontracts</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Exact Specified Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f2e9dc] border border-[#dcd0bd] text-[#8c671b] text-xs font-bold uppercase tracking-widest">
              <span>About Hyat Enterprises</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-cinzel text-[#1c1917] leading-tight">
              {ABOUT_CONTENT.heading}
            </h2>

            <div className="space-y-4 text-base text-[#524a3f] leading-relaxed font-normal">
              <p>{ABOUT_CONTENT.paragraph1}</p>
              <p>{ABOUT_CONTENT.paragraph2}</p>
              <p>{ABOUT_CONTENT.paragraph3}</p>
            </div>

            {/* 3 Visual Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {ABOUT_CONTENT.highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-xl bg-white border border-[#e4d8c5] shadow-sm hover:border-[#b68a35]/60 hover:shadow-md transition-all space-y-2"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#fbf5eb] border border-[#decfa8] flex items-center justify-center">
                    {iconMap[index]}
                  </div>
                  <h3 className="text-sm font-bold font-cinzel text-[#1c1917]">
                    {highlight.title}
                  </h3>
                  <p className="text-xs text-[#635a4d] leading-relaxed">
                    {highlight.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Row */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onConsultationClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1c1917] text-white font-semibold text-sm hover:bg-[#332c25] transition-all shadow-md"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 text-[#decfa8]" />
              </button>

              <a
                href={CONTACT_INFO.phoneHref}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-[#d8ccb8] text-[#1c1917] font-semibold text-sm hover:border-[#8c671b] transition-all"
              >
                <span>Call {CONTACT_INFO.phone}</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
