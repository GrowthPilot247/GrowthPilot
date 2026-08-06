import { StatCard } from "@/app/components/ui/dashboard/StatCard";

import { AIStatusBadge } from "./AIStatusBadge";
import { ExecutiveActions } from "./ExecutiveActions";
import { ExecutiveBrief } from "./ExecutiveBrief";
import { ExecutiveGreeting } from "./ExecutiveGreeting";
import { AuroraHeroProps } from "./AuroraHero.types";

export function AuroraHero({
  userName,
  companyName = "GrowthPilot",
  businessHealth,
  aiConfidence,
  executiveBrief,
}: AuroraHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-slate-700/40 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 p-10 text-white shadow-2xl">
      {/* Aurora Background */}
      <div className="absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-violet-500/20 blur-[100px]" />

      <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-blue-500/20 blur-[100px]" />

      <div className="relative z-10">
        <div className="grid gap-10 xl:grid-cols-[1.6fr_0.8fr]">
          {/* Left */}
          <div>
            <ExecutiveGreeting
              userName={userName}
              companyName={companyName}
            />

            <ExecutiveBrief
              executiveBrief={executiveBrief}
            />

            <ExecutiveActions />
          </div>

          {/* Right */}
          <div className="space-y-5">
            <AIStatusBadge
              lastUpdated="5 minutes ago"
            />

            <StatCard
              title="Business Health"
              value={`${businessHealth}%`}
              status="Excellent"
              description="Healthy operations across monitored business areas."
            />

            <StatCard
              title="AI Confidence"
              value={`${aiConfidence}%`}
              status="High Confidence"
              description="Business insights have been verified against recent signals."
            />
          </div>
        </div>
      </div>
    </section>
  );
}