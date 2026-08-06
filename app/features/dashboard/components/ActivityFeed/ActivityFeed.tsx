import { cn } from "@/app/lib/cn";
import { ActivityFeedProps } from "./ActivityFeed.types";

export function ActivityFeed({
  items,
}: ActivityFeedProps) {
  return (
    <div
      className={cn(
        "rounded-2xl",
        "border border-slate-200",
        "bg-white",
        "shadow-sm"
      )}
    >
      <div className="border-b border-slate-200 px-6 py-4">
        <h2 className="text-lg font-semibold text-slate-900">
          Recent Activity
        </h2>
      </div>

      <div className="divide-y divide-slate-100">
        {items.map((item) => (
          <div
            key={item.id}
            className="px-6 py-4 transition-colors hover:bg-slate-50"
          >
            <h3 className="font-medium text-slate-900">
              {item.title}
            </h3>

            <p className="mt-1 text-sm text-slate-600">
              {item.description}
            </p>

            <span className="mt-2 block text-xs text-slate-400">
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}