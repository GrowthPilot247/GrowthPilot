import { academyCourses } from "../data/courses";

import {
  getEnrollment,
} from "./enrollmentService";

import {
  getCourseAssessment,
  getLearnerAssessmentAttempts,
} from "./assessmentService";

import {
  evaluateCourseCompletion,
} from "./courseCompletionService";

import type {
  AcademyCertificate,
  CertificateCredentialType,
} from "../types/certificate";

/**
 * In-memory certificate store.
 *
 * This is the Academy prototype persistence layer.
 * It can later be replaced with a database-backed repository
 * without changing the certificate API used by the UI.
 */
const academyCertificates: AcademyCertificate[] = [];

/**
 * Returns all certificates issued to a learner.
 */
export function getLearnerCertificates(
  learnerId: string,
): AcademyCertificate[] {
  return academyCertificates.filter(
    (certificate) =>
      certificate.learnerId === learnerId,
  );
}

/**
 * Returns all certificates issued for a course.
 */
export function getCourseCertificates(
  courseId: string,
): AcademyCertificate[] {
  return academyCertificates.filter(
    (certificate) =>
      certificate.courseId === courseId,
  );
}

/**
 * Finds a certificate for a specific learner and course.
 */
export function getCertificate(
  learnerId: string,
  courseId: string,
): AcademyCertificate | undefined {
  return academyCertificates.find(
    (certificate) =>
      certificate.learnerId === learnerId &&
      certificate.courseId === courseId &&
      certificate.status === "Issued",
  );
}

/**
 * Finds an issued certificate by its internal ID.
 */
export function getCertificateById(
  certificateId: string,
): AcademyCertificate | undefined {
  return academyCertificates.find(
    (certificate) =>
      certificate.id === certificateId &&
      certificate.status === "Issued",
  );
}

/**
 * Finds a certificate using its public verification code.
 */
export function getCertificateByVerificationCode(
  verificationCode: string,
): AcademyCertificate | undefined {
  return academyCertificates.find(
    (certificate) =>
      certificate.verificationCode ===
        verificationCode &&
      certificate.status === "Issued",
  );
}

/**
 * Generates a certificate number.
 *
 * Example:
 * GP-CERT-2026-8F4A21C9
 */
function generateCertificateNumber(): string {
  const year = new Date().getFullYear();

  const randomPart =
    Math.random()
      .toString(16)
      .slice(2, 10)
      .toUpperCase();

  return `GP-CERT-${year}-${randomPart}`;
}

/**
 * Generates the public verification identifier.
 *
 * Example:
 * GPV-8F4A21C9D2
 */
function generateVerificationCode(): string {
  const randomPart =
    `${Date.now().toString(36)}${Math.random()
      .toString(36)
      .slice(2, 8)}`
      .toUpperCase();

  return `GPV-${randomPart}`;
}

/**
 * Determines the credential type for a course.
 *
 * GrowthPilot-branded certification courses use
 * the GrowthPilot Certification credential type.
 * Other certificate-enabled courses use Course Certificate.
 */
function getCredentialType(
  certificationName?: string,
): CertificateCredentialType {
  if (
    certificationName
      ?.toLowerCase()
      .includes("growthpilot")
  ) {
    return "GrowthPilot Certification";
  }

  return "Course Certificate";
}

/**
 * Gets the most recent passed assessment score
 * for a learner and course.
 */
function getPassedAssessmentScore(
  learnerId: string,
  courseId: string,
): number | undefined {
  const assessment =
    getCourseAssessment(courseId);

  if (!assessment) {
    return undefined;
  }

  const attempts =
    getLearnerAssessmentAttempts(
      learnerId,
      assessment.id,
    );

  const passedAttempts =
    attempts.filter(
      (attempt) =>
        attempt.status === "Passed",
    );

  if (passedAttempts.length === 0) {
    return undefined;
  }

  const latestPassedAttempt =
    passedAttempts[
      passedAttempts.length - 1
    ];

  return latestPassedAttempt.score;
}

/**
 * Issues a certificate after verifying that the
 * learner has satisfied every course requirement.
 *
 * This function is intentionally idempotent:
 * if the learner already has an issued certificate
 * for the course, that certificate is returned instead
 * of creating a duplicate.
 */
export function issueCourseCertificate(
  learnerId: string,
  courseId: string,
): AcademyCertificate {
  const existingCertificate =
    getCertificate(
      learnerId,
      courseId,
    );

  if (existingCertificate) {
    return existingCertificate;
  }

  const course =
    academyCourses.find(
      (academyCourse) =>
        academyCourse.id === courseId,
    );

  if (!course) {
    throw new Error(
      "Course not found.",
    );
  }

  if (!course.certificateAvailable) {
    throw new Error(
      "This course does not offer a certificate.",
    );
  }

  const enrollment =
    getEnrollment(
      learnerId,
      courseId,
    );

  if (!enrollment) {
    throw new Error(
      "Learner is not enrolled in this course.",
    );
  }

  const completionStatus =
    evaluateCourseCompletion(
      learnerId,
      courseId,
    );

  if (
    !completionStatus.courseCompleted
  ) {
    switch (
      completionStatus.reason
    ) {
      case "Lessons incomplete":
        throw new Error(
          "All course lessons must be completed before a certificate can be issued.",
        );

      case "Assessment required":
        throw new Error(
          "A required assessment must be completed before a certificate can be issued.",
        );

      case "Assessment not passed":
        throw new Error(
          "The required assessment must be passed before a certificate can be issued.",
        );

      default:
        throw new Error(
          "Course completion requirements have not been satisfied.",
        );
    }
  }

  if (
    !completionStatus.certificateEligible
  ) {
    throw new Error(
      "Learner is not eligible for a certificate.",
    );
  }

  const issuedAt =
    new Date().toISOString();

  const certificate: AcademyCertificate = {
    id: `certificate-${Date.now()}`,

    learnerId,

    courseId,

    courseTitle: course.title,

    certificateNumber:
      generateCertificateNumber(),

    credentialType:
      getCredentialType(
        course.certificationName,
      ),

    status: "Issued",

    issuedAt,

    assessmentScore:
      getPassedAssessmentScore(
        learnerId,
        courseId,
      ),

    completedAt: issuedAt,

    verificationCode:
      generateVerificationCode(),
  };

  academyCertificates.push(
    certificate,
  );

  enrollment.certificateIssued =
    true;

  enrollment.certificateEligible =
    true;

  return certificate;
}

/**
 * Checks whether a learner has earned
 * a certificate for a course.
 */
export function hasCourseCertificate(
  learnerId: string,
  courseId: string,
): boolean {
  return (
    getCertificate(
      learnerId,
      courseId,
    ) !== undefined
  );
}

/**
 * Checks whether a learner is eligible
 * to receive a certificate.
 *
 * This does not issue the certificate.
 */
export function isEligibleForCourseCertificate(
  learnerId: string,
  courseId: string,
): boolean {
  const course =
    academyCourses.find(
      (academyCourse) =>
        academyCourse.id === courseId,
    );

  if (!course) {
    return false;
  }

  if (!course.certificateAvailable) {
    return false;
  }

  return evaluateCourseCompletion(
    learnerId,
    courseId,
  ).certificateEligible;
}

/**
 * Revokes an issued certificate.
 */
export function revokeCertificate(
  certificateId: string,
): AcademyCertificate | undefined {
  const certificate =
    academyCertificates.find(
      (item) =>
        item.id === certificateId,
    );

  if (!certificate) {
    return undefined;
  }

  certificate.status = "Revoked";

  return certificate;
}

/**
 * Verifies a certificate using its public
 * verification code.
 */
export function verifyCertificate(
  verificationCode: string,
): AcademyCertificate | undefined {
  const certificate =
    getCertificateByVerificationCode(
      verificationCode,
    );

  if (!certificate) {
    return undefined;
  }

  if (certificate.status !== "Issued") {
    return undefined;
  }

  return certificate;
}
