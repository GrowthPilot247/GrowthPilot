"use client";

import {
  BrainCircuit,
  Sparkles,
  TrendingUp,
  Users,
  DollarSign,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

export function AIGrowthForecast() {
  return (
    <section className="overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white shadow-2xl">

      {/* Header */}

      <div className="border-b border-white/10 p-8">

        <div className="flex items-center justify-between">

          <div>

            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">

              <BrainCircuit className="h-5 w-5 text-emerald-300" />

              AI Growth Forecast

            </div>

            <h2 className="mt-6 text-4xl font-bold">
              Executive AI Outlook
            </h2>

            <p className="mt-3 max-w-3xl text-slate-300">
              Predictive intelligence generated from
              business performance, sales momentum,
              customer acquisition and marketing
              efficiency.
            </p>

          </div>

          <div className="hidden rounded-2xl bg-emerald-500/20 px-6 py-4 lg:block">

            <p className="text-xs uppercase tracking-widest text-emerald-300">
              Confidence
            </p>

            <p className="mt-2 text-4xl font-bold">
              94%
            </p>

          </div>

        </div>

      </div>

      {/* Forecast Cards */}

      <div className="grid gap-6 p-8 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

          <DollarSign className="h-8 w-8 text-emerald-300" />

          <p className="mt-5 text-sm uppercase tracking-wide text-slate-300">
            Revenue Growth
          </p>

          <p className="mt-2 text-4xl font-bold">
            +23%
          </p>

          <p className="mt-2 text-sm text-emerald-300">
            Next 90 Days
          </p>

        </div>

        <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

          <Users className="h-8 w-8 text-sky-300" />

          <p className="mt-5 text-sm uppercase tracking-wide text-slate-300">
            Customer Growth
          </p>

          <p className="mt-2 text-4xl font-bold">
            +31%
          </p>

          <p className="mt-2 text-sm text-sky-300">
            Expected Acquisition
          </p>

        </div>

        <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

          <TrendingUp className="h-8 w-8 text-amber-300" />

          <p className="mt-5 text-sm uppercase tracking-wide text-slate-300">
            Monthly MRR
          </p>

          <p className="mt-2 text-4xl font-bold">
            +18%
          </p>

          <p className="mt-2 text-sm text-amber-300">
            Growth Forecast
          </p>

        </div>

        <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

          <ShieldCheck className="h-8 w-8 text-green-300" />

          <p className="mt-5 text-sm uppercase tracking-wide text-slate-300">
            Risk Level
          </p>

          <p className="mt-2 text-4xl font-bold">
            LOW
          </p>

          <p className="mt-2 text-sm text-green-300">
            Stable Outlook
          </p>

        </div>

      </div>

      {/* AI Analysis */}

      <div className="grid gap-6 border-t border-white/10 p-8 lg:grid-cols-2">

        <div>

          <div className="flex items-center gap-3">

            <Sparkles className="h-6 w-6 text-emerald-300" />

            <h3 className="text-2xl font-semibold">
              AI Executive Analysis
            </h3>

          </div>

          <p className="mt-5 leading-8 text-slate-300">
            GrowthPilot predicts sustained revenue
            acceleration driven by Enterprise customer
            acquisition, increasing marketing efficiency
            and healthy sales pipeline momentum.
            Customer retention remains above target,
            reducing projected business risk while
            supporting long-term recurring revenue.
          </p>

        </div>

        <div className="space-y-5">

          <div className="rounded-2xl bg-white/10 p-5">

            <p className="text-xs uppercase tracking-wide text-emerald-300">
              Primary Growth Driver
            </p>

            <p className="mt-2 text-xl font-semibold">
              Enterprise Sales Expansion
            </p>

          </div>

          <div className="rounded-2xl bg-white/10 p-5">

            <p className="text-xs uppercase tracking-wide text-emerald-300">
              Highest Opportunity
            </p>

            <p className="mt-2 text-xl font-semibold">
              Increase LinkedIn Enterprise Campaign
            </p>

          </div>

          <div className="rounded-2xl bg-white/10 p-5">

            <div className="flex items-center gap-2">

              <ArrowUpRight className="h-5 w-5 text-emerald-300" />

              <p className="text-xs uppercase tracking-wide text-emerald-300">
                Executive Recommendation
              </p>

            </div>

            <p className="mt-3 text-slate-200">
              Allocate additional investment toward
              Enterprise acquisition while expanding
              the Sales team before Q4 to maximize
              forecasted demand.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}