import type { Lead } from "../types/lead.types";

export const leadsMock: Lead[] = [
  {
    id: "LED-001",
    fullName: "Michael Brown",
    email: "michael@example.com",
    company: "Acme Corporation",
    source: "Website",
    status: "qualified",
    estimatedValue: 12000,
    ownerId: "USR-001",
    createdAt: "2026-08-03",
    updatedAt: "2026-08-03",
  },

  {
    id: "LED-002",
    fullName: "Emily Davis",
    email: "emily@example.com",
    company: "Growth Labs",
    source: "LinkedIn",
    status: "new",
    estimatedValue: 8000,
    ownerId: "USR-001",
    createdAt: "2026-08-03",
    updatedAt: "2026-08-03",
  },
];