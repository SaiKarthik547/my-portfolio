export interface ProjectDetail {
  id: string;
  title: string;
  fullDescription: string;
  features: string[];
  challenges: string[];
  results: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  images?: string[];
  stats?: {
    label: string;
    value: string;
  }[];
}

export const projectDetails: Record<string, ProjectDetail> = {
  "capstone": {
    id: "capstone",
    title: "Capstone – Medical AI Brain Analysis System",
    fullDescription:
      "Medical imaging analysis is a critical component of modern healthcare, especially for diagnosing neurological diseases from MRI scans. Manual interpretation of MRI volumes is time consuming and requires expert radiologists. This project explores how deep learning can assist in the automated analysis of brain MRI scans. The system processes MRI images, performs preprocessing and normalization, and uses deep learning models to identify and segment potential abnormal regions. The project focuses on building a complete pipeline including dataset preprocessing, model training, segmentation evaluation, and result visualization. The goal is to demonstrate how AI systems can support medical professionals by accelerating analysis and highlighting suspicious regions in brain scans.",
    features: [
      "MRI preprocessing pipeline including normalization and noise reduction",
      "Deep learning based segmentation model for identifying abnormal brain regions",
      "Evaluation metrics for segmentation accuracy",
      "Visualization tools to display detected regions in medical images"
    ],
    challenges: [
      "Handling high resolution medical imaging volumes",
      "Training segmentation models with limited labeled datasets",
      "Maintaining stable model convergence during training"
    ],
    results: [
      "Built an end-to-end pipeline for MRI analysis",
      "Generated visual segmentation outputs highlighting suspicious regions",
      "Established a reproducible workflow for training and evaluation"
    ],
    technologies: ["Python", "PyTorch", "NumPy", "Medical Imaging"],
    githubUrl: "https://github.com/SaiKarthik547/Capstone"
  },

  "medical-consultation-system": {
    id: "medical-consultation-system",
    title: "Medical Consultation System",
    fullDescription:
      "Access to healthcare consultation is often limited by scheduling constraints and geographic barriers. Many patients struggle to connect with doctors quickly, while healthcare providers need better systems to manage consultations and medical records. This project builds a digital consultation platform that allows patients to interact with doctors through a structured system. The platform manages user authentication, doctor and patient roles, consultation workflows, and medical data records. The goal is to simulate a simplified healthcare management platform that organizes consultations efficiently while maintaining secure access to patient information.",
    features: [
      "User authentication system for doctors and patients",
      "Role based access control",
      "Consultation request and management workflows",
      "Patient record storage and retrieval"
    ],
    challenges: [
      "Designing secure authentication and access control mechanisms",
      "Managing structured medical records within the application",
      "Creating a simple yet functional consultation workflow"
    ],
    results: [
      "Developed a working healthcare consultation platform",
      "Implemented structured doctor–patient interaction workflows",
      "Demonstrated role based access control in a healthcare application"
    ],
    technologies: ["Next.js", "TypeScript", "Prisma", "SQLite"],
    githubUrl: "https://github.com/SaiKarthik547/Medical-Consultation-SYstem"
  },

  "eco-forge": {
    id: "eco-forge",
    title: "EcoForge – AI Agents for Carbon Footprint Analysis",
    fullDescription:
      "Climate change and environmental sustainability are major global challenges. However, most individuals are unaware of how their daily activities contribute to carbon emissions. EcoForge is an AI-driven system designed to analyze lifestyle activities such as transportation, energy consumption, and consumption habits in order to estimate an individual's carbon footprint. The system uses multiple AI agents that analyze different aspects of user input and combine their outputs to generate sustainability insights and recommendations. The goal is to demonstrate how AI agents can work collaboratively to analyze environmental data and provide actionable guidance for reducing carbon emissions.",
    features: [
      "Lifestyle input analysis for carbon footprint estimation",
      "Multi-agent AI architecture for environmental analysis",
      "Sustainability recommendation generation",
      "Interactive interface for environmental insights"
    ],
    challenges: [
      "Designing realistic carbon footprint estimation models",
      "Coordinating multiple AI agents within a workflow",
      "Handling diverse lifestyle inputs from users"
    ],
    results: [
      "Built a functional AI system for estimating carbon footprint",
      "Demonstrated agent-based reasoning for sustainability analysis",
      "Generated actionable environmental recommendations"
    ],
    technologies: ["Python", "AI Agents", "Streamlit", "LLMs"],
    githubUrl:
      "https://github.com/SaiKarthik547/EcoForge---AI-Agents-for-Carbon-Footprint-Analysis"
  },

  "multimodal-sentiment-analysis": {
    id: "multimodal-sentiment-analysis",
    title: "Multimodal Sentiment Analysis",
    fullDescription:
      "Traditional sentiment analysis models rely primarily on textual input. However, human communication often contains multiple modalities such as images, facial expressions, and contextual signals that influence sentiment interpretation. This project explores multimodal machine learning by combining textual and visual inputs to improve sentiment prediction. The system extracts features from text and visual data sources and then combines them through multimodal fusion techniques to generate sentiment predictions. The goal is to demonstrate how combining multiple data modalities can improve the accuracy and robustness of sentiment analysis systems.",
    features: [
      "Text based sentiment classification pipeline",
      "Visual feature extraction from images",
      "Multimodal feature fusion techniques",
      "Model evaluation and comparison framework"
    ],
    challenges: [
      "Combining heterogeneous feature representations",
      "Training models with multimodal datasets",
      "Balancing datasets across different modalities"
    ],
    results: [
      "Implemented multimodal sentiment prediction system",
      "Demonstrated improved sentiment understanding using combined features"
    ],
    technologies: ["Python", "PyTorch", "Machine Learning"],
    githubUrl:
      "https://github.com/SaiKarthik547/Multimodal-sentimental-analysis"
  },

  "beacon-analytics": {
    id: "beacon-analytics",
    title: "Beacon – Student Performance Analytics Platform",
    fullDescription:
      "Educational institutions generate large volumes of academic data, but extracting meaningful insights from this data can be difficult. Beacon is a data analytics platform designed to analyze student performance data and identify trends, patterns, and insights that can help educators better understand student progress. The platform processes academic datasets, generates performance analytics, and visualizes results through dashboards. The goal of the project is to demonstrate how data analytics systems can support educational decision making.",
    features: [
      "Student performance data analysis",
      "Interactive analytics dashboards",
      "Trend identification across academic datasets",
      "Data visualization for educators"
    ],
    challenges: [
      "Processing large academic datasets efficiently",
      "Designing clear and meaningful visualizations",
      "Ensuring accurate performance insights"
    ],
    results: [
      "Built analytics dashboards for academic data",
      "Generated insights into student performance patterns"
    ],
    technologies: ["Python", "FastAPI", "React", "Data Analytics"],
    githubUrl:
      "https://github.com/SaiKarthik547/Beacon-Student-Performance-Analytics-Platform"
  },

  "local-modular-ai": {
    id: "local-modular-ai",
    title: "Local Modular AI",
    fullDescription:
      "Most AI assistants rely heavily on cloud infrastructure, which introduces latency, privacy concerns, and dependency on internet connectivity. Local Modular AI explores the design of an AI assistant framework that can operate locally on a user's system. The architecture is modular, allowing different AI capabilities such as language models, search tools, and automation modules to be integrated as independent components. The goal is to build a flexible framework that enables experimentation with locally running AI systems.",
    features: [
      "Local execution of language models",
      "Modular architecture for AI capabilities",
      "Task automation framework",
      "Integration with external tools and APIs"
    ],
    challenges: [
      "Running AI models efficiently on local hardware",
      "Designing extensible modular architecture",
      "Maintaining conversational context across tasks"
    ],
    results: [
      "Built prototype modular AI assistant framework",
      "Enabled integration of multiple AI modules"
    ],
    technologies: ["Python", "Transformers", "LLMs"],
    githubUrl: "https://github.com/SaiKarthik547/Local-Modular-AI"
  },

  "leo-ai-assistant": {
    id: "leo-ai-assistant",
    title: "Leo AI Assistant",
    fullDescription:
      "Leo is a personal AI assistant designed to explore conversational AI and task automation capabilities. The system uses language models to interact with users through natural language and assist with simple productivity tasks.",
    features: [
      "Conversational AI interface",
      "Task assistance capabilities",
      "AI generated responses"
    ],
    challenges: [
      "Maintaining conversational coherence",
      "Integrating AI responses with system tasks"
    ],
    results: [
      "Developed working conversational AI prototype"
    ],
    technologies: ["Python", "LLMs"],
    githubUrl: "https://github.com/SaiKarthik547/Leo-AI-Assist"
  },

  "jarvis-ai": {
    id: "jarvis-ai",
    title: "JARVIS AI Assistant",
    fullDescription:
      "JARVIS is an experimental AI assistant inspired by the fictional assistant from Iron Man. The project explores voice interaction, conversational AI, and automation capabilities within a simple assistant framework.",
    features: [
      "Voice interaction capabilities",
      "Conversational AI system",
      "Automation features for basic tasks"
    ],
    challenges: [
      "Integrating speech input with AI responses",
      "Maintaining natural conversational interactions"
    ],
    results: [
      "Built functional AI assistant prototype"
    ],
    technologies: ["Python", "LLMs", "Voice AI"],
    githubUrl: "https://github.com/SaiKarthik547/J.A.R.V.I.S-AI-Assistant"
  },

  "blockchain-drug-supply-chain": {
    id: "blockchain-drug-supply-chain",
    title: "Blockchain Based Drug Supply Chain",
    fullDescription:
      "Counterfeit drugs and lack of transparency in pharmaceutical supply chains are serious global issues. This project explores the use of blockchain technology to improve traceability and transparency in drug distribution systems. Each transaction within the supply chain can be recorded on a blockchain ledger, creating an immutable record of drug movement from manufacturers to pharmacies.",
    features: [
      "Supply chain transaction tracking",
      "Blockchain based record storage",
      "Drug authenticity verification"
    ],
    challenges: [
      "Designing decentralized transaction structures",
      "Ensuring data consistency across nodes"
    ],
    results: [
      "Developed prototype blockchain supply chain tracking system"
    ],
    technologies: ["Blockchain", "Solidity", "Web Technologies"],
    githubUrl:
      "https://github.com/SaiKarthik547/Blockchain-based-Drug-Supply-Chain"
  },

  "student-expense-tracker": {
    id: "student-expense-tracker",
    title: "Student Expense Tracker",
    fullDescription:
      "Students often struggle to manage their daily expenses and track where their money is being spent. This project builds a simple expense tracking application that allows users to record expenses, categorize spending, and monitor financial habits.",
    features: [
      "Expense logging system",
      "Category based expense management",
      "Financial overview dashboard"
    ],
    challenges: [
      "Designing simple and intuitive UI",
      "Managing persistent financial records"
    ],
    results: [
      "Built working student expense tracking application"
    ],
    technologies: ["JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/SaiKarthik547/Student-expense-tracker"
  },

  "task-manager": {
    id: "task-manager",
    title: "Task Manager",
    fullDescription:
      "Task management is essential for personal productivity. This project implements a lightweight task management system that allows users to create, organize, and track tasks.",
    features: [
      "Task creation and tracking",
      "Task completion management",
      "Simple task workflow"
    ],
    challenges: [
      "Designing minimal yet functional interface",
      "Maintaining task state persistence"
    ],
    results: [
      "Developed simple productivity task management system"
    ],
    technologies: ["JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/SaiKarthik547/task-manager"
  },

  "fiery-flappy-bird": {
    id: "fiery-flappy-bird",
    title: "Fiery Flappy Bird",
    fullDescription:
      "Fiery Flappy Bird is a browser based game inspired by the classic Flappy Bird gameplay. The player controls a character navigating through obstacles while maintaining flight and avoiding collisions.",
    features: [
      "Player controlled movement system",
      "Obstacle generation mechanics",
      "Score tracking system"
    ],
    challenges: [
      "Implementing smooth game physics",
      "Designing responsive controls"
    ],
    results: [
      "Developed fully playable browser based game"
    ],
    technologies: ["JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/SaiKarthik547/Fiery-Flappy-Bird"
  }
};
