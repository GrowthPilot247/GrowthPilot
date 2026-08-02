import { BusinessHealthScore } from "./BusinessHealthScore";
import { ExecutiveInsights } from "./ExecutiveInsights";
import { ForecastCenter } from "./ForecastCenter";
import { BusinessTimeline } from "./BusinessTimeline";

export function ExecutiveWorkspace() {
  return (
    <section className="space-y-6">
      {/* Top Row */}
      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-1">
          <BusinessHealthScore />
        </div>

        <div className="xl:col-span-2">
          <ExecutiveInsights />
        </div>
      </div>

      {/* Forecast */}
      <ForecastCenter />

      {/* Timeline */}
      <BusinessTimeline />
    </section>
  );
}