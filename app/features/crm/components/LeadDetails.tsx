"use client";

import type { Lead } from "../types/lead.types";

interface LeadDetailsProps {
  lead: Lead;
}

export function LeadDetails({
  lead,
}: LeadDetailsProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-900">
            {lead.fullName}
          </h2>

          <p className="mt-1 text-slate-500">
            {lead.company}
          </p>

        </div>

        <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700">
          {lead.status}
        </span>

      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        <DetailItem
          label="Company"
          value={lead.company}
        />

        <DetailItem
          label="Lead Source"
          value={lead.source}
        />

        <DetailItem
          label="Status"
          value={lead.status}
        />

        <DetailItem
          label="Estimated Value"
          value={
            lead.estimatedValue
              ? `$${lead.estimatedValue.toLocaleString()}`
              : "-"
          }
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