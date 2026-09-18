import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Send, CheckCircle, Clock, ShieldCheck, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

interface ContactSectionProps {
  initialProjectType?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialProjectType = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    whatsappNumber: '',
    projectType: initialProjectType || 'Home Interior',
    location: '',
    budget: '',
    requirements: '',
    preferredContactMethod: 'Phone Call'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypeOptions = [
    'Home Interior',
    'Office Interior',
    'Commercial Interior',
    'Renovation',
    'Structural Design',
    'Custom Furniture',
    'Fabrication',
    'Painting',
    'Flooring',
    'Other'
  ];

  const contactMethods = [
    'Phone Call',
    'WhatsApp',
    'Site Visit',
    'Email'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable submission and open optional direct WhatsApp dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleSendToWhatsApp = () => {
    const text = `*New Project Enquiry - Hyat Enterprises*%0A%0A*Name:* ${encodeURIComponent(formData.fullName)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*WhatsApp:* ${encodeURIComponent(formData.whatsappNumber || formData.phone)}%0A*Project Type:* ${encodeURIComponent(formData.projectType)}%0A*Location:* ${encodeURIComponent(formData.location)}%0A*Budget:* ${encodeURIComponent(formData.budget)}%0A*Requirements:* ${encodeURIComponent(formData.requirements)}%0A*Preferred Contact:* ${encodeURIComponent(formData.preferredContactMethod)}`;
    window.open(`https://wa.me/${CONTACT_INFO.phoneRaw}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#fbf8f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#decfa8] text-[#8c671b] text-xs font-bold uppercase tracking-widest shadow-sm">
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-cinzel text-[#1c1917] tracking-tight">
            Contact Hyat Enterprises
          </h2>
          <p className="text-base text-[#5c5347] font-normal leading-relaxed">
            Reach out directly by phone, WhatsApp, or submit your project details below to schedule an on-site consultation in Mumbai.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Business Details & Google Maps */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Business Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#decfa8] shadow-md space-y-6">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#b68a35]/40 p-0.5 bg-white shadow-sm shrink-0">
                  <img src="/logo.jpeg" alt="Hyat Enterprises Logo" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-cinzel text-[#1c1917]">
                    HYAT ENTERPRISES
                  </h3>
                  <p className="text-xs text-[#8c671b] font-semibold">
                    Interior Design • Contracting • Fabrication • Renovation
                  </p>
                </div>
              </div>

              {/* Exact Address */}
              <div className="space-y-4 text-sm text-[#473f35] pt-2 border-t border-[#f0e6d6]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#8c671b] shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-[#1c1917] block">Office & Workshop Location</span>
                    <p className="text-xs leading-relaxed text-[#5c5347] mt-0.5">
                      2/15, Amir Bi House, Krishna Tower, St Anthony Rd, Sahajeevan Society, Hind Nagar, Vakola, Santacruz East, Mumbai, Maharashtra 400055
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#8c671b] shrink-0" />
                  <div>
                    <span className="font-bold text-[#1c1917] block">Direct Phone</span>
                    <a href={CONTACT_INFO.phoneHref} className="text-sm font-semibold text-[#8c671b] hover:underline">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#8c671b] shrink-0" />
                  <div>
                    <span className="font-bold text-[#1c1917] block">Working Hours</span>
                    <p className="text-xs text-[#5c5347]">{CONTACT_INFO.hours}</p>
                  </div>
                </div>
              </div>

              {/* Direct Buttons: Click to Call & WhatsApp */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={CONTACT_INFO.phoneHref}
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1c1917] text-white text-xs font-bold hover:bg-[#332a21] transition-all shadow-sm"
                >
                  <Phone className="w-4 h-4 text-[#decfa8]" />
                  <span>Click to Call</span>
                </a>

                <a
                  href={CONTACT_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba5a] transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Project Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[#decfa8] shadow-xl relative">
              
              {/* Form Heading: Exact requirement */}
              <div className="mb-6 border-b border-[#f0e6d6] pb-4">
                <h3 className="text-2xl font-bold font-cinzel text-[#1c1917]">
                  Tell Us About Your Project
                </h3>
                <p className="text-xs sm:text-sm text-[#5c5347] mt-1">
                  Fill out the form below for a free estimate, space assessment, or fabrication quotation.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#eaf8ee] border border-[#a3e4b7] mx-auto flex items-center justify-center text-[#1b8a41]">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  {/* Exact submission message required */}
                  <h4 className="text-xl font-bold font-cinzel text-[#1c1917]">
                    Thank you. Our team will contact you shortly.
                  </h4>
                  <p className="text-sm text-[#5c5347] max-w-md mx-auto">
                    We have received your requirements for <strong>{formData.projectType}</strong>. Mr. Gafoor and the Hyat Enterprises team will get back to you promptly.
                  </p>
                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={handleSendToWhatsApp}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba5a] shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send via WhatsApp as well</span>
                    </button>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-5 py-2.5 rounded-full bg-stone-100 text-stone-700 text-xs font-bold hover:bg-stone-200"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  
                  {/* Full Name & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-[#1c1917] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl border border-[#d8ccb8] bg-[#fbf9f6] text-[#1c1917] focus:outline-none focus:border-[#8c671b] focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-[#1c1917] mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98200 XXXXX"
                        className="w-full px-4 py-3 rounded-xl border border-[#d8ccb8] bg-[#fbf9f6] text-[#1c1917] focus:outline-none focus:border-[#8c671b] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* WhatsApp Number & Project Type Dropdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-[#1c1917] mb-1.5">
                        WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        value={formData.whatsappNumber}
                        onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                        placeholder="Same as phone or enter number"
                        className="w-full px-4 py-3 rounded-xl border border-[#d8ccb8] bg-[#fbf9f6] text-[#1c1917] focus:outline-none focus:border-[#8c671b] focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-[#1c1917] mb-1.5">
                        Project Type *
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#d8ccb8] bg-[#fbf9f6] text-[#1c1917] focus:outline-none focus:border-[#8c671b] focus:bg-white transition-colors font-medium"
                      >
                        {projectTypeOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Location & Approximate Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-[#1c1917] mb-1.5">
                        Location / Area in Mumbai *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Santacruz East, Bandra, Andheri..."
                        className="w-full px-4 py-3 rounded-xl border border-[#d8ccb8] bg-[#fbf9f6] text-[#1c1917] focus:outline-none focus:border-[#8c671b] focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-[#1c1917] mb-1.5">
                        Approximate Budget
                      </label>
                      <input
                        type="text"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        placeholder="e.g. ₹2 - 5 Lakhs, Flexible..."
                        className="w-full px-4 py-3 rounded-xl border border-[#d8ccb8] bg-[#fbf9f6] text-[#1c1917] focus:outline-none focus:border-[#8c671b] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label className="block font-bold text-[#1c1917] mb-1.5">
                      Preferred Contact Method
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {contactMethods.map((method) => (
                        <button
                          type="button"
                          key={method}
                          onClick={() => setFormData({ ...formData, preferredContactMethod: method })}
                          className={`py-2 px-3 rounded-xl border text-xs font-semibold transition-all ${
                            formData.preferredContactMethod === method
                              ? 'bg-[#1c1917] text-white border-[#1c1917] shadow-sm'
                              : 'bg-[#fbf9f6] text-[#5c5347] border-[#d8ccb8] hover:border-[#8c671b]'
                          }`}
                        >
                          {method}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Requirements */}
                  <div>
                    <label className="block font-bold text-[#1c1917] mb-1.5">
                      Project Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.requirements}
                      onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                      placeholder="Please describe your space (dimensions, type of work like painting, furniture, grill fabrication, full renovation, etc.)..."
                      className="w-full px-4 py-3 rounded-xl border border-[#d8ccb8] bg-[#fbf9f6] text-[#1c1917] focus:outline-none focus:border-[#8c671b] focus:bg-white transition-colors leading-relaxed"
                    />
                  </div>

                  {/* CTA: Exact string required */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-full bg-[#b68a35] hover:bg-[#9e7427] text-white font-bold text-sm sm:text-base transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Processing your enquiry...</span>
                      ) : (
                        <>
                          <span>Request a Consultation</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-center text-[#786f63] mt-2 font-medium">
                      No spam. We respect your privacy and follow up exclusively regarding your project.
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
