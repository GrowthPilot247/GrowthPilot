"use client";

import { useMemo, useState } from "react";

import { ContactDetails } from "./ContactDetails";
import { ContactFilters } from "./ContactFilters";
import { ContactSearch } from "./ContactSearch";
import { ContactTable } from "./ContactTable";

import { getContacts } from "../services/contact.service";

import {
  EntityWorkspace,
  SectionHeader,
} from "../shared/components";

export function ContactsWorkspace() {
  const contacts = useMemo(() => getContacts(), []);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [sortBy, setSortBy] = useState("");

  const selectedContact = contacts[0];

  return (
    <EntityWorkspace
      header={
        <SectionHeader
          title="Contact Management"
          description="Search, filter and manage customer contacts."
        />
      }
      search={
        <ContactSearch
          value={search}
          onChange={setSearch}
          onClear={() => setSearch("")}
        />
      }
      filters={
        <ContactFilters
          status={status}
          sortBy={sortBy}
          onStatusChange={setStatus}
          onSortChange={setSortBy}
          onReset={() => {
            setSearch("");
            setStatus("");
            setSortBy("");
          }}
        />
      }
      table={<ContactTable />}
      details={
        selectedContact ? (
          <ContactDetails contact={selectedContact} />
        ) : undefined
      }
    />
  );
}