"use client";

import { RotateCcw } from "lucide-react";

interface CompanyFiltersProps {
  industry?: string;
  country?: string;
  sortBy?: string;
  onIndustryChange?: (value: string) => void;
  onCountryChange?: (value: string) => void;
  onSortChange?: (value: string) => void;
  onReset?: () => void;
}

export function CompanyFilters({
  industry = "",
  country = "",
  sortBy = "",
  onIndustryChange,
  onCountryChange,
  onSortChange,
  onReset,
}: CompanyFiltersProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="grid gap-4 lg:grid-cols-4">

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Industry
          </label>

          <select
            value={industry}
            onChange={(event) =>
              onIndustryChange?.(event.target.value)
            }
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
          >
            <option value="">All Industries</option>
            <option value="Technology">Technology</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Country
          </label>

          <select
            value={country}
            onChange={(event) =>
              onCountryChange?.(event.target.value)
            }
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
          >
            <option value="">All Countries</option>
            <option value="United States">
              United States
            </option>
            <option value="United Kingdom">
              United Kingdom
            </option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Sort By
          </label>

          <select
            value={sortBy}
            onChange={(event) =>
              onSortChange?.(event.target.value)
            }
            className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
          >
            <option value="">Default</option>
            <option value="name">Company Name</option>
            <option value="employees">Employee Count</option>
          </select>
        </div>

        <div className="flex items-end">
          <button
            type="button"
            onClick={onReset}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 transition hover:bg-slate-50"
          >
            <RotateCcw className="h-4 w-4" />

            Reset Filters
          </button>
        </div>

      </div>

    </section>
  );
}