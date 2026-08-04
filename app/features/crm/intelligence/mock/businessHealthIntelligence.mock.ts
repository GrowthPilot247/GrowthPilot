/**
 * ============================================================
 * GrowthPilot Business Health Intelligence Mock Data
 * ============================================================
 */

import { BusinessHealthIntelligence } from "../types/models/BusinessHealthIntelligence";

export const businessHealthIntelligenceMock: BusinessHealthIntelligence = {
  overallHealth: 91,

  growthScore: 88,

  score: 91,

  confidence: 95,

  risk: "low",

  summary:
    "Overall business performance is strong with positive growth trends across key departments.",

  insights: [
    {
      id: "insight-001",
      title: "Healthy Business Growth",
      description:
        "Sales, revenue and customer performance continue to improve steadily.",
      priority: "high",
      confidence: 96,
    },
  ],

  recommendations: [
    {
      id: "recommendation-001",
      title: "Scale Marketing Investment",
      description:
        "Increase investment in high-performing acquisition channels to accelerate growth.",
      action: "Increase Marketing Budget",
      priority: "high",
    },
  ],

  metrics: {
    salesScore: 94,

    marketingScore: 86,

    customerScore: 92,

    revenueScore: 90,

    pipelineScore: 93,
  },

  trend: "improving",
};