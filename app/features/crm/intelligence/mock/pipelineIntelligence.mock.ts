/**
 * ============================================================
 * GrowthPilot Pipeline Intelligence Mock Data
 * ============================================================
 */

import { PipelineIntelligence } from "../types/models/PipelineIntelligence";

export const pipelineIntelligenceMock: PipelineIntelligence = {
  pipelineId: "pipeline-001",

  score: 90,

  confidence: 94,

  risk: "low",

  summary:
    "The sales pipeline is healthy with strong revenue potential and consistent deal progression.",

  insights: [
    {
      id: "insight-001",
      title: "Healthy Conversion Rate",
      description:
        "Most opportunities are progressing through the pipeline as expected.",
      priority: "high",
      confidence: 95,
    },
  ],

  recommendations: [
    {
      id: "recommendation-001",
      title: "Focus on Late-Stage Deals",
      description:
        "Prioritize follow-up activities for opportunities expected to close within the next 30 days.",
      action: "Prioritize Opportunities",
      priority: "high",
    },
  ],

  metrics: {
    totalOpportunities: 47,

    totalValue: 1850000,

    averageWinProbability: 81,

    averageDealSize: 39361,

    averageSalesCycle: 29,
  },

  forecastRevenue: 1525000,

  pipelineHealth: 91,
};