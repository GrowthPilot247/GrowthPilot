/**
 * ============================================================
 * GrowthPilot CRM Data Service
 * ============================================================
 *
 * Mission:
 * GP-MSN-003
 *
 * Purpose:
 * Aggregates CRM domain data into a single service interface.
 * ============================================================
 */

import { getCompanies } from "./company.service";
import { getContacts } from "./contact.service";
import { getLeads } from "./lead.service";
import { getOpportunities } from "./opportunity.service";

export function getCRMData() {
  return {
    contacts: getContacts(),
    companies: getCompanies(),
    leads: getLeads(),
    opportunities: getOpportunities(),
  };
}