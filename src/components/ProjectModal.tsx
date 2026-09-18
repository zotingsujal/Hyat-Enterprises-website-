import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, MapPin, CheckCircle2, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleWhatsApp = () => {
    const message = `Hello Hyat Enterprises, I would like to inquire about the project: "${project.title}" (${project.location}, category: ${project.categoryLabel}).`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#fbf8f3] border border-[#dcd0bd] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e8decb] bg-white">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#8c671b]" />
            <span className="text-xs uppercase tracking-wider text-[#8c671b] font-bold">
              {project.categoryLabel}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#6d6354] hover:text-[#1c1917] hover:bg-[#f0e6d6] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Main Showcase Image */}
          <div className="rounded-xl overflow-hidden border border-[#e2d6c3] bg-[#f0e8dc] max-h-[460px]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover max-h-[460px]"
            />
          </div>

          {/* Title & Metadata */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs px-3 py-1 rounded-full bg-[#f4ebe0] text-[#8c671b] border border-[#e2d4be] font-semibold">
                {project.clientType}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-[#6d6354] font-medium">
                <MapPin className="w-4 h-4 text-[#8c671b]" />
                <span>{project.location}</span>
                {project.dimensions && (
                  <>
                    <span className="text-[#a89d8f]">•</span>
                    <span>{project.dimensions}</span>
                  </>
                )}
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold font-cinzel text-[#1c1917]">
              {project.title}
            </h2>
            <p className="text-sm text-[#5c5347] leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Architectural Specs List */}
          <div className="p-5 rounded-xl bg-white border border-[#e8ded0] space-y-3 shadow-sm">
            <h4 className="text-xs font-bold text-[#8c671b] uppercase tracking-wider">
              Engineering & Execution Standards
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.specs.map((spec, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-[#383229]">
                  <CheckCircle2 className="w-4 h-4 text-[#8c671b] shrink-0 mt-0.5" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:px-6 bg-white border-t border-[#e8decb] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-[#6d6354]">
            <Phone className="w-3.5 h-3.5 text-[#8c671b]" />
            <span>Direct Call: <a href={CONTACT_INFO.phoneHref} className="text-[#1c1917] font-bold hover:underline">{CONTACT_INFO.phone}</a></span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={handleWhatsApp}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold bg-[#25D366]/15 text-[#1b8a41] border border-[#25D366]/40 hover:bg-[#25D366]/25 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire on WhatsApp</span>
            </button>
            <button
              onClick={() => {
                onInquire(project.title);
                onClose();
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#8c671b] text-white hover:bg-[#725213] transition-all shadow-sm"
            >
              <span>Request Free Consultation</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
