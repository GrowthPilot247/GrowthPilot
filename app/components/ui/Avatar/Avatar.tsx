import Image from "next/image";
import { cn } from "@/app/lib/cn";
import type { AvatarProps } from "./Avatar.types";

const sizes = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-14 w-14 text-lg",
  xl: "h-20 w-20 text-xl",
} as const;

const statusSizes = {
  sm: "h-2 w-2",
  md: "h-3 w-3",
  lg: "h-4 w-4",
  xl: "h-5 w-5",
} as const;

const statusStyles = {
  online: "bg-green-500",
  offline: "bg-slate-400",
  busy: "bg-red-500",
} as const;

export function Avatar({
  src,
  alt,
  name,
  size = "md",
  status,
  children,
  className,
}: AvatarProps) {
  const initials =
    name
      ?.split(" ")
      .filter(Boolean)
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "?";

  return (
    <div
      className={cn(
        "relative",
        "flex",
        "items-center",
        "justify-center",
        "overflow-hidden",
        "rounded-full",
        "bg-emerald-100",
        "font-semibold",
        "text-emerald-700",
        "shadow-sm",
        sizes[size],
        className
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt || name || "Avatar"}
          fill
          sizes="80px"
          className="object-cover"
        />
      ) : (
        children || initials
      )}

      {status && (
        <span
          className={cn(
            "absolute",
            "bottom-0",
            "right-0",
            "rounded-full",
            "border-2",
            "border-white",
            statusSizes[size],
            statusStyles[status]
          )}
          aria-label={`Status: ${status}`}
        />
      )}
    </div>
  );
}