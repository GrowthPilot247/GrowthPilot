"use client";

import { getLeads } from "../services/lead.service";
import { DataTable } from "../shared/components/DataTable";

const leads = getLeads();

export function LeadTable() {
  return (
    <DataTable
      title="Leads"
      description="Manage and qualify sales leads."
      headers={[
        "Lead",
        "Company",
        "Source",
        "Status",
        "Value",
      ]}
    >
      {leads.map((lead) => (
        <tr
          key={lead.id}
          className="border-t border-slate-100 transition hover:bg-slate-50"
        >
          <td className="px-6 py-4 font-medium text-slate-900">
            {lead.fullName}
          </td>

          <td className="px-6 py-4 text-slate-600">
            {lead.company}
          </td>

          <td className="px-6 py-4 text-slate-600">
            {lead.source}
          </td>

          <td className="px-6 py-4">
            <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-700">
              {lead.status}
            </span>
          </td>

          <td className="px-6 py-4 text-slate-600">
            {lead.estimatedValue
              ? `$${lead.estimatedValue.toLocaleString()}`
              : "-"}
          </td>
        </tr>
      ))}
    </DataTable>
  );
}