"use client";

import { cn } from "@/app/lib/cn";
import { PaginationProps } from "./Pagination.types";

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) {
  const pages = Array.from(
    { length: totalPages },
    (_, i) => i + 1
  );

  return (
    <div
      className={cn(
        "flex items-center gap-2",
        className
      )}
    >
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-lg border px-3 py-2 disabled:opacity-50"
      >
        Previous
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={cn(
            "h-10 w-10 rounded-lg border",
            page === currentPage
              ? "border-emerald-600 bg-emerald-600 text-white"
              : "hover:bg-slate-100"
          )}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-lg border px-3 py-2 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}