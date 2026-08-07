/**
 * ============================================================
 * GrowthPilot Executive Chat Service
 * ============================================================
 * Mission:
 * GP-MSN-008
 *
 * Description:
 * Routes Executive Copilot prompts to the
 * appropriate intelligence engine.
 * ============================================================
 */

import { getExecutiveIntelligence } from "./executive-intelligence.service";
import { getHighestPriorityAlert } from "./executive-alert-engine.service";
import { getBusinessHealthSummary } from "./business-score.service";

export interface ExecutiveChatResponse {
  title: string;
  message: string;
}

export function askExecutiveCopilot(
  prompt: string,
): ExecutiveChatResponse {
  const query = prompt.toLowerCase();

  const intelligence = getExecutiveIntelligence();
  const alert = getHighestPriorityAlert();
  const health = getBusinessHealthSummary();

  if (
    query.includes("priority") ||
    query.includes("focus") ||
    query.includes("today")
  ) {
    return {
      title: "Today's Executive Priorities",

      message: intelligence.priorities
        .map((item) => `• ${item.title}`)
        .join("\n"),
    };
  }

  if (
    query.includes("risk") ||
    query.includes("alert")
  ) {
    return {
      title: alert.title,

      message: `${alert.message}

Recommended Action:

${alert.recommendedAction}`,
    };
  }

  if (
    query.includes("health") ||
    query.includes("business")
  ) {
    return {
      title: "Business Health",

      message: `Overall Score: ${health.overall}/100

Status: ${health.status}`,
    };
  }

  if (
    query.includes("marketing")
  ) {
    return {
      title: "Marketing Summary",

      message:
        "Marketing ROI continues to improve. LinkedIn campaigns are outperforming projections while customer acquisition remains above target.",
    };
  }

  if (
    query.includes("revenue") ||
    query.includes("forecast")
  ) {
    return {
      title: "Revenue Forecast",

      message:
        "Current revenue trend indicates approximately 18% quarter-over-quarter growth with strong confidence based on pipeline performance.",
    };
  }

  return {
    title: "Executive Copilot",

    message:
      "I can help you review business health, revenue forecasts, executive priorities, marketing performance, and operational risks.",
  };
}