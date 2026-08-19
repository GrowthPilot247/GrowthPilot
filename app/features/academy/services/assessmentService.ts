import {
  getAssessment,
} from "../data/assessment";

import {
  getAssessmentRequirement,
} from "../data/assessmentRequirements";

import {
  calculateAssessmentScore,
} from "./assessmentEngine";

import type {
  AssessmentAnswer,
  AssessmentAttempt,
  AssessmentResult,
} from "../types/assessment";

const assessmentAttempts: AssessmentAttempt[] = [];

export function getCourseAssessment(
  courseId: string,
) {
  return getAssessment(courseId);
}

export function getCourseAssessmentRequirement(
  courseId: string,
) {
  return getAssessmentRequirement(courseId);
}

export function getLearnerAssessmentAttempts(
  learnerId: string,
  assessmentId: string,
): AssessmentAttempt[] {
  return assessmentAttempts.filter(
    (attempt) =>
      attempt.learnerId === learnerId &&
      attempt.assessmentId === assessmentId,
  );
}

export function startAssessment(
  learnerId: string,
  courseId: string,
): AssessmentAttempt {
  const assessment =
    getAssessment(courseId);

  if (!assessment) {
    throw new Error(
      "Assessment not found for this course.",
    );
  }

  const requirement =
    getAssessmentRequirement(courseId);

  const existingAttempts =
    getLearnerAssessmentAttempts(
      learnerId,
      assessment.id,
    );

  if (
    requirement?.maxAttempts !== undefined &&
    existingAttempts.length >=
      requirement.maxAttempts
  ) {
    throw new Error(
      "Maximum assessment attempts reached.",
    );
  }

  const attempt: AssessmentAttempt = {
    id: `assessment-attempt-${Date.now()}`,
    assessmentId: assessment.id,
    learnerId,
    attemptNumber:
      existingAttempts.length + 1,
    status: "In Progress",
    answers: [],
    startedAt:
      new Date().toISOString(),
  };

  assessmentAttempts.push(attempt);

  return attempt;
}

export function submitAssessment(
  learnerId: string,
  courseId: string,
  answers: AssessmentAnswer[],
): AssessmentResult {
  const assessment =
    getAssessment(courseId);

  if (!assessment) {
    throw new Error(
      "Assessment not found for this course.",
    );
  }

  const attempts =
    getLearnerAssessmentAttempts(
      learnerId,
      assessment.id,
    );

  const activeAttempt =
    [...attempts]
      .reverse()
      .find(
        (attempt) =>
          attempt.status ===
          "In Progress",
      );

  if (!activeAttempt) {
    throw new Error(
      "No active assessment attempt found.",
    );
  }

  const result =
    calculateAssessmentScore(
      assessment,
      answers,
    );

  result.learnerId = learnerId;
  result.attemptNumber =
    activeAttempt.attemptNumber;

  activeAttempt.answers = answers;
  activeAttempt.score = result.score;
  activeAttempt.status = result.passed
    ? "Passed"
    : "Failed";
  activeAttempt.completedAt =
    result.completedAt;

  return result;
}

export function hasPassedAssessment(
  learnerId: string,
  courseId: string,
): boolean {
  const assessment =
    getAssessment(courseId);

  if (!assessment) {
    return false;
  }

  return getLearnerAssessmentAttempts(
    learnerId,
    assessment.id,
  ).some(
    (attempt) =>
      attempt.status === "Passed",
  );
}
