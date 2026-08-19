import {
  getEnrollment,
  updateEnrollmentProgress,
} from "./enrollmentService";

import {
  getCourseAssessment,
  hasPassedAssessment,
} from "./assessmentService";

export interface CourseCompletionStatus {
  learnerId: string;
  courseId: string;

  courseExists: boolean;
  enrolled: boolean;

  progressPercentage: number;
  lessonsCompleted: number;
  totalLessons: number;

  assessmentRequired: boolean;
  assessmentExists: boolean;
  assessmentPassed: boolean;

  courseCompleted: boolean;
  certificateEligible: boolean;

  reason:
    | "Course not found"
    | "Learner not enrolled"
    | "Lessons incomplete"
    | "Assessment required"
    | "Assessment not passed"
    | "Completed";
}

/**
 * Determines whether a learner has satisfied
 * all requirements for completing a course.
 *
 * Course completion is based on:
 *
 * 1. Valid enrollment
 * 2. 100% lesson completion
 * 3. Required assessment passed, when applicable
 */
export function getCourseCompletionStatus(
  learnerId: string,
  courseId: string,
): CourseCompletionStatus {
  const enrollment = getEnrollment(
    learnerId,
    courseId,
  );

  if (!enrollment) {
    return {
      learnerId,
      courseId,

      courseExists: false,
      enrolled: false,

      progressPercentage: 0,
      lessonsCompleted: 0,
      totalLessons: 0,

      assessmentRequired: false,
      assessmentExists: false,
      assessmentPassed: false,

      courseCompleted: false,
      certificateEligible: false,

      reason: "Learner not enrolled",
    };
  }

  const assessment =
    getCourseAssessment(courseId);

  const assessmentRequired =
    assessment?.required ?? false;

  const assessmentExists =
    assessment !== undefined;

  const assessmentPassed =
    assessmentExists
      ? hasPassedAssessment(
          learnerId,
          courseId,
        )
      : false;

  const progress =
    enrollment.progress;

  const lessonsComplete =
    progress.totalLessons > 0 &&
    progress.completedLessons >=
      progress.totalLessons;

  const progressPercentage =
    progress.percentage;

  if (!lessonsComplete) {
    return {
      learnerId,
      courseId,

      courseExists: true,
      enrolled: true,

      progressPercentage,
      lessonsCompleted:
        progress.completedLessons,
      totalLessons:
        progress.totalLessons,

      assessmentRequired,
      assessmentExists,
      assessmentPassed,

      courseCompleted: false,
      certificateEligible: false,

      reason: "Lessons incomplete",
    };
  }

  if (
    assessmentRequired &&
    !assessmentExists
  ) {
    return {
      learnerId,
      courseId,

      courseExists: true,
      enrolled: true,

      progressPercentage,
      lessonsCompleted:
        progress.completedLessons,
      totalLessons:
        progress.totalLessons,

      assessmentRequired,
      assessmentExists,
      assessmentPassed,

      courseCompleted: false,
      certificateEligible: false,

      reason: "Assessment required",
    };
  }

  if (
    assessmentRequired &&
    !assessmentPassed
  ) {
    return {
      learnerId,
      courseId,

      courseExists: true,
      enrolled: true,

      progressPercentage,
      lessonsCompleted:
        progress.completedLessons,
      totalLessons:
        progress.totalLessons,

      assessmentRequired,
      assessmentExists,
      assessmentPassed,

      courseCompleted: false,
      certificateEligible: false,

      reason: "Assessment not passed",
    };
  }

  return {
    learnerId,
    courseId,

    courseExists: true,
    enrolled: true,

    progressPercentage: 100,
    lessonsCompleted:
      progress.totalLessons,
    totalLessons:
      progress.totalLessons,

    assessmentRequired,
    assessmentExists,
    assessmentPassed,

    courseCompleted: true,
    certificateEligible: true,

    reason: "Completed",
  };
}

/**
 * Evaluates the learner's course completion state
 * and synchronizes the enrollment when all requirements
 * have been satisfied.
 */
export function evaluateCourseCompletion(
  learnerId: string,
  courseId: string,
): CourseCompletionStatus {
  const status =
    getCourseCompletionStatus(
      learnerId,
      courseId,
    );

  if (
    !status.enrolled ||
    !status.courseCompleted
  ) {
    return status;
  }

  const enrollment = getEnrollment(
    learnerId,
    courseId,
  );

  if (!enrollment) {
    return status;
  }

  updateEnrollmentProgress(
    learnerId,
    courseId,
    {
      completedLessons:
        status.totalLessons,

      totalLessons:
        status.totalLessons,

      percentage: 100,
    },
  );

  enrollment.enrollmentStatus =
    "Completed";

  enrollment.certificateEligible =
    true;

  return {
    ...status,
    progressPercentage: 100,
    lessonsCompleted:
      status.totalLessons,
    courseCompleted: true,
    certificateEligible: true,
  };
}

/**
 * Convenience helper for checking whether
 * a learner has fully completed a course.
 */
export function isCourseCompleted(
  learnerId: string,
  courseId: string,
): boolean {
  return getCourseCompletionStatus(
    learnerId,
    courseId,
  ).courseCompleted;
}

/**
 * Convenience helper for checking whether
 * a learner is eligible to receive a certificate.
 */
export function isCertificateEligible(
  learnerId: string,
  courseId: string,
): boolean {
  return getCourseCompletionStatus(
    learnerId,
    courseId,
  ).certificateEligible;
}
