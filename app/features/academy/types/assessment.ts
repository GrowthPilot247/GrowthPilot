export type AssessmentQuestionType =
  | "Multiple Choice";

export type AssessmentAttemptStatus =
  | "In Progress"
  | "Passed"
  | "Failed";

export interface AssessmentOption {
  id: string;
  text: string;
}

export interface AssessmentQuestion {
  id: string;
  question: string;
  type: AssessmentQuestionType;
  options: AssessmentOption[];
  correctOptionId: string;
  explanation?: string;
  lessonId?: string;
  points?: number;
}

export interface Assessment {
  id: string;
  courseId: string;
  title: string;
  description: string;
  questions: AssessmentQuestion[];
  passingScore: number;
  maxAttempts?: number;
  timeLimitMinutes?: number;
  required: boolean;
}

export interface AssessmentAnswer {
  questionId: string;
  selectedOptionId: string;
}

export interface AssessmentResult {
  assessmentId: string;
  learnerId: string;
  attemptNumber: number;
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  passed: boolean;
  answers: AssessmentAnswer[];
  completedAt: string;
}

export interface AssessmentAttempt {
  id: string;
  assessmentId: string;
  learnerId: string;
  attemptNumber: number;
  status: AssessmentAttemptStatus;
  answers: AssessmentAnswer[];
  score?: number;
  startedAt: string;
  completedAt?: string;
}
