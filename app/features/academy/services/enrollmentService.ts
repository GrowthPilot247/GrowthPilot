import { academyEnrollments } from "../data/enrollments";
import {
  CourseEnrollment,
  EnrollmentProgress,
  EnrollmentStatus,
  LearnerType,
} from "../types/enrollment";

interface CreateEnrollmentInput {
  learnerId: string;
  learnerType: LearnerType;
  courseId: string;
  totalLessons: number;
  aiRecommended?: boolean;
  aiRecommendationReason?: string;
  businessContext?: CourseEnrollment["businessContext"];
}

export function getEnrollment(
  learnerId: string,
  courseId: string,
): CourseEnrollment | undefined {
  return academyEnrollments.find(
    (enrollment) =>
      enrollment.learnerId === learnerId &&
      enrollment.courseId === courseId,
  );
}

export function getLearnerEnrollments(
  learnerId: string,
): CourseEnrollment[] {
  return academyEnrollments.filter(
    (enrollment) => enrollment.learnerId === learnerId,
  );
}

export function getCourseEnrollments(
  courseId: string,
): CourseEnrollment[] {
  return academyEnrollments.filter(
    (enrollment) => enrollment.courseId === courseId,
  );
}

export function isEnrolled(
  learnerId: string,
  courseId: string,
): boolean {
  const enrollment = getEnrollment(learnerId, courseId);

  return (
    enrollment !== undefined &&
    enrollment.enrollmentStatus !== "Cancelled"
  );
}

export function getCourseProgress(
  learnerId: string,
  courseId: string,
): EnrollmentProgress | undefined {
  return getEnrollment(learnerId, courseId)?.progress;
}

export function getEnrollmentStatus(
  learnerId: string,
  courseId: string,
): EnrollmentStatus | undefined {
  return getEnrollment(learnerId, courseId)?.enrollmentStatus;
}

export function createEnrollment(
  input: CreateEnrollmentInput,
): CourseEnrollment {
  const existingEnrollment = getEnrollment(
    input.learnerId,
    input.courseId,
  );

  if (existingEnrollment) {
    return existingEnrollment;
  }

  const enrollment: CourseEnrollment = {
    id: `enrollment-${Date.now()}`,
    learnerId: input.learnerId,
    learnerType: input.learnerType,
    courseId: input.courseId,

    enrolledAt: new Date().toISOString(),

    enrollmentStatus: "Active",

    progress: {
      completedLessons: 0,
      totalLessons: input.totalLessons,
      percentage: 0,
      learningStatus: "Not Started",
    },

    certificateEligible: false,
    certificateIssued: false,

    aiRecommended: input.aiRecommended ?? false,
    aiRecommendationReason: input.aiRecommendationReason,

    businessContext: input.businessContext,
  };

  academyEnrollments.push(enrollment);

  return enrollment;
}

export function updateEnrollmentProgress(
  learnerId: string,
  courseId: string,
  progress: Partial<EnrollmentProgress>,
): CourseEnrollment | undefined {
  const enrollment = getEnrollment(learnerId, courseId);

  if (!enrollment) {
    return undefined;
  }

  enrollment.progress = {
    ...enrollment.progress,
    ...progress,
  };

  if (enrollment.progress.totalLessons > 0) {
    enrollment.progress.percentage = Math.round(
      (enrollment.progress.completedLessons /
        enrollment.progress.totalLessons) *
        100,
    );
  }

  if (enrollment.progress.percentage >= 100) {
    enrollment.progress.percentage = 100;
    enrollment.progress.learningStatus = "Completed";
    enrollment.enrollmentStatus = "Completed";
    enrollment.certificateEligible = true;
  } else if (enrollment.progress.percentage > 0) {
    enrollment.progress.learningStatus = "In Progress";
    enrollment.enrollmentStatus = "Active";
  }

  enrollment.progress.lastAccessedAt =
    new Date().toISOString();

  return enrollment;
}

export function cancelEnrollment(
  learnerId: string,
  courseId: string,
): CourseEnrollment | undefined {
  const enrollment = getEnrollment(learnerId, courseId);

  if (!enrollment) {
    return undefined;
  }

  enrollment.enrollmentStatus = "Cancelled";

  return enrollment;
}