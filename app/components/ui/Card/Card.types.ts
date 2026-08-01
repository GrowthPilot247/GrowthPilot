import { HTMLAttributes, ReactNode } from "react";

export type CardVariant =
  | "default"
  | "outlined"
  | "elevated";

export interface CardProps
  extends HTMLAttributes<HTMLDivElement> {
  title?: ReactNode;
  subtitle?: ReactNode;
  footer?: ReactNode;

  variant?: CardVariant;

  hover?: boolean;

  padding?: "none" | "sm" | "md" | "lg";

  children: ReactNode;
}