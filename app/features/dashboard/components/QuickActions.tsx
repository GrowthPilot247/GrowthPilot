"use client";

import {
  Megaphone,
  UserPlus,
  FileText,
  Mail,
  BarChart3,
  Bot,
} from "lucide-react";

type QuickAction = {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
};

const actions: QuickAction[] = [
  {
    id: 1,
    title: "Create Campaign",
    description: "Launch a new marketing campaign",
    icon: Megaphone,
  },
  {
    id: 2,
    title: "Add Contact",
    description: "Create a new CRM contact",
    icon: UserPlus,
  },
  {
    id: 3,
    title: "Generate Proposal",
    description: "Create an AI-powered proposal",
    icon: FileText,
  },
  {
    id: 4,
    title: "Send Email",
    description: "Compose a marketing email",
    icon: Mail,
  },
  {
    id: 5,
    title: "View Reports",
    description: "Open business analytics",
    icon: BarChart3,
  },
  {
    id: 6,
    title: "Open AI Workspace",
    description: "Launch GrowthPilot AI",
    icon: Bot,
  },
];

export function QuickActions() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Quick Actions
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Frequently used business tools
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.id}
              type="button"
              className="flex items-start gap-4 rounded-lg border border-slate-200 bg-white p-4 text-left transition-all duration-200 hover:border-blue-500 hover:shadow-md"
            >
              <div className="rounded-lg bg-blue-50 p-3">
                <Icon className="h-5 w-5 text-blue-600" />
              </div>

              <div>
                <h3 className="font-medium text-slate-900">
                  {action.title}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {action.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}