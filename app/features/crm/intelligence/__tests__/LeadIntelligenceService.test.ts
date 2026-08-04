/**
 * ============================================================
 * GrowthPilot Lead Intelligence Service Tests
 * ============================================================
 */

import { describe, expect, it } from "vitest";

import { LeadIntelligenceService } from "../services/LeadIntelligenceService";

describe("LeadIntelligenceService", () => {
  it("returns lead intelligence", async () => {
    const service = new LeadIntelligenceService();

    const result = await service.analyze();

    expect(result).toBeDefined();

    expect(result.score).toBeGreaterThan(0);

    expect(result.summary).toBeTruthy();

    expect(result.recommendations.length).toBeGreaterThan(0);

    expect(result.insights.length).toBeGreaterThan(0);
  });
});