"use client";

import type { ReactNode } from "react";

interface FilterPanelProps {
  children: ReactNode;
  actions?: ReactNode;
}

export function FilterPanel({
  children,
  actions,
}: FilterPanelProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {children}
        </div>

        {actions && (
          <div className="flex justify-end">
            {actions}
          </div>
        )}

      </div>

    </section>
  );
}