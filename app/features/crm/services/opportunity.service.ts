/**
 * ============================================================
 * GrowthPilot CRM Opportunity Service
 * ============================================================
 */

import { opportunitiesMock } from "../mock/opportunities.mock";

export function getOpportunities() {
  return opportunitiesMock;
}

export function getOpportunityById(id: string) {
  return opportunitiesMock.find(
    (opportunity) => opportunity.id === id,
  );
}