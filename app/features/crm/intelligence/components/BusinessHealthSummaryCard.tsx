"use client";

/**
 * ============================================================
 * GrowthPilot Business Health Summary Card
 * ============================================================
 */

import { BusinessHealthIntelligence } from "../types/models/BusinessHealthIntelligence";

interface BusinessHealthSummaryCardProps {
  intelligence: BusinessHealthIntelligence;
}

export function BusinessHealthSummaryCard({
  intelligence,
}: BusinessHealthSummaryCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Business Health
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Overall business performance
          </p>
        </div>

        <div className="text-right">
          <p className="text-4xl font-bold text-emerald-600">
            {intelligence.overallHealth}%
          </p>

          <p className="text-sm text-slate-500">
            {intelligence.trend}
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-5">
        <Metric
          label="Sales"
          value={intelligence.metrics.salesScore}
        />

        <Metric
          label="Marketing"
          value={intelligence.metrics.marketingScore}
        />

        <Metric
          label="Customers"
          value={intelligence.metrics.customerScore}
        />

        <Metric
          label="Revenue"
          value={intelligence.metrics.revenueScore}
        />

        <Metric
          label="Pipeline"
          value={intelligence.metrics.pipelineScore}
        />
      </div>
    </div>
  );
}

interface MetricProps {
  label: string;
  value: number;
}

function Metric({
  label,
  value,
}: MetricProps) {
  return (
    <div className="rounded-xl bg-slate-50 p-3 text-center">
      <p className="text-xs uppercase tracking-wide text-slate-500">
        {label}
      </p>

      <p className="mt-2 text-2xl font-bold text-slate-900">
        {value}
      </p>
    </div>
  );
}