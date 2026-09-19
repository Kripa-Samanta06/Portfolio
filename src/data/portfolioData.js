export const portfolioData = {
  personal: {
    name: "Kripa Samanta",
    title: "Computer Science Student — Aspiring Software Developer",
    headline: "Transforming ideas into resilient software with Python, Modern Web & Cloud technologies.",
    location: "Kolkata, West Bengal, India",
    phone: "+91 8509102736",
    email: "kripasamantaofficial@gmail.com",
    linkedin: "https://linkedin.com/in/kripa-samantaofficial",
    github: "https://github.com/Kripa-Samanta06",
    resumeDownloadUrl: "#resume",
    status: "Available for Internships & Junior Roles",
    bio: "Third-year Computer Science student at Brainware University specializing in Artificial Intelligence & Machine Learning (AIML). Passionate about crafting high-performance backend systems with Python and Django, modern responsive web applications with React & TypeScript, and exploring cloud architectures. Strong fundamentals in Data Structures, Algorithms, and Object-Oriented Design.",
  },

  stats: [
    { label: "Academic GPA", value: "9.05", suffix: "/10", detail: "Brainware University" },
    { label: "Year of Study", value: "3rd", suffix: " Year", detail: "Graduating 2028" },
    { label: "Core Projects", value: "2+", suffix: " Production", detail: "Collaborative Builds" },
    { label: "Tech Stack", value: "15+", suffix: " Skills", detail: "Languages & Frameworks" },
  ],

  focusPillars: [
    {
      title: "Backend & Systems",
      icon: "Server",
      description: "Architecting reliable, scalable backends using Python, Django, FastAPI, and relational/NoSQL databases with role-based security.",
      gradient: "from-cyan-500/20 to-blue-600/20",
      border: "border-cyan-500/30",
    },
    {
      title: "Modern Frontend",
      icon: "Layout",
      description: "Building ultra-responsive, accessible user interfaces using React, TypeScript, Tailwind CSS, and interactive state management.",
      gradient: "from-purple-500/20 to-pink-600/20",
      border: "border-purple-500/30",
    },
    {
      title: "AI/ML & Cloud Foundations",
      icon: "Cpu",
      description: "Deepening knowledge in Artificial Intelligence & Machine Learning coursework, Linux environments, containerization, and cloud practices.",
      gradient: "from-blue-500/20 to-indigo-600/20",
      border: "border-blue-500/30",
    },
    {
      title: "Algorithms & OOP",
      icon: "Code2",
      description: "Grounding development in rock-solid Data Structures & Algorithms, optimized time complexities, and clean object-oriented patterns.",
      gradient: "from-emerald-500/20 to-teal-600/20",
      border: "border-emerald-500/30",
    }
  ],

  skills: {
    languages: [
      { name: "Python", level: 90, icon: "Terminal", color: "#38bdf8", tag: "Primary" },
      { name: "Java", level: 82, icon: "Coffee", color: "#f97316", tag: "Core OOP" },
      { name: "C", level: 78, icon: "Cpu", color: "#64748b", tag: "Foundations" },
      { name: "SQL", level: 85, icon: "Database", color: "#00f0ff", tag: "Queries & DDL" },
      { name: "TypeScript", level: 80, icon: "FileCode", color: "#3b82f6", tag: "Typed Web" },
      { name: "JavaScript", level: 86, icon: "Code", color: "#facc15", tag: "ES6+" },
    ],
    frameworks: [
      { name: "Django", level: 88, category: "Backend", desc: "Full-featured web framework, ORM & Auth" },
      { name: "FastAPI", level: 82, category: "Backend", desc: "High-performance async APIs" },
      { name: "Flask", level: 80, category: "Backend", desc: "Lightweight microservices" },
      { name: "React", level: 85, category: "Frontend", desc: "Component architecture & hooks" },
    ],
    databases: [
      { name: "MySQL", type: "Relational", desc: "Schema design, joins, normalization" },
      { name: "MongoDB", type: "NoSQL", desc: "Document storage, collections, aggregation" },
    ],
    tools: [
      { name: "Git & GitHub", category: "VCS", desc: "Branching, PRs, collaborative workflows" },
      { name: "Linux", category: "OS", desc: "CLI navigation, bash scripting, permissions" },
      { name: "VS Code", category: "Editor", desc: "Extensions, debugging, modern toolchains" },
      { name: "Oracle VirtualBox", category: "Virtualization", desc: "Virtual machines, isolated testing environments" },
    ],
    concepts: [
      { name: "Data Structures & Algorithms", desc: "Arrays, Trees, Graphs, Sorting, Dynamic Programming" },
      { name: "Object-Oriented Programming", desc: "Inheritance, Polymorphism, Encapsulation, Abstraction" },
      { name: "Database Management Systems", desc: "ACID properties, transactions, indexing" },
      { name: "Operating Systems", desc: "Process scheduling, memory management, threads" },
    ]
  },

  projects: [
    {
      id: "evidyahub",
      title: "eVidyaHub",
      category: "Full Stack Web Platform",
      role: "Core Developer (Team Collaboration)",
      period: "Featured Project",
      status: "Completed",
      description: "A collaborative Question & Answer knowledge-sharing platform built using Python and Django. Features a conflict-free role-based dashboard, interactive question tagging, community responses, and moderation controls.",
      highlights: [
        "Architected MVC backend with Python & Django providing secure endpoints",
        "Implemented conflict-free, role-based dashboard for students, contributors, and moderators",
        "Designed clean user flows for submitting questions, answers, and tracking reputation",
        "Collaborated seamlessly with a developer team using Git & GitHub version control",
      ],
      techStack: ["Python", "Django", "JavaScript", "HTML5/CSS3", "SQLite/MySQL", "Git"],
      githubUrl: "https://github.com/apexcode01/eVidyaHub",
      liveDemoUrl: "https://github.com/apexcode01/eVidyaHub",
      featured: true,
      stats: {
        stars: "Open Source",
        roles: "Role-Based Access",
        collaboration: "Team Project"
      }
    },
    {
      id: "fincy",
      title: "Fincy",
      category: "Finance & Web Application",
      role: "Frontend & Logic Developer (Team Collaboration)",
      period: "Featured Project",
      status: "Completed",
      description: "An intuitive, responsive expense tracker web application built using TypeScript. Designed to give users transparent financial insights with categorized expenditure records and interactive budgeting metrics.",
      highlights: [
        "Developed with TypeScript for type-safe state operations and error prevention",
        "Engineered smooth, accessible UI with custom responsive CSS & JavaScript interactions",
        "Real-time expense categorization, transaction history, and balance computations",
        "Collaborative git workflow maintaining clean code reviews and modular structure",
      ],
      techStack: ["TypeScript", "JavaScript", "CSS3", "HTML5", "Modern State Mgmt", "GitHub"],
      githubUrl: "https://github.com/apexcode01/Fincy",
      liveDemoUrl: "https://github.com/apexcode01/Fincy",
      featured: true,
      stats: {
        type: "Type-Safe TypeScript",
        ui: "Dynamic UI",
        collaboration: "Team Project"
      }
    }
  ],

  education: [
    {
      degree: "B.Tech in Computer Science Engineering (AIML)",
      institution: "Brainware University",
      location: "Barasat, West Bengal, India",
      timeline: "Expected June 2028",
      gpa: "9.05 / 10",
      description: "Specializing in Artificial Intelligence & Machine Learning with a rigorous focus on computer science engineering fundamentals, software architecture, and algorithm design.",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Databases & DBMS",
        "Operating Systems",
        "Web Development",
        "Discrete Mathematics"
      ],
      badge: "AIML Specialization"
    }
  ],

  certifications: [
    {
      title: "Python for Data Science",
      issuer: "Udemy",
      date: "Credential Verified",
      icon: "Award",
      topics: [
        "NumPy & Pandas Data Manipulation",
        "Data Analysis & Statistical Foundations",
        "Data Visualization Techniques",
        "Practical Problem Solving with Python"
      ],
      credentialUrl: "https://udemy.com"
    }
  ]
};
