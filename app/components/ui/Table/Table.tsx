import { cn } from "@/app/lib/cn";
import { TableProps } from "./Table.types";

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
        "overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm",
        className
      )}
    >
      <table className="min-w-full border-collapse">
        <thead className="bg-slate-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="border-b border-slate-200 px-6 py-4 text-left text-sm font-semibold text-slate-700"
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
                className="px-6 py-10 text-center text-slate-500"
              >
                Loading...
              </td>
            </tr>
          ) : rows.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="px-6 py-10 text-center text-slate-500"
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            rows.map((row, index) => (
              <tr
                key={row.id}
                className={cn(
                  striped && index % 2 === 1 && "bg-slate-50",
                  hover && "transition-colors hover:bg-emerald-50"
                )}
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className="border-b border-slate-100 px-6 py-4 text-sm text-slate-700"
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