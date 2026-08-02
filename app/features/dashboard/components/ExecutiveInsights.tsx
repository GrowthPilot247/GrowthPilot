import { TrendingUp, AlertTriangle, CheckCircle2 } from "lucide-react";
import { WidgetShell } from "./WidgetShell";

const insights = [
  {
    id: 1,
    icon: TrendingUp,
    title: "Revenue Momentum",
    message:
      "Revenue has increased by 18% over the last 30 days compared to the previous period.",
    color: "text-emerald-600",
  },
  {
    id: 2,
    icon: CheckCircle2,
    title: "Marketing Performance",
    message:
      "Lead conversion improved by 12% after your latest campaign optimization.",
    color: "text-blue-600",
  },
  {
    id: 3,
    icon: AlertTriangle,
    title: "Cash Flow Watch",
    message:
      "Projected cash flow may tighten within 45 days if current expense growth continues.",
    color: "text-amber-600",
  },
];

export function ExecutiveInsights() {
  return (
    <WidgetShell
      title="Executive Insights"
      subtitle="AI-generated business highlights"
    >
      <div className="space-y-5">
        {insights.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="flex gap-4 rounded-xl border border-slate-100 p-4 hover:bg-slate-50 transition-colors"
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 ${item.color}`}
              >
                <Icon className="h-5 w-5" />
              </div>

              <div className="flex-1">
                <h4 className="font-semibold text-slate-900">
                  {item.title}
                </h4>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  {item.message}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </WidgetShell>
  );
}