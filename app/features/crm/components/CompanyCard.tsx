import type { Company } from "../types/company.types";

interface CompanyCardProps {
  company: Company;
}

export function CompanyCard({
  company,
}: CompanyCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">
        {company.name}
      </h3>

      <p className="mt-2 text-sm text-slate-600">
        {company.industry}
      </p>

      {company.country && (
        <p className="mt-1 text-sm text-slate-500">
          {company.country}
        </p>
      )}

      {company.employeeCount && (
        <p className="mt-4 text-sm text-slate-500">
          {company.employeeCount} employees
        </p>
      )}
    </div>
  );
}