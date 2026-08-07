"use client";

import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  DollarSign,
  FileBarChart2,
  PlusCircle,
  Rocket,
  Users,
} from "lucide-react";

export function AuroraHero() {
  return (
    <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950 text-white shadow-2xl">

      {/* Header */}

      <div className="flex flex-col justify-between gap-8 p-8 lg:flex-row lg:items-center">

        <div className="max-w-3xl">

          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-medium text-emerald-300">
            <Rocket className="h-4 w-4" />
            GrowthPilot Executive Platform
          </span>

          <h1 className="mt-6 text-5xl font-bold">
            Welcome back,
            <br />
            Mackson Alex 👋
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            Your Executive Operating System is monitoring
            revenue, customers, marketing performance,
            business health and strategic opportunities in
            real time.
          </p>

        </div>

        {/* Live Status */}

        <div className="rounded-2xl border border-emerald-400/20 bg-white/5 p-6 backdrop-blur">

          <p className="text-xs uppercase tracking-widest text-emerald-300">
            Executive Status
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Business Healthy
          </h2>

          <p className="mt-2 text-emerald-300">
            All critical systems operational
          </p>

          <div className="mt-5 flex items-center gap-2">

            <span className="h-3 w-3 rounded-full bg-emerald-400" />

            <span className="text-sm text-slate-300">
              LIVE • Updated just now
            </span>

          </div>

        </div>

      </div>

      {/* KPI Cards */}

      <div className="grid gap-5 border-t border-white/10 p-8 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

          <DollarSign className="h-8 w-8 text-emerald-300" />

          <p className="mt-5 text-sm uppercase tracking-wide text-slate-300">
            Revenue
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            $483K
          </h3>

          <p className="mt-2 text-sm text-emerald-300">
            +18.4% this month
          </p>

        </div>

        <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

          <Users className="h-8 w-8 text-sky-300" />

          <p className="mt-5 text-sm uppercase tracking-wide text-slate-300">
            Customers
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            4,268
          </h3>

          <p className="mt-2 text-sm text-sky-300">
            +214 new customers
          </p>

        </div>

        <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

          <BriefcaseBusiness className="h-8 w-8 text-amber-300" />

          <p className="mt-5 text-sm uppercase tracking-wide text-slate-300">
            Active Deals
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            82
          </h3>

          <p className="mt-2 text-sm text-amber-300">
            Pipeline $2.8M
          </p>

        </div>

        <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

          <BrainCircuit className="h-8 w-8 text-violet-300" />

          <p className="mt-5 text-sm uppercase tracking-wide text-slate-300">
            AI Confidence
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            94%
          </h3>

          <p className="mt-2 text-sm text-violet-300">
            Executive Forecast
          </p>

        </div>

      </div>

      {/* Executive Actions */}

      <div className="border-t border-white/10 p-8">

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-2xl font-bold">
              Executive Quick Actions
            </h2>

            <p className="mt-2 text-slate-300">
              Launch common executive workflows with one click.
            </p>

          </div>

        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">

          <button className="flex items-center justify-between rounded-2xl bg-white/10 p-5 transition hover:bg-white/20">
            <div className="flex items-center gap-3">
              <BrainCircuit className="h-6 w-6 text-emerald-300" />
              <span>Executive Copilot</span>
            </div>
            <ArrowRight className="h-5 w-5" />
          </button>

          <button className="flex items-center justify-between rounded-2xl bg-white/10 p-5 transition hover:bg-white/20">
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6 text-sky-300" />
              <span>CRM</span>
            </div>
            <ArrowRight className="h-5 w-5" />
          </button>

          <button className="flex items-center justify-between rounded-2xl bg-white/10 p-5 transition hover:bg-white/20">
            <div className="flex items-center gap-3">
              <PlusCircle className="h-6 w-6 text-amber-300" />
              <span>New Campaign</span>
            </div>
            <ArrowRight className="h-5 w-5" />
          </button>

          <button className="flex items-center justify-between rounded-2xl bg-white/10 p-5 transition hover:bg-white/20">
            <div className="flex items-center gap-3">
              <FileBarChart2 className="h-6 w-6 text-violet-300" />
              <span>Reports</span>
            </div>
            <ArrowRight className="h-5 w-5" />
          </button>

          <button className="flex items-center justify-between rounded-2xl bg-emerald-500 p-5 font-semibold transition hover:bg-emerald-600">
            <div className="flex items-center gap-3">
              <Rocket className="h-6 w-6" />
              <span>Launch Growth</span>
            </div>
            <ArrowRight className="h-5 w-5" />
          </button>

        </div>

      </div>

    </section>
  );
}