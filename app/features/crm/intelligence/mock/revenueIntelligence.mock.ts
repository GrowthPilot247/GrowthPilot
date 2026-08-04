/**
 * ============================================================
 * GrowthPilot Revenue Intelligence Mock Data
 * ============================================================
 */

import { RevenueIntelligence } from "../types/models/RevenueIntelligence";

export const revenueIntelligenceMock: RevenueIntelligence = {
  period: "2026-Q3",

  score: 93,

  confidence: 96,

  risk: "low",

  summary:
    "Revenue performance is strong with healthy recurring revenue growth and accurate forecasting.",

  insights: [
    {
      id: "insight-001",
      title: "Recurring Revenue Growth",
      description:
        "Recurring revenue continues to increase consistently across subscription plans.",
      priority: "high",
      confidence: 97,
    },
  ],

  recommendations: [
    {
      id: "recommendation-001",
      title: "Increase Enterprise Sales",
      description:
        "Focus on expanding enterprise subscriptions to improve recurring revenue.",
      action: "Launch Enterprise Campaign",
      priority: "high",
    },
  ],

  metrics: {
    currentRevenue: 845000,

    projectedRevenue: 975000,

    recurringRevenue: 620000,

    averageRevenuePerCustomer: 4850,

    growthRate: 18.7,
  },

  revenueHealth: 94,

  forecastAccuracy: 96,
};