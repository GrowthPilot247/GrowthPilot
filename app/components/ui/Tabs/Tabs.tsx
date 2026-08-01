"use client";

import { cn } from "@/app/lib/cn";
import { TabsProps } from "./Tabs.types";

export function Tabs({
  tabs,
  activeTab,
  onChange,
  fullWidth = false,
  className,
}: TabsProps) {
  return (
    <div
      className={cn(
        "inline-flex rounded-xl bg-slate-100 p-1",
        fullWidth && "flex w-full",
        className
      )}
    >
      {tabs.map((tab) => {
        const active = tab.id === activeTab;

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={cn(
              "flex items-center gap-2 rounded-lg px-5 py-2.5",
              "text-sm font-medium transition-all duration-200",
              "focus:outline-none focus:ring-2 focus:ring-emerald-500",

              fullWidth && "flex-1 justify-center",

              active
                ? "bg-white text-emerald-600 shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
            )}
          >
            {tab.icon}

            <span>{tab.label}</span>

            {tab.badge}
          </button>
        );
      })}
    </div>
  );
}