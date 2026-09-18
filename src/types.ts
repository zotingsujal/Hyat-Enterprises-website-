export type ProjectCategory = 'residential' | 'commercial' | 'furniture' | 'fabrication' | 'renovation';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  location: string;
  image: string;
  description: string;
  specs: string[];
  dimensions?: string;
  clientType: string;
  featured?: boolean;
}

export interface ServiceCategory {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  services: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role?: string;
  location?: string;
  quote: string;
  projectType: string;
  rating: number;
}

export interface CostEstimateInput {
  propertyType: 'apartment' | 'penthouse' | 'villa' | 'commercial';
  areaSqFt: number;
  aesthetic: 'contemporary-luxury' | 'warm-minimal' | 'japandi' | 'industrial-brass';
  scope: 'turnkey' | 'metalwork-only' | 'kitchen-wardrobes' | 'interior-styling';
}

export interface ContactFormState {
  fullName: string;
  phone: string;
  email: string;
  location: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  message: string;
}
