"use client";

import { RotateCcw } from "lucide-react";

import { FilterPanel } from "../shared/components/FilterPanel";

interface LeadFiltersProps {
  status?: string;
  source?: string;
  sortBy?: string;
  onStatusChange?: (value: string) => void;
  onSourceChange?: (value: string) => void;
  onSortChange?: (value: string) => void;
  onReset?: () => void;
}

export function LeadFilters({
  status = "",
  source = "",
  sortBy = "",
  onStatusChange,
  onSourceChange,
  onSortChange,
  onReset,
}: LeadFiltersProps) {
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
          onChange={(event) =>
            onStatusChange?.(event.target.value)
          }
          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
        >
          <option value="">All Statuses</option>
          <option value="New">New</option>
          <option value="Qualified">Qualified</option>
          <option value="Contacted">Contacted</option>
          <option value="Lost">Lost</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Source
        </label>

        <select
          value={source}
          onChange={(event) =>
            onSourceChange?.(event.target.value)
          }
          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
        >
          <option value="">All Sources</option>
          <option value="Website">Website</option>
          <option value="Referral">Referral</option>
          <option value="LinkedIn">LinkedIn</option>
          <option value="Email Campaign">Email Campaign</option>
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
          <option value="name">Lead Name</option>
          <option value="value">Estimated Value</option>
          <option value="source">Source</option>
        </select>
      </div>
    </FilterPanel>
  );
}