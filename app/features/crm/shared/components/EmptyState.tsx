"use client";

import type { ReactNode } from "react";

interface EmptyStateProps {
  title: string;
  description: string;
  action?: ReactNode;
  icon?: ReactNode;
}

export function EmptyState({
  title,
  description,
  action,
  icon,
}: EmptyStateProps) {
  return (
    <section className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">

      {icon && (
        <div className="mb-4 flex justify-center">
          {icon}
        </div>
      )}

      <h2 className="text-xl font-semibold text-slate-900">
        {title}
      </h2>

      <p className="mx-auto mt-3 max-w-md text-slate-600">
        {description}
      </p>

      {action && (
        <div className="mt-6 flex justify-center">
          {action}
        </div>
      )}

    </section>
  );
}