"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 180 },
  { month: "Feb", revenue: 210 },
  { month: "Mar", revenue: 240 },
  { month: "Apr", revenue: 270 },
  { month: "May", revenue: 310 },
  { month: "Jun", revenue: 355 },
  { month: "Jul", revenue: 392 },
];

export function RevenueTrendChart() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Revenue Trend
        </p>

        <h3 className="mt-1 text-3xl font-bold text-slate-900">
          +18.4%
        </h3>

        <p className="text-sm text-emerald-600">
          Compared with last month
        </p>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={revenueData}>
            <defs>
              <linearGradient
                id="revenueGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#10b981"
                  stopOpacity={0.4}
                />

                <stop
                  offset="95%"
                  stopColor="#10b981"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e5e7eb"
            />

            <XAxis
              dataKey="month"
              tick={{ fill: "#64748b" }}
            />

            <YAxis
              tick={{ fill: "#64748b" }}
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#10b981"
              strokeWidth={4}
              fill="url(#revenueGradient)"
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}