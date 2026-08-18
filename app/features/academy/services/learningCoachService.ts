import { academyCourses } from "../data/courses";
import {
  getLearnerEnrollments,
} from "./enrollmentService";
import {
  generateRecommendations,
} from "./recommendationService";

import {
  LearnerProfile,
} from "../types/learner";

import {
  LearningCoach,
  LearningCoachPriority,
  LearningIntervention,
  LearningPriority,
  NextLearningRecommendation,
} from "../types/learningCoach";

function getPriority(
  score: number,
): LearningCoachPriority {
  if (score >= 90) {
    return "Critical";
  }

  if (score >= 80) {
    return "High";
  }

  if (score >= 65) {
    return "Medium";
  }

  return "Low";
}

function getCourse(
  courseId: string,
) {
  return academyCourses.find(
    (course) => course.id === courseId,
  );
}

function getCurrentIntervention(
  learner: LearnerProfile,
): LearningIntervention | undefined {
  const enrollments =
    getLearnerEnrollments(learner.id);

  const activeEnrollment =
    enrollments
      .filter(
        (enrollment) =>
          enrollment.enrollmentStatus ===
          "Active",
      )
      .filter(
        (enrollment) =>
          enrollment.progress.learningStatus !==
          "Completed",
      )
      .sort(
        (a, b) =>
          b.progress.percentage -
          a.progress.percentage,
      )[0];

  if (!activeEnrollment) {
    return undefined;
  }

  const course = getCourse(
    activeEnrollment.courseId,
  );

  if (!course) {
    return undefined;
  }

  const relevanceScore =
    activeEnrollment.aiRecommended
      ? 94
      : 75;

  const priority =
    getPriority(
      relevanceScore,
    );

  const isInProgress =
    activeEnrollment.progress.percentage >
    0;

  const action =
    isInProgress
      ? "Continue Course"
      : "Start Course";

  const actionLabel =
    isInProgress
      ? "Continue Course"
      : "Start Course";

  return {
    courseId:
      activeEnrollment.courseId,

    courseTitle:
      course.title,

    category:
      course.category,

    relevanceScore,

    priority,

    action,

    actionLabel,

    isEnrolled: true,

    isInProgress,

    progress:
      activeEnrollment.progress.percentage,

    recommendationReason:
      activeEnrollment.aiRecommendationReason ??
      `This course supports the ${course.growthDimension} capability in your learning journey.`,

    identifiedChallenge:
      activeEnrollment.businessContext
        ?.identifiedChallenge,

    growthDimension:
      activeEnrollment.businessContext
        ?.growthDimension ??
      course.growthDimension,

    expectedCapabilityImprovement:
      getCapabilityImprovement(
        course.growthDimension,
      ),

    businessImpact:
      getBusinessImpact(
        course.growthDimension,
      ),
  };
}

function getCapabilityImprovement(
  growthDimension: string,
): string {
  switch (growthDimension) {
    case "Customer Growth":
      return "Strengthen customer retention, loyalty, relationships, and long-term customer value.";

    case "Strategic Growth":
      return "Strengthen strategic thinking, planning, decision-making, and sustainable growth capabilities.";

    case "Operational Growth":
      return "Strengthen operational effectiveness, execution, systems, and business performance.";

    case "Financial Growth":
      return "Strengthen financial understanding, business economics, and financially sustainable growth.";

    case "People Growth":
      return "Strengthen leadership, team performance, organizational capability, and people development.";

    case "Innovation Growth":
      return "Strengthen innovation, AI adoption, digital transformation, and future-ready business capability.";

    case "Ecosystem Growth":
      return "Strengthen partnerships, networks, market relationships, and ecosystem development.";

    default:
      return "Strengthen practical capabilities for sustainable business growth.";
  }
}

function getBusinessImpact(
  growthDimension: string,
): string {
  switch (growthDimension) {
    case "Customer Growth":
      return "Improve customer relationships, retention, loyalty, and long-term customer value.";

    case "Strategic Growth":
      return "Improve strategic clarity, execution quality, and sustainable business growth.";

    case "Operational Growth":
      return "Improve operational performance, execution consistency, and organizational efficiency.";

    case "Financial Growth":
      return "Improve financial decision-making and the economic sustainability of business growth.";

    case "People Growth":
      return "Improve leadership effectiveness, team capability, and organizational performance.";

    case "Innovation Growth":
      return "Improve innovation capacity and the ability to apply emerging technology to business.";

    case "Ecosystem Growth":
      return "Improve strategic relationships, partnerships, and ecosystem opportunities.";

    default:
      return "Improve overall business growth capability.";
  }
}

function getCurrentPriority(
  intervention:
    | LearningIntervention
    | undefined,
): LearningPriority | undefined {
  if (!intervention) {
    return undefined;
  }

  return {
    id: `priority-${intervention.courseId}`,

    title:
      intervention.growthDimension,

    growthDimension:
      intervention.growthDimension,

    priority:
      intervention.priority,

    score:
      intervention.relevanceScore,

    identifiedChallenge:
      intervention.identifiedChallenge,

    explanation:
      intervention.recommendationReason,

    capabilityGap:
      intervention.identifiedChallenge
        ? `Capability development is needed to address ${intervention.identifiedChallenge.toLowerCase()}.`
        : `Further development is recommended in ${intervention.growthDimension}.`,

    expectedImprovement:
      intervention.expectedCapabilityImprovement,

    businessImpact:
      intervention.businessImpact,
  };
}

function getNextRecommendations(
  learner: LearnerProfile,
  limit = 3,
): NextLearningRecommendation[] {
  const result =
    generateRecommendations(
      learner,
    );

  return result.recommendations
    .slice(0, limit)
    .map((recommendation) => ({
      courseId:
        recommendation.courseId,

      courseTitle:
        recommendation.courseTitle,

      category:
        recommendation.category,

      relevanceScore:
        recommendation.relevanceScore,

      growthDimension:
        recommendation.growthDimension,

      reason:
        recommendation.recommendationReason,

      action: "Start Course",

      actionLabel:
        "Start Course",
    }));
}

export function generateLearningCoach(
  learner: LearnerProfile,
): LearningCoach {
  const recommendationsEnabled =
    learner.aiLearningRecommendationsEnabled;

  if (!recommendationsEnabled) {
    return {
      learnerId: learner.id,

      learnerType:
        learner.learnerType,

      source:
        learner.learnerType ===
        "GrowthPilot User"
          ? "GrowthPilot Intelligence"
          : "Academy Intelligence",

      greeting:
        `Welcome back, ${learner.firstName}.`,

      headline:
        "Your Learning Journey",

      summary:
        "AI learning recommendations are currently disabled.",

      currentPriority:
        undefined,

      currentIntervention:
        undefined,

      nextRecommendations: [],

      generatedAt:
        new Date().toISOString(),

      recommendationsEnabled:
        false,
    };
  }

  const currentIntervention =
    getCurrentIntervention(
      learner,
    );

  const currentPriority =
    getCurrentPriority(
      currentIntervention,
    );

  const nextRecommendations =
    getNextRecommendations(
      learner,
    );

  const source =
    learner.learnerType ===
    "GrowthPilot User"
      ? "GrowthPilot Intelligence"
      : "Academy Intelligence";

  const headline =
    currentIntervention
      ? "Your current learning priority"
      : "Your next learning opportunities";

  const summary =
    currentIntervention
      ? learner.learnerType ===
        "GrowthPilot User"
        ? "GrowthPilot identified a capability opportunity in your business and connected it to your Academy learning journey."
        : "Your current Academy enrollment represents an important opportunity to strengthen your business capabilities."
      : "Based on your profile, learning goals, and Academy learning history, these courses are strong candidates for your next development step.";

  return {
    learnerId:
      learner.id,

    learnerType:
      learner.learnerType,

    source,

    greeting:
      `Welcome back, ${learner.firstName}.`,

    headline,

    summary,

    currentPriority,

    currentIntervention,

    nextRecommendations,

    generatedAt:
      new Date().toISOString(),

    recommendationsEnabled: true,
  };
}