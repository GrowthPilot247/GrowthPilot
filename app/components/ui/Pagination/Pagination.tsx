"use client";

import { cn } from "@/app/lib/cn";
import type { PaginationProps } from "./Pagination.types";

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) {
  if (totalPages <= 0) {
    return null;
  }

  const pages = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <nav
      aria-label="Pagination"
      className={cn(
        "flex items-center gap-2",
        className
      )}
    >
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        aria-label="Go to previous page"
        className={cn(
          "rounded-lg border border-slate-300 px-3 py-2",
          "text-sm font-medium text-slate-700",
          "transition-colors",
          "hover:bg-slate-100",
          "focus:outline-none focus:ring-2",
          "focus:ring-emerald-500 focus:ring-offset-1",
          "disabled:cursor-not-allowed disabled:opacity-50"
        )}
      >
        Previous
      </button>

      {pages.map((page) => {
        const active = page === currentPage;

        return (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            aria-label={`Go to page ${page}`}
            aria-current={active ? "page" : undefined}
            className={cn(
              "h-10 w-10 rounded-lg border",
              "text-sm font-medium",
              "transition-colors",
              "focus:outline-none focus:ring-2",
              "focus:ring-emerald-500 focus:ring-offset-1",
              active
                ? "border-emerald-600 bg-emerald-600 text-white"
                : "border-slate-300 text-slate-700 hover:bg-slate-100"
            )}
          >
            {page}
          </button>
        );
      })}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        aria-label="Go to next page"
        className={cn(
          "rounded-lg border border-slate-300 px-3 py-2",
          "text-sm font-medium text-slate-700",
          "transition-colors",
          "hover:bg-slate-100",
          "focus:outline-none focus:ring-2",
          "focus:ring-emerald-500 focus:ring-offset-1",
          "disabled:cursor-not-allowed disabled:opacity-50"
        )}
      >
        Next
      </button>
    </nav>
  );
}