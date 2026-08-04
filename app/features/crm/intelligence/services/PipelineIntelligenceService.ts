/**
 * ============================================================
 * GrowthPilot Pipeline Intelligence Service
 * ============================================================
 */

import { IntelligenceService } from "./IntelligenceService";
import { IntelligenceAnalysis } from "../types/intelligence.types";
import { pipelineIntelligenceMock } from "../mock/pipelineIntelligence.mock";

export class PipelineIntelligenceService
  implements IntelligenceService
{
  async analyze(): Promise<IntelligenceAnalysis> {
    return pipelineIntelligenceMock;
  }
}