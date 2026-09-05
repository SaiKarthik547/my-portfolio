export const portfolioData = {
  personal: {
    name: "Munta Sai Karthik",
    title: "AI Systems Engineer & Full-Stack Developer",
    description:
      "AI-focused software engineer at VIT Chennai building intelligent systems, medical AI solutions, multi-agent workflows, and production-grade full-stack platforms. Passionate about designing real-world software that combines AI, architecture, and user experience into impactful products.",
    initials: "MSK",
    contact: {
      email: "saikarthik5421@gmail.com",
      phone: "+91 96183 01254",
      linkedin: "linkedin.com/in/sai-karthik-m5321/",
      github: "github.com/SaiKarthik547",
    },
  },

  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "VIT Chennai University",
      year: "2026 (Expected)",
      status: "current",
    },
    {
      degree: "Secondary School (12th)",
      institution: "Tirumala Junior College",
      year: "2022",
      status: "completed",
    },
    {
      degree: "Primary School (10th)",
      institution: "The Sun School",
      year: "2020",
      status: "completed",
    },
  ],

  experience: {
    certification: {
      title: "Oracle Generative AI Certification",
      organization: "Oracle",
      status: "Completed",
      description:
        "Obtained Oracle's Generative AI certification to deepen expertise in LLMs, neural networks, and applied AI system design for real-world applications.",
      technologies: [
        "Generative AI",
        "LLMs",
        "Neural Networks",
        "AI System Design",
      ],
    },
    expertise: [
      {
        title: "AI System Design",
        description: "Architecting multi-agent systems, RAG pipelines, and LLM-driven workflows with high performance and reliability.",
        icon: "brain"
      },
      {
        title: "Full-Stack Architecture",
        description: "Building production-ready platforms using Next.js, FastAPI, and scalable database systems like Supabase and PostgreSQL.",
        icon: "code"
      },
      {
        title: "Medical AI & Visualization",
        description: "Specializing in deep learning for medical imaging, 3D segmentation, and interactive data visualization.",
        icon: "heart"
      },
      {
        title: "System Orchestration",
        description: "Designing complex task orchestration and automated workflow systems using state-of-the-art AI frameworks.",
        icon: "zap"
      }
    ],
    projects: [
      {
        title: "Capstone – Medical AI Brain Analysis System",
        description:
          "High-precision deep learning framework for automated detection and segmentation of brain abnormalities from MRI scans.",
        technologies: ["Python", "PyTorch", "NumPy", "Medical Imaging"],
      },
      {
        title: "Medical Consultation System",
        description:
          "Sophisticated full-stack healthcare platform with secure consultation workflows and role-based access control.",
        technologies: ["Next.js", "TypeScript", "Prisma", "SQLite"],
      },
      {
        title: "EcoForge – AI Agents for Carbon Footprint Analysis",
        description:
          "Advanced AI-driven sustainability platform leveraging multi-agent orchestration to analyze environmental impact.",
        technologies: ["Python", "CrewAI", "LangChain", "LLMs"],
      },
      {
        title: "Local Modular AI",
        description:
          "Privacy-centric, extensible AI framework designed for high-performance execution on local hardware.",
        technologies: ["Python", "Transformers", "Ollama", "LLMs"],
      },
    ],
  },

  skills: {
    frontend: [
      { name: "React / Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 85 },
    ],
    programming: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Java / C++", level: 70 },
    ],
    design: [
      { name: "Figma", level: 80 },
      { name: "Blender", level: 70 },
      { name: "UI/UX Design", level: 85 },
    ],
  },

  competencies: [
    "AI System Design",
    "Full-Stack Architecture",
    "Multi-Agent Workflows",
    "Medical AI & Visualization",
    "Database & API Design",
    "Authentication & Role Systems",
    "RAG & LLM Integration",
    "UI/UX Engineering",
  ],

  services: [
    {
      icon: "🤖",
      title: "AI System Development",
      description:
        "Designing intelligent systems using LLMs, agents, memory, and real-time data to build practical AI applications.",
      features: [
        "LLM Integration",
        "RAG Pipelines",
        "Agent Workflows",
        "AI Automation",
      ],
      color: "sky",
    },
    {
      icon: "🌐",
      title: "Full-Stack Web Applications",
      description:
        "Building scalable, production-ready platforms with authentication, APIs, dashboards, and modern frontend stacks.",
      features: [
        "Next.js / React",
        "REST APIs",
        "Database Design",
        "Role-Based Systems",
      ],
      color: "green",
    },
    {
      icon: "🧠",
      title: "Medical & Analytics Platforms",
      description:
        "Developing AI and analytics systems for healthcare, education, and sustainability domains.",
      features: [
        "Medical Imaging AI",
        "Analytics Dashboards",
        "Data Visualization",
        "Insight Systems",
      ],
      color: "purple",
    },
    {
      icon: "⚙️",
      title: "Developer Tools & Automation",
      description:
        "Creating tools that automate development, content generation, and workflow orchestration using AI.",
      features: [
        "AI Website Generators",
        "Tool Automation",
        "Workflow Orchestration",
        "Developer Productivity",
      ],
      color: "orange",
    },
  ],

  portfolio: [
    {
      id: "capstone",
      title: "Capstone – Medical AI Brain Analysis System",
      description: "High-precision deep learning framework for automated detection and segmentation of brain abnormalities from MRI scans.",
      technologies: ["Python", "PyTorch", "NiBabel", "OpenCV"],
      githubUrl: "https://github.com/SaiKarthik547/NeuroX",
      status: "featured",
    },
    {
      id: "medical-consultation-system",
      title: "Medical Consultation System",
      description: "Sophisticated full-stack healthcare platform with secure consultation workflows and role-based access control.",
      technologies: ["Next.js", "TypeScript", "Prisma", "SQLite"],
      githubUrl: "https://github.com/SaiKarthik547/Medi-Consult-Prototype-Only",
      status: "featured",
    },
    {
      id: "eco-forge",
      title: "EcoForge – AI Agents for Carbon Footprint Analysis",
      description: "Advanced AI-driven sustainability platform leveraging multi-agent orchestration to analyze environmental impact.",
      technologies: ["Python", "CrewAI", "LangChain", "OpenAI"],
      githubUrl: "https://github.com/SaiKarthik547/EcoForge---AI-Agents-for-Carbon-Footprint-Analysis",
      status: "featured",
    },
    {
      id: "multimodal-sentiment-analysis",
      title: "Multimodal Sentiment Analysis",
      description: "Advanced machine learning framework fusing textual and visual signals for high-accuracy sentiment prediction.",
      technologies: ["Python", "PyTorch", "Transformers", "OpenCV"],
      githubUrl: "https://github.com/SaiKarthik547/Multimodal-sentimental-analysis",
      status: "completed",
    },
    {
      id: "beacon-analytics",
      title: "Beacon – Student Performance Analytics Platform",
      description: "Data-driven analytics ecosystem extracting actionable insights from large-scale educational performance datasets.",
      technologies: ["FastAPI", "React.js", "Pandas", "PostgreSQL"],
      githubUrl: "https://github.com/SaiKarthik547/Beacon-Student-Performance-Analytics-Platform",
      status: "live",
    },
    {
      id: "local-modular-ai",
      title: "Local Modular AI",
      description: "Privacy-centric, extensible AI framework designed for high-performance execution on local hardware.",
      technologies: ["Python", "Transformers", "Ollama", "SQLite"],
      githubUrl: "https://github.com/SaiKarthik547/Local-Modular-AI",
      status: "featured",
    },
    {
      id: "leo-ai-assistant",
      title: "Leo AI Assistant",
      description: "Versatile personal AI assistant prototype focused on productivity enhancement and natural language interaction.",
      technologies: ["Python", "OpenAI API", "LangChain", "SQLite"],
      githubUrl: "https://github.com/SaiKarthik547/Leo-AI-Assist",
      status: "completed",
    },
    {
      id: "jarvis-ai",
      title: "JARVIS AI Assistant",
      description: "Experimental voice-activated AI assistant featuring real-time speech interaction and system automation.",
      technologies: ["Python", "pyttsx3", "SpeechRecognition", "OpenAI"],
      githubUrl: "https://github.com/SaiKarthik547/J.A.R.V.I.S-AI-Assistant",
      status: "completed",
    },
    {
      id: "blockchain-drug-supply-chain",
      title: "Blockchain Based Drug Supply Chain",
      description: "Decentralized supply chain platform ensuring transparency and traceability in pharmaceutical distribution.",
      technologies: ["Solidity", "Ethereum", "React.js", "Ethers.js"],
      githubUrl: "https://github.com/SaiKarthik547/Blockchain-based-Drug-Supply-Chain",
      status: "completed",
    },
    {
      id: "student-expense-tracker",
      title: "Student Expense Tracker",
      description: "Comprehensive financial management tool tailored for students to monitor spending and manage budgets.",
      technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
      githubUrl: "https://github.com/SaiKarthik547/Student-expense-tracker",
      status: "completed",
    },
    {
      id: "task-manager",
      title: "Task Manager",
      description: "Professional productivity application for organizing workflows, managing deadlines, and tracking progress.",
      technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
      githubUrl: "https://github.com/SaiKarthik547/task-manager",
      status: "completed",
    },
    {
      id: "fiery-flappy-bird",
      title: "Fiery Flappy Bird",
      description: "High-performance physics-based browser game utilizing HTML5 Canvas for smooth gameplay.",
      technologies: ["JavaScript", "HTML5 Canvas", "CSS3"],
      githubUrl: "https://github.com/SaiKarthik547/Fiery-Flappy-Bird",
      status: "completed",
    },
  ],
};
