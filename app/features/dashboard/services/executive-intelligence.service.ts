/**
 * ============================================================
 * GrowthPilot Executive Intelligence Service
 * ============================================================
 * Mission:
 * GP-MSN-001 — Executive Copilot v1
 *
 * Description:
 * Aggregates executive intelligence from the dedicated
 * intelligence engines while maintaining the existing
 * service API used by the dashboard.
 * ============================================================
 */

import type {
  ExecutiveIntelligence,
  ExecutiveMetric,
  ExecutiveInsight,
} from "../types/executive-intelligence.types";

import { getBusinessHealthMetric } from "./business-score.service";
import { getExecutiveRecommendations } from "./recommendation-engine.service";
import { getExecutiveRisks } from "./risk-engine.service";
import { getExecutiveOpportunities } from "./opportunity-engine.service";
import { getExecutivePriorities } from "./priority-engine.service";
import { generateExecutiveBrief } from "./executive-brief-generator.service";

const metrics: ExecutiveMetric[] = [
  getBusinessHealthMetric(),

  {
    id: "revenue",
    label: "Revenue",
    value: "+18%",
    trend: "+3%",
  },

  {
    id: "forecast",
    label: "Forecast",
    value: "+15%",
    trend: "94% confidence",
  },

  {
    id: "risk",
    label: "Risk",
    value: "Low",
    trend: "2 alerts",
  },
];

const executiveBrief: ExecutiveInsight[] =
  generateExecutiveBrief().map((message, index) => ({
    id: index + 1,
    category: "Executive",
    message,
  }));

const intelligence: ExecutiveIntelligence = {
  greeting: {
    title: "Good Morning, Mackson Alex 👋",
    subtitle: "Here's your executive business briefing.",
    live: true,
    updated: "Updated just now",
  },

  metrics,

  executiveBrief,

  recommendations: getExecutiveRecommendations().map(
    (recommendation) => recommendation.title,
  ),

  priorities: getExecutivePriorities().map(
    (priority) => priority.title,
  ),

  risks: getExecutiveRisks().map(
    (risk) => risk.title,
  ),

  opportunities: getExecutiveOpportunities().map(
    (opportunity) => opportunity.title,
  ),
};

export function getExecutiveIntelligence(): ExecutiveIntelligence {
  return intelligence;
}