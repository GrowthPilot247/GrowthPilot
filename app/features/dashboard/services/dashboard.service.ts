import type { RevenueIntelligence } from "@/app/features/dashboard/components/RevenueIntelligenceWidget";

export interface BusinessHealth {
  score: number;
  status: "Excellent" | "Healthy" | "Needs Attention" | "Critical";
}

export interface ExecutiveInsight {
  id: number;
  title: string;
  message: string;
  type: "positive" | "warning" | "info";
}

export interface DashboardIntelligence {
  businessHealth: BusinessHealth;
  revenue: RevenueIntelligence;
  executiveInsights: ExecutiveInsight[];
}

const dashboardIntelligence: DashboardIntelligence = {
  businessHealth: {
    score: 92,
    status: "Excellent",
  },

  revenue: {
    forecast: {
      period: "Next Quarter",
      amount: "$1.55M",
      growth: "+15%",
    },

    scenario: {
      best: "$1.82M",
      expected: "$1.55M",
      worst: "$1.28M",
    },

    confidence: 94,

    explanation:
      "Revenue is expected to grow because customer retention has improved, marketing ROI is increasing, and sales conversion remains above target.",

    recommendation:
      "Increase marketing investment in the highest-performing acquisition channels while maintaining current customer retention initiatives.",

    risk: "Low",
  },

  executiveInsights: [
    {
      id: 1,
      title: "Revenue Momentum",
      message:
        "Revenue increased by 18% compared to the previous period.",
      type: "positive",
    },

    {
      id: 2,
      title: "Marketing Performance",
      message:
        "Lead conversion improved after recent campaign optimization.",
      type: "positive",
    },

    {
      id: 3,
      title: "Cash Flow Watch",
      message:
        "Expense growth should be monitored over the next 45 days.",
      type: "warning",
    },
  ],
};

export function getDashboardIntelligence(): DashboardIntelligence {
  return dashboardIntelligence;
}