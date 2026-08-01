"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { RevenueChartProps } from "./RevenueChart.types";

export function RevenueChart({
  data,
}: RevenueChartProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Revenue Analytics
        </h2>

        <p className="text-sm text-slate-500">
          Monthly revenue performance
        </p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
            />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
  type="monotone"
  dataKey="revenue"
  stroke="#10B981"
  strokeWidth={4}
  dot={{ r: 5 }}
  activeDot={{ r: 8 }}
/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}