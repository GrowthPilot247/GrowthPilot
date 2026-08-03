/**
 * ============================================================
 * GrowthPilot Executive Intelligence Types
 * ============================================================
 * Mission:
 * GP-MSN-001 — Executive Copilot v1
 *
 * Description:
 * Shared type definitions for the Executive Intelligence Engine.
 * These interfaces are consumed by services and dashboard
 * components throughout the Executive Copilot.
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

export interface ExecutiveRisk {
  id: string;
  title: string;
  severity: "critical" | "high" | "medium" | "low";
  description: string;
  recommendation: string;
}

export interface ExecutiveOpportunity {
  id: string;
  title: string;
  impact: "high" | "medium" | "low";
  description: string;
  expectedValue?: string;
}

export interface ExecutiveRecommendation {
  id: string;
  title: string;
  description: string;
  priority: number;
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
  severity: "critical" | "warning" | "info";
}

export interface ExecutiveIntelligence {
  greeting: ExecutiveGreeting;

  metrics: ExecutiveMetric[];

  executiveBrief: ExecutiveInsight[];

  recommendations: string[];

  priorities: string[];

  risks: string[];

  opportunities: string[];
}