"use client";

import { ArrowRight, ClipboardList } from "lucide-react";
import { DashboardCard } from "@/app/components/ui/dashboard-card";

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
    <DashboardCard
      title="Executive Summary"
      description="Your business briefing"
      icon={<ClipboardList className="h-5 w-5 text-slate-700" />}
      action={
        <button
          type="button"
          className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 transition-colors hover:text-emerald-700"
        >
          View Report
          <ArrowRight className="h-4 w-4" />
        </button>
      }
    >
      {summaries.length === 0 ? (
        <div className="py-10 text-center">
          <p className="text-sm text-slate-500">
            No executive summary available.
          </p>
        </div>
      ) : (
        <div className="-mx-6 -my-6 divide-y divide-slate-100">
          {summaries.map((summary) => (
            <article
              key={summary.id}
              className="px-6 py-5 transition-colors hover:bg-slate-50"
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
    </DashboardCard>
  );
}