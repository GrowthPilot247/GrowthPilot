export interface CourseProgress {
  learnerId: string;
  courseId: string;
  completedLessonIds: string[];
  totalLessons: number;
  completedLessons: number;
  percentage: number;
  lastLessonId?: string;
  startedAt: string;
  lastActivityAt: string;
  completedAt?: string;
}

export interface LessonCompletionResult {
  progress: CourseProgress;
  lessonCompleted: boolean;
  courseCompleted: boolean;
}