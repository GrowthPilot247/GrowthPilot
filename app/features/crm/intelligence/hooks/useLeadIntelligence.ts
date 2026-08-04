"use client";

/**
 * ============================================================
 * GrowthPilot Lead Intelligence Hook
 * ============================================================
 */

import { useEffect, useState } from "react";

import { LeadIntelligence } from "../types/models/LeadIntelligence";
import { LeadIntelligenceService } from "../services/LeadIntelligenceService";

export function useLeadIntelligence() {
  const [data, setData] =
    useState<LeadIntelligence | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const service =
      new LeadIntelligenceService();

    service.analyze().then((result) => {
      setData(result as LeadIntelligence);

      setLoading(false);
    });
  }, []);

  return {
    data,
    loading,
  };
}