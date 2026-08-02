"use client";

import {
  AlertTriangle,
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import { getExecutiveIntelligence } from "@/app/features/dashboard/services/executive-intelligence.service";


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
        <div className="xl:col-span-2 space-y-6">
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

            <div className="mt-5 space-y-3">
              {intelligence.recommendations.map((item) => (
                <div key={item} className="flex gap-3">
                  <ArrowRight className="mt-1 h-4 w-4 text-emerald-300" />
                  <p className="text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white text-slate-900 shadow-2xl">
          <div className="border-b p-6">
            <h2 className="text-xl font-bold">Today's Priorities</h2>
          </div>

          <div className="space-y-3 p-6">
            {intelligence.priorities.map((task) => (
              <div
                key={task}
                className="flex items-center gap-3 rounded-lg border p-3"
              >
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                <span>{task}</span>
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

            <div className="mt-5 rounded-lg bg-amber-50 p-4">
              <div className="flex items-start gap-2">
                <AlertTriangle className="mt-0.5 h-5 w-5 text-amber-600" />
                <div>
                  <p className="font-medium text-amber-900">
                    AI Risk Alert
                  </p>
                  <p className="mt-1 text-sm text-amber-800">
                    Two overdue invoices should be reviewed within the
                    next 48 hours.
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
const intelligence = getExecutiveIntelligence();