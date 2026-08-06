"use client";

import type { ReactNode } from "react";

interface EntityWorkspaceProps {
  header: ReactNode;
  search: ReactNode;
  filters: ReactNode;
  table: ReactNode;
  details?: ReactNode;
}

export function EntityWorkspace({
  header,
  search,
  filters,
  table,
  details,
}: EntityWorkspaceProps) {
  return (
    <section className="space-y-6">

      {header}

      {search}

      {filters}

      {table}

      {details}

    </section>
  );
}