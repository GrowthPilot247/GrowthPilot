export type CourseLevel =
  | "Beginner"
  | "Intermediate"
  | "Advanced"
  | "Executive";

export type CourseFormat =
  | "Self-Paced"
  | "Instructor-Led"
  | "Workshop"
  | "Certification";

export type GrowthDimension =
  | "Strategic Growth"
  | "Operational Growth"
  | "Financial Growth"
  | "Customer Growth"
  | "People Growth"
  | "Innovation Growth"
  | "Ecosystem Growth";

export interface CourseLesson {
  id: string;
  title: string;
  description?: string;
  duration?: string;
  preview?: boolean;
  completed?: boolean;
}

export interface CourseModule {
  id: string;
  title: string;
  description?: string;
  lessons: CourseLesson[];
}

export interface CourseOutcome {
  id: string;
  title: string;
  description?: string;
}

export interface CourseRequirement {
  id: string;
  title: string;
  description?: string;
}

export interface Course {
  id: string;

  /* Core course identity */
  title: string;
  slug?: string;
  description: string;
  shortDescription?: string;
  category: string;

  /* Academic classification */
  level: CourseLevel;
  format: CourseFormat;
  duration: string;
  lessons: number;

  /* Faculty */
  instructor: string;
  instructorTitle?: string;
  instructorBio?: string;

  /* GrowthPilot Framework alignment */
  growthDimension: GrowthDimension;
  industries: string[];

  /* Learning experience */
  outcomes?: CourseOutcome[];
  requirements?: CourseRequirement[];
  modules?: CourseModule[];

  /* Course positioning */
  featured?: boolean;
  aiRecommended?: boolean;
  relevanceScore?: number;

  /* Academy discovery */
  tags?: string[];
  skills?: string[];
  audience?: string[];
  language?: string;

  /* Certification */
  certificateAvailable?: boolean;
  certificationName?: string;

  /* Commercial model */
  price?: number;
  currency?: string;
  enrollmentOpen?: boolean;

  /* Course media */
  thumbnail?: string;
  videoPreview?: string;

  /* AI personalization */
  aiRecommendationReason?: string;
  recommendedForChallenges?: string[];

  /* Academic metadata */
  published?: boolean;
  lastUpdated?: string;
}