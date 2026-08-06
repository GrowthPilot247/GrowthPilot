"use client";

import { cn } from "@/app/lib/cn";
import { DashboardGridProps } from "./DashboardGrid.types";

export function DashboardGrid({
  children,
  className,
}: DashboardGridProps) {
  return (
    <div
      className={cn(
        "grid gap-6",
        "grid-cols-1",
        "md:grid-cols-2",
        "xl:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
}