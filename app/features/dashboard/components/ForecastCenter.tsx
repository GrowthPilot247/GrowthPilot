import {
  ArrowUpRight,
  ArrowRight,
  ArrowDownRight,
  Sparkles,
} from "lucide-react";
import { WidgetShell } from "./WidgetShell";

const scenarios = [
  {
    title: "Best Case",
    value: "$1.82M",
    change: "+26%",
    icon: ArrowUpRight,
    color: "text-emerald-600",
  },
  {
    title: "Expected",
    value: "$1.55M",
    change: "+15%",
    icon: ArrowRight,
    color: "text-blue-600",
  },
  {
    title: "Worst Case",
    value: "$1.28M",
    change: "+4%",
    icon: ArrowDownRight,
    color: "text-amber-600",
  },
];

const quarterlyForecast = [
  { quarter: "Q1", revenue: "$380K" },
  { quarter: "Q2", revenue: "$410K" },
  { quarter: "Q3", revenue: "$455K" },
  { quarter: "Q4", revenue: "$520K" },
];

export function ForecastCenter() {
  return (
    <WidgetShell
      title="Forecast Center"
      subtitle="AI-powered business projections"
    >
      <div className="space-y-6">

        <div className="grid gap-4 md:grid-cols-3">
          {scenarios.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 p-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    {item.title}
                  </span>

                  <Icon className={`h-5 w-5 ${item.color}`} />
                </div>

                <p className="mt-3 text-3xl font-bold text-slate-900">
                  {item.value}
                </p>

                <p className={`mt-1 text-sm font-medium ${item.color}`}>
                  {item.change}
                </p>
              </div>
            );
          })}
        </div>

        <div className="rounded-xl border border-slate-200 p-5">
          <h4 className="font-semibold text-slate-900">
            Quarterly Projection
          </h4>

          <div className="mt-4 space-y-3">
            {quarterlyForecast.map((item) => (
              <div
                key={item.quarter}
                className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3"
              >
                <span className="font-medium text-slate-700">
                  {item.quarter}
                </span>

                <span className="font-semibold text-slate-900">
                  {item.revenue}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-violet-200 bg-violet-50 p-5">
          <div className="flex items-start gap-3">
            <Sparkles className="mt-1 h-5 w-5 text-violet-600" />

            <div>
              <h4 className="font-semibold text-violet-900">
                AI Explanation
              </h4>

              <p className="mt-2 text-sm leading-6 text-violet-800">
                Forecast confidence is currently high because
                revenue has remained stable for the last four
                months, customer retention has improved,
                and marketing ROI continues to increase.
              </p>
            </div>
          </div>
        </div>

      </div>
    </WidgetShell>
  );
}