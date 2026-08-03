/**
 * ============================================================
 * GrowthPilot Risk Engine
 * ============================================================
 * Mission:
 * GP-MSN-001 — Executive Copilot v1
 *
 * Description:
 * Generates executive business risks for the
 * Executive Intelligence Engine.
 * ============================================================
 */

import type {
  ExecutiveRisk,
} from "../types/executive-intelligence.types";

export function getExecutiveRisks(): ExecutiveRisk[] {
  return [
    {
      id: "invoice-overdue",
      title: "Overdue Enterprise Invoices",
      severity: "high",
      description:
        "Two enterprise invoices remain unpaid beyond their expected payment terms.",
      recommendation:
        "Escalate to the finance team and initiate executive follow-up with the affected customers.",
    },

    {
      id: "pipeline-stall",
      title: "Sales Pipeline Slowdown",
      severity: "medium",
      description:
        "Several qualified opportunities have not progressed during the last seven days.",
      recommendation:
        "Review stalled opportunities and assign follow-up actions to the sales team.",
    },

    {
      id: "cashflow-monitor",
      title: "Cash Flow Monitoring",
      severity: "low",
      description:
        "Cash flow remains healthy, but incoming receivables should continue to be monitored.",
      recommendation:
        "Review weekly finance reports and maintain collection schedules.",
    },
  ];
}