"use client";

import {
  TrendingUp,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";

import { Button } from "@/app/components/ui/Button";
import { Widget } from "@/app/components/ui/dashboard/Widget";
import { WidgetHeader } from "@/app/components/ui/dashboard/WidgetHeader";

const insights = [
  {
    id: 1,
    icon: TrendingUp,
    color: "text-emerald-600",
    title: "Revenue Opportunity",
    summary: "Enterprise pipeline increased by 18%.",
    impact: "+$42,000 projected monthly revenue",
    action: "Review Enterprise Pipeline",
    confidence: "98%",
  },
  {
    id: 2,
    icon: AlertTriangle,
    color: "text-amber-600",
    title: "Customer Retention",
    summary: "Churn risk increased in the Retail segment.",
    impact: "Potential loss: $18,000 MRR",
    action: "Launch retention campaign",
    confidence: "92%",
  },
  {
    id: 3,
    icon: Lightbulb,
    color: "text-blue-600",
    title: "AI Recommendation",
    summary: "Manufacturing leads outperform average by 27%.",
    impact: "Highest-performing acquisition channel",
    action: "Increase ad spend by 15%",
    confidence: "96%",
  },
];

export function ExecutiveInsights() {
  return (
    <Widget>
      <WidgetHeader
        title="Executive Insights"
        description="AI-generated strategic recommendations"
        action={
          <Button size="sm" variant="outline">
            View All
          </Button>
        }
      />

      <div className="space-y-5">
        {insights.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="rounded-2xl border border-border p-5 transition-all duration-200 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl bg-muted ${item.color}`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <div className="flex-1">
                  <h4 className="font-semibold">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.summary}
                  </p>

                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Business Impact
                      </p>

                      <p className="mt-1 text-sm font-medium">
                        {item.impact}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Recommended Action
                      </p>

                      <p className="mt-1 text-sm font-medium">
                        {item.action}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      AI Confidence:{" "}
                      <strong>{item.confidence}</strong>
                    </span>

                    <Button size="sm">
                      View Analysis
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Widget>
  );
}