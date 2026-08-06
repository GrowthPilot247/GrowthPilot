/**
 * ============================================================
 * GrowthPilot CRM Lead Service
 * ============================================================
 */

import { leadsMock } from "../mock/leads.mock";

export function getLeads() {
  return leadsMock;
}

export function getLeadById(id: string) {
  return leadsMock.find((lead) => lead.id === id);
}