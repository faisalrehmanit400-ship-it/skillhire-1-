/**
 * SkillHire - Modern Service Marketplace
 * Vanilla JavaScript Core Engine
 */

// 1. Database & Sample Data
const CATEGORIES_DATA = [
  { id: 'plumbing', name: 'Plumber', icon: 'fa-solid fa-faucet-drip', count: 48, startPrice: 45 },
  { id: 'electrical', name: 'Electrician', icon: 'fa-solid fa-bolt', count: 56, startPrice: 55 },
  { id: 'web-dev', name: 'Web Developer', icon: 'fa-solid fa-code', count: 72, startPrice: 60 },
  { id: 'computer-tech', name: 'Computer Technician', icon: 'fa-solid fa-laptop-code', count: 39, startPrice: 40 },
  { id: 'graphic-design', name: 'Graphic Designer', icon: 'fa-solid fa-palette', count: 64, startPrice: 45 },
  { id: 'tutor', name: 'Academic Tutor', icon: 'fa-solid fa-graduation-cap', count: 51, startPrice: 35 },
  { id: 'ac-tech', name: 'AC & HVAC Tech', icon: 'fa-solid fa-snowflake', count: 42, startPrice: 50 },
  { id: 'carpenter', name: 'Carpenter', icon: 'fa-solid fa-hammer', count: 33, startPrice: 48 },
  { id: 'painter', name: 'House Painter', icon: 'fa-solid fa-paint-roller', count: 29, startPrice: 38 },
  { id: 'cleaning', name: 'Cleaning Specialist', icon: 'fa-solid fa-broom', count: 65, startPrice: 30 },
  { id: 'appliance', name: 'Appliance Repair', icon: 'fa-solid fa-screwdriver-wrench', count: 37, startPrice: 45 },
  { id: 'marketing', name: 'Digital Marketer', icon: 'fa-solid fa-chart-line', count: 44, startPrice: 50 }
];

const PROFESSIONALS_DATA = [
  {
    id: 'pro-1',
    name: ' M SALEEM',
    title: 'Master Licensed Plumber & Pipe Specialist',
    category: 'plumbing',
    location: 'PAKISTAN,PUNJAB',
    city: 'PAKKPATTAN',
    rate: 10,
    rating: 4.9,
    reviewsCount: 142,
    completedJobs: 218,
    avatar: 'salem.png',
    online: true,
    responseTime: 'Under 15 mins',
    skills: ['Emergency Leak Repair', 'Water Heaters', 'Pipe Relining', 'Drain Cleaning'],
    bio: 'Over 14 years of certified residential and commercial plumbing experience across NYC. Fully bonded, insured, and equipped with state-of-the-art camera diagnostic systems for pinpoint pipe inspections.',
    credentials: [
      'NYC Master Plumber License #MP-9842',
      'OSHA 30-Hour Construction Safety Certified',
      'EPA Lead-Safe Certified Contractor',
      'A+ BBB Accredited Service Professional'
    ],
    projects: [
      { title: 'Whole-Home Copper Repiping', client: 'Brooklyn Brownstone', duration: '3 Days' },
      { title: 'Tankless Water Heater Installation', client: 'Queens Residence', duration: '1 Day' },
      { title: 'Emergency Main Sewer Line Clearing', client: 'Manhattan Restaurant', duration: '4 Hours' }
    ],
    reviews: [
      {
        author: 'Sarah Jenkins',
        rating: 5,
        date: '3 days ago',
        comment: 'David arrived within 25 minutes for a burst kitchen pipe. Fixed cleanly with zero mess, transparent billing, and great advice!'
      },
      {
        author: 'Robert Gomez',
        rating: 5,
        date: '2 weeks ago',
        comment: 'Installed our Navien tankless water heater. Excellent craftsmanship, polite, and thoroughly tested everything before leaving.'
      }
    ]
  },
  {
    id: 'pro-2',
    name: 'RASHID',
    title: 'Full-Stack Web Developer & UI Engineer',
    category: 'web-dev',
    location: 'pakkpattan',
    city: 'pakkpatan',
    rate: 75,
    rating: 5.0,
    reviewsCount: 98,
    completedJobs: 135,
    avatar: 'rashid.png',
    online: true,
    responseTime: 'Under 10 mins',
    skills: ['React & Next.js', 'Node & Express', 'Tailwind CSS', 'API Integration'],
    bio: 'Senior Full-Stack Engineer with 8+ years building high-conversion e-commerce platforms, SaaS dashboards, and fast responsive web applications. Passionate about clean code, performance optimization, and accessible UI.',
    credentials: [
      'B.S. in Computer Science (UC Berkeley)',
      'AWS Certified Solutions Architect',
      'Meta Certified Front-End Developer',
      'GitHub Arctic Code Vault Contributor'
    ],
    projects: [
      { title: 'B2B Marketplace Portal', client: 'Logistics SaaS', duration: '4 Weeks' },
      { title: 'Healthcare Patient Booking App', client: 'TeleHealth Inc.', duration: '3 Weeks' },
      { title: 'Shopify Custom Storefront Redesign', client: 'Organic Wear Co.', duration: '2 Weeks' }
    ],
    reviews: [
      {
        author: 'Marcus Vance',
        rating: 5,
        date: '1 week ago',
        comment: 'Elena transformed our web platform speed from an F to an A on Lighthouse. Communication was crystal clear and delivery was early.'
      },
      {
        author: 'Chloe Chen',
        rating: 5,
        date: '3 weeks ago',
        comment: 'One of the best developers we have ever hired on SkillHire. Exceptional technical skills and wonderful attention to detail.'
      }
    ]
  },
  {
    id: 'pro-3',
    name: 'Qamir zaman',
    title: 'Certified Master Electrician & Smart Home Pro',
    category: 'electrical',
    location: 'pakistan, feroz pur',
    city: 'pakkpatan',
    rate: 80,
    rating: 4.8,
    reviewsCount: 167,
    completedJobs: 290,
    avatar: 'qamir.png',
    online: true,
    responseTime: 'Under 20 mins',
    skills: ['EV Charger Installs', 'Electrical Panel Upgrades', 'Smart Home Wiring', 'Safety Inspections'],
    bio: 'Dedicated Master Electrician with 12 years in the Bay Area. Specializing in modern 200A panel upgrades, Tesla/EV charging stations, rewiring historic homes, and whole-house surge suppression systems.',
    credentials: [
      'California C-10 Electrical Contractor License #94821',
      'Tesla Certified EV Wall Connector Installer',
      'Lutron RadioRA 3 Certified Smart Lighting Pro',
      'NFPA 70E Electrical Safety Certified'
    ],
    projects: [
      { title: '200A Main Service Panel Upgrade', client: 'Mission District Home', duration: '1 Day' },
      { title: 'Dual Level-2 EV Charger Installation', client: 'Multi-Family Garage', duration: '6 Hours' },
      { title: 'Architectural Recessed Lighting Overhaul', client: 'Pacific Heights Condo', duration: '2 Days' }
    ],
    reviews: [
      {
        author: 'Arthur Pendelton',
        rating: 5,
        date: 'Yesterday',
        comment: 'Marcus replaced our 60-year-old fuse box with a modern Siemens panel. Handled city permits seamlessly. Truly top tier.'
      },
      {
        author: 'Sophia Kim',
        rating: 4,
        date: '1 month ago',
        comment: 'Great EV charger installation. Clean conduit bending and verified safety ground. Recommended!'
      }
    ]
  },
  {
    id: 'pro-4',
    name: 'M irfan',
    title: 'HVAC & Air Conditioning Certified Specialist',
    category: 'ac-tech',
    location: 'pakkpatan, froz pur',
    city: 'pakkpattan',
    rate: 70,
    rating: 4.9,
    reviewsCount: 185,
    completedJobs: 310,
    avatar: 'irfan.png',
    online: true,
    responseTime: 'Under 15 mins',
    skills: ['AC Coil Replacement', 'Freon Leak Detection', 'Ductless Mini-Splits', 'Smart Thermostats'],
    bio: 'EPA Universal Certified HVAC technician keeping South Florida homes cool and energy-efficient for over a decade. Emergency breakdown diagnostics, preventative maintenance, and new high-SEER system setups.',
    credentials: [
      'Florida Certified Air Conditioning Contractor (Class A)',
      'EPA Section 608 Universal Certification',
      'NATE Certified (North American Technician Excellence)',
      'Mitsubishi Diamond Certified Mini-Split Installer'
    ],
    projects: [
      { title: '5-Ton Variable Speed Heat Pump System', client: 'Coral Gables Residence', duration: '1 Day' },
      { title: 'Commercial Walk-in Chiller Diagnostic', client: 'South Beach Bistro', duration: '5 Hours' },
      { title: 'Multi-Zone Ductless Mini-Split Installation', client: 'Wynwood Art Studio', duration: '2 Days' }
    ],
    reviews: [
      {
        author: 'Carlos Diaz',
        rating: 5,
        date: '4 days ago',
        comment: 'Our AC stopped blowing cold during a 95-degree heatwave. Javier came within an hour and replaced the capacitor. Honest price!'
      }
    ]
  },
  {
    id: 'pro-5',
    name: 'Zahir ahmmad',
    title: 'Brand Identity & Senior Graphic Designer',
    category: 'graphic-design',
    location: 'pakistan',
    city: 'pakkpatan',
    rate: 55,
    rating: 4.9,
    reviewsCount: 112,
    completedJobs: 174,
    avatar: 'zaheer.png',
    online: false,
    responseTime: 'Within 1 hour',
    skills: ['Brand Identity Systems', 'Logo Design', 'Vector Illustration', 'Marketing Collateral'],
    bio: 'Award-winning visual designer crafting distinct brand identities for startups, direct-to-consumer labels, and established businesses. From conceptual sketch to comprehensive brand guidelines.',
    credentials: [
      'B.F.A. in Graphic Design (Rhode Island School of Design)',
      'AIGA Professional Design Member',
      'Featured on Behance Top Branding Curations',
      '10+ Years Brand Strategy Consulting'
    ],
    projects: [
      { title: 'Full Brand Rebrand & Packaging', client: 'Artisan Coffee Roasters', duration: '3 Weeks' },
      { title: 'Fintech Mobile App Iconography & UI Kit', client: 'PayNova App', duration: '2 Weeks' }
    ],
    reviews: [
      {
        author: 'Trevor Bailey',
        rating: 5,
        date: '2 weeks ago',
        comment: 'Maya designed our startup brand identity from scratch. Everyone compliments our new logo. She listened intently to our vision!'
      }
    ]
  },
  {
    id: 'pro-6',
    name: 'Dr. Latheef',
    title: 'Mathematics, Physics & STEM Academic Tutor',
    category: 'MBBS DOCTER',
    location: 'feroz pur',
    city: 'pakkpatan',
    rate: 50,
    rating: 5.0,
    reviewsCount: 88,
    completedJobs: 140,
    avatar: 'dr.lateef.png',
    online: true,
    responseTime: 'Under 30 mins',
    skills: ['AP Calculus & Statistics', 'Physics Mechanics', 'SAT / ACT Prep', 'College Linear Algebra'],
    bio: 'Former university lecturer with a PhD in Applied Mathematics. Specializing in breaking down complex theoretical concepts into intuitive, confidence-building steps for high school and university students.',
    credentials: [
      'Ph.D. in Applied Mathematics (Northwestern University)',
      'Certified National Tutoring Association Master Tutor',
      '10+ Years Collegiate Teaching Experience',
      'Average Student Grade Improvement: +1.4 GPA'
    ],
    projects: [
      { title: 'AP Calculus BC Prep (10 Students scored 5)', client: 'High School Cohort', duration: '3 Months' },
      { title: 'Calculus II Intensive Mastery Course', client: 'Engineering Undergraduate', duration: '4 Weeks' }
    ],
    reviews: [
      {
        author: 'Rebecca Miller',
        rating: 5,
        date: '5 days ago',
        comment: 'Dr. Brooks helped my son raise his SAT math score by 140 points in just two months. Patient, methodical, and super encouraging.'
      }
    ]
  },
  {
    id: 'pro-7',
    name: 'M ASAD',
    title: 'Hardware & IT Infrastructure Computer Technician',
    category: 'computer-tech',
    location: 'lahour',
    city: 'lahour',
    rate: 50,
    rating: 4.8,
    reviewsCount: 76,
    completedJobs: 118,
    avatar: 'asad.png',
    online: true,
    responseTime: 'Under 15 mins',
    skills: ['PC Custom Builds', 'Data Recovery', 'Virus Removal', 'Office Wi-Fi Mesh Networks'],
    bio: 'CompTIA certified systems technician with 9 years fixing laptops, desktops, network hardware, and custom liquid-cooled gaming rigs. Quick turnaround, on-site or remote diagnostics.',
    credentials: [
      'CompTIA A+ & Network+ Certified',
      'Apple Certified Macintosh Technician (ACMT)',
      'Microsoft Certified IT Solutions Associate',
      'Clean Room Hard Drive Recovery Certified'
    ],
    projects: [
      { title: 'Ransomware Remediation & Recovery', client: 'Dental Clinic Network', duration: '1 Day' },
      { title: 'High-Performance 4K Video Editing Rig', client: 'Production Agency', duration: '2 Days' }
    ],
    reviews: [
      {
        author: 'Liam O\'Connor',
        rating: 5,
        date: '1 week ago',
        comment: 'My MacBook water damage was deemed dead by the store. Kenji fixed the logic board and recovered all my project files in 48 hours!'
      }
    ]
  },
  {
    id: 'pro-8',
    name: 'FAISAL REHMAN',
    title: 'Custom Woodworker & Finish Carpenter',
    category: 'carpenter',
    location: 'feroz pur',
    city: 'pakkpatan',
    rate: 60,
    rating: 4.9,
    reviewsCount: 94,
    completedJobs: 156,
    avatar: 'faisal rehman.jpg',
    online: false,
    responseTime: 'Within 2 hours',
    skills: ['Custom Cabinetry', 'Crown Molding', 'Hardwood Decking', 'Built-in Shelving'],
    bio: 'Third-generation carpenter specializing in handcrafted custom cabinetry, interior architectural trim, acoustic wood slat walls, and durable hardwood decks built to withstand harsh Midwestern weather.',
    credentials: [
      'United Brotherhood of Carpenters Journeyman Card',
      'Fine Woodworking Guild of North America Member',
      'Licensed & Insured Home Improvement Contractor',
      'Historic Wood Preservation Specialist'
    ],
    projects: [
      { title: 'Floor-to-Ceiling Library Built-ins', client: 'Lincoln Park Residence', duration: '5 Days' },
      { title: 'Cedar Pergola & Ipe Hardwood Deck', client: 'Suburban Home', duration: '1 Week' }
    ],
    reviews: [
      {
        author: 'Claire Donovan',
        rating: 5,
        date: '2 weeks ago',
        comment: 'Liam built an incredible custom mudroom bench and locker system. Flawless joints, silky smooth finish, and meticulous cleanup.'
      }
    ]
  },
  {
    id: 'pro-9',
    name: 'MUHMMAD AHMAD',
    title: 'Residential Interior & Exterior House Painter',
    category: 'painter',
    location: 'feroz pur',
    city: 'pakkpatan',
    rate: 45,
    rating: 4.8,
    reviewsCount: 68,
    completedJobs: 105,
    avatar: 'm ahmad.png',
    online: true,
    responseTime: 'Under 25 mins',
    skills: ['Precision Trim Painting', 'Drywall Patching', 'Cabinet Spraying', 'Eco-Friendly Low-VOC'],
    bio: 'Passionate painter delivering razor-sharp cut lines, velvety smooth finishes, and thorough drywall prep. We treat your home like our own with heavy protective drop-cloths and dustless sanders.',
    credentials: [
      'Painting and Decorating Contractors of America (PDCA) Member',
      'Lead-Safe Certified Renovator',
      'Benjamin Moore Certified Color & Paint Specialist'
    ],
    projects: [
      { title: 'Complete 3-Bedroom Apartment Repaint', client: 'Upper West Side', duration: '3 Days' },
      { title: 'Cabinet Refinishing with Factory Finish', client: 'Tribeca Loft', duration: '4 Days' }
    ],
    reviews: [
      {
        author: 'Daniel Craig',
        rating: 5,
        date: '3 weeks ago',
        comment: 'Samantha and her crew painted our entire home in record time. Zero paint bleed, flawless trims, and completely low odor.'
      }
    ]
  },
  {
    id: 'pro-10',
    name: 'ALI HEADER',
    title: 'Deep Cleaning & Eco-Sanitization Specialist',
    category: 'cleaning',
    location: 'feroz pur',
    city: 'pakkpatan',
    rate: 35,
    rating: 4.9,
    reviewsCount: 220,
    completedJobs: 410,
    avatar: 'ali header.png',
    online: true,
    responseTime: 'Under 10 mins',
    skills: ['Move-in / Move-out Cleaning', 'Steam Sanitization', 'Post-Construction Clean', 'Hypoallergenic Care'],
    bio: 'Professional deep cleaner bringing hotel-standard cleanliness and hospital-grade sanitization using 100% plant-based, non-toxic eco cleaners safe for children and pets.',
    credentials: [
      'ISSA Certified Professional Cleaner',
      'Green Clean Institute Certified Professional',
      'Comprehensive $2M General Liability Insured'
    ],
    projects: [
      { title: 'Luxury Penthouse Deep Clean', client: 'Brickell Highrise', duration: '6 Hours' },
      { title: 'Post-Remodel Dust Extraction & Clean', client: 'Coconut Grove Villa', duration: '8 Hours' }
    ],
    reviews: [
      {
        author: 'Jessica Taylor',
        rating: 5,
        date: 'Yesterday',
        comment: 'Maria made our home sparkle like brand new before our parents arrived. Every baseboard, inside oven, and window was pristine!'
      }
    ]
  },
  {
    id: 'pro-11',
    name: 'AMIR SHAZAD',
    title: 'Major Home Appliance Diagnostic Specialist',
    category: 'appliance',
    location: 'San Francisco, CA',
    city: 'San Francisco',
    rate: 60,
    rating: 4.8,
    reviewsCount: 82,
    completedJobs: 160,
    avatar: 'm amir.png',
    online: true,
    responseTime: 'Under 20 mins',
    skills: ['Refrigerator Compressors', 'Washing Machine Motors', 'Ovens & Induction Cooktops', 'Dishwasher Drainage'],
    bio: 'Factory-trained technician with expertise across Sub-Zero, Bosch, Whirlpool, LG, and Samsung appliances. Stocked service van with common OEM replacement parts for same-day fixes.',
    credentials: [
      'Master Appliance Technician Association Member',
      'EPA 608 Refrigerant Certification',
      'Bosch & Thermador Factory Authorized Service Trained'
    ],
    projects: [
      { title: 'Sub-Zero Refrigerator Inverter Replacement', client: 'Marin County Home', duration: '2 Hours' },
      { title: 'Bosch Dishwasher Circulation Pump Repair', client: 'SoMa Loft', duration: '1.5 Hours' }
    ],
    reviews: [
      {
        author: 'Evan Wright',
        rating: 5,
        date: '4 days ago',
        comment: 'Vikram saved us from buying a $2,000 new refrigerator. Identified a faulty relay sensor within 15 minutes and fixed it on the spot.'
      }
    ]
  },
  {
    id: 'pro-12',
    name: 'IMRAN KHAN',
    title: 'Growth Marketing & PPC Advertising Strategist',
    category: 'marketing',
    location: 'pakistan',
    city: 'lahour',
    rate: 65,
    rating: 4.9,
    reviewsCount: 74,
    completedJobs: 110,
    avatar: 'imran khan.png',
    online: true,
    responseTime: 'Within 30 mins',
    skills: ['Google Ads Search & PMax', 'Meta Ad Campaigns', 'Conversion Rate Optimization', 'SEO Auditing'],
    bio: 'Performance marketer managing over $4M in profitable ad spend. Proven track record helping local services and digital businesses scale client acquisition with transparent ROAS reporting.',
    credentials: [
      'Google Premier Partner Certified Expert',
      'Meta Certified Media Buying Professional',
      'HubSpot Inbound Marketing Certified',
      'Google Analytics 4 (GA4) Master Certified'
    ],
    projects: [
      { title: 'Local HVAC Lead Gen Campaign (3.8x ROI)', client: 'Regional HVAC Co.', duration: 'Ongoing' },
      { title: 'E-commerce Black Friday Multi-Channel Push', client: 'Apparel Startup', duration: '1 Month' }
    ],
    reviews: [
      {
        author: 'Natalie Brooks',
        rating: 5,
        date: '1 week ago',
        comment: 'Olivia overhauled our Google Ads and lowered our cost-per-lead by 42% in our first month. Incredible data analytics and reporting.'
      }
    ]
  }
];

const TESTIMONIALS_DATA = [
  {
    quote: "SkillHire made hiring an electrician effortless. Marcus arrived right on time, explained the panel upgrade clearly, and completed the job safely below my expected budget. Absolutely stellar experience!",
    author: "Jennifer Lawrence",
    location: "San Francisco, CA",
    service: "Hired for Electrical Panel Upgrade",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "Our basement pipe cracked on a Sunday morning. Within 12 minutes of posting on SkillHire, David messaged back and arrived with all replacement brass fittings. Saved our hardwood floors!",
    author: "Anthony Rossi",
    location: "Brooklyn, NY",
    service: "Hired for Emergency Plumbing",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "Elena built our company web portal ahead of schedule. Clean code, modern responsive design, and exceptional communication throughout. I won't hire developers anywhere else.",
    author: "Serena Walsh",
    location: "Austin, TX",
    service: "Hired for Web Development",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "Finding a trustworthy tutor for AP Calculus was stressful until we discovered Dr. Brooks on SkillHire. My daughter's exam confidence soared and she scored a 5. Outstanding mentorship!",
    author: "Mark Henderson",
    location: "Chicago, IL",
    service: "Hired for Math & STEM Tutoring",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  }
];

// 2. Application State
const state = {
  categories: CATEGORIES_DATA,
  professionals: [...PROFESSIONALS_DATA],
  filteredProfessionals: [...PROFESSIONALS_DATA],
  testimonials: TESTIMONIALS_DATA,
  currentTestimonialIndex: 0,
  testimonialTimer: null,
  selectedCategory: 'all',
  selectedLocation: 'all',
  selectedRating: 'all',
  maxPrice: 150,
  searchQuery: '',
  sortBy: 'recommended',
  activePro: null,
  currentUser: null, // Simulated authenticated user
  postedJobsCount: 142
};

// 3. Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  renderProfessionals();
  renderTestimonialSlide(0);
  startTestimonialAutoplay();
  setupEventListeners();
  updatePriceDisplay(state.maxPrice);
});

// 4. Render Functions
function renderCategories() {
  const container = document.getElementById('categoriesGrid');
  if (!container) return;

  container.innerHTML = state.categories.map(cat => `
    <div class="category-card ${state.selectedCategory === cat.id ? 'active' : ''}" 
         data-category="${cat.id}" 
         id="catCard-${cat.id}"
         onclick="selectCategoryFilter('${cat.id}')">
      <div class="category-icon-box">
        <i class="${cat.icon}"></i>
      </div>
      <h3 class="category-name">${cat.name}</h3>
      <div class="category-meta">
        <span>${cat.count} Available Pros</span>
        <span class="category-price">From $${cat.startPrice}/hr</span>
      </div>
    </div>
  `).join('');

  // Also populate category dropdown options in search and filters
  populateCategorySelects();
}

function populateCategorySelects() {
  const heroSelect = document.getElementById('heroCategorySelect');
  const filterSelect = document.getElementById('categoryFilterSelect');
  const jobCategorySelect = document.getElementById('jobCategorySelect');

  const optionsHTML = state.categories.map(cat => 
    `<option value="${cat.id}">${cat.name}</option>`
  ).join('');

  if (heroSelect) {
    heroSelect.innerHTML = `<option value="all">All Service Categories</option>` + optionsHTML;
  }
  if (filterSelect) {
    filterSelect.innerHTML = `<option value="all">All Categories</option>` + optionsHTML;
  }
  if (jobCategorySelect) {
    jobCategorySelect.innerHTML = `<option value="">Select a Category</option>` + optionsHTML;
  }
}

function renderProfessionals() {
  const container = document.getElementById('prosGrid');
  const countEl = document.getElementById('resultsCount');
  if (!container) return;

  const list = state.filteredProfessionals;

  if (countEl) {
    countEl.innerHTML = `Showing <strong>${list.length}</strong> verified ${list.length === 1 ? 'professional' : 'professionals'}`;
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div class="no-results-box" id="noResultsState">
        <div class="no-results-icon"><i class="fa-solid fa-user-slash"></i></div>
        <h3 class="category-name" style="font-size: 1.35rem; margin-bottom: 0.5rem;">No Professionals Match Your Criteria</h3>
        <p style="color: var(--muted); margin-bottom: 1.5rem; max-width: 440px; margin-left: auto; margin-right: auto;">
          Try adjusting your price range, location, or clearing search filters to see more available specialists.
        </p>
        <button class="btn btn-primary" onclick="resetAllFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(pro => `
    <article class="pro-card" id="card-${pro.id}">
      <div class="pro-card-header">
        <div class="pro-avatar-wrap">
          <img src="${pro.avatar}" alt="${pro.name}" class="pro-avatar" loading="lazy" />
          ${pro.online ? '<span class="pro-online-badge" title="Online Now"></span>' : ''}
        </div>
        <div class="pro-info">
          <div class="pro-name-row">
            <h3 class="pro-name">${pro.name}</h3>
            <i class="fa-solid fa-circle-check verified-icon" title="Identity & Background Verified"></i>
          </div>
          <p class="pro-title">${pro.title}</p>
          <div class="pro-location">
            <i class="fa-solid fa-location-dot"></i>
            <span>${pro.location}</span>
          </div>
        </div>
      </div>

      <div class="pro-metrics-row">
        <div class="pro-rating-wrap">
          <span class="star-rating">
            <i class="fa-solid fa-star"></i> ${pro.rating.toFixed(1)}
          </span>
          <span class="review-count">(${pro.reviewsCount})</span>
        </div>
        <div class="pro-completed-jobs">
          <i class="fa-solid fa-briefcase" style="color: var(--primary);"></i>
          <span>${pro.completedJobs} Jobs</span>
        </div>
        <div style="color: var(--accent-hover); font-weight: 600; font-size: 0.8rem;">
          <i class="fa-regular fa-clock"></i> ${pro.responseTime}
        </div>
      </div>

      <div class="pro-skills-wrap">
        ${pro.skills.slice(0, 3).map(skill => `<span class="skill-pill">${skill}</span>`).join('')}
        ${pro.skills.length > 3 ? `<span class="skill-pill">+${pro.skills.length - 3}</span>` : ''}
      </div>

      <div class="pro-card-footer">
        <div class="pro-price-tag">
          <span class="price-small-label">Starting at</span>
          <div class="price-value">$${pro.rate}<span>/hr</span></div>
        </div>

        <div class="pro-card-actions">
          <button class="btn btn-outline btn-sm" onclick="openProfileModal('${pro.id}')" title="View Full Profile">
            View
          </button>
          <button class="btn btn-secondary btn-sm" onclick="openContactModal('${pro.id}')" title="Send a Message">
            <i class="fa-regular fa-message"></i>
          </button>
          <button class="btn btn-primary btn-sm" onclick="openHireModal('${pro.id}')" title="Book Services">
            Hire Now
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

// 5. Filtering and Sorting Logic
function applyFiltersAndSort() {
  let result = [...state.professionals];

  // 1. Search Query Filter (name, title, skills, location)
  if (state.searchQuery.trim() !== '') {
    const q = state.searchQuery.toLowerCase().trim();
    result = result.filter(pro => 
      pro.name.toLowerCase().includes(q) ||
      pro.title.toLowerCase().includes(q) ||
      pro.skills.some(skill => skill.toLowerCase().includes(q)) ||
      pro.location.toLowerCase().includes(q) ||
      pro.category.toLowerCase().includes(q)
    );
  }

  // 2. Category Filter
  if (state.selectedCategory !== 'all') {
    result = result.filter(pro => pro.category === state.selectedCategory);
  }

  // 3. Location Filter
  if (state.selectedLocation !== 'all') {
    result = result.filter(pro => {
      if (state.selectedLocation === 'Remote') {
        return pro.location.toLowerCase().includes('remote');
      }
      return pro.city.toLowerCase() === state.selectedLocation.toLowerCase() || 
             pro.location.toLowerCase().includes(state.selectedLocation.toLowerCase());
    });
  }

  // 4. Rating Filter
  if (state.selectedRating !== 'all') {
    const minRating = parseFloat(state.selectedRating);
    result = result.filter(pro => pro.rating >= minRating);
  }

  // 5. Price Filter
  result = result.filter(pro => pro.rate <= state.maxPrice);

  // 6. Sorting
  if (state.sortBy === 'rating-desc') {
    result.sort((a, b) => b.rating - a.rating || b.reviewsCount - a.reviewsCount);
  } else if (state.sortBy === 'price-asc') {
    result.sort((a, b) => a.rate - b.rate);
  } else if (state.sortBy === 'price-desc') {
    result.sort((a, b) => b.rate - a.rate);
  } else if (state.sortBy === 'reviews-desc') {
    result.sort((a, b) => b.reviewsCount - a.reviewsCount);
  } else {
    // Default 'recommended'
    result.sort((a, b) => (b.rating * b.reviewsCount) - (a.rating * a.reviewsCount));
  }

  state.filteredProfessionals = result;
  renderProfessionals();
  updateCategoryCardActiveState();
}

function selectCategoryFilter(catId) {
  state.selectedCategory = (state.selectedCategory === catId) ? 'all' : catId;
  
  // Sync filter select
  const catSelect = document.getElementById('categoryFilterSelect');
  if (catSelect) catSelect.value = state.selectedCategory;

  applyFiltersAndSort();

  // Scroll smoothly down to the directory section
  const section = document.getElementById('professionals');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }

  showToast(`Filtering by ${catId === 'all' ? 'All Categories' : catId.toUpperCase()}`, 'info');
}

function updateCategoryCardActiveState() {
  document.querySelectorAll('.category-card').forEach(card => {
    const cat = card.getAttribute('data-category');
    if (cat === state.selectedCategory) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });
}

function resetAllFilters() {
  state.selectedCategory = 'all';
  state.selectedLocation = 'all';
  state.selectedRating = 'all';
  state.maxPrice = 150;
  state.searchQuery = '';
  state.sortBy = 'recommended';

  // Reset Form inputs
  const searchInput = document.getElementById('proSearchInput');
  const heroSearchInput = document.getElementById('heroSearchInput');
  const catSelect = document.getElementById('categoryFilterSelect');
  const locSelect = document.getElementById('locationFilterSelect');
  const ratingSelect = document.getElementById('ratingFilterSelect');
  const sortSelect = document.getElementById('sortSelect');
  const priceRange = document.getElementById('priceRange');

  if (searchInput) searchInput.value = '';
  if (heroSearchInput) heroSearchInput.value = '';
  if (catSelect) catSelect.value = 'all';
  if (locSelect) locSelect.value = 'all';
  if (ratingSelect) ratingSelect.value = 'all';
  if (sortSelect) sortSelect.value = 'recommended';
  if (priceRange) priceRange.value = 150;

  updatePriceDisplay(150);
  applyFiltersAndSort();
  showToast('Filters have been reset', 'info');
}

function updatePriceDisplay(val) {
  const label = document.getElementById('priceDisplayLabel');
  if (label) {
    label.textContent = `Up to $${val}/hr`;
  }
}

// 6. Testimonials Slider
function renderTestimonialSlide(index) {
  const t = state.testimonials[index];
  if (!t) return;

  const quoteEl = document.getElementById('reviewQuote');
  const authorEl = document.getElementById('reviewerName');
  const locationEl = document.getElementById('reviewerLocation');
  const serviceEl = document.getElementById('hiredServiceBadge');
  const avatarEl = document.getElementById('reviewerAvatar');
  const dotsContainer = document.getElementById('sliderDots');

  if (quoteEl) quoteEl.textContent = `“${t.quote}”`;
  if (authorEl) authorEl.textContent = t.author;
  if (locationEl) locationEl.textContent = t.location;
  if (serviceEl) serviceEl.textContent = t.service;
  if (avatarEl) {
    avatarEl.src = t.avatar;
    avatarEl.alt = t.author;
  }

  // Update dots
  if (dotsContainer) {
    dotsContainer.innerHTML = state.testimonials.map((_, i) => `
      <span class="slider-dot ${i === index ? 'active' : ''}" onclick="goToTestimonialSlide(${i})"></span>
    `).join('');
  }

  state.currentTestimonialIndex = index;
}

function nextTestimonialSlide() {
  const nextIdx = (state.currentTestimonialIndex + 1) % state.testimonials.length;
  renderTestimonialSlide(nextIdx);
}

function prevTestimonialSlide() {
  const prevIdx = (state.currentTestimonialIndex - 1 + state.testimonials.length) % state.testimonials.length;
  renderTestimonialSlide(prevIdx);
}

function goToTestimonialSlide(idx) {
  renderTestimonialSlide(idx);
}

function startTestimonialAutoplay() {
  if (state.testimonialTimer) clearInterval(state.testimonialTimer);
  state.testimonialTimer = setInterval(() => {
    nextTestimonialSlide();
  }, 6000);
}

// 7. Modals Functionality
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function closeAllModals() {
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.classList.remove('open');
  });
  document.body.style.overflow = '';
}

// Profile Modal
function openProfileModal(proId) {
  const pro = state.professionals.find(p => p.id === proId);
  if (!pro) return;

  state.activePro = pro;

  // Fill in pro hero info
  document.getElementById('profileModalAvatar').src = pro.avatar;
  document.getElementById('profileModalName').textContent = pro.name;
  document.getElementById('profileModalTitle').textContent = pro.title;
  document.getElementById('profileModalLocation').textContent = pro.location;
  document.getElementById('profileModalRate').innerHTML = `$${pro.rate}<span>/hr</span>`;
  document.getElementById('profileModalRating').textContent = pro.rating.toFixed(1);
  document.getElementById('profileModalReviewsCount').textContent = `(${pro.reviewsCount} reviews)`;
  document.getElementById('profileModalCompleted').textContent = `${pro.completedJobs} Jobs Completed`;

  // Bio
  document.getElementById('profileModalBio').textContent = pro.bio;

  // Credentials
  const credsContainer = document.getElementById('profileModalCredentials');
  credsContainer.innerHTML = pro.credentials.map(c => `
    <div class="credential-item">
      <i class="fa-solid fa-circle-check"></i>
      <span>${c}</span>
    </div>
  `).join('');

  // Full Skills
  const skillsContainer = document.getElementById('profileModalSkills');
  skillsContainer.innerHTML = pro.skills.map(s => `
    <span class="skill-pill" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;">${s}</span>
  `).join('');

  // Projects
  const projectsContainer = document.getElementById('profileModalProjects');
  projectsContainer.innerHTML = pro.projects.map(prj => `
    <div style="background: var(--bg-page); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-light); margin-bottom: 0.75rem;">
      <h4 style="font-weight: 700; color: var(--dark); font-size: 0.95rem; margin-bottom: 0.2rem;">${prj.title}</h4>
      <div style="display: flex; justify-content: space-between; font-size: 0.82rem; color: var(--muted);">
        <span>Client: ${prj.client}</span>
        <span>Duration: ${prj.duration}</span>
      </div>
    </div>
  `).join('');

  // Reviews List
  renderProfileReviewsList(pro);

  // Set active tab to 'overview'
  switchProfileTab('overview');

  openModal('profileModal');
}

function renderProfileReviewsList(pro) {
  const reviewsContainer = document.getElementById('profileModalReviewsList');
  if (!reviewsContainer) return;

  reviewsContainer.innerHTML = pro.reviews.map(rev => `
    <div class="review-item-modal">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
        <span style="font-weight: 700; color: var(--dark);">${rev.author}</span>
        <span style="color: var(--amber); font-size: 0.85rem;">
          ${'★'.repeat(rev.rating)}${'☆'.repeat(5 - rev.rating)}
        </span>
      </div>
      <p style="font-size: 0.88rem; color: var(--slate-700); line-height: 1.5; margin-bottom: 0.3rem;">
        "${rev.comment}"
      </p>
      <span style="font-size: 0.75rem; color: var(--muted);">${rev.date}</span>
    </div>
  `).join('');
}

function switchProfileTab(tabName) {
  document.querySelectorAll('.profile-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-tab') === tabName);
  });
  document.querySelectorAll('.profile-tab-pane').forEach(pane => {
    pane.classList.toggle('active', pane.id === `tabPane-${tabName}`);
  });
}

function submitNewReview(e) {
  e.preventDefault();
  if (!state.activePro) return;

  const authorInput = document.getElementById('reviewAuthorInput');
  const ratingInput = document.getElementById('reviewRatingInput');
  const commentInput = document.getElementById('reviewCommentInput');

  if (!authorInput.value.trim() || !commentInput.value.trim()) {
    showToast('Please fill out your name and review feedback', 'error');
    return;
  }

  const ratingVal = parseInt(ratingInput.value, 10);
  const newRev = {
    author: authorInput.value.trim(),
    rating: ratingVal,
    date: 'Just now',
    comment: commentInput.value.trim()
  };

  state.activePro.reviews.unshift(newRev);
  state.activePro.reviewsCount += 1;
  // Recalculate rating slightly
  state.activePro.rating = Math.min(5.0, Number((state.activePro.rating * 0.9 + ratingVal * 0.1).toFixed(1)));

  renderProfileReviewsList(state.activePro);
  renderProfessionals(); // Refresh cards view

  authorInput.value = '';
  commentInput.value = '';

  showToast('Thank you! Your verified review has been published.', 'success');
}

// Contact Modal
function openContactModal(proId) {
  closeModal('profileModal');
  const pro = state.professionals.find(p => p.id === proId) || state.activePro;
  if (!pro) return;

  state.activePro = pro;

  document.getElementById('contactModalProName').textContent = pro.name;
  document.getElementById('contactModalProAvatar').src = pro.avatar;
  document.getElementById('contactModalProTitle').textContent = pro.title;

  openModal('contactModal');
}

function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('contactClientName').value.trim();
  const email = document.getElementById('contactClientEmail').value.trim();
  const message = document.getElementById('contactClientMessage').value.trim();

  if (!name || !email || !message) {
    showToast('Please fill out all required contact fields', 'error');
    return;
  }

  closeModal('contactModal');
  showToast(`Inquiry sent to ${state.activePro ? state.activePro.name : 'Professional'}! They will respond shortly.`, 'success');
  e.target.reset();
}

// Hire Modal
function openHireModal(proId) {
  closeModal('profileModal');
  const pro = state.professionals.find(p => p.id === proId) || state.activePro;
  if (!pro) return;

  state.activePro = pro;

  document.getElementById('hireModalProName').textContent = pro.name;
  document.getElementById('hireModalProAvatar').src = pro.avatar;
  document.getElementById('hireModalProRate').textContent = `$${pro.rate}/hr`;
  document.getElementById('hireModalHoursInput').value = 3;

  calculateHireEstimate();
  openModal('hireModal');
}

function calculateHireEstimate() {
  if (!state.activePro) return;
  const hours = parseFloat(document.getElementById('hireModalHoursInput').value) || 1;
  const subtotal = state.activePro.rate * hours;
  const fee = Math.round(subtotal * 0.05);
  const total = subtotal + fee;

  document.getElementById('hireEstimateSubtotal').textContent = `$${subtotal}`;
  document.getElementById('hireEstimateFee').textContent = `$${fee}`;
  document.getElementById('hireEstimateTotal').textContent = `$${total}`;
}

function handleHireSubmit(e) {
  e.preventDefault();
  const projectTitle = document.getElementById('hireProjectTitle').value.trim();
  const date = document.getElementById('hireProjectDate').value;
  const address = document.getElementById('hireProjectAddress').value.trim();

  if (!projectTitle || !date || !address) {
    showToast('Please specify the project title, date, and service location', 'error');
    return;
  }

  const bookingId = `SK-${Math.floor(100000 + Math.random() * 900000)}`;

  closeModal('hireModal');
  showToast(`Booking ${bookingId} confirmed with ${state.activePro.name}! Escrow secured.`, 'success');
  e.target.reset();
}

// Post a Job Modal
function openPostJobModal() {
  openModal('postJobModal');
}

function handlePostJobSubmit(e) {
  e.preventDefault();
  const title = document.getElementById('jobTitleInput').value.trim();
  const category = document.getElementById('jobCategorySelect').value;
  const budget = document.getElementById('jobBudgetInput').value.trim();
  const urgency = document.getElementById('jobUrgencySelect').value;
  const desc = document.getElementById('jobDescriptionInput').value.trim();

  if (!title || !category || !desc) {
    showToast('Please fill out the job title, category, and requirements', 'error');
    return;
  }

  const newJobId = `#JOB-${Math.floor(1000 + Math.random() * 9000)}`;
  state.postedJobsCount += 1;

  closeModal('postJobModal');
  showToast(`Job ${newJobId} has been posted! Vetted professionals will submit proposals within 15 minutes.`, 'success');
  e.target.reset();
}

// Auth (Login / Signup) Modal
function openAuthModal(mode = 'login') {
  switchAuthTab(mode);
  openModal('authModal');
}

function switchAuthTab(tab) {
  const loginBtn = document.getElementById('tabAuthLogin');
  const signupBtn = document.getElementById('tabAuthSignup');
  const loginForm = document.getElementById('authLoginForm');
  const signupForm = document.getElementById('authSignupForm');

  if (tab === 'login') {
    loginBtn.classList.add('active');
    signupBtn.classList.remove('active');
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
  } else {
    signupBtn.classList.add('active');
    loginBtn.classList.remove('active');
    signupForm.style.display = 'block';
    loginForm.style.display = 'none';
  }
}

function handleLoginSubmit(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showToast('Please enter a valid email address', 'error');
    return;
  }

  if (password.length < 6) {
    showToast('Password must be at least 6 characters', 'error');
    return;
  }

  // Simulate authenticated user
  const userName = email.split('@')[0];
  state.currentUser = {
    name: userName.charAt(0).toUpperCase() + userName.slice(1),
    email: email,
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80'
  };

  updateNavbarAuthUI();
  closeModal('authModal');
  showToast(`Welcome back, ${state.currentUser.name}!`, 'success');
  e.target.reset();
}

function handleSignupSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value.trim();
  const confirmPassword = document.getElementById('signupConfirmPassword').value.trim();
  const terms = document.getElementById('signupTerms').checked;

  if (!name) {
    showToast('Please provide your full name', 'error');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showToast('Please enter a valid email address', 'error');
    return;
  }

  if (password.length < 6) {
    showToast('Password must be at least 6 characters', 'error');
    return;
  }

  if (password !== confirmPassword) {
    showToast('Passwords do not match', 'error');
    return;
  }

  if (!terms) {
    showToast('You must agree to the Terms of Service', 'error');
    return;
  }

  state.currentUser = {
    name: name,
    email: email,
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80'
  };

  updateNavbarAuthUI();
  closeModal('authModal');
  showToast(`Account successfully created! Welcome to SkillHire, ${name}!`, 'success');
  e.target.reset();
}

function logoutUser() {
  state.currentUser = null;
  updateNavbarAuthUI();
  const dropdown = document.getElementById('userDropdown');
  if (dropdown) dropdown.classList.remove('show');
  showToast('You have been logged out safely', 'info');
}

function updateNavbarAuthUI() {
  const authButtons = document.getElementById('navAuthButtons');
  const userMenu = document.getElementById('navUserMenu');
  const userAvatar = document.getElementById('navUserAvatar');
  const userName = document.getElementById('navUserName');

  if (state.currentUser) {
    if (authButtons) authButtons.style.display = 'none';
    if (userMenu) userMenu.style.display = 'flex';
    if (userAvatar) userAvatar.src = state.currentUser.avatar;
    if (userName) userName.textContent = state.currentUser.name;
  } else {
    if (authButtons) authButtons.style.display = 'flex';
    if (userMenu) userMenu.style.display = 'none';
  }
}

// 8. Toast Notification System
function showToast(message, type = 'info', title = '') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  let icon = 'fa-solid fa-circle-info';
  let defaultTitle = 'Notification';

  if (type === 'success') {
    icon = 'fa-solid fa-circle-check';
    defaultTitle = 'Success';
  } else if (type === 'error') {
    icon = 'fa-solid fa-triangle-exclamation';
    defaultTitle = 'Notice';
  }

  toast.innerHTML = `
    <i class="${icon} toast-icon"></i>
    <div class="toast-text-wrap">
      <div class="toast-title">${title || defaultTitle}</div>
      <div class="toast-message">${message}</div>
    </div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 4000);
}

// 9. Event Listeners Setup
function setupEventListeners() {
  // Mobile Hamburger Menu
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileDrawer = document.getElementById('mobileNavDrawer');

  if (hamburgerBtn && mobileDrawer) {
    hamburgerBtn.addEventListener('click', () => {
      hamburgerBtn.classList.toggle('active');
      mobileDrawer.classList.toggle('open');
    });

    // Close on link click
    mobileDrawer.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        mobileDrawer.classList.remove('open');
      });
    });
  }

  // User Dropdown in Nav
  const userMenuBtn = document.getElementById('userMenuBtn');
  const userDropdown = document.getElementById('userDropdown');
  if (userMenuBtn && userDropdown) {
    userMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      userDropdown.classList.toggle('show');
    });
    document.addEventListener('click', () => {
      userDropdown.classList.remove('show');
    });
  }

  // Hero Search Form
  const heroSearchBtn = document.getElementById('heroSearchBtn');
  if (heroSearchBtn) {
    heroSearchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceInput = document.getElementById('heroSearchInput');
      const locationInput = document.getElementById('heroLocationInput');
      const categorySelect = document.getElementById('heroCategorySelect');

      if (serviceInput) state.searchQuery = serviceInput.value;
      if (categorySelect && categorySelect.value !== 'all') {
        state.selectedCategory = categorySelect.value;
        const catSelect = document.getElementById('categoryFilterSelect');
        if (catSelect) catSelect.value = categorySelect.value;
      }
      if (locationInput && locationInput.value.trim() !== '') {
        state.selectedLocation = locationInput.value.trim();
      }

      applyFiltersAndSort();

      const prosSection = document.getElementById('professionals');
      if (prosSection) prosSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Popular Searches Tags
  document.querySelectorAll('.popular-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      const val = tag.getAttribute('data-search');
      state.searchQuery = val;
      const searchInput = document.getElementById('proSearchInput');
      const heroSearchInput = document.getElementById('heroSearchInput');
      if (searchInput) searchInput.value = val;
      if (heroSearchInput) heroSearchInput.value = val;

      applyFiltersAndSort();
      const prosSection = document.getElementById('professionals');
      if (prosSection) prosSection.scrollIntoView({ behavior: 'smooth' });
      showToast(`Showing results for "${val}"`, 'info');
    });
  });

  // Directory Filters
  const proSearchInput = document.getElementById('proSearchInput');
  if (proSearchInput) {
    proSearchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      applyFiltersAndSort();
    });
  }

  const categoryFilterSelect = document.getElementById('categoryFilterSelect');
  if (categoryFilterSelect) {
    categoryFilterSelect.addEventListener('change', (e) => {
      state.selectedCategory = e.target.value;
      applyFiltersAndSort();
    });
  }

  const locationFilterSelect = document.getElementById('locationFilterSelect');
  if (locationFilterSelect) {
    locationFilterSelect.addEventListener('change', (e) => {
      state.selectedLocation = e.target.value;
      applyFiltersAndSort();
    });
  }

  const ratingFilterSelect = document.getElementById('ratingFilterSelect');
  if (ratingFilterSelect) {
    ratingFilterSelect.addEventListener('change', (e) => {
      state.selectedRating = e.target.value;
      applyFiltersAndSort();
    });
  }

  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      applyFiltersAndSort();
    });
  }

  const priceRange = document.getElementById('priceRange');
  if (priceRange) {
    priceRange.addEventListener('input', (e) => {
      state.maxPrice = parseInt(e.target.value, 10);
      updatePriceDisplay(state.maxPrice);
      applyFiltersAndSort();
    });
  }

  // Quick Chips in filter bar
  document.querySelectorAll('.filter-chip-btn').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-chip-btn').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const chipCat = chip.getAttribute('data-filter-chip');
      state.selectedCategory = chipCat;
      const catSelect = document.getElementById('categoryFilterSelect');
      if (catSelect) catSelect.value = chipCat;
      applyFiltersAndSort();
    });
  });

  // Modal Backdrop click to close
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal(overlay.id);
      }
    });
  });

  // ESC key closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });

  // Form Submissions
  const contactForm = document.getElementById('contactModalForm');
  if (contactForm) contactForm.addEventListener('submit', handleContactSubmit);

  const hireForm = document.getElementById('hireModalForm');
  if (hireForm) hireForm.addEventListener('submit', handleHireSubmit);

  const hireHours = document.getElementById('hireModalHoursInput');
  if (hireHours) hireHours.addEventListener('input', calculateHireEstimate);

  const postJobForm = document.getElementById('postJobForm');
  if (postJobForm) postJobForm.addEventListener('submit', handlePostJobSubmit);

  const authLoginForm = document.getElementById('authLoginForm');
  if (authLoginForm) authLoginForm.addEventListener('submit', handleLoginSubmit);

  const authSignupForm = document.getElementById('authSignupForm');
  if (authSignupForm) authSignupForm.addEventListener('submit', handleSignupSubmit);

  const reviewForm = document.getElementById('profileReviewForm');
  if (reviewForm) reviewForm.addEventListener('submit', submitNewReview);

  // Main Contact Support Form
  const platformContactForm = document.getElementById('platformContactForm');
  if (platformContactForm) {
    platformContactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Thank you! Your message has been sent to our customer care team.', 'success');
      platformContactForm.reset();
    });
  }

  // Newsletter Form
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('newsletterEmailInput').value.trim();
      if (!email || !email.includes('@')) {
        showToast('Please provide a valid email', 'error');
        return;
      }
      showToast('Subscribed! You will receive weekly discounts and pro tips.', 'success');
      newsletterForm.reset();
    });
  }
}

// Global window mappings so HTML inline onclick handlers work reliably
window.selectCategoryFilter = selectCategoryFilter;
window.resetAllFilters = resetAllFilters;
window.openModal = openModal;
window.closeModal = closeModal;
window.openProfileModal = openProfileModal;
window.openContactModal = openContactModal;
window.openHireModal = openHireModal;
window.openPostJobModal = openPostJobModal;
window.openAuthModal = openAuthModal;
window.switchAuthTab = switchAuthTab;
window.switchProfileTab = switchProfileTab;
window.logoutUser = logoutUser;
window.nextTestimonialSlide = nextTestimonialSlide;
window.prevTestimonialSlide = prevTestimonialSlide;
window.goToTestimonialSlide = goToTestimonialSlide;
window.showToast = showToast;
