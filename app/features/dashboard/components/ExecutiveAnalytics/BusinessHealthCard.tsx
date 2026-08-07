"use client";

import {
  Activity,
  ArrowUpRight,
  HeartPulse,
  Sparkles,
} from "lucide-react";

import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from "recharts";

const healthData = [
  {
    name: "Health",
    value: 92,
    fill: "#10b981",
  },
];

const departments = [
  {
    name: "Sales",
    score: 96,
  },
  {
    name: "Marketing",
    score: 91,
  },
  {
    name: "Finance",
    score: 89,
  },
  {
    name: "Operations",
    score: 94,
  },
  {
    name: "Customer Success",
    score: 93,
  },
];

export function BusinessHealthCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Header */}

      <div className="border-b border-slate-100 p-6">

        <div className="flex items-start justify-between">

          <div>

            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
              Business Health
            </p>

            <h3 className="mt-2 text-3xl font-bold text-slate-900">
              92 / 100
            </h3>

            <p className="mt-2 flex items-center gap-2 text-sm text-emerald-600">
              <ArrowUpRight className="h-4 w-4" />
              +7% improvement this month
            </p>

          </div>

          <div className="rounded-full bg-emerald-100 p-3">
            <HeartPulse className="h-6 w-6 text-emerald-600" />
          </div>

        </div>

      </div>

      {/* Gauge */}

      <div className="flex h-72 items-center justify-center">

        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            innerRadius="72%"
            outerRadius="100%"
            barSize={16}
            data={healthData}
            startAngle={90}
            endAngle={-270}
          >
            <RadialBar
              dataKey="value"
              cornerRadius={10}
            />
          </RadialBarChart>
        </ResponsiveContainer>

        <div className="absolute text-center">
          <p className="text-5xl font-bold text-slate-900">
            92
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Excellent
          </p>
        </div>

      </div>

      {/* Department Scores */}

      <div className="grid grid-cols-2 gap-4 border-t border-slate-100 p-6">

        {departments.map((department) => (
          <div
            key={department.name}
            className="rounded-xl border border-slate-100 bg-slate-50 p-4"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              {department.name}
            </p>

            <p className="mt-2 text-xl font-bold text-slate-900">
              {department.score}%
            </p>

          </div>
        ))}

      </div>

      {/* AI Summary */}

      <div className="border-t border-slate-100 bg-emerald-50 p-6">

        <div className="flex items-center gap-2">

          <Sparkles className="h-5 w-5 text-emerald-600" />

          <h4 className="font-semibold text-emerald-700">
            AI Executive Summary
          </h4>

        </div>

        <p className="mt-3 text-sm leading-6 text-slate-700">
          Overall business health continues to improve.
          Sales and Operations remain the strongest
          performing departments, while Finance has
          opportunities for optimization over the next
          reporting cycle.
        </p>

        <div className="mt-5 rounded-xl border border-emerald-200 bg-white p-4">

          <div className="flex items-center gap-2">

            <Activity className="h-5 w-5 text-emerald-600" />

            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
              Recommendation
            </p>

          </div>

          <p className="mt-2 text-sm text-slate-700">
            Maintain current sales momentum while
            improving Finance automation to increase
            operational efficiency.
          </p>

        </div>

      </div>

    </div>
  );
}