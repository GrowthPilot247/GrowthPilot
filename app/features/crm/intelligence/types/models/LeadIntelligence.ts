/**
 * ============================================================
 * GrowthPilot Lead Intelligence Model
 * ============================================================
 */

import { IntelligenceAnalysis } from "../intelligence.types";

export type LeadTemperature =
  | "cold"
  | "warm"
  | "hot";

export interface LeadSignals {
  emailOpened: boolean;

  emailClicked: boolean;

  meetingScheduled: boolean;

  proposalRequested: boolean;

  websiteVisited: boolean;
}

export interface LeadIntelligence
  extends IntelligenceAnalysis {
  leadId: string;

  temperature: LeadTemperature;

  engagementScore: number;

  buyingIntent: number;

  signals: LeadSignals;
}