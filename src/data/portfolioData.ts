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
          "Deep learning based medical imaging system for analyzing brain MRI scans and performing disease segmentation.",
        technologies: ["Python", "PyTorch", "NumPy", "Medical Imaging"],
      },
      {
        title: "Medical Consultation System",
        description:
          "A full-stack healthcare platform enabling doctor and patient interactions through structured consultation workflows.",
        technologies: ["Next.js", "TypeScript", "Prisma", "SQLite"],
      },
      {
        title: "EcoForge – AI Agents for Carbon Footprint Analysis",
        description:
          "AI powered multi agent system designed to estimate carbon footprint based on lifestyle activities.",
        technologies: ["Python", "AI Agents", "Streamlit", "LLMs"],
      },
      {
        title: "Local Modular AI",
        description:
          "Modular AI assistant framework designed to run locally with support for LLM based reasoning and modular task execution.",
        technologies: ["Python", "Transformers", "LLMs"],
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
      description: "Deep learning based medical imaging system for analyzing brain MRI scans and performing disease segmentation.",
      technologies: ["Python", "PyTorch", "NumPy", "Medical Imaging"],
      githubUrl: "https://github.com/SaiKarthik547/Capstone",
      status: "featured",
    },
    {
      id: "medical-consultation-system",
      title: "Medical Consultation System",
      description: "A full-stack healthcare platform enabling doctor and patient interactions through structured consultation workflows.",
      technologies: ["Next.js", "TypeScript", "Prisma", "SQLite"],
      githubUrl: "https://github.com/SaiKarthik547/Medical-Consultation-SYstem",
      status: "featured",
    },
    {
      id: "eco-forge",
      title: "EcoForge – AI Agents for Carbon Footprint Analysis",
      description: "AI powered multi agent system designed to estimate carbon footprint based on lifestyle activities.",
      technologies: ["Python", "AI Agents", "Streamlit", "LLMs"],
      githubUrl: "https://github.com/SaiKarthik547/EcoForge---AI-Agents-for-Carbon-Footprint-Analysis",
      status: "featured",
    },
    {
      id: "multimodal-sentiment-analysis",
      title: "Multimodal Sentiment Analysis",
      description: "Machine learning system performing sentiment analysis using multiple modalities including text and visual features.",
      technologies: ["Python", "PyTorch", "Machine Learning"],
      githubUrl: "https://github.com/SaiKarthik547/Multimodal-sentimental-analysis",
      status: "completed",
    },
    {
      id: "beacon-analytics",
      title: "Beacon – Student Performance Analytics Platform",
      description: "Data analytics platform designed to analyze academic datasets and generate insights about student performance trends.",
      technologies: ["Python", "FastAPI", "React", "Data Analytics"],
      githubUrl: "https://github.com/SaiKarthik547/Beacon-Student-Performance-Analytics-Platform",
      status: "live",
    },
    {
      id: "local-modular-ai",
      title: "Local Modular AI",
      description: "Modular AI assistant framework designed to run locally with support for LLM based reasoning and modular task execution.",
      technologies: ["Python", "Transformers", "LLMs"],
      githubUrl: "https://github.com/SaiKarthik547/Local-Modular-AI",
      status: "featured",
    },
    {
      id: "leo-ai-assistant",
      title: "Leo AI Assistant",
      description: "Personal AI assistant designed to explore conversational AI capabilities and task automation.",
      technologies: ["Python", "LLMs"],
      githubUrl: "https://github.com/SaiKarthik547/Leo-AI-Assist",
      status: "completed",
    },
    {
      id: "jarvis-ai",
      title: "JARVIS AI Assistant",
      description: "Experimental conversational AI assistant inspired by JARVIS capable of voice interaction and automation tasks.",
      technologies: ["Python", "LLMs", "Voice AI"],
      githubUrl: "https://github.com/SaiKarthik547/J.A.R.V.I.S-AI-Assistant",
      status: "completed",
    },
    {
      id: "blockchain-drug-supply-chain",
      title: "Blockchain Based Drug Supply Chain",
      description: "Blockchain prototype designed to track pharmaceutical supply chains and ensure tamper resistant drug distribution records.",
      technologies: ["Blockchain", "Solidity", "Web Technologies"],
      githubUrl: "https://github.com/SaiKarthik547/Blockchain-based-Drug-Supply-Chain",
      status: "completed",
    },
    {
      id: "student-expense-tracker",
      title: "Student Expense Tracker",
      description: "Personal finance tracking application designed to help students monitor daily spending habits.",
      technologies: ["JavaScript", "HTML", "CSS"],
      githubUrl: "https://github.com/SaiKarthik547/Student-expense-tracker",
      status: "completed",
    },
    {
      id: "task-manager",
      title: "Task Manager",
      description: "Lightweight task management application for organizing and tracking daily activities.",
      technologies: ["JavaScript", "HTML", "CSS"],
      githubUrl: "https://github.com/SaiKarthik547/task-manager",
      status: "completed",
    },
    {
      id: "fiery-flappy-bird",
      title: "Fiery Flappy Bird",
      description: "Browser based game inspired by Flappy Bird featuring custom obstacle mechanics and score tracking.",
      technologies: ["JavaScript", "HTML", "CSS"],
      githubUrl: "https://github.com/SaiKarthik547/Fiery-Flappy-Bird",
      status: "completed",
    },
  ],
};
