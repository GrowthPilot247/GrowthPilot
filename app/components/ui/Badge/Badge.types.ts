import type { ReactNode } from "react";

export type BadgeVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error"
  | "neutral";

export interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  rounded?: boolean;
  className?: string;
}