"use client";

import { RotateCcw } from "lucide-react";

import { FilterPanel } from "../shared/components/FilterPanel";

interface OpportunityFiltersProps {
  stage?: string;
  forecast?: string;
  sortBy?: string;
  onStageChange?: (value: string) => void;
  onForecastChange?: (value: string) => void;
  onSortChange?: (value: string) => void;
  onReset?: () => void;
}

export function OpportunityFilters({
  stage = "",
  forecast = "",
  sortBy = "",
  onStageChange,
  onForecastChange,
  onSortChange,
  onReset,
}: OpportunityFiltersProps) {
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
          Stage
        </label>

        <select
          value={stage}
          onChange={(event) =>
            onStageChange?.(event.target.value)
          }
          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
        >
          <option value="">All Stages</option>
          <option value="Prospecting">Prospecting</option>
          <option value="Qualification">Qualification</option>
          <option value="Proposal">Proposal</option>
          <option value="Negotiation">Negotiation</option>
          <option value="Closed Won">Closed Won</option>
          <option value="Closed Lost">Closed Lost</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Forecast
        </label>

        <select
          value={forecast}
          onChange={(event) =>
            onForecastChange?.(event.target.value)
          }
          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
        >
          <option value="">All Forecasts</option>
          <option value="Commit">Commit</option>
          <option value="Best Case">Best Case</option>
          <option value="Pipeline">Pipeline</option>
          <option value="Closed">Closed</option>
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
          <option value="name">Opportunity Name</option>
          <option value="value">Deal Value</option>
          <option value="stage">Stage</option>
        </select>
      </div>
    </FilterPanel>
  );
}