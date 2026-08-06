"use client";

import { Bell, AlertCircle, CheckCircle2, Info } from "lucide-react";

export type NotificationItem = {
  id: string;
  title: string;
  description: string;
  time: string;
  type: "success" | "warning" | "info";
};

type NotificationCenterProps = {
  notifications: NotificationItem[];
};

function NotificationIcon({
  type,
}: {
  type: NotificationItem["type"];
}) {
  switch (type) {
    case "success":
      return (
        <CheckCircle2 className="h-5 w-5 text-emerald-600" />
      );

    case "warning":
      return (
        <AlertCircle className="h-5 w-5 text-amber-500" />
      );

    default:
      return (
        <Info className="h-5 w-5 text-sky-600" />
      );
  }
}

export function NotificationCenter({
  notifications,
}: NotificationCenterProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <header className="flex items-center justify-between border-b border-slate-100 p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-blue-100 p-2">
            <Bell className="h-5 w-5 text-blue-600" />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Notifications
            </h2>

            <p className="text-sm text-slate-500">
              Latest platform updates
            </p>
          </div>
        </div>

        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          {notifications.length}
        </span>
      </header>

      <div className="divide-y divide-slate-100">
        {notifications.length === 0 ? (
          <div className="p-8 text-center text-sm text-slate-500">
            You're all caught up.
          </div>
        ) : (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className="flex gap-4 p-5 transition-colors hover:bg-slate-50"
            >
              <NotificationIcon type={notification.type} />

              <div className="min-w-0 flex-1">
                <h3 className="font-medium text-slate-900">
                  {notification.title}
                </h3>

                <p className="mt-1 text-sm text-slate-600">
                  {notification.description}
                </p>

                <span className="mt-2 block text-xs text-slate-400">
                  {notification.time}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}