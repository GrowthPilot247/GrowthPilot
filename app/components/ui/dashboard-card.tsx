import type { ReactNode } from "react";
import { cn } from "@/app/lib/cn";

export interface DashboardCardProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function DashboardCard({
  title,
  description,
  icon,
  action,
  children,
  className,
}: DashboardCardProps) {
  return (
    <section
      className={cn(
        "rounded-2xl",
        "border border-border",
        "bg-card",
        "shadow-sm",
        className
      )}
    >
      <header className="flex items-start justify-between gap-4 border-b border-border px-6 py-5">
        <div className="flex min-w-0 items-start gap-3">
          {icon && (
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              {icon}
            </div>
          )}

          <div className="min-w-0">
            <h2 className="text-lg font-semibold text-foreground">
              {title}
            </h2>

            {description && (
              <p className="mt-1 text-sm text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        </div>

        {action && (
          <div className="shrink-0">
            {action}
          </div>
        )}
      </header>

      <div className="p-6">
        {children}
      </div>
    </section>
  );
}