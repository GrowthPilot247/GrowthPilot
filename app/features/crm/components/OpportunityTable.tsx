"use client";

import { getOpportunities } from "../services/opportunity.service";
import { DataTable } from "../shared/components/DataTable";

const opportunities = getOpportunities();

export function OpportunityTable() {
  return (
    <DataTable
      title="Opportunities"
      description="Track revenue opportunities through the sales pipeline."
      headers={[
        "Opportunity",
        "Company",
        "Stage",
        "Value",
      ]}
    >
      {opportunities.map((opportunity) => (
        <tr
          key={opportunity.id}
          className="border-t border-slate-100 transition hover:bg-slate-50"
        >
          <td>
  {opportunity.title}
</td>

<td>
  {opportunity.companyId}
</td>

          <td className="px-6 py-4">
            <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700">
              {opportunity.stage}
            </span>
          </td>

          <td className="px-6 py-4 text-slate-600">
            ${opportunity.value.toLocaleString()}
          </td>
        </tr>
      ))}
    </DataTable>
  );
}