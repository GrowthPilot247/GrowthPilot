"use client";

import { GlobalSearch } from "../search/GlobalSearch";
import { NotificationBell } from "../notifications/NotificationBell";
import { ThemeToggle } from "../theme/ThemeToggle";
import { UserMenu } from "../user/UserMenu";

export function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-background px-6">
      {/* Left */}
      <div className="flex items-center gap-6">
        <h2 className="text-xl font-semibold">
          GrowthPilot
        </h2>

        <GlobalSearch />
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">
        <NotificationBell />

        <ThemeToggle />

        <UserMenu />
      </div>
    </header>
  );
}