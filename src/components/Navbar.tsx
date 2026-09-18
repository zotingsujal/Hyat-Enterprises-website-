import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

interface NavbarProps {
  onConsultationClick?: () => void;
  onContactClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onConsultationClick, onContactClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleContact = onContactClick || onConsultationClick;

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact', onClick: handleContact }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#fbf8f3]/95 backdrop-blur-md border-b border-[#e8decb]/80 shadow-[0_2px_15px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Name (matching screenshot: round logo badge, HYAT ENTERPRISES, DESIGN ENGINEER BUILD) */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-stone-200/90 p-0.5 bg-white shadow-sm shrink-0 flex items-center justify-center">
              <img 
                src="/logo.jpeg" 
                alt="Hyat Enterprises Logo" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-lg sm:text-xl font-bold font-cinzel text-[#1c1917] tracking-wider group-hover:text-[#b68a35] transition-colors leading-tight">
                HYAT ENTERPRISES
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#7d7364] tracking-[0.2em] uppercase font-medium">
                DESIGN ENGINEER BUILD
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.onClick) {
                    e.preventDefault();
                    link.onClick();
                  }
                }}
                className="text-xs font-semibold uppercase tracking-wider text-[#443e35] hover:text-[#b68a35] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={CONTACT_INFO.phoneHref}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#1c1917] hover:text-[#b68a35] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#b68a35]" />
              <span className="font-bold">{CONTACT_INFO.phone}</span>
            </a>

            <a
              href={CONTACT_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#25D366]/15 text-[#1b8a41] border border-[#25D366]/40 hover:bg-[#25D366]/25 transition-all shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => handleContact?.()}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#1c1917] text-white hover:bg-[#383129] transition-all shadow-sm"
            >
              <span>Get Free Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#decfa8]" />
            </button>
          </div>

          {/* Round Circular Hamburger Menu Button (matching screenshot) */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 rounded-full border border-stone-300/80 bg-white/90 hover:bg-stone-50 flex items-center justify-center text-[#1c1917] shadow-sm transition-all focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 stroke-[1.75]" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#fbf8f3] border-b border-[#e8decb] px-4 pt-3 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.onClick) {
                    e.preventDefault();
                    link.onClick();
                  }
                  setMobileMenuOpen(false);
                }}
                className="px-3 py-2.5 rounded-xl text-sm font-semibold text-[#1c1917] hover:bg-[#f2e9dc] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#e8decb] space-y-2.5">
            <a
              href={CONTACT_INFO.phoneHref}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full text-sm font-semibold bg-[#1c1917] text-white shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#decfa8]" />
              <span>Call +91 99208 36746</span>
            </a>
            <a
              href={CONTACT_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full text-sm font-semibold bg-[#25D366] text-white shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
            <button
              onClick={() => {
                handleContact?.();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full text-sm font-semibold bg-white border border-stone-300 text-[#1c1917]"
            >
              <span>Get a Free Consultation</span>
              <ArrowUpRight className="w-4 h-4 text-[#8c671b]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
