import { Spinner } from "../Spinner";
import { cn } from "@/app/lib/cn";
import { ButtonProps } from "./Button.types";
const variantClasses = {
  primary:
    "bg-green-600 text-white hover:bg-green-700 focus:ring-2 focus:ring-green-500",
  secondary:
    "bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500",
  outline:
    "border border-slate-300 bg-white text-slate-900 hover:bg-slate-100",
  ghost:
  "bg-transparent text-slate-700 hover:bg-slate-100",
  destructive:
    "bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-500",
};

const sizeClasses = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
  xl: "h-14 px-8 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  leftIcon,
  rightIcon,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn("focus:ring-2",
"focus:ring-offset-2",
        "inline-flex",
        "items-center",
        "justify-center",
        "gap-2",
        "rounded-xl", "shadow-sm",
        "font-medium",
       "transition-all",
"duration-200",
"hover:scale-[1.02]",
"active:scale-[0.98]",
        "duration-200",
        "select-none",
        "cursor-pointer",
        "focus:outline-none",
        "focus:ring-offset-2",
        "disabled:opacity-50",
        "disabled:pointer-events-none",
        loading && "cursor-wait opacity-80",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading ? (
        <>
          <Spinner size="sm" />
          <span>Loading...</span>
        </>
      ) : (
        <>
          {leftIcon}
          {children}
          {rightIcon}
        </>
      )}
    </button>
  );
}