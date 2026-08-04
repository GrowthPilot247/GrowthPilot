"use client";

import { getCompanies } from "../services/company.service";
import { DataTable } from "../shared/components/DataTable";

const companies = getCompanies();

export function CompanyTable() {
  return (
    <DataTable
      title="Companies"
      description="Manage companies in your CRM."
      headers={[
        "Company",
        "Industry",
        "Country",
        "Employees",
      ]}
    >
      {companies.map((company) => (
        <tr
          key={company.id}
          className="border-t border-slate-100 transition hover:bg-slate-50"
        >
          <td className="px-6 py-4 font-medium text-slate-900">
            {company.name}
          </td>

          <td className="px-6 py-4 text-slate-600">
            {company.industry}
          </td>

          <td className="px-6 py-4 text-slate-600">
            {company.country ?? "-"}
          </td>

          <td className="px-6 py-4 text-slate-600">
            {company.employeeCount
              ? company.employeeCount.toLocaleString()
              : "-"}
          </td>
        </tr>
      ))}
    </DataTable>
  );
}