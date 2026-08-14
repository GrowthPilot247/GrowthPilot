import { academyCourses } from "../data/courses";
import { getLearnerEnrollments } from "../services/enrollmentService";
import {
  LearnerDashboardData,
  LearnerProfile,
  LearnerCourseSummary,
} from "../types/learner";

const now = new Date().toISOString();

export const demoLearner: LearnerProfile = {
  id: "gp-demo-learner-001",

  firstName: "Alex",
  lastName: "Morgan",

  email: "alex.morgan@example.com",

  learnerType: "GrowthPilot User",

  role: "Entrepreneur",

  organizationName: "Morgan Growth Ventures",

  industry: "Retail",

  learningGoals: [
    "Business Growth",
    "Strategy",
    "AI & Digital Transformation",
    "Leadership",
  ],

  enrolledCourseIds: [
    "customer-retention-strategy",
  ],

  completedCourseIds: [],

  activeCourseId:
    "customer-retention-strategy",

  lastLessonId:
    "customer-retention-lesson-03",

  totalCoursesCompleted: 0,

  totalLessonsCompleted: 3,

  totalLearningMinutes: 40,

  overallProgress: 33,

  currentLearningStreak: 4,

  longestLearningStreak: 11,

  certificatesEarned: 0,

  learningStatus: "Active",

  growthDimensions: {
    strategic: 84,
    operational: 78,
    financial: 72,
    customer: 68,
    people: 81,
    innovation: 76,
    ecosystem: 70,
  },

  aiLearningRecommendationsEnabled: true,

  createdAt: now,

  lastActivityAt:
    "2026-08-13T08:30:00.000Z",
};

export const externalDemoLearner: LearnerProfile = {
  id: "external-demo-learner-001",

  firstName: "Jordan",
  lastName: "Taylor",

  email: "jordan.taylor@example.com",

  learnerType: "External Learner",

  role: "Professional",

  industry: "Professional Services",

  learningGoals: [
    "Business Growth",
    "Leadership",
    "Strategy",
  ],

  enrolledCourseIds: [
    "growth-framework-foundations",
  ],

  completedCourseIds: [],

  activeCourseId:
    "growth-framework-foundations",

  totalCoursesCompleted: 0,

  totalLessonsCompleted: 0,

  totalLearningMinutes: 0,

  overallProgress: 0,

  currentLearningStreak: 0,

  longestLearningStreak: 0,

  certificatesEarned: 0,

  learningStatus: "Active",

  growthDimensions: {
    strategic: 0,
    operational: 0,
    financial: 0,
    customer: 0,
    people: 0,
    innovation: 0,
    ecosystem: 0,
  },

  aiLearningRecommendationsEnabled: true,

  createdAt: now,

  lastActivityAt: now,
};

function createCourseSummary(
  courseId: string,
  learnerId: string,
): LearnerCourseSummary | undefined {
  const enrollment = getLearnerEnrollments(
    learnerId,
  ).find(
    (item) => item.courseId === courseId,
  );

  const course = academyCourses.find(
    (item) => item.id === courseId,
  );

  if (!enrollment || !course) {
    return undefined;
  }

  return {
    courseId: course.id,

    title: course.title,

    progress: enrollment.progress.percentage,

    completedLessons:
      enrollment.progress.completedLessons,

    totalLessons:
      enrollment.progress.totalLessons,

    status:
      enrollment.progress.learningStatus,

    lastLessonId:
      enrollment.progress.lastLessonId,

    certificateAvailable:
      enrollment.certificateEligible ?? false,

    certificateEarned:
      enrollment.certificateIssued ?? false,

    aiRecommended:
      enrollment.aiRecommended,

    relevanceScore:
      enrollment.aiRecommended
        ? 94
        : undefined,
  };
}

function getLearnerCourseSummaries(
  learner: LearnerProfile,
): LearnerCourseSummary[] {
  const summaries = learner.enrolledCourseIds
    .map((courseId) =>
      createCourseSummary(
        courseId,
        learner.id,
      ),
    )
    .filter(
      (
        course,
      ): course is LearnerCourseSummary =>
        course !== undefined,
    );

  return summaries;
}

function getRecommendedCourses(
  learner: LearnerProfile,
): LearnerCourseSummary[] {
  const enrollments =
    getLearnerEnrollments(learner.id);

  return enrollments
    .filter(
      (enrollment) =>
        enrollment.aiRecommended === true,
    )
    .map((enrollment) =>
      createCourseSummary(
        enrollment.courseId,
        learner.id,
      ),
    )
    .filter(
      (
        course,
      ): course is LearnerCourseSummary =>
        course !== undefined,
    );
}

function createLearningPaths(
  learner: LearnerProfile,
) {
  const customerRetention =
    createCourseSummary(
      "customer-retention-strategy",
      learner.id,
    );

  return [
    {
      id: "path-growth-framework",

      title:
        "GrowthPilot Growth Framework",

      description:
        "Understand the methodology that powers the GrowthPilot ecosystem.",

      level: 1,

      courseIds: [
        "growth-framework-foundations",
      ],

      completedCourses: 0,

      totalCourses: 1,

      progress: 0,

      status: "Not Started" as const,
    },

    {
      id: "path-business-growth",

      title:
        "Business Growth Strategy",

      description:
        "Develop practical capabilities for strategic and sustainable business growth.",

      level: 2,

      courseIds: [
        "business-growth-strategy",
      ],

      completedCourses: 0,

      totalCourses: 1,

      progress: 0,

      status: "Not Started" as const,
    },

    {
      id: "path-growthpilot-one",

      title:
        "GrowthPilot One",

      description:
        "Learn how to use the unified GrowthPilot experience effectively.",

      level: 3,

      courseIds: [],

      completedCourses: 0,

      totalCourses: 0,

      progress: 0,

      status: "Not Started" as const,
    },

    {
      id: "path-executive-intelligence",

      title:
        "Executive Intelligence",

      description:
        "Strengthen executive decision-making through intelligent business insights.",

      level: 4,

      courseIds: [
        "executive-intelligence",
      ],

      completedCourses: 0,

      totalCourses: 1,

      progress: 0,

      status: "Not Started" as const,
    },

    {
      id: "path-growthpilot-products",

      title:
        "GrowthPilot Products",

      description:
        "Develop practical capability across GrowthPilot products and workflows.",

      level: 5,

      courseIds: [],

      completedCourses: 0,

      totalCourses: 0,

      progress: 0,

      status: "Not Started" as const,
    },

    ...(customerRetention
      ? [
          {
            id: "path-customer-growth",

            title:
              "Customer Growth",

            description:
              "Build the capabilities required to improve customer retention and long-term customer value.",

            level: 2,

            courseIds: [
              "customer-retention-strategy",
            ],

            completedCourses:
              customerRetention.progress >= 100
                ? 1
                : 0,

            totalCourses: 1,

            progress:
              customerRetention.progress,

            status:
              customerRetention.progress >=
              100
                ? ("Completed" as const)
                : customerRetention.progress >
                    0
                  ? ("In Progress" as const)
                  : ("Not Started" as const),
          },
        ]
      : []),
  ];
}

export const demoLearnerDashboard: LearnerDashboardData =
  buildLearnerDashboard(demoLearner);

function buildLearnerDashboard(
  learner: LearnerProfile,
): LearnerDashboardData {
  const courses =
    getLearnerCourseSummaries(learner);

  const recommendedCourses =
    getRecommendedCourses(learner);

  const activeCourse = learner.activeCourseId
    ? createCourseSummary(
        learner.activeCourseId,
        learner.id,
      )
    : undefined;

  return {
    learner,

    activeCourse,

    courses,

    certificates: [],

    recommendedCourses,

    recentActivity: [
      ...(activeCourse
        ? [
            {
              id: "activity-course-progress",

              type: "Lesson Completed" as const,

              title:
                activeCourse.lastLessonId
                  ? "Lesson progress updated"
                  : "Course progress updated",

              description:
                `${activeCourse.completedLessons} of ${activeCourse.totalLessons} lessons completed in ${activeCourse.title}.`,

              courseId:
                activeCourse.courseId,

              createdAt:
                learner.lastActivityAt,
            },
          ]
        : []),

      ...(recommendedCourses.length > 0
        ? [
            {
              id:
                "activity-ai-recommendation",

              type:
                "AI Recommendation" as const,

              title:
                recommendedCourses[0]
                  .title,

              description:
                "GrowthPilot identified this course as a relevant learning opportunity based on the learner's business context.",

              courseId:
                recommendedCourses[0]
                  .courseId,

              createdAt: now,
            },
          ]
        : []),
    ],

    learningPaths:
      createLearningPaths(learner),
  };
}

export function getLearnerDashboard(
  learnerId: string,
): LearnerDashboardData {
  if (
    learnerId ===
    externalDemoLearner.id
  ) {
    return buildLearnerDashboard(
      externalDemoLearner,
    );
  }

  return buildLearnerDashboard(
    demoLearner,
  );
}