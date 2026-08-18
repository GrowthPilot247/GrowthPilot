import type { ReactNode } from "react";

export interface AccordionItem {
  id: string;
  title: ReactNode;
  content: ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  openItem?: string;
  onChange?: (id: string) => void;
  className?: string;
}