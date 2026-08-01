import { ReactNode } from "react";

export interface TableColumn {
  key: string;
  title: string;
}

export interface TableRow {
  id: string | number;

  [key: string]: ReactNode;
}

export interface TableProps {
  columns: TableColumn[];

  rows: TableRow[];

  striped?: boolean;

  hover?: boolean;

  loading?: boolean;

  emptyMessage?: string;

  className?: string;
}