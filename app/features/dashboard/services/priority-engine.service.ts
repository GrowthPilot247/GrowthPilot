/**
 * ============================================================
 * GrowthPilot Priority Engine
 * ============================================================
 * Mission:
 * GP-MSN-001 — Executive Copilot v1
 *
 * Description:
 * Generates executive priorities for the
 * Executive Intelligence Engine.
 * ============================================================
 */

import type {
  ExecutivePriority,
} from "../types/executive-intelligence.types";

export function getExecutivePriorities(): ExecutivePriority[] {
  return [
    {
      id: "approve-marketing-budget",
      title: "Approve Marketing Budget",
      due: "Today",
    },

    {
      id: "review-revenue-forecast",
      title: "Review Revenue Forecast",
      due: "Today",
    },

    {
      id: "executive-meeting",
      title: "Executive Strategy Meeting",
      due: "2:00 PM",
    },

    {
      id: "finance-review",
      title: "Review Finance Alerts",
      due: "Today",
    },

    {
      id: "pipeline-review",
      title: "Review Enterprise Pipeline",
      due: "Tomorrow",
    },

    {
      id: "renewal-follow-up",
      title: "Approve Contract Renewal Strategy",
      due: "This Week",
    },
  ];
}