import { dashboardData } from "@/app/features/dashboard/constants/mockDashboard";
import { KpiCard } from "@/app/features/dashboard/components/KpiCard";
import { ActivityFeed } from "@/app/features/dashboard/components/ActivityFeed";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <h1 className="mb-8 text-3xl font-bold">
        Dashboard
      </h1>

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
        {/* Revenue Chart Placeholder */}
        <div className="lg:col-span-2">
          <div className="flex h-96 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white text-slate-400">
            Revenue Chart (Coming Next)
          </div>
        </div>

        {/* Activity Feed */}
        <div>
          <ActivityFeed
            items={dashboardData.activities}
          />
        </div>
      </div>
    </main>
  );
}