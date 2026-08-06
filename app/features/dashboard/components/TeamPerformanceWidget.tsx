"use client";

import { ArrowRight, TrendingUp, UserRound } from "lucide-react";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  tasksCompleted: number;
  performance: number;
  trend: "up" | "down" | "stable";
}

interface TeamPerformanceWidgetProps {
  members: TeamMember[];
}

const trendColors = {
  up: "text-emerald-600",
  down: "text-red-600",
  stable: "text-slate-500",
};

export function TeamPerformanceWidget({
  members,
}: TeamPerformanceWidgetProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <header className="flex items-center justify-between border-b border-slate-100 p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-blue-100 p-2">
            <TrendingUp className="h-5 w-5 text-blue-600" />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Team Performance
            </h2>

            <p className="text-sm text-slate-500">
              Top contributors this week
            </p>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 transition-colors hover:text-emerald-700"
        >
          View Team
          <ArrowRight className="h-4 w-4" />
        </button>
      </header>

      {members.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-10 text-center">
          <UserRound className="mb-3 h-10 w-10 text-slate-300" />
          <h3 className="font-medium text-slate-900">
            No performance data
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            Team statistics will appear here.
          </p>
        </div>
      ) : (
        <div className="divide-y divide-slate-100">
          {members.map((member) => (
            <div
              key={member.id}
              className="flex items-center justify-between p-5 transition-colors hover:bg-slate-50"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>

                <div>
                  <h3 className="font-medium text-slate-900">
                    {member.name}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {member.role}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {member.tasksCompleted} tasks completed
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-lg font-semibold text-slate-900">
                  {member.performance}%
                </p>

                <p
                  className={`text-xs font-medium ${trendColors[member.trend]}`}
                >
                  {member.trend === "up"
                    ? "▲ Improving"
                    : member.trend === "down"
                    ? "▼ Declining"
                    : "▬ Stable"}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}