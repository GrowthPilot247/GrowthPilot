"use client";

import { cn } from "@/app/lib/cn";
import { BreadcrumbsProps } from "./Breadcrumbs.types";

export function Breadcrumbs({
  items,
  className,
}: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center text-sm", className)}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div
            key={`${item.label}-${index}`}
            className="flex items-center"
          >
            {isLast ? (
              <span className="font-medium text-slate-900">
                {item.label}
              </span>
            ) : (
              <a
                href={item.href ?? "#"}
                className="text-slate-500 transition-colors hover:text-emerald-600"
              >
                {item.label}
              </a>
            )}

            {!isLast && (
              <span className="mx-2 text-slate-400">
                /
              </span>
            )}
          </div>
        );
      })}
    </nav>
  );
}