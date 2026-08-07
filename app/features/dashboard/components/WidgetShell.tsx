"use client";

import { ReactNode } from "react";

interface WidgetShellProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function WidgetShell({
  title,
  subtitle,
  children,
  className = "",
}: WidgetShellProps) {
  return (
    <section
      className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg ${className}`}
    >
      <header className="border-b border-slate-100 px-6 py-5">
        <h2 className="text-lg font-semibold text-slate-900">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-1 text-sm text-slate-500">
            {subtitle}
          </p>
        )}
      </header>

      <div className="p-6">
        {children}
      </div>
    </section>
  );
}