/**
 * ============================================================
 * GrowthPilot Executive Intelligence Types
 * ============================================================
 * Mission:
 * GP-MSN-001 — Sprint 4
 *
 * Description:
 * Shared domain models for the Executive Intelligence Engine.
 * These models are intentionally rich so dashboard components
 * receive complete business objects rather than plain strings.
 * ============================================================
 */

export interface ExecutiveGreeting {
  title: string;
  subtitle: string;
  live: boolean;
  updated: string;
}

export interface ExecutiveMetric {
  id: string;
  label: string;
  value: string;
  trend: string;
}

export interface ExecutiveInsight {
  id: number;
  category: string;
  message: string;
}

export type ExecutiveSeverity =
  | "critical"
  | "high"
  | "medium"
  | "low";

export type ExecutiveImpact =
  | "high"
  | "medium"
  | "low";

export interface ExecutiveRecommendation {
  id: string;
  title: string;
  description: string;
  priority: number;
}

export interface ExecutiveRisk {
  id: string;
  title: string;
  severity: ExecutiveSeverity;
  description: string;
  recommendation: string;
}

export interface ExecutiveOpportunity {
  id: string;
  title: string;
  impact: ExecutiveImpact;
  description: string;
  expectedValue?: string;
}

export interface ExecutivePriority {
  id: string;
  title: string;
  due?: string;
}

export interface ExecutiveAlert {
  id: string;
  title: string;
  description: string;
  severity: ExecutiveSeverity;
}

export interface ExecutiveIntelligence {
  greeting: ExecutiveGreeting;

  metrics: ExecutiveMetric[];

  executiveBrief: ExecutiveInsight[];

  recommendations: ExecutiveRecommendation[];

  priorities: ExecutivePriority[];

  risks: ExecutiveRisk[];

  opportunities: ExecutiveOpportunity[];
}