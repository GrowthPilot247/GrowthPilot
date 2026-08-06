import type { Opportunity } from "../types/opportunity.types";

export const opportunitiesMock: Opportunity[] = [
  {
    id: "OPP-001",
    title: "Enterprise CRM Rollout",
    companyId: "CMP-001",
    leadId: "LED-001",
    value: 25000,
    probability: 80,
    stage: "Negotiation",
    expectedCloseDate: "2026-09-15",
    ownerId: "USR-001",
    createdAt: "2026-08-03",
    updatedAt: "2026-08-03",
  },
];