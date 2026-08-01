import { DashboardHeader } from "@/app/features/dashboard/components/DashboardHeader";
import { dashboardData } from "@/app/features/dashboard/constants/mockDashboard";
import { KpiCard } from "@/app/features/dashboard/components/KpiCard";
import { ActivityFeed } from "@/app/features/dashboard/components/ActivityFeed";
import { RevenueChart } from "@/app/features/dashboard/components/RevenueChart";
import { AIAssistant } from "@/app/features/dashboard/components/AIAssistant";
import { QuickActions } from "@/app/features/dashboard/components/QuickActions";
import {
  NotificationCenter,
  NotificationItem,
} from "@/app/features/dashboard/components/NotificationCenter";
import {
  GlobalSearch,
  SearchResult,
} from "@/app/features/dashboard/components/GlobalSearch";
import {
  CalendarWidget,
  CalendarEvent,
} from "@/app/features/dashboard/components/CalendarWidget";
import {
  RecentLeads,
  Lead,
} from "@/app/features/dashboard/components/RecentLeads";
import {
  SalesPipeline,
  PipelineStage,
} from "@/app/features/dashboard/components/SalesPipeline";
import {
  TasksWidget,
  TaskItem,
} from "@/app/features/dashboard/components/TasksWidget";
import {
  TeamPerformanceWidget,
  TeamMember,
} from "@/app/features/dashboard/components/TeamPerformanceWidget";

const notifications: NotificationItem[] = [
  {
    id: "1",
    title: "Campaign Published",
    description: "Summer Growth Campaign is now live.",
    time: "5 min ago",
    type: "success",
  },
  {
    id: "2",
    title: "Revenue Target Alert",
    description: "Monthly revenue has reached 82% of target.",
    time: "30 min ago",
    type: "info",
  },
  {
    id: "3",
    title: "Subscription Renewal",
    description: "Your Pro plan renews in 3 days.",
    time: "Today",
    type: "warning",
  },
];

const searchResults: SearchResult[] = [
  {
    id: "1",
    title: "John Smith",
    category: "CRM Contact",
  },
  {
    id: "2",
    title: "Q3 Marketing Campaign",
    category: "Marketing",
  },
  {
    id: "3",
    title: "Revenue Analytics",
    category: "Reports",
  },
  {
    id: "4",
    title: "AI Proposal Generator",
    category: "AI Workspace",
  },
];

const recentSearches = [
  "Marketing Dashboard",
  "CRM Contacts",
  "Revenue Report",
];

const calendarEvents: CalendarEvent[] = [
  {
    id: "1",
    title: "Sales Team Meeting",
    date: "Today",
    time: "10:00 AM",
    category: "meeting",
  },
  {
    id: "2",
    title: "Launch Summer Campaign",
    date: "Tomorrow",
    time: "2:00 PM",
    category: "campaign",
  },
  {
    id: "3",
    title: "Renew Pro Subscription",
    date: "Aug 5",
    time: "9:00 AM",
    category: "billing",
  },
];

const recentLeads: Lead[] = [
  {
    id: "1",
    name: "John Smith",
    company: "Acme Inc.",
    owner: "Mackson Alex",
    value: 24000,
    status: "Qualified",
    lastActivity: "10 min ago",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    company: "TechLabs",
    owner: "Grace Adams",
    value: 12500,
    status: "New",
    lastActivity: "30 min ago",
  },
  {
    id: "3",
    name: "David Brown",
    company: "Growth Ltd",
    owner: "Daniel James",
    value: 45800,
    status: "Proposal Sent",
    lastActivity: "1 hour ago",
  },
];

const pipelineStages: PipelineStage[] = [
  {
    id: "1",
    stage: "New",
    deals: 18,
    value: 120000,
    progress: 24,
  },
  {
    id: "2",
    stage: "Qualified",
    deals: 14,
    value: 210000,
    progress: 46,
  },
  {
    id: "3",
    stage: "Proposal",
    deals: 8,
    value: 185000,
    progress: 32,
  },
  {
    id: "4",
    stage: "Negotiation",
    deals: 5,
    value: 140000,
    progress: 18,
  },
  {
    id: "5",
    stage: "Won",
    deals: 3,
    value: 95000,
    progress: 10,
  },
];

const tasks: TaskItem[] = [
  {
    id: "1",
    title: "Review Marketing Proposal",
    due: "Due Today",
    completed: false,
    priority: "High",
  },
  {
    id: "2",
    title: "Follow up with John Smith",
    due: "Tomorrow",
    completed: false,
    priority: "Medium",
  },
  {
    id: "3",
    title: "Update CRM Pipeline",
    due: "Completed",
    completed: true,
    priority: "Low",
  },
  {
    id: "4",
    title: "Approve Facebook Campaign",
    due: "Today",
    completed: false,
    priority: "High",
  },
];

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Mackson Alex",
    role: "Sales Manager",
    tasksCompleted: 42,
    performance: 96,
    trend: "up",
  },
  {
    id: "2",
    name: "Grace Adams",
    role: "Marketing Lead",
    tasksCompleted: 37,
    performance: 91,
    trend: "up",
  },
  {
    id: "3",
    name: "Daniel James",
    role: "CRM Specialist",
    tasksCompleted: 31,
    performance: 84,
    trend: "stable",
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <DashboardHeader title="Dashboard" userName="Mackson Alex" />

      <section className="mt-6">
        <GlobalSearch
          recentSearches={recentSearches}
          results={searchResults}
        />
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {dashboardData.kpis.map((kpi) => (
          <KpiCard
            key={kpi.id}
            title={kpi.title}
            value={kpi.value}
            change={kpi.change}
            trend={kpi.trend}
          />
        ))}
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RevenueChart data={dashboardData.revenue} />
        </div>

        <AIAssistant />
      </section>

      <section className="mt-8">
        <QuickActions />
      </section>

      <section className="mt-8 grid gap-6 xl:grid-cols-2">
        <NotificationCenter notifications={notifications} />
        <CalendarWidget events={calendarEvents} />
      </section>

      <section className="mt-8 grid gap-6 xl:grid-cols-2">
        <RecentLeads leads={recentLeads} />
        <SalesPipeline stages={pipelineStages} />
      </section>

      <section className="mt-8 grid gap-6 xl:grid-cols-2">
        <TasksWidget tasks={tasks} />
        <TeamPerformanceWidget members={teamMembers} />
      </section>

      <section className="mt-8">
        <ActivityFeed items={dashboardData.activities} />
      </section>
    </main>
  );
}