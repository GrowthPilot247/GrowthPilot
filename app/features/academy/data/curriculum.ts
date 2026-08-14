import {
  AcademyLearningPath,
  AcademyProgram,
  AcademySchool,
} from "../types/curriculum";

export const academySchools: AcademySchool[] = [
  "Business Foundations",
  "Strategy & Business Growth",
  "Entrepreneurship & Innovation",
  "Marketing & Growth",
  "Sales & Revenue",
  "Finance & Accounting",
  "Analytics & Decision Intelligence",
  "AI & Digital Transformation",
  "Leadership & People",
  "Operations & Project Management",
  "Customer Experience",
  "Product Management",
  "Communication & Negotiation",
  "Governance, Law & Ethics",
  "Global Business",
  "Executive Education",
  "CEO & Founder School",
  "Career & Professional Development",
  "Business Research & Thought Leadership",
];

export const academyPrograms: AcademyProgram[] = [
  {
    id: "business-growth-foundations",
    title: "Business Growth Foundations",
    description:
      "Build a practical foundation in business, management, strategy, and sustainable growth.",
    school: "Business Foundations",
    level: "Foundation",
    audience: ["Individual", "Entrepreneur", "Professional"],
    growthDimensions: ["Strategic Growth", "Operational Growth"],
    courseIds: [
      "growth-framework-foundations",
      "business-growth-strategy",
    ],
    certificateTitle: "GrowthPilot Business Growth Foundations Certificate",
    featured: true,
  },

  {
    id: "strategic-growth-program",
    title: "Strategic Growth Program",
    description:
      "Develop the strategic capabilities required to identify, design, execute, and sustain business growth.",
    school: "Strategy & Business Growth",
    level: "Professional",
    audience: [
      "Professional",
      "Manager",
      "Department Head",
      "Executive",
      "CEO",
    ],
    growthDimensions: ["Strategic Growth", "Customer Growth"],
    courseIds: ["business-growth-strategy"],
    certificateTitle: "GrowthPilot Strategic Growth Certificate",
    featured: true,
  },

  {
    id: "ai-business-transformation-program",
    title: "AI & Business Transformation",
    description:
      "Develop practical capabilities for using AI, automation, analytics, and digital transformation to improve business performance.",
    school: "AI & Digital Transformation",
    level: "Professional",
    audience: ["Professional", "Manager", "Executive", "CEO"],
    growthDimensions: ["Innovation Growth", "Operational Growth"],
    courseIds: ["ai-business-transformation"],
    certificateTitle: "GrowthPilot AI Business Transformation Certificate",
    featured: true,
  },

  {
    id: "executive-growth-leadership",
    title: "Executive Growth Leadership",
    description:
      "Develop executive-level capabilities for strategic decision-making, business intelligence, leadership, and enterprise growth.",
    school: "Executive Education",
    level: "Executive",
    audience: ["Department Head", "Executive", "CEO"],
    growthDimensions: [
      "Strategic Growth",
      "Financial Growth",
      "People Growth",
      "Innovation Growth",
    ],
    courseIds: ["executive-intelligence"],
    certificateTitle: "GrowthPilot Executive Growth Leadership Certificate",
    featured: true,
  },
];

export const academyLearningPaths: AcademyLearningPath[] = [
  {
    id: "growthpilot-foundations-path",
    title: "GrowthPilot Growth Framework",
    description:
      "Understand the foundational methodology behind the GrowthPilot ecosystem and intelligent business growth.",
    school: "Business Foundations",
    level: "Foundation",
    audience: ["Individual", "Entrepreneur", "Professional"],
    growthDimensions: ["Strategic Growth"],
    courseIds: ["growth-framework-foundations"],
    featured: true,
  },

  {
    id: "business-strategy-path",
    title: "Business Growth Strategy",
    description:
      "Develop practical strategic capabilities for sustainable business growth.",
    school: "Strategy & Business Growth",
    level: "Practitioner",
    audience: ["Entrepreneur", "Professional", "Manager"],
    growthDimensions: ["Strategic Growth", "Customer Growth"],
    courseIds: ["business-growth-strategy"],
    featured: true,
  },

  {
    id: "customer-growth-path",
    title: "Customer Growth & Retention",
    description:
      "Build capabilities across customer acquisition, retention, experience, and customer value.",
    school: "Customer Experience",
    level: "Practitioner",
    audience: ["Professional", "Manager", "Department Head"],
    growthDimensions: ["Customer Growth"],
    courseIds: ["customer-retention-strategy"],
    featured: true,
  },

  {
    id: "executive-intelligence-path",
    title: "Executive Intelligence",
    description:
      "Strengthen executive decision-making through intelligence, strategic analysis, and growth management.",
    school: "Executive Education",
    level: "Executive",
    audience: ["Department Head", "Executive", "CEO"],
    growthDimensions: ["Strategic Growth"],
    courseIds: ["executive-intelligence"],
    featured: true,
  },

  {
    id: "ai-transformation-path",
    title: "AI for Business Transformation",
    description:
      "Develop practical AI and digital transformation capabilities for modern organizations.",
    school: "AI & Digital Transformation",
    level: "Professional",
    audience: ["Professional", "Manager", "Executive", "CEO"],
    growthDimensions: ["Innovation Growth", "Operational Growth"],
    courseIds: ["ai-business-transformation"],
    featured: true,
  },

  {
    id: "people-growth-path",
    title: "Leadership & High-Performance Teams",
    description:
      "Build leadership and people capabilities that improve organizational performance.",
    school: "Leadership & People",
    level: "Professional",
    audience: ["Manager", "Department Head", "Executive"],
    growthDimensions: ["People Growth"],
    courseIds: ["high-performance-teams"],
    featured: true,
  },
];