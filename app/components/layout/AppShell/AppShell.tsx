"use client";

import { cn } from "@/app/lib/cn";
import { AppShellProps } from "./AppShell.types";

export function AppShell({
  sidebar,
  header,
  children,
  className,
}: AppShellProps) {
  return (
    <div className={cn("flex min-h-screen bg-slate-50", className)}>
      {/* Sidebar */}
      <aside className="w-72 shrink-0 border-r border-slate-200 bg-white">
        {sidebar}
      </aside>

      {/* Main Content */}
      <div className="flex min-h-screen flex-1 flex-col">
        {/* Header */}
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
          {header}
        </header>

        {/* Page Content */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}