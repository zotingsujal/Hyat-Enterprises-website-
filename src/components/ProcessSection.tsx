import React from 'react';
import { ArrowRight, Phone, MessageSquare, ClipboardCheck, Ruler, PenTool, HardHat, KeyRound } from 'lucide-react';
import { PROCESS_STEPS, CONTACT_INFO } from '../data/content';

interface ProcessSectionProps {
  onConsultationClick: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onConsultationClick }) => {
  const stepIcons = [
    <MessageSquare className="w-5 h-5 text-[#8c671b]" />,
    <Ruler className="w-5 h-5 text-[#8c671b]" />,
    <PenTool className="w-5 h-5 text-[#8c671b]" />,
    <HardHat className="w-5 h-5 text-[#8c671b]" />,
    <KeyRound className="w-5 h-5 text-[#8c671b]" />
  ];

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#f4efe5] border-b border-[#e8decb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#decfa8] text-[#8c671b] text-xs font-bold uppercase tracking-widest shadow-sm">
            <span>Execution Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-cinzel text-[#1c1917] tracking-tight">
            From Your Idea to a Finished Space
          </h2>
          <p className="text-base sm:text-lg text-[#5c5347] font-normal leading-relaxed">
            A seamless, transparent 5-step journey ensuring structured communication, strict site supervision, and on-time project completion.
          </p>
        </div>

        {/* 5-Step Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="relative p-6 rounded-2xl bg-white border border-[#decfa8] shadow-sm hover:shadow-lg hover:border-[#b68a35] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-cinzel text-2xl sm:text-3xl font-bold text-[#b68a35]/60 group-hover:text-[#8c671b] transition-colors">
                    {step.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#fbf8f3] border border-[#ded2bd] flex items-center justify-center">
                    {stepIcons[idx]}
                  </div>
                </div>

                <h3 className="text-base font-bold font-cinzel text-[#1c1917] mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5c5347] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#f0e6d6] flex items-center justify-between text-[11px] text-[#8c671b] font-semibold">
                <span>Phase {step.step}</span>
                <span className="text-[#1c1917] font-bold">Step {idx + 1} of 5</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Prompt */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 rounded-2xl bg-white border border-[#ded2bd] shadow-md">
            <span className="text-sm text-[#1c1917] font-semibold">
              Ready to take Step 01? Let's talk about your space today.
            </span>
            <div className="flex items-center gap-2.5">
              <button
                onClick={onConsultationClick}
                className="px-5 py-2.5 rounded-full bg-[#1c1917] text-white text-xs font-bold hover:bg-[#383129] transition-all"
              >
                Book Step 01 Consultation
              </button>
              <a
                href={CONTACT_INFO.phoneHref}
                className="px-4 py-2.5 rounded-full bg-[#f6eee2] text-[#1c1917] border border-[#decfa8] text-xs font-bold hover:bg-white transition-all flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#8c671b]" />
                <span>Call Directly</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
