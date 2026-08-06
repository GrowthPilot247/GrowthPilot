import { Button } from "@/app/components/ui/Button";

export function ExecutiveActions() {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <Button>
        Executive Brief
      </Button>

      <Button variant="secondary">
        Run AI Analysis
      </Button>

      <Button variant="outline">
        Revenue Intelligence
      </Button>

      <Button variant="outline">
        Strategy Workspace
      </Button>
    </div>
  );
}