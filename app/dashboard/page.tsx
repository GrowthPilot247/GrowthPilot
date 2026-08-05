import { ExecutiveHeader } from "@/app/components/layout/ExecutiveHeader";
import { DashboardGrid } from "@/app/components/ui/dashboard/DashboardGrid";
import { Widget } from "@/app/components/ui/dashboard/Widget";
import { WidgetHeader } from "@/app/components/ui/dashboard/WidgetHeader";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <ExecutiveHeader />

      <DashboardGrid>
        <Widget>
          <WidgetHeader
            title="Revenue"
            description="Monthly recurring revenue"
          />

          <p className="text-muted-foreground">
            Revenue widget placeholder
          </p>
        </Widget>
      </DashboardGrid>
    </div>
  );
}