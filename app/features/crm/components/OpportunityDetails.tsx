"use client";

import type { Opportunity } from "../types/opportunity.types";

interface OpportunityDetailsProps {
  opportunity: Opportunity;
}

export function OpportunityDetails({
  opportunity,
}: OpportunityDetailsProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-900">
           opportunity.title
          </h2>

          <p className="mt-1 text-slate-500">
            opportunity.companyId
          </p>

        </div>

        <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700">
          {opportunity.stage}
        </span>

      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        <DetailItem
          label="Company"
          value={opportunity.companyId}
        />

        <DetailItem
          label="Sales Stage"
          value={opportunity.stage}
        />

        <DetailItem
          label="Deal Value"
          value={`$${opportunity.value.toLocaleString()}`}
        />

      </div>

    </section>
  );
}

interface DetailItemProps {
  label: string;
  value: string;
}

function DetailItem({
  label,
  value,
}: DetailItemProps) {
  return (
    <div>

      <p className="text-sm font-medium text-slate-500">
        {label}
      </p>

      <p className="mt-1 text-slate-900">
        {value}
      </p>

    </div>
  );
}