export type RecommendationSource =
  | "Business Intelligence"
  | "Learner Profile"
  | "Learning History"
  | "Business Context"
  | "Growth Dimension"
  | "Course Relevance";

export type RecommendationPriority =
  | "Critical"
  | "High"
  | "Medium"
  | "Low";

export type RecommendationStatus =
  | "New"
  | "Viewed"
  | "Accepted"
  | "Dismissed"
  | "Completed";

export interface RecommendationReason {
  source: RecommendationSource;

  title: string;

  explanation: string;

  weight: number;
}

export interface AIRecommendation {
  id: string;

  learnerId: string;

  courseId: string;

  courseTitle: string;

  category: string;

  growthDimension: string;

  relevanceScore: number;

  priority: RecommendationPriority;

  status: RecommendationStatus;

  headline: string;

  summary: string;

  recommendationReason: string;

  identifiedChallenge?: string;

  expectedCapabilityImprovement?: string;

  businessImpact?: string;

  industry?: string;

  businessRole?: string;

  department?: string;

  reasons: RecommendationReason[];

  source:
    | "GrowthPilot Intelligence"
    | "Academy Intelligence";

  createdAt: string;

  viewedAt?: string;

  acceptedAt?: string;

  completedAt?: string;
}

export interface RecommendationContext {
  learnerId: string;

  learnerType:
    | "GrowthPilot User"
    | "External Learner";

  role?: string;

  industry?: string;

  department?: string;

  learningGoals: string[];

  completedCourseIds: string[];

  enrolledCourseIds: string[];

  identifiedChallenge?: string;

  growthDimension?: string;

  businessContextAvailable: boolean;

  aiRecommendationsEnabled: boolean;
}

export interface RecommendationResult {
  learnerId: string;

  recommendations: AIRecommendation[];

  generatedAt: string;

  intelligenceSource:
    | "GrowthPilot Intelligence"
    | "Academy Intelligence";

  contextSummary: string;
}