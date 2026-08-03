/**
 * ============================================================
 * GrowthPilot Executive Alert Types
 * ============================================================
 * Mission:
 * GP-MSN-001 — Sprint 5
 *
 * Description:
 * Shared domain models for the Executive Alert Engine.
 * ============================================================
 */

export type ExecutiveAlertSeverity =
  | "critical"
  | "high"
  | "warning"
  | "info";

export interface ExecutiveAlert {
  id: string;

  title: string;

  message: string;

  severity: ExecutiveAlertSeverity;

  recommendedAction: string;

  updatedAt: string;
}