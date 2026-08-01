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

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <DashboardHeader
        title="Dashboard"
        userName="Mackson Alex"
      />

      {/* KPI Cards */}
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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

      {/* Analytics + AI */}
      <section className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RevenueChart
            data={dashboardData.revenue}
          />
        </div>

        <div>
          <AIAssistant />
        </div>
      </section>

      {/* Quick Actions */}
      <section className="mt-8">
        <QuickActions />
      </section>

      {/* Notifications + Activity */}
      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <NotificationCenter
          notifications={notifications}
        />

        <ActivityFeed
          items={dashboardData.activities}
        />
      </section>
    </main>
  );
}