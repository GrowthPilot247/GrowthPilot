"use client";

/**
 * ============================================================
 * GrowthPilot Intelligence Recommendation Panel
 * ============================================================
 */

import { IntelligenceRecommendation } from "../types/intelligence.types";

interface IntelligenceRecommendationPanelProps {
  recommendations: IntelligenceRecommendation[];
}

export function IntelligenceRecommendationPanel({
  recommendations,
}: IntelligenceRecommendationPanelProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold text-slate-900">
        AI Recommendations
      </h3>

      <div className="space-y-4">
        {recommendations.map((recommendation) => (
          <div
            key={recommendation.id}
            className="rounded-xl border border-slate-100 bg-slate-50 p-4"
          >
            <h4 className="font-medium text-slate-900">
              {recommendation.title}
            </h4>

            <p className="mt-1 text-sm text-slate-600">
              {recommendation.description}
            </p>

            <div className="mt-3 flex items-center justify-between">
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                {recommendation.priority.toUpperCase()}
              </span>

              <span className="text-sm font-medium text-emerald-600">
                {recommendation.action}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}