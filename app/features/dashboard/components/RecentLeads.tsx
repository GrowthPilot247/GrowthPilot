"use client";

import { ArrowRight, Building2, Users } from "lucide-react";

export type LeadStatus =
  | "New"
  | "Qualified"
  | "Proposal Sent"
  | "Won"
  | "Lost";

export interface Lead {
  id: string;
  name: string;
  company: string;
  owner: string;
  value: number;
  status: LeadStatus;
  lastActivity: string;
}

interface RecentLeadsProps {
  leads: Lead[];
}

const statusStyles: Record<LeadStatus, string> = {
  New: "bg-blue-100 text-blue-700",
  Qualified: "bg-emerald-100 text-emerald-700",
  "Proposal Sent": "bg-violet-100 text-violet-700",
  Won: "bg-green-100 text-green-700",
  Lost: "bg-red-100 text-red-700",
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();
}

export function RecentLeads({
  leads,
}: RecentLeadsProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <header className="flex items-center justify-between border-b border-slate-100 p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-emerald-100 p-2">
            <Users className="h-5 w-5 text-emerald-600" />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Recent Leads
            </h2>

            <p className="text-sm text-slate-500">
              Latest CRM opportunities
            </p>
          </div>
        </div>

        <button
          type="button"
          className="flex items-center gap-2 text-sm font-medium text-emerald-600 transition-colors hover:text-emerald-700"
        >
          View All

          <ArrowRight className="h-4 w-4" />
        </button>
      </header>

      {leads.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-10 text-center">
          <Users className="mb-3 h-10 w-10 text-slate-300" />

          <h3 className="font-medium text-slate-900">
            No Leads Yet
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            New leads will appear here as your CRM grows.
          </p>
        </div>
      ) : (
        <div className="divide-y divide-slate-100">
          {leads.map((lead) => (
            <button
              key={lead.id}
              type="button"
              className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-slate-50"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 font-semibold text-emerald-700">
                  {getInitials(lead.name)}
                </div>

                <div>
                  <h3 className="font-medium text-slate-900">
                    {lead.name}
                  </h3>

                  <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">
                    <Building2 className="h-4 w-4" />

                    <span>{lead.company}</span>
                  </div>

                  <p className="mt-1 text-xs text-slate-400">
                    Owner: {lead.owner}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="font-semibold text-slate-900">
                  $
                  {lead.value.toLocaleString()}
                </p>

                <span
                  className={`mt-2 inline-flex rounded-full px-3 py-1 text-xs font-medium ${statusStyles[lead.status]}`}
                >
                  {lead.status}
                </span>

                <p className="mt-2 text-xs text-slate-400">
                  {lead.lastActivity}
                </p>
              </div>
            </button>
          ))}
        </div>
      )}
    </section>
  );
}