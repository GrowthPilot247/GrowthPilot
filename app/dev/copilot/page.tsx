import { ExecutiveCopilotPanel } from "@/app/features/dashboard/components/ExecutiveCopilot/ExecutiveCopilotPanel";

export default function CopilotLabPage() {
  return (
    <main className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl">
        <ExecutiveCopilotPanel />
      </div>
    </main>
  );
}