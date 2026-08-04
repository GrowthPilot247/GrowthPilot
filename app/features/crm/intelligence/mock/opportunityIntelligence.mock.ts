/**
 * ============================================================
 * GrowthPilot Opportunity Intelligence Mock Data
 * ============================================================
 */

import { OpportunityIntelligence } from "../types/models/OpportunityIntelligence";

export const opportunityIntelligenceMock: OpportunityIntelligence[] = [
  {
    opportunityId: "opp-001",

    score: 92,

    confidence: 95,

    risk: "low",

    summary:
      "Opportunity is progressing well with strong engagement from stakeholders.",

    insights: [
      {
        id: "insight-001",
        title: "Decision Maker Engaged",
        description:
          "Primary decision maker has attended the product demonstration.",
        priority: "high",
        confidence: 96,
      },
    ],

    recommendations: [
      {
        id: "recommendation-001",
        title: "Prepare Proposal",
        description:
          "Finalize and deliver the commercial proposal within 48 hours.",
        action: "Send Proposal",
        priority: "high",
      },
    ],

    winProbability: 91,

    health: "excellent",

    expectedRevenue: 250000,

    daysToClose: 14,
  },

  {
    opportunityId: "opp-002",

    score: 71,

    confidence: 83,

    risk: "medium",

    summary:
      "Opportunity is active but requires additional follow-up to maintain momentum.",

    insights: [
      {
        id: "insight-002",
        title: "Delayed Follow-up",
        description:
          "No customer interaction has been recorded in the past seven days.",
        priority: "medium",
        confidence: 84,
      },
    ],

    recommendations: [
      {
        id: "recommendation-002",
        title: "Schedule Follow-up",
        description:
          "Arrange a follow-up meeting to address remaining customer questions.",
        action: "Book Meeting",
        priority: "medium",
      },
    ],

    winProbability: 66,

    health: "good",

    expectedRevenue: 85000,

    daysToClose: 28,
  },
];