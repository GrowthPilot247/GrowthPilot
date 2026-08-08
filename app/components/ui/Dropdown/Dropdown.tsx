import { cn } from "@/app/lib/cn";
import type { DropdownProps } from "./Dropdown.types";

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
  leftIcon,
  rightIcon,
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
        <label className="text-sm font-medium text-slate-900">
          {label}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <span
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            aria-hidden="true"
          >
            {leftIcon}
          </span>
        )}

        <select
          disabled={disabled || loading}
          value={value}
          onChange={(event) => onChange?.(event.target.value)}
          className={cn(
            "h-12 w-full appearance-none rounded-xl border",
            "bg-white px-4",
            "text-sm text-slate-900",
            "outline-none",
            "transition-colors duration-200",
            "focus:border-emerald-500",
            "focus:ring-2 focus:ring-emerald-200",
            "disabled:cursor-not-allowed",
            "disabled:opacity-60",
            leftIcon && "pl-10",
            rightIcon ? "pr-10" : "pr-10",
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-200"
              : "border-slate-300"
          )}
          aria-invalid={error ? true : undefined}
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

        {rightIcon && (
          <span
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
            aria-hidden="true"
          >
            {rightIcon}
          </span>
        )}
      </div>

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