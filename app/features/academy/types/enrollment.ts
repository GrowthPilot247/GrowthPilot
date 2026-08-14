export type LearnerType =
  | "GrowthPilot User"
  | "External Learner";

export type EnrollmentStatus =
  | "Active"
  | "Completed"
  | "Paused"
  | "Cancelled";

export type LearningStatus =
  | "Not Started"
  | "In Progress"
  | "Completed";

export interface EnrollmentProgress {
  completedLessons: number;
  totalLessons: number;
  percentage: number;
  learningStatus: LearningStatus;

  /**
   * Individual lessons completed by the learner.
   * This allows the Course Player to display
   * completion state for each lesson.
   */
  completedLessonIds?: string[];

  lastLessonId?: string;
  lastAccessedAt?: string;
}

export interface CourseEnrollment {
  id: string;

  learnerId: string;

  learnerType: LearnerType;

  courseId: string;

  enrolledAt: string;

  enrollmentStatus: EnrollmentStatus;

  progress: EnrollmentProgress;

  certificateEligible?: boolean;

  certificateIssued?: boolean;

  certificateId?: string;

  aiRecommended?: boolean;

  aiRecommendationReason?: string;

  businessContext?: {
    industry?: string;
    businessRole?: string;
    department?: string;
    identifiedChallenge?: string;
    growthDimension?: string;
  };
}