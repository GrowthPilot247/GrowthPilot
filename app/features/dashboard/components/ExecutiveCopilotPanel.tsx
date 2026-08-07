"use client";

import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

import { getExecutiveIntelligence } from "@/app/features/dashboard/services/executive-intelligence.service";
import { getHighestPriorityAlert } from "@/app/features/dashboard/services/executive-alert-engine.service";

import { PrioritiesPanel } from "./ExecutiveCopilot/PrioritiesPanel";
import { CopilotPrompt } from "./ExecutiveCopilot/CopilotPrompt";
import { ExecutiveAnalytics } from "./ExecutiveAnalytics";

export function ExecutiveCopilotPanel() {
  const intelligence = getExecutiveIntelligence();
  const alert = getHighestPriorityAlert();

  return (
    <section className="overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-900 p-8 text-white shadow-xl">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">
            <BrainCircuit className="h-4 w-4 text-emerald-300" />
            Executive Copilot
          </div>

          <h1 className="mt-5 text-4xl font-bold">
            {intelligence.greeting.title}
          </h1>

          <p className="mt-2 text-slate-300">
            {intelligence.greeting.subtitle}
          </p>
        </div>

        <div className="hidden rounded-full bg-emerald-500/20 px-4 py-2 text-sm lg:flex lg:items-center lg:gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          LIVE • {intelligence.greeting.updated}
        </div>
      </div>

      {/* Executive Highlights */}
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {intelligence.executiveBrief.map((item) => (
          <div
            key={item.id}
            className="flex gap-3"
          >
            <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-300" />

            <div>
              <p className="font-medium text-emerald-300">
                {item.category}
              </p>

              <p className="text-slate-200">
                {item.message}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Layout */}
      <div className="mt-8 grid gap-6 xl:grid-cols-3">

        {/* LEFT COLUMN */}
        <div className="space-y-6 xl:col-span-2">

          {/* Executive Brief */}
          <div className="rounded-xl bg-white/10 p-6 backdrop-blur">
            <h2 className="flex items-center gap-2 text-xl font-semibold">
              <TrendingUp className="h-5 w-5 text-emerald-300" />
              Executive Brief
            </h2>

            <div className="mt-5 space-y-3">
              {intelligence.executiveBrief.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-300" />

                  <div>
                    <p className="font-medium text-emerald-300">
                      {item.category}
                    </p>

                    <p className="text-slate-200">
                      {item.message}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Recommendations */}
          <div className="rounded-xl bg-white/10 p-6 backdrop-blur">
            <h2 className="flex items-center gap-2 text-xl font-semibold">
              <BrainCircuit className="h-5 w-5 text-sky-300" />
              AI Recommendations
            </h2>

            <div className="mt-5 space-y-4">
              {intelligence.recommendations.map((recommendation) => (
                <div
                  key={recommendation.id}
                  className="flex gap-3 rounded-lg bg-white/5 p-3"
                >
                  <ArrowRight className="mt-1 h-4 w-4 text-emerald-300" />

                  <div className="flex-1">
                    <p className="font-medium text-white">
                      {recommendation.title}
                    </p>

                    <p className="mt-1 text-sm text-slate-300">
                      {recommendation.description}
                    </p>

                    <span className="mt-2 inline-flex rounded-full bg-emerald-500/20 px-2 py-1 text-xs font-medium text-emerald-300">
                      Priority {recommendation.priority}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* NEW EXECUTIVE ANALYTICS */}
          <ExecutiveAnalytics />

        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">

          <PrioritiesPanel
            priorities={intelligence.priorities}
          />

          <CopilotPrompt />

          {/* Conversation Preview */}
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-slate-900">
            <h3 className="text-sm font-semibold">
              Conversation Preview
            </h3>

            <div className="mt-4 space-y-4 text-sm">

              <div>
                <p className="font-medium">
                  You
                </p>

                <p className="text-slate-600">
                  What should I focus on today?
                </p>
              </div>

              <div>
                <p className="font-medium text-emerald-700">
                  Executive Copilot
                </p>

                <p className="mt-1 text-slate-700">
                  Review the Enterprise Sales Pipeline first.
                  Customer acquisition is exceeding target,
                  while Retail churn requires immediate attention.
                </p>
              </div>

            </div>
          </div>

          {/* Executive Alert */}
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-slate-900">

            <div className="flex items-start gap-3">

              <div className="flex-1">

                <div className="flex items-center justify-between">
                  <p className="font-semibold text-amber-900">
                    {alert.title}
                  </p>

                  <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-semibold uppercase text-amber-800">
                    {alert.severity}
                  </span>
                </div>

                <p className="mt-2 text-sm text-amber-800">
                  {alert.message}
                </p>

                <div className="mt-3 rounded-md bg-white/70 p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Recommended Action
                  </p>

                  <p className="mt-1 text-sm text-slate-700">
                    {alert.recommendedAction}
                  </p>
                </div>

                <p className="mt-3 text-xs text-slate-500">
                  {alert.updatedAt}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}