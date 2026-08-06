"use client";

import { RotateCcw } from "lucide-react";

import { FilterPanel } from "../shared/components";

interface ContactFiltersProps {
  status?: string;
  sortBy?: string;
  onStatusChange?: (value: string) => void;
  onSortChange?: (value: string) => void;
  onReset?: () => void;
}

export function ContactFilters({
  status = "",
  sortBy = "",
  onStatusChange,
  onSortChange,
  onReset,
}: ContactFiltersProps) {
  return (
    <FilterPanel
      actions={
        <button
          type="button"
          onClick={onReset}
          className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 transition hover:bg-slate-50"
        >
          <RotateCcw className="h-4 w-4" />
          Reset Filters
        </button>
      }
    >
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Status
        </label>

        <select
          value={status}
          onChange={(event) => onStatusChange?.(event.target.value)}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
        >
          <option value="">All Statuses</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Sort By
        </label>

        <select
          value={sortBy}
          onChange={(event) => onSortChange?.(event.target.value)}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
        >
          <option value="">Default</option>
          <option value="name">Name</option>
          <option value="email">Email</option>
        </select>
      </div>
    </FilterPanel>
  );
}