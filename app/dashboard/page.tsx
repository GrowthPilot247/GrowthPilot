import { DashboardHeader } from "@/app/features/dashboard/components/DashboardHeader";
import { GlobalSearch } from "@/app/features/dashboard/components/GlobalSearch";
import { KpiCard } from "@/app/features/dashboard/components/KpiCard";
import { RevenueChart } from "@/app/features/dashboard/components/RevenueChart";
import { AIAssistant } from "@/app/features/dashboard/components/AIAssistant";
import { AIInsightsWidget } from "@/app/features/dashboard/components/AIInsightsWidget";
import { QuickActions } from "@/app/features/dashboard/components/QuickActions";
import { NotificationCenter } from "@/app/features/dashboard/components/NotificationCenter";
import { CalendarWidget } from "@/app/features/dashboard/components/CalendarWidget";
import { RecentLeads } from "@/app/features/dashboard/components/RecentLeads";
import { SalesPipeline } from "@/app/features/dashboard/components/SalesPipeline";
import { TasksWidget } from "@/app/features/dashboard/components/TasksWidget";
import { TeamPerformanceWidget } from "@/app/features/dashboard/components/TeamPerformanceWidget";
import { GoalsWidget } from "@/app/features/dashboard/components/GoalsWidget";
import { ActivityFeed } from "@/app/features/dashboard/components/ActivityFeed";

import { dashboardData } from "@/app/features/dashboard/constants/mockDashboard";
import {
  recentSearches,
  searchResults,
} from "@/app/features/dashboard/constants/mockSearch";
import {
  notifications,
  calendarEvents,
  tasks,
} from "@/app/features/dashboard/constants/mockOperations";
import {
  recentLeads,
  pipelineStages,
} from "@/app/features/dashboard/constants/mockCRM";
import { teamMembers } from "@/app/features/dashboard/constants/mockPeople";
import { goals } from "@/app/features/dashboard/constants/mockStrategy";
import { aiInsights } from "@/app/features/dashboard/constants/mockAI";

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

      {/* Revenue + AI Assistant */}
      <section className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RevenueChart
            data={dashboardData.revenue}
          />
        </div>

        <AIAssistant />
      </section>

      {/* AI Insights */}
      <section className="mt-8">
        <AIInsightsWidget
          insights={aiInsights}
        />
      </section>

      {/* Quick Actions */}
      <section className="mt-8">
        <QuickActions />
      </section>

      {/* Operations */}
      <section className="mt-8 grid gap-6 xl:grid-cols-2">
        <NotificationCenter
          notifications={notifications}
        />

        <CalendarWidget
          events={calendarEvents}
        />
      </section>

      {/* CRM */}
      <section className="mt-8 grid gap-6 xl:grid-cols-2">
        <RecentLeads
          leads={recentLeads}
        />

        <SalesPipeline
          stages={pipelineStages}
        />
      </section>

      {/* Tasks + Team */}
      <section className="mt-8 grid gap-6 xl:grid-cols-2">
        <TasksWidget
          tasks={tasks}
        />

        <TeamPerformanceWidget
          members={teamMembers}
        />
      </section>

      {/* Strategy + Activity */}
      <section className="mt-8 grid gap-6 xl:grid-cols-2">
        <GoalsWidget
          goals={goals}
        />

        <ActivityFeed
          items={dashboardData.activities}
        />
      </section>
    </main>
  );
}