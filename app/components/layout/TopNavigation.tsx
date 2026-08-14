"use client";

import {
  Bell,
  ChevronDown,
  Search,
} from "lucide-react";

export function TopNavigation() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        {/* Left side */}
        <div className="flex min-w-0 items-center gap-4">
          <div className="hidden md:block">
            <h1 className="text-lg font-semibold text-foreground">
              GrowthPilot
            </h1>
          </div>

          <button
            type="button"
            className="hidden h-10 w-full max-w-md items-center gap-3 rounded-xl border border-border bg-surface px-4 text-left text-sm text-muted-foreground transition-colors hover:bg-accent/5 lg:flex"
          >
            <Search className="h-4 w-4 shrink-0" />

            <span>Search GrowthPilot...</span>

            <kbd className="ml-auto rounded-md border border-border bg-background px-2 py-1 text-xs">
              ⌘K
            </kbd>
          </button>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Notifications"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-accent/10 hover:text-foreground"
          >
            <Bell className="h-5 w-5" />

            <span
              aria-label="3 unread notifications"
              className="absolute right-2 top-2 h-2 w-2 rounded-full bg-primary"
            />
          </button>

          <button
            type="button"
            className="flex items-center gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-accent/10"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
              MA
            </div>

            <div className="hidden text-left sm:block">
              <p className="text-sm font-semibold text-foreground">
                Mackson Alex
              </p>

              <p className="text-xs text-muted-foreground">
                Administrator
              </p>
            </div>

            <ChevronDown className="hidden h-4 w-4 text-muted-foreground sm:block" />
          </button>
        </div>
      </div>
    </header>
  );
}