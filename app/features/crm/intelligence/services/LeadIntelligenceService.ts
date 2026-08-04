/**
 * ============================================================
 * GrowthPilot Lead Intelligence Service
 * ============================================================
 */

import { IntelligenceService } from "./IntelligenceService";
import { IntelligenceAnalysis } from "../types/intelligence.types";
import { leadIntelligenceMock } from "../mock/leadIntelligence.mock";

export class LeadIntelligenceService
  implements IntelligenceService
{
  async analyze(): Promise<IntelligenceAnalysis> {
    return leadIntelligenceMock[0];
  }
}