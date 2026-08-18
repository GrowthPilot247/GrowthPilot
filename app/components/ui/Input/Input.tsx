"use client";

import { useId } from "react";
import { cn } from "@/app/lib/cn";
import { Spinner } from "../Spinner";
import type { InputProps } from "./Input.types";

const sizeClasses = {
  sm: "h-10 px-3 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-5 text-base",
} as const;

export function Input({
  label,
  helperText,
  error,
  success,
  required,
  loading,
  leftIcon,
  rightIcon,
  inputSize = "md",
  className,
  disabled,
  id,
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  const descriptionId = `${inputId}-description`;
  const errorId = `${inputId}-error`;

  const describedBy = error
    ? errorId
    : helperText
      ? descriptionId
      : undefined;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="mb-2 block text-sm font-medium text-slate-900"
        >
          {label}

          {required && (
            <span
              className="ml-1 text-red-500"
              aria-hidden="true"
            >
              *
            </span>
          )}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <div
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            aria-hidden="true"
          >
            {leftIcon}
          </div>
        )}

        <input
          id={inputId}
          className={cn(
            "w-full",
            "rounded-xl",
            "border",
            "border-slate-300",
            "bg-white",
            "shadow-sm",
            "outline-none",
            "transition-colors",
            "duration-200",
            "focus:border-green-500",
            "focus:ring-2",
            "focus:ring-green-500/20",
            "disabled:cursor-not-allowed",
            "disabled:bg-slate-100",
            "disabled:opacity-70",
            error &&
              "border-red-500 focus:border-red-500 focus:ring-red-500/20",
            success &&
              !error &&
              "border-green-500 focus:border-green-500",
            leftIcon && "pl-10",
            rightIcon || loading ? "pr-10" : null,
            sizeClasses[inputSize],
            className
          )}
          disabled={disabled || loading}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          {...props}
        />

        {loading ? (
          <div
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
            aria-hidden="true"
          >
            <Spinner size="sm" />
          </div>
        ) : (
          rightIcon && (
            <div
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
              aria-hidden="true"
            >
              {rightIcon}
            </div>
          )
        )}
      </div>

      {error ? (
        <p
          id={errorId}
          className="mt-1 text-sm text-red-500"
        >
          {error}
        </p>
      ) : helperText ? (
        <p
          id={descriptionId}
          className="mt-1 text-sm text-slate-500"
        >
          {helperText}
        </p>
      ) : null}
    </div>
  );
}