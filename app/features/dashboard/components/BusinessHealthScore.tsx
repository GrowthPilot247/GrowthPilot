import { TrendingUp, Activity, ShieldCheck } from "lucide-react";
import { WidgetShell } from "./WidgetShell";

interface BusinessHealthScoreProps {
  score?: number;
}

export function BusinessHealthScore({
  score = 92,
}: BusinessHealthScoreProps) {
  const getStatus = () => {
    if (score >= 90)
      return {
        label: "Excellent",
        color: "text-emerald-600",
        bg: "bg-emerald-100",
      };

    if (score >= 75)
      return {
        label: "Healthy",
        color: "text-blue-600",
        bg: "bg-blue-100",
      };

    if (score >= 60)
      return {
        label: "Needs Attention",
        color: "text-amber-600",
        bg: "bg-amber-100",
      };

    return {
      label: "Critical",
      color: "text-red-600",
      bg: "bg-red-100",
    };
  };

  const status = getStatus();

  return (
    <WidgetShell
      title="Business Health Score"
      subtitle="Overall business performance"
    >
      <div className="flex flex-col items-center">
        <div className="relative flex h-40 w-40 items-center justify-center rounded-full border-8 border-emerald-500 bg-emerald-50">
          <span className="text-5xl font-bold text-slate-900">
            {score}
          </span>
        </div>

        <div
          className={`mt-5 rounded-full px-4 py-2 text-sm font-semibold ${status.bg} ${status.color}`}
        >
          {status.label}
        </div>

        <div className="mt-8 grid w-full gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-slate-100 p-4">
            <TrendingUp className="mb-2 h-5 w-5 text-emerald-600" />
            <p className="text-sm text-slate-500">
              Revenue Trend
            </p>
            <p className="mt-1 font-semibold text-slate-900">
              Strong
            </p>
          </div>

          <div className="rounded-xl border border-slate-100 p-4">
            <Activity className="mb-2 h-5 w-5 text-blue-600" />
            <p className="text-sm text-slate-500">
              Operations
            </p>
            <p className="mt-1 font-semibold text-slate-900">
              Stable
            </p>
          </div>

          <div className="rounded-xl border border-slate-100 p-4">
            <ShieldCheck className="mb-2 h-5 w-5 text-violet-600" />
            <p className="text-sm text-slate-500">
              Forecast Confidence
            </p>
            <p className="mt-1 font-semibold text-slate-900">
              High
            </p>
          </div>
        </div>
      </div>
    </WidgetShell>
  );
}