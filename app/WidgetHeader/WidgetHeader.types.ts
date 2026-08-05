import { ReactNode } from "react";

export interface WidgetHeaderProps {
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}