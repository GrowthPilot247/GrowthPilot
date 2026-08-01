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

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <DashboardHeader
        title="Dashboard"
        userName="Mackson Alex"
      />

      {/* Global Search */}
      <section className="mt-6">
        <GlobalSearch
          recentSearches={recentSearches}
          results={searchResults}
        />
      </section>

      {/* KPI Cards */}
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

      {/* Revenue + AI */}
      <section className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RevenueChart data={dashboardData.revenue} />
        </div>

        <div>
          <AIAssistant />
        </div>
      </section>

      {/* Quick Actions */}
      <section className="mt-8">
        <QuickActions />
      </section>

      {/* Notifications + Calendar */}
      <section className="mt-8 grid gap-6 xl:grid-cols-2">
        <NotificationCenter notifications={notifications} />
        <CalendarWidget events={calendarEvents} />
      </section>

      {/* Recent Leads + Activity */}
      <section className="mt-8 grid gap-6 xl:grid-cols-2">
        <RecentLeads leads={recentLeads} />

        <ActivityFeed
          items={dashboardData.activities}
        />
      </section>
    </main>
  );
}