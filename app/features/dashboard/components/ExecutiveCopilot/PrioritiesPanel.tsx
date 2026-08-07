"use client";

import { CheckCircle2 } from "lucide-react";

interface Priority {
  id: string;
  title: string;
  due?: string;
}

interface PrioritiesPanelProps {
  priorities: Priority[];
}

export function PrioritiesPanel({
  priorities,
}: PrioritiesPanelProps) {
  return (
    <div className="rounded-2xl bg-white text-slate-900 shadow-2xl">
      <div className="border-b p-6">
        <h2 className="text-xl font-bold">
          Today's Priorities
        </h2>
      </div>

      <div className="space-y-3 p-6">
        {priorities.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between rounded-lg border p-3"
          >
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-600" />

              <span>{task.title}</span>
            </div>

            {task.due && (
              <span className="text-xs font-medium text-slate-500">
                {task.due}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}