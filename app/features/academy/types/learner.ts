export type LearnerType =
  | "GrowthPilot User"
  | "External Learner";

export type LearnerRole =
  | "Individual"
  | "Entrepreneur"
  | "Professional"
  | "Manager"
  | "Executive"
  | "CEO"
  | "Consultant"
  | "Student";

export type LearningGoal =
  | "Business Growth"
  | "Leadership"
  | "Strategy"
  | "Marketing"
  | "Sales"
  | "Finance"
  | "Operations"
  | "People & Culture"
  | "AI & Digital Transformation"
  | "Innovation"
  | "Executive Development"
  | "Entrepreneurship"
  | "GrowthPilot Certification";

export type LearningStatus =
  | "Active"
  | "Completed"
  | "Paused"
  | "Not Started";

export interface LearnerProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;

  learnerType: LearnerType;
  role: LearnerRole;

  organizationName?: string;
  industry?: string;

  learningGoals: LearningGoal[];

  enrolledCourseIds: string[];
  completedCourseIds: string[];

  activeCourseId?: string;
  lastLessonId?: string;

  totalCoursesCompleted: number;
  totalLessonsCompleted: number;
  totalLearningMinutes: number;

  overallProgress: number;

  currentLearningStreak: number;
  longestLearningStreak: number;

  certificatesEarned: number;

  learningStatus: LearningStatus;

  growthDimensions: {
    strategic: number;
    operational: number;
    financial: number;
    customer: number;
    people: number;
    innovation: number;
    ecosystem: number;
  };

  aiLearningRecommendationsEnabled: boolean;

  createdAt: string;
  lastActivityAt: string;
}

export interface LearnerCourseSummary {
  courseId: string;
  title: string;

  progress: number;

  completedLessons: number;
  totalLessons: number;

  status: LearningStatus;

  lastLessonId?: string;
  lastLessonTitle?: string;

  certificateAvailable: boolean;
  certificateEarned: boolean;

  aiRecommended?: boolean;
  relevanceScore?: number;
}

export interface LearnerCertificate {
  id: string;
  courseId: string;
  courseTitle: string;

  issuedAt: string;

  certificateNumber: string;

  credentialType:
    | "Course Certificate"
    | "Professional Certificate"
    | "GrowthPilot Certification";

  status:
    | "Issued"
    | "Pending"
    | "Revoked";
}

export interface LearnerDashboardData {
  learner: LearnerProfile;

  activeCourse?: LearnerCourseSummary;

  courses: LearnerCourseSummary[];

  certificates: LearnerCertificate[];

  recommendedCourses: LearnerCourseSummary[];

  recentActivity: LearnerActivity[];

  learningPaths: LearnerLearningPath[];
}

export interface LearnerActivity {
  id: string;

  type:
    | "Course Started"
    | "Lesson Completed"
    | "Course Completed"
    | "Certificate Earned"
    | "AI Recommendation";

  title: string;
  description: string;

  courseId?: string;

  createdAt: string;
}

export interface LearnerLearningPath {
  id: string;
  title: string;
  description: string;

  level: number;

  courseIds: string[];

  completedCourses: number;
  totalCourses: number;

  progress: number;

  status:
    | "Not Started"
    | "In Progress"
    | "Completed";
}