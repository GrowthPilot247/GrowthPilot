import type { Company } from "../types/company.types";

export const companiesMock: Company[] = [
  {
    id: "CMP-001",
    name: "Acme Corporation",
    industry: "Technology",
    website: "https://acme.example",
    phone: "+1 555-0201",
    country: "United States",
    employeeCount: 250,
    createdAt: "2026-08-03",
    updatedAt: "2026-08-03",
  },

  {
    id: "CMP-002",
    name: "Growth Labs",
    industry: "Marketing",
    website: "https://growthlabs.example",
    phone: "+1 555-0202",
    country: "United Kingdom",
    employeeCount: 80,
    createdAt: "2026-08-03",
    updatedAt: "2026-08-03",
  },
];