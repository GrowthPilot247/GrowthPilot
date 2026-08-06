"use client";

import { CalendarDays, Clock } from "lucide-react";

export type CalendarEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  category: "meeting" | "task" | "campaign" | "billing";
};

type CalendarWidgetProps = {
  events: CalendarEvent[];
};

const categoryStyles: Record<CalendarEvent["category"], string> = {
  meeting: "bg-blue-100 text-blue-700",
  task: "bg-emerald-100 text-emerald-700",
  campaign: "bg-violet-100 text-violet-700",
  billing: "bg-amber-100 text-amber-700",
};

export function CalendarWidget({
  events,
}: CalendarWidgetProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <header className="flex items-center gap-3 border-b border-slate-100 p-6">
        <div className="rounded-full bg-blue-100 p-2">
          <CalendarDays className="h-5 w-5 text-blue-600" />
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Calendar
          </h2>
          <p className="text-sm text-slate-500">
            Upcoming events and schedules
          </p>
        </div>
      </header>

      <div className="divide-y divide-slate-100">
        {events.length === 0 ? (
          <div className="p-8 text-center text-sm text-slate-500">
            No upcoming events.
          </div>
        ) : (
          events.map((event) => (
            <div
              key={event.id}
              className="flex items-start justify-between gap-4 p-5 hover:bg-slate-50 transition-colors"
            >
              <div className="min-w-0">
                <h3 className="font-medium text-slate-900">
                  {event.title}
                </h3>

                <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                  <Clock className="h-4 w-4" />
                  <span>
                    {event.date} • {event.time}
                  </span>
                </div>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  categoryStyles[event.category]
                }`}
              >
                {event.category}
              </span>
            </div>
          ))
        )}
      </div>
    </section>
  );
}