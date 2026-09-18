import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';
import { Testimonial } from '../types';

export const TestimonialsSection: React.FC = () => {
  const [reviews] = useState<Testimonial[]>(TESTIMONIALS);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto side-scrolling continuous carousel effect
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const speed = 0.75; // Smooth scrolling speed (px per frame)

    const step = () => {
      if (!isPaused && container) {
        container.scrollLeft += speed;
        // If we scrolled past half (the first set of duplicate items), reset to 0 seamlessly
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused]);

  const scrollManual = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const offset = direction === 'left' ? -360 : 360;
    container.scrollBy({ left: offset, behavior: 'smooth' });
  };

  // Duplicate reviews array to create an infinite continuous loop
  const displayReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section 
      id="testimonials" 
      className="py-20 lg:py-28 bg-[#fbf8f3] border-b border-[#e8decb] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Left/Right Manual Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#decfa8] text-[#8c671b] text-xs font-bold uppercase tracking-widest shadow-sm mb-3">
              <span>Verified Client Experiences</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-cinzel text-[#1c1917] tracking-tight">
              What Our Clients Say
            </h2>
            <p className="text-sm sm:text-base text-[#5c5347] mt-2 max-w-xl font-normal leading-relaxed">
              Genuine feedback from Mumbai homeowners and commercial offices regarding our craftsmanship, structural engineering, and interior contracting.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-[#8c671b] font-medium hidden sm:inline-block">
              {isPaused ? 'Paused' : 'Auto-scrolling (Hover to pause)'}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollManual('left')}
                className="w-11 h-11 rounded-full bg-white border border-[#decfa8] flex items-center justify-center text-[#1c1917] hover:bg-[#f6eee2] hover:border-[#8c671b] shadow-sm active:scale-95 transition-all"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollManual('right')}
                className="w-11 h-11 rounded-full bg-white border border-[#decfa8] flex items-center justify-center text-[#1c1917] hover:bg-[#f6eee2] hover:border-[#8c671b] shadow-sm active:scale-95 transition-all"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Auto Side-Scrolling Carousel Track */}
      <div
        ref={scrollContainerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className="flex gap-6 overflow-x-auto pb-6 pt-2 px-4 sm:px-8 scrollbar-none cursor-grab select-none"
        style={{ scrollBehavior: 'auto' }}
      >
        {displayReviews.map((rev, index) => (
          <div
            key={`${rev.id}-${index}`}
            className="w-[310px] sm:w-[380px] lg:w-[420px] shrink-0 p-7 sm:p-8 rounded-3xl bg-white border border-[#decfa8] shadow-md hover:shadow-xl hover:border-[#8c671b] transition-all flex flex-col justify-between relative group"
          >
            <Quote className="w-10 h-10 text-[#e8decb]/70 absolute top-6 right-6 pointer-events-none group-hover:text-[#decfa8] transition-colors" />

            <div className="space-y-4 relative z-10">
              {/* Star Rating */}
              <div className="flex items-center gap-1">
                {[...Array(rev.rating || 5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#b68a35] text-[#b68a35]" />
                ))}
                <span className="ml-2 text-xs font-bold text-[#8c671b]">5.0</span>
              </div>

              {/* Exact Quote */}
              <blockquote className="text-sm sm:text-base text-[#221d19] leading-relaxed font-normal italic line-clamp-6">
                "{rev.quote}"
              </blockquote>
            </div>

            {/* Author info */}
            <div className="mt-6 pt-5 border-t border-[#f0e6d6] flex items-center justify-between gap-2">
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm sm:text-base font-bold font-cinzel text-[#1c1917]">
                    {rev.clientName}
                  </h3>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1b8a41]" />
                </div>
                <p className="text-xs text-[#8c671b] font-medium mt-0.5">
                  {rev.location || 'Mumbai'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
