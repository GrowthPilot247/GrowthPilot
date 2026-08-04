"use client";

import {
  Bell,
  Plus,
  Search,
  Sparkles,
} from "lucide-react";

export function CRMHeader() {
  return (
    <header className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">

      <div>

        <h1 className="text-3xl font-bold text-slate-900">
          CRM Workspace
        </h1>

        <p className="mt-2 text-slate-600">
          Manage your customers, sales pipeline, and business relationships.
        </p>

      </div>

      <div className="flex flex-col gap-3 sm:flex-row">

        <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3">

          <Search className="h-5 w-5 text-slate-400" />

          <input
            type="text"
            placeholder="Search CRM..."
            className="w-52 bg-transparent outline-none"
          />

        </div>

        <button
          type="button"
          className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-medium text-white transition hover:bg-emerald-700"
        >
          <Plus className="h-4 w-4" />

          New Contact

        </button>

        <button
          type="button"
          className="rounded-xl border border-slate-200 p-3 transition hover:bg-slate-50"
        >
          <Sparkles className="h-5 w-5 text-amber-500" />
        </button>

        <button
          type="button"
          className="rounded-xl border border-slate-200 p-3 transition hover:bg-slate-50"
        >
          <Bell className="h-5 w-5 text-slate-600" />
        </button>

      </div>

    </header>
  );
}