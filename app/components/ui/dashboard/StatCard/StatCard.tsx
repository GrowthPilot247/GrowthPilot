import { cn } from "@/app/lib/cn";
import type { StatCardProps } from "./StatCard.types";

const trendColors = {
  up: "text-emerald-600",
  down: "text-red-600",
  neutral: "text-muted-foreground",
} as const;

export function StatCard({
  title,
  value,
  change,
  trend = "neutral",
  status,
  description,
  icon,
  footer,
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl",
        "border border-border",
        "bg-card",
        "p-6",
        "shadow-sm",
        "transition-all duration-200",
        "hover:-translate-y-0.5 hover:shadow-lg",
        className
      )}
    >
      {icon && (
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
      )}

      <p className="text-sm font-medium text-muted-foreground">
        {title}
      </p>

      <h3 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
        {value}
      </h3>

      {change && (
        <p
          className={cn(
            "mt-2 text-sm font-medium",
            trendColors[trend]
          )}
        >
          {change}
        </p>
      )}

      {status && (
        <div className="mt-3 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          {status}
        </div>
      )}

      {description && (
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          {description}
        </p>
      )}

      {footer && (
        <div className="mt-5 border-t border-border pt-3 text-xs text-muted-foreground">
          {footer}
        </div>
      )}
    </div>
  );
}