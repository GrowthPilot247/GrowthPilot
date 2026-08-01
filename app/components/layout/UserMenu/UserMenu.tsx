"use client";

import { useState } from "react";
import { cn } from "@/app/lib/cn";
import { UserMenuProps } from "./UserMenu.types";

export function UserMenu({
  name,
  email,
  avatar,
  className,
}: UserMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2 transition-colors hover:bg-slate-50"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 font-semibold text-emerald-700 overflow-hidden">
          {avatar ? (
            <img
              src={avatar}
              alt={name}
              className="h-full w-full object-cover"
            />
          ) : (
            name.charAt(0).toUpperCase()
          )}
        </div>

        <div className="hidden text-left md:block">
          <div className="font-medium text-slate-900">
            {name}
          </div>

          <div className="text-xs text-slate-500">
            {email}
          </div>
        </div>

        <span className="text-slate-400">▾</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-64 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
          <button className="block w-full px-4 py-3 text-left hover:bg-slate-50">
            My Profile
          </button>

          <button className="block w-full px-4 py-3 text-left hover:bg-slate-50">
            Account Settings
          </button>

          <button className="block w-full px-4 py-3 text-left hover:bg-slate-50">
            Billing
          </button>

          <button className="block w-full px-4 py-3 text-left hover:bg-slate-50">
            Help Center
          </button>

          <hr />

          <button className="block w-full px-4 py-3 text-left text-red-600 hover:bg-red-50">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}