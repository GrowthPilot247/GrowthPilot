/**
 * ============================================================
 * GrowthPilot Executive Brief Generator
 * ============================================================
 * Mission:
 * GP-MSN-001 — Executive Copilot v1
 *
 * Description:
 * Generates a dynamic executive briefing by combining
 * information from the Executive Intelligence engines.
 * ============================================================
 */

import { getBusinessHealth } from "./business-health-engine.service";
import { getExecutiveRisks } from "./risk-engine.service";
import { getExecutiveOpportunities } from "./opportunity-engine.service";
import { getExecutiveRecommendations } from "./recommendation-engine.service";

export function generateExecutiveBrief(): string[] {
  const health = getBusinessHealth();
  const risks = getExecutiveRisks();
  const opportunities = getExecutiveOpportunities();
  const recommendations = getExecutiveRecommendations();

  const summary: string[] = [];

  summary.push(
    `Business Health is ${health.status.toUpperCase()} (${health.overall}/100), led by strong operational and financial performance.`,
  );

  if (risks.length > 0) {
    summary.push(
      `${risks.length} executive risk${
        risks.length > 1 ? "s require" : " requires"
      } immediate attention.`,
    );
  }

  if (opportunities.length > 0) {
    summary.push(
      `${opportunities.length} strategic growth opportunities have been identified.`,
    );
  }

  if (recommendations.length > 0) {
    summary.push(
      `Top recommendation: ${recommendations[0].title}.`,
    );
  }

  return summary;
}