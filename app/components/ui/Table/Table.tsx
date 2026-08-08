import { cn } from "@/app/lib/cn";
import type { TableProps } from "./Table.types";

export function Table({
  columns,
  rows,
  striped = true,
  hover = true,
  loading = false,
  emptyMessage = "No data available.",
  className,
}: TableProps) {
  return (
    <div
      className={cn(
        "overflow-x-auto",
        "rounded-2xl",
        "border border-slate-200",
        "bg-white",
        "shadow-sm",
        className
      )}
    >
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className="px-6 py-3 text-xs font-semibold uppercase tracking-wide text-slate-600"
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr>
              <td
                colSpan={columns.length}
                className="px-6 py-10 text-center text-sm text-slate-500"
              >
                Loading...
              </td>
            </tr>
          ) : rows.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="px-6 py-10 text-center text-sm text-slate-500"
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            rows.map((row, index) => (
              <tr
                key={row.id}
                className={cn(
                  "border-b border-slate-100 last:border-b-0",
                  striped &&
                    index % 2 === 1 &&
                    "bg-slate-50",
                  hover &&
                    "transition-colors hover:bg-emerald-50"
                )}
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className="px-6 py-4 text-sm text-slate-700"
                  >
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}