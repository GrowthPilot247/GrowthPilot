import type { HTMLAttributes, ReactNode } from "react";

export type AlertVariant =
  | "success"
  | "error"
  | "warning"
  | "info";

export interface AlertProps
  extends HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;

  title?: ReactNode;

  children?: ReactNode;

  dismissible?: boolean;

  onDismiss?: () => void;
}