/**
 * ============================================================
 * GrowthPilot Intelligence Engine
 * ============================================================
 */

import {
  IntelligenceAnalysis,
} from "../types/intelligence.types";

export interface IntelligenceContext {
  entityId: string;

  entityType: string;

  metadata?: Record<string, unknown>;
}

export interface IntelligenceEngine {
  analyze(
    context: IntelligenceContext
  ): Promise<IntelligenceAnalysis>;
}