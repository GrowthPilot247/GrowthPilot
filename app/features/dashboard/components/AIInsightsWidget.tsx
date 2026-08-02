"use client";

import { ArrowRight, BrainCircuit, Sparkles } from "lucide-react";

export type InsightType =
  | "success"
  | "warning"
  | "info";

export interface AIInsight {
  id: string;
  title: string;
  recommendation: string;
  confidence: number;
  type: InsightType;
}

interface AIInsightsWidgetProps {
  insights: AIInsight[];
}

const badgeStyles: Record<InsightType, string> = {
  success: "bg-emerald-100 text-emerald-700",
  warning: "bg-amber-100 text-amber-700",
  info: "bg-blue-100 text-blue-700",
};

export function AIInsightsWidget({
  insights,
}: AIInsightsWidgetProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-slate-100 p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-violet-100 p-2">
            <BrainCircuit className="h-5 w-5 text-violet-600" />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              AI Insights
            </h2>

            <p className="text-sm text-slate-500">
              Explainable business recommendations
            </p>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 transition-colors hover:text-emerald-700"
        >
          View All

          <ArrowRight className="h-4 w-4" />
        </button>
      </header>

      {insights.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-10 text-center">
          <BrainCircuit className="mb-3 h-10 w-10 text-slate-300" />

          <h3 className="font-medium text-slate-900">
            No AI Insights
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Insights will appear as business data becomes available.
          </p>
        </div>
      ) : (
        <div className="divide-y divide-slate-100">
          {insights.map((insight) => (
            <article
              key={insight.id}
              className="p-5 transition-colors hover:bg-slate-50"
            >
              <div className="mb-3 flex items-start justify-between gap-4">
                <h3 className="font-medium text-slate-900">
                  {insight.title}
                </h3>

                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${badgeStyles[insight.type]}`}
                >
                  {insight.type}
                </span>
              </div>

              <p className="text-sm leading-6 text-slate-600">
                {insight.recommendation}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-sm text-slate-500">
                  <Sparkles className="h-4 w-4 text-violet-500" />
                  AI Confidence
                </div>

                <span className="font-semibold text-violet-600">
                  {insight.confidence}%
                </span>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}