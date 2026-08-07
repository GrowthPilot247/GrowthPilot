"use client";

import {
  ArrowTrendingUpIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export function GrowthPrediction() {
  return (
    <div className="rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 p-8 text-white shadow-xl">
      <div className="flex items-start justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm">
            <SparklesIcon className="h-5 w-5" />
            AI Growth Prediction
          </div>

          <h2 className="mt-5 text-4xl font-bold">
            +24% Revenue Forecast
          </h2>

          <p className="mt-3 max-w-2xl text-emerald-100">
            GrowthPilot AI predicts revenue growth of
            approximately 24% over the next quarter
            based on sales velocity, marketing ROI,
            customer retention, and pipeline strength.
          </p>
        </div>

        <ArrowTrendingUpIcon className="h-20 w-20 opacity-20" />
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-4">
        <div className="rounded-xl bg-white/10 p-5 backdrop-blur">
          <p className="text-sm text-emerald-100">
            Confidence
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            94%
          </h3>
        </div>

        <div className="rounded-xl bg-white/10 p-5 backdrop-blur">
          <p className="text-sm text-emerald-100">
            Revenue
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            +24%
          </h3>
        </div>

        <div className="rounded-xl bg-white/10 p-5 backdrop-blur">
          <p className="text-sm text-emerald-100">
            Risk Level
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            Low
          </h3>
        </div>

        <div className="rounded-xl bg-white/10 p-5 backdrop-blur">
          <p className="text-sm text-emerald-100">
            Recommendation
          </p>

          <h3 className="mt-2 text-xl font-bold">
            Scale Marketing
          </h3>
        </div>
      </div>
    </div>
  );
}