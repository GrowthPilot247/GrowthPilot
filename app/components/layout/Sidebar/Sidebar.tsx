"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Building2,
  Briefcase,
  FolderKanban,
  Calendar,
  BarChart3,
  GraduationCap,
  Store,
  Bot,
  Settings,
} from "lucide-react";

const navigation = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Leads",
    href: "/crm/leads",
    icon: Users,
  },
  {
    title: "Accounts",
    href: "/crm/accounts",
    icon: Building2,
  },
  {
    title: "Opportunities",
    href: "/crm/opportunities",
    icon: Briefcase,
  },
  {
    title: "Projects",
    href: "/projects",
    icon: FolderKanban,
  },
  {
    title: "Calendar",
    href: "/calendar",
    icon: Calendar,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Academy",
    href: "/academy",
    icon: GraduationCap,
  },
  {
    title: "Marketplace",
    href: "/marketplace",
    icon: Store,
  },
  {
    title: "AI Copilot",
    href: "/copilot",
    icon: Bot,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-border bg-card">
      {/* Logo */}
      <div className="border-b border-border p-6">
        <h1 className="text-2xl font-bold tracking-tight">
          GrowthPilot
        </h1>

        <p className="mt-1 text-sm text-muted-foreground">
          Business Growth OS
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 overflow-y-auto p-4">
        {navigation.map((item) => {
          const Icon = item.icon;

          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-200",
                active
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground",
              ].join(" ")}
            >
              <Icon className="h-5 w-5" />

              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-border p-4">
        <div className="rounded-lg bg-muted p-4">
          <p className="text-sm font-medium">
            GrowthPilot
          </p>

          <p className="mt-1 text-xs text-muted-foreground">
            AI-Powered Business Growth Operating System
          </p>
        </div>
      </div>
    </aside>
  );
}