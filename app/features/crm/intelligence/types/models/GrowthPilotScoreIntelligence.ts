/**
 * ============================================================
 * GrowthPilot Score Intelligence Model
 * ============================================================
 */

import { IntelligenceAnalysis } from "../intelligence.types";

export interface GrowthPilotScoreBreakdown {
  sales: number;

  marketing: number;

  customerSuccess: number;

  revenue: number;

  operations: number;
}

export interface GrowthPilotScoreIntelligence
  extends IntelligenceAnalysis {
  score: number;

  grade: "A" | "B" | "C" | "D" | "F";

  breakdown: GrowthPilotScoreBreakdown;

  lastUpdated: string;
}