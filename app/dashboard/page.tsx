import { DashboardHeader } from "@/app/features/dashboard/components/DashboardHeader";
import { dashboardData } from "@/app/features/dashboard/constants/mockDashboard";
import { KpiCard } from "@/app/features/dashboard/components/KpiCard";
import { ActivityFeed } from "@/app/features/dashboard/components/ActivityFeed";
import { RevenueChart } from "@/app/features/dashboard/components/RevenueChart";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <DashboardHeader
        title="Dashboard"
        userName="Mackson Alex"
      />

      {/* KPI Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {dashboardData.kpis.map((kpi) => (
          <KpiCard
            key={kpi.id}
            title={kpi.title}
            value={kpi.value}
            change={kpi.change}
            trend={kpi.trend}
          />
        ))}
      </div>

      {/* Dashboard Widgets */}
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RevenueChart
            data={dashboardData.revenue}
          />
        </div>

        <div>
          <ActivityFeed
            items={dashboardData.activities}
          />
        </div>
      </div>
    </main>
  );
}