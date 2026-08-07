"use client";

import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";

const pipelineData = [
  { stage: "Lead", value: 120 },
  { stage: "Qualified", value: 92 },
  { stage: "Proposal", value: 67 },
  { stage: "Negotiation", value: 41 },
  { stage: "Won", value: 28 },
];

export function PipelineForecast() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Pipeline Forecast
        </p>

        <h3 className="mt-1 text-3xl font-bold text-slate-900">
          $2.8M
        </h3>

        <p className="text-sm text-emerald-600">
          Expected revenue this quarter
        </p>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={pipelineData}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e5e7eb"
            />

            <XAxis
              dataKey="stage"
              tick={{ fill: "#64748b" }}
            />

            <YAxis
              tick={{ fill: "#64748b" }}
            />

            <Tooltip />

            <Bar
              dataKey="value"
              fill="#2563eb"
              radius={[8, 8, 0, 0]}
              animationDuration={1500}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}