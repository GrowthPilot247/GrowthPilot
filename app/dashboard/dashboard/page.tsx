import { dashboardData } from "@/features/dashboard/constants/mockDashboard";
import { KpiCard } from "@/features/dashboard/components/KpiCard";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <h1 className="mb-8 text-3xl font-bold">
        Dashboard
      </h1>

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
    </main>
  );
}