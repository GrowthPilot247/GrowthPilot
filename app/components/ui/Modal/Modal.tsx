"use client";

import { cn } from "@/app/lib/cn";
import { ModalProps } from "./Modal.types";

const sizeClasses = {
  sm: "max-w-sm",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
};

export function Modal({
  open,
  title,
  children,
  footer,
  onClose,
  className,
  size = "md",
}: ModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className={cn(
          "w-full",
          sizeClasses[size],
          "rounded-2xl",
          "bg-white",
          "shadow-2xl",
          "overflow-hidden",
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
  <div className="flex items-center justify-between border-b px-6 py-4">
    <h2 className="text-xl font-semibold">
      {title}
    </h2>

    <button
      type="button"
      onClick={onClose}
      aria-label="Close modal"
      className={cn(
        "flex h-9 w-9 items-center justify-center",
        "rounded-lg",
        "text-slate-500",
        "transition-colors",
        "hover:bg-slate-100",
        "hover:text-slate-900"
      )}
    >
      ✕
    </button>
  </div>
)}
        <div className="p-6">
          {children}
        </div>

        {footer && (
          <div className="border-t px-6 py-4">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}