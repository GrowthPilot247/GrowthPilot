/**
 * ============================================================
 * GrowthPilot Revenue Intelligence Model
 * ============================================================
 */

import { IntelligenceAnalysis } from "../intelligence.types";

export interface RevenueMetrics {
  currentRevenue: number;

  projectedRevenue: number;

  recurringRevenue: number;

  averageRevenuePerCustomer: number;

  growthRate: number;
}

export interface RevenueIntelligence
  extends IntelligenceAnalysis {
  period: string;

  metrics: RevenueMetrics;

  revenueHealth: number;

  forecastAccuracy: number;
}