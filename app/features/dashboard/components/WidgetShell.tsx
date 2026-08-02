import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface WidgetShellProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  action?: ReactNode;
  className?: string;
}

export function WidgetShell({
  title,
  subtitle,
  children,
  action,
  className,
}: WidgetShellProps) {
  return (
    <section
      className={cn(
        "rounded-2xl",
        "border border-slate-200",
        "bg-white",
        "shadow-sm",
        "transition-all duration-200",
        "hover:shadow-md",
        className
      )}
    >
      <header className="flex items-start justify-between border-b border-slate-100 px-6 py-5">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            {title}
          </h3>

          {subtitle && (
            <p className="mt-1 text-sm text-slate-500">
              {subtitle}
            </p>
          )}
        </div>

        {action && (
          <div className="flex items-center gap-2">
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