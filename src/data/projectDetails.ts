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
      "A high-precision deep learning framework designed to automate the detection and segmentation of brain abnormalities from MRI scans.\n\n" +
      "• Engineered an end-to-end medical imaging pipeline including advanced MRI preprocessing, bias-field correction, and normalization.\n" +
      "• Implemented state-of-the-art segmentation models using PyTorch to delineate complex neurological structures.\n" +
      "• Developed visualization modules for overlaying AI predictions on 3D medical volumes, aiding radiologists in clinical decision-making.\n" +
      "• Optimized model architecture to handle high-resolution MRI data with high diagnostic reliability.",
    features: [
      "Automated MRI volume preprocessing and noise reduction",
      "Deep learning-based segmentation for abnormal region identification",
      "Quantitative analysis and performance evaluation metrics",
      "Interactive 3D visualization for medical imaging results"
    ],
    challenges: [
      "Managing high-resolution 3D medical imaging volumes efficiently",
      "Training high-accuracy models with limited labeled clinical data",
      "Ensuring model convergence and stability during complex training phases"
    ],
    results: [
      "Established a reproducible end-to-end clinical workflow for brain MRI analysis",
      "Achieved high segmentation accuracy in delineating suspicious regions",
      "Demonstrated AI's potential in accelerating neurological diagnostic processes"
    ],
    technologies: ["Python", "PyTorch", "NumPy", "NiBabel", "OpenCV", "Matplotlib", "Scikit-image"],
    githubUrl: "https://github.com/SaiKarthik547/NeuroX"
  },

  "medical-consultation-system": {
    id: "medical-consultation-system",
    title: "Medical Consultation System",
    fullDescription:
      "A sophisticated healthcare platform facilitating secure and efficient interactions between patients and medical professionals.\n\n" +
      "• Developed a full-stack digital consultation portal with robust Role-Based Access Control (RBAC) for Doctors and Patients.\n" +
      "• Built a structured consultation management system for handling appointments, medical history, and clinical interactions.\n" +
      "• Engineered a persistent data layer using Prisma ORM and SQLite for secure management of sensitive medical records.\n" +
      "• Designed a responsive, user-centric dashboard with Next.js 14 and Tailwind CSS for cross-device accessibility.",
    features: [
      "Secure user authentication with multi-role support",
      "Automated consultation scheduling and management workflow",
      "Persistent medical record storage and encrypted retrieval",
      "Responsive UI designed for both patients and healthcare providers"
    ],
    challenges: [
      "Implementing highly secure authentication and data privacy protocols",
      "Managing structured clinical data within a relational database architecture",
      "Creating an intuitive, frictionless workflow for non-technical users"
    ],
    results: [
      "Deployed a production-ready digital healthcare management platform",
      "Streamlined doctor-patient interactions through automated workflows",
      "Verified system security and role-based data isolation"
    ],
    technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Prisma", "SQLite", "Lucide React", "Shadcn UI"],
    githubUrl: "https://github.com/SaiKarthik547/Medi-Consult-Prototype-Only"
  },

  "eco-forge": {
    id: "eco-forge",
    title: "EcoForge – AI Agents for Carbon Footprint Analysis",
    fullDescription:
      "An advanced AI-driven sustainability platform leveraging multi-agent orchestration to analyze and mitigate individual environmental impact.\n\n" +
      "• Architected a multi-agent system using CrewAI to analyze complex lifestyle parameters across transportation and energy sectors.\n" +
      "• Integrated Large Language Models (LLMs) to provide personalized, actionable sustainability recommendations.\n" +
      "• Developed an interactive data visualization dashboard with Streamlit for real-time carbon footprint insights.\n" +
      "• Implemented sophisticated emission estimation models based on diverse user behavioral inputs.",
    features: [
      "Multi-agent AI orchestration for comprehensive environmental analysis",
      "Personalized carbon footprint estimation and insights generation",
      "Interactive data visualization with real-time feedback loops",
      "Actionable sustainability strategy recommendations using GenAI"
    ],
    challenges: [
      "Coordinating multiple AI agents to work synchronously within a workflow",
      "Developing accurate and realistic carbon emission calculation models",
      "Handling heterogeneous user inputs to ensure consistent data analysis"
    ],
    results: [
      "Built a functional AI-powered platform for environmental awareness",
      "Demonstrated the effectiveness of agent-based reasoning in sustainability",
      "Generated practical environmental guidance for hundreds of user profiles"
    ],
    technologies: ["Python", "Streamlit", "CrewAI", "LangChain", "OpenAI API", "Pandas", "Plotly"],
    githubUrl:
      "https://github.com/SaiKarthik547/EcoForge---AI-Agents-for-Carbon-Footprint-Analysis"
  },

  "multimodal-sentiment-analysis": {
    id: "multimodal-sentiment-analysis",
    title: "Multimodal Sentiment Analysis",
    fullDescription:
      "An advanced machine learning framework that fuses textual and visual signals to enhance the accuracy of sentiment prediction.\n\n" +
      "• Engineered deep learning pipelines for extracting features from heterogeneous data sources (text and facial expressions).\n" +
      "• Implemented sophisticated multimodal fusion techniques to bridge the gap between NLP and Computer Vision signals.\n" +
      "• Trained and optimized ensemble models using PyTorch to achieve superior sentiment understanding.\n" +
      "• Benchmarked system performance against unimodal baselines to validate the robustness of the multimodal approach.",
    features: [
      "Textual sentiment analysis using state-of-the-art NLP models",
      "Visual feature extraction and facial expression recognition",
      "Advanced multimodal feature fusion and classification",
      "Comprehensive evaluation framework for cross-modal performance"
    ],
    challenges: [
      "Combining disparate feature representations from different data modalities",
      "Addressing data imbalance and noise across multimodal datasets",
      "Optimizing complex multi-input model architectures for performance"
    ],
    results: [
      "Achieved significant accuracy improvements over standard text-only models",
      "Developed a robust framework for multi-signal emotional intelligence",
      "Validated the system on industry-standard multimodal benchmark datasets"
    ],
    technologies: ["Python", "PyTorch", "Transformers", "OpenCV", "NumPy", "Matplotlib", "Scikit-learn"],
    githubUrl:
      "https://github.com/SaiKarthik547/Multimodal-sentimental-analysis"
  },

  "beacon-analytics": {
    id: "beacon-analytics",
    title: "Beacon – Student Performance Analytics Platform",
    fullDescription:
      "A data-driven analytics ecosystem designed to extract actionable insights from complex academic performance datasets.\n\n" +
      "• Engineered interactive performance dashboards with React and Chart.js to visualize large-scale educational trends.\n" +
      "• Developed a high-performance backend using FastAPI for efficient processing of academic records.\n" +
      "• Implemented predictive analytics to identify performance patterns and support educational decision-making.\n" +
      "• Optimized data pipelines using Pandas to handle thousands of student records with minimal latency.",
    features: [
      "Interactive student performance tracking and visualization",
      "High-speed data processing backend for educational analytics",
      "Predictive modeling for identifying student academic trends",
      "Automated insights generation for educational administrators"
    ],
    challenges: [
      "Processing large, unstructured academic datasets with high efficiency",
      "Designing intuitive visualizations that convey complex data simply",
      "Ensuring high data accuracy and reliability in performance reporting"
    ],
    results: [
      "Built a scalable analytics platform for academic institutions",
      "Generated critical insights into student success patterns and risks",
      "Established a data-driven framework for improving educational outcomes"
    ],
    technologies: ["Python", "FastAPI", "React.js", "Pandas", "NumPy", "Chart.js", "Tailwind CSS", "PostgreSQL"],
    githubUrl:
      "https://github.com/SaiKarthik547/Beacon-Student-Performance-Analytics-Platform"
  },

  "local-modular-ai": {
    id: "local-modular-ai",
    title: "Local Modular AI",
    fullDescription:
      "A privacy-centric, extensible AI framework designed for high-performance execution on local hardware without cloud dependency.\n\n" +
      "• Designed a modular architecture allowing for the seamless integration of various LLMs and task-specific modules.\n" +
      "• Integrated local LLM orchestration via Ollama and Transformers to ensure data sovereignty and low latency.\n" +
      "• Developed a task automation engine capable of interacting with local system tools and APIs.\n" +
      "• Implemented persistent conversational context management for long-term user interaction consistency.",
    features: [
      "Local LLM execution with no cloud/internet dependency",
      "Highly extensible modular architecture for AI capabilities",
      "System-level task automation and tool integration",
      "Privacy-focused data management and local storage"
    ],
    challenges: [
      "Optimizing large model performance for diverse local hardware",
      "Designing a clean, extensible API for the modular framework",
      "Maintaining state consistency across multiple modular interactions"
    ],
    results: [
      "Developed a robust prototype for private, local AI assistance",
      "Successfully integrated multiple open-source models into a single framework",
      "Demonstrated system-level task automation using locally running AI"
    ],
    technologies: ["Python", "Transformers", "Ollama", "LangChain", "SQLite", "PyQt", "Streamlit"],
    githubUrl: "https://github.com/SaiKarthik547/Local-Modular-AI"
  },

  "leo-ai-assistant": {
    id: "leo-ai-assistant",
    title: "Leo AI Assistant",
    fullDescription:
      "A versatile personal AI assistant prototype focused on productivity enhancement and natural language interaction.\n\n" +
      "• Developed intent recognition and entity extraction modules to handle complex natural language queries.\n" +
      "• Implemented a task-oriented automation framework for scheduling, reminders, and information retrieval.\n" +
      "• Integrated modern LLM APIs to facilitate intelligent, context-aware conversational interactions.\n" +
      "• Built a lightweight persistent memory system to maintain user preferences and context.",
    features: [
      "Natural language conversational interface",
      "Task-oriented automation and productivity features",
      "Intelligent response generation using state-of-the-art LLMs",
      "Persistent user context and preference management"
    ],
    challenges: [
      "Maintaining conversational coherence over long-term interactions",
      "Efficiently mapping natural language intent to system-level actions",
      "Optimizing response latency for a real-time assistant experience"
    ],
    results: [
      "Built a functional conversational assistant with task capabilities",
      "Implemented a scalable architecture for adding new AI features",
      "Demonstrated practical utility in daily productivity automation"
    ],
    technologies: ["Python", "OpenAI API", "LangChain", "SpeechRecognition", "SQLite"],
    githubUrl: "https://github.com/SaiKarthik547/Leo-AI-Assist"
  },

  "jarvis-ai": {
    id: "jarvis-ai",
    title: "JARVIS AI Assistant",
    fullDescription:
      "An experimental voice-activated AI assistant prototype featuring real-time speech interaction and system automation.\n\n" +
      "• Engineered a low-latency speech-to-text (STT) and text-to-speech (TTS) pipeline for natural voice communication.\n" +
      "• Implemented system-level automation for controlling applications and web browsing via voice commands.\n" +
      "• Integrated advanced language models to provide intelligent, autonomous task execution and dialogue.\n" +
      "• Developed an extensible framework for integrating custom voice-triggered skills.",
    features: [
      "Real-time voice interaction and speech processing",
      "Autonomous system-level automation and control",
      "Intelligent conversational AI using advanced LLMs",
      "Extensible skill-based architecture for custom commands"
    ],
    challenges: [
      "Reducing latency in voice-to-action feedback loops",
      "Improving speech recognition accuracy in varied environments",
      "Securing system-level automation from unauthorized execution"
    ],
    results: [
      "Developed a functional voice-activated AI assistant prototype",
      "Successfully automated diverse local system tasks via voice",
      "Implemented a natural-sounding speech interaction interface"
    ],
    technologies: ["Python", "pyttsx3", "SpeechRecognition", "OpenAI GPT", "Selenium", "OS Library"],
    githubUrl: "https://github.com/SaiKarthik547/J.A.R.V.I.S-AI-Assistant"
  },

  "blockchain-drug-supply-chain": {
    id: "blockchain-drug-supply-chain",
    title: "Blockchain Based Drug Supply Chain",
    fullDescription:
      "A decentralized supply chain management platform designed to ensure transparency and traceability in pharmaceutical distribution.\n\n" +
      "• Engineered Solidity smart contracts to create an immutable ledger for tracking drug movement from manufacture to pharmacy.\n" +
      "• Developed a web-based portal using React.js and Ethers.js for real-time drug authenticity verification.\n" +
      "• Implemented a secure, distributed transaction architecture to prevent fraud and supply chain tampering.\n" +
      "• Designed a user-friendly interface for stakeholders to interact with the blockchain network.",
    features: [
      "Immutable transaction tracking on a decentralized ledger",
      "Smart contract-based drug authenticity and history verification",
      "Transparent supply chain audit trails for all stakeholders",
      "Secure and distributed record-keeping to prevent counterfeiting"
    ],
    challenges: [
      "Designing gas-efficient smart contracts for high-frequency transactions",
      "Ensuring data consistency between physical movement and on-chain records",
      "Implementing a secure yet accessible frontend interface for Web3"
    ],
    results: [
      "Built a prototype decentralized supply chain tracking system",
      "Demonstrated the practical use of blockchain for drug safety",
      "Established a tamper-proof record system for pharmaceutical logistics"
    ],
    technologies: ["Solidity", "Ethereum", "Hardhat", "React.js", "Ethers.js", "Tailwind CSS", "Metamask"],
    githubUrl:
      "https://github.com/SaiKarthik547/Blockchain-based-Drug-Supply-Chain"
  },

  "student-expense-tracker": {
    id: "student-expense-tracker",
    title: "Student Expense Tracker",
    fullDescription:
      "A comprehensive financial management tool tailored for students to monitor spending habits and manage personal budgets.\n\n" +
      "• Implemented persistent data storage using browser LocalStorage to maintain financial records without a backend.\n" +
      "• Designed a dynamic analytics dashboard with Chart.js to visualize expense categories and spending trends.\n" +
      "• Built a responsive, mobile-first UI using modern CSS Grid and Flexbox for seamless cross-device usability.\n" +
      "• Developed automated expense categorization and monthly summary features.",
    features: [
      "Categorized expense logging and management",
      "Interactive spending analytics and visualization",
      "Persistent storage for cross-session record keeping",
      "Responsive and intuitive user interface for mobile and desktop"
    ],
    challenges: [
      "Managing complex client-side state without a dedicated backend",
      "Designing a minimal yet highly functional UI for rapid data entry",
      "Ensuring data persistence and reliability using LocalStorage"
    ],
    results: [
      "Developed a working financial management application for students",
      "Provided clear insights into spending habits through visualization",
      "Achieved high performance and offline-capable functionality"
    ],
    technologies: ["JavaScript (ES6+)", "HTML5", "CSS3", "LocalStorage", "Chart.js"],
    githubUrl: "https://github.com/SaiKarthik547/Student-expense-tracker"
  },

  "task-manager": {
    id: "task-manager",
    title: "Task Manager",
    fullDescription:
      "A professional productivity application for organizing workflows, managing deadlines, and tracking project progress.\n\n" +
      "• Implemented state-persistent task management features including categorization, prioritization, and completion tracking.\n" +
      "• Developed a minimal, high-efficiency interface focused on reducing cognitive load and improving user focus.\n" +
      "• Engineered a modular JavaScript architecture to ensure maintainability and ease of feature expansion.\n" +
      "• Built a responsive design ensuring productivity across mobile and desktop environments.",
    features: [
      "Comprehensive task lifecycle management (To-Do to Completed)",
      "Persistent state management for ongoing project tracking",
      "Minimalist interface optimized for productivity and focus",
      "Modular code structure for easy feature scalability"
    ],
    challenges: [
      "Creating an intuitive drag-and-drop workflow (optional but considered)",
      "Balancing interface simplicity with feature depth",
      "Ensuring consistent performance and state reliability"
    ],
    results: [
      "Deployed a functional productivity tool for daily use",
      "Established a clean, modular foundation for future expansion",
      "Improved personal workflow efficiency through structured task tracking"
    ],
    technologies: ["JavaScript (ES6+)", "HTML5", "CSS3", "LocalStorage"],
    githubUrl: "https://github.com/SaiKarthik547/task-manager"
  },

  "fiery-flappy-bird": {
    id: "fiery-flappy-bird",
    title: "Fiery Flappy Bird",
    fullDescription:
      "A high-performance physics-based browser game utilizing HTML5 Canvas for smooth animations and responsive gameplay.\n\n" +
      "• Engineered custom game physics including gravity, velocity, and collision detection for a seamless player experience.\n" +
      "• Implemented dynamic obstacle generation algorithms and a persistent high-score tracking system.\n" +
      "• Optimized asset loading and game loop execution to ensure consistent 60FPS performance.\n" +
      "• Designed a responsive control system compatible with both keyboard and touch inputs.",
    features: [
      "Physics-driven movement and collision detection systems",
      "Dynamic obstacle generation for infinite gameplay",
      "Real-time score tracking and persistent high-score records",
      "High-performance HTML5 Canvas rendering engine"
    ],
    challenges: [
      "Achieving consistent frame rates across different hardware",
      "Balancing game difficulty through obstacle generation math",
      "Implementing responsive touch and keyboard input handling"
    ],
    results: [
      "Developed a fully playable and engaging browser-based game",
      "Demonstrated proficiency in Canvas-based game development",
      "Optimized game logic for smooth, cross-device performance"
    ],
    technologies: ["JavaScript", "HTML5 Canvas", "CSS3"],
    githubUrl: "https://github.com/SaiKarthik547/Fiery-Flappy-Bird"
  }
};
