/**
 * ============================================================
 * GrowthPilot Business Score Service
 * ============================================================
 * Mission:
 * GP-MSN-001 — Executive Copilot v1
 *
 * Description:
 * Provides reusable helper functions for Business
 * Health scoring and dashboard presentation.
 * ============================================================
 */

import { getBusinessHealth } from "./business-health-engine.service";

export function getBusinessHealthMetric() {
  const health = getBusinessHealth();

  return {
    id: "health",
    label: "Business Health",
    value: `${health.overall} / 100`,
    trend: health.status.toUpperCase(),
  };
}

export function getBusinessHealthSummary() {
  const health = getBusinessHealth();

  return {
    overall: health.overall,
    status: health.status,
    categories: health.categories,
    calculatedAt: health.calculatedAt,
  };
}