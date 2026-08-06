"use client";

import {
  Building2,
  Briefcase,
  Target,
  Users,
} from "lucide-react";

import { getCRMData } from "../services/crm-data.service";

import { CompanyCard } from "./CompanyCard";
import { ContactCard } from "./ContactCard";
import { LeadCard } from "./LeadCard";

const crm = getCRMData();

export function CRMDashboard() {
  return (
    <section className="space-y-10">

      <header>
        <h1 className="text-3xl font-bold text-slate-900">
          CRM Dashboard
        </h1>

        <p className="mt-2 text-slate-600">
          Customer Relationship Management Overview
        </p>
      </header>

      {/* Metrics */}

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <CRMMetric
          icon={<Users className="h-6 w-6" />}
          label="Contacts"
          value={crm.contacts.length}
        />

        <CRMMetric
          icon={<Building2 className="h-6 w-6" />}
          label="Companies"
          value={crm.companies.length}
        />

        <CRMMetric
          icon={<Target className="h-6 w-6" />}
          label="Leads"
          value={crm.leads.length}
        />

        <CRMMetric
          icon={<Briefcase className="h-6 w-6" />}
          label="Opportunities"
          value={crm.opportunities.length}
        />

      </section>

      {/* Recent Contacts */}

      <section>

        <div className="mb-5 flex items-center justify-between">

          <h2 className="text-xl font-bold text-slate-900">
            Recent Contacts
          </h2>

        </div>

        <div className="grid gap-5 lg:grid-cols-2">

          {crm.contacts.map((contact) => (
            <ContactCard
              key={contact.id}
              contact={contact}
            />
          ))}

        </div>

      </section>

      {/* Companies */}

      <section>

        <h2 className="mb-5 text-xl font-bold text-slate-900">
          Companies
        </h2>

        <div className="grid gap-5 lg:grid-cols-2">

          {crm.companies.map((company) => (
            <CompanyCard
              key={company.id}
              company={company}
            />
          ))}

        </div>

      </section>

      {/* Leads */}

      <section>

        <h2 className="mb-5 text-xl font-bold text-slate-900">
          Active Leads
        </h2>

        <div className="grid gap-5 lg:grid-cols-2">

          {crm.leads.map((lead) => (
            <LeadCard
              key={lead.id}
              lead={lead}
            />
          ))}

        </div>

      </section>

    </section>
  );
}

interface CRMMetricProps {
  icon: React.ReactNode;
  label: string;
  value: number;
}

function CRMMetric({
  icon,
  label,
  value,
}: CRMMetricProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between">

        <div className="text-emerald-600">
          {icon}
        </div>

        <span className="text-sm text-slate-400">
          Total
        </span>

      </div>

      <h2 className="mt-6 text-3xl font-bold text-slate-900">
        {value}
      </h2>

      <p className="mt-2 text-slate-500">
        {label}
      </p>

    </div>
  );
}