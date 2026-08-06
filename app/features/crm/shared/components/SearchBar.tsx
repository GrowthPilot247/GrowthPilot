"use client";

import { Search, X } from "lucide-react";

interface SearchBarProps {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  onClear?: () => void;
  disabled?: boolean;
}

export function SearchBar({
  value = "",
  placeholder = "Search...",
  onChange,
  onClear,
  disabled = false,
}: SearchBarProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="flex items-center gap-3">

        <Search className="h-5 w-5 text-slate-400" />

        <input
          type="text"
          value={value}
          disabled={disabled}
          placeholder={placeholder}
          onChange={(event) => onChange?.(event.target.value)}
          className="flex-1 bg-transparent text-slate-700 outline-none disabled:cursor-not-allowed disabled:opacity-50"
        />

        {value && !disabled && (
          <button
            type="button"
            onClick={onClear}
            className="rounded-lg p-2 transition hover:bg-slate-100"
          >
            <X className="h-4 w-4 text-slate-500" />
          </button>
        )}

      </div>

    </section>
  );
}