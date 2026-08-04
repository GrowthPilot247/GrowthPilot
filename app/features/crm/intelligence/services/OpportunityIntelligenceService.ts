/**
 * ============================================================
 * GrowthPilot Opportunity Intelligence Service
 * ============================================================
 */

import { IntelligenceService } from "./IntelligenceService";
import { IntelligenceAnalysis } from "../types/intelligence.types";
import { opportunityIntelligenceMock } from "../mock/opportunityIntelligence.mock";

export class OpportunityIntelligenceService
  implements IntelligenceService
{
  async analyze(): Promise<IntelligenceAnalysis> {
    return opportunityIntelligenceMock[0];
  }
}