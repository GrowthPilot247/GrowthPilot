/**
 * ============================================================
 * GrowthPilot Revenue Intelligence Service
 * ============================================================
 */

import { IntelligenceService } from "./IntelligenceService";
import { IntelligenceAnalysis } from "../types/intelligence.types";
import { revenueIntelligenceMock } from "../mock/revenueIntelligence.mock";

export class RevenueIntelligenceService
  implements IntelligenceService
{
  async analyze(): Promise<IntelligenceAnalysis> {
    return revenueIntelligenceMock;
  }
}