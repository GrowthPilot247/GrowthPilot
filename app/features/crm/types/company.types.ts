/**
 * ============================================================
 * GrowthPilot CRM Company Types
 * ============================================================
 */

export interface Company {
  id: string;

  name: string;

  industry: string;

  website?: string;

  phone?: string;

  country?: string;

  employeeCount?: number;

  createdAt: string;

  updatedAt: string;
}