"use client";

import {
  Megaphone,
  Sparkles,
  TrendingUp,
  Target,
} from "lucide-react";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const campaignData = [
  {
    name: "LinkedIn",
    value: 42,
  },
  {
    name: "Google",
    value: 28,
  },
  {
    name: "Facebook",
    value: 18,
  },
  {
    name: "Email",
    value: 12,
  },
];

const COLORS = [
  "#10b981",
  "#0ea5e9",
  "#f59e0b",
  "#8b5cf6",
];

export function MarketingIntelligence() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Header */}

      <div className="border-b border-slate-100 p-6">

        <div className="flex items-start justify-between">

          <div>

            <p className="text-sm font-semibold uppercase tracking-wide text-violet-600">
              Marketing Intelligence
            </p>

            <h3 className="mt-2 text-3xl font-bold text-slate-900">
              326%
            </h3>

            <p className="mt-2 flex items-center gap-2 text-sm text-violet-600">
              <TrendingUp className="h-4 w-4" />
              Overall Marketing ROI
            </p>

          </div>

          <div className="rounded-full bg-violet-100 p-3">
            <Megaphone className="h-6 w-6 text-violet-600" />
          </div>

        </div>

      </div>

      {/* Donut Chart */}

      <div className="h-72 px-4 pt-6">

        <ResponsiveContainer width="100%" height="100%">
          <PieChart>

            <Pie
              data={campaignData}
              dataKey="value"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={3}
            >

              {campaignData.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[index]}
                />
              ))}

            </Pie>

            <Tooltip />

          </PieChart>
        </ResponsiveContainer>

      </div>

      {/* KPI Grid */}

      <div className="grid grid-cols-2 gap-4 border-t border-slate-100 p-6">

        <div>

          <p className="text-xs uppercase tracking-wide text-slate-500">
            ROAS
          </p>

          <p className="mt-2 text-2xl font-bold text-slate-900">
            7.4x
          </p>

        </div>

        <div>

          <p className="text-xs uppercase tracking-wide text-slate-500">
            Cost Per Lead
          </p>

          <p className="mt-2 text-2xl font-bold text-slate-900">
            $18
          </p>

        </div>

        <div>

          <p className="text-xs uppercase tracking-wide text-slate-500">
            Conversion
          </p>

          <p className="mt-2 text-2xl font-bold text-slate-900">
            9.3%
          </p>

        </div>

        <div>

          <p className="text-xs uppercase tracking-wide text-slate-500">
            Best Campaign
          </p>

          <p className="mt-2 text-lg font-bold text-slate-900">
            LinkedIn
          </p>

        </div>

      </div>

      {/* Channel Breakdown */}

      <div className="border-t border-slate-100 bg-slate-50 p-6">

        <h4 className="text-sm font-semibold text-slate-700">
          Channel Performance
        </h4>

        <div className="mt-4 space-y-3">

          {campaignData.map((channel) => (

            <div
              key={channel.name}
              className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm"
            >

              <span className="font-medium text-slate-700">
                {channel.name}
              </span>

              <span className="font-bold text-slate-900">
                {channel.value}%
              </span>

            </div>

          ))}

        </div>

      </div>

      {/* AI Insight */}

      <div className="border-t border-slate-100 bg-violet-50 p-6">

        <div className="flex items-center gap-2">

          <Sparkles className="h-5 w-5 text-violet-600" />

          <h4 className="font-semibold text-violet-700">
            AI Marketing Insight
          </h4>

        </div>

        <p className="mt-3 text-sm leading-6 text-slate-700">
          LinkedIn continues to outperform all other
          acquisition channels with the highest
          conversion quality and customer lifetime value.
          Current campaign efficiency indicates further
          scaling opportunities.
        </p>

        <div className="mt-5 rounded-xl border border-violet-200 bg-white p-4">

          <div className="flex items-center gap-2">

            <Target className="h-5 w-5 text-violet-600" />

            <p className="text-xs font-semibold uppercase tracking-wide text-violet-700">
              Executive Recommendation
            </p>

          </div>

          <p className="mt-2 text-sm text-slate-700">
            Increase LinkedIn advertising budget by
            approximately 20% while maintaining current
            Google Search investment. Monitor Facebook
            campaigns for optimization opportunities.
          </p>

        </div>

      </div>

    </div>
  );
}