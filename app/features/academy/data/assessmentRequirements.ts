export interface AssessmentRequirement {
  courseId: string;
  required: boolean;
  passingScore: number;
  maxAttempts?: number;
  timeLimitMinutes?: number;
}

export const assessmentRequirements: AssessmentRequirement[] = [
  {
    courseId: "growth-framework-foundations",
    required: true,
    passingScore: 70,
    maxAttempts: 3,
  },

  {
    courseId: "business-growth-strategy",
    required: true,
    passingScore: 70,
    maxAttempts: 3,
  },

  {
    courseId: "customer-retention-strategy",
    required: true,
    passingScore: 70,
    maxAttempts: 3,
  },

  {
    courseId: "executive-intelligence",
    required: true,
    passingScore: 70,
    maxAttempts: 3,
  },

  {
    courseId: "ai-business-transformation",
    required: true,
    passingScore: 70,
    maxAttempts: 3,
  },

  {
    courseId: "high-performance-teams",
    required: true,
    passingScore: 70,
    maxAttempts: 3,
  },
];

export function getAssessmentRequirement(
  courseId: string,
): AssessmentRequirement | undefined {
  return assessmentRequirements.find(
    (requirement) =>
      requirement.courseId === courseId,
  );
}

export function isAssessmentRequired(
  courseId: string,
): boolean {
  return (
    getAssessmentRequirement(courseId)?.required ??
    false
  );
}
