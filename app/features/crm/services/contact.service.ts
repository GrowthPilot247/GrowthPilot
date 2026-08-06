/**
 * ============================================================
 * GrowthPilot CRM Contact Service
 * ============================================================
 *
 * Purpose:
 * Provides access to CRM contacts.
 * ============================================================
 */

import { contactsMock } from "../mock/contacts.mock";

export function getContacts() {
  return contactsMock;
}

export function getContactById(id: string) {
  return contactsMock.find((contact) => contact.id === id);
}