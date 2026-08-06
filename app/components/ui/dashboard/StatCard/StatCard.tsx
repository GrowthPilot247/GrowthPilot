"use client";

import { cn } from "@/app/lib/cn";
import { StatCardProps } from "./StatCard.types";

export function StatCard({
  title,
  value,
  change,
  trend = "neutral",
  className,
}: StatCardProps) {
  const trendColor = {
    up: "text-emerald-600",
    down: "text-red-600",
    neutral: "text-muted-foreground",
  }[trend];

  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:shadow-md",
        className
      )}
    >
      <p className="text-sm text-muted-foreground">
        {title}
      </p>

      <h3 className="mt-3 text-3xl font-bold tracking-tight">
        {value}
      </h3>

      {change && (
        <p className={cn("mt-2 text-sm font-medium", trendColor)}>
          {change}
        </p>
      )}
    </div>
  );
}