/**
 * ============================================================
 * GrowthPilot Recommendation Engine
 * ============================================================
 * Mission:
 * GP-MSN-001 — Executive Copilot v1
 *
 * Description:
 * Generates executive recommendations based on
 * current business intelligence.
 * ============================================================
 */

import type {
  ExecutiveRecommendation,
} from "../types/executive-intelligence.types";

export function getExecutiveRecommendations(): ExecutiveRecommendation[] {
  return [
    {
      id: "marketing-budget",
      title: "Increase LinkedIn Campaign Budget",
      description:
        "Campaign ROI has increased by 23% over the past 30 days. Scaling the budget is expected to accelerate qualified lead acquisition.",
      priority: 1,
    },

    {
      id: "enterprise-followup",
      title: "Follow Up Enterprise Leads",
      description:
        "Fourteen enterprise prospects have not been contacted within the last seven days.",
      priority: 2,
    },

    {
      id: "pricing-review",
      title: "Review Premium Pricing",
      description:
        "Customer demand and conversion trends indicate room for premium pricing optimisation.",
      priority: 3,
    },

    {
      id: "renewals",
      title: "Prioritise Contract Renewals",
      description:
        "Several high-value customer contracts are approaching renewal within the next 30 days.",
      priority: 4,
    },

    {
      id: "executive-dashboard",
      title: "Review Executive Dashboard",
      description:
        "Business Health Score improved this week. Review executive insights for new opportunities and risks.",
      priority: 5,
    },
  ];
}