"use client";

import { useMemo, useState } from "react";

import { OpportunityDetails } from "./OpportunityDetails";
import { OpportunityFilters } from "./OpportunityFilters";
import { OpportunitySearch } from "./OpportunitySearch";
import { OpportunityTable } from "./OpportunityTable";

import { getOpportunities } from "../services/opportunity.service";

import {
  EntityWorkspace,
  SectionHeader,
} from "../shared/components";

export function OpportunitiesWorkspace() {
  const opportunities = useMemo(() => getOpportunities(), []);

  const [search, setSearch] = useState("");
  const [stage, setStage] = useState("");
  const [forecast, setForecast] = useState("");
  const [sortBy, setSortBy] = useState("");

  const selectedOpportunity = opportunities[0];

  return (
    <EntityWorkspace
      header={
        <SectionHeader
          title="Opportunity Management"
          description="Track, forecast and manage revenue opportunities."
        />
      }
      search={
        <OpportunitySearch
          value={search}
          onChange={setSearch}
          onClear={() => setSearch("")}
        />
      }
      filters={
        <OpportunityFilters
          stage={stage}
          forecast={forecast}
          sortBy={sortBy}
          onStageChange={setStage}
          onForecastChange={setForecast}
          onSortChange={setSortBy}
          onReset={() => {
            setSearch("");
            setStage("");
            setForecast("");
            setSortBy("");
          }}
        />
      }
      table={<OpportunityTable />}
      details={
        selectedOpportunity ? (
          <OpportunityDetails
            opportunity={selectedOpportunity}
          />
        ) : undefined
      }
    />
  );
}