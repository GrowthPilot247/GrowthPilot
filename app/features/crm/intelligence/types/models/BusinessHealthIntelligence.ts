/**
 * ============================================================
 * GrowthPilot Business Health Intelligence Model
 * ============================================================
 */

import { IntelligenceAnalysis } from "../intelligence.types";

export interface BusinessHealthMetrics {
  salesScore: number;

  marketingScore: number;

  customerScore: number;

  revenueScore: number;

  pipelineScore: number;
}

export interface BusinessHealthIntelligence
  extends IntelligenceAnalysis {
  overallHealth: number;

  growthScore: number;

  metrics: BusinessHealthMetrics;

  trend: "improving" | "stable" | "declining";
}