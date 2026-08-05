"use client";

import { cn } from "@/app/lib/cn";
import { WidgetProps } from "./Widget.types";

export function Widget({
  children,
  className,
}: WidgetProps) {
  return (
    <section
      className={cn(
        "rounded-2xl border border-border bg-card p-6 shadow-sm",
        "transition-all duration-200",
        "hover:shadow-md",
        className
      )}
    >
      {children}
    </section>
  );
}