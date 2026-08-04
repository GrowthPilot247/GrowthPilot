/**
 * ============================================================
 * GrowthPilot Lead Intelligence Mock Data
 * ============================================================
 */

import { LeadIntelligence } from "../types/models/LeadIntelligence";

export const leadIntelligenceMock: LeadIntelligence[] = [
  {
    leadId: "lead-001",

    score: 94,

    confidence: 96,

    risk: "low",

    summary:
      "High buying intent detected with strong engagement.",

    insights: [
      {
        id: "insight-001",
        title: "High Engagement",
        description:
          "Lead has interacted with multiple sales touchpoints.",
        priority: "high",
        confidence: 95,
      },
    ],

    recommendations: [
      {
        id: "recommendation-001",
        title: "Schedule Demo",
        description:
          "Book a product demonstration within 24 hours.",
        action: "Schedule Demo",
        priority: "high",
      },
    ],

    temperature: "hot",

    engagementScore: 92,

    buyingIntent: 89,

    signals: {
      emailOpened: true,
      emailClicked: true,
      meetingScheduled: true,
      proposalRequested: true,
      websiteVisited: true,
    },
  },

  {
    leadId: "lead-002",

    score: 68,

    confidence: 84,

    risk: "medium",

    summary:
      "Lead is engaged but requires further nurturing.",

    insights: [
      {
        id: "insight-002",
        title: "Moderate Interest",
        description:
          "Lead regularly opens emails but has not requested a meeting.",
        priority: "medium",
        confidence: 82,
      },
    ],

    recommendations: [
      {
        id: "recommendation-002",
        title: "Continue Nurturing",
        description:
          "Send educational content before scheduling outreach.",
        action: "Launch Email Sequence",
        priority: "medium",
      },
    ],

    temperature: "warm",

    engagementScore: 71,

    buyingIntent: 63,

    signals: {
      emailOpened: true,
      emailClicked: true,
      meetingScheduled: false,
      proposalRequested: false,
      websiteVisited: true,
    },
  },
];