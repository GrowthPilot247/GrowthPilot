"use client";

import { RevenueIntelligence } from "./RevenueIntelligence";
import { BusinessHealthCard } from "./BusinessHealthCard";
import { PipelineIntelligence } from "./PipelineIntelligence";
import { MarketingIntelligence } from "./MarketingIntelligence";
import { AIGrowthForecast } from "./AIGrowthForecast";
import { ExecutiveInsightStrip } from "./ExecutiveInsightStrip";

export function ExecutiveAnalytics() {
  return (
    <section className="space-y-8">

      {/* Header */}

      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
            Executive Intelligence
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Executive Analytics
          </h2>

          <p className="mt-2 max-w-3xl text-slate-600">
            Executive intelligence generated from revenue,
            sales, marketing, customer success and business
            health signals across the GrowthPilot platform.
          </p>
        </div>

        <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
            Executive Status
          </p>

          <p className="mt-1 text-lg font-bold text-emerald-700">
            Healthy
          </p>
        </div>
      </div>

      {/* KPI Cards */}

      <div className="grid gap-6 lg:grid-cols-2">
        <RevenueIntelligence />

        <BusinessHealthCard />

        <PipelineIntelligence />

        <MarketingIntelligence />
      </div>

      {/* AI Forecast */}

      <AIGrowthForecast />

      {/* Executive Insights */}

      <ExecutiveInsightStrip />

    </section>
  );
}