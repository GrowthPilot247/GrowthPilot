"use client";

import { Bell, Settings, User } from "lucide-react";
import { DashboardHeaderProps } from "./DashboardHeader.types";

export function DashboardHeader({
  title,
  userName,
}: DashboardHeaderProps) {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="mb-8 flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          {title}
        </h1>

        <p className="mt-2 text-lg text-slate-600">
          Welcome back, <strong>{userName}</strong> 👋
        </p>

        <p className="mt-1 text-sm text-slate-500">
          Here's what's happening with your business today.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm text-slate-500">
          {today}
        </span>

        <button className="rounded-xl border border-slate-200 p-2 transition hover:bg-slate-100">
          <Bell size={20} />
        </button>

        <button className="rounded-xl border border-slate-200 p-2 transition hover:bg-slate-100">
          <Settings size={20} />
        </button>

        <button className="rounded-xl border border-slate-200 p-2 transition hover:bg-slate-100">
          <User size={20} />
        </button>
      </div>
    </header>
  );
}