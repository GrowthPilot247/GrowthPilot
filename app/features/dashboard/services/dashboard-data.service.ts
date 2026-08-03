/**
 * ============================================================
 * GrowthPilot Dashboard Data Service
 * ============================================================
 * Mission:
 * GP-MSN-001 — Sprint 6
 *
 * Description:
 * Provides a single service layer for dashboard data.
 * Currently wraps mock data but will later be connected
 * to real APIs without requiring UI changes.
 * ============================================================
 */

import { dashboardData } from "../constants/mockDashboard";

export function getDashboardData() {
  return dashboardData;
}

export function getDashboardKpis() {
  return dashboardData.kpis;
}

export function getRevenueData() {
  return dashboardData.revenue;
}

export function getDashboardActivities() {
  return dashboardData.activities;
}

export function getDashboardAIActions() {
  return dashboardData.aiActions;
}