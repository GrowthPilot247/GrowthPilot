"use client";

import { useId, useState } from "react";
import { cn } from "@/app/lib/cn";
import type { TooltipProps } from "./Tooltip.types";

const positions = {
  top: "bottom-full left-1/2 mb-2 -translate-x-1/2",
  bottom: "left-1/2 top-full mt-2 -translate-x-1/2",
  left: "right-full top-1/2 mr-2 -translate-y-1/2",
  right: "left-full top-1/2 ml-2 -translate-y-1/2",
} as const;

export function Tooltip({
  content,
  children,
  placement = "top",
  className,
}: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const tooltipId = useId();

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      <span aria-describedby={visible ? tooltipId : undefined}>
        {children}
      </span>

      {visible && (
        <div
          id={tooltipId}
          role="tooltip"
          className={cn(
            "absolute z-50 whitespace-nowrap",
            "rounded-lg bg-slate-900 px-3 py-2",
            "text-sm text-white shadow-lg",
            "transition-opacity duration-200",
            positions[placement],
            className
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
}