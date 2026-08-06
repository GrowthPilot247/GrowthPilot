/**
 * ============================================================
 * GrowthPilot Business Health Engine
 * ============================================================
 * Mission:
 * GP-MSN-001 — Executive Copilot v1
 *
 * Description:
 * Calculates the Business Health Score that powers the
 * Executive Copilot and future GrowthPilot modules.
 * ============================================================
 */

import type {
  BusinessHealthCategory,
  BusinessHealthScore,
} from "../types/business-health.types";

const categories: BusinessHealthCategory[] = [
  {
    id: "marketing",
    name: "Marketing",
    score: 91,
    status: "excellent",
  },

  {
    id: "sales",
    name: "Sales",
    score: 88,
    status: "good",
  },

  {
    id: "finance",
    name: "Finance",
    score: 94,
    status: "excellent",
  },

  {
    id: "operations",
    name: "Operations",
    score: 96,
    status: "excellent",
  },

  {
    id: "customer-success",
    name: "Customer Success",
    score: 90,
    status: "excellent",
  },
];

function calculateOverallScore(
  values: BusinessHealthCategory[],
): number {
  const total = values.reduce(
    (sum, category) => sum + category.score,
    0,
  );

  return Math.round(total / values.length);
}

function determineStatus(
  score: number,
): BusinessHealthScore["status"] {
  if (score >= 90) return "excellent";
  if (score >= 75) return "good";
  if (score >= 60) return "fair";
  return "poor";
}

export function getBusinessHealth(): BusinessHealthScore {
  const overall = calculateOverallScore(categories);

  return {
    overall,
    status: determineStatus(overall),
    categories,

    calculatedAt: new Date().toISOString(),
  };
}