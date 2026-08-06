import { ReactNode } from "react";

export interface StatCardProps {
  title: string;

  value: string;

  change?: string;

  trend?: "up" | "down" | "neutral";

  /**
   * Optional business status.
   * Example:
   * Excellent
   * Healthy
   * Above Target
   */
  status?: string;

  /**
   * Small supporting description.
   */
  description?: string;

  /**
   * Optional icon displayed above the title.
   */
  icon?: ReactNode;

  /**
   * Footer text.
   * Example:
   * Updated 5 minutes ago
   */
  footer?: string;

  className?: string;
}