"use client";

import {
  BarChart3,
  Building2,
  LayoutDashboard,
  Settings,
  Target,
  Users,
} from "lucide-react";

const navigationItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    active: true,
  },
  {
    label: "Contacts",
    icon: Users,
  },
  {
    label: "Companies",
    icon: Building2,
  },
  {
    label: "Leads",
    icon: Target,
  },
  {
    label: "Reports",
    icon: BarChart3,
  },
  {
    label: "Settings",
    icon: Settings,
  },
];

export function CRMNavigation() {
  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <h2 className="mb-6 text-lg font-semibold text-slate-900">
        CRM Navigation
      </h2>

      <nav className="space-y-2">

        {navigationItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              type="button"
              className={[
                "flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition",
                item.active
                  ? "bg-emerald-600 text-white"
                  : "text-slate-600 hover:bg-slate-100",
              ].join(" ")}
            >
              <Icon className="h-5 w-5" />

              <span>{item.label}</span>
            </button>
          );
        })}

      </nav>

    </aside>
  );
}