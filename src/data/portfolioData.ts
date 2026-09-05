export const portfolioData = {
  personal: {
    name: "Munta Sai Karthik",
    title: "AI Systems Engineer & Full-Stack Developer",
    description:
      "AI-focused software engineer and VIT Chennai graduate building intelligent systems, medical AI solutions, multi-agent workflows, and production-grade full-stack platforms. Passionate about designing real-world software that combines AI, architecture, and user experience into impactful products.",
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
      year: "2022 – 2026 (Completed July 13, 2026)",
      status: "completed",
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
      id: "medical-consultation-system",
      title: "MediConsult — Telemedicine Platform & Core Engine",
      description: "High-reliability telemedicine engine with Compare-And-Swap transactional state guarantees, idempotent payments, and WebRTC consulting.",
      technologies: ["Next.js 15", "TypeScript", "PostgreSQL", "Redis", "BullMQ"],
      githubUrl: "https://github.com/SaiKarthik547/Medi-Consult-Prototype-Only",
      status: "featured",
    },
    {
      id: "novamind",
      title: "NovaMind — Recoverable Distributed Runtime Kernel",
      description: "Deterministic event-driven runtime kernel orchestrating AI workloads with Lamport logical clocks, DAG causal scheduling, and authoritative state recovery.",
      technologies: ["Python 3.12+", "Lamport Clocks", "DAG Scheduling", "FSM Supervisor", "Godot"],
      githubUrl: "https://github.com/SaiKarthik547/Novamind",
      status: "featured",
    },
    {
      id: "multigen",
      title: "MultiGenAI OS (MGOS) — Multi-Modal AI Operating System",
      description: "Production-grade multi-modal generation operating system unifying SDXL, AnimateDiff sliding windows, and 512-d ArcFace character identity.",
      technologies: ["Python", "PyTorch", "Diffusers", "SDXL", "AnimateDiff", "InsightFace"],
      githubUrl: "https://github.com/SaiKarthik547/multigen",
      status: "featured",
    },
    {
      id: "capstone",
      title: "NeuroX — Multi-Disease Brain MRI Analysis System",
      description: "3D deep learning framework unifying multi-pathology brain MRI segmentation and classification with quantified uncertainty estimation.",
      technologies: ["Python", "PyTorch", "CUDA", "NiBabel", "Streamlit"],
      githubUrl: "https://github.com/SaiKarthik547/NeuroX",
      status: "featured",
    },
    {
      id: "task-manager",
      title: "Task Management System (TMS) — Enterprise Platform",
      description: "Self-hosted enterprise collaboration engine featuring 40+ granular RBAC permissions, async job scheduling, and Socket.IO real-time sync.",
      technologies: ["FastAPI", "Python", "SQLAlchemy", "PostgreSQL", "Socket.IO"],
      githubUrl: "https://github.com/SaiKarthik547/task-manager",
      status: "completed",
    },
    {
      id: "beacon-analytics",
      title: "Beacon — Student Performance Analytics Platform",
      description: "Educational intelligence platform aggregating academic performance indicators to compute predictive student risk scores and track interventions.",
      technologies: ["FastAPI", "React", "TypeScript", "SQLAlchemy", "Tailwind CSS"],
      githubUrl: "https://github.com/SaiKarthik547/Beacon-Student-Performance-Analytics-Platform",
      status: "completed",
    },
    {
      id: "local-modular-ai",
      title: "Local Modular AI — Offline-Ready Modular AI Assistant",
      description: "Modular Python runtime integrating local Hugging Face LLMs (Qwen 0.5B), FAISS document RAG, and internet search fallback chains.",
      technologies: ["Python", "Flask", "PyTorch", "FAISS", "Transformers"],
      githubUrl: "https://github.com/SaiKarthik547/Local-Modular-AI",
      status: "completed",
    },
    {
      id: "eco-forge",
      title: "EcoForge — AI Agents for Carbon Footprint Analysis",
      description: "Multi-agent environmental intelligence system powered by LangGraph, LangChain tools, and LangSmith observability tracing.",
      technologies: ["Python", "LangGraph", "LangChain", "LangSmith", "Streamlit"],
      githubUrl: "https://github.com/SaiKarthik547/EcoForge---AI-Agents-for-Carbon-Footprint-Analysis",
      status: "completed",
    },
    {
      id: "multimodal-sentiment-analysis",
      title: "Multimodal Social Media Sentiment Analyzer",
      description: "Cross-platform sentiment pipeline fusing text NLP, speech acoustics (Whisper/wav2vec2), and facial emotion cues (DeepFace).",
      technologies: ["Python", "PyTorch", "Transformers", "Whisper", "Streamlit"],
      githubUrl: "https://github.com/SaiKarthik547/Multimodal-sentimental-analysis",
      status: "completed",
    },
    {
      id: "leo-ai-assistant",
      title: "Leo AI Assistant",
      description: "Personal AI assistant providing dynamic switching across open-access LLMs (Llama 3.1, Phi-3, Gemma, Mistral) with voice I/O and Supabase auth.",
      technologies: ["Python", "React", "OpenRouter API", "Supabase", "SpeechRecognition"],
      githubUrl: "https://github.com/SaiKarthik547/Leo-AI-Assist",
      status: "completed",
    },
    {
      id: "jarvis-ai",
      title: "JARVIS AI Assistant",
      description: "Full-stack desktop assistant combining real-time OS telemetry monitoring, voice interaction, and multi-provider AI routing.",
      technologies: ["FastAPI", "React 18", "Tailwind CSS", "Supabase", "Groq"],
      githubUrl: "https://github.com/SaiKarthik547/J.A.R.V.I.S-AI-Assistant",
      status: "completed",
    },
    {
      id: "blockchain-drug-supply-chain",
      title: "PharmaTrack India — Pharmaceutical Supply Chain System (Simulation)",
      description: "Interactive supply chain tracking simulation with dynamic QR code batching, 5-role custody workflows, and tiered expiry discounting.",
      technologies: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui"],
      githubUrl: "https://github.com/SaiKarthik547/Blockchain-based-Drug-Supply-Chain",
      status: "completed",
    },
    {
      id: "student-expense-tracker",
      title: "Student Finance Tracker — Indian Edition",
      description: "Responsive personal budgeting web app for Indian college students featuring Recharts analytics, INR formatting, and Supabase RLS.",
      technologies: ["React 18", "TypeScript", "Tailwind CSS", "Recharts", "Supabase"],
      githubUrl: "https://github.com/SaiKarthik547/Student-expense-tracker",
      status: "completed",
    },
    {
      id: "fiery-flappy-bird",
      title: "Fiery Flappy Bird — Browser Arcade Game",
      description: "Browser arcade game built completely in pure Vanilla JavaScript and HTML5 Canvas without external physics or graphics engines.",
      technologies: ["Vanilla JavaScript", "HTML5 Canvas", "CSS3"],
      githubUrl: "https://github.com/SaiKarthik547/Fiery-Flappy-Bird",
      status: "completed",
    },
  ],
};
