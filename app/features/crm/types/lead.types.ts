/**
 * ============================================================
 * GrowthPilot CRM Lead Types
 * ============================================================
 */

export type LeadStatus =
  | "new"
  | "qualified"
  | "contacted"
  | "proposal"
  | "won"
  | "lost";

export interface Lead {
  id: string;

  fullName: string;

  email: string;

  company: string;

  source: string;

  status: LeadStatus;

  estimatedValue?: number;

  ownerId?: string;

  createdAt: string;

  updatedAt: string;
}