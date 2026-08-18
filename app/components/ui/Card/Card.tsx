import { cn } from "@/app/lib/cn";
import type { CardProps } from "./Card.types";

const variantClasses = {
  default: "bg-white shadow-md",
  outlined: "bg-white border border-slate-200",
  elevated: "bg-white shadow-xl",
} as const;

const paddingClasses = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
} as const;

export function Card({
  title,
  subtitle,
  footer,
  variant = "default",
  hover = false,
  padding = "md",
  children,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl",
        "transition-shadow",
        "duration-200",
        hover && "hover:shadow-lg",
        variantClasses[variant],
        paddingClasses[padding],
        className
      )}
      {...props}
    >
      {(title || subtitle) && (
        <header className="mb-6">
          {title && (
            <h3 className="font-semibold text-slate-900">
              {title}
            </h3>
          )}

          {subtitle && (
            <p className="mt-1 text-slate-500">
              {subtitle}
            </p>
          )}
        </header>
      )}

      <div>{children}</div>

      {footer && (
        <footer className="mt-6 border-t border-slate-200 pt-4">
          {footer}
        </footer>
      )}
    </div>
  );
}