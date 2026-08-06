import { RevenueIntelligence } from "../components/RevenueIntelligenceWidget";

export const revenueIntelligence: RevenueIntelligence = {
  forecast: {
    period: "August 2026",
    amount: "$85,200",
    growth: "+18%",
  },

  scenario: {
    best: "$98,000",
    expected: "$85,200",
    worst: "$73,000",
  },

  confidence: 94,

  explanation:
    "AI predicts continued revenue growth based on increasing lead conversion rates, stronger customer retention, improved sales velocity, and sustained marketing campaign performance over the past six weeks.",

  recommendation:
    "Prioritize proposal-stage opportunities, increase investment in the highest-performing marketing campaigns, and postpone non-essential operational expenses until the end of the quarter to maximize profitability.",

  risk: "Low",
};