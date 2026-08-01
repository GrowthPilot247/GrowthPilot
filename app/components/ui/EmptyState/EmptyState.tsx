import { cn } from "@/app/lib/cn";
import { EmptyStateProps } from "./EmptyState.types";

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
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-4xl">
          {icon}
        </div>
      )}

      <h3 className="text-2xl font-semibold text-slate-900">
        {title}
      </h3>

      {description && (
        <p className="mt-3 max-w-md text-slate-500">
          {description}
        </p>
      )}

      {action && (
        <div className="mt-8">
          {action}
        </div>
      )}
    </div>
  );
}