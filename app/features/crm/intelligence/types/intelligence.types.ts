/**
 * ============================================================
 * GrowthPilot CRM Intelligence Types
 * ============================================================
 */

export type IntelligencePriority =
  | "low"
  | "medium"
  | "high"
  | "critical";

export type IntelligenceRisk =
  | "low"
  | "medium"
  | "high";

export interface IntelligenceInsight {
  id: string;

  title: string;

  description: string;

  priority: IntelligencePriority;

  confidence: number;
}

export interface IntelligenceRecommendation {
  id: string;

  title: string;

  description: string;

  action: string;

  priority: IntelligencePriority;
}

export interface IntelligenceAnalysis {
  score: number;

  confidence: number;

  risk: IntelligenceRisk;

  summary: string;

  insights: IntelligenceInsight[];

  recommendations: IntelligenceRecommendation[];
}