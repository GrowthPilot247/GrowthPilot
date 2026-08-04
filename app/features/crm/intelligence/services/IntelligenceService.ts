/**
 * ============================================================
 * GrowthPilot Intelligence Service Contract
 * ============================================================
 */

import {
  IntelligenceAnalysis,
} from "../types/intelligence.types";

export interface IntelligenceRequest {
  entityId: string;

  entityType:
    | "lead"
    | "opportunity"
    | "company"
    | "contact";

  metadata?: Record<string, unknown>;
}

export interface IntelligenceService {
  analyze(
    request: IntelligenceRequest
  ): Promise<IntelligenceAnalysis>;
}