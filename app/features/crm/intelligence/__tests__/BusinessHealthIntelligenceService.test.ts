/**
 * ============================================================
 * GrowthPilot Business Health Intelligence Service Tests
 * ============================================================
 */

import { describe, expect, it } from "vitest";

import { BusinessHealthIntelligenceService } from "../services/BusinessHealthIntelligenceService";

describe("BusinessHealthIntelligenceService", () => {
  it("returns business health intelligence", async () => {
    const service = new BusinessHealthIntelligenceService();

    const result = await service.analyze();

    expect(result).toBeDefined();

    expect(result.score).toBeGreaterThan(0);

    expect(result.summary).toBeTruthy();

    expect(result.recommendations.length).toBeGreaterThan(0);

    expect(result.insights.length).toBeGreaterThan(0);
  });
});