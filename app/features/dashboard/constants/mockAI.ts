import { AIInsight } from "../components/AIInsightsWidget";

export const aiInsights: AIInsight[] = [
  {
    id: "1",
    title: "Revenue is trending above target",
    recommendation:
      "Current revenue growth suggests you may exceed this month's target. Maintain campaign momentum while monitoring conversion rates.",
    confidence: 94,
    type: "success",
  },
  {
    id: "2",
    title: "Proposal-stage leads require attention",
    recommendation:
      "Eight proposal-stage opportunities have had no follow-up in the last five days. Prioritize these leads to improve close rates.",
    confidence: 91,
    type: "warning",
  },
  {
    id: "3",
    title: "Marketing campaign performance improving",
    recommendation:
      "The latest campaign is outperforming previous results. Consider increasing the budget after validating conversion quality.",
    confidence: 88,
    type: "info",
  },
];