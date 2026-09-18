import React from 'react';

interface HeroProps {
  onConsultationClick: () => void;
  onEstimateClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onConsultationClick }) => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-[90vh] flex items-center justify-start overflow-hidden bg-[#1c1a17]">
      {/* Sunlit luxury apartment interior matching the user's reference screenshot */}
      <picture className="absolute inset-0 z-0">
        <source media="(min-width: 768px)" srcSet="/hero_sunlit_wide.jpg" />
        <img
          src="/hero_sunlit_interior.jpg"
          alt="Hyat Enterprises Luxury Apartment Interior Mumbai"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-100"
        />
      </picture>

      {/* Photorealistic subtle darkening scrim to ensure white serif text pops while preserving bright sunlit atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-black/15 z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/25 z-0" />

      {/* Main Content Area: Left-aligned, exact typography and single consultation button */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24 flex flex-col items-start justify-center">
        
        {/* Headline: Exact line breaks and editorial serif font matching the screenshot */}
        <h1 className="text-[2.6rem] sm:text-6xl lg:text-7xl font-bold font-['Playfair_Display',serif] text-white leading-[1.07] tracking-tight max-w-2xl text-left drop-shadow-md">
          Transforming<br />
          Spaces With<br />
          Design,<br />
          Craftsmanship &<br />
          Precision
        </h1>

        {/* Subheadline: Exact text matching the screenshot */}
        <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-white font-normal leading-relaxed max-w-md sm:max-w-xl text-left drop-shadow">
          Complete interior design, contracting, structural design and custom fabrication solutions for residential and commercial spaces in Mumbai.
        </p>

        {/* Single Consultation Action Button styled with the exact translucent glass aesthetic of the Call button in the screenshot */}
        <div className="mt-7 sm:mt-8 w-full max-w-xs sm:max-w-sm">
          <button
            onClick={onConsultationClick}
            className="w-full py-3.5 px-8 rounded-full bg-black/40 hover:bg-black/55 backdrop-blur-md text-white border border-white/35 font-medium text-sm sm:text-base shadow-xl active:scale-[0.98] transition-all text-center"
          >
            Get Free Consultation
          </button>
        </div>

      </div>
    </section>
  );
};
