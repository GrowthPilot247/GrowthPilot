import { AuroraHero } from "@/app/features/dashboard/components/AuroraHero";
import { ExecutiveInsights } from "@/app/features/dashboard/components/ExecutiveInsights";

export default function DashboardLabPage() {
  return (
    <main className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <AuroraHero
          userName="Mackson Alex"
          companyName="GrowthPilot"
          businessHealth={96}
          aiConfidence={98}
          executiveBrief="GrowthPilot AI has analyzed your business overnight. Revenue continues to trend upward, customer acquisition remains above target, and three executive decisions require your attention today."
        />

        <ExecutiveInsights />
      </div>
    </main>
  );
}