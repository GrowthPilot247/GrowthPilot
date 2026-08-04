import type { Contact } from "../types/contact.types";

export const contactsMock: Contact[] = [
  {
    id: "CNT-001",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 555-0101",
    companyId: "CMP-001",
    position: "CEO",
    status: "active",
    createdAt: "2026-08-03",
    updatedAt: "2026-08-03",
  },

  {
    id: "CNT-002",
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarah.johnson@example.com",
    phone: "+1 555-0102",
    companyId: "CMP-002",
    position: "Marketing Director",
    status: "active",
    createdAt: "2026-08-03",
    updatedAt: "2026-08-03",
  },
];