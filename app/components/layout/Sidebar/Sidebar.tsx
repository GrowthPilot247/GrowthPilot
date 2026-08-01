"use client";

import { cn } from "@/app/lib/cn";
import { SidebarProps } from "./Sidebar.types";

export function Sidebar({
  sections,
  activeItem,
  onNavigate,
}: SidebarProps) {
  return (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div className="border-b border-slate-200 px-6 py-6">
        <h1 className="text-2xl font-bold text-emerald-600">
          GrowthPilot
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Business Operating System
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-4 py-6">
        {sections.map((section) => (
          <div key={section.title} className="mb-8">
            <h2 className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
              {section.title}
            </h2>

            <div className="space-y-1">
              {section.items.map((item) => {
                const active = item.id === activeItem;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onNavigate?.(item.id)}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors",
                      active
                        ? "bg-emerald-50 text-emerald-700"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    )}
                  >
                    {item.icon && (
                      <span className="shrink-0">
                        {item.icon}
                      </span>
                    )}

                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-slate-200 p-4">
        <button
          className="w-full rounded-xl px-3 py-2 text-left text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
        >
          Settings
        </button>
      </div>
    </div>
  );
}