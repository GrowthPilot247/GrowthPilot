import { ExecutiveHeader } from "@/app/components/layout/ExecutiveHeader";
import { DashboardGrid } from "@/app/components/ui/dashboard/DashboardGrid";
import { Widget } from "@/app/components/ui/dashboard/Widget";
import { WidgetHeader } from "@/app/components/ui/dashboard/WidgetHeader";
import { ExecutiveKPIs } from "./ExecutiveKPIs";

export function ExecutiveDashboard() {
  return (
    <div className="space-y-8">
      <ExecutiveHeader />

      <ExecutiveKPIs />

      <DashboardGrid>
        <Widget>
          <WidgetHeader
            title="Revenue Overview"
            description="Monthly recurring revenue performance"
          />

          <div className="flex h-64 items-center justify-center rounded-xl border border-dashed border-border text-muted-foreground">
            Revenue analytics chart coming next...
          </div>
        </Widget>
      </DashboardGrid>
    </div>
  );
}