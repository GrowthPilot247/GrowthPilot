import { StatCard } from "@/app/components/ui/dashboard/StatCard";

export function ExecutiveKPIs() {
  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Revenue"
        value="$4.28M"
        change="+12.4% this month"
        trend="up"
      />

      <StatCard
        title="Active Clients"
        value="1,248"
        change="+86 new clients"
        trend="up"
      />

      <StatCard
        title="Growth Rate"
        value="+18.2%"
        change="Above target"
        trend="up"
      />

      <StatCard
        title="AI Readiness"
        value="96%"
        change="Excellent"
        trend="neutral"
      />
    </section>
  );
}