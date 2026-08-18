import { cn } from "@/app/lib/cn";
import type { EmptyStateProps } from "./EmptyState.types";

export function EmptyState({
  title,
  description,
  icon,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center",
        "rounded-2xl",
        "border border-slate-200",
        "bg-white",
        "p-10",
        "text-center",
        "shadow-sm",
        className
      )}
    >
      {icon && (
        <div className="mb-4 flex items-center justify-center text-slate-400">
          {icon}
        </div>
      )}

      <h3 className="text-xl font-semibold text-slate-900">
        {title}
      </h3>

      {description && (
        <p className="mt-3 max-w-md text-sm text-slate-500">
          {description}
        </p>
      )}

      {action && (
        <div className="mt-6">
          {action}
        </div>
      )}
    </div>
  );
}