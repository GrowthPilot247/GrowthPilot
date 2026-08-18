import type { AlertProps } from "./Alert.types";
import { cn } from "@/app/lib/cn";

const variants = {
  success: "border-green-300 bg-green-50 text-green-800",
  error: "border-red-300 bg-red-50 text-red-800",
  warning: "border-yellow-300 bg-yellow-50 text-yellow-900",
  info: "border-blue-300 bg-blue-50 text-blue-800",
} as const;

export function Alert({
  variant = "info",
  title,
  children,
  dismissible = false,
  onDismiss,
  className,
  ...props
}: AlertProps) {
  return (
    <div
      role="alert"
      className={cn(
        "rounded-xl border p-4",
        variants[variant],
        className
      )}
      {...props}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          {title && (
            <h3 className="font-semibold">
              {title}
            </h3>
          )}

          {children && (
            <div
              className={cn(
                "text-sm",
                title && "mt-1"
              )}
            >
              {children}
            </div>
          )}
        </div>

        {dismissible && (
          <button
            type="button"
            onClick={onDismiss}
            className="shrink-0 rounded-md p-1 text-current opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-current focus:ring-offset-2"
            aria-label="Dismiss alert"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
}