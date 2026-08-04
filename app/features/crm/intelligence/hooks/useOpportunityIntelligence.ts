"use client";

/**
 * ============================================================
 * GrowthPilot Opportunity Intelligence Hook
 * ============================================================
 */

import { useEffect, useState } from "react";

import { OpportunityIntelligence } from "../types/models/OpportunityIntelligence";
import { OpportunityIntelligenceService } from "../services/OpportunityIntelligenceService";

export function useOpportunityIntelligence() {
  const [data, setData] =
    useState<OpportunityIntelligence | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const service =
      new OpportunityIntelligenceService();

    service.analyze().then((result) => {
      setData(result as OpportunityIntelligence);

      setLoading(false);
    });
  }, []);

  return {
    data,
    loading,
  };
}