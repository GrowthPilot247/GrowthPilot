"use client";

import {
  ArrowDownToLine,
  ArrowUpFromLine,
  Briefcase,
  Building2,
  Plus,
  Target,
  Users,
} from "lucide-react";

const actions = [
  {
    title: "New Contact",
    icon: Users,
  },
  {
    title: "New Company",
    icon: Building2,
  },
  {
    title: "New Lead",
    icon: Target,
  },
  {
    title: "New Opportunity",
    icon: Briefcase,
  },
  {
    title: "Import",
    icon: ArrowDownToLine,
  },
  {
    title: "Export",
    icon: ArrowUpFromLine,
  },
];

export function CRMQuickActions() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Quick Actions
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Frequently used CRM actions.
          </p>
        </div>

      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">

        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              type="button"
              className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 text-left transition hover:border-emerald-300 hover:bg-emerald-50"
            >
              <div className="rounded-lg bg-emerald-100 p-2 text-emerald-600">
                <Icon className="h-5 w-5" />
              </div>

              <div>
                <p className="font-medium text-slate-900">
                  {action.title}
                </p>

                <p className="text-sm text-slate-500">
                  Click to begin
                </p>
              </div>

              <Plus className="ml-auto h-4 w-4 text-slate-400" />
            </button>
          );
        })}

      </div>

    </section>
  );
}