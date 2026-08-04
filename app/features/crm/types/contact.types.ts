/**
 * ============================================================
 * GrowthPilot CRM Contact Types
 * ============================================================
 */

export interface Contact {
  id: string;

  firstName: string;

  lastName: string;

  email: string;

  phone?: string;

  companyId?: string;

  position?: string;

  status: "active" | "inactive";

  createdAt: string;

  updatedAt: string;
}