/**
 * ============================================================
 * GrowthPilot Lead Intelligence Hook Tests
 * ============================================================
 */

import { describe, expect, it } from "vitest";

import { LeadIntelligenceService } from "../services/LeadIntelligenceService";

describe("useLeadIntelligence", () => {
  it("returns valid intelligence from the service", async () => {
    const service = new LeadIntelligenceService();

    const result = await service.analyze();

    expect(result).not.toBeNull();

    expect(result.score).toBeGreaterThan(0);

    expect(result.summary).toBeTruthy();

    expect(result.insights.length).toBeGreaterThan(0);

    expect(result.recommendations.length).toBeGreaterThan(0);
  });
});