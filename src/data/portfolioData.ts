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
        title: "Medical Consultation Platform",
        description:
          "A secure full-stack platform enabling structured doctor–patient consultations with role-based access, authentication, and medical data handling.",
        technologies: ["Next.js", "TypeScript", "Prisma", "SQLite"],
      },
      {
        title: "LocalAI – Modular AI Assistant",
        description:
          "An internet-connected AI assistant with offline fallback using local models, RAG memory, and multimodal generation capabilities.",
        technologies: ["Python", "Flask", "Transformers", "RAG", "SQLite"],
      },
      {
        title: "Medical AI for Brain Disease Analysis",
        description:
          "Deep learning system for brain disease segmentation, localization, and 3D mesh visualization using custom encoder-decoder architecture.",
        technologies: ["Python", "PyTorch", "Medical Imaging"],
      },
      {
        title: "AI Website Generator",
        description:
          "AI tool that generates complete websites from natural language prompts with planning, generation, and iterative chat improvements.",
        technologies: ["FastAPI", "React", "TypeScript"],
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
      title: "Leo - Personal AI Assistant",
      description: "Leo is a smart personal AI assistant built with React, TypeScript, and Tailwind CSS, featuring API key integration for advanced conversational and productivity features.",
      image: "https://ik.imagekit.io/e08wbj78c/leo%20ai.png?updatedAt=1753704439802",
      technologies: ["React", "TypeScript", "Tailwind CSS", "API Integration"],
      githubUrl: "https://github.com/SaiKarthik547/leo-ai-assistant",
      status: "completed",
    },
    {
      title: "LocalAI – Internet Connected AI Assistant",
      description:
        "A modular AI assistant capable of real-time internet search, offline local model fallback, RAG memory, and multimodal generation.",
      technologies: ["Python", "Flask", "Transformers", "RAG"],
      githubUrl: "https://github.com/SaiKarthik547",
      status: "featured",
    },
    {
      title: "Medical AI – Brain Disease Segmentation & 3D Visualization",
      description:
        "Custom deep learning model for brain disease segmentation with accurate localization and 3D mesh visualization.",
      technologies: ["PyTorch", "Medical Imaging", "3D Visualization"],
      githubUrl: "https://github.com/SaiKarthik547",
      status: "featured",
    },
    {
      title: "Medical Consultation Platform",
      description:
        "Full-stack role-based medical consultation system managing doctor–patient workflows, authentication, and medical records.",
      technologies: ["Next.js", "TypeScript", "Prisma", "SQLite"],
      githubUrl: "https://github.com/SaiKarthik547",
      status: "featured",
    },
    {
      title: "AI Website Generator",
      description:
        "AI tool that generates complete multi-page websites from plain English prompts with planning and chat refinement.",
      technologies: ["FastAPI", "React", "TypeScript"],
      githubUrl: "https://github.com/SaiKarthik547",
      status: "featured",
    },
    {
      title: "Beacon – Student Performance Analytics Platform",
      description:
        "An analytics platform for educational institutions to track student performance, identify risks, and provide actionable insights.",
      technologies: ["FastAPI", "React", "TypeScript", "Supabase"],
      githubUrl: "https://github.com/SaiKarthik547",
      status: "live"
    },
    {
      title: "Task Management System (Role-Based Project Tracker)",
      description:
        "A full-stack task management platform with multi-role access, task lifecycle tracking, and REST APIs.",
      technologies: ["React", "TypeScript", "Express", "MySQL"],
      githubUrl: "https://github.com/SaiKarthik547",
      status: "live"
    },
    {
      title: "EcoForge – AI Agents for Carbon Footprint Analysis",
      description:
        "Multi-agent AI system analyzing lifestyle data to estimate carbon footprint and provide sustainability recommendations.",
      technologies: ["Python", "Streamlit", "LangChain", "SQLite"],
      githubUrl: "https://github.com/SaiKarthik547",
      status: "live"
    },
    {
      title: "AI Agents & Multi-Agent Workflow Systems",
      description:
        "Collection of AI systems built using multiple cooperating agents with task orchestration and output validation.",
      technologies: ["Python", "LLMs", "Agent Frameworks"],
      githubUrl: "https://github.com/SaiKarthik547",
      status: "live"
    },
    {
      title: "Multimodal Sentiment Analysis System",
      description:
        "Machine learning system performing sentiment analysis using both textual and visual inputs with pretrained models.",
      technologies: ["Python", "Multimodal Learning", "PyTorch"],
      githubUrl: "https://github.com/SaiKarthik547",
      status: "completed"
    },
    {
      title: "Blockchain-Based Drug Supply Chain",
      description:
        "Blockchain-backed web application demonstrating transparent and tamper-resistant tracking of drug movement.",
      technologies: ["Blockchain", "Web Technologies", "Solidity"],
      githubUrl: "https://github.com/SaiKarthik547",
      status: "completed"
    },
    {
      title: "Fiery Flappy Bird – Web Game",
      description:
        "Experimental browser game implementing custom game mechanics, scoring logic, and interactive UI.",
      technologies: ["JavaScript", "HTML", "CSS"],
      githubUrl: "https://github.com/SaiKarthik547",
      status: "completed"
    }
  ],
};
