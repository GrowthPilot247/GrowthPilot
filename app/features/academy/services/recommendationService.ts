import { academyCourses } from "../data/courses";
import { getLearnerEnrollments } from "./enrollmentService";

import {
  AIRecommendation,
  RecommendationContext,
  RecommendationPriority,
  RecommendationReason,
  RecommendationResult,
} from "../types/recommendation";

import { LearnerProfile } from "../types/learner";

function normalize(value?: string) {
  return value?.trim().toLowerCase() ?? "";
}

function calculatePriority(
  relevanceScore: number,
): RecommendationPriority {
  if (relevanceScore >= 90) {
    return "Critical";
  }

  if (relevanceScore >= 80) {
    return "High";
  }

  if (relevanceScore >= 65) {
    return "Medium";
  }

  return "Low";
}

function createReason(
  source: RecommendationReason["source"],
  title: string,
  explanation: string,
  weight: number,
): RecommendationReason {
  return {
    source,
    title,
    explanation,
    weight,
  };
}

function buildContext(
  learner: LearnerProfile,
): RecommendationContext {
  const enrollments =
    getLearnerEnrollments(learner.id);

  const businessEnrollment =
    enrollments.find(
      (enrollment) =>
        enrollment.businessContext !==
        undefined,
    );

  const businessContext =
    businessEnrollment?.businessContext;

  return {
    learnerId: learner.id,

    learnerType: learner.learnerType,

    role: learner.role,

    industry:
      learner.industry ??
      businessContext?.industry,

    department:
      businessContext?.department,

    learningGoals:
      learner.learningGoals,

    completedCourseIds:
      learner.completedCourseIds,

    enrolledCourseIds:
      learner.enrolledCourseIds,

    identifiedChallenge:
      businessContext?.identifiedChallenge,

    growthDimension:
      businessContext?.growthDimension,

    businessContextAvailable:
      businessContext !== undefined,

    aiRecommendationsEnabled:
      learner.aiLearningRecommendationsEnabled,
  };
}

function calculateRecommendation(
  context: RecommendationContext,
  course: (typeof academyCourses)[number],
): AIRecommendation | undefined {
  if (
    !context.aiRecommendationsEnabled
  ) {
    return undefined;
  }

  if (
    context.completedCourseIds.includes(
      course.id,
    )
  ) {
    return undefined;
  }

  if (
    context.enrolledCourseIds.includes(
      course.id,
    )
  ) {
    return undefined;
  }

  const reasons: RecommendationReason[] =
    [];

  let score = 20;

  const learnerGoals =
    context.learningGoals.map(normalize);

  const courseCategory =
    normalize(course.category);

  const courseDimension =
    normalize(course.growthDimension);

  const learnerIndustry =
    normalize(context.industry);

  const identifiedChallenge =
    normalize(context.identifiedChallenge);

  const learnerGrowthDimension =
    normalize(context.growthDimension);

  /*
   * Growth Dimension Match
   *
   * This is the strongest signal because the
   * GrowthPilot Academy is organized around
   * business growth capabilities.
   */
  if (
    learnerGrowthDimension &&
    learnerGrowthDimension ===
      courseDimension
  ) {
    score += 30;

    reasons.push(
      createReason(
        "Growth Dimension",
        "Growth capability match",
        `This course directly supports the ${course.growthDimension} capability identified as relevant to the learner.`,
        30,
      ),
    );
  }

  /*
   * Business Challenge Match
   */
  if (
    identifiedChallenge &&
    (
      course.title
        .toLowerCase()
        .includes(identifiedChallenge) ||
      course.description
        .toLowerCase()
        .includes(identifiedChallenge) ||
      courseCategory.includes(
        identifiedChallenge,
      )
    )
  ) {
    score += 25;

    reasons.push(
      createReason(
        "Business Context",
        "Business challenge match",
        "The course content is relevant to the business challenge identified for this learner.",
        25,
      ),
    );
  }

  /*
   * Industry Match
   */
  const courseIndustries =
    course.industries.map(normalize);

  if (
    learnerIndustry &&
    (
      courseIndustries.includes(
        learnerIndustry,
      ) ||
      courseIndustries.includes(
        "all industries",
      )
    )
  ) {
    score += 15;

    reasons.push(
      createReason(
        "Business Intelligence",
        "Industry relevance",
        `The course is relevant to the learner's ${context.industry} industry.`,
        15,
      ),
    );
  }

  /*
   * Learning Goal Match
   */
  const goalMatch =
    learnerGoals.find((goal) =>
      courseCategory.includes(goal),
    );

  if (goalMatch) {
    score += 15;

    reasons.push(
      createReason(
        "Learner Profile",
        "Learning goal match",
        "The course aligns with one of the learner's stated development goals.",
        15,
      ),
    );
  }

  /*
   * Course Relevance
   */
  if (course.aiRecommended) {
    score += 10;

    reasons.push(
      createReason(
        "Course Relevance",
        "Academy recommendation signal",
        "This course has been identified as a relevant Academy learning intervention.",
        10,
      ),
    );
  }

  /*
   * Executive / professional relevance
   */
  const professionalRoles = [
    "executive",
    "ceo",
    "manager",
    "professional",
    "entrepreneur",
    "consultant",
    "business owner",
  ];

  if (
    professionalRoles.includes(
      normalize(context.role),
    ) &&
    (
      courseCategory.includes(
        "leadership",
      ) ||
      courseCategory.includes(
        "strategy",
      ) ||
      courseCategory.includes(
        "executive",
      ) ||
      courseCategory.includes(
        "growth",
      )
    )
  ) {
    score += 5;

    reasons.push(
      createReason(
        "Learner Profile",
        "Professional relevance",
        "The course is particularly relevant to the learner's professional role.",
        5,
      ),
    );
  }

  const relevanceScore = Math.min(
    score,
    100,
  );

  /*
   * Don't surface weak recommendations.
   */
  if (relevanceScore < 40) {
    return undefined;
  }

  const priority =
    calculatePriority(
      relevanceScore,
    );

  const identifiedChallengeText =
    context.identifiedChallenge ??
    "your current business development priorities";

  const recommendationReason =
    context.businessContextAvailable &&
    context.growthDimension
      ? `GrowthPilot identified ${identifiedChallengeText.toLowerCase()} as an opportunity and this course supports ${context.growthDimension}.`
      : `This course aligns with your learning goals, professional profile, and current Academy learning journey.`;

  const expectedCapabilityImprovement =
    course.growthDimension ===
    "Customer Growth"
      ? "Strengthen customer acquisition, retention, loyalty, and long-term customer value capabilities."
      : course.growthDimension ===
          "Strategic Growth"
        ? "Strengthen strategic thinking, planning, decision-making, and sustainable growth capabilities."
        : course.growthDimension ===
            "Operational Growth"
          ? "Strengthen operational effectiveness, execution, systems, and business performance."
          : course.growthDimension ===
              "Financial Growth"
            ? "Strengthen financial understanding, business economics, and financially sustainable growth."
            : course.growthDimension ===
                "People Growth"
              ? "Strengthen leadership, team performance, organizational capability, and people development."
              : course.growthDimension ===
                  "Innovation Growth"
                ? "Strengthen innovation, AI adoption, digital transformation, and future-ready business capability."
                : course.growthDimension ===
                    "Ecosystem Growth"
                  ? "Strengthen partnerships, networks, market relationships, and ecosystem development."
                  : "Strengthen practical business capabilities relevant to sustainable growth.";

  const businessImpact =
    course.growthDimension ===
    "Customer Growth"
      ? "Improve customer relationships, retention, loyalty, and long-term customer value."
      : course.growthDimension ===
          "Strategic Growth"
        ? "Improve strategic clarity, execution quality, and sustainable business growth."
        : course.growthDimension ===
            "Operational Growth"
          ? "Improve operational performance, execution consistency, and organizational efficiency."
          : course.growthDimension ===
              "Financial Growth"
            ? "Improve financial decision-making and the economic sustainability of business growth."
            : course.growthDimension ===
                "People Growth"
              ? "Improve leadership effectiveness, team capability, and organizational performance."
              : course.growthDimension ===
                  "Innovation Growth"
                ? "Improve innovation capacity and the ability to apply emerging technology to business."
                : course.growthDimension ===
                    "Ecosystem Growth"
                  ? "Improve strategic relationships, partnerships, and ecosystem opportunities."
                  : "Improve the learner's overall business growth capability.";

  return {
    id: `recommendation-${context.learnerId}-${course.id}`,

    learnerId:
      context.learnerId,

    courseId: course.id,

    courseTitle: course.title,

    category: course.category,

    growthDimension:
      course.growthDimension,

    relevanceScore,

    priority,

    status: "New",

    headline:
      `Recommended: ${course.title}`,

    summary:
      course.description,

    recommendationReason,

    identifiedChallenge:
      context.identifiedChallenge,

    expectedCapabilityImprovement,

    businessImpact,

    industry:
      context.industry,

    businessRole:
      context.role,

    department:
      context.department,

    reasons,

    source:
      context.learnerType ===
      "GrowthPilot User"
        ? "GrowthPilot Intelligence"
        : "Academy Intelligence",

    createdAt:
      new Date().toISOString(),
  };
}

export function generateRecommendations(
  learner: LearnerProfile,
): RecommendationResult {
  const context =
    buildContext(learner);

  if (
    !context.aiRecommendationsEnabled
  ) {
    return {
      learnerId: learner.id,

      recommendations: [],

      generatedAt:
        new Date().toISOString(),

      intelligenceSource:
        learner.learnerType ===
        "GrowthPilot User"
          ? "GrowthPilot Intelligence"
          : "Academy Intelligence",

      contextSummary:
        "AI learning recommendations are disabled for this learner.",
    };
  }

  const recommendations =
    academyCourses
      .map((course) =>
        calculateRecommendation(
          context,
          course,
        ),
      )
      .filter(
        (
          recommendation,
        ): recommendation is AIRecommendation =>
          recommendation !== undefined,
      )
      .sort(
        (a, b) =>
          b.relevanceScore -
          a.relevanceScore,
      );

  const intelligenceSource =
    learner.learnerType ===
    "GrowthPilot User"
      ? "GrowthPilot Intelligence"
      : "Academy Intelligence";

  const contextSummary =
    context.businessContextAvailable &&
    context.identifiedChallenge
      ? `Recommendations were generated using the learner's business context, including the identified challenge of ${context.identifiedChallenge}.`
      : "Recommendations were generated using the learner's profile, learning goals, course history, and Academy course relevance.";

  return {
    learnerId: learner.id,

    recommendations,

    generatedAt:
      new Date().toISOString(),

    intelligenceSource,

    contextSummary,
  };
}

export function getTopRecommendation(
  learner: LearnerProfile,
): AIRecommendation | undefined {
  return generateRecommendations(
    learner,
  ).recommendations[0];
}