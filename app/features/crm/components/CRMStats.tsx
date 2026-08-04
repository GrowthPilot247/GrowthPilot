"use client";

import {
  Briefcase,
  Building2,
  Target,
  Users,
} from "lucide-react";

import { getCRMData } from "../services/crm-data.service";

const crm = getCRMData();

export function CRMStats() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <CRMStatCard
        icon={<Users className="h-6 w-6" />}
        label="Contacts"
        value={crm.contacts.length}
      />

      <CRMStatCard
        icon={<Building2 className="h-6 w-6" />}
        label="Companies"
        value={crm.companies.length}
      />

      <CRMStatCard
        icon={<Target className="h-6 w-6" />}
        label="Leads"
        value={crm.leads.length}
      />

      <CRMStatCard
        icon={<Briefcase className="h-6 w-6" />}
        label="Opportunities"
        value={crm.opportunities.length}
      />

    </section>
  );
}

interface CRMStatCardProps {
  icon: React.ReactNode;
  label: string;
  value: number;
}

function CRMStatCard({
  icon,
  label,
  value,
}: CRMStatCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">

      <div className="flex items-center justify-between">

        <div className="rounded-xl bg-emerald-100 p-3 text-emerald-600">
          {icon}
        </div>

        <span className="text-xs font-medium uppercase tracking-wide text-slate-400">
          Total
        </span>

      </div>

      <h3 className="mt-6 text-3xl font-bold text-slate-900">
        {value}
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        {label}
      </p>

    </div>
  );
}