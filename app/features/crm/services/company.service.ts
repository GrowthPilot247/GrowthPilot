/**
 * ============================================================
 * GrowthPilot CRM Company Service
 * ============================================================
 */

import { companiesMock } from "../mock/companies.mock";

export function getCompanies() {
  return companiesMock;
}

export function getCompanyById(id: string) {
  return companiesMock.find((company) => company.id === id);
}