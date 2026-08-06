import { cn } from "@/app/lib/cn";
import { Spinner } from "../Spinner";
import { InputProps } from "./Input.types";

const sizeClasses = {
  sm: "h-10 text-sm px-3",
  md: "h-11 text-sm px-4",
  lg: "h-12 text-base px-5",
};

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
  ...props
}: InputProps) {
  return (
    <div className="w-full space-y-2">
      {label && (
        <label className="block text-sm font-medium text-slate-700">
          {label}
          {required && (
            <span className="ml-1 text-red-500">*</span>
          )}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            {leftIcon}
          </div>
        )}

        <input
          className={cn(
            "w-full",
            "rounded-xl",
            "border",
            "border-slate-300",
            "bg-white",
            "shadow-sm",
            "outline-none",
            "transition-all",
            "duration-200",
            "focus:border-green-500",
            "focus:ring-2",
            "focus:ring-green-500/20",
            "disabled:bg-slate-100",
            "disabled:cursor-not-allowed",
            error && "border-red-500 focus:border-red-500",
            success && "border-green-500",
            leftIcon && "pl-10",
            rightIcon && "pr-10",
           sizeClasses[inputSize],
            className
          )}
          disabled={disabled || loading}
          {...props}
        />

        {loading ? (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <Spinner size="sm" />
          </div>
        ) : (
          rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              {rightIcon}
            </div>
          )
        )}
      </div>

      {error ? (
        <p className="text-sm text-red-500">
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