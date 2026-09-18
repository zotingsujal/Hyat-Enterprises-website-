import React from 'react';
import { Phone, MessageCircle, ArrowRight, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

interface LeadGenSectionProps {
  onConsultationClick: () => void;
}

export const LeadGenSection: React.FC<LeadGenSectionProps> = ({ onConsultationClick }) => {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-[#1c1917] via-[#241f1a] to-[#151311] text-white relative overflow-hidden border-y border-[#3d3428]">
      {/* Background architectural glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#b68a35]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#b68a35]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#f3e5c8] text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
          <span>Start Your Transformation</span>
        </div>

        {/* Heading: Exact string required */}
        <h2 className="text-3xl sm:text-5xl font-bold font-cinzel text-white tracking-tight max-w-3xl mx-auto leading-tight">
          Planning Your Next Project?
        </h2>

        {/* Text: Exact string required */}
        <p className="text-base sm:text-xl text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed">
          Whether you're designing a new home, renovating an existing space, setting up an office, or looking for custom fabrication, let's discuss your requirements.
        </p>

        {/* CTA buttons: Exact required strings */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          {/* Call Now */}
          <a
            href={CONTACT_INFO.phoneHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white text-[#1c1917] font-bold text-sm sm:text-base hover:bg-[#f6eee2] transition-all shadow-xl hover:scale-[1.02] active:scale-95"
          >
            <Phone className="w-4 h-4 text-[#8c671b]" />
            <span>Call Now</span>
          </a>

          {/* WhatsApp Us */}
          <a
            href={CONTACT_INFO.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm sm:text-base transition-all shadow-xl hover:scale-[1.02] active:scale-95"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp Us</span>
          </a>

          {/* Request a Consultation */}
          <button
            onClick={onConsultationClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#b68a35] hover:bg-[#9e7427] text-white font-bold text-sm sm:text-base transition-all shadow-xl hover:scale-[1.02] active:scale-95"
          >
            <span>Request a Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Local reassurance notes */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-neutral-400 font-medium">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#decfa8]" />
            <span>Santacruz East & Vakola Workshop</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#decfa8]" />
            <span>Fast 24-Hour Project Callback</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#decfa8]" />
            <span>Zero-Cost Initial Site Assessment</span>
          </div>
        </div>

      </div>
    </section>
  );
};
