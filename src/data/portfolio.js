export const personalInfo = {
  name: "Aswin K",
  title: "Web Developer & Product Builder",
  tagline: "I take your idea from concept to a live, working product.",
  subTagline: "hello world",
  bio: "I'm Aswin K, a developer with 3 years of experience building web products that work. I handle everything — the interface your customers see and the systems that power it — so you get one person who owns the whole product.",
  approach: "My approach to engineering is performance, precision, and scalability.",
  email: "aswinjikz05@gmail.com",
  phone: "+91 9567365762",
  linkedin: "https://linkedin.com/in/aswin-k",
  github: "https://github.com/aswin-k",
  location: "Kerala, India",
};

export const experiences = [
  {
    id: 1,
    company: "Webandcrafts",
    role: "Software Engineer",
    duration: "Jan 2024 – Present",
    type: "Full-time",
    highlights: [
      "Python Development Frameworks – Proficient in Python, with expertise in Django and FastAPI for building scalable, high-performance web applications.",
      "Contributed to the development of an all-in-one ERP application integrating sales, client management, accounts, leads, projects, and HR management functionalities.",
      "Implemented asynchronous task processing using RabbitMQ, handling 50K+ background jobs daily for email notifications, report generation, and data synchronization across microservices.",
      "Technical Research and Problem-Solving – Skilled in conducting in-depth research to evaluate technologies and implement innovative solutions.",
    ],
  },
  {
    id: 2,
    company: "Python Bootcamp",
    role: "Software Engineer Intern",
    duration: "Jan 2023 – Dec 2023",
    type: "Internship",
    highlights: [
      "Developed and maintained RESTful APIs using Python and FastAPI, improving application response times and enhancing overall system performance.",
      "Built scalable web applications with Django framework, implementing MVC architecture and database optimization techniques for efficient data management.",
      "Designed and integrated NoSQL database solutions using MongoDB, optimizing data retrieval processes and supporting flexible schema requirements.",
      "Deployed applications on AWS cloud platform utilizing EC2 services, ensuring high availability and scalable infrastructure management.",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "MyWiseMart",
    subtitle: "D2C E-Commerce Platform",
    description:
      "Designed and developed a direct-to-consumer e-commerce store for a nutritional supplements brand, covering the full build from storefront to checkout. Implemented the product catalog, shopping cart, and order flow with responsive layouts across devices, plus supporting pages such as terms and policies.",
    metrics: [
      { value: "Full-Stack", label: "Build Type" },
      { value: "Responsive", label: "All Devices" },
      { value: "D2C", label: "Commerce Model" },
    ],
    tech: ["React.js", "Django", "PostgreSQL", "Stripe", "REST APIs", "Responsive Design"],
    images: {
      web: "/projects/wisemart-web.png",
      mobile: "/projects/wisemart-mobile.png",
    },
    live: "https://mywisemart.com/",
    github: null,
    color: "#c026d3",
  },
  {
    id: 2,
    title: "Horeca Hub",
    subtitle: "B2B Operating Platform",
    description:
      "Horeca Hub is a B2B platform built for the UAE's restaurant, hotel, and café sector, operated by Abreco Trading. It brings a fragmented supply chain, maintenance, and compliance into a single digital platform so operators stop chasing multiple vendors and managing scattered invoices. The core idea is consolidation — one app, one invoice, total control — across three areas: procurement of FMCG and supplies from a large product catalog, professional services, and mandatory training/compliance. It's positioned for the demanding standards of the Dubai hospitality market.",
    metrics: [
      { value: "B2B", label: "Sector" },
      { value: "Full-Stack", label: "Build Type" },
      { value: "Consolidated", label: "Supply Chain" },
    ],
    tech: ["React.js", "Django", "PostgreSQL", "REST APIs"],
    images: {
      web: "/projects/horecahub-web.png",
      mobile: "/projects/horecahub-mobile.png",
    },
    live: "https://horecahub.ae/",
    github: null,
    color: "#0ea5e9",
  },
  {
    id: 3,
    title: "BHFM",
    subtitle: "Property Maintenance Platform",
    description:
      "A maintenance management platform for KBN Group Holding's property portfolio, used to log, route, and track repair and service requests across buildings. Property managers and supervisors raise tickets, assign them to technicians by trade, and follow each request through its full lifecycle — from unassigned to closed by the client. The system spans dozens of work categories (plumbing, electrical, HVAC, carpentry, etc.) and supports deep filtering by property, unit, supervisor, and technician.",
    metrics: [
      { value: "Operations", label: "Sector" },
      { value: "Lifecycle", label: "Tracking" },
      { value: "Dozens", label: "Work Trades" },
    ],
    tech: ["React.js", "Django", "PostgreSQL", "Role-Based Access"],
    images: {
      web: "/projects/kbn-web.png",
      mobile: "/projects/kbn-mobile.png",
    },
    live: null,
    github: null,
    color: "#f59e0b",
  },
  {
    id: 4,
    title: "Madhavan Consulting",
    subtitle: "Personal Brand & Lead-Gen Site",
    description:
      "A personal brand and client-acquisition website for an independent CPG/FMCG brand strategist working with consumer-goods founders across the Middle East and India. The site positions his consulting offer, builds credibility, and converts visitors into newsletter subscribers and discovery calls.",
    metrics: [
      { value: "Lead-Gen", label: "Objective" },
      { value: "B2B Consulting", label: "Niche" },
      { value: "CPG/FMCG", label: "Industry" },
    ],
    tech: ["React.js", "Vite", "CSS3", "Responsive Design"],
    images: {
      web: "/projects/portfolio-web.png",
      mobile: "/projects/portfolio-mobile.png",
    },
    live: "https://madhavanunni.com",
    github: null,
    color: "#8b5cf6",
  },
  {
    id: 5,
    title: "EBSA",
    subtitle: "Talent Marketplace",
    description:
      "A two-sided marketplace connecting creative talent (models, photographers, influencers, makeup artists, anchors) with brands, agencies, and studios in the global market. The platform handles profiles, portfolios, booking requests, and communication, making talent discovery seamless.",
    metrics: [
      { value: "Two-Sided", label: "Marketplace" },
      { value: "Creative", label: "Talent Network" },
      { value: "Global", label: "Reach" },
    ],
    tech: ["React.js", "Django", "PostgreSQL", "REST APIs"],
    images: {
      web: "/projects/EBSA-web.png",
      mobile: "/projects/EBSA-mobile.png",
    },
    live: null,
    github: null,
    color: "#10b981",
  },
];

export const skills = {
  Backend: [
    "Python", "Django", "FastAPI", "RESTful APIs", "Microservices",
    "Asyncio", "Celery", "RabbitMQ", "WebSockets",
  ],
  Frontend: [
    "React.js", "JavaScript ES6+", "HTML5", "CSS3", "Responsive Design",
  ],
  Databases: [
    "PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch",
    "Query Optimization", "Indexing", "Database Design",
  ],
  Cloud: [
    "AWS EC2", "AWS S3", "AWS RDS", "AWS Lambda", "Docker", "Linux",
    "CI/CD Pipelines", "GitHub Actions",
  ],
  "AI & Automation": [
    "LangChain", "OpenAI API", "Crew AI", "AI Agents",
    "Vector Databases", "Prompt Engineering", "n8n", "Make",
    "Google STT/TTS", "Gemini API",
  ],
  Security: [
    "JWT Authentication", "OAuth", "RBAC", "Data Security",
    "API Security",
  ],
};

export const workStack = [
  { name: "Python",      iconKey: "SiPython",           color: "#3776AB" },
  { name: "Django",      iconKey: "SiDjango",           color: "#092E20" },
  { name: "FastAPI",     iconKey: "SiFastapi",          color: "#009688" },
  { name: "React.js",    iconKey: "SiReact",            color: "#61DAFB" },
  { name: "PostgreSQL",  iconKey: "SiPostgresql",       color: "#4169E1" },
  { name: "MongoDB",     iconKey: "SiMongodb",          color: "#47A248" },
  { name: "Redis",       iconKey: "SiRedis",            color: "#FF4438" },
  { name: "Docker",      iconKey: "SiDocker",           color: "#2496ED" },
  { name: "AWS",         iconKey: "FaAws",              color: "#FF9900" },
  { name: "RabbitMQ",    iconKey: "SiRabbitmq",         color: "#FF6600" },
  { name: "Git",         iconKey: "SiGit",              color: "#F05032" },
  { name: "Linux",       iconKey: "SiLinux",            color: "#FCC624" },
];
