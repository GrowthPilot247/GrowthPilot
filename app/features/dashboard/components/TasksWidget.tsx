"use client";

import {
  ArrowRight,
  CheckCircle2,
  Circle,
  ClipboardCheck,
  Clock3,
} from "lucide-react";

export type TaskPriority =
  | "High"
  | "Medium"
  | "Low";

export interface TaskItem {
  id: string;
  title: string;
  due: string;
  completed: boolean;
  priority: TaskPriority;
}

interface TasksWidgetProps {
  tasks: TaskItem[];
}

const priorityStyles: Record<TaskPriority, string> = {
  High: "bg-red-100 text-red-700",
  Medium: "bg-amber-100 text-amber-700",
  Low: "bg-emerald-100 text-emerald-700",
};

export function TasksWidget({
  tasks,
}: TasksWidgetProps) {
  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-slate-100 p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-emerald-100 p-2">
            <ClipboardCheck className="h-5 w-5 text-emerald-600" />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Tasks
            </h2>

            <p className="text-sm text-slate-500">
              {completedTasks} of {tasks.length} completed
            </p>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 transition-colors hover:text-emerald-700"
        >
          View All

          <ArrowRight className="h-4 w-4" />
        </button>
      </header>

      {/* Content */}
      {tasks.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-10 text-center">
          <ClipboardCheck className="mb-3 h-10 w-10 text-slate-300" />

          <h3 className="font-medium text-slate-900">
            No Tasks
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            You're all caught up.
          </p>
        </div>
      ) : (
        <div className="divide-y divide-slate-100">
          {tasks.map((task) => (
            <button
              key={task.id}
              type="button"
              className="flex w-full items-start justify-between p-5 text-left transition-colors hover:bg-slate-50"
            >
              <div className="flex gap-4">
                <div className="mt-1">
                  {task.completed ? (
                    <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  ) : (
                    <Circle className="h-5 w-5 text-slate-400" />
                  )}
                </div>

                <div>
                  <h3
                    className={`font-medium ${
                      task.completed
                        ? "text-slate-400 line-through"
                        : "text-slate-900"
                    }`}
                  >
                    {task.title}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                    <Clock3 className="h-4 w-4" />

                    <span>{task.due}</span>
                  </div>
                </div>
              </div>

              <span
                className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                  priorityStyles[task.priority]
                }`}
              >
                {task.priority}
              </span>
            </button>
          ))}
        </div>
      )}
    </section>
  );
}