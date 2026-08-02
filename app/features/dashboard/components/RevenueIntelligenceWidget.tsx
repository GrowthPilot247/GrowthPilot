"use client";

import {
  ArrowRight,
  BrainCircuit,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";

export interface RevenueForecast {
  period: string;
  amount: string;
  growth: string;
}

export interface RevenueScenario {
  best: string;
  expected: string;
  worst: string;
}

export interface RevenueIntelligence {
  forecast: RevenueForecast;
  scenario: RevenueScenario;
  confidence: number;
  explanation: string;
  recommendation: string;
  risk: "Low" | "Medium" | "High";
}

interface RevenueIntelligenceWidgetProps {
  intelligence: RevenueIntelligence;
}

const riskStyles = {
  Low: "bg-emerald-100 text-emerald-700",
  Medium: "bg-amber-100 text-amber-700",
  High: "bg-red-100 text-red-700",
};

export function RevenueIntelligenceWidget({
  intelligence,
}: RevenueIntelligenceWidgetProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white shadow-sm">

      <header className="flex items-center justify-between border-b border-slate-100 p-6">

        <div className="flex items-center gap-3">

          <div className="rounded-full bg-violet-100 p-2">
            <BrainCircuit className="h-5 w-5 text-violet-600" />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              AI Revenue Intelligence
            </h2>

            <p className="text-sm text-slate-500">
              Forecast • Analysis • Recommendation
            </p>
          </div>

        </div>

        <button
          className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-700"
        >
          View Details
          <ArrowRight className="h-4 w-4" />
        </button>

      </header>

      <div className="space-y-6 p-6">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-slate-500">
              Expected Revenue
            </p>

            <h3 className="mt-1 text-3xl font-bold text-slate-900">
              {intelligence.forecast.amount}
            </h3>

          </div>

          <div className="rounded-full bg-emerald-100 px-4 py-2 text-emerald-700 font-semibold">
            <TrendingUp className="mr-1 inline h-4 w-4" />
            {intelligence.forecast.growth}
          </div>

        </div>

        <div className="grid grid-cols-3 gap-3">

          <div className="rounded-lg bg-emerald-50 p-4">
            <p className="text-xs text-slate-500">Best</p>
            <p className="mt-1 font-semibold">
              {intelligence.scenario.best}
            </p>
          </div>

          <div className="rounded-lg bg-blue-50 p-4">
            <p className="text-xs text-slate-500">Expected</p>
            <p className="mt-1 font-semibold">
              {intelligence.scenario.expected}
            </p>
          </div>

          <div className="rounded-lg bg-red-50 p-4">
            <p className="text-xs text-slate-500">Worst</p>
            <p className="mt-1 font-semibold">
              {intelligence.scenario.worst}
            </p>
          </div>

        </div>

        <div>

          <h4 className="font-semibold text-slate-900">
            AI Explanation
          </h4>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            {intelligence.explanation}
          </p>

        </div>

        <div>

          <h4 className="font-semibold text-slate-900">
            Recommendation
          </h4>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            {intelligence.recommendation}
          </p>

        </div>

        <div className="flex items-center justify-between">

          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${riskStyles[intelligence.risk]}`}
          >
            <AlertTriangle className="mr-1 inline h-3 w-3" />
            Risk: {intelligence.risk}
          </span>

          <span className="font-semibold text-violet-600">
            AI Confidence {intelligence.confidence}%
          </span>

        </div>

      </div>

    </section>
  );
}