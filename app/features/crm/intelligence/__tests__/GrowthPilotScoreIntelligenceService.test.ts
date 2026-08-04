/**
 * ============================================================
 * GrowthPilot Score Intelligence Service Tests
 * ============================================================
 */

import { describe, expect, it } from "vitest";

import { GrowthPilotScoreIntelligenceService } from "../services/GrowthPilotScoreIntelligenceService";

describe("GrowthPilotScoreIntelligenceService", () => {
  it("returns GrowthPilot Score intelligence", async () => {
    const service = new GrowthPilotScoreIntelligenceService();

    const result = await service.analyze();

    expect(result).toBeDefined();

    expect(result.score).toBeGreaterThan(0);

    expect(result.summary).toBeTruthy();

    expect(result.recommendations.length).toBeGreaterThan(0);

    expect(result.insights.length).toBeGreaterThan(0);

    expect(result.risk).toBeDefined();

    expect(result.confidence).toBeGreaterThan(0);
  });
});