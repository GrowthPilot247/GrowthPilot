"use client";

import { useEffect } from "react";
import { cn } from "@/app/lib/cn";
import type { ModalProps } from "./Modal.types";

const sizeClasses = {
  sm: "max-w-sm",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
} as const;

export function Modal({
  open,
  title,
  children,
  footer,
  onClose,
  className,
  size = "md",
}: ModalProps) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}
        className={cn(
          "w-full",
          sizeClasses[size],
          "overflow-hidden rounded-2xl",
          "bg-white shadow-2xl",
          className
        )}
        onMouseDown={(event) => event.stopPropagation()}
      >
        {(title || onClose) && (
          <header className="flex items-center justify-between gap-4 border-b border-slate-200 px-6 py-4">
            {title && (
              <h2
                id="modal-title"
                className="text-lg font-semibold text-slate-900"
              >
                {title}
              </h2>
            )}

            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className={cn(
                "ml-auto flex h-9 w-9 items-center justify-center",
                "rounded-lg text-slate-500",
                "transition-colors",
                "hover:bg-slate-100 hover:text-slate-900",
                "focus:outline-none focus:ring-2",
                "focus:ring-emerald-500 focus:ring-offset-2"
              )}
            >
              ✕
            </button>
          </header>
        )}

        <div className="px-6 py-5">
          {children}
        </div>

        {footer && (
          <footer className="border-t border-slate-200 px-6 py-4">
            {footer}
          </footer>
        )}
      </div>
    </div>
  );
}