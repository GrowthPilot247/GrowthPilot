"use client";

import {
  Bot,
  ChevronRight,
  Sparkles,
} from "lucide-react";

import type { AIAssistantProps } from "./AIAssistant.types";

export function AIAssistant({
  userName,
  actions,
}: AIAssistantProps) {
  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative overflow-hidden bg-slate-950 p-6">
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl" />

        <div className="relative flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
            <Bot className="h-6 w-6" />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-emerald-400" />

              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                GrowthPilot AI
              </p>
            </div>

            <h2 className="mt-2 text-xl font-bold text-white">
              Hello, {userName}
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              Your AI assistant is ready to help you take
              the next step in your growth journey.
            </p>
          </div>
        </div>
      </div>

      {actions.length > 0 ? (
        <div className="p-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Suggested Actions
          </p>

          <div className="space-y-2">
            {actions.map((action) => (
              <button
                key={action.id}
                type="button"
                className="group flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-left transition-colors hover:border-emerald-200 hover:bg-emerald-50"
              >
                <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">
                  {action.title}
                </span>

                <ChevronRight className="h-4 w-4 shrink-0 text-slate-400 group-hover:text-emerald-600" />
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="p-5">
          <p className="text-sm text-slate-500">
            No suggested actions are available right now.
          </p>
        </div>
      )}
    </section>
  );
}
