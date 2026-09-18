import React, { useState } from 'react';
import { ChevronDown, MapPin, Phone, ShieldCheck, HelpCircle, CheckCircle2 } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  keywords?: string[];
}

const FAQS: FaqItem[] = [
  {
    question: "Where is Hyat Enterprises located?",
    answer: "Our workshop and registered office are located at 2/15, Amir Bi House, Krishna Tower, St Anthony Rd, Vakola, Santacruz East, Mumbai 400055. For on-site consultations and inquiries, please reach out to us at +91 99208 36746.",
    keywords: ["Vakola", "Santacruz East", "Mumbai 400055", "Workshop"]
  },
  {
    question: "What makes Hyat Enterprises different from standard interior designers?",
    answer: "Most interior designers only provide 3D blueprints and outsource actual execution and metalwork to subcontractors. Hyat Enterprises integrates architectural design with in-house structural fabrication, precision iron welding, aluminium sliding systems, and bespoke woodwork under one roof. This single-point accountability eliminates contractor markups, guarantees structural safety, and delivers exceptional finish quality.",
    keywords: ["In-house Fabrication", "Turnkey Accountability", "Direct Pricing"]
  },
  {
    question: "Do you undertake specialized iron fabrication and safety grills?",
    answer: "Yes. Structural iron and metal fabrication is one of our core specialties. We design and fabricate custom heavy-gauge window safety grills, laser-cut iron safety doors, structural steel balcony frames, anti-corrosive powder-coated railings, and weather-sealed aluminium sliding window systems built specifically to withstand Mumbai's heavy monsoons.",
    keywords: ["Window Safety Grills", "Laser-Cut Doors", "Aluminium Sliding"]
  },
  {
    question: "Can I commission standalone custom furniture, like iron teapoys or wardrobes?",
    answer: "Yes, you can commission standalone pieces as well as complete turnkey setups. We handcraft bespoke iron-fabricated teapoy coffee tables with tempered glass or marble tops, ergonomic executive office desks, floor-to-ceiling modular wardrobes with soft-close Blum hardware, TV entertainment units, and custom storage cabinetry.",
    keywords: ["Iron Teapoy Stand", "Modular Wardrobes", "Custom Joinery"]
  },
  {
    question: "What is the typical timeline and process for a flat renovation?",
    answer: "A standard 1BHK, 2BHK, or 3BHK turnkey renovation typically takes between 4 to 8 weeks depending on civil alterations, tiling, and woodwork scope. Our 5-step process covers: 1) Initial consultation, 2) Comprehensive on-site laser measurements, 3) 2D/3D design & transparent BOQ quotation, 4) Turnkey site execution with strict material supervision, and 5) Final quality inspection and handover.",
    keywords: ["4 to 8 Weeks", "Transparent BOQ", "5-Step Execution"]
  },
  {
    question: "How do I schedule an on-site consultation or request a cost estimate?",
    answer: "You can connect with Mr. Gafoor and our engineering team immediately by calling or messaging on WhatsApp at +91 99208 36746, or by filling out the project inquiry form below. We coordinate prompt site visits and transparent quotations.",
    keywords: ["+91 99208 36746", "Direct Consultation"]
  }
];

interface LocalFaqSectionProps {
  onConsultationClick: () => void;
}

export const LocalFaqSection: React.FC<LocalFaqSectionProps> = ({ onConsultationClick }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section 
      id="faq" 
      className="py-20 lg:py-24 bg-[#f6efe4] border-t border-b border-[#ebdcc9] relative overflow-hidden"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ebdcc9] text-[#7a581e] text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#b68a35]" />
            <span>Expertise & Frequently Asked Questions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#24201c] font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#615749] leading-relaxed">
            Everything you need to know about our interior contracting, custom metal fabrication, timelines, and craftsmanship standards.
          </p>
        </div>

        {/* 2-Column Layout on Desktop: FAQ Accordion + Office & Consultation Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* FAQ Accordion (7 cols) */}
          <div className="lg:col-span-7 space-y-3.5">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen 
                      ? 'bg-white border-[#b68a35] shadow-sm' 
                      : 'bg-[#fbf7f0] border-[#ebdcc9] hover:border-[#d4c3ac]'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b68a35]"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-base sm:text-lg font-bold text-[#24201c] leading-snug">
                      {faq.question}
                    </span>
                    <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 ${
                      isOpen ? 'bg-[#b68a35] text-white rotate-180' : 'bg-[#ede1d1] text-[#615749]'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 pt-0 text-[#5c5243] text-sm sm:text-base leading-relaxed border-t border-[#f4ebdf]">
                      <p className="mt-3">{faq.answer}</p>
                      
                      {faq.keywords && faq.keywords.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-[#f7efe6]">
                          {faq.keywords.map((kw, kIdx) => (
                            <span 
                              key={kIdx} 
                              className="text-[11px] font-medium text-[#7a581e] bg-[#fbf5eb] px-2.5 py-0.5 rounded-full border border-[#ebdcc9]"
                            >
                              {kw}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Card: Office Location & Quick Direct Connect (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Workshop & Headquarters Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#ebdcc9] shadow-sm">
              <div className="flex items-center gap-2.5 text-[#24201c] font-serif font-bold text-xl mb-3">
                <MapPin className="w-5 h-5 text-[#b68a35]" />
                <h3>Workshop & Registered Office</h3>
              </div>
              <p className="text-sm text-[#615749] leading-relaxed mb-4">
                Visit or get in touch directly with our in-house engineering and fabrication facility:
              </p>

              <div className="p-4 rounded-xl bg-[#fdfaf5] border border-[#ebdcc9] text-sm text-[#3d362e] space-y-2">
                <div className="font-bold text-[#24201c]">Hyat Enterprises</div>
                <div className="text-xs text-[#615749] leading-relaxed">
                  2/15, Amir Bi House, Krishna Tower, St Anthony Rd, Sahajeevan Society, Hind Nagar, Vakola, Santacruz East, Mumbai 400055
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-[#f2e7d8] flex items-center gap-2 text-xs text-[#7a581e] font-medium">
                <ShieldCheck className="w-4 h-4 text-[#b68a35]" />
                <span>Turnkey Contracting, Custom Woodwork & Metal Fabrication</span>
              </div>
            </div>

            {/* Direct Consultation Box */}
            <div className="bg-gradient-to-br from-[#24201c] to-[#36302a] text-white rounded-2xl p-6 sm:p-7 shadow-md">
              <span className="text-[#d8a84e] text-xs font-bold uppercase tracking-wider">Direct Consultation</span>
              <h4 className="font-serif text-xl sm:text-2xl font-bold mt-1 text-[#fcf9f4]">
                Discuss Your Requirements
              </h4>
              <p className="mt-2 text-sm text-[#d4cdc4] leading-relaxed">
                Connect directly with Mr. Gafoor to discuss your drawings, architectural layout, safety grill fabrication, or turnkey interior project.
              </p>

              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+919920836746"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#b68a35] hover:bg-[#a3792b] text-white text-sm font-semibold transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 99208 36746</span>
                </a>
                <button
                  onClick={onConsultationClick}
                  className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-[#fcf9f4] border border-white/20 text-sm font-semibold transition-colors"
                >
                  Request Quote
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
