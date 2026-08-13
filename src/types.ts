export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  shortOverview: string;
  iconName: string;
  items: string[];
  detailedDescription: string;
  typicalDuration: string;
  keyStandards: string[];
}

export interface FeaturedProject {
  id: string;
  title: string;
  location: string;
  category: string;
  year: string;
  area: string;
  layoutType: 'tall' | 'square' | 'large';
  imageUrl: string;
  summary: string;
  fullDescription: string;
  structuralHighlight: string;
  duration: string;
  valueRange: string;
  tier?: 'master' | 'mid-tier';
  tierLabel?: string;
  engineeringSpecs: string[];
  clientQuote?: {
    text: string;
    author: string;
    role: string;
  };
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  deliverables: string[];
  qualityGate: string;
}

export interface InsightArticle {
  id: string;
  date: string;
  category: string;
  title: string;
  readTime: string;
  imageUrl: string;
  summary: string;
  content: string[];
  author: {
    name: string;
    role: string;
  };
}

export interface StatItem {
  value: string;
  label: string;
  description?: string;
}

export interface IntakeFormData {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  estimatedBudget: string;
  postcode: string;
  projectDetails: string;
}
