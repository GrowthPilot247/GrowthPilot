"use client";

/**
 * ============================================================
 * GrowthPilot Business Health Intelligence Hook
 * ============================================================
 */

import { useEffect, useState } from "react";

import { BusinessHealthIntelligence } from "../types/models/BusinessHealthIntelligence";
import { BusinessHealthIntelligenceService } from "../services/BusinessHealthIntelligenceService";

export function useBusinessHealthIntelligence() {
  const [data, setData] =
    useState<BusinessHealthIntelligence | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const service =
      new BusinessHealthIntelligenceService();

    service.analyze().then((result) => {
      setData(result as BusinessHealthIntelligence);

      setLoading(false);
    });
  }, []);

  return {
    data,
    loading,
  };
}