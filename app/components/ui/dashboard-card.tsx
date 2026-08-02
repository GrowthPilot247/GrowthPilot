import { ReactNode } from "react";

interface DashboardCardProps {
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
  className = "",
}: DashboardCardProps) {
  return (
    <section
      className={`rounded-xl border border-slate-200 bg-white shadow-sm ${className}`}
    >
      <header className="flex items-center justify-between border-b border-slate-100 p-6">
        <div className="flex items-center gap-3">
          {icon && (
            <div className="rounded-full bg-slate-100 p-2">
              {icon}
            </div>
          )}

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              {title}
            </h2>

            {description && (
              <p className="text-sm text-slate-500">
                {description}
              </p>
            )}
          </div>
        </div>

        {action}
      </header>

      <div className="p-6">{children}</div>
    </section>
  );
}