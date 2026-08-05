import { ReactNode } from "react";

export interface WidgetProps {
  children: ReactNode;
  title?: string;
  description?: string;
  className?: string;
}