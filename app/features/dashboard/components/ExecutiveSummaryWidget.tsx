"use client";

import { ArrowRight, ClipboardList } from "lucide-react";

export interface ExecutiveSummaryItem {
  id: string;
  title: string;
  description: string;
}

interface ExecutiveSummaryWidgetProps {
  summaries: ExecutiveSummaryItem[];
}

export function ExecutiveSummaryWidget({
  summaries,
}: ExecutiveSummaryWidgetProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-slate-100 p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-slate-100 p-2">
            <ClipboardList className="h-5 w-5 text-slate-700" />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Executive Summary
            </h2>

            <p className="text-sm text-slate-500">
              Your business briefing
            </p>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 transition-colors hover:text-emerald-700"
        >
          View Report

          <ArrowRight className="h-4 w-4" />
        </button>
      </header>

      {/* Content */}
      {summaries.length === 0 ? (
        <div className="p-10 text-center">
          <p className="text-sm text-slate-500">
            No executive summary available.
          </p>
        </div>
      ) : (
        <div className="divide-y divide-slate-100">
          {summaries.map((summary) => (
            <article
              key={summary.id}
              className="p-5 transition-colors hover:bg-slate-50"
            >
              <h3 className="font-medium text-slate-900">
                {summary.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {summary.description}
              </p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}