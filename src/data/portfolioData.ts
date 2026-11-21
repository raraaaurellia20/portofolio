export interface StatItem {
  value: string;
  label: string;
}

export interface FocusNiche {
  id: string;
  title: string;
  description: string;
  stackLabel: string;
  iconName: 'code' | 'cloud' | 'design' | 'video';
}

export interface ValueProp {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export interface ProjectItem {
  id: string;
  category: 'Full-Stack App' | 'Platform & Docs' | 'Web App / PWA';
  title: string;
  summary: string;
  imageUrl: string;
  imageAlt: string;
  metrics: string[];
  year: string;
  role: string;
  stack: string[];
  challenge: string;
  solution: string;
  deliverables: string[];
}

export interface TechStackItem {
  id: string;
  name: string;
  role: string;
  usageNote: string;
  relatedProjectIds: string[];
}

export interface ServicePackage {
  id: string;
  tierLabel: string;
  name: string;
  price: string;
  unit: string;
  featured?: boolean;
  badge?: string;
  features: string[];
  ctaLabel: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatarUrl: string;
}

export const HERO_DATA = {
  kicker: 'Institut Teknologi PLN • Information Systems Undergraduate',
  headlineTop: 'AZZAHRA',
  headlineBottom: 'AURELLIA',
  pitch:
    'Authentic, high-converting digital products, modern web engineering, and developer content bridging technical systems with intuitive design.',
  portraitUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCPrOCIYhS4RcRM6Qe4MQcXGRWwaWYSBFWIH7BIkJwhWzJx5t6OjGfl_ZDILmFTxFZcPf3HgTky-k-7RNhq0821jLZipIE1KUiCPCJRI00SLcmj7Yueb4EFUfboamazigsDujkcB9dj1w2S_UenOYqiOVy06FfsI_jMX4N9CJnpegKUrxKOIOw3xfWX6gIuki-8yDsNE2ySFt9DkLV1ilWVIxZ6chTsTMTsytTnrvBjgonsYzWvPpdlAA',
  portraitAlt: 'Azzahra Aurellia Putri smiling portrait',
  stampMetaLeft: 'EST. 2026 / JAKARTA',
  stampMetaRight: 'ID • AZZAHRA',
  tapeNote: 'developer & creator ✦',
};

export const HERO_STATS: StatItem[] = [
  { value: '3+ YRS', label: 'Coding & Content' },
  { value: '15+ PROJS', label: 'Shipped Live' },
  { value: '45K+', label: 'Community Reach' },
];

export const ABOUT_DATA = {
  badge: 'Background & Story',
  title: 'ABOUT ME',
  paragraphs: [
    'I’m an Information Systems undergraduate at Institut Teknologi PLN, developer creator, and aspiring software engineer with over 3 years of experience crafting interactive web systems that actually connect with users.',
    'I started out sharing honest tutorials and product breakdowns on tech communities. Today, I assist startups, tech brands, and student organizations build full-stack web applications, optimize user experience, and create educational tech content that demystifies modern cloud tools.',
  ],
  tags: ['FrontendCraft', 'PLNInnovation', 'CreatorTech', 'UIUXEngineering'],
  polaroidUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAb4S4TGIAPzdY17KmsgUNdLfVY-LSq0Ej5qUVoFJtKEqt9sVDipWoyDMlj1GZlUjggpZfTNiydMzhqaGXylIK8L5bkXFoEzTgbzd5rFYy1_WAaK7oxN3b5FRHS9NPltWp44PHN9I9ViQdX4-R-PS5DdqO43CLZYr7pS2JVMxMstaRUDxKEksFHKzXpb6nVcsRNPTD2mx0RtEYDw5hDyVu2ExWySTdYMUa8lzigRx6y',
  polaroidAlt: 'Azzahra working on code and digital media',
  polaroidName: 'Azzahra Aurellia (Aurel)',
  polaroidCaption: 'Jakarta, Indonesia • 2026',
};

export const FOCUS_NICHES: FocusNiche[] = [
  {
    id: 'web-eng',
    title: 'Web Engineering',
    description: 'Responsive modern web applications with clean, scalable, accessible code.',
    stackLabel: 'React · Node · TS',
    iconName: 'code',
  },
  {
    id: 'systems-cloud',
    title: 'Systems & Cloud',
    description: 'Information architecture, database structures, and smart utility IoT integrations.',
    stackLabel: 'SQL · AWS · Firebase',
    iconName: 'cloud',
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Editorial layouts, wireframes, and design system components centered on human delight.',
    stackLabel: 'Figma · Prototyping',
    iconName: 'design',
  },
  {
    id: 'tech-content',
    title: 'Tech Content',
    description: 'Digestible technical tutorials, workflow reels, and community developer evangelism.',
    stackLabel: 'TikTok · YouTube · Dev.to',
    iconName: 'video',
  },
];

export const VALUE_PROPS: ValueProp[] = [
  {
    id: 'clean-code',
    title: 'Robust & Clean Code',
    description:
      'Standardized semantic structure, maintainable component code, and performance optimization right out of the box.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDaOzb-0Ku0GCrF9jTlDWIW2ZyKvaY2-VK877mY3e7n7qTMTP64DfnNi77cToqCYlp6iyocceKJK_38cr1bclwGNxwkfQM4DQtE7ClYwujnnT_Eem5uv3S5CSnxFzpeonC8tUcpI0pT2MpKDkD8Rqp48_JL6cDgP5JSAoHBivcn_Ky4z-t3sz_orSQ3FNzsohkmG6pxV9KNhu4KmNNs_uB4URkdGpzJEB58TmV3WPNC',
    imageAlt: 'Clean code editor view',
  },
  {
    id: 'community',
    title: 'Community Driven',
    description:
      'Active student lead with authentic ties to academic, developer, and student tech ecosystems across Jakarta.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAwPcyYnPOP4zWaXmdvHLwb0Etdw-9fSu-oUcs_FGk8Ges8CGOtu7ge6kOLDYYdogF7PIoG3fVnn2gAHsMyuSCY2znXCIhssr60qQ2nQGPAwDSSBgb58VVt6uu8KnbKOdMiUtPSl7eWQKtfBl-5wQnN7B3Y3aTF_jp8sQjWw05NIFLn-sN3ZAcQdbQ3002sP6nD2Ay9miTxfZxlMxvk_l_XzwxXka6NPqA8a5B26jsn',
    imageAlt: 'Student developer community collaboration',
  },
  {
    id: 'end-to-end',
    title: 'End-to-End Delivery',
    description:
      'From requirement gathering, Figma user journeys, and database modeling, through deployment and documentation.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDaSiIvccpvVDJANFf0e8dRlC50PIB-I5735z2yPgjbQB1SDe5hyB1Igo3KyGE1U8C8IMVFDtGQBAOKxhMe3fiiTJ04M2S2Uhtc0HfCvQHzC-hWm2iXbx-0T-o9TnXRX5hdUyGcWy47ySwHLQ8c7vWsSzl0vRwZw5P5GqbcgWnqWqV4ysK4lRCcbvBtc4igF0X_VvlJAlOuNTgWz8EvH5wz-b5fJCdT7-DL4u0_wDcU',
    imageAlt: 'Laptop engineering workspace',
  },
  {
    id: 'creator',
    title: 'Creator Mindset',
    description:
      'Content is never sterile or scripted; technical ideas are presented in engaging, intuitive, and modern formats.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAat3gmImBJU6pngNhLeZ6SExDzudUxXxzANWtXYxJug_9DyXy7RkCvAgMmUx7EvYAS4UP9mEoN0_HMIG7RFowDnxhdt937wzF0qjXL9q_pOKv1GNwy0sDokaZrwAOGhj9rFW5I4zxl97W7iK3oTSnDO6W1uYP8EBhMoJ7KdT-6HzzRUOFwEpdWc95kt-BvhCpz3nu3eL_wfxiorXtknSGdCo8w9cw1hbIbSPvJ_8Bq',
    imageAlt: 'Developer creator studio portrait',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'pln-energy-monitor',
    category: 'Full-Stack App',
    title: 'PLN Smart Energy Monitor',
    summary:
      'Real-time campus electricity metering dashboard utilizing IoT sensor feeds, anomaly detection, and interactive energy load charts.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBOITX_2uahaNg9wXQVZbudgK-3fnTjl71_dICQpLM1j0OiqXZXFelLRojc3AQm7HLLfN6bG9wecIF0ZIYMYR1b3Vz7HU3xc6aRa3FYsJBK83FI9c_3rEus3FWnwtMGSNEslDtquP844Y79ezVFQ0P_ynIkC1r9MItd81e15mHMtTkE9C90MFQpqa0svLg7XMal2A16MLL2Rd2_yzq-nN5-cDixL9KhMkXm2xtlsNVs',
    imageAlt: 'PLN Smart Energy Monitoring Dashboard',
    metrics: ['2.4k Peak Users', '-38% Energy Waste'],
    year: '2026',
    role: 'Lead Full-Stack Engineer & UI Designer',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    challenge:
      'Campus facility teams relied on manual spreadsheet exports from substation meters, delaying detection of off-hours HVAC and lab power spikes.',
    solution:
      'Built a low-latency telemetry web dashboard with WebSocket meter streams, threshold alerts, and clear building-level load breakdowns for non-technical staff.',
    deliverables: [
      'Real-time telemetry ingestion API & PostgreSQL schema',
      'Interactive peak-load anomaly dashboard with role access',
      'Automated weekly campus energy audit export',
    ],
  },
  {
    id: 'campus-hub',
    category: 'Platform & Docs',
    title: 'Campus Community Hub',
    summary:
      'Centralized platform for peer mentoring, event registrations, and hackathon project voting designed for IT PLN engineers.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAJslgOFDPaJa9eSjJS0SzO6_IFPGN4k_cp-4dhrwP-51DQrYVOhaJpPQwoPKrKFralLIUDWNfUkSSYnsdbVpfb77tWqUTsy78gehLqVCZzLA9p05COGb1FpArMsc150aV7uZabPO9eGD4X3KQavYi84dji2iNreOlM_ei45ljQDyZDjzON8irqtIOmaJtzqnGUlSrMxHHE6bSRy9ZcFk7OrLZ4n9io3asZhSAQgbw0',
    imageAlt: 'Campus Student Developer Hub Community',
    metrics: ['1.2K Active Members', '+85% Registration'],
    year: '2025',
    role: 'Product Engineer & Community Lead',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Figma'],
    challenge:
      'Hackathon sign-ups, workshop materials, and peer mentorship schedules were scattered across chat groups and expiring form links.',
    solution:
      'Engineered an editorial student portal featuring searchable project archives, live hackathon voting ballots, and structured study-track docs.',
    deliverables: [
      'Member directory & peer mentor matching flow',
      'One-click workshop RSVP with QR check-in passes',
      'Open-source documentation hub for freshman cohorts',
    ],
  },
  {
    id: 'ecotrack-pwa',
    category: 'Web App / PWA',
    title: 'EcoTrack Sustainability App',
    summary:
      'Lightweight sustainability mobile-first web app with automated carbon saving calculators, badges, and gamified social feeds.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBtEVlN_xq4sR5L3ffZ658qyFM0RFFZfU-qPDANx3HrlIPjXJNW5eDZc3p_JEtlqhWGD6dS80eKkwnNCSBbaHy76g-DVO8pdon-qMYXQl8ybHN-YazRDVp8m3Oz-vrGYfL8wX4ayJvHMJA-9g9SUBuI196zZNyKJDkNT94vaER0aEaDKCRxjUQfqotVvnrMr-te2RUcAMAzlnf3oNwqNfXklvwz3wFi9W4o28bDLIYV',
    imageAlt: 'EcoTrack Carbon Footprint Estimator',
    metrics: ['4.8★ Rating', '18k Pageviews'],
    year: '2025',
    role: 'Frontend Architect & UX Researcher',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Python', 'MongoDB'],
    challenge:
      'Existing carbon tracking tools felt clinical and tedious, causing student users to drop off within their first three days.',
    solution:
      'Crafted an offline-capable PWA with tactile zine milestone cards, commute/electricity calculators tailored to Jakarta transit, and weekly team challenges.',
    deliverables: [
      'Mobile-first PWA with local offline log sync',
      'Custom emission factor calculator for Indonesia transit & grid',
      'Shareable weekly sustainability summary cards',
    ],
  },
];

export const TECH_STACK: TechStackItem[] = [
  {
    id: 'js-ts',
    name: 'JavaScript / TS',
    role: 'Frontend Logic',
    usageNote: 'Strict TypeScript interfaces across telemetry parsers, form validation, and UI state.',
    relatedProjectIds: ['pln-energy-monitor', 'campus-hub', 'ecotrack-pwa'],
  },
  {
    id: 'react-next',
    name: 'React & Next.js',
    role: 'Modern UI',
    usageNote: 'Modular component systems, SSR documentation hubs, and real-time client dashboards.',
    relatedProjectIds: ['pln-energy-monitor', 'campus-hub', 'ecotrack-pwa'],
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    role: 'Styling & Design',
    usageNote: 'Custom design-token architectures with crisp tactile borders, print-inspired grids, and accessible contrast.',
    relatedProjectIds: ['pln-energy-monitor', 'campus-hub', 'ecotrack-pwa'],
  },
  {
    id: 'node-python',
    name: 'Node.js & Python',
    role: 'API & Backend',
    usageNote: 'REST/WebSocket servers, IoT sensor ingestion pipelines, and sustainability calculation services.',
    relatedProjectIds: ['pln-energy-monitor', 'ecotrack-pwa'],
  },
  {
    id: 'db',
    name: 'PostgreSQL & Mongo',
    role: 'Database Modeling',
    usageNote: 'Time-series energy metering schemas in Postgres and flexible community document stores.',
    relatedProjectIds: ['pln-energy-monitor', 'ecotrack-pwa'],
  },
  {
    id: 'figma',
    name: 'Figma & FigJam',
    role: 'Wireframes & UX',
    usageNote: 'Component tokens, rapid user-journey mapping, and stakeholder review prototypes before coding.',
    relatedProjectIds: ['campus-hub', 'pln-energy-monitor'],
  },
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'starter-audit',
    tierLabel: 'Entry Tier',
    name: 'STARTER AUDIT',
    price: '$150',
    unit: '/ project',
    features: [
      '1 Landing page review or single web component',
      'UI/UX accessibility checklist',
      'Responsive viewport fixes (Mobile & Desktop)',
      '3-day delivery window',
    ],
    ctaLabel: 'Choose Starter',
  },
  {
    id: 'full-web-build',
    tierLabel: 'Featured Tier',
    badge: 'Most Popular',
    featured: true,
    name: 'FULL WEB BUILD',
    price: '$450',
    unit: '/ sprint',
    features: [
      'Custom responsive website (up to 4 pages)',
      'Modern tech stack: React / Tailwind CSS',
      'Interactive CMS or API endpoints integrated',
      'SEO basics, meta tags & speed optimization',
      '2 revision cycles + 5-day delivery',
    ],
    ctaLabel: 'Choose Growth',
  },
  {
    id: 'tech-advocacy',
    tierLabel: 'Partner Tier',
    name: 'TECH ADVOCACY',
    price: '$850',
    unit: '/ month',
    features: [
      '3 dedicated developer reels / tutorial videos',
      'Open-source starter repository & docs',
      'Community workshop / webinar co-hosting',
      'Full organic & paid usage rights (30 days)',
    ],
    ctaLabel: 'Choose Partner',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'sarah-tanaka',
    name: 'Sarah Tanaka',
    role: 'Lead Dev @ EcoSolutions',
    quote:
      '"Aurel turned our sluggish energy analytics dashboard into a clean, lightning-fast app that students and professors actually love using. Truly gifted at front-end precision."',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCwNuLKUySpARW3uXBPqTC_LucGz1ESX6w5dVW3KFo2NN7tzWZGxxEGUd53yy_DkpVkmwvUasVFSIrONNMNsNyWPj4u0MkDKPjgOuK1M28IAl4EZoUEipIM4l7Vc0ciZeZHOlq0B08XknsqemZqLb5Ie5cShk6gcFX0VvenvX-89mk5eGjPuQGUKi1bxvFw4Ha9R_Xfqek5SHuA9E3GUfM0Vdf15Z3t7xSnJk-F908M',
  },
  {
    id: 'dimas-pratama',
    name: 'Dimas Pratama',
    role: 'Community Head @ PLN Devs',
    quote:
      '"Reliable, sharp with modern JavaScript, and communicates progress clearly. Her tech tutorial videos brought in over 300 new applicants to our campus coding hackathon."',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCFpo0KL5UEaVEmbCHEH2CPBwVUA96cECtsWijv7HKKOecLqUnw4hrSiIKksfjy1Bz9LMSzVQFht0ybUnUZZQHQKjQuuhcNED_odDjUUnkEg-snMZWjAigyJhFAQl-ccbHaQnwzD_C7LV4nGgXtLHo07fhBMXMiZNVzxViqFW7hwXip5xgWHIJYohTLXY3HmambK6gs1oPe1sFIrEJ4Eh035WJTjWUaMlq_02_omtwt',
  },
  {
    id: 'nadia-arisandi',
    name: 'Nadia Arisandi',
    role: 'Product Manager @ EduTech Asia',
    quote:
      '"Super professional and delivered earlier than our requested deadline. Her design sense paired with clean semantic code made onboarding our QA engineers effortless."',
    avatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAcXLTkUt_dmetEQR9FR5Al2OUcXjeW0HwmTGj_UEAo5y76Fedl5kAOhNKTga7xlVyZxoaGW3i8VOXcFHQd1E2xBiATU5Y7lXEJX8bkFESqOPyC-K3njJxdqexjYUMYDF67tKsat-yVvpmaKLQpWPNwK_jmfsi85iKIw_3RZK8f_rolSHWVeNqyTj_nN62jSyAWsVTPv4rZSaJVaRFLdGPbIKbDftZJU6L31_s1eTRx',
  },
];

export const CONTACT_INFO = {
  email: 'raraaaaurelliaputri@gmail.com',
  location: 'Jakarta Barat, Indonesia (WIB)',
  socials: [
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Instagram', href: 'https://instagram.com' },
  ],
};
