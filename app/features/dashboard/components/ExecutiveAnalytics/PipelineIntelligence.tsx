"use client";

import {
  TrendingUp,
  BriefcaseBusiness,
  Sparkles,
  Target,
} from "lucide-react";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const pipelineData = [
  {
    stage: "Leads",
    value: 320,
  },
  {
    stage: "Qualified",
    value: 250,
  },
  {
    stage: "Proposal",
    value: 180,
  },
  {
    stage: "Negotiation",
    value: 110,
  },
  {
    stage: "Closing",
    value: 82,
  },
];

export function PipelineIntelligence() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Header */}

      <div className="border-b border-slate-100 p-6">

        <div className="flex items-start justify-between">

          <div>

            <p className="text-sm font-semibold uppercase tracking-wide text-sky-600">
              Pipeline Intelligence
            </p>

            <h3 className="mt-2 text-3xl font-bold text-slate-900">
              $2.8M
            </h3>

            <p className="mt-2 flex items-center gap-2 text-sm text-sky-600">
              <TrendingUp className="h-4 w-4" />
              +14% pipeline growth
            </p>

          </div>

          <div className="rounded-full bg-sky-100 p-3">
            <BriefcaseBusiness className="h-6 w-6 text-sky-600" />
          </div>

        </div>

      </div>

      {/* Chart */}

      <div className="h-72 px-4 pt-6">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <BarChart data={pipelineData}>

            <CartesianGrid strokeDasharray="4 4" />

            <XAxis dataKey="stage" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="value"
              radius={[8, 8, 0, 0]}
              fill="#0284c7"
            />

          </BarChart>
        </ResponsiveContainer>

      </div>

      {/* Metrics */}

      <div className="grid grid-cols-2 gap-4 border-t border-slate-100 p-6">

        <div>

          <p className="text-xs uppercase tracking-wide text-slate-500">
            Win Probability
          </p>

          <p className="mt-2 text-2xl font-bold text-slate-900">
            83%
          </p>

        </div>

        <div>

          <p className="text-xs uppercase tracking-wide text-slate-500">
            Expected Close
          </p>

          <p className="mt-2 text-2xl font-bold text-slate-900">
            21 Days
          </p>

        </div>

      </div>

      {/* Forecast Breakdown */}

      <div className="grid grid-cols-3 gap-3 border-t border-slate-100 bg-slate-50 p-6">

        <div className="rounded-xl bg-white p-4 shadow-sm">

          <p className="text-xs uppercase tracking-wide text-slate-500">
            Enterprise
          </p>

          <p className="mt-2 text-lg font-bold text-slate-900">
            $1.6M
          </p>

        </div>

        <div className="rounded-xl bg-white p-4 shadow-sm">

          <p className="text-xs uppercase tracking-wide text-slate-500">
            SMB
          </p>

          <p className="mt-2 text-lg font-bold text-slate-900">
            $900K
          </p>

        </div>

        <div className="rounded-xl bg-white p-4 shadow-sm">

          <p className="text-xs uppercase tracking-wide text-slate-500">
            Expansion
          </p>

          <p className="mt-2 text-lg font-bold text-slate-900">
            $300K
          </p>

        </div>

      </div>

      {/* AI Insight */}

      <div className="border-t border-slate-100 bg-sky-50 p-6">

        <div className="flex items-center gap-2">

          <Sparkles className="h-5 w-5 text-sky-600" />

          <h4 className="font-semibold text-sky-700">
            AI Sales Insight
          </h4>

        </div>

        <p className="mt-3 text-sm leading-6 text-slate-700">
          Enterprise opportunities continue to dominate
          the sales pipeline with a strong conversion
          trend from Proposal to Negotiation. Current
          pipeline strength supports projected revenue
          targets for the upcoming quarter.
        </p>

        <div className="mt-5 rounded-xl border border-sky-200 bg-white p-4">

          <div className="flex items-center gap-2">

            <Target className="h-5 w-5 text-sky-600" />

            <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">
              Executive Recommendation
            </p>

          </div>

          <p className="mt-2 text-sm text-slate-700">
            Prioritize high-value Enterprise deals in the
            Negotiation stage to maximize quarterly
            revenue while accelerating follow-ups on
            qualified opportunities.
          </p>

        </div>

      </div>

    </div>
  );
}