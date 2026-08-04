/**
 * ============================================================
 * GrowthPilot Opportunity Intelligence Model
 * ============================================================
 */

import { IntelligenceAnalysis } from "../intelligence.types";

export type OpportunityHealth =
  | "excellent"
  | "good"
  | "at-risk"
  | "critical";

export interface OpportunityIntelligence
  extends IntelligenceAnalysis {
  opportunityId: string;

  winProbability: number;

  health: OpportunityHealth;

  expectedRevenue: number;

  daysToClose: number;
}