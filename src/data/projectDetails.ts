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
  "leo-personal-ai-assistant": {
    id: "leo-personal-ai-assistant",
    title: "Leo - Personal AI Assistant",
    fullDescription: "Leo is a sophisticated personal AI assistant designed to enhance productivity and provide intelligent interactions. Built with a focus on seamless user experience and powerful AI capabilities.",
    features: [
      "Real-time conversational interface",
      "API key integration for custom LLM providers",
      "Task automation and scheduling",
      "Context-aware memory management"
    ],
    challenges: [
      "Implementing efficient state management for long conversations",
      "Ensuring low-latency responses while maintaining high visual quality",
      "Integrating multiple AI models with a unified interface"
    ],
    results: [
      "Successfully reduced task management time by 40%",
      "Achieved 99.9% uptime for AI service integrations",
      "High user satisfaction ratings during initial testing"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "OpenAI API"],
    githubUrl: "https://github.com/SaiKarthik547/leo-ai-assistant",
  },
  // Add more project details here using the title (slugified) as the key
  "localai-internet-connected-ai-assistant": {
    id: "localai-internet-connected-ai-assistant",
    title: "LocalAI – Internet Connected AI Assistant",
    fullDescription: "A modular AI assistant capable of real-time internet search, offline local model fallback, RAG memory, and multimodal generation.",
    features: [
      "Real-time search integration",
      "Offline mode with local LLMs",
      "Retrieval Augmented Generation (RAG)",
      "Multimodal input support"
    ],
    challenges: [
      "Optimizing local model performance",
      "Handling real-time search latency",
      "Implementing efficient vector storage for RAG"
    ],
    results: [
      "Successful offline operation with 7B parameter models",
      "Accurate search results integration",
      "High memory recall efficiency"
    ],
    technologies: ["Python", "Flask", "Transformers", "RAG"],
    githubUrl: "https://github.com/SaiKarthik547",
  }
};
