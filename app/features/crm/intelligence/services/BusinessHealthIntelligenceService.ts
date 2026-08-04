/**
 * ============================================================
 * GrowthPilot Business Health Intelligence Service
 * ============================================================
 */

import { IntelligenceService } from "./IntelligenceService";
import { IntelligenceAnalysis } from "../types/intelligence.types";
import { businessHealthIntelligenceMock } from "../mock/businessHealthIntelligence.mock";

export class BusinessHealthIntelligenceService
  implements IntelligenceService
{
  async analyze(): Promise<IntelligenceAnalysis> {
    return businessHealthIntelligenceMock;
  }
}