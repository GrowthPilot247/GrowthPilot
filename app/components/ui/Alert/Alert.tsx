import { AlertProps } from "./Alert.types";
import { cn } from "@/app/lib/cn";

const variants = {
  success:
    "bg-green-50 border-green-300 text-green-800",

  error:
    "bg-red-50 border-red-300 text-red-800",

  warning:
    "bg-yellow-50 border-yellow-300 text-yellow-900",

  info:
    "bg-blue-50 border-blue-300 text-blue-800",
};

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
      className={cn(
        "rounded-xl border p-4",
        variants[variant],
        className
      )}
      {...props}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          {title && (
            <h4 className="font-semibold">
              {title}
            </h4>
          )}

          {children && (
            <p className="mt-1 text-sm">
              {children}
            </p>
          )}
        </div>

        {dismissible && (
          <button
            onClick={onDismiss}
            className="text-lg leading-none opacity-70 hover:opacity-100"
            aria-label="Dismiss alert"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
}