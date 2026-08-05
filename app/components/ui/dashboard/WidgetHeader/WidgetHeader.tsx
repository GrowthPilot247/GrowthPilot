"use client";

import { cn } from "@/app/lib/cn";
import { WidgetHeaderProps } from "./WidgetHeader.types";

export function WidgetHeader({
  title,
  description,
  action,
  className,
}: WidgetHeaderProps) {
  return (
    <div
      className={cn(
        "mb-5 flex items-start justify-between gap-4",
        className
      )}
    >
      <div>
        <h3 className="text-lg font-semibold tracking-tight">
          {title}
        </h3>

        {description && (
          <p className="mt-1 text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </div>

      {action && (
        <div className="shrink-0">
          {action}
        </div>
      )}
    </div>
  );
}