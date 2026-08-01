"use client";

import { ArrowRight, Target } from "lucide-react";

export type GoalStatus =
  | "On Track"
  | "At Risk"
  | "Completed";

export interface GoalItem {
  id: string;
  title: string;
  progress: number;
  status: GoalStatus;
}

interface GoalsWidgetProps {
  goals: GoalItem[];
}

const statusStyles: Record<GoalStatus, string> = {
  "On Track": "bg-emerald-100 text-emerald-700",
  "At Risk": "bg-amber-100 text-amber-700",
  Completed: "bg-blue-100 text-blue-700",
};

const progressStyles: Record<GoalStatus, string> = {
  "On Track": "bg-emerald-500",
  "At Risk": "bg-amber-500",
  Completed: "bg-blue-500",
};

export function GoalsWidget({
  goals,
}: GoalsWidgetProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-slate-100 p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-blue-100 p-2">
            <Target className="h-5 w-5 text-blue-600" />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Goals & KPIs
            </h2>

            <p className="text-sm text-slate-500">
              Track business objectives
            </p>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 transition-colors hover:text-emerald-700"
        >
          View Goals

          <ArrowRight className="h-4 w-4" />
        </button>
      </header>

      {/* Content */}
      {goals.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-10 text-center">
          <Target className="mb-3 h-10 w-10 text-slate-300" />

          <h3 className="font-medium text-slate-900">
            No Goals Available
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Create business goals to monitor progress.
          </p>
        </div>
      ) : (
        <div className="space-y-6 p-6">
          {goals.map((goal) => (
            <div key={goal.id}>
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-medium text-slate-900">
                  {goal.title}
                </h3>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[goal.status]}`}
                >
                  {goal.status}
                </span>
              </div>

              <div className="mb-2 h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${progressStyles[goal.status]}`}
                  style={{
                    width: `${goal.progress}%`,
                  }}
                />
              </div>

              <div className="text-right text-sm font-medium text-slate-600">
                {goal.progress}%
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}