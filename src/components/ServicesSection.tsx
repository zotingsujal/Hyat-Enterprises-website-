import React from 'react';
import { ArrowRight, CheckCircle, Compass, Building2, Shield, Layers } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/content';

interface ServicesSectionProps {
  onSelectCategory: (categoryTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectCategory }) => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#8c671b]" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-[#8c671b]" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-[#8c671b]" />;
      case 'Layers':
      default:
        return <Layers className="w-5 h-5 text-[#8c671b]" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#f4efe5] border-b border-[#e8decb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#decfa8] text-[#8c671b] text-xs font-bold uppercase tracking-widest shadow-sm">
            <span>Capabilities & Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-cinzel text-[#1c1917] tracking-tight">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-[#5c5347] font-normal leading-relaxed">
            From architectural structural engineering and heavy-duty iron fabrication to turnkey luxury interior contracting and bespoke furniture.
          </p>
        </div>

        {/* 4 Major Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SERVICE_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl overflow-hidden bg-white border border-[#decfa8] shadow-md hover:shadow-xl hover:border-[#b68a35] transition-all duration-300 flex flex-col group"
            >
              {/* Image Header */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-white/40 shadow">
                  {getCategoryIcon(category.iconName)}
                  <span className="text-xs font-bold text-[#1c1917] uppercase tracking-wider">
                    {category.title}
                  </span>
                </div>

                <div className="absolute bottom-4 inset-x-6 text-white">
                  <p className="text-xs sm:text-sm text-neutral-200 font-light line-clamp-2">
                    {category.tagline}
                  </p>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <p className="text-xs sm:text-sm text-[#5c5347] leading-relaxed">
                    {category.description}
                  </p>

                  {/* Services List inside Category */}
                  <div className="pt-2 border-t border-[#f0e6d6]">
                    <span className="text-[11px] font-bold text-[#8c671b] uppercase tracking-wider block mb-3">
                      Included Solutions
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#2e2924] font-medium">
                      {category.services.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-[#8c671b] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Explicitly Requested Link: "Discuss Your Project →" */}
                <div className="pt-4 border-t border-[#f0e6d6]">
                  <button
                    onClick={() => onSelectCategory(category.title)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#8c671b] hover:text-[#1c1917] transition-colors group/btn"
                  >
                    <span>Discuss Your Project</span>
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
