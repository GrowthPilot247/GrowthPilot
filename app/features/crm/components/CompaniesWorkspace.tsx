"use client";

import { useMemo, useState } from "react";

import { CompanyDetails } from "./CompanyDetails";
import { CompanyFilters } from "./CompanyFilters";
import { CompanySearch } from "./CompanySearch";
import { CompanyTable } from "./CompanyTable";

import { getCompanies } from "../services/company.service";

import {
  EntityWorkspace,
  SectionHeader,
} from "../shared/components";

export function CompaniesWorkspace() {
  const companies = useMemo(() => getCompanies(), []);

  const [search, setSearch] = useState("");
  const [industry, setIndustry] = useState("");
  const [country, setCountry] = useState("");
  const [sortBy, setSortBy] = useState("");

  const selectedCompany = companies[0];

  return (
    <EntityWorkspace
      header={
        <SectionHeader
          title="Company Management"
          description="Search, filter and manage companies in your CRM."
        />
      }
      search={
        <CompanySearch
          value={search}
          onChange={setSearch}
          onClear={() => setSearch("")}
        />
      }
      filters={
        <CompanyFilters
          industry={industry}
          country={country}
          sortBy={sortBy}
          onIndustryChange={setIndustry}
          onCountryChange={setCountry}
          onSortChange={setSortBy}
          onReset={() => {
            setSearch("");
            setIndustry("");
            setCountry("");
            setSortBy("");
          }}
        />
      }
      table={<CompanyTable />}
      details={
        selectedCompany ? (
          <CompanyDetails company={selectedCompany} />
        ) : undefined
      }
    />
  );
}