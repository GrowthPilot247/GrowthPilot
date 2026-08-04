import type { Contact } from "../types/contact.types";

interface ContactCardProps {
  contact: Contact;
}

export function ContactCard({
  contact,
}: ContactCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">
        {contact.firstName} {contact.lastName}
      </h3>

      <p className="mt-2 text-sm text-slate-600">
        {contact.email}
      </p>

      {contact.position && (
        <p className="mt-1 text-sm text-slate-500">
          {contact.position}
        </p>
      )}

      <div className="mt-4">
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
          {contact.status}
        </span>
      </div>
    </div>
  );
}