"use client";

/**
 * ============================================================
 * GrowthPilot Score Intelligence Hook
 * ============================================================
 */

import { useEffect, useState } from "react";

import { GrowthPilotScoreIntelligence } from "../types/models/GrowthPilotScoreIntelligence";
import { GrowthPilotScoreIntelligenceService } from "../services/GrowthPilotScoreIntelligenceService";

export function useGrowthPilotScoreIntelligence() {
  const [data, setData] =
    useState<GrowthPilotScoreIntelligence | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const service =
      new GrowthPilotScoreIntelligenceService();

    service.analyze().then((result) => {
      setData(result as GrowthPilotScoreIntelligence);

      setLoading(false);
    });
  }, []);

  return {
    data,
    loading,
  };
}