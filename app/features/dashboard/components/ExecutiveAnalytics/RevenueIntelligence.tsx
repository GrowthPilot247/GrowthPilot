"use client";

import {
  ArrowTrendingUpIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 220 },
  { month: "Feb", revenue: 245 },
  { month: "Mar", revenue: 270 },
  { month: "Apr", revenue: 295 },
  { month: "May", revenue: 338 },
  { month: "Jun", revenue: 382 },
];

export function RevenueIntelligence() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="border-b border-slate-100 p-6">

        <div className="flex items-start justify-between">

          <div>

            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
              Revenue Intelligence
            </p>

            <h3 className="mt-2 text-3xl font-bold text-slate-900">
              $483,000
            </h3>

            <p className="mt-2 flex items-center gap-2 text-sm text-emerald-600">
              <ArrowTrendingUpIcon className="h-5 w-5" />
              +18.4% vs last month
            </p>

          </div>

          <div className="rounded-full bg-emerald-100 p-3">
            <SparklesIcon className="h-6 w-6 text-emerald-600" />
          </div>

        </div>

      </div>

      <div className="h-72 px-4 pt-6">

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
                  offset="0%"
                  stopColor="#10b981"
                  stopOpacity={0.35}
                />

                <stop
                  offset="100%"
                  stopColor="#10b981"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="4 4" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#10b981"
              strokeWidth={3}
              fill="url(#revenueGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>

      </div>

      <div className="grid grid-cols-2 gap-4 border-t border-slate-100 p-6">

        <div>

          <p className="text-xs uppercase tracking-wide text-slate-500">
            Forecast
          </p>

          <p className="mt-2 text-2xl font-bold text-slate-900">
            $1.42M
          </p>

        </div>

        <div>

          <p className="text-xs uppercase tracking-wide text-slate-500">
            Confidence
          </p>

          <p className="mt-2 text-2xl font-bold text-slate-900">
            96%
          </p>

        </div>

      </div>

      <div className="border-t border-slate-100 bg-emerald-50 p-6">

        <div className="flex items-center gap-2">

          <SparklesIcon className="h-5 w-5 text-emerald-600" />

          <h4 className="font-semibold text-emerald-700">
            AI Insight
          </h4>

        </div>

        <p className="mt-3 text-sm leading-6 text-slate-700">
          Revenue acceleration is primarily driven by
          Enterprise customers. Current sales velocity
          indicates sustained momentum throughout the
          next quarter.
        </p>

        <div className="mt-5 rounded-xl border border-emerald-200 bg-white p-4">

          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
            Executive Recommendation
          </p>

          <p className="mt-2 text-sm text-slate-700">
            Increase Enterprise acquisition investment
            by 15% while maintaining current customer
            retention initiatives.
          </p>

        </div>

      </div>

    </div>
  );
}