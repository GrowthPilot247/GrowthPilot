"use client";

/**
 * ============================================================
 * GrowthPilot Executive Insight Card
 * ============================================================
 */

import { IntelligenceInsight } from "../types/intelligence.types";

interface ExecutiveInsightCardProps {
  insight: IntelligenceInsight;
}

const priorityClasses: Record<
  IntelligenceInsight["priority"],
  string
> = {
  low: "bg-slate-100 text-slate-700",
  medium: "bg-amber-100 text-amber-700",
  high: "bg-red-100 text-red-700",
  critical: "bg-red-200 text-red-800",
};

export function ExecutiveInsightCard({
  insight,
}: ExecutiveInsightCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            {insight.title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            {insight.description}
          </p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold uppercase ${
            priorityClasses[insight.priority]
          }`}
        >
          {insight.priority}
        </span>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
        <span className="text-sm text-slate-500">
          Confidence
        </span>

        <span className="text-lg font-bold text-emerald-600">
          {insight.confidence}%
        </span>
      </div>
    </div>
  );
}
