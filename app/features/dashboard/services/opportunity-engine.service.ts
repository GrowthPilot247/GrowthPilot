/**
 * ============================================================
 * GrowthPilot Opportunity Engine
 * ============================================================
 * Mission:
 * GP-MSN-001 — Executive Copilot v1
 *
 * Description:
 * Generates executive business opportunities for the
 * Executive Intelligence Engine.
 * ============================================================
 */

import type {
  ExecutiveOpportunity,
} from "../types/executive-intelligence.types";

export function getExecutiveOpportunities(): ExecutiveOpportunity[] {
  return [
    {
      id: "upsell-opportunity",
      title: "Upsell Existing Customers",
      impact: "high",
      description:
        "Eighteen active customers qualify for premium service upgrades based on recent purchasing behaviour.",
      expectedValue: "₦8.5M",
    },

    {
      id: "contract-renewals",
      title: "Enterprise Contract Renewals",
      impact: "high",
      description:
        "Six enterprise contracts are due for renewal within the next 30 days.",
      expectedValue: "₦12.3M",
    },

    {
      id: "lead-conversion",
      title: "Increase Lead Conversion",
      impact: "medium",
      description:
        "Improving follow-up speed could significantly increase conversion from qualified leads.",
      expectedValue: "15% Revenue Growth",
    },

    {
      id: "marketing-optimization",
      title: "Marketing Campaign Optimisation",
      impact: "medium",
      description:
        "Current campaign performance indicates room to increase ROI through budget redistribution.",
      expectedValue: "23% Higher ROI",
    },
  ];
}