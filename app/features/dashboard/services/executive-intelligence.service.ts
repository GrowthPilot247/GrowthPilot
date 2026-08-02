export interface ExecutiveMetric {
  id: string;
  label: string;
  value: string;
  trend: string;
}

export interface ExecutiveInsight {
  id: number;
  category: string;
  message: string;
}

export interface ExecutiveIntelligence {
  greeting: {
    title: string;
    subtitle: string;
    live: boolean;
    updated: string;
  };

  metrics: ExecutiveMetric[];

  executiveBrief: ExecutiveInsight[];

  recommendations: string[];

  priorities: string[];

  risks: string[];

  opportunities: string[];
}

const intelligence: ExecutiveIntelligence = {
  greeting: {
    title: "Good Morning, Mackson Alex 👋",
    subtitle: "Here's your executive business briefing.",
    live: true,
    updated: "Updated just now",
  },

  metrics: [
    {
      id: "health",
      label: "Business Health",
      value: "92 / 100",
      trend: "+4",
    },
    {
      id: "revenue",
      label: "Revenue",
      value: "+18%",
      trend: "+3%",
    },
    {
      id: "forecast",
      label: "Forecast",
      value: "+15%",
      trend: "94% confidence",
    },
    {
      id: "risk",
      label: "Risk",
      value: "Low",
      trend: "2 alerts",
    },
  ],

  executiveBrief: [
    {
      id: 1,
      category: "Revenue",
      message:
        "Revenue continues to grow due to improved customer retention.",
    },
    {
      id: 2,
      category: "Marketing",
      message:
        "Marketing ROI improved after campaign optimisation.",
    },
    {
      id: 3,
      category: "Finance",
      message:
        "Two enterprise invoices require executive attention.",
    },
    {
      id: 4,
      category: "Operations",
      message:
        "Inventory remains healthy across strategic products.",
    },
  ],

  recommendations: [
    "Increase LinkedIn campaign budget by 12%.",
    "Contact ABC Manufacturing.",
    "Follow up with 14 enterprise leads.",
  ],

  priorities: [
    "Approve Marketing Budget",
    "Review Revenue Forecast",
    "Executive Meeting – 2:00 PM",
    "Review Finance Alerts",
  ],

  risks: [
    "Two overdue invoices.",
    "Cash flow review recommended.",
  ],

  opportunities: [
    "Potential ₦8.5M revenue recovery.",
    "Six contracts ready for renewal.",
    "18 customers eligible for upsell.",
  ],
};

export function getExecutiveIntelligence(): ExecutiveIntelligence {
  return intelligence;
}