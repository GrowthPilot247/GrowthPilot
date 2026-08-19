import type {
  Assessment,
} from "../types/assessment";

export const academyAssessments: Assessment[] = [
  {
    id: "assessment-growth-framework-foundations",
    courseId: "growth-framework-foundations",
    title: "Growth Framework Foundations Assessment",
    description:
      "Assess your understanding of the foundational principles behind the GrowthPilot Growth Framework.",
    passingScore: 70,
    maxAttempts: 3,
    required: true,
    questions: [
      {
        id: "gff-assessment-q1",
        question:
          "What is the primary purpose of the GrowthPilot Growth Framework?",
        type: "Multiple Choice",
        options: [
          {
            id: "a",
            text: "To focus exclusively on increasing revenue",
          },
          {
            id: "b",
            text: "To provide a structured approach to understanding and improving business growth",
          },
          {
            id: "c",
            text: "To replace every business function with automation",
          },
          {
            id: "d",
            text: "To create financial reports only",
          },
        ],
        correctOptionId: "b",
        explanation:
          "The GrowthPilot Growth Framework provides a structured approach to understanding and improving business growth.",
        lessonId: "gff-lesson-1",
        points: 1,
      },

      {
        id: "gff-assessment-q2",
        question:
          "Which activity is part of diagnosing growth opportunities?",
        type: "Multiple Choice",
        options: [
          {
            id: "a",
            text: "Ignoring business performance",
          },
          {
            id: "b",
            text: "Identifying capability gaps and growth opportunities",
          },
          {
            id: "c",
            text: "Removing performance measurement",
          },
          {
            id: "d",
            text: "Avoiding strategic planning",
          },
        ],
        correctOptionId: "b",
        explanation:
          "Growth diagnosis involves identifying capability gaps and opportunities for improvement.",
        lessonId: "gff-lesson-5",
        points: 1,
      },

      {
        id: "gff-assessment-q3",
        question:
          "What should happen after a business insight has been identified?",
        type: "Multiple Choice",
        options: [
          {
            id: "a",
            text: "It should be ignored",
          },
          {
            id: "b",
            text: "It should be connected to action and measurable execution",
          },
          {
            id: "c",
            text: "It should remain undocumented",
          },
          {
            id: "d",
            text: "It should automatically become a financial transaction",
          },
        ],
        correctOptionId: "b",
        explanation:
          "The GrowthPilot approach connects insight to action, measurement, and continuous improvement.",
        lessonId: "gff-lesson-7",
        points: 1,
      },
    ],
  },

  {
    id: "assessment-business-growth-strategy",
    courseId: "business-growth-strategy",
    title: "Business Growth Strategy Assessment",
    description:
      "Assess your understanding of strategic business diagnosis, opportunity design, growth strategy, and execution.",
    passingScore: 70,
    maxAttempts: 3,
    required: true,
    questions: [
      {
        id: "bgs-assessment-q1",
        question:
          "What should a business do before developing a growth strategy?",
        type: "Multiple Choice",
        options: [
          {
            id: "a",
            text: "Diagnose its current business position",
          },
          {
            id: "b",
            text: "Immediately launch new products",
          },
          {
            id: "c",
            text: "Ignore competitors",
          },
          {
            id: "d",
            text: "Eliminate KPIs",
          },
        ],
        correctOptionId: "a",
        explanation:
          "Strategic planning begins with understanding the current business position.",
        lessonId: "bgs-lesson-1",
        points: 1,
      },

      {
        id: "bgs-assessment-q2",
        question:
          "Why should growth opportunities be prioritized?",
        type: "Multiple Choice",
        options: [
          {
            id: "a",
            text: "Because every opportunity has exactly the same value",
          },
          {
            id: "b",
            text: "To focus resources on the opportunities with the greatest strategic value",
          },
          {
            id: "c",
            text: "To avoid measuring results",
          },
          {
            id: "d",
            text: "To eliminate strategic choices",
          },
        ],
        correctOptionId: "b",
        explanation:
          "Prioritization helps businesses focus limited resources on the most valuable opportunities.",
        lessonId: "bgs-lesson-5",
        points: 1,
      },
    ],
  },

  {
    id: "assessment-customer-retention-strategy",
    courseId: "customer-retention-strategy",
    title: "Customer Retention Strategy Assessment",
    description:
      "Assess your understanding of customer retention, churn, customer intelligence, and customer value.",
    passingScore: 70,
    maxAttempts: 3,
    required: true,
    questions: [
      {
        id: "crs-assessment-q1",
        question:
          "Why is customer retention important for sustainable growth?",
        type: "Multiple Choice",
        options: [
          {
            id: "a",
            text: "It eliminates the need to understand customers",
          },
          {
            id: "b",
            text: "It can strengthen customer value and long-term business performance",
          },
          {
            id: "c",
            text: "It makes customer engagement unnecessary",
          },
          {
            id: "d",
            text: "It prevents customer analysis",
          },
        ],
        correctOptionId: "b",
        explanation:
          "Retention connects customer relationships with long-term customer value and sustainable growth.",
        lessonId: "crs-lesson-2",
        points: 1,
      },

      {
        id: "crs-assessment-q2",
        question:
          "What is one purpose of customer health indicators?",
        type: "Multiple Choice",
        options: [
          {
            id: "a",
            text: "To identify customer retention opportunities",
          },
          {
            id: "b",
            text: "To eliminate customer segmentation",
          },
          {
            id: "c",
            text: "To prevent customer engagement",
          },
          {
            id: "d",
            text: "To remove retention measurement",
          },
        ],
        correctOptionId: "a",
        explanation:
          "Customer health indicators can help identify risks and opportunities within the customer lifecycle.",
        lessonId: "crs-lesson-4",
        points: 1,
      },
    ],
  },

  {
    id: "assessment-executive-intelligence",
    courseId: "executive-intelligence",
    title: "Executive Intelligence Assessment",
    description:
      "Assess your understanding of executive decision-making, business intelligence, strategic risk, and growth leadership.",
    passingScore: 70,
    maxAttempts: 3,
    required: true,
    questions: [
      {
        id: "ei-assessment-q1",
        question:
          "What is an important capability of an intelligent executive?",
        type: "Multiple Choice",
        options: [
          {
            id: "a",
            text: "Making decisions without business information",
          },
          {
            id: "b",
            text: "Turning business information into actionable insight",
          },
          {
            id: "c",
            text: "Ignoring strategic risks",
          },
          {
            id: "d",
            text: "Avoiding performance signals",
          },
        ],
        correctOptionId: "b",
        explanation:
          "Executive intelligence involves interpreting business signals and turning them into actionable insights.",
        lessonId: "ei-lesson-3",
        points: 1,
      },

      {
        id: "ei-assessment-q2",
        question:
          "Why is scenario and risk thinking important for executives?",
        type: "Multiple Choice",
        options: [
          {
            id: "a",
            text: "It removes the need for strategic choices",
          },
          {
            id: "b",
            text: "It helps leaders recognize potential risks and strategic implications",
          },
          {
            id: "c",
            text: "It eliminates business uncertainty",
          },
          {
            id: "d",
            text: "It prevents strategic planning",
          },
        ],
        correctOptionId: "b",
        explanation:
          "Scenario and risk thinking helps leaders consider possible outcomes, risks, and strategic implications.",
        lessonId: "ei-lesson-7",
        points: 1,
      },
    ],
  },

  {
    id: "assessment-ai-business-transformation",
    courseId: "ai-business-transformation",
    title: "AI for Business Transformation Assessment",
    description:
      "Assess your understanding of AI opportunity discovery, business value, automation, and transformation.",
    passingScore: 70,
    maxAttempts: 3,
    required: true,
    questions: [
      {
        id: "ait-assessment-q1",
        question:
          "What is an important first step when identifying AI opportunities?",
        type: "Multiple Choice",
        options: [
          {
            id: "a",
            text: "Identify business processes and decisions that may benefit from AI",
          },
          {
            id: "b",
            text: "Deploy AI without identifying a business problem",
          },
          {
            id: "c",
            text: "Ignore business value",
          },
          {
            id: "d",
            text: "Avoid evaluating risks",
          },
        ],
        correctOptionId: "a",
        explanation:
          "AI opportunity discovery begins with identifying processes and decisions where AI could create meaningful value.",
        lessonId: "ait-lesson-3",
        points: 1,
      },

      {
        id: "ait-assessment-q2",
        question:
          "What should an organization consider when evaluating an AI initiative?",
        type: "Multiple Choice",
        options: [
          {
            id: "a",
            text: "Business value and implementation considerations",
          },
          {
            id: "b",
            text: "Only the novelty of the technology",
          },
          {
            id: "c",
            text: "Only the cost of software",
          },
          {
            id: "d",
            text: "Nothing beyond deployment speed",
          },
        ],
        correctOptionId: "a",
        explanation:
          "AI initiatives should be evaluated according to potential business value, risks, and implementation considerations.",
        lessonId: "ait-lesson-5",
        points: 1,
      },
    ],
  },

  {
    id: "assessment-high-performance-teams",
    courseId: "high-performance-teams",
    title: "High-Performance Teams Assessment",
    description:
      "Assess your understanding of leadership, accountability, communication, team dynamics, and performance.",
    passingScore: 70,
    maxAttempts: 3,
    required: true,
    questions: [
      {
        id: "hpt-assessment-q1",
        question:
          "Which combination supports high team performance?",
        type: "Multiple Choice",
        options: [
          {
            id: "a",
            text: "Unclear expectations and weak accountability",
          },
          {
            id: "b",
            text: "Trust, accountability, and clear performance expectations",
          },
          {
            id: "c",
            text: "Poor communication and unclear responsibilities",
          },
          {
            id: "d",
            text: "Avoiding performance conversations",
          },
        ],
        correctOptionId: "b",
        explanation:
          "Trust, accountability, and clear expectations are important foundations for effective team performance.",
        lessonId: "hpt-lesson-2",
        points: 1,
      },

      {
        id: "hpt-assessment-q2",
        question:
          "Why are performance conversations important?",
        type: "Multiple Choice",
        options: [
          {
            id: "a",
            text: "They help teams avoid accountability",
          },
          {
            id: "b",
            text: "They support communication and performance improvement",
          },
          {
            id: "c",
            text: "They eliminate leadership responsibility",
          },
          {
            id: "d",
            text: "They prevent collaboration",
          },
        ],
        correctOptionId: "b",
        explanation:
          "Performance conversations can support communication, accountability, and continuous improvement.",
        lessonId: "hpt-lesson-6",
        points: 1,
      },
    ],
  },
];

export function getAssessment(
  courseId: string,
): Assessment | undefined {
  return academyAssessments.find(
    (assessment) =>
      assessment.courseId === courseId,
  );
}
