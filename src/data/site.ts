// Central content store for the whole site.
// Update copy, contact details and imagery here.

const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const site = {
  name: 'RT Interior Designer',
  tagline: 'Timeless interiors, thoughtfully crafted',
  city: 'Kolkata',
  phone: '+91 95472 65386',
  phoneHref: 'tel:+919547265386',
  whatsapp: 'https://wa.me/919547265386',
  email: 'studio@rtinteriordesigner.in',
  address: 'Santoshpur Station Connector, Rampur, Pally, Kolkata, Maheshtala, West Bengal 700142',
  hours: 'Mon - Sat, 10:00 AM - 7:00 PM',
  formspreeEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',
  social: {
    instagram: 'https://instagram.com/rtinteriordesigner',
    facebook: 'https://facebook.com/rtinteriordesigner',
    linkedin: 'https://linkedin.com/company/rtinteriordesigner',
  },
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

export const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '12', label: 'Years of Practice' },
  { value: '40k+', label: 'Sq. Ft. Designed' },
];

export const heroImage = unsplash('photo-1618221195710-dd6b41faaea6', 2000);

export const aboutImages = {
  main: unsplash('photo-1583847268964-b28dc8f51f92'),
  inset: unsplash('photo-1513694203232-719a280e022f', 800),
};

export const services = [
  { icon: 'sofa', title: 'Full-Home Interiors', text: 'End-to-end design for apartments and bungalows - concept boards, layouts and styling under one roof.' },
  { icon: 'kitchen', title: 'Modular Kitchens', text: 'Ergonomic, hard-wearing kitchens in acrylic, laminate and PU finishes, built for Indian cooking.' },
  { icon: 'pencil-ruler', title: 'Space Planning and 3D Design', text: 'Photorealistic 3D views and working drawings so you see every corner before work begins.' },
  { icon: 'key', title: 'Turnkey Execution', text: 'Civil work, electricals, carpentry and finishing managed by our own supervised site teams.' },
  { icon: 'building', title: 'Commercial and Retail', text: 'Offices, clinics, cafes and boutiques designed to carry your brand into the physical world.' },
  { icon: 'sparkles', title: 'Vastu-Aligned Consultation', text: 'Thoughtful Vastu integration that respects tradition without compromising modern aesthetics.' },
];

export const projects = [
  { title: 'Salt Lake Penthouse', location: 'New Town', category: 'Residential', image: unsplash('photo-1600210492486-724fe5c67fb0') },
  { title: 'Ballygunge Heritage Flat', location: 'Ballygunge', category: 'Renovation', image: unsplash('photo-1522708323590-d24dbb6b0267') },
  { title: 'Alipore Villa', location: 'Alipore', category: 'Residential', image: unsplash('photo-1600585154340-be6161a56a0c') },
  { title: 'Behala Kitchen Revamp', location: 'Behala', category: 'Modular Kitchen', image: unsplash('photo-1556911220-bff31c812dba') },
  { title: 'Park Street Studio Office', location: 'Park Street', category: 'Commercial', image: unsplash('photo-1497366754035-f200968a6e72') },
  { title: 'Gariahat 2BHK Retreat', location: 'Gariahat', category: 'Apartment', image: unsplash('photo-1567767292278-a4f21aa2d36e') },
];

export const beforeAfterImages = {
  before: unsplash('photo-1484154218962-a197022b5858'),
  after: unsplash('photo-1615873968403-89e068629265'),
};

export const testimonials = [
  { quote: 'RT Interior Designer turned our 3BHK into a home that feels like us. The 3D previews matched the final result almost exactly.', name: 'Priyanka & Rohit Sharma', detail: 'Apartment renovation, Salt Lake' },
  { quote: 'Transparent pricing and weekly site updates. Managing a Kolkata renovation from abroad felt effortless.', name: 'Arindam Chatterjee', detail: 'NRI turnkey project, Ballygunge' },
  { quote: 'Our cafe footfall doubled after the redesign. Customers keep photographing the interiors - best marketing we never paid for.', name: 'Sneha Agarwal', detail: 'Cafe interior, Park Street' },
  { quote: 'They finished two days ahead of schedule, and the handover snag list had exactly three items. Remarkable.', name: 'Debasis Sen', detail: 'Modular kitchen, Behala' },
];

export const faqs = [
  { q: 'What does a typical project cost?', a: 'Most full-home projects in Kolkata range between Rs. 4.5 lakh and Rs. 25 lakh depending on carpet area, materials and scope. After a free consultation we share an itemised estimate - no hidden charges at any stage.' },
  { q: 'How long does a full-home project take?', a: 'A standard 2-3 BHK takes 8 to 14 weeks from design freeze to handover. You receive a week-by-week schedule and WhatsApp updates from the site team throughout.' },
  { q: 'Do you handle civil work and carpentry, or design only?', a: 'Both. We offer design-only consultancy as well as complete turnkey execution with our own supervisors, partner vendors and a 5-year workmanship warranty.' },
  { q: 'Can you work with Vastu requirements?', a: 'Yes. Several of our designers specialise in Vastu-aligned planning and collaborate with Kolkata-based Vastu consultants to balance tradition with contemporary layouts.' },
  { q: 'Which areas of Kolkata do you serve?', a: 'All of Kolkata and Howrah, plus New Town, Rajarhat and Salt Lake. Projects outside the city are taken up case by case for turnkey scopes.' },
  { q: 'How do we get started?', a: 'Book a free 30-minute consultation through the form below or on WhatsApp. We visit your space, understand your needs and follow up with a concept direction and estimate within a week.' },
];
