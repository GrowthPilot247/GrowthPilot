export type LearningCoachSource =
  | "GrowthPilot Intelligence"
  | "Academy Intelligence";

export type LearningCoachPriority =
  | "Critical"
  | "High"
  | "Medium"
  | "Low";

export type LearningCoachAction =
  | "Continue Course"
  | "Start Course"
  | "Explore Course"
  | "View Learning Path";

export interface LearningPriority {
  id: string;

  title: string;

  growthDimension: string;

  priority: LearningCoachPriority;

  score: number;

  identifiedChallenge?: string;

  explanation: string;

  capabilityGap?: string;

  expectedImprovement?: string;

  businessImpact?: string;
}

export interface LearningIntervention {
  courseId: string;

  courseTitle: string;

  category: string;

  relevanceScore: number;

  priority: LearningCoachPriority;

  action: LearningCoachAction;

  actionLabel: string;

  isEnrolled: boolean;

  isInProgress: boolean;

  progress: number;

  recommendationReason: string;

  identifiedChallenge?: string;

  growthDimension: string;

  expectedCapabilityImprovement?: string;

  businessImpact?: string;
}

export interface NextLearningRecommendation {
  courseId: string;

  courseTitle: string;

  category: string;

  relevanceScore: number;

  growthDimension: string;

  reason: string;

  action: LearningCoachAction;

  actionLabel: string;
}

export interface LearningCoach {
  learnerId: string;

  learnerType:
    | "GrowthPilot User"
    | "External Learner";

  source: LearningCoachSource;

  greeting: string;

  headline: string;

  summary: string;

  currentPriority?: LearningPriority;

  currentIntervention?: LearningIntervention;

  nextRecommendations: NextLearningRecommendation[];

  generatedAt: string;

  recommendationsEnabled: boolean;
}