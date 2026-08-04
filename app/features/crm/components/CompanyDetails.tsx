"use client";

import type { Company } from "../types/company.types";

interface CompanyDetailsProps {
  company: Company;
}

export function CompanyDetails({
  company,
}: CompanyDetailsProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-900">
            {company.name}
          </h2>

          <p className="mt-1 text-slate-500">
            {company.industry}
          </p>

        </div>

        <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
          Active
        </span>

      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        <DetailItem
          label="Industry"
          value={company.industry}
        />

        <DetailItem
          label="Country"
          value={company.country ?? "-"}
        />

        <DetailItem
          label="Employees"
          value={
            company.employeeCount
              ? company.employeeCount.toLocaleString()
              : "-"
          }
        />

        <DetailItem
          label="Website"
          value={company.website ?? "-"}
        />

        <DetailItem
          label="Phone"
          value={company.phone ?? "-"}
        />

        <DetailItem
          label="Created"
          value={company.createdAt}
        />

        <DetailItem
          label="Last Updated"
          value={company.updatedAt}
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