"use client";

import {
  ArrowTrendingUpIcon,
  ExclamationTriangleIcon,
  LightBulbIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const insights = [
  {
    id: 1,
    title: "Revenue Acceleration",
    description:
      "Enterprise revenue is growing faster than forecast with sustained quarterly momentum.",
    type: "success",
    icon: ArrowTrendingUpIcon,
  },
  {
    id: 2,
    title: "Marketing Efficiency",
    description:
      "LinkedIn campaigns continue to deliver the highest ROI across all acquisition channels.",
    type: "info",
    icon: LightBulbIcon,
  },
  {
    id: 3,
    title: "Business Stability",
    description:
      "Business Health remains above 90 with strong operational consistency.",
    type: "success",
    icon: ShieldCheckIcon,
  },
  {
    id: 4,
    title: "Retail Churn Risk",
    description:
      "Retail customer churn increased slightly this month and should be monitored closely.",
    type: "warning",
    icon: ExclamationTriangleIcon,
  },
];

const styles = {
  success: {
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    icon: "text-emerald-600",
    title: "text-emerald-700",
  },
  info: {
    bg: "bg-sky-50",
    border: "border-sky-200",
    icon: "text-sky-600",
    title: "text-sky-700",
  },
  warning: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    icon: "text-amber-600",
    title: "text-amber-700",
  },
};

export function ExecutiveInsightStrip() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">

      <div className="border-b border-slate-100 p-6">

        <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
          Executive Intelligence Feed
        </p>

        <h2 className="mt-2 text-2xl font-bold text-slate-900">
          AI Executive Insights
        </h2>

        <p className="mt-2 text-slate-600">
          Strategic observations generated from GrowthPilot's
          Executive Intelligence Engine.
        </p>

      </div>

      <div className="grid gap-5 p-6 lg:grid-cols-2">

        {insights.map((item) => {
          const Icon = item.icon;
          const style = styles[item.type as keyof typeof styles];

          return (
            <div
              key={item.id}
              className={`rounded-2xl border p-5 transition hover:shadow-lg ${style.bg} ${style.border}`}
            >
              <div className="flex items-start gap-4">

                <div className="rounded-xl bg-white p-3 shadow-sm">
                  <Icon className={`h-6 w-6 ${style.icon}`} />
                </div>

                <div className="flex-1">

                  <h3 className={`font-semibold ${style.title}`}>
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {item.description}
                  </p>

                </div>

              </div>
            </div>
          );
        })}

      </div>

    </section>
  );
}