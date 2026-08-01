import { cn } from "@/app/lib/cn";
import { KpiCardProps } from "./KpiCard.types";

export function KpiCard({
  title,
  value,
  change,
  trend,
}: KpiCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl",
        "border border-slate-200",
        "bg-white",
        "p-6",
        "shadow-sm",
        "transition-all",
        "hover:shadow-md"
      )}
    >
      <div className="text-sm font-medium text-slate-500">
        {title}
      </div>

      <div className="mt-3 text-3xl font-bold text-slate-900">
        {value}
      </div>

      <div
        className={cn(
          "mt-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium",
          trend === "up"
            ? "bg-emerald-100 text-emerald-700"
            : "bg-red-100 text-red-700"
        )}
      >
        <span>
          {trend === "up" ? "▲" : "▼"}
        </span>

        <span>{change}</span>
      </div>
    </div>
  );
}