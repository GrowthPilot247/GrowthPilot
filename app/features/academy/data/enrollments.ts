import { CourseEnrollment } from "../types/enrollment";

export const academyEnrollments: CourseEnrollment[] = [
  {
    id: "enrollment-gp-demo-001",

    learnerId: "gp-demo-learner-001",

    learnerType: "GrowthPilot User",

    courseId: "customer-retention-strategy",

    enrolledAt: "2026-08-10T09:00:00.000Z",

    enrollmentStatus: "Active",

    progress: {
      completedLessons: 3,

      totalLessons: 9,

      percentage: 33,

      learningStatus: "In Progress",

      completedLessonIds: [
        "customer-retention-lesson-01",
        "customer-retention-lesson-02",
        "customer-retention-lesson-03",
      ],

      lastLessonId:
        "customer-retention-lesson-03",

      lastAccessedAt:
        "2026-08-13T08:30:00.000Z",
    },

    certificateEligible: false,

    certificateIssued: false,

    aiRecommended: true,

    aiRecommendationReason:
      "GrowthPilot identified customer retention as an opportunity for improvement and recommended this course to strengthen long-term customer value capabilities.",

    businessContext: {
      industry: "Retail",

      businessRole: "Business Owner",

      department: "Customer Success",

      identifiedChallenge:
        "Low customer retention",

      growthDimension:
        "Customer Growth",
    },
  },

  {
    id: "enrollment-external-demo-001",

    learnerId: "external-demo-learner-001",

    learnerType: "External Learner",

    courseId: "growth-framework-foundations",

    enrolledAt: "2026-08-12T10:00:00.000Z",

    enrollmentStatus: "Active",

    progress: {
      completedLessons: 0,

      totalLessons: 8,

      percentage: 0,

      learningStatus: "Not Started",

      completedLessonIds: [],
    },

    certificateEligible: false,

    certificateIssued: false,

    aiRecommended: false,
  },
];