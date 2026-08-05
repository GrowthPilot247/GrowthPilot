import { ReactNode } from "react";

import { DashboardShell } from "@/app/components/layout/DashboardShell";

interface LayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: LayoutProps) {
  return (
    <DashboardShell>
      {children}
    </DashboardShell>
  );
}