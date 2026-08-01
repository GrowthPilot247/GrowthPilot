"use client";

import { HeaderProps } from "./Header.types";
import { cn } from "@/app/lib/cn";

export function Header({
  title = "Dashboard",
  actions,
  className,
}: HeaderProps) {
  return (
    <div
      className={cn(
        "flex h-16 items-center justify-between px-8",
        className
      )}
    >
      {/* Left */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          {title}
        </h1>

        <p className="text-sm text-slate-500">
          Welcome to GrowthPilot
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <button
          className="rounded-lg border border-slate-200 p-2 transition-colors hover:bg-slate-100"
          aria-label="Notifications"
        >
          🔔
        </button>

        <button
          className="rounded-lg border border-slate-200 p-2 transition-colors hover:bg-slate-100"
          aria-label="Theme"
        >
          🌙
        </button>

        <button
          className="rounded-full border border-slate-200 px-4 py-2 transition-colors hover:bg-slate-100"
          aria-label="User menu"
        >
          👤 Admin
        </button>

        {actions}
      </div>
    </div>
  );
}