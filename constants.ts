import { Experience, Project, SkillCategory, ContactInfo } from './types';

export const PERSONAL_INFO = {
  name: "NOR AMMAR HAMZI",
  role: "AI Software Engineer",
  summary: "Specializing in the intersection of Artificial Intelligence and Design. Building immersive digital experiences that solve complex problems with elegance."
};

export const CONTACT_INFO: ContactInfo = {
  phone: "+601110854405",
  email: "ammarhamzi22@gmail.com",
  location: "Selangor, Malaysia",
  linkedin: "https://www.linkedin.com/in/ammarhamzi/"
};

export const EXPERIENCES: Experience[] = [
  {
    company: "MALAYSIA AIRPORTS HOLDINGS BERHAD",
    role: "Software Engineer - Business Application",
    period: "July 2025 - Present",
    description: [
      "Maintains and develops new features for the AECR incident reporting system for all airports.",
      "Designing and developing the Digital Engineer Logbook to streamline daily operations.",
      "Monitoring and providing critical support for airport operations systems."
    ],
    techStack: ["DotNet", "C#", "SSMS", "Vue.js", "Node.js"]
  },
  {
    company: "TOYYIBPAY SDN BHD",
    role: "AI Engineer - R&D",
    period: "Aug 2024 – July 2025",
    description: [
      "Designed and deployed context-aware AI agents with dynamic interactions across platforms.",
      "Integrated and fine-tuned LLMs to enhance conversational intelligence and decision-making.",
      "Optimized RAG workflows to provide contextually relevant and accurate responses.",
      "Managed data pipelines: collected, cleaned, and preprocessed structured/unstructured data.",
      "Developed PoCs for innovative LLM approaches and conducted research on NLP advancements."
    ],
    techStack: ["LLMs", "RAG", "Python", "NLP", "Machine Learning"]
  },
  {
    company: "MALAYSIA AIRPORTS HOLDINGS BERHAD",
    role: "System Engineer Intern",
    period: "Mar 2024 – Jun 2024",
    description: [
      "Managed systems and applications throughout their lifecycles to implement upgrades.",
      "Coordinated VM server readiness prior to implementing new systems.",
      "Performed troubleshooting, problem review, and root cause analysis.",
      "Identified and mitigated risks, providing remediation actions tracked in the RMIS System."
    ],
    techStack: ["System Admin", "VM Management", "Risk Analysis"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "MyNGO",
    description: "Organization management platform optimizing operational efficiency.",
    longDescription: "MyNGO is a comprehensive management platform designed for Non-Governmental Organizations to streamline their daily operations. It features member management, event scheduling, donation tracking, and automated reporting. The system was built with scalability in mind, allowing organizations to grow without technical constraints.",
    techStack: ["Vue.js", "Node.js", "PostgreSQL", "AWS"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553877606-3c66966a9828?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop"
    ],
    link: "https://github.com/ammarhamzi"
  },
  {
    title: "PixelUp",
    description: "AI-powered image restoration and upscaling platform.",
    longDescription: "PixelUp leverages advanced generative adversarial networks (GANs) to restore, colorize, and upscale low-resolution images. It features a drag-and-drop interface, batch processing capabilities, and real-time comparison sliders, making professional-grade photo restoration accessible to everyone.",
    techStack: ["React", "Python", "PyTorch", "FastAPI"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2864&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2864&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558655146-d09347e0b7a9?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop"
    ],
    link: "https://github.com/ammarhamzi"
  },
  {
    title: "Legal Chatbot",
    description: "AI-driven legal document retrieval and analysis assistant.",
    longDescription: "Leveraging Large Language Models (LLMs) and Vector Databases, this legal assistant helps law firms automate the analysis of complex legal documents. It features semantic search, case summarization, and citation retrieval, significantly reducing the time spent on legal research.",
    techStack: ["React.js", "FastAPI", "OpenAI API", "Pinecone"],
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2800&auto=format&fit=crop"
    ],
    link: "https://github.com/ammarhamzi"
  },
  {
    title: "SegakAI",
    description: "Personalized fitness intelligence system.",
    longDescription: "SegakAI uses computer vision to analyze exercise form in real-time. By tracking key body points through a camera feed, it provides instant feedback to users on their posture and technique, preventing injuries and maximizing workout effectiveness.",
    techStack: ["Python", "TensorFlow", "OpenCV", "React"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2940&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=2938&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2940&auto=format&fit=crop"
    ],
    link: "https://github.com/ammarhamzi"
  },
  {
    title: "Gymber",
    description: "Member management ecosystem for fitness centers.",
    longDescription: "A CRM solution tailored for fitness centers to manage memberships, class schedules, and trainer assignments. It includes a mobile app for members to book classes and track their progress, and a web dashboard for staff administration.",
    techStack: ["Bootstrap", "Java MVC", "MySQL"],
    image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2938&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2875&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534258936925-c48947387e3b?q=80&w=2940&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2938&auto=format&fit=crop"
    ],
    link: "https://github.com/ammarhamzi"
  },
  {
    title: "BirdID",
    description: "Real-time acoustic classification for avian species.",
    longDescription: "BirdID is a mobile application that identifies bird species based on their calls and songs. Using deep learning models trained on audio spectrograms, it allows nature enthusiasts to quickly identify and catalogue bird populations in their area.",
    techStack: ["Flutter", "Python", "Audio Analysis", "Deep Learning"],
    image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=2938&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1552728089-57bdde30ebd1?q=80&w=2950&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=2938&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549608276-5786777e6587?q=80&w=2940&auto=format&fit=crop"
    ],
    link: "https://github.com/ammarhamzi"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "C#", "JavaScript", "TypeScript", "SQL", "Dart"]
  },
  {
    category: "AI & Machine Learning",
    skills: ["PyTorch", "TensorFlow", "OpenCV", "RAG", "LLM Integration", "NLP", "Audio Analysis"]
  },
  {
    category: "Web Development",
    skills: ["React.js", "Vue.js", "Node.js", "DotNet", "FastAPI", "Tailwind CSS"]
  },
  {
    category: "Cloud & Tools",
    skills: ["AWS", "Docker", "Git", "SSMS", "PostgreSQL", "VM Management"]
  }
];