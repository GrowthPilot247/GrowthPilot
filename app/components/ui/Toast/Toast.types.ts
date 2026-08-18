import type { ReactNode } from "react";
export type ToastVariant =
  | "success"
  | "error"
  | "warning"
  | "info";

export interface ToastProps {
  title: string;

  description?: ReactNode;

  variant?: ToastVariant;

  open: boolean;

  onClose: () => void;

  duration?: number;

  className?: string;
}