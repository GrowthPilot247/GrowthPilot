import { cn } from "@/app/lib/cn";
import { BadgeProps } from "./Badge.types";

const variants = {
  primary:
    "bg-emerald-100 text-emerald-700",

  secondary:
    "bg-blue-100 text-blue-700",

  success:
    "bg-green-100 text-green-700",

  warning:
    "bg-yellow-100 text-yellow-800",

  error:
    "bg-red-100 text-red-700",

  neutral:
    "bg-slate-100 text-slate-700",
};

export function Badge({
  variant = "primary",
  rounded = true,
  className,
  children,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex",
        "items-center",
        "justify-center",
        "px-3",
        "py-1",
        "text-xs",
        "font-semibold",
        "tracking-wide",
        "transition-colors",
        rounded ? "rounded-full" : "rounded-md",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}