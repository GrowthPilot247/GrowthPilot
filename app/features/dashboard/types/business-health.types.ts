/**
 * ============================================================
 * GrowthPilot Business Health Types
 * ============================================================
 * Mission:
 * GP-MSN-001 — Executive Copilot v1
 *
 * Description:
 * Shared types for the Business Health Engine.
 * ============================================================
 */

export type BusinessHealthStatus =
  | "excellent"
  | "good"
  | "fair"
  | "poor";

export interface BusinessHealthCategory {
  id: string;
  name: string;
  score: number;
  status: BusinessHealthStatus;
}

export interface BusinessHealthScore {
  overall: number;
  status: BusinessHealthStatus;

  categories: BusinessHealthCategory[];

  calculatedAt: string;
}