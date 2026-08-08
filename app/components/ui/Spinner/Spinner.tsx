import { cn } from "@/app/lib/cn";

export interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
} as const;

export function Spinner({
  size = "md",
  className,
}: SpinnerProps) {
  return (
    <span
      className={cn(
        "inline-block",
        "animate-spin",
        "rounded-full",
        "border-2",
        "border-current",
        "border-t-transparent",
        sizes[size],
        className
      )}
      aria-hidden="true"
    />
  );
}