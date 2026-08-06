"use client";

import { useMemo, useState } from "react";

import { LeadDetails } from "./LeadDetails";
import { LeadFilters } from "./LeadFilters";
import { LeadSearch } from "./LeadSearch";
import { LeadTable } from "./LeadTable";

import { getLeads } from "../services/lead.service";

import {
  EntityWorkspace,
  SectionHeader,
} from "../shared/components";

export function LeadsWorkspace() {
  const leads = useMemo(() => getLeads(), []);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [source, setSource] = useState("");
  const [sortBy, setSortBy] = useState("");

  const selectedLead = leads[0];

  return (
    <EntityWorkspace
      header={
        <SectionHeader
          title="Lead Management"
          description="Search, qualify and manage sales leads."
        />
      }
      search={
        <LeadSearch
          value={search}
          onChange={setSearch}
          onClear={() => setSearch("")}
        />
      }
      filters={
        <LeadFilters
          status={status}
          source={source}
          sortBy={sortBy}
          onStatusChange={setStatus}
          onSourceChange={setSource}
          onSortChange={setSortBy}
          onReset={() => {
            setSearch("");
            setStatus("");
            setSource("");
            setSortBy("");
          }}
        />
      }
      table={<LeadTable />}
      details={
        selectedLead ? (
          <LeadDetails lead={selectedLead} />
        ) : undefined
      }
    />
  );
}