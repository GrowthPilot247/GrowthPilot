import {
  getEnrollment,
  updateEnrollmentProgress,
} from "./enrollmentService";

import { EnrollmentProgress } from "../types/enrollment";

export function getCourseProgress(
  learnerId: string,
  courseId: string,
  totalLessons?: number,
): EnrollmentProgress {
  const enrollment = getEnrollment(
    learnerId,
    courseId,
  );

  if (enrollment) {
    return {
      ...enrollment.progress,

      completedLessonIds:
        enrollment.progress.completedLessonIds ?? [],
    };
  }

  return {
    completedLessons: 0,

    totalLessons: totalLessons ?? 0,

    percentage: 0,

    learningStatus: "Not Started",

    completedLessonIds: [],
  };
}

export function isLessonComplete(
  learnerId: string,
  courseId: string,
  lessonId: string,
  totalLessons?: number,
): boolean {
  const progress = getCourseProgress(
    learnerId,
    courseId,
    totalLessons,
  );

  return (
    progress.completedLessonIds?.includes(
      lessonId,
    ) ?? false
  );
}

export function markLessonComplete({
  learnerId,
  courseId,
  lessonId,
  totalLessons,
}: {
  learnerId: string;
  courseId: string;
  lessonId: string;
  totalLessons: number;
}) {
  const enrollment = getEnrollment(
    learnerId,
    courseId,
  );

  if (!enrollment) {
    throw new Error(
      "Learner is not enrolled in this course.",
    );
  }

  const existingLessonIds =
    enrollment.progress.completedLessonIds ??
    [];

  const completedLessonIds =
    existingLessonIds.includes(lessonId)
      ? existingLessonIds
      : [
          ...existingLessonIds,
          lessonId,
        ];

  const completedLessons =
    completedLessonIds.length;

  const percentage =
    totalLessons > 0
      ? Math.round(
          (completedLessons / totalLessons) *
            100,
        )
      : 0;

  const updatedEnrollment =
    updateEnrollmentProgress(
      learnerId,
      courseId,
      {
        completedLessons,

        totalLessons,

        percentage,

        completedLessonIds,

        lastLessonId: lessonId,
      },
    );

  if (!updatedEnrollment) {
    throw new Error(
      "Unable to update course progress.",
    );
  }

  const courseCompleted =
    updatedEnrollment.progress.percentage >=
    100;

  return {
    progress:
      updatedEnrollment.progress,

    lessonCompleted: true,

    courseCompleted,
  };
}