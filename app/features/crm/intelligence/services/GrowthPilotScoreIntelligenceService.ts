/**
 * ============================================================
 * GrowthPilot Score Intelligence Service
 * ============================================================
 */

import { IntelligenceService } from "./IntelligenceService";
import { IntelligenceAnalysis } from "../types/intelligence.types";
import { growthPilotScoreIntelligenceMock } from "../mock/growthPilotScoreIntelligence.mock";

export class GrowthPilotScoreIntelligenceService
  implements IntelligenceService
{
  async analyze(): Promise<IntelligenceAnalysis> {
    return growthPilotScoreIntelligenceMock;
  }
}