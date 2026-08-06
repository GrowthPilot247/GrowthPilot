"use client";

import type { ReactNode } from "react";

interface DataTableProps {
  title: string;
  description?: string;
  headers: string[];
  children: ReactNode;
}

export function DataTable({
  title,
  description,
  headers,
  children,
}: DataTableProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">

      <div className="border-b border-slate-200 p-6">

        <h2 className="text-xl font-bold text-slate-900">
          {title}
        </h2>

        {description && (
          <p className="mt-1 text-sm text-slate-500">
            {description}
          </p>
        )}

      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-slate-50">

            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  className="px-6 py-4 text-left text-sm font-semibold text-slate-600"
                >
                  {header}
                </th>
              ))}
            </tr>

          </thead>

          <tbody>
            {children}
          </tbody>

        </table>

      </div>

    </section>
  );
}