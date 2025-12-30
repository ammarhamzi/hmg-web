export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  techStack?: string[];
}

export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  link?: string;
  category?: string;
  image?: string;
  gallery?: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  linkedin: string;
}