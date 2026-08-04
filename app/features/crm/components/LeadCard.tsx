import type { Lead } from "../types/lead.types";

interface LeadCardProps {
  lead: Lead;
}

export function LeadCard({
  lead,
}: LeadCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">
        {lead.fullName}
      </h3>

      <p className="mt-2 text-sm text-slate-600">
        {lead.company}
      </p>

      <p className="mt-1 text-sm text-slate-500">
        {lead.source}
      </p>

      <div className="mt-4 flex items-center justify-between">
        <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-700">
          {lead.status}
        </span>

        {lead.estimatedValue && (
          <span className="text-sm font-semibold text-slate-700">
            ${lead.estimatedValue.toLocaleString()}
          </span>
        )}
      </div>
    </div>
  );
}