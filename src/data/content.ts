import { Project, ServiceCategory, Testimonial } from '../types';

export const CONTACT_INFO = {
  brandName: 'Hyat Enterprises',
  tagline: 'Interior Design • Contracting • Structural Design • Fabrication • Renovation',
  phone: '+91 99208 36746',
  phoneRaw: '919920836746',
  phoneHref: 'tel:+919920836746',
  whatsappHref: 'https://wa.me/919920836746?text=Hello%20Hyat%20Enterprises%2C%20I%20would%20like%20to%20discuss%20an%20interior%20design%20%2F%20contracting%20%2F%20fabrication%20project.',
  whatsappMessage: 'Hello Hyat Enterprises, I would like to discuss an interior design / contracting / fabrication project.',
  address: '2/15, Amir Bi House, Krishna Tower, St Anthony Rd, Sahajeevan Society, Hind Nagar, Vakola, Santacruz East, Mumbai, Maharashtra 400055',
  area: 'Vakola, Santacruz East, Mumbai',
  hours: 'Monday – Saturday: 9:30 AM – 8:00 PM (Sunday by Appointment)',
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.835492194689!2d72.85041077598125!3d19.080816982124508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8fb220641b5%3A0x6b9e28f32cf86cbb!2sVakola%2C%20Santacruz%20East%2C%20Mumbai%2C%20Maharashtra%20400055!5e0!3m2!1sen!2sin!4v1710700000000!5m2!1sen!2sin'
};

export const TRUST_STATEMENT = "Residential • Commercial • Interior Contracting • Fabrication";

export const ABOUT_CONTENT = {
  heading: "Built on Engineering. Defined by Craftsmanship.",
  paragraph1: "At Hyat Enterprises, we are experts in delivering comprehensive solutions in structural design, grill fabrication, and interior contracting. Our team combines engineering excellence, innovative craftsmanship, and creative interior design to transform ideas into reality.",
  paragraph2: "Our structural design services are dedicated to ensuring the strength, stability, and safety of every project we undertake. We provide detailed structural analysis and design for residential, commercial, and industrial buildings, employing modern technology and industry standards.",
  paragraph3: "Whether it's a new build, renovation, or expansion, our team works closely with clients to develop tailored solutions that meet their specific project requirements.",
  highlights: [
    {
      title: "Engineering Excellence",
      desc: "Rigorous structural planning, load calculation, and safety compliance for residential and commercial spaces."
    },
    {
      title: "Skilled Craftsmanship",
      desc: "In-house metal welding, precision grill fabrication, custom joinery, and meticulous surface finishing."
    },
    {
      title: "Complete Project Solutions",
      desc: "Single-point turnkey accountability from architectural civil works to custom furniture and final handover."
    }
  ]
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'interior-design',
    title: 'Interior Design',
    tagline: 'Aesthetic elegance paired with functional precision for modern living.',
    description: 'Bespoke design concepts, 3D visualizations, and curated palettes that transform raw spaces into luxurious, harmonious environments tailored to your lifestyle.',
    iconName: 'Compass',
    image: '/luxury_indian_living_room.webp',
    services: [
      'Residential Interiors',
      'Commercial Interiors',
      'Kitchen & Bedroom Design',
      'Living & Dining Spaces',
      'Bathroom Design',
      'Wardrobes & Cabinetry',
      'Lighting & Décor',
      'Space Planning'
    ]
  },
  {
    id: 'contracting-renovation',
    title: 'Interior Contracting & Renovation',
    tagline: 'Turnkey site execution, civil alterations, and complete refurbishments.',
    description: 'Disciplined project management handling civil masonry, electrical setups, ceiling architectures, tiling, premium paint finishes, and structural renovations with zero hassle.',
    iconName: 'Building2',
    image: '/luxury_minimalist_kitchen.webp',
    services: [
      'Complete Interior Contracting',
      'Renovation & Refurbishment',
      'Interior Painting',
      'Flooring',
      'Doors & Windows',
      'Electrical/Lighting Coordination'
    ]
  },
  {
    id: 'structural-fabrication',
    title: 'Structural & Fabrication',
    tagline: 'Engineered metal strength, ornamental grills, and durable sliding systems.',
    description: 'Specialized structural engineering and in-house iron, steel, and aluminium fabrication delivering safety doors, window grills, sliding tracks, and heavy-duty frameworks.',
    iconName: 'Shield',
    image: '/grill_iron_fabrication.jpg',
    services: [
      'Structural Design',
      'Grill Fabrication',
      'Iron Fabrication & Welding',
      'Aluminium Sliding Work',
      'Custom Fabrication'
    ]
  },
  {
    id: 'custom-furniture',
    title: 'Custom Furniture',
    tagline: 'Handcrafted bespoke woodwork and metal furniture built to last.',
    description: 'Tailor-made ergonomic office workstations, modular wardrobes, TV consoles, designer iron teapoys, and custom storage units crafted for flawless durability.',
    iconName: 'Layers',
    image: '/custom_furniture_fabrication.jpg',
    services: [
      'Custom Furniture',
      'Office Furniture',
      'Wardrobes',
      'Cabinets',
      'Bespoke Furniture Solutions'
    ]
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'End-to-End Solutions',
    desc: 'From design and planning to execution and finishing.'
  },
  {
    title: 'Attention to Detail',
    desc: 'Thoughtful design and careful workmanship throughout the project.'
  },
  {
    title: 'Engineering Expertise',
    desc: 'Structural solutions focused on strength, stability and safety.'
  },
  {
    title: 'Custom Craftsmanship',
    desc: 'Furniture, fabrication and interior elements tailored to the space.'
  },
  {
    title: 'Responsive Service',
    desc: 'Professional communication and prompt follow-up throughout the project.'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Consultation',
    desc: 'Tell us about your space, requirements and budget.'
  },
  {
    step: '02',
    title: 'Site Assessment',
    desc: 'Understand the space, measurements and project requirements.'
  },
  {
    step: '03',
    title: 'Design & Planning',
    desc: 'Develop the design and execution plan.'
  },
  {
    step: '04',
    title: 'Execution',
    desc: 'Our team handles the required interior, contracting and fabrication work.'
  },
  {
    step: '05',
    title: 'Final Handover',
    desc: 'Complete the finishing touches and deliver the finished space.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-mansi',
    clientName: 'Mansi Rane',
    role: 'Office Executive',
    location: 'Mumbai',
    quote: "We are absolutely thrilled with the furniture made by Hyat Enterprises for our office! The quality of work is exceptional, and the finishing is impeccable. Mr Gafoor's attention to detail and commitment to excellence is evident in every piece. Highly recommend Hyat Enterprises for anyone looking for amazing furniture work that exceeds expectations!",
    projectType: 'Office Furniture & Setup',
    rating: 5
  },
  {
    id: 't-joseph',
    clientName: 'Joseph Dias',
    role: 'Flat Owner',
    location: 'Santacruz, Mumbai',
    quote: "The Contractor delivered beyond my expectations. I had requested for a basic quotation to paint my flat with some minor repairs. As the work progressed, the Contractor being an interior designer gave some creative advice for my main and safety door, living room and bedroom. A wall wardrobe was also suggested in the bedroom, which I accepted. Mr. Gafour delivered what he promised. Relatives and friends have marvelled at the final product. He was prompt to follow up on anything that was out of place, which was brought to his notice. He is knowledgeable in this field, therefore highly recommend his service.",
    projectType: 'Full Flat Renovation & Custom Wardrobe',
    rating: 5
  },
  {
    id: 't-narender',
    clientName: 'Narender Chandiramani',
    role: 'Residential Client',
    location: 'Mumbai',
    quote: "I recently purchased an iron-fabricated teapoy stand from Hyat Enterprises, and I am very impressed with the quality and craftsmanship. The stand is sturdy, well-designed, and has a sleek finish. It adds a stylish touch to my space while being highly functional. The team was professional, and the delivery was on time. Highly recommended for anyone looking for durable and well-crafted iron furniture!",
    projectType: 'Custom Iron Fabrication & Teapoy',
    rating: 5
  },
  {
    id: 't-venkatraman',
    clientName: 'Venkatraman P',
    role: 'Homeowner',
    location: 'Vakola, Mumbai',
    quote: "We got a range of interior work done. The service and quality was very good. The response was also prompt. Would not hesitate to repeat.",
    projectType: 'Interior Contracting & Civil Works',
    rating: 5
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-res-1',
    title: 'The Contemporary Family Salon',
    category: 'residential',
    categoryLabel: 'Residential Interiors',
    location: 'Santacruz East, Mumbai',
    image: '/luxury_indian_living_room.webp',
    description: 'Complete turnkey residential living and dining transformation featuring bespoke wall paneling, Italian marble flooring, and layered warm indirect ambient lighting.',
    specs: ['Custom Wall Paneling & Inlays', 'Ambient Architectural Lighting', 'Concealed Acoustic False Ceiling', 'Integrated Dining & Lounge Layout'],
    dimensions: '1,250 sq.ft living lounge',
    clientType: 'Private Residence',
    featured: true
  },
  {
    id: 'proj-comm-1',
    title: 'Executive Corporate Office & Boardroom',
    category: 'commercial',
    categoryLabel: 'Commercial Interiors',
    location: 'BKC / Santacruz, Mumbai',
    image: '/modern_office_interior.jpg',
    description: 'Modern executive office space interior featuring acoustic glass partitions, custom minimalist conference tables, ergonomic workstations, and integrated smart electrical routing.',
    specs: ['Acoustic Metal & Glass Partitions', 'Custom Conference & Executive Desks', 'Concealed Cable Routing Systems', 'Low-Glare Architectural Lighting'],
    dimensions: '2,400 sq.ft commercial office',
    clientType: 'Corporate Office Fitout',
    featured: true
  },
  {
    id: 'proj-furn-1',
    title: 'Bespoke Office Furniture & Joinery',
    category: 'furniture',
    categoryLabel: 'Furniture',
    location: 'Bandra-Santacruz Corridor, Mumbai',
    image: '/custom_furniture_fabrication.jpg',
    description: 'Handcrafted custom office and residential furniture including iron-fabricated coffee teapoy stands, ergonomic manager desks, and floor-to-ceiling modular wardrobe joinery.',
    specs: ['Iron-Fabricated Sleek Teapoy Frames', 'Precision Soft-Close Cabinetry', 'Durable Scratch-Resistant Surfaces', 'Custom Hardware Accents'],
    dimensions: 'Custom furniture suite',
    clientType: 'Commercial & Home Furnishing',
    featured: true
  },
  {
    id: 'proj-fab-1',
    title: 'Architectural Safety Grills & Iron Fabrication',
    category: 'fabrication',
    categoryLabel: 'Fabrication',
    location: 'Vakola & Khar, Mumbai',
    image: '/grill_iron_fabrication.jpg',
    description: 'Heavy-duty safety grills, custom laser-cut iron safety doors, precision welded window railings, and smooth aluminium sliding window channels for maximum security and aesthetic appeal.',
    specs: ['Anti-Corrosive Primer & Powder Coating', 'Precision Arc & TIG Welding', 'Heavy-Gauge Structural Ironwork', 'Aluminium Track Sliding Windows'],
    dimensions: 'Bespoke structural fabrication',
    clientType: 'Security & Structural Upgrade',
    featured: true
  },
  {
    id: 'proj-renov-1',
    title: 'Complete 3BHK Apartment Renovation',
    category: 'renovation',
    categoryLabel: 'Renovation',
    location: 'Vakola, Santacruz East, Mumbai',
    image: '/japandi_bedroom_serene.webp',
    description: 'Comprehensive flat refurbishment including wall repainting, bedroom wardrobe addition, safety and main door revamp, and upgraded electrical distribution.',
    specs: ['Full Surface Prep & Premium Emulsion', 'Built-in Wall Wardrobe System', 'Main & Safety Door Enhancement', 'Civil Repairs & Floor Alignment'],
    dimensions: '980 sq.ft residential flat',
    clientType: 'Turnkey Flat Refurbishment',
    featured: false
  },
  {
    id: 'proj-kit-1',
    title: 'Modern Modular Chef Kitchen & Storage',
    category: 'residential',
    categoryLabel: 'Residential Interiors',
    location: 'Santacruz West, Mumbai',
    image: '/luxury_minimalist_kitchen.webp',
    description: 'High-functionality modular kitchen designed with waterproof marine ply, soft-close Blum hardware, quartz stone countertops, and organized spice and appliance pull-outs.',
    specs: ['BWP Grade Marine Plywood', 'Quartz Seamless Countertop', 'Soft-Close Tandem Box Drawers', 'Modular Tall Units & Overhead Vitrines'],
    dimensions: '320 sq.ft kitchen',
    clientType: 'Residential Duplex',
    featured: false
  },
  {
    id: 'proj-furn-2',
    title: 'Custom Iron Teapoy & Living Accents',
    category: 'furniture',
    categoryLabel: 'Furniture',
    location: 'Mumbai Suburbs',
    image: '/custom_iron_teapoy.jpg',
    description: 'Sleek custom iron-fabricated teapoy stand with durable matte protective coating and tempered glass top, built for contemporary living spaces.',
    specs: ['Heavy-Duty Solid Iron Framework', 'Seamless Mitered Corner Welds', 'Matte Architectural Coating', 'Custom Sizing & Proportioning'],
    dimensions: 'Custom Living Room Feature',
    clientType: 'Custom Furniture Commission',
    featured: false
  },
  {
    id: 'proj-fab-2',
    title: 'Structural Steel & Aluminium Sliding Systems',
    category: 'fabrication',
    categoryLabel: 'Fabrication',
    location: 'Santacruz East, Mumbai',
    image: '/structural_steel_aluminium_sliding.jpg',
    description: 'Robust aluminium sliding window frames and structural iron brackets engineered for monsoon weatherproofing and effortless glide performance.',
    specs: ['Anodized Aluminium Sliding Sections', 'Heavy-Duty Ball Bearing Rollers', 'EPDM Weather-Sealing Gaskets', 'Structural Steel Anchor Brackets'],
    dimensions: 'Full Window & Balcony Enclosure',
    clientType: 'Structural & Fabrication Work',
    featured: false
  }
];
