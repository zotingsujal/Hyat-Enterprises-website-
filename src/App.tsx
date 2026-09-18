import React, { useState } from 'react';
import { Project } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { ProjectGallery } from './components/ProjectGallery';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LeadGenSection } from './components/LeadGenSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { FloatingActionBar } from './components/FloatingActionBar';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedProjectType, setSelectedProjectType] = useState<string>('Home Interior');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleConsultation = (projectType?: string) => {
    if (projectType) {
      setSelectedProjectType(projectType);
    }
    scrollToSection('contact');
  };

  const handleInquireProject = (_projectTitle: string) => {
    setSelectedProjectType('Home Interior');
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#fbf8f3] text-[#1c1917] flex flex-col selection:bg-[#b68a35] selection:text-white pb-16 sm:pb-0">
      
      {/* Primary Sticky Navigation Header */}
      <Navbar
        onContactClick={() => scrollToSection('contact')}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onConsultationClick={() => handleConsultation('Home Interior')}
        />

        {/* 2. About Section: Built on Engineering. Defined by Craftsmanship. */}
        <AboutSection
          onConsultationClick={() => handleConsultation('Turnkey Interior')}
        />

        {/* 3. Services Section: 4 Major Categories + "Discuss Your Project →" */}
        <ServicesSection
          onSelectCategory={(catTitle) => handleConsultation(catTitle)}
        />

        {/* 4. Why Clients Choose Hyat Enterprises */}
        <WhyChooseUsSection
          onConsultationClick={() => handleConsultation('Turnkey Interior')}
        />

        {/* 5. Projects Showcase: Spaces We've Helped Bring to Life */}
        <ProjectGallery
          onSelectProject={(project) => setSelectedProject(project)}
          onConsultationClick={() => handleConsultation('Custom Project')}
        />

        {/* 6. Process Section: From Your Idea to a Finished Space (5 Steps) */}
        <ProcessSection
          onConsultationClick={() => handleConsultation('New Project')}
        />

        {/* 7. Testimonials Section: Auto side-scrolling carousel */}
        <TestimonialsSection />

        {/* 8. Lead Generation Section: Planning Your Next Project? */}
        <LeadGenSection
          onConsultationClick={() => handleConsultation('New Project')}
        />

        {/* 9. Contact Section & Project Enquiry Form */}
        <ContactSection
          initialProjectType={selectedProjectType}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Low-Middle Action Bar (Draggable with Call Now, WhatsApp, Get Quote matching screenshot) */}
      <FloatingActionBar
        onQuoteClick={() => handleConsultation('Turnkey Interior')}
      />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={handleInquireProject}
      />
    </div>
  );
}
