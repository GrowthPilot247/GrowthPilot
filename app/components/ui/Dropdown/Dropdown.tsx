"use client";

import { cn } from "@/app/lib/cn";
import {
  DropdownProps,
} from "./Dropdown.types";

export function Dropdown({
  label,
  placeholder = "Select an option",
  options,
  value,
  error,
  helperText,
  disabled,
  loading,
  fullWidth = true,
  className,
  onChange,
}: DropdownProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2",
        fullWidth && "w-full",
        className
      )}
    >
      {label && (
        <label className="text-sm font-medium text-slate-700">
          {label}
        </label>
      )}

      <select
        disabled={disabled || loading}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className={cn(
          "h-12 rounded-xl border px-4",
          "bg-white",
          "transition-all",
          "outline-none",
          "focus:border-emerald-500",
          "focus:ring-2",
          "focus:ring-emerald-200",

          disabled &&
            "cursor-not-allowed opacity-60",

          error
            ? "border-red-500"
            : "border-slate-300"
        )}
      >
        <option value="">
          {loading ? "Loading..." : placeholder}
        </option>

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>

      {error ? (
        <p className="text-sm text-red-600">
          {error}
        </p>
      ) : helperText ? (
        <p className="text-sm text-slate-500">
          {helperText}
        </p>
      ) : null}
    </div>
  );
}