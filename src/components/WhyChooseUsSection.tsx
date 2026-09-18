import React from 'react';
import { Check, ShieldCheck, Wrench, Sparkles, MessageSquare, Layers } from 'lucide-react';
import { WHY_CHOOSE_US, CONTACT_INFO } from '../data/content';

interface WhyChooseUsSectionProps {
  onConsultationClick: () => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ onConsultationClick }) => {
  const iconList = [
    <Layers className="w-5 h-5 text-[#8c671b]" />,
    <Sparkles className="w-5 h-5 text-[#8c671b]" />,
    <ShieldCheck className="w-5 h-5 text-[#8c671b]" />,
    <Wrench className="w-5 h-5 text-[#8c671b]" />,
    <MessageSquare className="w-5 h-5 text-[#8c671b]" />
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#fbf8f3] border-b border-[#e8decb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#decfa8] text-[#8c671b] text-xs font-bold uppercase tracking-widest shadow-sm">
            <span>Our Commitment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-cinzel text-[#1c1917] tracking-tight">
            Why Clients Choose Hyat Enterprises
          </h2>
          <p className="text-base sm:text-lg text-[#5c5347] font-normal leading-relaxed">
            Delivering structural integrity, meticulous craftsmanship, and dependable turnkey coordination across Mumbai residences and businesses.
          </p>
        </div>

        {/* 5 Premium Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-2xl bg-white border border-[#e4d8c5] shadow-sm hover:shadow-lg hover:border-[#b68a35] transition-all duration-300 space-y-3 ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#f6eee2] border border-[#ded2bd] flex items-center justify-center">
                  {iconList[idx]}
                </div>
                <div className="flex items-center gap-1 text-[#8c671b] text-xs font-bold">
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Verified Standard</span>
                </div>
              </div>

              <h3 className="text-lg font-bold font-cinzel text-[#1c1917] pt-2">
                ✓ {item.title}
              </h3>

              <p className="text-sm text-[#5c5347] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

          {/* Quick CTA Block inside the grid for visual balance */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#1c1917] to-[#2b241c] text-white border border-[#3d3326] shadow-lg flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#decfa8]">
                Ready to Start?
              </span>
              <h3 className="text-xl font-bold font-cinzel text-white mt-1">
                Book an On-Site Consultation
              </h3>
              <p className="text-xs text-neutral-300 mt-2 font-light">
                Meet our principal contractor for a thorough space evaluation and budget estimate.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={onConsultationClick}
                className="w-full py-2.5 px-4 rounded-full bg-[#decfa8] text-[#1c1917] hover:bg-white text-xs font-bold transition-all text-center shadow"
              >
                Schedule Free Visit
              </button>
              <a
                href={CONTACT_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-full bg-[#25D366]/20 text-[#4ade80] border border-[#25D366]/40 text-xs font-bold hover:bg-[#25D366]/30 transition-all text-center"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
