"use client";

import { getContacts } from "../services/contact.service";
import { DataTable } from "../shared/components/DataTable";

const contacts = getContacts();

export function ContactTable() {
  return (
    <DataTable
      title="Contacts"
      description="Manage customer contacts."
      headers={[
        "Name",
        "Email",
        "Status",
      ]}
    >
      {contacts.map((contact) => (
        <tr
          key={contact.id}
          className="border-t border-slate-100 transition hover:bg-slate-50"
        >
          <td className="px-6 py-4 font-medium text-slate-900">
           {contact.firstName} {contact.lastName}
          </td>

          <td className="px-6 py-4 text-slate-600">
            {contact.email}
          </td>

          <td className="px-6 py-4">
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
              {contact.status}
            </span>
          </td>
        </tr>
      ))}
    </DataTable>
  );
}