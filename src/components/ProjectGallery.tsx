import React, { useState } from 'react';
import { Project, ProjectCategory } from '../types';
import { PROJECTS } from '../data/content';
import { Sparkles, MapPin, Maximize2 } from 'lucide-react';

interface ProjectGalleryProps {
  onSelectProject: (project: Project) => void;
  onConsultationClick?: () => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories: { id: string; label: string; cat?: ProjectCategory }[] = [
    { id: 'all', label: 'All' },
    { id: 'residential', label: 'Residential Interiors', cat: 'residential' },
    { id: 'commercial', label: 'Commercial Interiors', cat: 'commercial' },
    { id: 'furniture', label: 'Furniture', cat: 'furniture' },
    { id: 'fabrication', label: 'Fabrication', cat: 'fabrication' },
    { id: 'renovation', label: 'Renovation', cat: 'renovation' }
  ];

  const filteredProjects = PROJECTS.filter((proj) => {
    return selectedCategory === 'all' || proj.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#fbf8f3] border-b border-[#e8decb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#8c671b] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Execution Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-cinzel text-[#1c1917] tracking-tight">
            Spaces We've Helped Bring to Life
          </h2>
          <p className="text-sm sm:text-base text-[#5c5347] font-normal leading-relaxed">
            Explore our diverse body of work spanning residential transformations, office spaces, iron & grill fabrication, and bespoke furniture.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center justify-center flex-wrap gap-2 pb-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#1c1917] text-white shadow-md'
                  : 'bg-white text-[#5c5347] hover:text-[#1c1917] hover:bg-[#f5ecdd] border border-[#e2d6c3] shadow-sm'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group bg-white rounded-2xl overflow-hidden border border-[#e8ded0] hover:border-[#b68a35] transition-all duration-300 flex flex-col shadow-sm hover:shadow-xl hover:shadow-[#b68a35]/10 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/11] overflow-hidden bg-[#f0e8dc]">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Category Pill on Image */}
                <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white border border-white/15">
                    {project.categoryLabel}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/90 group-hover:text-[#f3d38c] group-hover:border-[#f3d38c]/60 transition-colors">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Location indicator */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-white/90 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#f3d38c]" />
                  <span>{project.location}</span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold font-cinzel text-[#1c1917] group-hover:text-[#8c671b] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#5c5347] mt-2 line-clamp-2 leading-relaxed font-normal">
                    {project.description}
                  </p>
                </div>

                {/* Specs & Direct Detail Trigger */}
                <div className="pt-3 border-t border-[#ede3d4] space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.specs.slice(0, 2).map((spec, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-[#f8f3eb] text-[#6d6354] px-2.5 py-1 rounded-md border border-[#e6dcce] font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1">
                    <span className="text-[11px] text-[#8c671b] font-semibold">
                      {project.dimensions || 'Bespoke Scale'}
                    </span>

                    <span className="text-[#1c1917] group-hover:text-[#8c671b] font-bold text-[11px] inline-flex items-center gap-1 transition-colors">
                      <span>Details & Specs →</span>
                    </span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
