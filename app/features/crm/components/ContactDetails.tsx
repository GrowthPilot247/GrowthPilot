"use client";

import type { Contact } from "../types/contact.types";

interface ContactDetailsProps {
  contact: Contact;
}

export function ContactDetails({
  contact,
}: ContactDetailsProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            {contact.firstName} {contact.lastName}
          </h2>

          <p className="mt-1 text-slate-500">
            {contact.position ?? "No position assigned"}
          </p>
        </div>

        <span
          className={[
            "rounded-full px-4 py-2 text-sm font-medium",
            contact.status === "active"
              ? "bg-emerald-100 text-emerald-700"
              : "bg-slate-200 text-slate-700",
          ].join(" ")}
        >
          {contact.status}
        </span>

      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        <DetailItem
          label="Email"
          value={contact.email}
        />

        <DetailItem
          label="Phone"
          value={contact.phone ?? "-"}
        />

        <DetailItem
          label="Company ID"
          value={contact.companyId ?? "-"}
        />

        <DetailItem
          label="Created"
          value={contact.createdAt}
        />

        <DetailItem
          label="Last Updated"
          value={contact.updatedAt}
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