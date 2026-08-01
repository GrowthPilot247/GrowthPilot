"use client";

import { Bot, Sparkles, ArrowRight } from "lucide-react";

export function AIAssistant() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
          <Bot className="h-5 w-5 text-blue-600" />
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            AI Assistant
          </h2>
          <p className="text-sm text-slate-500">
            Your intelligent business copilot
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-lg bg-slate-50 p-4">
        <p className="text-sm text-slate-700">
          Ask GrowthPilot AI to generate marketing campaigns, analyze business
          performance, write proposals, or recommend your next growth strategy.
        </p>
      </div>

      <div className="mt-6 space-y-3">
        <button
          type="button"
          className="flex w-full items-center justify-between rounded-lg border border-slate-200 p-3 text-left transition-colors hover:bg-slate-50"
        >
          <span className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-blue-600" />
            Generate Marketing Plan
          </span>

          <ArrowRight className="h-4 w-4 text-slate-400" />
        </button>

        <button
          type="button"
          className="flex w-full items-center justify-between rounded-lg border border-slate-200 p-3 text-left transition-colors hover:bg-slate-50"
        >
          <span className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-blue-600" />
            Analyze Dashboard
          </span>

          <ArrowRight className="h-4 w-4 text-slate-400" />
        </button>

        <button
          type="button"
          className="flex w-full items-center justify-between rounded-lg border border-slate-200 p-3 text-left transition-colors hover:bg-slate-50"
        >
          <span className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-blue-600" />
            Create Business Strategy
          </span>

          <ArrowRight className="h-4 w-4 text-slate-400" />
        </button>
      </div>
    </section>
  );
}