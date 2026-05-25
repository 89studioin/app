export interface Project {
  id: string;
  title: string;
  category: 'UX/UI' | 'Web Dev' | 'Branding' | 'Fullstack';
  tags: string[];
  description: string;
  coverImage: string;
  metric: string;
  metricLabel: string;
  challenge: string;
  solution: string;
  results: string[];
  clientQuote?: string;
  clientName?: string;
  clientRole?: string;
}

export interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  bulletPoints: string[];
  metrics: { value: string; label: string }[];
  highlightColor?: string;
}

export interface ProposalInput {
  companyName: string;
  industry: string;
  services: string[];
  budgetRange: string;
  timeline: string;
  goals: string;
  email: string;
}

export interface SavedProposal extends ProposalInput {
  id: string;
  createdAt: string;
  estimatedCostRange: string;
  suggestedSteps: string[];
}
