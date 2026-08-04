"use client";

/**
 * ============================================================
 * GrowthPilot Intelligence Dashboard
 * ============================================================
 */

import { Spinner } from "@/app/components/ui/Spinner";

import { BusinessHealthSummaryCard } from "./BusinessHealthSummaryCard";
import { GrowthPilotScoreBadge } from "./GrowthPilotScoreBadge";
import { IntelligenceRecommendationPanel } from "./IntelligenceRecommendationPanel";

import { useBusinessHealthIntelligence } from "../hooks/useBusinessHealthIntelligence";
import { useGrowthPilotScoreIntelligence } from "../hooks/useGrowthPilotScoreIntelligence";

export function IntelligenceDashboard() {
  const {
    data: businessHealth,
    loading: businessLoading,
  } = useBusinessHealthIntelligence();

  const {
    data: score,
    loading: scoreLoading,
  } = useGrowthPilotScoreIntelligence();

  if (businessLoading || scoreLoading) {
    return (
      <div className="flex justify-center py-20">
        <Spinner />
      </div>
    );
  }

  if (!businessHealth || !score) {
    return null;
  }

  return (
    <div className="space-y-8">
      <GrowthPilotScoreBadge
        score={score.score}
        grade={score.grade}
      />

      <BusinessHealthSummaryCard
        intelligence={businessHealth}
      />

      <IntelligenceRecommendationPanel
        recommendations={score.recommendations}
      />
    </div>
  );
}