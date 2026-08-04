/**
 * ============================================================
 * GrowthPilot CRM Opportunity Types
 * ============================================================
 */

export interface Opportunity {
  id: string;

  title: string;

  companyId: string;

  leadId?: string;

  value: number;

  probability: number;

  stage: string;

  expectedCloseDate?: string;

  ownerId?: string;

  createdAt: string;

  updatedAt: string;
}