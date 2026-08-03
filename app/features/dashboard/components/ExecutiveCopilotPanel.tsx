"use client";

import {
  AlertTriangle,
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

import { getExecutiveIntelligence } from "@/app/features/dashboard/services/executive-intelligence.service";
import { getHighestPriorityAlert } from "@/app/features/dashboard/services/executive-alert-engine.service";

const intelligence = getExecutiveIntelligence();
const alert = getHighestPriorityAlert();

export function ExecutiveCopilotPanel() {
  return (
    <section className="overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-900 p-8 text-white shadow-xl">
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

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {intelligence.executiveBrief.map((item) => (
          <div key={item.id} className="flex gap-3">
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

      <div className="mt-8 grid gap-6 xl:grid-cols-3">
        <div className="space-y-6 xl:col-span-2">
          <div className="rounded-xl bg-white/10 p-6 backdrop-blur">
            <h2 className="flex items-center gap-2 text-xl font-semibold">
              <TrendingUp className="h-5 w-5 text-emerald-300" />
              Executive Brief
            </h2>

            <div className="mt-5 space-y-3">
              {intelligence.executiveBrief.map((item) => (
                <div key={item.id} className="flex gap-3">
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
        </div>

        <div className="rounded-2xl bg-white text-slate-900 shadow-2xl">
          <div className="border-b p-6">
            <h2 className="text-xl font-bold">
              Today's Priorities
            </h2>
          </div>

          <div className="space-y-3 p-6">
            {intelligence.priorities.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between rounded-lg border p-3"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />

                  <span>{task.title}</span>
                </div>

                {task.due && (
                  <span className="text-xs font-medium text-slate-500">
                    {task.due}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="border-t p-6">
            <div className="mb-4 rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-500">
              Ask Executive Copilot...
            </div>

            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-700"
            >
              Start Conversation
              <ArrowRight className="h-4 w-4" />
            </button>

            <div className="mt-5 rounded-lg border border-amber-200 bg-amber-50 p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-0.5 h-5 w-5 text-amber-600" />

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
      </div>
    </section>
  );
}