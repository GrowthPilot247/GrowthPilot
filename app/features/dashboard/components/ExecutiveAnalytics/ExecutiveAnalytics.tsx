"use client";

import { RevenueTrendChart } from "./RevenueTrendChart";
import { BusinessHealthGauge } from "./BusinessHealthGauge";
import { PipelineForecast } from "./PipelineForecast";
import { MarketingROI } from "./MarketingROI";
import { GrowthPrediction } from "./GrowthPrediction";

export function ExecutiveAnalytics() {
  return (
    <div className="rounded-2xl bg-white/10 p-6 backdrop-blur border border-white/10">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Executive Analytics
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            AI-powered business intelligence and executive insights
          </p>
        </div>

        <div className="rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-medium text-emerald-300">
          LIVE
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <RevenueTrendChart />
        <BusinessHealthGauge />
        <PipelineForecast />
        <MarketingROI />
      </div>

      <div className="mt-6">
        <GrowthPrediction />
      </div>
    </div>
  );
}