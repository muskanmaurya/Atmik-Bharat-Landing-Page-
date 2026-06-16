export const ASSETS = {
  logo: "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/appi-blue-wht-logo.svg",
  heroVideo:
    "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/video/appi-home-hero-video.mp4",
  heroPoster:
    "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/home-hero-poster-1.webp",
  heroGradient:
    "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/home-hero-content-gradient.webp",
};

export const navItems = [
  {
    label: "Atmik Bharat Digital",
    href: "#atmikbharat",
    featured: "Leader in AI-First Product Engineering",
  },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Resources", href: "#resources" },
];

export const services = [
  {
    tag: "Strategic Technology Consulting",
    title: "Strategic Technology\nConsulting",
    description:
      "From architecture audits to digital transformation strategy, we help leaders align technology with business goals for measurable ROI.",
    cta: "View Consulting Services",
  },
  {
    tag: "Digital Product Development & Engineering",
    title: "Digital Product\nDevelopment & Engineering",
    description:
      "As your digital product engineering company, we handle the full lifecycle of software development—from cloud-native applications to complex ERP systems.",
    cta: "View Product Engineering Services",
  },
  {
    tag: "AI, Data and Analytics Solutions",
    title: "AI, Data and\nAnalytics Solutions",
    description:
      "We integrate advanced AI, generative AI, and machine learning models to automate operations, predict trends, and personalize customer experiences at scale.",
    cta: "View Artificial Intelligence Services",
  },
  {
    tag: "Cloud Operations and Cybersecurity",
    title: "Cloud Operations\nand Cybersecurity",
    description:
      "As your IT service company, we engineer cloud-native environments rooted in Zero Trust principles, ensuring your infrastructure is as scalable as it is impenetrable.",
    cta: "View Cybersecurity Services",
  },
];

export interface SubSector {
  title: string;
  description: string;
}

export interface SectorData {
  tag: string;
  title: string;
  description: string;
  subSectors: SubSector[];
}

export const sectors: SectorData[] = [
  {
    tag: "01",
    title: "Fast-Growth\nStartups",
    description: "Innovative Technology Platforms for Rapid Scale. Engineered for high-velocity tech startups to deploy scalable architectures.",
    subSectors: [
      {
        title: "Fintech",
        description: "Automate customer onboarding, loan updates and secure payments through WhatsApp, ensuring faster transactions and better user trust."
      },
      {
        title: "HealthTech",
        description: "Enable appointment booking, teleconsultations, reminders and instant lab report sharing to deliver seamless digital healthcare experiences."
      },
      {
        title: "SaaS & AI/ML Startups",
        description: "Provide instant onboarding, subscription reminders and AI-driven support to scale B2B customer success."
      },
      {
        title: "EdTech",
        description: "Share study material, conduct tests and provide instant student support—making learning more interactive and accessible."
      }
    ]
  },
  {
    tag: "02",
    title: "SMEs &\nIndustrial Units",
    description: "Digitizing Workflows and Operational Logistics to streamline traditional business frameworks and lower running costs.",
    subSectors: [
      {
        title: "Manufacturing & Industrial",
        description: "Digitize workflows, track operations in real time, and enable seamless vendor communication on WhatsApp to accelerate production."
      },
      {
        title: "Logistics & Supply Chain",
        description: "Enable shipment tracking, delivery updates and automated notifications for improved supply chain transparency."
      },
      {
        title: "Real Estate & Construction",
        description: "Showcase properties, book site visits, and deliver real-time project updates directly to buyers using intelligent WhatsApp chatbots."
      }
    ]
  },
  {
    tag: "03",
    title: "Retail &\nE-Commerce",
    description: "Conversational Commerce & Unified Retail Retention to transform how brands communicate and transact with global audiences.",
    subSectors: [
      {
        title: "Retail & E-commerce",
        description: "Retailers and e-commerce brands can sell smarter on WhatsApp, simplify order handling, and boost customer loyalty with targeted, personalized promotions."
      },
      {
        title: "FoodTech",
        description: "Streamline ordering, confirmations and delivery updates while improving retention with personalized offers via WhatsApp."
      },
      {
        title: "Hospitality & Travel",
        description: "Simplify booking confirmations, customer queries and personalized promotions, while offering 24/7 WhatsApp support to travelers."
      }
    ]
  },
  {
    tag: "04",
    title: "GovTech &\nPublic Utilities",
    description: "Secure Enterprise Systems for Public Services, formulated using rigorous data protection rules and enterprise security backends.",
    subSectors: [
      {
        title: "Public Utilities",
        description: "Send usage alerts, bill notifications and outage updates, while offering real-time grievance redressal and enabling instant digital payments on WhatsApp."
      },
      {
        title: "Revenue & Tax Departments",
        description: "Simplify tax reminders, filing assistance, payment alerts and grievance resolution to boost compliance and efficiency."
      },
      {
        title: "Citizen Services",
        description: "provide access to birth/death certificates, status tracking, license renewals and permits directly through WhatsApp."
      },
      {
        title: "Transport & Mobility",
        description: "Provide ticket booking, pass renewals, traffic updates, and complaint redressal with automated WhatsApp services."
      }
    ]
  }
];


export interface TechItem {
  id: string;
  name: string;
  logo: string;
  color: string; // Used for the dynamic hover glow
  category: string;
}

export const coreTechnologies: TechItem[] = [
  // Frontend
  { id: "react", name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/960px-React-icon.svg.png", color: "#61DAFB", category: "Frontend" },
  { id: "nextjs", name: "Next.js", logo: "https://i.pinimg.com/736x/4a/2b/e7/4a2be73b1e2efb44355436c40bf496dd.jpg", color: "#FFFFFF", category: "Frontend" },
  { id: "tailwind", name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/960px-Tailwind_CSS_Logo.svg.png", color: "#38B2AC", category: "Frontend" },
  
  // Backend & Database
  { id: "nodejs", name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/960px-Node.js_logo.svg.png?_=20170401104355", color: "#339933", category: "Backend" },
  { id: "express", name: "Express.js", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7S33Oq2FeRbyBBA6l1q8PwLVa3SzaONO-9Q&s", color: "#FFFFFF", category: "Backend" },
  { id: "mongodb", name: "MongoDB", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/960px-MongoDB_Logo.svg.png", color: "#47A248", category: "Database" },
  
  // Cloud & DevOps
  { id: "aws", name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/960px-Amazon_Web_Services_Logo.svg.png", color: "#FF9900", category: "Cloud" },
  { id: "gcp", name: "Google Cloud", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXNrYkBddvouj3W4QIUTo67nbO5xElzR7v2w&s", color: "#4285F4", category: "Cloud" },
  { id: "docker", name: "Docker", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Docker_Logo.png", color: "#2496ED", category: "DevOps" },
  
  // AI & Analytics
  { id: "python", name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/3840px-Python-logo-notext.svg.png", color: "#3776AB", category: "AI/ML" },
  { id: "tensorflow", name: "TensorFlow", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/960px-Tensorflow_logo.svg.png", color: "#FF6F00", category: "AI/ML" },
  { id: "openai", name: "OpenAI", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR03CzPAe5wsKNtWmDG715sO_EMoalh2h9vYQ&s", color: "#412991", category: "AI/ML" }
];

// // src/data/content.ts
// export interface ServiceSlide {
//   title: string;
//   description: string;
//   image: string;
//   thumbnail: string;
// }

// export const servicesSlides: ServiceSlide[] = [
//   {
//     title: "Mobile App Development",
//     description: "Build secure native and cross-platform apps with seamless experiences.",
//     image: "/assets/services/mobile-app-bg.jpg", 
//     thumbnail: "/assets/services/mobile-app-thumb.jpg"
//   },
//   // {
//   //   title: "Website & Web App Development",
//   //   description: "Create responsive, scalable web solutions for modern businesses.",
//   //   image: "/assets/services/web-dev-bg.jpg",
//   //   thumbnail: "/assets/services/web-dev-thumb.jpg"
//   // },
//   // {
//   //   title: "AI & Chatbot Development",
//   //   description: "Develop intelligent AI chatbots to automate support and boost engagement.",
//   //   image: "/assets/services/ai-chatbot-bg.jpg",
//   //   thumbnail: "/assets/services/ai-chatbot-thumb.jpg"
//   // },
//   // {
//   //   title: "Analytics",
//   //   description: "Leverage data analytics to gain actionable insights for business growth.",
//   //   image: "/assets/services/analytics-bg.jpg",
//   //   thumbnail: "/assets/services/analytics-thumb.jpg"
//   // },
//   {
//     title: "Automation",
//     description: "Streamline processes with smart automation to enhance efficiency and output.",
//     image: "/assets/services/automation-bg.jpg",
//     thumbnail: "/assets/services/automation-thumb.jpg"
//   },
//   {
//     title: "Cloud Integration",
//     description: "Enable seamless cloud migration, integration and optimized resource management.",
//     image: "/assets/services/cloud-bg.jpg",
//     thumbnail: "/assets/services/cloud-thumb.jpg"
//   },
//   {
//     title: "AI/ML",
//     description: "Deliver advanced AI and machine learning models for predictive solutions.",
//     image: "/assets/services/aiml-bg.jpg",
//     thumbnail: "/assets/services/aiml-thumb.jpg"
//   },
//   {
//     title: "Deep Tech",
//     description: "Adopt cutting-edge deep tech innovations to tackle complex challenges.",
//     image: "/assets/services/deep-tech-bg.jpg",
//     thumbnail: "/assets/services/deep-tech-thumb.jpg"
//   },
//   {
//     title: "AWS Integration",
//     description: "Expert AWS integration for high-performance systems.",
//     image: "/assets/services/aws-bg.jpg",
//     thumbnail: "/assets/services/aws-bg.jpg"
//   },
//   {
//     title: "Gateway Integration",
//     description: "Connect systems and applications securely with robust gateway integrations.",
//     image: "/assets/services/gateway-bg.jpg",
//     thumbnail: "/assets/services/gateway-thumb.jpg"
//   },
//   {
//     title: "API & Plugin Development",
//     description: "Design custom APIs and plugins to extend application functionalities.",
//     image: "/assets/services/api-plugin-bg.jpg",
//     thumbnail: "/assets/services/api-plugin-thumb.jpg"
//   },
//   {
//     title: "Custom Solutions",
//     description: "Tailor unique technology solutions to meet specific business requirements.",
//     image: "/assets/services/custom-bg.jpg",
//     thumbnail: "/assets/services/custom-thumb.jpg"
//   }
// ];

export interface ServiceSlide {
  title: string;
  description: string;
  image: string;
  thumbnail: string;
}

export const servicesSlides: ServiceSlide[] = [
  {
    title: "Mobile App Architecture",
    description: "Building highly-scalable, production-hardened ecosystems for mobile interfaces—engineered to process deep architecture request velocities cleanly.",
    image: "/assets/services/mobile-app-bg.png", 
    thumbnail: "/assets/services/mobile-app-bg.png"
  },
  {
    title: "Web App Ecosystems",
    description: "Deploying MERN, React, and Next.js production cores to create heavily-scaled, secure web applications that map natively onto enterprise structures.",
    image: "/assets/services/web-app-bg.png", 
    thumbnail: "/assets/services/web-app-bg.png"
  },
  {
    title: "API & Plugin Systems",
    description: "Extend core functionality with heavily-versioned, highly secure micro-service pathways and structured plug-and-play network adapters.",
    image: "/assets/services/api-systems-bg.png", 
    thumbnail: "/assets/services/api-systems-bg.png"
  },
  {
    title: "Analytics Insights",
    description: "Actionable data matrix views and live analytical telemetry to monitor core operation health metrics and maximize conversion velocity.",
    image: "/assets/services/analytics-bg.png", 
    thumbnail: "/assets/services/analytics-bg.png"
  },
  {
    title: "AI & Chatbot Ecosystems",
    description: "Formulating intelligent neural agents, specialized NLU classifications, and custom MLOps automation layers for robust enterprise support.",
    image: "/assets/services/ai-chatbot-bg.png", 
    thumbnail: "/assets/services/ai-chatbot-bg.png"
  },
  {
    title: "Cloud Integrations",
    description: "Seamless cloud migrations and elite high-performance network frameworks engineered to withstand heavily-scaled application parameters.",
    image: "/assets/services/cloud-bg.png", 
    thumbnail: "/assets/services/cloud-bg.png"
  },
  {
    title: "Gateway Architectures",
    description: "Custom secure load-balancing gateway patterns and unified managers designed for absolute structural durability and infrastructure balance.",
    image: "/assets/services/gateway-bg.png", 
    thumbnail: "/assets/services/gateway-bg.png"
  },
  {
    title: "Deep Tech & Automation",
    description: "Integrating LLM tuning, RAG vector databases, and multilingual support to shift traditional operations into automated digital workflows.",
    image: "/assets/services/deep-tech-bg.png", 
    thumbnail: "/assets/services/deep-tech-bg.png"
  },
  {
    title: "Custom Solutions",
    description: "Tailor-made, robust engineering blueprints created specifically to answer intricate system requirements and unique business goals.",
    image: "/assets/services/ai-chatbot-bg.png", 
    thumbnail: "/assets/services/ai-chatbot-bg.png"
  }
];

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: "01",
    question: "How does Atmik Bharat approach digital transformation for legacy enterprises?",
    answer: "We take a holistic approach, beginning with a comprehensive architectural audit. We then modernize legacy systems by migrating them to scalable cloud infrastructures (like AWS) and integrating automated workflows, ensuring zero operational downtime during the transition."
  },
  {
    id: "02",
    question: "What technologies and architectures do you use to build scalable products?",
    answer: "We engineer our platforms utilizing modern, high-performance web ecosystems. Our development deeply leverages robust MERN stack architectures, utilizing React and Next.js for lightning-fast frontends, paired with utility-first styling for precise, responsive, and highly maintainable interfaces."
  },
  {
    id: "03",
    question: "How do you leverage Artificial Intelligence in your business solutions?",
    answer: "We integrate specialized AI models tailored to your operational needs. This ranges from intelligent NLP chatbots for customer support to custom MLOps pipelines and RAG vector databases, turning raw enterprise data into actionable, automated intelligence."
  },
  {
    id: "04",
    question: "How do you ensure data security, especially for GovTech and public utilities?",
    answer: "Security is embedded directly into our CI/CD pipelines. We implement Zero Trust architectures, highly secure API gateways, and rigorous encryption standards, ensuring full compliance with enterprise and government data protection regulations."
  },
  {
    id: "05",
    question: "Why choose Atmik Bharat as your primary digital engineering partner?",
    answer: "We go beyond simply writing code; we deliver measurable business transformation. With a track record of 150+ successful deployments, we combine deep tech expertise with agile methodologies to deliver secure, optimized solutions that drive serious ROI."
  }
];

export const inventivAIPillars = [
  {
    title: "GenAI Integration",
    items: ["AI Agents", "Chatbots", "Coding Assistants"],
  },
  {
    title: "Computer Vision",
    items: ["Quality Control", "Facial Recognition"],
  },
  {
    title: "Data Engineering",
    items: ["Building the infrastructure that feeds the AI."],
  },
];

export const stats = [
  {
    number: "3+",
    title: "YEARS OF\nEXPERIENCE",
    description:
      "Decades of innovation compressed into rapid, high-impact growth.",
    image:
      "/assets/stats/Experience.png",
  },
  {
    number: "12+",
    title: "Services",
    description:
      "Comprehensive lifecycle support: from custom APIs to advanced AI/ML",
    image:
      "/assets/stats/Sectors.png",
  },
  {
    number: "25M+",
    title: "End-Users\nServed",
    description:
      "Engineering robust, high-traffic systems capable of handling massive, real-world scale",
    image:
      "/assets/stats/networks.png",
  },
  {
    number: "150+",
    title: "Digital Projects\nDelivered",
    description:
      "Transforming complex business requirements into high-performance, scalable software solutions",
    image:
      "/assets/stats/150plus.png",
  },
  {
    number: "99.9%",
    title: "Uptime\nMaintained",
    description:
      "Ensuring mission-critical reliability for enterprise applications around the clock",
    image:
      "/assets/stats/Uptime.png",
  },
  {
    number: "₹12Cr+",
    title: "Cost\nSavings",
    description:
      "Driving operational efficiency by automating workflows and optimizing resource allocation.",
    image:
      "/assets/stats/costsaving.png",
  },
  {
    number: "500+",
    title: "APIs &\nIntegrations",
    description:
      "Seamlessly connecting disparate enterprise ecosystems to create unified, data-driven platforms",
    image:
      "/assets/stats/API.png",
  },
  {
    number: "15+",
    title: "Industries",
    description:
      "Solving complex challenges across retail, fintech, healthtech, and more.",
    image:
      "/assets/stats/Industries.png",
  },
  {
    number: "4.8",
    title: "Client\nSatisfaction",
    description:
      "Consistently meeting and exceeding enterprise expectations through quality-first engineering",
    image:
      "/assets/stats/Ratings.png",
  },
];

export const portfolioItems = [
  {
    client: "Americana Group",
    description:
      "Engineered a predictive logistics intelligence core for the QSR giant.",
    stats: [
      { value: "100%", label: "increase in dispatch\nautomation" },
      { value: "4X", label: "improvement in\noperational standards" },
    ],
    color: "#1a69fd",
  },
  {
    client: "Flynas",
    description:
      "Re-engineered the digital passenger journey with an AI-native mobile ecosystem to recover market edge.",
    features: [
      "AI-driven booking & smart itinerary management",
      "Seamless UX restoring digital competitiveness",
    ],
    color: "#00b4d8",
  },
  {
    client: "Sonny's Enterprises",
    description:
      "Modernized legacy data infrastructure to drive real-time analytics for the world's leading car wash manufacturer.",
    stats: [
      { value: "90%", label: "Faster report load time" },
      { value: "1,000+", label: "locations with unified data visibility." },
    ],
    color: "#e63946",
  },
  {
    client: "KFC",
    description:
      "Engineered a unified digital commerce ecosystem across 7 global markets to reclaim brand sovereignty from aggregators.",
    stats: [
      { value: "50%", label: "of total orders now routed through the native app" },
      { value: "22%", label: "increase in digital conversion rates" },
    ],
    color: "#e4002b",
  },
  {
    client: "Adidas",
    description:
      "Designed an immersive mobile commerce experience to drive direct-to-consumer growth and user acquisition.",
    stats: [
      { value: "2M+", label: "downloads achieved post-launch" },
      { value: "500k", label: "new users acquired in key strategic regions" },
    ],
    color: "#000000",
  },
  {
    client: "MyExec",
    description:
      "Architected a Multi-Agent GenAI system that functions as an autonomous, high-level business consultant.",
    features: [
      "Agentic RAG framework for complex reasoning",
      "Instant strategic decision-making for SMBs",
    ],
    color: "#6c63ff",
  },
];

export const testimonials = [
  {
    quote:
      "Atmik Bharat's team delivered a seamless mobile app for GST services. Their precision, reliability, and technical expertise made the process smooth and highly efficient.",
    name: "Nagendra",
    role: "Assistant Commissioner, GST",
  },
  {
    quote:
      "Working with Atmik Bharat has been a game-changer. Their innovative IT solutions and quick turnaround have helped us digitize key citizen services.",
    name: "Ravi Shankar",
    role: "IT Head, C.G. Government",
  },
  {
    quote:
      "Working with Atmik Bharat has been a game-changer. Their innovative IT solutions and quick turnaround have helped us digitize key citizen services.",
    name: "Pushpendra Kumar Meena",
    role: "Commercial Tax Department",
  },
];

export const trustedBrands = [
  "IKEA",
  "Google",
  "BCG",
  "KFC",
  "TGI Fridays",
  "Krispy Kreme",
  "Domino's",
  "American Express",
  "Americana",
  "Honda",
  "Body Shop",
  "Sixth Street",
];

export const expertise = [
  {
    title: "Artificial Intelligence",
    description:
      "AI only creates value when it fits into how an organization actually works. We help enterprises apply intelligence in ways that improve decisions, reduce manual effort, and support operations at scale.",
  },
  {
    title: "Generative AI",
    description:
      "Gen AI is most useful when it becomes part of everyday work. We integrate it into internal knowledge systems, customer interactions, and operational tools, with the controls and governance enterprises expect.",
  },
  {
    title: "Agentic AI",
    description:
      "We work with organizations exploring autonomous systems, helping them introduce AI agents that can take action across processes while remaining transparent, supervised, and accountable.",
  },
  {
    title: "Machine Learning",
    description:
      "ML in enterprise environments is less about experimentation and more about reliability. We develop models that adapt over time and continue to perform as data, demand, and conditions change.",
  },
  {
    title: "Computer Vision",
    description:
      "In environments where speed and accuracy matter, vision-based systems can remove friction. We apply computer vision to automate inspection, monitoring, and visual analysis across real operational settings.",
  },
  {
    title: "Cloud",
    description:
      "Cloud modernization is not a lift-and-shift exercise. We help enterprises rethink how applications and infrastructure are structured so systems remain secure, resilient, and ready to scale over time.",
  },
];

export const awards = [
  "Leader in AI-First Product Engineering - ET 2026",
  "Clutch Fastest-Growing Company 2025",
  "Leader In AI Product Engineering & Digital Transformation",
  "Top Android & Chatbot Development Company",
  "Deloitte 2023-2024 - Fastest Growing Technology Company",
  "Fastest Growing AI Development Companies 2024",
  "CIO Association 2024 - Preferred Partner",
  "Times Business Awards 2023 - Tech Company Of The Year",
  "Best Place to Work 2022",
  "App Development Company of the Year 2020",
];

export const complianceCategories = [
  {
    number: "1",
    title: "Data Privacy & Protection",
    items: ["GDPR", "CCPA", "HIPAA"],
  },
  {
    number: "2",
    title: "Security & Risk Management",
    items: ["ISO/IEC 27001", "PCI DSS", "NIST", "FedRAMP"],
  },
  {
    number: "3",
    title: "AI & Technology-Specific Regulations",
    items: ["EU AI Act", "AI Ethics Frameworks", "Blockchain", "IoT Security"],
  },
  {
    number: "4",
    title: "Industry-Specific Standards",
    items: ["SOX", "FTC Safeguards Rule", "ISO 9001", "ISO 22301"],
  },
  {
    number: "5",
    title: "Global & Regulatory Frameworks",
    items: ["ISO 22301", "ISO 27001", "GDPR", "ISO 14001"],
  },
  {
    number: "6",
    title: "Compliance for Cloud & SaaS",
    items: ["CSA Cloud Controls Matrix", "SOC 2", "FedRAMP for Cloud"],
  },
];

export const partners = [
  "Amazon Web Services",
  "Ingram Micro",
  "Accenture",
  "Google Cloud Platform",
  "Azure",
  "ServiceNow",
  "Adobe",
  "Magento",
  "Databricks",
  "Snowflake",
  "HubSpot",
  "Moengage",
  "Boomi",
  "Docker",
  "AWS Sagemaker",
  "AWS Bedrock",
  "MuleSoft",
  "OneStream",
  "Oracle",
  "Salesforce",
  "Red Hat",
  "Sabre",
  "Stripe",
  "Cloudinary",
];

export const industries = [
  { name: "Healthcare", description: "We develop robust healthcare solutions that improve patient care with AI Diagnostics & Imaging and Predictive Patient Analytics." },
  { name: "Finance", description: "Our FinTech services help optimize transactions, increase security with AI Fraud Detection Systems, and innovate with AI-Powered Robo-Advisory." },
  { name: "Banking", description: "We engineer secure digital banking ecosystems that modernize core infrastructure with AI-Driven Credit Risk Modeling." },
  { name: "Restaurant", description: "We create dynamic restaurant apps and software that boost operational efficiency with AI-driven route optimization." },
  { name: "eCommerce", description: "Our custom eCommerce solutions optimize online stores with Generative Product Descriptions and AI-Personalized Shopping Experiences." },
  { name: "EV", description: "We provide custom applications for the EV market, focusing on charging station locators and Predictive Battery Health Analytics." },
  { name: "SaaS", description: "We craft secure and scalable cloud-based SaaS applications utilizing AI-Driven Customer Support Automation." },
  { name: "Travel", description: "Our travel product development services enhance user experiences with AI-driven itinerary planning and Predictive Travel Recommendations." },
];


export const footerLinks = {
  company: [
    "About Atmik Bharat", 
    "Our Engineering Approach", 
    "Leadership Team", 
    "Careers", 
    "Contact Us",
    "Privacy Policy"
  ],
  services: [
    "Web & Mobile Architecture", 
    "Cloud & Gateway Integrations", 
    "AI & Chatbot Ecosystems", 
    "Deep Tech & Automation", 
    "Analytics Insights"
  ],
  portfolio: [
    "GovTech Modernization",
    "Fintech Payment Systems",
    "Healthcare Telemetry",
    "E-Commerce Automation",
    "Enterprise ERP Scaling"
  ],
  technologies: [
    "React & Next.js", 
    "Node.js Ecosystems", 
    "AWS & Google Cloud", 
    "Python & TensorFlow", 
    "Docker & Microservices"
  ],
  industries: [
    "GovTech & Public Utilities", 
    "Fast-Growth Startups", 
    "SMEs & Industrial Units", 
    "Retail & E-Commerce",
    "Fintech & HealthTech"
  ],
  resources: [
    "Engineering Blog", 
    "Architecture Guides", 
    "Case Studies", 
    "Client Testimonials",
    "API Documentation"
  ],
};
export const locations = [
  { Office: "Block-Office", address: "B116, Devan Apartment No 1, Navghar, Vasai, Maharastra (E), 401210" },
  { Office: "Head-Office", address: "Block 86, Nehru Nagar East-490020, Bhilai, Chhattisgarh, India" },
];
