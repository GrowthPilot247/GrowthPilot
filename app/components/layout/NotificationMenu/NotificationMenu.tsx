"use client";

import { useState } from "react";
import { cn } from "@/app/lib/cn";
import type { NotificationItem, NotificationMenuProps } from "./NotificationMenu.types";

export function NotificationMenu({
  notifications,
  className,
}: NotificationMenuProps) {
  const [open, setOpen] = useState(false);

  const unreadCount = notifications.filter(
    (item: NotificationItem) => item.unread,
  ).length;

  return (
    <div className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="relative rounded-lg border border-slate-200 bg-white p-2 hover:bg-slate-50"
      >
        🔔

        {unreadCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            {unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-96 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
          <div className="border-b border-slate-200 px-4 py-3">
            <h3 className="font-semibold">
              Notifications
            </h3>
          </div>

          {notifications.length === 0 ? (
            <div className="p-6 text-center text-slate-500">
              You&apos;re all caught up.
            </div>
          ) : (
            <div className="max-h-96 overflow-y-auto">
              {notifications.map((item) => (
                <div
                  key={item.id}
                  className="border-b border-slate-100 px-4 py-4 hover:bg-slate-50"
                >
                  <div className="flex items-start justify-between">
                    <h4 className="font-medium">
                      {item.title}
                    </h4>

                    {item.unread && (
                      <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                    )}
                  </div>

                  <p className="mt-1 text-sm text-slate-600">
                    {item.description}
                  </p>

                  <p className="mt-2 text-xs text-slate-400">
                    {item.time}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
