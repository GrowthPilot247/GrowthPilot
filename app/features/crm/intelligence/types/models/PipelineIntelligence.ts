/**
 * ============================================================
 * GrowthPilot Pipeline Intelligence Model
 * ============================================================
 */

import { IntelligenceAnalysis } from "../intelligence.types";

export interface PipelineMetrics {
  totalOpportunities: number;

  totalValue: number;

  averageWinProbability: number;

  averageDealSize: number;

  averageSalesCycle: number;
}

export interface PipelineIntelligence
  extends IntelligenceAnalysis {
  pipelineId: string;

  metrics: PipelineMetrics;

  forecastRevenue: number;

  pipelineHealth: number;
}