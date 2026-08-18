export type AcademyLevel =
  | "Foundation"
  | "Practitioner"
  | "Professional"
  | "Executive"
  | "Strategic Leadership";

export type AcademyAudience =
  | "Individual"
  | "Entrepreneur"
  | "Professional"
  | "Manager"
  | "Department Head"
  | "Executive"
  | "CEO"
  | "Organization";

export type AcademySchool =
  | "Business Foundations"
  | "Strategy & Business Growth"
  | "Entrepreneurship & Innovation"
  | "Marketing & Growth"
  | "Sales & Revenue"
  | "Finance & Accounting"
  | "Analytics & Decision Intelligence"
  | "AI & Digital Transformation"
  | "Leadership & People"
  | "Operations & Project Management"
  | "Customer Experience"
  | "Product Management"
  | "Communication & Negotiation"
  | "Governance, Law & Ethics"
  | "Global Business"
  | "Executive Education"
  | "CEO & Founder School"
  | "Career & Professional Development"
  | "Business Research & Thought Leadership";

export type AcademyGrowthDimension =
  | "Strategic Growth"
  | "Operational Growth"
  | "Financial Growth"
  | "Customer Growth"
  | "People Growth"
  | "Innovation Growth"
  | "Ecosystem Growth";

export interface AcademyProgram {
  id: string;
  title: string;
  description: string;
  school: AcademySchool;
  level: AcademyLevel;
  audience: AcademyAudience[];
  growthDimensions: AcademyGrowthDimension[];
  courseIds: string[];
  certificateTitle?: string;
  featured?: boolean;
}

export interface AcademyLearningPath {
  id: string;
  title: string;
  description: string;
  school: AcademySchool;
  level: AcademyLevel;
  audience: AcademyAudience[];
  growthDimensions: AcademyGrowthDimension[];
  courseIds: string[];
  featured?: boolean;
}