/**
 * ============================================================
 * GrowthPilot Executive Alert Engine
 * ============================================================
 * Mission:
 * GP-MSN-001 — Sprint 5
 *
 * Description:
 * Generates executive alerts from business intelligence.
 * This engine will later consume real CRM, finance,
 * marketing and operational data.
 * ============================================================
 */

import type {
  ExecutiveAlert,
} from "../types/executive-alert.types";

export function getExecutiveAlerts(): ExecutiveAlert[] {
  return [
    {
      id: "finance-overdue-invoices",

      title: "Overdue Enterprise Invoices",

      message:
        "Two enterprise invoices are overdue and require executive attention.",

      severity: "high",

      recommendedAction:
        "Escalate to the finance team and contact affected customers within 48 hours.",

      updatedAt: "Updated just now",
    },

    {
      id: "marketing-budget",

      title: "Marketing Campaign Opportunity",

      message:
        "LinkedIn campaign ROI increased by 23% during the last 30 days.",

      severity: "info",

      recommendedAction:
        "Review campaign budget allocation for possible scaling.",

      updatedAt: "Updated 5 minutes ago",
    },

    {
      id: "renewal-window",

      title: "Enterprise Contract Renewals",

      message:
        "Six enterprise contracts enter their renewal window this month.",

      severity: "warning",

      recommendedAction:
        "Assign account managers and begin renewal conversations immediately.",

      updatedAt: "Updated 10 minutes ago",
    },
  ];
}

export function getHighestPriorityAlert(): ExecutiveAlert {
  const alerts = getExecutiveAlerts();

  const severityOrder = {
    critical: 4,
    high: 3,
    warning: 2,
    info: 1,
  };

  return [...alerts].sort(
    (a, b) =>
      severityOrder[b.severity] -
      severityOrder[a.severity],
  )[0];
}