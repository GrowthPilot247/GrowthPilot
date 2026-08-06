/**
 * ============================================================
 * GrowthPilot Score Intelligence Mock Data
 * ============================================================
 */

import { GrowthPilotScoreIntelligence } from "../types/models/GrowthPilotScoreIntelligence";

export const growthPilotScoreIntelligenceMock: GrowthPilotScoreIntelligence = {
  score: 94,

  grade: "A",

  confidence: 97,

  risk: "low",

  summary:
    "Business performance is excellent with strong execution across all key operational areas.",

  insights: [
    {
      id: "insight-001",
      title: "Top Performing Business",
      description:
        "Overall business performance exceeds expected benchmarks across multiple categories.",
      priority: "high",
      confidence: 98,
    },
  ],

  recommendations: [
    {
      id: "recommendation-001",
      title: "Expand Growth Investment",
      description:
        "Increase investment in the highest-performing acquisition channels while maintaining operational efficiency.",
      action: "Increase Growth Budget",
      priority: "high",
    },
  ],

  breakdown: {
    sales: 96,

    marketing: 91,

    customerSuccess: 93,

    revenue: 95,

    operations: 94,
  },

  lastUpdated: "2026-08-04T12:00:00Z",
};