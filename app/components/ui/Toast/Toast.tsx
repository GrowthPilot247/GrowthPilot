"use client";

import { useEffect } from "react";
import { cn } from "@/app/lib/cn";
import { ToastProps } from "./Toast.types";

const variants = {
  success:
    "border-emerald-200 bg-emerald-50 text-emerald-900",

  error:
    "border-red-200 bg-red-50 text-red-900",

  warning:
    "border-amber-200 bg-amber-50 text-amber-900",

  info:
    "border-blue-200 bg-blue-50 text-blue-900",
};

export function Toast({
  title,
  description,
  variant = "info",
  open,
  onClose,
  duration = 4000,
  className,
}: ToastProps) {
  useEffect(() => {
    if (!open) return;

    const timer = setTimeout(onClose, duration);

    return () => clearTimeout(timer);
  }, [open, duration, onClose]);

  if (!open) return null;

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 w-96 rounded-xl border p-5 shadow-xl",
        "animate-in fade-in slide-in-from-bottom-3 duration-300",
        variants[variant],
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="font-semibold">
            {title}
          </h4>

          {description && (
            <p className="mt-2 text-sm opacity-90">
              {description}
            </p>
          )}
        </div>

        <button
          onClick={onClose}
          className="text-lg font-bold opacity-70 hover:opacity-100"
          aria-label="Close notification"
        >
          ×
        </button>
      </div>
    </div>
  );
}