import React from 'react';
import { MapPin, Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#ede5d8] border-t border-[#ded3be] text-[#5c5347] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg overflow-hidden border border-[#decfa8] bg-white p-0.5 shadow-sm">
                <img src="/logo.jpeg" alt="Hyat Enterprises Logo" className="w-full h-full object-cover rounded" />
              </div>
              <div>
                <span className="text-lg font-bold font-cinzel text-[#1c1917] tracking-wider block">
                  HYAT ENTERPRISES
                </span>
                {/* Brand slogan */}
                <p className="text-xs text-[#8c671b] font-bold tracking-widest uppercase">
                  "Design. Engineer. Build."
                </p>
              </div>
            </div>

            <p className="text-xs text-[#5c5347] leading-relaxed font-normal">
              Specialists in interior design, turnkey interior contracting, structural design, custom furniture, and precision architectural grill fabrication.
            </p>

            <div className="pt-1">
              <span className="inline-block text-xs font-semibold text-[#1c1917] bg-white/70 px-3 py-1 rounded-full border border-[#ded2be]">
                Serving Mumbai and surrounding areas.
              </span>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={CONTACT_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#25D366]/15 text-[#1b8a41] border border-[#25D366]/40 hover:bg-[#25D366]/25 transition-colors shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Helpline</span>
              </a>

              <a
                href={CONTACT_INFO.phoneHref}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#1c1917] text-white hover:bg-[#332a21] transition-colors"
              >
                <Phone className="w-3 h-3 text-[#decfa8]" />
                <span>{CONTACT_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Quick Links: Exact required list */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-[#1c1917] uppercase tracking-wider font-cinzel">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#" className="hover:text-[#8c671b] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#8c671b] transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-[#8c671b] transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-[#8c671b] transition-colors">Projects</a></li>
              <li><a href="#testimonials" className="hover:text-[#8c671b] transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-[#8c671b] transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-[#8c671b] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services: Exact required list */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-[#1c1917] uppercase tracking-wider font-cinzel">
              Services
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#services" className="hover:text-[#8c671b] transition-colors">Interior Design</a></li>
              <li><a href="#services" className="hover:text-[#8c671b] transition-colors">Interior Contracting</a></li>
              <li><a href="#services" className="hover:text-[#8c671b] transition-colors">Structural Design</a></li>
              <li><a href="#services" className="hover:text-[#8c671b] transition-colors">Fabrication</a></li>
              <li><a href="#services" className="hover:text-[#8c671b] transition-colors">Custom Furniture</a></li>
              <li><a href="#services" className="hover:text-[#8c671b] transition-colors">Renovation</a></li>
            </ul>
          </div>

          {/* Office & Workshop Location */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-[#1c1917] uppercase tracking-wider font-cinzel">
              Mumbai Location
            </h4>
            <div className="space-y-2.5 text-xs text-[#5c5347]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#8c671b] shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#8c671b] shrink-0" />
                <a href={CONTACT_INFO.phoneHref} className="hover:underline font-semibold text-[#1c1917]">
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#ded3be] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11px] text-[#7d7365]">
            © {new Date().getFullYear()} Hyat Enterprises. All rights reserved. Interior Design, Contracting & Fabrication, Mumbai.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-[#f6eee2] text-[#1c1917] text-[11px] font-semibold border border-[#dcd0bd] shadow-sm transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
