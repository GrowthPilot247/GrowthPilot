"use client";

import { ArrowRight, TrendingUp } from "lucide-react";

export interface RevenueForecast {
  id: string;
  period: string;
  projectedRevenue: string;
  growth: string;
  confidence: number;
}

interface RevenueForecastWidgetProps {
  forecasts: RevenueForecast[];
}

export function RevenueForecastWidget({
  forecasts,
}: RevenueForecastWidgetProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-slate-100 p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-emerald-100 p-2">
            <TrendingUp className="h-5 w-5 text-emerald-600" />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Revenue Forecast
            </h2>

            <p className="text-sm text-slate-500">
              AI-powered revenue projections
            </p>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 transition-colors hover:text-emerald-700"
        >
          View Forecast

          <ArrowRight className="h-4 w-4" />
        </button>
      </header>

      {forecasts.length === 0 ? (
        <div className="p-10 text-center">
          <p className="text-sm text-slate-500">
            No forecast data available.
          </p>
        </div>
      ) : (
        <div className="divide-y divide-slate-100">
          {forecasts.map((forecast) => (
            <article
              key={forecast.id}
              className="p-5 transition-colors hover:bg-slate-50"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-slate-900">
                  {forecast.period}
                </h3>

                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                  {forecast.growth}
                </span>
              </div>

              <div className="mt-3 text-2xl font-bold text-slate-900">
                {forecast.projectedRevenue}
              </div>

              <div className="mt-3 flex items-center justify-between text-sm">
                <span className="text-slate-500">
                  AI Confidence
                </span>

                <span className="font-semibold text-emerald-600">
                  {forecast.confidence}%
                </span>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}