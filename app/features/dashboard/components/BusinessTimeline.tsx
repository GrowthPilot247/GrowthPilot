import {
  Megaphone,
  DollarSign,
  Users,
  Target,
  Sparkles,
} from "lucide-react";
import { WidgetShell } from "./WidgetShell";

const timeline = [
  {
    id: 1,
    title: "Marketing Campaign Launched",
    description:
      "New LinkedIn and Google Ads campaign started.",
    date: "2 days ago",
    icon: Megaphone,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    id: 2,
    title: "Revenue Milestone",
    description:
      "Monthly revenue exceeded target by 12%.",
    date: "5 days ago",
    icon: DollarSign,
    color: "text-emerald-600",
    bg: "bg-emerald-100",
  },
  {
    id: 3,
    title: "Team Expansion",
    description:
      "Three new sales representatives joined.",
    date: "Last week",
    icon: Users,
    color: "text-violet-600",
    bg: "bg-violet-100",
  },
  {
    id: 4,
    title: "Quarterly Goal Achieved",
    description:
      "Customer acquisition goal completed.",
    date: "2 weeks ago",
    icon: Target,
    color: "text-amber-600",
    bg: "bg-amber-100",
  },
];

export function BusinessTimeline() {
  return (
    <WidgetShell
      title="Business Timeline"
      subtitle="Key business events and milestones"
    >
      <div className="space-y-6">
        {timeline.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="flex gap-4"
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${item.bg}`}
              >
                <Icon className={`h-5 w-5 ${item.color}`} />
              </div>

              <div className="flex-1 border-l border-slate-200 pl-5 pb-6">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-slate-900">
                    {item.title}
                  </h4>

                  <span className="text-xs text-slate-500">
                    {item.date}
                  </span>
                </div>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}

        <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-5">
          <div className="flex gap-3">
            <Sparkles className="mt-1 h-5 w-5 text-indigo-600" />

            <div>
              <h4 className="font-semibold text-indigo-900">
                Future AI Insight
              </h4>

              <p className="mt-2 text-sm leading-6 text-indigo-800">
                As GrowthPilot learns from your business,
                it will automatically connect events across
                departments and explain which actions had the
                greatest impact on business growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </WidgetShell>
  );
}