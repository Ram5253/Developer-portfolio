export const personalData = {
  name: "Dodda Sai Ram",
  roleHeadline: "Python Developer • AI / ML & GenAI Specialist",
  location: "Hyderabad, Telangana, India",
  email: "sairamdodda4@gmail.com",
  phone: "+91 7730815322",
  github: "https://github.com/Ram5253",
  linkedin: "https://www.linkedin.com/in/sairamdodda4444",
  resumeDownloadUrl: "mailto:sairamdodda4@gmail.com?subject=Request%20Resume%20-%20Dodda%20Sai%20Ram", // [ADD LINK] to resume.pdf if local file is added
  pitch: "AI/ML and backend engineer with 1 year of production experience building high-throughput Python backends, RAG pipelines with ChromaDB, and multi-agent AI ecosystems. Currently powering a live production HRMS serving 1000+ active users.",
  stats: [
    { number: "1000+", label: "Active Users on Live HRMS" },
    { number: "20+", label: "Dynamic CMS Pages Powered" },
    { number: "3-Agent", label: "CrewAI Multi-Agent System" },
    { number: "8.5", label: "B.Tech CGPA (RGUKT IIIT)" }
  ]
};

export const aboutData = {
  summary: [
    "I am a Python Developer and AI/ML Specialist with 1 year of production experience engineering scalable backend architectures, high-performance REST APIs, and automated data ingestion pipelines.",
    "Currently at Wysele Technologies, I drive backend engineering for a production HRMS serving 1000+ active users, optimizing complex SQL queries, and designing headless CMS solutions with FastAPI, PostgreSQL JSONB schemas, Redis caching, and automated AWS S3 asset lifecycles.",
    "Driven by a deep passion for Generative AI & Data Engineering, I develop end-to-end RAG workflows using Gemini 1.5 Pro and ChromaDB, and build autonomous multi-agent collaborative systems using CrewAI."
  ],
  highlights: [
    {
      title: "Production Backend",
      desc: "FastAPI, Pydantic validation, SQLAlchemy, WebSockets, Redis caching, and role-based access control (RBAC).",
      icon: "Server"
    },
    {
      title: "GenAI & RAG Systems",
      desc: "Gemini API, LangChain, MultiQueryRetriever, ChromaDB, FAISS, and custom prompt guardrails.",
      icon: "Cpu"
    },
    {
      title: "Multi-Agent AI",
      desc: "Autonomous multi-agent orchestration with CrewAI and real-time external tool integration (SerperDev).",
      icon: "Bot"
    },
    {
      title: "Data & SQL Engineering",
      desc: "PostgreSQL JSONB schemas, stored procedures, data cleansing pipelines, batch processing, and validation.",
      icon: "Database"
    }
  ]
};

export const skillsData = [
  {
    category: "Languages",
    icon: "Code",
    skills: [
      { name: "Python", highlight: true },
      { name: "SQL (Complex Queries, Joins, Procedures)", highlight: true },
      { name: "JavaScript (Fundamentals)", highlight: false }
    ]
  },
  {
    category: "AI / LLM & GenAI",
    icon: "Sparkles",
    skills: [
      { name: "Google Gemini API", highlight: true },
      { name: "LangChain", highlight: true },
      { name: "CrewAI (Multi-Agent)", highlight: true },
      { name: "RAG Pipelines", highlight: false },
      { name: "Prompt Engineering", highlight: false },
      { name: "OpenAI-style APIs", highlight: false },
      { name: "Context Guardrails", highlight: false }
    ]
  },
  {
    category: "Vector DBs & Embeddings",
    icon: "Binary",
    skills: [
      { name: "ChromaDB", highlight: true },
      { name: "FAISS", highlight: true },
      { name: "Google Generative AI Embeddings", highlight: false },
      { name: "MultiQueryRetriever", highlight: false },
      { name: "Document Chunking", highlight: false }
    ]
  },
  {
    category: "Backend & APIs",
    icon: "Server",
    skills: [
      { name: "FastAPI", highlight: true },
      { name: "Pydantic Validation", highlight: false },
      { name: "SQLAlchemy ORM", highlight: false },
      { name: "REST APIs Architecture", highlight: false },
      { name: "WebSockets (Real-Time)", highlight: false },
      { name: "Firebase Cloud Messaging (FCM)", highlight: false },
      { name: "Node.js", highlight: false }
    ]
  },
  {
    category: "Databases & Data Engineering",
    icon: "Database",
    skills: [
      { name: "PostgreSQL (JSONB Schema)", highlight: true },
      { name: "MySQL", highlight: false },
      { name: "SQL Server", highlight: false },
      { name: "Batch Processing", highlight: false },
      { name: "Data Cleansing & Transformation", highlight: false },
      { name: "Validation & Reconciliation", highlight: false }
    ]
  },
  {
    category: "Cloud, Security & Infra",
    icon: "ShieldCheck",
    skills: [
      { name: "AWS S3 (Presigned URLs)", highlight: true },
      { name: "Redis (Caching & Rate Limiting)", highlight: true },
      { name: "JWT & HttpOnly Cookies", highlight: false },
      { name: "RBAC (Role-Based Access)", highlight: false },
      { name: "Multi-Tenancy Architecture", highlight: false },
      { name: "Asset Lifecycle Management", highlight: false }
    ]
  },
  {
    category: "ML, Analytics & Tools",
    icon: "BarChart3",
    skills: [
      { name: "Scikit-learn", highlight: false },
      { name: "Pandas & NumPy", highlight: false },
      { name: "TensorFlow (Basics)", highlight: false },
      { name: "Matplotlib & Seaborn", highlight: false },
      { name: "Streamlit", highlight: false },
      { name: "Git & GitHub", highlight: false },
      { name: "Jupyter Notebook", highlight: false }
    ]
  }
];

export const projectsData = [
  {
    id: "hrms-portal",
    title: "HRMS — Real-Time Live Production Portal",
    category: "company",
    company: "Wysele Technologies",
    badge: "1000+ Active Users",
    featured: true,
    description: "High-scale enterprise human resource platform handling employee records, dynamic attendance logging, and automated leave management for an active user base.",
    bullets: [
      "Engineered backend Python modules for data processing, validation automation, and business calculations.",
      "Wrote and optimized complex SQL queries involving multi-table joins, stored procedures, and aggregated metrics.",
      "Tested and validated backend features end-to-end before deployment; resolved production issues to ensure platform reliability."
    ],
    stack: ["Python", "PostgreSQL", "SQL Stored Procedures", "REST APIs", "Data Validation"],
    links: {
      details: "#experience"
    }
  },
  {
    id: "wysele-cms",
    title: "Wysele.com CMS — Enterprise Headless Platform",
    category: "company",
    company: "Wysele Technologies",
    badge: "20+ Service Pages",
    featured: true,
    description: "High-throughput headless Content Management backend engineered with FastAPI and dynamic PostgreSQL JSONB schemas, powering real-time section updates across 20+ service and landing pages.",
    bullets: [
      "Integrated AWS S3 file handling with secure presigned URLs and automated lifecycle cleanup for orphaned media assets on section removal.",
      "Engineered enterprise security (RBAC, JWT, HttpOnly cookies), real-time notifications via WebSockets and Firebase Cloud Messaging (FCM).",
      "Configured Redis caching with rate-limiting to ensure high-throughput API scalability."
    ],
    stack: ["FastAPI", "PostgreSQL (JSONB)", "AWS S3", "Redis", "WebSockets", "JWT / RBAC"],
    links: {
      details: "#experience"
    }
  },
  {
    id: "rag-chatbot",
    title: "RAG-Based Q&A Chatbot — Gemini AI & ChromaDB",
    category: "ai",
    company: "Open Source Project",
    badge: "Gemini 1.5 Pro",
    featured: false,
    description: "PDF-grounded retrieval-augmented generation chatbot capable of ingesting arbitrary documents, chunking text, generating embeddings, and delivering hallucination-free contextual answers.",
    bullets: [
      "Built an ingestion pipeline that loads PDF files, cleans and chunks text, generates embeddings, and indexes them in ChromaDB and FAISS.",
      "Integrated Google Gemini 1.5 Pro with MultiQueryRetriever for high-precision semantic recall across multi-page technical documents.",
      "Implemented custom prompt guardrails ensuring answers remain strictly context-grounded with source citations."
    ],
    stack: ["Python", "LangChain", "ChromaDB", "FAISS", "Google Gemini API", "Streamlit"],
    links: {
      github: "https://github.com/Ram5253/RAG_CHATBOT",
      demo: "https://github.com/Ram5253/RAG_CHATBOT#readme"
    }
  },
  {
    id: "ai-travel-advisor",
    title: "AI Travel Advisor — Multi-Agent System (CrewAI)",
    category: "ai",
    company: "Autonomous AI System",
    badge: "3 Coordinated Agents",
    featured: false,
    description: "Autonomous multi-agent orchestration framework utilizing CrewAI and Google Gemini to construct real-time, personalized, budget-constrained travel itineraries.",
    bullets: [
      "Designed a 3-agent CrewAI system (Travel Researcher, Budget Planner, Itinerary Planner) with sequential task handoffs.",
      "Integrated SerperDev API for live search retrieval of attractions, transportation options, lodging costs, and dining.",
      "Implemented constraint validation prompts enforcing budget ceilings and day-by-day scheduling."
    ],
    stack: ["Python", "CrewAI", "Google Gemini API", "SerperDev API", "Multi-Agent System"],
    links: {
      github: "https://github.com/Ram5253" // [ADD LINK]
    }
  },
  {
    id: "house-price-prediction",
    title: "House Price Prediction — End-to-End ML Pipeline",
    category: "ml",
    company: "Machine Learning Project",
    badge: "R² & RMSE Evaluation",
    featured: false,
    description: "Comprehensive regression machine learning project encompassing end-to-end data preparation, exploratory data analysis (EDA), feature engineering, and model benchmarking.",
    bullets: [
      "Constructed an automated data cleansing and feature engineering pipeline handling outliers, skewness, and categorical encodings.",
      "Trained and compared Linear Regression, Decision Tree, and Random Forest ensemble models.",
      "Evaluated model performance using rigorous cross-validation with R² score and Root Mean Squared Error (RMSE)."
    ],
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    links: {
      github: "https://github.com/Ram5253" // [ADD LINK]
    }
  }
];

export const experienceData = [
  {
    role: "Associate Technical Consultant",
    company: "Wysele Technologies",
    period: "Sep 2025 – Present",
    location: "Hyderabad, Telangana",
    projects: [
      {
        title: "HRMS — Real-Time Live Production Portal",
        badge: "Live Production Platform",
        bullets: [
          "Develop Python backend modules for data processing, validation, and automation on a live HRMS portal serving 1000+ active users across employee records, attendance, and leave management.",
          "Write and optimize SQL queries (joins, stored procedures, aggregations); read and interpret existing stored procedure logic to implement and extend business rules.",
          "Perform data validation checks, end-to-end testing, and reconciliation of backend outputs before deployment; debug and resolve production issues to maintain platform reliability."
        ]
      },
      {
        title: "Wysele.com CMS — Enterprise Content Management Platform",
        badge: "Headless CMS Platform",
        bullets: [
          "Designed a dynamic headless CMS backend using FastAPI and PostgreSQL (JSONB schema) supporting real-time section updates and dynamic layouts for 20+ service and landing pages.",
          "Integrated AWS S3 with presigned URL generation and automated lifecycle cleanup for orphaned media assets on section removal.",
          "Built enterprise-grade security (RBAC, JWT, HttpOnly cookies), real-time team communications via WebSockets and Firebase Cloud Messaging (FCM), and Redis caching with rate-limiting for high-throughput scalability."
        ]
      }
    ]
  }
];

export const educationData = [
  {
    degree: "B.Tech, Mechanical Engineering",
    institution: "RGUKT, IIIT Ongole",
    meta: "Score: CGPA 8.5 / 10",
    period: "2019 – 2023"
  },
  {
    degree: "Data Science & Generative AI Program",
    institution: "Naresh IT",
    meta: "Specialized GenAI, RAG, Multi-Agent & ML Track",
    period: "Jan 2025 – Jun 2025"
  },
  {
    degree: "Pre-University Course (MPC)",
    institution: "RGUKT, IIIT Ongole",
    meta: "Score: 80%",
    period: "Foundational Engineering Studies"
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "SMNZPP High School",
    meta: "Score: CGPA 9.7 / 10",
    period: "Schooling"
  }
];

export const certificationsData = [
  {
    title: "Data Science Certification",
    issuer: "Naresh I Technologies",
    type: "AI & Data Science"
  },
  {
    title: "Python Certification",
    issuer: "Cognifyz Technologies",
    type: "Core Programming"
  }
];
