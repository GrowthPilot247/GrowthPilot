"use client";

/**
 * ============================================================
 * GrowthPilot Intelligence Overview Panel
 * ============================================================
 */

import { GrowthPilotScoreIntelligence } from "../types/models/GrowthPilotScoreIntelligence";
import { GrowthPilotScoreBadge } from "./GrowthPilotScoreBadge";
import { ExecutiveInsightCard } from "./ExecutiveInsightCard";
import { IntelligenceRecommendationPanel } from "./IntelligenceRecommendationPanel";

interface IntelligenceOverviewPanelProps {
  intelligence: GrowthPilotScoreIntelligence;
}

export function IntelligenceOverviewPanel({
  intelligence,
}: IntelligenceOverviewPanelProps) {
  return (
    <div className="space-y-6">
      <GrowthPilotScoreBadge
        score={intelligence.score}
        grade={intelligence.grade}
      />

      <ExecutiveInsightCard
        insight={intelligence.insights[0]}
      />

      <IntelligenceRecommendationPanel
        recommendations={intelligence.recommendations}
      />
    </div>
  );
}