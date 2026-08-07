import { AuroraHero } from "@/app/features/dashboard/components/AuroraHero";
import { ExecutiveCopilotPanel } from "@/app/features/dashboard/components/ExecutiveCopilot";
import { ExecutiveAnalytics } from "@/app/features/dashboard/components/ExecutiveAnalytics";

export default function DashboardLabPage() {
  return (
    <main className="min-h-screen bg-slate-100">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-8">

        {/* Executive Hero */}
        <AuroraHero />

        {/* Executive Copilot */}
        <ExecutiveCopilotPanel />

        {/* Executive Analytics */}
        <ExecutiveAnalytics />

      </div>
    </main>
  );
}